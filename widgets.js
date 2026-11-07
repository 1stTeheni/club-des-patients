/* Le Club des Patients — widgets interactifs (vanilla JS). Chaque widget : render(box, params, done, ctx)
   - box : élément où dessiner ; params : options du contenu ; done(info) : à appeler quand l'élève a fait ce qu'il faut.
   - ctx : { esc, toast, state, save } fournis par l'app. Zéro emoji. */
(function () {
  "use strict";
  const W = (window.WIDGETS = {});
  const fr = (n, d = 0) => Number(n).toLocaleString("fr-FR", { minimumFractionDigits: d, maximumFractionDigits: d });

  /* ---------- données de marché (Binance public, avec secours hors ligne) ---------- */
  function fetchT(url, ms = 6000) { const ac = new AbortController(); const t = setTimeout(() => ac.abort(), ms); return fetch(url, { signal: ac.signal }).finally(() => clearTimeout(t)); }
  const Data = (window.DATA = {
    cache: {},
    async klines(symbol = "BTCUSDT", interval = "1d", limit = 30) {
      const key = symbol + interval + limit;
      if (this.cache[key] && Date.now() - this.cache[key].t < 5 * 60e3) return this.cache[key].v;
      try {
        const r = await fetchT(`https://api.binance.com/api/v3/klines?symbol=${encodeURIComponent(symbol)}&interval=${encodeURIComponent(interval)}&limit=${limit}`);
        if (!r.ok) throw new Error(r.status);
        const k = await r.json(); if (!Array.isArray(k) || k.length < 5) throw new Error("vide");
        const v = { demo: false, candles: k.map(c => ({ t: c[0], o: +c[1], h: +c[2], l: +c[3], c: +c[4] })) };
        this.cache[key] = { t: Date.now(), v }; return v;
      } catch (e) { return { demo: true, candles: demoCandles(symbol + interval, limit) }; }
    },
    async depth(symbol = "BTCUSDT", limit = 5) {
      try {
        const r = await fetchT(`https://api.binance.com/api/v3/depth?symbol=${encodeURIComponent(symbol)}&limit=${limit}`);
        if (!r.ok) throw new Error(r.status);
        const d = await r.json(); if (!Array.isArray(d.asks) || !d.asks.length || !Array.isArray(d.bids) || !d.bids.length) throw new Error("vide"); return { demo: false, asks: d.asks, bids: d.bids };
      } catch (e) {
        return { demo: true, asks: [["100000.01", "1.2"], ["100000.02", "0.8"], ["100000.05", "3.9"], ["100000.08", "0.4"], ["100000.10", "0.7"]], bids: [["100000.00", "0.9"], ["99999.99", "2.1"], ["99999.95", "0.6"], ["99999.90", "5.2"], ["99999.80", "1.1"]] };
      }
    }
  });
  function demoCandles(seed, n) {
    let s = 0; for (const ch of seed) s = (s * 31 + ch.charCodeAt(0)) % 100000;
    const rnd = () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
    let p = 100000; const out = []; const day = 864e5; const t0 = Date.now() - n * day;
    for (let i = 0; i < n; i++) { const o = p; const m = (rnd() - 0.48) * 0.06; const c = o * (1 + m); const h = Math.max(o, c) * (1 + rnd() * 0.025); const l = Math.min(o, c) * (1 - rnd() * 0.025); out.push({ t: t0 + i * day, o, h, l, c }); p = c; }
    return out;
  }
  W.demoNote = () => `<p class="mini warn">Pas de connexion : voici des bougies d'exemple. Avec Internet, l'app montre les vraies.</p>`;

  /* ---------- dessin des bougies ---------- */
  function drawCandles(cv, cs, opt = {}) {
    const dpr = window.devicePixelRatio || 1; cv.width = Math.round(cv.clientWidth * dpr); cv.height = Math.round(cv.clientHeight * dpr);
    const ctx = cv.getContext("2d"), Wd = cv.width, H = cv.height, pad = 12 * dpr;
    const hi = Math.max(...cs.map(c => c.h)), lo = Math.min(...cs.map(c => c.l)); const y = v => pad + (hi - v) / (hi - lo || 1) * (H - 2 * pad);
    const w = (Wd - 2 * pad) / cs.length; ctx.clearRect(0, 0, Wd, H);
    cs.forEach((c, i) => {
      const x = pad + i * w + w / 2; const up = c.c >= c.o;
      if (opt.mark && opt.mark[i]) { ctx.fillStyle = opt.mark[i] === "ok" ? "rgba(34,120,70,.18)" : opt.mark[i] === "ko" ? "rgba(200,85,43,.18)" : "rgba(29,51,80,.12)"; ctx.fillRect(x - w / 2, 0, w, H); }
      ctx.strokeStyle = ctx.fillStyle = up ? "#227846" : "#C8552B"; ctx.lineWidth = 1.5 * dpr;
      ctx.beginPath(); ctx.moveTo(x, y(c.h)); ctx.lineTo(x, y(c.l)); ctx.stroke();
      const top = y(Math.max(c.o, c.c)), bh = Math.max(2 * dpr, Math.abs(y(c.o) - y(c.c))); ctx.fillRect(x - w * 0.3, top, w * 0.6, bh);
    });
    cv._geo = { pad, w, n: cs.length, dpr };
  }
  function candleIndexAt(cv, ev) { const g = cv._geo; if (!g) return -1; const r = cv.getBoundingClientRect(); const x = (ev.clientX - r.left) * g.dpr; const i = Math.floor((x - g.pad) / g.w); return i >= 0 && i < g.n ? i : -1; }
  W.drawCandles = drawCandles;

  /* ---------- les deux règles de la Porte 1 : énoncé unique + code unique (app.js les réutilise) ---------- */
  W.RULE5 = "Prends l'ouverture de la première des 5 et la clôture de la dernière. D'abord : si la différence, en plus ou en moins, fait moins de 1 % de l'ouverture (moins de 5 F sur 500 F, que ce soit 504 ou 496), c'est partagé. Sinon : clôture au-dessus = les acheteurs ont gagné ; en dessous = les vendeurs.";
  W.RULE30 = "Le plus haut touché sur les 15 bougies récentes est-il au-dessus du plus haut touché sur les 15 anciennes ? ET le plus bas touché sur les 15 récentes est-il au-dessus du plus bas des 15 anciennes ? Deux fois oui = hausse. Deux fois en dessous = baisse. Sinon = range.";
  W.METEO_NOTE = "La météo décrit ce qui s'est passé. Elle ne dit jamais « achète ».";
  const px = v => fr(v, v < 100 ? 2 : 0);
  const cmp = (b, a) => b > a ? "au-dessus" : b < a ? "en dessous" : "pareil";
  /* Règle 1 (5 bougies) : d'abord le test « partagé » (|clôture − ouverture| < 1 % de l'ouverture), puis le signe. */
  W.judge5 = cs => { const l5 = cs.slice(-5); const o = l5[0].o, c = l5[l5.length - 1].c; const diff = c - o; const partage = Math.abs(diff) < 0.01 * o; const who = partage ? "partagé" : diff > 0 ? "acheteurs" : "vendeurs"; return { who, o, c, diff, pct: 100 * diff / o }; };
  /* Règle 2 (30 bougies) : max des 15 récentes contre max des 15 anciennes, puis min contre min. */
  W.judge30 = cs => { const b = cs.slice(-15), a = cs.slice(-30, -15); const hiA = Math.max(...a.map(c => c.h)), loA = Math.min(...a.map(c => c.l)), hiB = Math.max(...b.map(c => c.h)), loB = Math.min(...b.map(c => c.l)); const sens = hiB > hiA && loB > loA ? "hausse" : hiB < hiA && loB < loA ? "baisse" : "range"; return { sens, hiA, loA, hiB, loB }; };
  W.explain5 = J => `Ouverture de la première des 5 : ${px(J.o)}. Clôture de la dernière : ${px(J.c)}. Différence : ${J.diff < 0 ? "−" : ""}${px(Math.abs(J.diff))}, soit ${fr(Math.abs(J.pct), 2)} % de l'ouverture : ${J.who === "partagé" ? "moins de 1 %, donc partagé" : J.diff > 0 ? "clôture au-dessus, donc les acheteurs ont gagné" : "clôture en dessous, donc les vendeurs ont gagné"}.`;
  W.explain30 = J => `Plus haut des 15 récentes : ${px(J.hiB)}, contre ${px(J.hiA)} pour les 15 anciennes : ${cmp(J.hiB, J.hiA)}. Plus bas des 15 récentes : ${px(J.loB)}, contre ${px(J.loA)} : ${cmp(J.loB, J.loA)}.`;
  W.hint30 = (J, choice) => {
    if (!choice || choice === J.sens) return "";
    let look;
    if (J.sens === "hausse") look = "le plus haut ET le plus bas des 15 récentes : tous les deux au-dessus, deux fois oui";
    else if (J.sens === "baisse") look = "le plus haut ET le plus bas des 15 récentes : tous les deux en dessous, deux fois en dessous";
    else if (choice === "hausse") look = J.hiB > J.hiA ? "le plus bas des 15 récentes : il n'est pas au-dessus" : "le plus haut des 15 récentes : il n'est pas au-dessus";
    else look = J.hiB < J.hiA ? "le plus bas des 15 récentes : il n'est pas en dessous" : "le plus haut des 15 récentes : il n'est pas en dessous";
    return `La règle dit ${J.sens} ; toi, tu as vu ${choice} : regarde ${look}.`;
  };

  /* ---------- moussa : curseur pressé ---------- */
  W.moussa = (box, p, done, ctx) => {
    box.innerHTML = `<p class="mini">Glisse le curseur : c'est le monde au marché, du matin (plein) au soir (il se vide). Puis Moussa, pressé, achète et revend tout de suite.</p>
      <input type="range" id="w_hurry" min="0" max="100" value="100"><div class="row" style="justify-content:space-between"><span class="mini">Matin, marché plein</span><span class="mini">Soir, marché qui se vide</span></div>
      <div class="prices"><div class="price bid"><small>Prix acheteur (bid) : Awa te reprend à</small><b id="w_bid">450</b><small>francs</small></div><div class="price ask"><small>Prix vendeur (ask) : Awa te vend à</small><b id="w_ask">500</b><small>francs</small></div></div>
      <div class="spreadbar">Écart (spread) : <span id="w_sp">50</span> francs</div>
      <button class="btn wide" id="w_go">Acheter puis revendre tout de suite</button><div class="loss" id="w_loss"></div>`;
    const h = box.querySelector("#w_hurry"); let moved = false;
    /* À droite (soir, le marché se vide) : les prix d'Awa, 500 / 450, écart 50 F. À gauche (matin, marché plein) : 482 / 478, écart 4 F. */
    const upd = () => { const q = +h.value / 100; const ask = Math.round(482 + 18 * q), bid = Math.round(478 - 28 * q); box.querySelector("#w_ask").textContent = ask; box.querySelector("#w_bid").textContent = bid; box.querySelector("#w_sp").textContent = ask - bid; box.querySelector("#w_loss").textContent = ""; moved = true; };
    h.addEventListener("input", upd);
    box.querySelector("#w_go").addEventListener("click", () => { const l = +box.querySelector("#w_ask").textContent - +box.querySelector("#w_bid").textContent; box.querySelector("#w_loss").textContent = l <= 8 ? "Marché plein : l'écart est tout petit, " + l + " F. Moussa, pressé, perd seulement " + l + " francs." : "Les deux prix n'ont pas bougé. Moussa, pressé, a perdu " + l + " francs : l'écart. Plus le marché se vide, plus l'écart est grand."; done({ moved }); });
  };

  /* ---------- book : vrai carnet d'ordres ---------- */
  W.book = async (box, p, done, ctx) => {
    const levels = p.levels || 4; box.innerHTML = `<p class="muted">Chargement du carnet…</p>`;
    const d = await Data.depth("BTCUSDT", Math.max(levels, 5));
    const asks = d.asks.slice(0, levels).reverse(), bids = d.bids.slice(0, levels); const all = [...asks, ...bids]; const mx = Math.max(...all.map(x => +x[1]));
    const wallIdx = all.reduce((b, x, i) => (+x[1] > +all[b][1] ? i : b), 0); const qs = all.map(x => +x[1]).sort((a, b) => a - b); const med = qs[Math.floor(qs.length / 2)] || 0; const hasWall = +all[wallIdx][1] >= 2.5 * med;
    const row = (x, cls, i) => `<div class="r ${cls}" data-i="${i}"><i style="width:${Math.round(100 * +x[1] / mx)}%"></i><span>${fr(+x[0], 2)}</span><span>${(+x[1]).toFixed(3)} BTC</span></div>`;
    const sp = (+asks[asks.length - 1][0] - +bids[0][0]);
    box.innerHTML = (d.demo ? `<p class="mini warn">Pas de connexion : carnet d'exemple.</p>` : "") + `<div class="book">` + asks.map((x, i) => row(x, "ask", i)).join("") + `<div class="mid">écart : ${fr(sp, 2)} USDT</div>` + bids.map((x, i) => row(x, "bid", asks.length + i)).join("") + `</div>
      <p class="mini">Le vrai carnet d'ordres d'une bourse crypto, en direct. En rouge, en haut : les vendeurs qui attendent, chacun à son prix (le premier = prix vendeur, ask). En vert, en bas : les acheteurs qui attendent (le premier = prix acheteur, bid). La barre montre combien de Bitcoin attendent à chaque prix.</p>` +
      (p.wall ? `<div class="reveal"><b>Où est le mur ?</b> Touche la ligne où attend la plus grosse quantité. Si toutes se ressemblent, l'app te le dira : pas de mur aujourd'hui.</div><div id="w_fb"></div>` : "");
    if (!p.wall) { done({}); return; }
    box.querySelectorAll(".book .r").forEach(r => r.addEventListener("click", () => {
      const i = +r.dataset.i; const fb = box.querySelector("#w_fb");
      if (i === wallIdx) { r.classList.add("hit"); fb.innerHTML = hasWall ? `<div class="reveal ok">Oui : ${(+all[i][1]).toFixed(3)} BTC attendent à ${fr(+all[i][0], 2)}, bien plus que les autres lignes. Pour passer ce prix, il faut que quelqu'un achète (ou vende) tout ce paquet. C'est un mur.</div>` : `<div class="reveal ok">C'est la plus grosse ligne (${(+all[i][1]).toFixed(3)} BTC), mais elle ressemble aux autres : pas de vrai mur aujourd'hui. Un mur, c'est une ligne qui écrase les autres. Reviens un autre jour, le carnet change tout le temps.</div>`; done({ found: true, hasWall }); }
      else fb.innerHTML = `<div class="reveal ko">Pas celle-là : regarde la longueur des barres, la plus longue est la plus grosse quantité.</div>`;
    }));
  };

  /* ---------- queue : qui fait bouger le prix ---------- */
  W.queue = (box, p, done, ctx) => {
    let price = p.start || 300; const unit = ctx.esc(p.unit || "francs"); let n = 0; const log = [];
    box.innerHTML = `<div class="pricebig">Prix : <b id="w_price">${fr(price)}</b> ${unit}</div>
      <div class="row"><button class="btn" id="w_buy">Un acheteur pressé arrive</button><button class="btn ghost" id="w_sell">Un vendeur pressé arrive</button><button class="btn ghost" id="w_calm">Personne n'est pressé</button></div>
      <div id="w_log"></div>`;
    const show = (msg, cls) => { log.unshift(`<div class="reveal ${cls}">${msg}</div>`); box.querySelector("#w_log").innerHTML = log.slice(0, 4).join(""); box.querySelector("#w_price").textContent = fr(price); n++; if (n >= 3) done({ n }); };
    box.querySelector("#w_buy").addEventListener("click", () => { price += 10; show(`L'acheteur pressé ne veut pas attendre. Il accepte le prix vendeur. Le prix monte à ${fr(price)} ${unit}.`, "ok"); });
    box.querySelector("#w_sell").addEventListener("click", () => { price -= 10; show(`Le vendeur pressé ne veut pas attendre. Il accepte le prix acheteur. Le prix descend à ${fr(price)} ${unit}.`, "ko"); });
    box.querySelector("#w_calm").addEventListener("click", () => { show(`Chacun attend à son prix. Personne ne cède. Le prix reste à ${fr(price)} ${unit}.`, ""); });
  };

  /* ---------- wall : Moussa mange le mur ---------- */
  W.wall = (box, p, done, ctx) => {
    const unit = ctx.esc(p.unit || "boules"); const wallQty = p.wallQty || 200; const buy = p.buy || 50;
    const levels = (p.levels || [[500, 20], [510, 30], [520, 50], [530, wallQty, true], [540, 40]]).map(l => ({ px: l[0], q: l[1], wall: !!l[2] }));
    const wallPx = (levels.find(l => l.wall) || {}).px; let bought = 0; const want = p.want || 100; const wanted = levels[0].px;
    const takes = []; /* ce que Moussa a payé, ligne par ligne : { px, q } */
    const addTake = (pxv, q) => { const t = takes[takes.length - 1]; if (t && t.px === pxv) t.q += q; else takes.push({ px: pxv, q }); };
    /* Le calcul posé, pour les n premières boules : 20 × 500 = 10 000 ; 30 × 510 = 15 300 ; 50 × 520 = 26 000 ; 51 300 ÷ 100 = 513. */
    const one = unit === "boules" ? "la boule" : "l'unité"; const n1 = v => fr(v, v % 1 ? 1 : 0);
    const calc = n => { let left = n, tot = 0, got = 0; const lines = []; for (const t of takes) { if (left <= 0) break; const q = Math.min(left, t.q); lines.push(`${q} × ${fr(t.px)} = ${fr(q * t.px)}`); tot += q * t.px; got += q; left -= q; } if (!got) return ""; const avg = tot / got; return `<b>Le calcul :</b> ${lines.join(" ; ")}. En tout : ${fr(tot)} F pour ${got} ${unit}. ${fr(tot)} ÷ ${got} = ${n1(avg)} F ${one}.${got >= want ? ` Il voulait payer ${fr(wanted)} : ${n1(avg)} − ${fr(wanted)} = ${n1(avg - wanted)} F de plus ${one === "la boule" ? "par boule" : "par unité"}.` : ""}`; };
    const render = () => {
      const first = levels.find(l => l.q > 0);
      box.innerHTML = `<p class="mini">Le carnet d'ordres côté vendeurs : chaque ligne, un prix vendeur et la quantité qui attend, du moins cher (en bas) au plus cher (en haut). La ligne énorme, c'est le mur : la grossiste d'Anyama.</p>
        <div class="book">${levels.slice().reverse().map(l => `<div class="r ask ${l.wall ? "wallrow" : ""} ${l.q === 0 ? "gone" : ""}"><i style="width:${Math.round(100 * l.q / wallQty)}%"></i><span>${fr(l.px)} francs</span><span>${l.q} ${unit}${l.wall ? " (le mur)" : ""}</span></div>`).join("")}</div>
        <div class="pricebig">Meilleur prix vendeur : <b>${first ? fr(first.px) : "—"}</b> francs</div><p class="mini">Le prix, c'est le dernier échange. Le meilleur prix vendeur, c'est ce que paiera le prochain acheteur pressé.</p>
        <button class="btn wide" id="w_eat">Moussa achète ${buy} ${unit}</button><div id="w_msg"></div>`;
      box.querySelector("#w_eat").addEventListener("click", () => {
        let left = buy; let crossed = false;
        for (const l of levels) { if (left <= 0) break; const take = Math.min(left, l.q); if (take > 0) addTake(l.px, take); l.q -= take; left -= take; if (l.wall && l.q === 0) crossed = true; }
        bought += buy - left; render();
        const m = box.querySelector("#w_msg"); const now = levels.find(l => l.q > 0); const paid = calc(Math.min(bought, want)); const paidAll = bought > want ? `<br>Moussa a continué après ses ${want} ${unit} : ${bought} ${unit} en tout.` : "";
        if (crossed) { m.innerHTML = `<div class="reveal ok">Le mur est vidé. D'un coup, le meilleur prix vendeur saute à ${now ? fr(now.px) : "plus haut"} francs. Tant que le mur tenait, le prix ne pouvait pas passer.<br>${paid}${paidAll}</div>`; done({ bought }); }
        else if (now && now.wall) m.innerHTML = `<div class="reveal">Moussa est arrivé au mur. Il reste ${now.q} ${unit} à ${fr(wallPx)} francs. Le meilleur prix vendeur ne bouge plus tant que cette ligne n'est pas vidée.<br>${paid}${paidAll}</div>`;
        else if (!now) m.innerHTML = `<div class="reveal">Plus rien à vendre. Il faut attendre de nouveaux vendeurs.<br>${paid}${paidAll}</div>`;
        else m.innerHTML = `<div class="reveal">Moussa a pris les ${unit} les moins chères. Le meilleur prix vendeur monte à ${fr(now.px)} francs : le prochain pressé paiera plus.<br>${paid}</div>`;
      });
    };
    render();
  };

  /* ---------- candle : anatomie d'une bougie ---------- */
  W.candle = (box, p, done, ctx) => {
    const d0 = p.day || { o: 300, h: 340, l: 280, c: 330 }; const unit = ctx.esc(p.unit || "francs"); let d = { ...d0 }; const seen = new Set();
    const parts = [["o", "Ouverture", "Le premier prix de la journée. Là où la journée commence."], ["h", "Plus haut", "Le prix le plus haut touché dans la journée. Le bout de la mèche du haut."], ["l", "Plus bas", "Le prix le plus bas touché dans la journée. Le bout de la mèche du bas."], ["c", "Clôture", "Le dernier prix de la journée. Là où la journée finit."], ["body", "Corps", "Le rectangle entre l'ouverture et la clôture. Vert si la journée finit plus haut qu'elle a commencé, rouge sinon."], ["wick", "Mèche", "Les traits fins au-dessus et au-dessous du corps. Le prix est allé là, mais il n'y est pas resté : il a été refusé."]];
    box.innerHTML = `<div class="candlewrap"><canvas id="w_cv" class="candlecv"></canvas><div id="w_lbl" class="candlelbl"></div></div>
      <div class="row" id="w_parts">${parts.map(x => `<button class="btn small ghost" data-k="${x[0]}">${x[1]}</button>`).join("")}</div>
      <div class="reveal" id="w_txt">Touche une partie de la bougie pour savoir ce qu'elle veut dire.</div>
      <button class="btn small" id="w_flip">Et si la journée avait fini plus bas ? (journée rouge)</button>`;
    const cv = box.querySelector("#w_cv"); let hl = null;
    function draw() {
      const dpr = window.devicePixelRatio || 1; cv.width = cv.clientWidth * dpr; cv.height = cv.clientHeight * dpr; const g = cv.getContext("2d"); const H = cv.height, Wd = cv.width;
      const hi = d.h + 10, lo = d.l - 10; const y = v => 20 * dpr + (hi - v) / (hi - lo) * (H - 40 * dpr); const x = Wd * 0.38; const bw = Wd * 0.2;
      g.clearRect(0, 0, Wd, H); const up = d.c >= d.o; const col = up ? "#227846" : "#C8552B";
      g.strokeStyle = col; g.lineWidth = 4 * dpr; g.beginPath(); g.moveTo(x, y(d.h)); g.lineTo(x, y(d.l)); g.stroke();
      g.fillStyle = col; g.fillRect(x - bw / 2, y(Math.max(d.o, d.c)), bw, Math.max(3 * dpr, Math.abs(y(d.o) - y(d.c))));
      g.font = `${13 * dpr}px -apple-system,Segoe UI,Roboto,sans-serif`; g.textAlign = "left"; g.fillStyle = "#1D3350";
      const lab = (v, t) => { g.fillText(`${t} ${fr(v)}`, x + bw / 2 + 10 * dpr, y(v) + 4 * dpr); };
      lab(d.h, "Plus haut"); lab(d.l, "Plus bas"); lab(d.o, "Ouverture"); lab(d.c, "Clôture");
      if (hl) { g.strokeStyle = "#1D3350"; g.lineWidth = 2 * dpr; g.setLineDash([6 * dpr, 4 * dpr]);
        if (hl === "body") g.strokeRect(x - bw / 2 - 6 * dpr, y(Math.max(d.o, d.c)) - 6 * dpr, bw + 12 * dpr, Math.abs(y(d.o) - y(d.c)) + 12 * dpr);
        else if (hl === "wick") { g.strokeRect(x - 10 * dpr, y(d.h) - 6 * dpr, 20 * dpr, y(Math.max(d.o, d.c)) - y(d.h) + 6 * dpr); g.strokeRect(x - 10 * dpr, y(Math.min(d.o, d.c)), 20 * dpr, y(d.l) - y(Math.min(d.o, d.c)) + 6 * dpr); }
        else { const v = d[hl]; g.beginPath(); g.moveTo(x - bw, y(v)); g.lineTo(x + bw / 2 + 6 * dpr, y(v)); g.stroke(); }
        g.setLineDash([]); }
    }
    draw(); window.addEventListener("resize", draw);
    box.querySelectorAll("[data-k]").forEach(b => b.addEventListener("click", () => { hl = b.dataset.k; const pt = parts.find(x => x[0] === hl); box.querySelector("#w_txt").innerHTML = `<b>${pt[1]}</b> : ${pt[2]}`; seen.add(hl); draw(); b.classList.add("seen"); if (seen.size >= parts.length) done({ seen: parts.length }); }));
    box.querySelector("#w_flip").addEventListener("click", e => { d = d.c >= d.o ? { ...d, o: d0.c, c: d0.o } : { ...d0 }; e.target.textContent = d.c >= d.o ? "Et si la journée avait fini plus bas ? (journée rouge)" : "Revenir à la journée verte"; box.querySelector("#w_txt").innerHTML = d.c >= d.o ? "Journée verte : la clôture est au-dessus de l'ouverture. Les acheteurs ont gagné la journée." : "Journée rouge : la clôture est en dessous de l'ouverture. Les vendeurs ont gagné la journée. Mêmes plus haut et plus bas, autre histoire."; draw(); });
  };

  /* ---------- candles : regarder, ou Chasse aux mèches ---------- */
  W.candles = async (box, p, done, ctx) => {
    box.innerHTML = `<p class="muted">Chargement des 30 derniers jours…</p>`;
    const sym = p.symbol || "BTCUSDT"; const d = await Data.klines(sym, "1d", 30); const cs = d.candles;
    const wick = c => Math.max(c.h - Math.max(c.o, c.c), Math.min(c.o, c.c) - c.l);
    const targets = cs.map((c, i) => [wick(c), i]).sort((a, b) => b[0] - a[0]).slice(0, 5).map(x => x[1]);
    const mark = {}; let found = 0, tries = 0, score = 0, pending = null;
    box.innerHTML = (d.demo ? W.demoNote() : "") + `<canvas id="w_cv" class="chart"></canvas><p class="mini">${ctx.esc(sym.replace("USDT", "/USDT"))}, 1 jour, 30 bougies. Dernier prix : ${fr(cs[cs.length - 1].c)} USDT.</p>` +
      (p.mode === "hunt" ? `<div class="reveal"><b>Chasse aux mèches.</b> Touche les 5 bougies aux plus longues mèches. Pour chacune, dis ce qui a été refusé. <span id="w_sc">0 / 5</span></div><div id="w_q"></div>` : "");
    const cv = box.querySelector("#w_cv"); const redraw = () => drawCandles(cv, cs, { mark }); redraw(); window.addEventListener("resize", redraw);
    if (p.mode !== "hunt") { done({}); return; }
    let ended = false;
    const finish = () => { if (ended) return; ended = true; done({ score, found }); box.querySelector("#w_q").innerHTML = `<div class="reveal ${score >= 4 ? "ok" : ""}"><b>Résultat : ${score} / 5.</b> ${score === 5 ? "Parfait. Tu lis une bougie comme un refus, pas comme un dessin." : score >= 3 ? "Bien. Une longue mèche, c'est un prix que le marché a essayé, puis refusé." : "Regarde les traits fins : les plus longs sont les refus les plus nets. Tu peux refaire la chasse dans Jeux."}</div>`; if (score === 5) ctx.badge("oeil"); };
    cv.addEventListener("click", ev => {
      if (ended || pending !== null || found >= 5) return; const i = candleIndexAt(cv, ev); if (i < 0 || mark[i]) return; tries++;
      if (!targets.includes(i)) { mark[i] = "miss"; redraw(); box.querySelector("#w_q").innerHTML = `<div class="reveal ko">Cette mèche est courte. Cherche les traits fins les plus longs.</div>`; if (tries >= 12 && found < 5) { finish(); } return; }
      pending = i; mark[i] = "sel"; redraw(); const c = cs[i]; const upper = c.h - Math.max(c.o, c.c) >= Math.min(c.o, c.c) - c.l;
      box.querySelector("#w_q").innerHTML = `<div class="reveal"><b>Bougie trouvée.</b> Qu'est-ce qui a été refusé ?<div class="row" style="margin-top:8px"><button class="btn small" data-s="up">Le haut : personne n'a voulu payer plus</button><button class="btn small ghost" data-s="dn">Le bas : personne n'a voulu vendre moins</button></div></div>`;
      box.querySelectorAll("[data-s]").forEach(b => b.addEventListener("click", () => {
        const right = (b.dataset.s === "up") === upper; found++; if (right) score++; mark[i] = right ? "ok" : "ko"; pending = null; redraw();
        box.querySelector("#w_sc").textContent = `${score} / 5`;
        box.querySelector("#w_q").innerHTML = `<div class="reveal ${right ? "ok" : "ko"}">${right ? "Oui." : "Non."} Le côté refusé, c'est le côté de la mèche la plus longue : ici ${upper ? "en haut : le prix est monté, puis personne n'a voulu payer plus" : "en bas : le prix est descendu, puis personne n'a voulu vendre moins"}.</div>`;
        if (found >= 5) setTimeout(finish, 900);
      }));
    });
  };

  /* ---------- timeframes : 1 jour / 4 heures / 1 heure ---------- */
  W.timeframes = async (box, p, done, ctx) => {
    const tf = [["1d", "1 jour", "Une bougie = une journée. 30 bougies = 30 jours. C'est ici qu'on décide la direction."], ["4h", "4 heures", "Une bougie = 4 heures, 6 par jour. 30 bougies = 5 jours. Plus de détail, même marché."], ["15m", "15 minutes", "Une bougie = 15 minutes, 96 par jour. 30 bougies = 7 heures et demie. Beaucoup de bruit, peu d'information."]]; const seen = new Set();
    box.innerHTML = `<div class="choice">${tf.map(t => `<button data-tf="${t[0]}">${t[1]}</button>`).join("")}</div><canvas id="w_cv" class="chart"></canvas><p class="mini" id="w_cap">Choisis une unité de temps.</p>`;
    const cv = box.querySelector("#w_cv"); let cur = null;
    async function show(k) { cur = k; const t = tf.find(x => x[0] === k); box.querySelectorAll("[data-tf]").forEach(b => b.classList.toggle("sel", b.dataset.tf === k)); box.querySelector("#w_cap").textContent = "Chargement…"; const d = await Data.klines("BTCUSDT", k, 30); if (cur !== k) return; drawCandles(cv, d.candles); box.querySelector("#w_cap").textContent = `${t[1]} : ${t[2]}` + (d.demo ? " (données d'exemple, pas de connexion)" : ""); seen.add(k); if (seen.size === 3) done({}); }
    box.querySelectorAll("[data-tf]").forEach(b => b.addEventListener("click", () => show(b.dataset.tf))); show("1d");
  };

  /* ---------- fees : calculatrice des coûts ---------- */
  W.fees = (box, p, done, ctx) => {
    const feePct = p.feePct == null ? 0.1 : p.feePct, spreadPct = p.spreadPct == null ? 0 : p.spreadPct; let touched = false;
    const pc = v => String(v).replace(".", ","); /* 0.1 → « 0,1 % » (jamais « 0,10 % ») */
    const perPk = feePct * 10; /* frais par paquet de 1 000 F : 0,1 % → 1 F */
    box.innerHTML = `<label>Montant de ton trade papier (glisse le curseur)</label><input type="range" id="w_amt" min="15000" max="100000" step="5000" value="20000"><div class="pricebig"><b id="w_amtV"></b> francs</div>
      <table class="tbl"><tr><td>Frais à l'achat (${pc(feePct)} %)</td><td id="w_f1"></td></tr><tr><td>Frais à la vente (${pc(feePct)} %)</td><td id="w_f2"></td></tr><tr><td>Écart (spread)${spreadPct ? " : " + pc(spreadPct) + " %" : ", presque nul sur le Bitcoin"}</td><td id="w_sp"></td></tr><tr><th>Total payé sans que le prix bouge</th><th id="w_tot"></th></tr></table>
      <div class="reveal" id="w_calc"></div><div class="reveal" id="w_need"></div>`;
    const a = box.querySelector("#w_amt");
    const upd = () => {
      const amt = +a.value; const f = amt * feePct / 100, s = amt * spreadPct / 100, tot = 2 * f + s; const pk = amt / 1000;
      box.querySelector("#w_amtV").textContent = fr(amt); box.querySelector("#w_f1").textContent = fr(f) + " F"; box.querySelector("#w_f2").textContent = fr(f) + " F"; box.querySelector("#w_sp").textContent = fr(s) + " F"; box.querySelector("#w_tot").textContent = fr(tot) + " F";
      box.querySelector("#w_calc").innerHTML = `<b>Le calcul, par paquets de 1 000 F :</b> ${fr(amt)} F, c'est ${fr(pk)} paquets de 1 000 F. ${pc(feePct)} %, c'est ${fr(perPk, perPk % 1 ? 1 : 0)} F par paquet. À l'achat : ${fr(pk)} × ${fr(perPk, perPk % 1 ? 1 : 0)} = ${fr(f)} F. À la vente : ${fr(f)} F aussi. En tout : ${fr(f)} + ${fr(f)}${s ? " + " + fr(s) + " d'écart" : ""} = ${fr(tot)} F.`;
      box.querySelector("#w_need").innerHTML = `Pour revenir à zéro, le prix doit monter d'environ <b>${pc(+(100 * tot / amt).toFixed(2))} %</b> (${fr(tot)} F sur ${fr(amt)} F), juste pour payer les coûts. Avant le premier franc de gain.`;
    };
    a.addEventListener("input", () => { upd(); if (!touched) { touched = true; done({ touched }); } }); upd();
  };

  /* ---------- meteo : la Météo du marché (en direct) ---------- */
  W.meteo = async (box, p, done, ctx) => {
    const S = ctx.state; const today = ctx.today(); const already = S.lastMeteo === today; const prev = already ? (S.meteo || []).slice().reverse().find(m => m.d === today) : null;
    box.innerHTML = `<canvas id="w_cv" class="chart"></canvas><p class="mini" id="w_info">Chargement des 30 derniers jours…</p>
      <p class="mini">La règle (15 anciennes à gauche, 15 récentes à droite) : ${W.RULE30}</p>
      <p class="mini">${W.METEO_NOTE}</p>
      <h3>Sur ces 30 jours, le marché a été en…</h3>
      <div class="choice"><button data-v="hausse">Hausse</button><button data-v="baisse">Baisse</button><button data-v="range">Range<br><small>(ça hésite)</small></button></div>
      <label>Pourquoi, avec tes mots (une ligne)</label><input id="w_why" type="text" placeholder="ex. : les bougies montent depuis une semaine">
      <button class="btn wide" id="w_ok" ${already ? "disabled" : ""}>${already ? "Météo du jour déjà faite" : "Valider ma météo (+5 XP)"}</button>
      <div class="reveal hidden" id="w_rule"></div>
      <p class="mini">Choisis d'abord avec tes yeux. Après, l'app te montre ce que dit la règle. On apprend à regarder avant d'apprendre à nommer.</p>`;
    let choice = prev ? prev.v : null, J = null, validated = already;
    /* Après le choix de l'élève : la réponse de la règle (calculée), sans « faux » */
    const showRule = () => { if (!validated || !J) return; const el = box.querySelector("#w_rule"); if (!el) return; const same = choice === J.sens; el.classList.remove("hidden"); el.className = "reveal " + (same ? "ok" : ""); el.innerHTML = `<b>D'après la règle : ${J.sens}.</b> ${W.explain30(J)} ${same ? `Toi aussi, tu as vu ${choice}.` : W.hint30(J, choice)}<br><span class="mini">${W.METEO_NOTE}</span>`; };
    box.querySelectorAll(".choice button").forEach(b => { if (prev && b.dataset.v === prev.v) b.classList.add("sel"); b.addEventListener("click", () => { if (validated) return; box.querySelectorAll(".choice button").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); choice = b.dataset.v; }); });
    if (already) done({ already: true });
    box.querySelector("#w_ok").addEventListener("click", () => {
      if (!choice) return ctx.toast("Choisis hausse, baisse ou range"); const why = box.querySelector("#w_why").value.trim(); if (!why) return ctx.toast("Écris pourquoi, une ligne");
      ctx.recordMeteo(choice, why); validated = true; box.querySelector("#w_ok").disabled = true; box.querySelector("#w_ok").textContent = "Météo notée"; showRule(); done({ choice, rule: J ? J.sens : null });
    });
    const d = await Data.klines("BTCUSDT", "1d", 30); const cv = box.querySelector("#w_cv"); if (!cv) return; drawCandles(cv, d.candles); window.addEventListener("resize", () => drawCandles(cv, d.candles));
    J = W.judge30(d.candles); showRule();
    const info = box.querySelector("#w_info"); if (info) info.textContent = (d.demo ? "Bougies d'exemple (pas de connexion). " : "") + "BTC/USDT, une bougie = un jour. Dernier prix : " + fr(d.candles[d.candles.length - 1].c) + " USDT.";
  };

  /* ---------- detector : arnaque ou correct ---------- */
  W.detector = (box, p, done, ctx) => {
    const items = p.items || []; let i = 0, score = 0; const wrongGuaranteed = [];
    const step = () => {
      if (i >= items.length) { box.innerHTML = `<div class="reveal ${score === items.length ? "ok" : ""}"><b>Score : ${score} / ${items.length}.</b> ${score === items.length ? "Détective. Tu reconnais une arnaque en dix secondes." : score >= items.length - 2 ? "Presque. Relis les signes et refais le détecteur dans Jeux." : "Le détecteur se refait dans Jeux autant de fois que tu veux. Le réflexe vient avec la répétition."}${wrongGuaranteed.length ? `<br><b>Attention :</b> un message qui dit « garanti » est toujours une arnaque. Tu en as laissé passer ${wrongGuaranteed.length}.` : ""}</div>`; if (score === items.length) ctx.badge("detective"); done({ score, total: items.length }); return; }
      const it = items[i];
      box.innerHTML = `<p class="mini">Message ${i + 1} sur ${items.length} · score ${score}</p><div class="msg">${ctx.esc(it.text)}</div><div class="cols2"><button class="btn" id="w_scam">Arnaque</button><button class="btn ghost" id="w_ok">Aucun signe</button></div><div id="w_fb"></div>`;
      const answer = v => { const right = v === !!it.scam; if (right) score++; if (!right && it.scam && /garanti/i.test(it.text)) wrongGuaranteed.push(i); box.querySelector("#w_fb").innerHTML = `<div class="reveal ${right ? "ok" : "ko"}"><b>${right ? "Oui" : "Non"}</b> : ${it.scam ? "c'est une arnaque." : "ce message ne montre aucun signe. Ça ne prouve rien : un arnaqueur peut écrire une phrase honnête."} ${ctx.esc(it.why || "")}<br><button class="btn small" id="w_next" style="margin-top:8px">Message suivant</button></div>`; box.querySelector("#w_scam").disabled = box.querySelector("#w_ok").disabled = true; box.querySelector("#w_next").addEventListener("click", () => { i++; step(); }); };
      box.querySelector("#w_scam").addEventListener("click", () => answer(true)); box.querySelector("#w_ok").addEventListener("click", () => answer(false));
    };
    step();
  };

  /* ---------- quiz : questions à choix ---------- */
  W.quiz = (box, p, done, ctx) => {
    const items = p.items || []; let i = 0, score = 0; const need = p.pass != null ? p.pass : Math.min(items.length, 5); /* seuil affiché = seuil du code : 5 sur 7 */
    const step = () => {
      if (i >= items.length) { box.innerHTML = `<div class="reveal ${score >= need ? "ok" : ""}"><b>Score : ${score} / ${items.length}.</b> Il en faut ${need} sur ${items.length}. ${score === items.length ? "Tout juste." : score >= need ? "C'est bon. Pour les questions ratées : relis la carte de l'épisode concerné, dans le Parcours." : "Pas encore " + need + " : relis la carte de fin des épisodes ratés, dans le Parcours, puis rejoue."}</div>`; done({ score, total: items.length, need }); return; }
      const it = items[i];
      box.innerHTML = `<p class="mini">Question ${i + 1} sur ${items.length}</p><p><b>${ctx.esc(it.q)}</b></p><div class="choices">${it.choices.map((c, k) => `<button class="btn ghost wide" data-k="${k}">${ctx.esc(c)}</button>`).join("")}</div><div id="w_fb"></div>`;
      box.querySelectorAll("[data-k]").forEach(b => b.addEventListener("click", () => { const right = +b.dataset.k === it.answer; if (right) score++; box.querySelectorAll("[data-k]").forEach(x => { x.disabled = true; if (+x.dataset.k === it.answer) x.classList.add("good"); }); box.querySelector("#w_fb").innerHTML = `<div class="reveal ${right ? "ok" : "ko"}"><b>${right ? "Oui." : "Non."}</b> ${ctx.esc(it.why || "")}<br><button class="btn small" id="w_next" style="margin-top:8px">Suivant</button></div>`; box.querySelector("#w_next").addEventListener("click", () => { i++; step(); }); }));
    };
    step();
  };

  /* ---------- bars : pourcentages ---------- */
  W.bars = (box, p, done, ctx) => {
    box.innerHTML = (p.bars || []).map(b => `<div class="barrow"><div class="barlbl">${ctx.esc(b.label)}</div><div class="bar"><div style="width:0%" data-w="${Math.max(0, Math.min(100, +b.pct || 0))}"></div></div><div class="barpct">${fr(b.pct)} %</div></div>`).join("") + (p.source ? `<p class="mini">Source : ${ctx.esc(p.source)}</p>` : "");
    requestAnimationFrame(() => box.querySelectorAll(".bar>div").forEach(d => d.style.width = d.dataset.w + "%")); done({});
  };
})();
