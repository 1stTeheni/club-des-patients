/* Le Club des Patients — moteur de l'app (vanilla JS). Parcours guidé, verrouillé, sans coach. Zéro emoji. v3.1 (comité du 07/11 : règles D1/D2 uniques, jeu des journées d'Awa, météo avec réponse de la règle) */
(function () {
  "use strict";
  const VERSION = "3.1";
  const $ = (s, el = document) => el.querySelector(s);
  const view = $("#view");
  const KEY = "club_patients_v2";
  const EP_ORDER = ["ep01", "ep02", "ep03", "ep04", "ep05", "ep06", "ep07", "ep08"];
  const MAX_EP_PER_DAY = 1, MAX_RAPPELS_PER_DAY = 2, RAPPEL_STOP_DAYS = 60;
  const WIDGET_BADGES = ["oeil", "detective"];
  const BADGES = [["deux_prix", "Deux prix", "Épisode 1 : deux rappels réussis (Facile ou Réfléchi)"], ["prix_bouge", "Prix qui bouge", "Épisode 2 : deux rappels réussis"], ["file_attente", "Liste d'attente", "Épisode 3 : deux rappels réussis"], ["oeil", "Œil de mèche", "5 sur 5 à la Chasse aux mèches"], ["altitude", "Trois unités de temps", "Épisode 5 : deux rappels réussis"], ["calculatrice", "Calculatrice", "Épisode 6 : deux rappels réussis"], ["detective", "Détective", "10 sur 10 au Détecteur d'arnaque"], ["saison1", "Saison 1", "Épisode 8 : deux rappels réussis"], ["meteorologue", "Météorologue", "14 météos de suite"], ["fidele", "Fidèle", "7 rappels faits le jour prévu"], ["porte1", "Porte 1", "L'examen de fin de saison réussi"]];
  const GRADES = [["F", "Facile"], ["E", "Réfléchi"], ["I", "Indice"], ["X", "Pas su"]];

  /* ---------- dates ---------- */
  function fmt(d) { return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); }
  function today() { return fmt(new Date()); }
  function addDays(s, n) { const [y, m, d] = s.split("-").map(Number); return fmt(new Date(y, m - 1, d + n)); }
  function daysBetween(a, b) { const [y1, m1, d1] = a.split("-").map(Number), [y2, m2, d2] = b.split("-").map(Number); return Math.round((new Date(y2, m2 - 1, d2) - new Date(y1, m1 - 1, d1)) / 864e5); }
  function fr(s) { return s ? s.split("-").reverse().join("/") : ""; }

  /* ---------- état ---------- */
  const fresh = () => ({ v: 2, name: "", accepted: false, xp: 0, xpDay: { d: "", n: 0 }, streak: 0, bestStreak: 0, lastMeteo: null, meteo: [], ep: {}, rappels: {}, games: {}, badges: {}, gate1: { passed: false, lastTry: null, a: null, b: null, ansA: {} }, xpGiven: {}, created: today(), onTime: 0 });
  let state = load() || fresh();
  function load() {
    let raw = null; try { raw = localStorage.getItem(KEY); } catch (e) { return null; }
    if (!raw) return null;
    try { const s = JSON.parse(raw); if (s && s.v === 2 && typeof s.ep === "object" && Array.isArray(s.meteo)) { s.xpDay = s.xpDay || { d: "", n: 0 }; s.gate1 = s.gate1 || { passed: false, lastTry: null, a: null, b: null, ansA: {} }; s.gate1.ansA = s.gate1.ansA || {}; s.rappels = s.rappels || {}; s.onTime = s.onTime || 0; return s; } } catch (e) { }
    try { localStorage.setItem(KEY + "_bak", raw); } catch (e) { }
    return null;
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { toast("Attention : le téléphone n'a pas pu enregistrer. Libère de l'espace."); } renderStats(); }
  function epState(id) { return state.ep[id] || (state.ep[id] = { screen: 0, data: {}, done: false, doneDate: null }); }
  function isDone(id) { return !!(state.ep[id] && state.ep[id].done); }
  function addXP(n, key, msg) { if (key) { if (state.xpGiven[key]) return; state.xpGiven[key] = true; } state.xp += n; if (state.xpDay.d !== today()) state.xpDay = { d: today(), n: 0 }; state.xpDay.n += n; save(); toast((msg ? msg + " " : "") + "+" + n + " XP"); }
  function badge(id) { if (state.badges[id]) return; state.badges[id] = today(); save(); toast("Badge gagné : " + (BADGES.find(b => b[0] === id) || [id, id])[1]); }
  function toast(t) { const el = $("#toast"); el.textContent = t; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => el.hidden = true, 2600); }
  function renderStats() { $("#xpPill").textContent = state.xp + " XP"; const sp = $("#streakPill"); if (isDone("ep02")) sp.textContent = "Série " + state.streak; else sp.textContent = "Jour " + (daysBetween(state.created, today()) + 1); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c])); }
  /* ---------- dictionnaire : soulignement automatique + fiche ---------- */
  const GL = (window.GLOSSARY || []).map(e => ({ k: e.k, mot: e.mot, def: e.def, ep: e.ep, forms: [e.mot].concat(e.alias || []).filter(Boolean) }));
  const rx = f => f.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const GLX = GL.map(e => ({ k: e.k, re: new RegExp("(^|[^\\p{L}\\p{N}])(" + e.forms.slice().sort((a, b) => b.length - a.length).map(rx).join("|") + ")(?![\\p{L}\\p{N}])", "iu"), len: Math.max(...e.forms.map(f => f.length)) })).sort((a, b) => b.len - a.len);
  let glSeen = new Set();
  function gl(text) { let segs = [{ t: esc(text), w: false }]; for (const e of GLX) { if (glSeen.has(e.k)) continue; for (let i = 0; i < segs.length; i++) { const g = segs[i]; if (g.w) continue; const m = e.re.exec(g.t); if (!m) continue; const st = m.index + m[1].length, en = st + m[2].length; glSeen.add(e.k); segs.splice(i, 1, { t: g.t.slice(0, st), w: false }, { t: `<span class="gl" data-k="${e.k}">${g.t.slice(st, en)}</span>`, w: true }, { t: g.t.slice(en), w: false }); break; } } return segs.map(x => x.t).join(""); }
  function glEntry(k) { return GL.find(e => e.k === k); }
  function sheet(k) { const e = glEntry(k); if (!e) return; let el = $("#sheet"); if (!el) { el = document.createElement("div"); el.id = "sheet"; el.className = "sheet"; el.innerHTML = `<div class="sheetbox"><b id="shMot"></b><p id="shDef"></p><div class="row"><button class="btn small" id="shClose">Fermer</button><button class="btn ghost small" id="shAll">Tout le dictionnaire</button></div></div>`; document.body.appendChild(el); el.addEventListener("click", ev => { if (ev.target === el || ev.target.id === "shClose") el.classList.remove("on"); if (ev.target.id === "shAll") { el.classList.remove("on"); go("dico"); } }); } $("#shMot").textContent = e.mot; $("#shDef").textContent = e.def + (e.ep ? " (épisode " + e.ep + ")" : ""); el.classList.add("on"); }
  document.addEventListener("click", ev => { const t = ev.target.closest && ev.target.closest(".gl"); if (t) { ev.preventDefault(); sheet(t.dataset.k); } });
  function dico() {
    focus(false);
    const list = GL.slice().sort((a, b) => a.mot.localeCompare(b.mot, "fr"));
    h(`<h1>Dictionnaire</h1><p class="mini">Tous les mots du cours, en français simple. Dans les épisodes, chaque mot souligné s'ouvre d'un toucher.</p><input type="search" id="dq" placeholder="Cherche un mot (ex. : bougie)"><div id="dl"></div><p><button class="btn ghost small" data-go="parcours">Retour au parcours</button></p>`);
    const render = q => { q = (q || "").trim().toLowerCase(); $("#dl").innerHTML = list.filter(e => !q || e.mot.toLowerCase().includes(q) || e.forms.some(f => f.toLowerCase().includes(q)) || e.def.toLowerCase().includes(q)).map(e => `<div class="card dico"><b>${esc(e.mot)}</b>${e.ep ? `<span class="tag">épisode ${e.ep}</span>` : ""}<p>${esc(e.def)}</p></div>`).join("") || `<p class="muted">Aucun mot ne correspond.</p>`; };
    $("#dq").addEventListener("input", ev => render(ev.target.value)); render("");
  }
  function img(src, alt) { return src ? `<img class="illus" src="${esc(src)}" alt="${esc(alt)}" data-alt="${esc(alt)}">` : ""; }
  function fixImgs() { view.querySelectorAll("img.illus").forEach(i => { const ph = () => { const d = document.createElement("div"); d.className = "illus ph"; d.textContent = i.dataset.alt || ""; i.replaceWith(d); }; if (i.complete && i.naturalWidth === 0) ph(); else i.addEventListener("error", ph, { once: true }); }); }
  function recordMeteo(choice, why) {
    const d = today(); if (state.lastMeteo === d) return;
    state.streak = state.lastMeteo === addDays(d, -1) ? state.streak + 1 : 1; state.bestStreak = Math.max(state.bestStreak, state.streak); state.lastMeteo = d; state.meteo.push({ d, v: choice, why });
    if (state.streak >= 14) badge("meteorologue"); addXP(5, null, "Météo notée.");
  }
  const ctx = { esc, toast, state, save, today, recordMeteo, badge };
  function EP(id) { return window.EPISODES[id]; }
  function epTitle(id) { const E = EP(id); return E ? "Épisode " + E.num + " : " + E.title : id; }
  function meteo14() { const t = today(); return state.meteo.filter(m => daysBetween(m.d, t) < 14 && daysBetween(m.d, t) >= 0).length; }

  /* ---------- rappels espacés (intervalle adapté aux notes) ---------- */
  function dueRappels() {
    const t = today();
    return EP_ORDER.filter(id => { const r = state.rappels[id]; return r && r.next && r.next <= t && r.last !== t; })
      .sort((a, b) => { const ra = state.rappels[a], rb = state.rappels[b]; return daysBetween(rb.next, t) / rb.interval - daysBetween(ra.next, t) / ra.interval; });
  }
  function rappelsDoneToday() { return EP_ORDER.filter(id => state.rappels[id] && state.rappels[id].last === today()).length; }
  function epsDoneToday() { return EP_ORDER.filter(x => state.ep[x] && state.ep[x].doneDate === today()).length; }

  /* ---------- le parcours : où aller maintenant ---------- */
  function nextStep() {
    if (!state.accepted) return { id: "onboard", label: "Commencer", why: "Ton prénom et les quatre règles du Club.", mins: 3 };
    if (isDone("ep02") && state.lastMeteo !== today()) return { id: "meteo", label: "Météo du marché", why: "Chaque jour, avant tout le reste : regarder le marché, deux minutes.", mins: 2 };
    const due = dueRappels();
    if (due.length && rappelsDoneToday() < MAX_RAPPELS_PER_DAY) { const id = due[0]; const r = state.rappels[id]; return { id: "rappel", ep: id, label: "Rappel de l'épisode " + EP(id).num, why: (r.count === 0 ? "Deux jours ont passé. " : "") + "Trois questions, de tête : c'est comme ça que ça reste.", mins: 3 }; }
    const idx = EP_ORDER.findIndex(id => !isDone(id));
    if (idx >= 0) {
      const id = EP_ORDER[idx]; const S = epState(id);
      if (!EP(id)) return { id: "wait", label: "Épisode en préparation", why: "L'épisode " + (idx + 1) + " arrive bientôt dans l'app.", tomorrow: "Épisode " + (idx + 1) };
      if (S.screen > 0) return { id: "ep", ep: id, label: "Continuer l'épisode " + EP(id).num, why: EP(id).title + ", écran " + (S.screen + 1) + " sur " + EP(id).screens.length + ".", mins: EP(id).minutes };
      if (epsDoneToday() >= MAX_EP_PER_DAY) return { id: "wait", label: "Bravo pour aujourd'hui", why: "Un épisode par jour, pas plus : le cerveau range pendant la nuit. Demain, l'épisode " + EP(id).num + " t'attend.", tomorrow: "Épisode " + EP(id).num + " : " + EP(id).title };
      if (due.length && rappelsDoneToday() >= MAX_RAPPELS_PER_DAY) return { id: "ep", ep: id, label: epTitle(id), why: EP(id).intro + " (Les autres rappels glissent à demain.)", mins: EP(id).minutes };
      return { id: "ep", ep: id, label: epTitle(id), why: EP(id).intro, mins: EP(id).minutes };
    }
    if (!state.gate1.passed) {
      const m = meteo14();
      if (m < 10) return { id: "wait", label: "Encore " + (10 - m) + " météo" + (10 - m > 1 ? "s" : "") + " avant la Porte 1", why: "La Porte 1 demande dix météos sur les quatorze derniers jours. Tu en as " + m + ". Une par jour, et la porte s'ouvre.", tomorrow: "Ta météo, puis la Porte 1 dès que tu as dix météos" };
      if (state.gate1.lastTry === today()) return { id: "wait", label: "La Porte 1 se repasse demain", why: "Un essai par jour. Relis tes cartes de fin, refais les jeux.", tomorrow: "Porte 1, nouvel essai" };
      return { id: "porte1", label: "Porte 1 : l'examen de fin de saison", why: "Dix messages nouveaux à juger, trois graphiques à lire. Sans aide.", mins: 15 };
    }
    return { id: "saison2", label: "Saison 2", why: "La Porte 1 est franchie. La saison 2 est en préparation.", mins: 0 };
  }
  function goStep(s) { if (s.id === "ep") runEp(s.ep); else if (s.id === "rappel") rappel(s.ep); else if (s.id === "wait") go("jeux"); else go(s.id); }
  function stepButton(s) { return s.id === "wait" ? `<button class="btn ghost" data-go="parcours">Relire mes cartes</button> <button class="btn ghost" data-go="jeux">Jouer</button>` : `<button class="btn" id="goStep">C'est parti</button>`; }
  function bindStep(s) { const b = $("#goStep"); if (b) b.addEventListener("click", () => goStep(s)); }
  function andNow(first = "Et maintenant ?") { const s = nextStep(); return { html: `<div class="card"><h3>${first}</h3><h2 style="margin-top:4px">${esc(s.label)}</h2><p>${esc(s.why)}</p>${s.mins ? `<p class="mini">Environ ${s.mins} minutes.</p>` : ""}${s.tomorrow ? `<p class="mini">Demain : ${esc(s.tomorrow)}.</p>` : ""}${stepButton(s)} <button class="btn ghost" data-go="home">Accueil</button></div>`, s }; }

  /* ---------- navigation ---------- */
  const routes = { home, parcours, meteo, jeux, score, onboard, porte1, saison2, dico };
  function go(name, arg) { document.body.classList.remove("ep"); (routes[name] || home)(arg); window.scrollTo(0, 0); document.querySelectorAll(".bottom .nav").forEach(b => { b.classList.toggle("active", b.dataset.go === name); if (b.dataset.go === "meteo") b.classList.toggle("lock", !isDone("ep02")); }); }
  document.querySelectorAll(".bottom .nav").forEach(b => b.addEventListener("click", () => { if (!state.accepted && b.dataset.go !== "home") return toast("Commence par l'accueil"); go(b.dataset.go); }));
  $("#btnHome").addEventListener("click", () => go("home"));
  function h(html) { view.innerHTML = html; fixImgs(); view.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go))); }
  function lockCard(title, why) { return `<div class="card lock"><h3>${title}</h3><p>${why}</p></div>`; }
  function focus(on) { document.body.classList.toggle("ep", on); document.querySelectorAll(".bottom .nav").forEach(b => b.classList.remove("active")); }

  /* ---------- accueil ---------- */
  function home() {
    const s = nextStep(); const doneN = EP_ORDER.filter(isDone).length;
    const line = (st, label, note) => `<div class="stepline ${st}"><span class="dot"></span><span><b>${esc(label)}</b>${note ? " · " + esc(note) : ""}</span></div>`;
    let todayLines = "";
    if (state.accepted) {
      todayLines += isDone("ep02") ? line(state.lastMeteo === today() ? "ok" : (s.id === "meteo" ? "now" : "todo"), "Météo du marché", state.lastMeteo === today() ? "faite" : "2 min") : line("off", "Météo du marché", "s'ouvre avec l'épisode 2");
      const due = dueRappels(); const doneR = rappelsDoneToday();
      todayLines += line(due.length ? (s.id === "rappel" ? "now" : (doneR >= MAX_RAPPELS_PER_DAY ? "ok" : "todo")) : (doneR ? "ok" : "none"), "Rappels", due.length ? (doneR >= MAX_RAPPELS_PER_DAY ? "assez pour aujourd'hui, le reste demain" : (s.id === "rappel" ? "maintenant" : "après la météo")) : (doneR ? doneR + " fait" + (doneR > 1 ? "s" : "") : "rien à revoir aujourd'hui"));
      const idx = EP_ORDER.findIndex(id => !isDone(id));
      if (idx < 0) todayLines += line(state.gate1.passed ? "ok" : (s.id === "porte1" ? "now" : "todo"), "Porte 1", state.gate1.passed ? "franchie" : (meteo14() < 10 ? "après tes météos" : "examen"));
      else { const id = EP_ORDER[idx]; const S = epState(id); const dt = epsDoneToday(); todayLines += line(dt >= MAX_EP_PER_DAY ? "ok" : (s.id === "ep" ? "now" : "todo"), epTitle(id), dt >= MAX_EP_PER_DAY ? "demain" : S.screen > 0 ? "en cours" : (EP(id) ? EP(id).minutes + " min" : "bientôt")); }
    }
    const wait = s.id === "wait";
    h(`
      <div class="card navy hero">
        <h3>${state.accepted ? (wait ? "Aujourd'hui" : "Ta prochaine étape") : "Le Club des Patients"}</h3>
        <h1 style="color:#fff">${esc(s.label)}</h1>
        <p>${esc(s.why)}</p>
        ${wait && state.xpDay.d === today() && state.xpDay.n ? `<p class="mini" style="color:#fff;opacity:.85">Aujourd'hui : +${state.xpDay.n} XP.</p>` : ""}
        ${s.mins ? `<p class="mini" style="color:#fff;opacity:.85">Environ ${s.mins} minutes.</p>` : ""}
        ${wait && s.tomorrow ? `<p class="mini" style="color:#fff;opacity:.85">Demain : ${esc(s.tomorrow)}.</p>` : ""}
        ${stepButton(s)}
      </div>
      ${state.accepted ? `<div class="card"><h3>Aujourd'hui, dans l'ordre</h3>${todayLines}<p class="mini" style="margin-top:10px">L'app t'ouvre une seule chose à la fois. Tu ne peux pas te perdre.</p></div>` : ""}
      ${state.accepted ? `<div class="card"><h3>Saison 1 · Le marché est un marché</h3><div class="progress"><div style="width:${Math.round(100 * doneN / 8)}%"></div></div><p class="muted">${doneN} épisode${doneN > 1 ? "s" : ""} sur 8${state.gate1.passed ? " · Porte 1 franchie" : ""}.</p><button class="btn small ghost" data-go="parcours">Voir tout le parcours</button></div>` : `
      <div class="card"><h3>Ce qu'on te dit tout de suite</h3><p>La plupart des gens qui « font du trading » perdent de l'argent. Pas un peu plus de la moitié : la grande majorité. Ce cours ne te promet pas d'argent. Il t'apprend à lire un marché, à calculer un risque au franc près, et à reconnaître une arnaque en dix secondes.</p><p class="muted">Zéro argent réel pendant tout ce cours. Rien à acheter, personne à payer.</p></div>`}`);
    bindStep(s);
  }

  /* ---------- onboarding ---------- */
  function onboard() {
    let k = 0; const name = state.name || "";
    const screens = [
      () => `<div class="card"><h3>Bienvenue</h3><h1>Comment tu t'appelles ?</h1><p>Juste ton prénom. Il reste sur ton téléphone, il ne part nulle part.</p><input id="ob_name" type="text" placeholder="Prénom" value="${esc(name)}" autocomplete="given-name"></div>`,
      () => `<div class="card"><h3>Les quatre règles du Club</h3>
        <div class="step"><div class="n">1</div><div><b>Zéro argent réel.</b> Pendant les saisons 1 à 4, tu n'achètes rien, tu ne déposes rien. Tout se fait avec des prix réels mais de l'argent imaginaire.</div></div>
        <div class="step"><div class="n">2</div><div><b>Rien à acheter, personne à payer.</b> Les outils sont gratuits : cette app, un site de graphiques, le site d'une bourse sans compte.</div></div>
        <div class="step"><div class="n">3</div><div><b>Une étape à la fois.</b> L'app ouvre les étapes dans l'ordre. Chaque jour : la météo, puis les rappels, puis l'épisode. Un épisode par jour. Les XP, ce sont tes points : ils récompensent l'effort, jamais un gain d'argent.</div></div>
        <div class="step"><div class="n">4</div><div><b>Tes codes restent à toi.</b> Personne ne reçoit ton mot de passe, ton code, ni ton écran. Pas même « le support ».</div></div></div>`,
      () => `<div class="card"><h3>Avant de commencer</h3><p>Ce cours t'apprend à <b>lire</b> un marché. Ce n'est pas un conseil en investissement. Il ne te dit jamais quoi acheter ou vendre, et ne promet aucun gain. La plupart des gens qui tradent perdent de l'argent, et le cours te le répètera.</p><p>Le jour où tu placeras de l'argent réel, tu pourras tout perdre. Le Club ne gère jamais ton argent et n'est pas responsable de tes décisions.</p><p>Tu ne donnes jamais un mot de passe, un code, une photo de ta carte d'identité, ni ton écran en partage à qui que ce soit, même à quelqu'un qui dit être « le support ».</p>
        <label class="check"><input type="checkbox" id="ob_ok"><span>J'ai compris et j'accepte ces conditions. J'ai 18 ans ou plus, et je garde mon argent réel pour plus tard.</span></label></div>`
    ];
    const render = () => {
      h(`<p class="mini">Bienvenue · ${k + 1} / ${screens.length}</p>${screens[k]()}<div class="wizfoot">${k > 0 ? `<button class="btn ghost" id="ob_prev">Précédent</button>` : "<span></span>"}<button class="btn" id="ob_next">${k === screens.length - 1 ? "Entrer dans le Club" : "Suivant"}</button></div>`);
      const nx = $("#ob_next"); const prev = $("#ob_prev"); if (prev) prev.addEventListener("click", () => { k--; render(); });
      if (k === 0) { const i = $("#ob_name"); i.focus(); i.addEventListener("keydown", e => { if (e.key === "Enter") nx.click(); }); }
      nx.addEventListener("click", () => {
        if (k === 0) { const v = $("#ob_name").value.trim(); if (!v) return toast("Écris ton prénom"); state.name = v; save(); }
        if (k === screens.length - 1) { if (!$("#ob_ok").checked) return toast("Coche la case pour continuer"); state.accepted = true; save(); addXP(5, "onboard", "Bienvenue " + state.name + "."); go("home"); return; }
        k++; render();
      });
    };
    render();
  }

  /* ---------- parcours complet ---------- */
  function parcours() {
    const s = nextStep(); const cur = s.id === "ep" ? s.ep : null;
    const rows = EP_ORDER.map((id, i) => {
      const E = EP(id); const S = state.ep[id]; const done = isDone(id); const prevDone = i === 0 || isDone(EP_ORDER[i - 1]); const r = state.rappels[id];
      let st = "lock", note = "";
      if (done) { st = "ok"; note = "terminé le " + fr(S.doneDate) + (r && r.next ? " · prochain rappel le " + fr(r.next) : r ? " · rappels finis" : ""); }
      else if (id === cur) { st = "now"; note = S && S.screen > 0 ? "en cours, écran " + (S.screen + 1) : "maintenant"; }
      else if (prevDone) { st = "soon"; note = s.id === "wait" ? "demain" : s.id === "meteo" ? "après la météo" : s.id === "rappel" ? "après le rappel" : "bientôt"; }
      else note = "après l'épisode " + i;
      const compact = done ? `<div class="row" style="justify-content:space-between;align-items:center"><div><b>Épisode ${i + 1} · ${E ? esc(E.title) : ""}</b><br><span class="mini">${note}</span></div><span class="tag ok">fait</span></div><div class="row" style="margin-top:6px"><button class="btn small ghost" data-card="${id}">Relire la carte</button><button class="btn small ghost" data-reread="${id}">Relire l'épisode</button></div><div class="reveal hidden" id="card_${id}"></div>` : "";
      if (done) return `<div class="card ep ok compact">${compact}</div>`;
      return `<div class="card ep ${st}"><div class="row" style="justify-content:space-between;align-items:flex-start"><div><h3>Épisode ${i + 1}</h3><h2 style="margin-top:2px">${E ? esc(E.title) : "En préparation"}</h2><p class="muted">${E ? E.minutes + " min · " : ""}${note}</p></div><span class="tag ${st}">${st === "now" ? "à faire" : st === "soon" ? "ensuite" : "verrouillé"}</span></div>${st === "now" ? `<button class="btn" data-ep="${id}">${S && S.screen > 0 ? "Continuer" : "Commencer"}</button>` : ""}</div>`;
    }).join("");
    const allDone = EP_ORDER.every(isDone); const m = meteo14();
    h(`<h1>Le parcours</h1><p class="muted">Une étape s'ouvre quand la précédente est faite. Chaque jour commence par la météo (dès l'épisode 2), puis les rappels, puis l'épisode.</p><p><button class="btn ghost small" data-go="dico">Dictionnaire : tous les mots du cours</button></p>
      <div class="rail">${rows}
      <div class="card ep ${state.gate1.passed ? "ok" : allDone && m >= 10 ? "now" : "lock"}"><h3>Porte 1</h3><h2 style="margin-top:2px">L'examen de fin de saison</h2><p class="muted">${state.gate1.passed ? "franchie" : allDone ? (m >= 10 ? "à passer" : "encore " + (10 - m) + " météo(s)") : "après l'épisode 8"} · 3 graphiques, 10 messages nouveaux, 10 météos sur 14 jours</p>${allDone && m >= 10 && !state.gate1.passed && state.gate1.lastTry !== today() ? `<button class="btn" data-go="porte1">Passer la Porte 1</button>` : ""}</div>
      <div class="card ep ${state.gate1.passed ? "now" : "lock"}"><h3>Saison 2</h3><h2 style="margin-top:2px">Le risque, le R, le stop</h2><p class="muted">${state.gate1.passed ? "en préparation dans l'app" : "après la Porte 1"}</p></div></div>`);
    view.querySelectorAll("[data-ep]").forEach(b => b.addEventListener("click", () => runEp(b.dataset.ep)));
    view.querySelectorAll("[data-reread]").forEach(b => b.addEventListener("click", () => { epState(b.dataset.reread).screen = 0; save(); runEp(b.dataset.reread); }));
    view.querySelectorAll("[data-card]").forEach(b => b.addEventListener("click", () => { const E = EP(b.dataset.card); const c = E.screens.find(x => x.type === "card"); const box = $("#card_" + b.dataset.card); box.classList.toggle("hidden"); glSeen = new Set(); box.innerHTML = c ? c.items.map(it => `<p><b>${esc(it[0])}</b> : ${gl(it[1])}</p>`).join("") : ""; }));
    const now = view.querySelector(".ep.now"); if (now) setTimeout(() => now.scrollIntoView({ block: "center", behavior: "smooth" }), 50);
  }

  /* ---------- météo (page) ---------- */
  function meteo() {
    if (!isDone("ep02")) { h(`<h1>Météo du marché</h1>${lockCard("Pas encore", "La météo s'ouvre avec l'épisode 2 : c'est là que tu apprends à la lire. Jusque-là, l'app te guide depuis l'accueil.")}<button class="btn" data-go="home">Retour à l'accueil</button>`); return; }
    h(`<h1>Météo du marché</h1><p class="muted">Regarde, puis dis en un mot ce que le marché a fait sur 30 jours. Après ton choix, l'app te montre la réponse de la règle. Chaque jour, la même chose : c'est la discipline qui fait la différence.</p><div class="card" id="meteoBox"></div>
      <div class="card"><h3>Tes dernières météos</h3>${state.meteo.slice(-7).reverse().map(m => `<div class="check"><span><b>${fr(m.d)}</b> · ${esc(m.v)} · ${esc(m.why)}</span></div>`).join("") || '<p class="muted">Aucune pour l\'instant.</p>'}<p class="mini">Série : ${state.streak} jour(s) · record ${state.bestStreak} · total ${state.meteo.length}.</p></div><div id="afterMeteo"></div>`);
    window.WIDGETS.meteo($("#meteoBox"), {}, info => { if (info && info.choice) { const a = andNow(); $("#afterMeteo").innerHTML = a.html.replace('class="card"', 'class="card navy"'); bindStep(a.s); view.querySelectorAll("#afterMeteo [data-go]").forEach(b => b.addEventListener("click", () => go(b.dataset.go))); } }, ctx);
  }

  /* ---------- épisode : écran par écran ---------- */
  const HINTS = { words: "Touche chaque mot du jour pour lire sa définition.", pre: "Réponds aux 3 questions, un mot suffit. On y revient à la fin.", widget: "Joue avec ce qui est à l'écran : le bouton Suivant s'ouvre tout seul.", check: "Choisis une réponse. Se tromper est permis, on t'explique.", mission: "Coche toutes les étapes", post: "Écris ta réponse, vois la bonne, puis note-toi. Pour les 3.", explain: "Écris au moins {min} mots, puis compare." };
  function gradeButtons(prefix, i, sel) { return `<div class="grade">${GRADES.map(g => `<button data-${prefix}="${i}:${g[0]}" class="${sel === g[0] ? "sel" : ""}">${g[1]}</button>`).join("")}</div>`; }
  function runEp(id) {
    const E = EP(id); if (!E) return home(); const S = epState(id); const n = E.screens.length;
    focus(true);
    if (S.screen >= n) S.screen = 0;
    const k = S.screen; const sc = E.screens[k]; const D = S.data[k] || (S.data[k] = {}); let ok = false;
    const hint = () => (HINTS[sc.type] || "").replace("{min}", sc.min || 30) + (sc.type === "mission" && sc.note ? " et écris ta note." : sc.type === "mission" ? "." : "");
    const setOk = v => { ok = v; const b = $("#nextBtn"); if (b) { b.disabled = !v; $("#gateHint").textContent = v ? "" : hint(); } };
    const preScreen = E.screens.find(x => x.type === "pre"); const preIdx = E.screens.indexOf(preScreen); const preA = preIdx >= 0 && S.data[preIdx] ? (S.data[preIdx].a || []) : [];
    let body = ""; glSeen = new Set();
    /* mission : le dernier jeu (widget) de l'épisode avant cet écran, pour le revoir sans « Précédent » */
    const replayIdx = sc.type === "mission" ? E.screens.slice(0, k).reduce((r, x, i) => (x.type === "widget" && window.WIDGETS[x.widget] ? i : r), -1) : -1;
    switch (sc.type) {
      case "pre": body = `<div class="card"><h3>${esc(sc.title || "Avant de commencer : 3 questions")}</h3><p class="mini">Tu ne connais peut-être pas encore les réponses. Écris ce que tu penses, même « je ne sais pas ». On y revient à la fin.</p>${sc.questions.map((q, i) => `<label>${i + 1}. ${gl(q)}</label><input type="text" data-pre="${i}" value="${esc((D.a || [])[i] || "")}" placeholder="Ta réponse, ou « je ne sais pas »">`).join("")}</div>`; break;
      case "story": body = `${sc.title ? `<h2>${esc(sc.title)}</h2>` : ""}<div class="scene">${img(sc.img, sc.alt)}<div>${sc.text.map(t => `<p>${gl(t)}</p>`).join("")}</div></div>`; break;
      case "words": body = `<div class="card"><h3>Aujourd'hui, tu vas apprendre à :</h3><ul class="goals">${(sc.goals || []).map(g => `<li>${esc(g)}</li>`).join("")}</ul><h3>Les mots du jour</h3><p class="mini">Touche chaque mot. Sa définition s'affiche. Tu les retrouveras soulignés dans l'épisode, et dans le Dictionnaire.</p><div class="chips">${(sc.words || []).map(k => { const e = glEntry(k); return e ? `<button class="chip ${(D.seen || {})[k] ? "on" : ""}" data-w="${k}">${esc(e.mot)}</button>` : ""; }).join("")}</div><div class="reveal hidden" id="wdef"></div></div>`; break;
      case "map": body = `<div class="card"><h3>${esc(sc.title || "Chez Awa, sur le Bitcoin : la même chose")}</h3><table class="map"><thead><tr><th>Chez Awa, à Adjamé</th><th>Sur le marché du Bitcoin</th></tr></thead><tbody>${(sc.rows || []).map(r => `<tr><td>${gl(r[0])}</td><td>${gl(r[1])}</td></tr>`).join("")}</tbody></table>${sc.after ? `<p>${gl(sc.after)}</p>` : ""}</div>`; break;
      case "idea": body = `<div class="card"><h2 style="margin-top:0">${esc(sc.title)}</h2>${(sc.points || []).map(p => `<p><b>${esc(p[0])}</b> : ${gl(p[1])}</p>`).join("")}${sc.quote ? `<div class="quote">« ${esc(sc.quote)} »</div>` : ""}${sc.after ? `<p>${gl(sc.after)}</p>` : ""}</div>`; break;
      case "widget": body = `<div class="card"><h3>${esc(sc.title || "")}</h3>${sc.intro ? `<p class="mini">${gl(sc.intro)}</p>` : ""}<div id="wbox"></div>${sc.after ? `<div class="reveal hidden" id="wafter">${gl(sc.after)}</div>` : ""}</div>`; break;
      case "check": body = `<div class="card"><h3>Vérifie que tu as compris</h3><p><b>${gl(sc.q)}</b></p><div class="choices">${sc.choices.map((c, i) => `<button class="btn ghost wide" data-c="${i}">${esc(c)}</button>`).join("")}</div><div id="cfb"></div></div>`; break;
      case "mission": body = `<div class="card"><h3>${esc(sc.title || "Mission du jour")}</h3><p class="mini">${gl(sc.intro || "")}</p>${sc.steps.map((s, i) => `<label class="check ${(D.steps || [])[i] ? "done" : ""}"><input type="checkbox" data-step="${i}" ${(D.steps || [])[i] ? "checked" : ""}><span>${esc(s)}</span></label>`).join("")}${sc.note ? `<label>${esc(sc.note.label)}</label><input type="text" id="mNote" value="${esc(D.note || "")}" placeholder="${esc(sc.note.placeholder || "")}">` : ""}${sc.fallback ? `<p class="mini">${esc(sc.fallback)}</p>` : ""}${replayIdx >= 0 ? `<p><button class="btn ghost small" id="mReplay">Revoir le jeu</button></p><div class="reveal hidden" id="wreplay"></div>` : ""}</div>`; break;
      case "post": body = `<div class="card"><h3>Les 3 questions de fin</h3><p class="mini">Réponds de tête, un mot suffit. Puis vois la réponse et note-toi, franchement.</p>${sc.questions.map((p, i) => `<div class="postq"><b>${i + 1}. ${gl(p.q)}</b>${preA[i] ? `<p class="mini">Avant l'épisode, tu avais écrit : « ${esc(preA[i])} »</p>` : ""}<input type="text" data-try="${i}" value="${esc((D.try || [])[i] || "")}" placeholder="Ta réponse de tête"><button class="btn small ghost" data-rev="${i}" ${(D.try || [])[i] ? "" : "disabled"}>Voir la réponse</button><div class="reveal ${(D.rev || [])[i] ? "" : "hidden"}" id="rev${i}">${esc(p.a)}</div>${gradeButtons("g", i, (D.g || {})[i])}</div>`).join("")}</div>`; break;
      case "explain": body = `<div class="card"><h3>Explique-moi</h3><p><b>${esc(sc.prompt)}</b></p><p class="mini">Avec tes mots, comme à une amie. Au moins ${sc.min || 30} mots, des vrais.</p><textarea id="exT" placeholder="J'explique…">${esc(D.text || "")}</textarea><p class="mini" id="exC"></p><button class="btn" id="exBtn" disabled>Comparer avec l'explication du Club</button><div class="reveal ${D.rev ? "" : "hidden"}" id="exM"><b>L'explication du Club :</b> ${esc(sc.model || "")}<br><span class="mini">La tienne n'a pas besoin d'être pareille. Elle doit être vraie et claire.</span></div></div>`; break;
      case "card": body = `<div class="card navy"><h3>Carte de fin (la seule chose qu'on relira)</h3>${sc.items.map(c => `<p><b>${esc(c[0])}</b> : ${gl(c[1])}</p>`).join("")}</div><p class="mini">Cette carte reste dans le Parcours. Tes rappels viendront d'ici : dans deux jours, puis de plus en plus espacés si tu te souviens.</p>`; break;
      case "next": body = `<div class="card terra"><h3>${esc(sc.title || "À suivre")}</h3><p>${gl(sc.text)}</p></div>${E.badge && !WIDGET_BADGES.includes(E.badge.id) ? `<div class="card"><h3>Badge à gagner</h3><div class="badge ${state.badges[E.badge.id] ? "on" : ""}"><span class="dot"></span>${esc(E.badge.name)}</div><p class="mini">Il se gagne plus tard : au deuxième rappel de cet épisode, si tes trois notes sont « Facile » ou « Réfléchi ».</p></div>` : ""}`; break;
      default: body = `<p>${esc(JSON.stringify(sc))}</p>`;
    }
    h(`<p class="mini">Saison 1 · Épisode ${E.num} · écran ${k + 1} / ${n}</p><h1>${esc(E.title)}</h1><div class="progress"><div style="width:${Math.round(100 * k / (n - 1))}%"></div></div>
      ${body}
      <div class="wizfoot"><span class="mini" id="gateHint"></span><div class="row" style="justify-content:space-between;width:100%">${k > 0 ? `<button class="btn ghost" id="prevBtn">Précédent</button>` : `<span></span>`}<span><button class="btn ghost small" id="quitBtn">Quitter</button> <button class="btn" id="nextBtn" disabled>${k === n - 1 ? "Terminer l'épisode" : "Suivant"}</button></span></div></div>`);
    setOk(false);
    const prev = $("#prevBtn"); if (prev) prev.addEventListener("click", () => { S.screen = k - 1; save(); runEp(id); window.scrollTo(0, 0); });
    $("#quitBtn").addEventListener("click", () => { toast("Ta place est gardée."); go("home"); });
    $("#nextBtn").addEventListener("click", () => { if (!ok) return toast(hint()); if (k === n - 1) return finishEp(id); S.screen = k + 1; save(); runEp(id); window.scrollTo(0, 0); });

    /* logique par type */
    if (sc.type === "pre") { const ins = view.querySelectorAll("[data-pre]"); const chk = () => { D.a = [...ins].map(i => i.value.trim()); setOk(D.a.every(Boolean)); }; ins.forEach(i => i.addEventListener("input", () => { chk(); save(); })); chk(); }
    else if (sc.type === "story" || sc.type === "idea" || sc.type === "card" || sc.type === "next" || sc.type === "map") setOk(true);
    else if (sc.type === "words") { D.seen = D.seen || {}; const all = (sc.words || []).filter(glEntry); const chk = () => setOk(all.every(k => D.seen[k])); view.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => { const e = glEntry(c.dataset.w); D.seen[c.dataset.w] = true; c.classList.add("on"); const d = $("#wdef"); d.classList.remove("hidden"); d.innerHTML = `<b>${esc(e.mot)}</b> : ${esc(e.def)}`; d.scrollIntoView({ block: "nearest", behavior: "smooth" }); save(); chk(); })); chk(); }
    else if (sc.type === "widget") { const w = window.WIDGETS[sc.widget]; if (!w) { $("#wbox").innerHTML = `<p class="muted">Widget inconnu : ${esc(sc.widget)}</p>`; setOk(true); } else { if (D.ok) setOk(true); let fired = false; w($("#wbox"), sc.params || {}, info => { if (fired) return; fired = true; D.ok = true; D.info = info; save(); if (S.screen === k) setOk(true); const a = $("#wafter"); if (a) a.classList.remove("hidden"); }, ctx); if (D.ok && $("#wafter")) $("#wafter").classList.remove("hidden"); } }
    else if (sc.type === "check") {
      const showOk = () => { view.querySelectorAll("[data-c]").forEach(b => { b.disabled = true; if (+b.dataset.c === sc.answer) b.classList.add("good"); }); $("#cfb").innerHTML = `<div class="reveal ok">${esc(sc.ok)}</div>`; setOk(true); };
      if (D.ok) showOk();
      view.querySelectorAll("[data-c]").forEach(b => b.addEventListener("click", () => { const right = +b.dataset.c === sc.answer; D.tries = (D.tries || 0) + 1; if (right) { D.ok = true; save(); showOk(); } else { save(); view.querySelectorAll("[data-c]").forEach(x => x.disabled = true); b.classList.add("bad"); $("#cfb").innerHTML = `<div class="reveal ko">${esc(sc.ko)}<br><button class="btn small" id="reread" style="margin-top:8px">Relire l'écran d'avant, puis réessayer</button></div>`; $("#reread").addEventListener("click", () => { S.screen = k - 1; save(); runEp(id); window.scrollTo(0, 0); }); } }));
    }
    else if (sc.type === "mission") {
      const chk = () => { D.steps = [...view.querySelectorAll("[data-step]")].map(c => c.checked); const nt = $("#mNote"); D.note = nt ? nt.value.trim() : ""; setOk(D.steps.every(Boolean) && (!sc.note || D.note.length > 0)); save(); }; view.querySelectorAll("[data-step]").forEach(c => c.addEventListener("change", () => { c.closest(".check").classList.toggle("done", c.checked); chk(); })); const nt = $("#mNote"); if (nt) nt.addEventListener("input", chk); chk();
      /* « Revoir le jeu » : le widget réaffiché sous la mission, en lecture seule (ne bloque rien, ne donne ni XP, ni badge, ni météo) */
      const rp = $("#mReplay"); if (rp) rp.addEventListener("click", () => { const ws = E.screens[replayIdx]; const box = $("#wreplay"); box.classList.toggle("hidden"); rp.textContent = box.classList.contains("hidden") ? "Revoir le jeu" : "Cacher le jeu"; if (box.dataset.on) return; box.dataset.on = "1"; box.innerHTML = `<p class="mini"><b>${esc(ws.title || "Le jeu de l'épisode")}</b> : pour relire seulement, rien n'est compté ici.</p><div></div>`; window.WIDGETS[ws.widget](box.lastElementChild, ws.params || {}, () => { }, Object.assign({}, ctx, { recordMeteo: () => { }, badge: () => { } })); });
    }
    else if (sc.type === "post") {
      D.rev = D.rev || []; D.g = D.g || {}; D.try = D.try || []; const chk = () => setOk(sc.questions.every((q, i) => D.rev[i] && D.g[i]));
      view.querySelectorAll("[data-try]").forEach(i => i.addEventListener("input", () => { D.try[i.dataset.try] = i.value.trim(); view.querySelector(`[data-rev="${i.dataset.try}"]`).disabled = !D.try[i.dataset.try]; save(); }));
      view.querySelectorAll("[data-rev]").forEach(b => b.addEventListener("click", () => { D.rev[b.dataset.rev] = true; $("#rev" + b.dataset.rev).classList.remove("hidden"); save(); chk(); }));
      view.querySelectorAll("[data-g]").forEach(b => b.addEventListener("click", () => { const [i, g] = b.dataset.g.split(":"); if (!D.rev[i]) return toast("Écris ta réponse et vois d'abord la bonne"); D.g[i] = g; b.parentElement.querySelectorAll("button").forEach(x => x.classList.remove("sel")); b.classList.add("sel"); save(); chk(); })); chk();
    }
    else if (sc.type === "explain") { const t = $("#exT"), c = $("#exC"), b = $("#exBtn"); const min = sc.min || 30; const cnt = () => { const ws = t.value.trim().toLowerCase().split(/\s+/).filter(Boolean); const uniq = new Set(ws).size; const good = ws.length >= min && uniq >= Math.ceil(ws.length * 0.5); c.textContent = ws.length + " mot" + (ws.length > 1 ? "s" : "") + " sur " + min + (ws.length >= min && !good ? " (des vrais mots, pas des répétitions)" : ""); b.disabled = !good; D.text = t.value; }; t.addEventListener("input", () => { cnt(); save(); }); cnt(); b.addEventListener("click", () => { D.rev = true; save(); $("#exM").classList.remove("hidden"); setOk(true); }); if (D.rev) setOk(true); }
  }
  function finishEp(id) {
    const E = EP(id); const S = epState(id); const first = !S.done;
    S.done = true; S.doneDate = S.doneDate || today(); S.screen = 0;
    if (first) { state.rappels[id] = { next: addDays(today(), 2), interval: 2, count: 0, last: null }; save(); addXP(10, "ep_" + id, "Épisode " + E.num + " terminé."); } else save();
    const a = andNow();
    h(`<div class="card navy hero"><h3>Épisode ${E.num} terminé</h3><h1 style="color:#fff">${first ? "Bien joué, " + esc(state.name) + "." : "Relu."}</h1><p>${first ? "+10 XP. " : ""}Ta carte de fin est rangée dans le Parcours. Les trois questions reviendront dans deux jours, puis de plus en plus espacées si tu te souviens.</p></div>${a.html}`);
    bindStep(a.s); window.scrollTo(0, 0); focus(false);
  }

  /* ---------- rappel espacé ---------- */
  function rappel(id) { glSeen = new Set();
    const E = EP(id); const post = E.screens.find(x => x.type === "post"); const r = state.rappels[id]; const rev = [], g = {}, tr = [];
    focus(true);
    h(`<p class="mini">Rappel n° ${r.count + 1} · ${E.title}</p><h1>Rappel de l'épisode ${E.num}</h1><p class="muted">Réponds de tête, sans relire. Puis vois la réponse et note-toi. C'est l'effort de te souvenir qui grave la chose.</p>
      <div class="card">${post.questions.map((p, i) => `<div class="postq"><b>${i + 1}. ${gl(p.q)}</b><input type="text" data-try="${i}" placeholder="Ta réponse de tête"><button class="btn small ghost" data-rev="${i}" disabled>Voir la réponse</button><div class="reveal hidden" id="rev${i}">${esc(p.a)}</div>${gradeButtons("g", i, null)}</div>`).join("")}</div>
      <div class="wizfoot"><span class="mini" id="gateHint">Écris ta réponse, vois la bonne, puis note-toi. Pour les 3.</span><div class="row" style="justify-content:space-between;width:100%"><button class="btn ghost small" id="later">Plus tard</button><button class="btn" id="rapOk" disabled>Rappel fait (+10 XP)</button></div></div>`);
    const chk = () => { const all = post.questions.every((q, i) => rev[i] && g[i]); $("#rapOk").disabled = !all; $("#gateHint").textContent = all ? "" : "Écris ta réponse, vois la bonne, puis note-toi. Pour les 3."; };
    view.querySelectorAll("[data-try]").forEach(i => i.addEventListener("input", () => { tr[i.dataset.try] = i.value.trim(); view.querySelector(`[data-rev="${i.dataset.try}"]`).disabled = !tr[i.dataset.try]; }));
    view.querySelectorAll("[data-rev]").forEach(b => b.addEventListener("click", () => { rev[b.dataset.rev] = true; $("#rev" + b.dataset.rev).classList.remove("hidden"); chk(); }));
    view.querySelectorAll("[data-g]").forEach(b => b.addEventListener("click", () => { const [i, x] = b.dataset.g.split(":"); if (!rev[i]) return toast("Écris ta réponse et vois d'abord la bonne"); g[i] = x; b.parentElement.querySelectorAll("button").forEach(y => y.classList.remove("sel")); b.classList.add("sel"); chk(); }));
    $("#later").addEventListener("click", () => go("home"));
    $("#rapOk").addEventListener("click", () => {
      const order = { F: 0, E: 1, I: 2, X: 3 }; const worst = Object.values(g).sort((a, b) => order[b] - order[a])[0];
      const onTime = r.next === today(); if (onTime) { state.onTime = (state.onTime || 0) + 1; if (state.onTime >= 7) badge("fidele"); }
      let iv = r.interval; if (worst === "X") iv = 2; else if (worst === "I") iv = iv; else if (worst === "E") iv = iv * 2; else iv = iv * 2.5;
      r.count += 1; r.last = today(); r.interval = Math.round(iv); r.grades = (r.grades || []).concat([g]); r.next = r.interval > RAPPEL_STOP_DAYS ? null : addDays(today(), r.interval);
      if (r.count >= 2 && Object.values(g).every(x => x === "F" || x === "E") && E.badge && !WIDGET_BADGES.includes(E.badge.id)) badge(E.badge.id);
      save(); addXP(10, "rap_" + id + "_" + r.count, "Rappel fait.");
      const a = andNow();
      h(`<div class="card navy hero"><h3>Rappel fait</h3><h1 style="color:#fff">${esc(E.title)}</h1><p>${r.next ? "Prochain rappel de cet épisode : le " + fr(r.next) + ". " : "Cet épisode est acquis : plus de rappel prévu. "}${worst === "X" || worst === "I" ? "Une question t'a échappé : relis la carte dans le Parcours, deux minutes." : "Tes réponses tiennent : l'écart s'allonge."}</p></div>${a.html}`); bindStep(a.s); window.scrollTo(0, 0); focus(false);
    });
  }

  /* ---------- jeux ---------- */
  function jeux() {
    const det = EP("ep07") && EP("ep07").screens.find(x => x.type === "widget" && x.widget === "detector");
    const gate = state.gate1.passed;
    h(`<h1>Les jeux du Club</h1><p class="muted">Chaque jeu est une leçon déguisée. Ils s'ouvrent avec les épisodes et la Porte 1, puis se rejouent autant que tu veux.</p>
      <div class="card ${gate ? "" : "lock"}"><h3>${gate ? "Rejouer" : "Après la Porte 1"}</h3><h2 style="margin-top:4px">Le jeu des journées d'Awa</h2><p>Vingt journées tirées au sort. Deux journées sur trois, Awa brade et perd 1 part. Une sur trois, elle vend bien et gagne 3 parts. Une part, c'est ce qu'elle accepte de perdre sur une journée (plus tard, on l'appellera R).</p>${gate ? `<button class="btn" id="startR">Commencer les vingt journées</button><div id="rGame"></div>` : ""}</div>
      <div class="card ${isDone("ep04") ? "" : "lock"}"><h3>${isDone("ep04") ? "Rejouer" : "Après l'épisode 4"}</h3><h2 style="margin-top:4px">La Chasse aux mèches</h2><p>Sur 30 vraies bougies, trouve les 5 plus longues mèches et dis quel côté a été refusé. Badge « Œil de mèche » à 5 sur 5.${state.games.huntBest != null ? " Ton meilleur score : " + state.games.huntBest + " / 5." : ""}</p>${isDone("ep04") ? `<button class="btn" id="startHunt">Lancer la chasse</button><div id="huntBox"></div>` : ""}</div>
      <div class="card ${isDone("ep07") ? "" : "lock"}"><h3>${isDone("ep07") ? "Rejouer" : "Après l'épisode 7"}</h3><h2 style="margin-top:4px">Le Détecteur d'arnaque</h2><p>Dix messages. Arnaque ou correct ? Badge « Détective » à 10 sur 10.${state.games.detBest != null ? " Ton meilleur score : " + state.games.detBest + " / 10." : ""}</p>${isDone("ep07") && det ? `<button class="btn" id="startDet">Lancer le détecteur</button><div id="detBox"></div>` : ""}</div>`);
    const sr = $("#startR"); if (sr) sr.addEventListener("click", () => {
      /* vingt journées, une sur trois « vend bien » (+3 parts), deux sur trois « brade » (−1 part) */
      const box = $("#rGame"); let total = 0, n = 0, wins = 0; const rows = []; const parts = v => (v > 0 ? "+" : v < 0 ? "−" : "") + Math.abs(v) + " part" + (Math.abs(v) > 1 ? "s" : "");
      box.innerHTML = `<p class="center" id="rTot"><b>Total : 0 part</b> · 0 journée</p><button class="btn wide" id="roll">Journée suivante</button><table class="tbl" id="rTbl"></table>`;
      $("#roll").addEventListener("click", () => {
        if (n >= 20) return; const good = Math.random() < 1 / 3; const r = good ? 3 : -1; if (good) wins++; total += r; n++;
        $("#rTot").innerHTML = `<b>Total : ${parts(total)}</b> · ${n} journée${n > 1 ? "s" : ""} · ${wins} bien vendue${wins > 1 ? "s" : ""}, ${n - wins} bradée${n - wins > 1 ? "s" : ""}`;
        rows.unshift(`<tr><td>Journée ${n}</td><td>${good ? "Awa vend bien" : "Awa brade"}</td><td style="color:${good ? "#227846" : "#C8552B"};font-weight:700">${good ? "+3 parts" : "−1 part"}</td><td>${parts(total)}</td></tr>`); $("#rTbl").innerHTML = rows.join("");
        if (n === 20) { $("#roll").textContent = "Vingt journées faites"; $("#roll").disabled = true; state.games.r = (state.games.r || 0) + 1; save(); if (state.games.r <= 3) addXP(10, "game_r_" + state.games.r, "Journées d'Awa jouées."); box.insertAdjacentHTML("beforeend", `<div class="reveal"><b>Regarde :</b> Awa a bradé ${n - wins} journées sur 20 et bien vendu ${wins}. Son total : ${parts(total)}. ${total > 0 ? "Elle a perdu souvent et finit devant." : "Cette fois, elle ne finit pas devant : sur vingt journées seulement, ça arrive."} Perdre souvent et finir devant, c'est possible quand les pertes restent petites et les gains plus grands. Ce n'est pas une garantie : c'est de l'arithmétique sur ces vingt journées.</div>`); }
      });
    });
    const sh = $("#startHunt"); if (sh) sh.addEventListener("click", () => { let once = false; window.WIDGETS.candles($("#huntBox"), { mode: "hunt" }, info => { if (once) return; once = true; state.games.huntBest = Math.max(state.games.huntBest || 0, info.score || 0); state.games.hunt = (state.games.hunt || 0) + 1; save(); if (state.games.hunt <= 5) addXP(10, "hunt_" + state.games.hunt, "Chasse faite."); }, ctx); });
    const sd = $("#startDet"); if (sd) sd.addEventListener("click", () => { let once = false; window.WIDGETS.detector($("#detBox"), det.params, info => { if (once) return; once = true; state.games.detBest = Math.max(state.games.detBest || 0, info.score || 0); state.games.det = (state.games.det || 0) + 1; save(); if (state.games.det <= 5) addXP(10, "det_" + state.games.det, "Détecteur fait."); }, ctx); });
  }

  /* ---------- Porte 1 ---------- */
  const PORTE1_ITEMS = [
    { text: "Ma méthode a 95 % de réussite : tu doubles ton capital en un mois, je te montre mes gains en direct.", scam: true, why: "Un pourcentage de réussite et un capital qui double : une promesse chiffrée. Personne ne peut promettre ça." },
    { text: "Avant de mettre un franc, lis les frais de la bourse et calcule ce que tu perds si le prix baisse de dix pour cent.", scam: false, why: "On parle des coûts et de la perte avant du gain. C'est le réflexe du cours." },
    { text: "Envoie ton inscription ce soir : demain le prix triple et le groupe ferme à minuit.", scam: true, why: "Urgence fabriquée. Un vrai apprentissage attend demain sans problème." },
    { text: "Un graphique en 1 jour montre la direction ; on ne décide rien sur une seule bougie de 15 minutes.", scam: false, why: "C'est la leçon de l'unité de temps. Aucune promesse, aucun argent demandé." },
    { text: "Je suis trader agréé par la banque centrale, ton dépôt est assuré et aucune perte n'est possible, c'est garanti.", scam: true, why: "Signe 1 (il promet « garanti ») : on dit non. Aucune licence de ce genre n'existe, et aucune perte impossible n'existe." },
    { text: "Si tu ne comprends pas comment un placement gagne de l'argent, ne mets rien dedans.", scam: false, why: "Une règle de prudence, rien d'autre. Elle protège ton argent." },
    { text: "Prête-moi l'accès à ton compte, je trade pour toi, on partage les gains moitié-moitié.", scam: true, why: "Gestion de compte par un inconnu : il peut tout retirer, et les pertes seront pour toi." },
    { text: "Le prix a baissé de quarante pour cent cette année ; voilà pourquoi je garde mon argent réel pour plus tard.", scam: false, why: "On regarde la baisse en face et on attend. C'est la patience du Club." },
    { text: "Mon robot de trading est gratuit : il te suffit d'activer le levier ×200 et de déposer sur ma plateforme.", scam: true, why: "Levier énorme et plateforme inconnue : le robot gratuit sert à prendre ton dépôt." },
    { text: "Tu peux lire le carnet d'ordres sur le site d'une bourse sans ouvrir de compte ni déposer un franc.", scam: false, why: "Vrai, tu l'as fait dans l'épisode 1. Rien à payer, rien à donner." }
  ];
  /* Les deux règles sont classées par le même code que les widgets (widgets.js : judge5 = « partagé » d'abord, puis le signe ; judge30 = max contre max, puis min contre min). */
  function judgeChart(cs) { const J5 = window.WIDGETS.judge5(cs), J30 = window.WIDGETS.judge30(cs); return { who: J5.who, sens: J30.sens, J5, J30 }; }
  async function porte1() {
    if (!EP_ORDER.every(isDone)) { h(`<h1>Porte 1</h1>${lockCard("Pas encore", "La Porte 1 s'ouvre après l'épisode 8.")}<button class="btn" data-go="home">Accueil</button>`); return; }
    const G = state.gate1; const m14 = meteo14();
    if (G.passed) return saison2();
    if (m14 < 10) { h(`<h1>Porte 1</h1>${lockCard("Encore " + (10 - m14) + " météo(s)", "La Porte 1 demande dix météos sur les quatorze derniers jours. Tu en as " + m14 + ". Une par jour, et la porte s'ouvre.")}<button class="btn" data-go="home">Accueil</button>`); return; }
    if (G.lastTry === today() && G.a != null) { h(`<h1>Porte 1</h1><div class="card"><h3>Résultat d'aujourd'hui</h3><p>Graphiques : ${G.a} / 3 (il en faut 2). Messages : ${G.b} / 10 (il en faut 8, et aucune erreur sur « garanti »).</p><p class="muted">Un essai par jour. Relis tes cartes, refais les jeux, et reviens demain.</p><button class="btn" data-go="home">Accueil</button></div>`); return; }
    focus(true);
    G.lastTry = today(); G.a = null; G.b = null; G.ansA = {}; save();
    h(`<h1>Porte 1 : l'examen</h1><p class="muted">Deux parties, sans aide. Un essai par jour : il a commencé.</p>
      <div class="card"><h3>Partie A · trois graphiques</h3><p class="mini">Trois prix différents : BTC, ETH et BNB, trois cryptomonnaies. Même règle pour les trois.</p><p class="mini">Règle 1, les 5 dernières bougies (épisode 4) : ${esc(window.WIDGETS.RULE5)}</p><p class="mini">Règle 2, la météo des 30 jours (épisode 2) : ${esc(window.WIDGETS.RULE30)} ${esc(window.WIDGETS.METEO_NOTE)}</p><div id="pA"><p class="muted">Chargement…</p></div></div>
      <div class="card"><h3>Partie B · dix messages nouveaux</h3><div id="pB"><button class="btn" id="startB">Commencer la partie B</button></div></div>
      <div class="card"><h3>Verdict</h3><p id="verdict" class="muted">Finis A et B pour voir le verdict.</p></div>`);
    const syms = ["BTCUSDT", "ETHUSDT", "BNBUSDT"]; let resB = null, gErr = false;
    $("#startB").addEventListener("click", () => { window.WIDGETS.detector($("#pB"), { items: PORTE1_ITEMS }, info => { resB = info.score; gErr = /laissé passer/.test($("#pB").textContent); verdict(); }, ctx); });
    const pA = $("#pA"); pA.innerHTML = "";
    for (const sym of syms) {
      const d = await window.DATA.klines(sym, "1d", 30); const cs = d.candles; const J = judgeChart(cs);
      const box = document.createElement("div"); box.className = "examchart"; box.innerHTML = `<p><b>${esc(sym.replace("USDT", "/USDT"))}</b>${d.demo ? " (exemple, pas de connexion)" : ""}</p><canvas class="chart"></canvas><p class="mini">Les 5 dernières bougies : qui a gagné ?</p><div class="choice">${["acheteurs", "vendeurs", "partagé"].map(v => `<button data-q="who" data-v="${v}">${v}</button>`).join("")}</div><p class="mini">Sur 30 jours, d'après la règle, le marché a été en :</p><div class="choice">${["hausse", "baisse", "range"].map(v => `<button data-q="sens" data-v="${v}">${v}</button>`).join("")}</div><div class="reveal hidden"></div>`;
      pA.appendChild(box); const cv = box.querySelector("canvas"); window.WIDGETS.drawCandles(cv, cs); const ans = {};
      box.querySelectorAll("[data-q]").forEach(b => b.addEventListener("click", () => { if (ans.done) return; ans[b.dataset.q] = b.dataset.v; box.querySelectorAll(`[data-q="${b.dataset.q}"]`).forEach(x => x.classList.toggle("sel", x === b)); if (ans.who && ans.sens) { ans.done = true; const okk = ans.who === J.who && ans.sens === J.sens; G.ansA[sym] = okk; save(); box.querySelector(".reveal").classList.remove("hidden"); box.querySelector(".reveal").innerHTML = `${okk ? "<b>Juste.</b>" : "<b>Pas tout à fait.</b>"} <b>Les 5 dernières bougies.</b> ${esc(window.WIDGETS.explain5(J.J5))}${ans.who !== J.who ? ` Toi, tu as vu « ${esc(ans.who)} ».` : ""} <b>Les 30 jours.</b> ${esc(window.WIDGETS.explain30(J.J30))} D'après la règle : ${esc(J.sens)}. ${esc(window.WIDGETS.hint30(J.J30, ans.sens))}`; verdict(); } }));
    }
    function verdict() {
      if (Object.keys(G.ansA).length < 3 || resB == null) return;
      const a = Object.values(G.ansA).filter(Boolean).length; G.a = a; G.b = resB; G.gErr = gErr; save();
      const pass = a >= 2 && resB >= 8 && !gErr;
      $("#verdict").innerHTML = `Graphiques : <b>${a} / 3</b> (il en faut 2). Messages : <b>${resB} / 10</b> (il en faut 8${gErr ? ", et tu as laissé passer un « garanti »" : ""}).<br><br>` + (pass ? `<b>Porte 1 franchie.</b> La saison 1 est finie. Tu sais lire un marché, calculer un coût et reconnaître une arnaque.` : `<b>Pas encore.</b> ${a < 2 ? "Relis les cartes des épisodes 4 et 5, refais la Chasse aux mèches. " : ""}${resB < 8 || gErr ? "Relis la carte de l'épisode 7 et refais le Détecteur dans Jeux. " : ""}Tu repasses la porte demain.`) + `<br><button class="btn" id="vHome" style="margin-top:10px">${pass ? "Continuer" : "Retour à l'accueil"}</button>`;
      if (pass) { G.passed = true; save(); badge("porte1"); addXP(50, "porte1", "Porte 1 franchie."); }
      $("#vHome").addEventListener("click", () => pass ? saison2() : go("home"));
    }
  }
  function saison2() {
    focus(false);
    h(`<div class="card navy hero"><h3>Saison 2</h3><h1 style="color:#fff">Le risque, le R, le stop</h1><p>La saison 2 est en préparation dans l'app. Tu seras prévenue ici, sur l'accueil, le jour où elle s'ouvre.</p></div>
      <div class="card"><h3>En attendant, chaque jour</h3><p>La météo du marché, les rappels, et les jeux. Ce sont eux qui font la différence entre quelqu'un qui a lu un cours et quelqu'un qui sait lire un marché.</p><button class="btn" data-go="home">Accueil</button></div>`);
  }

  /* ---------- score ---------- */
  function score() {
    const journal = () => { const lines = []; lines.push("JOURNAL — " + state.name + " — exporté le " + today()); lines.push(""); lines.push("Météos :"); state.meteo.forEach(m => lines.push(m.d + " · " + m.v + " · " + m.why)); lines.push(""); EP_ORDER.forEach(id => { const S = state.ep[id]; if (!S || !S.done) return; const E = EP(id); lines.push("Épisode " + E.num + " (" + E.title + ") terminé le " + S.doneDate); Object.values(S.data).forEach(d => { if (d.note) lines.push("  mission : " + d.note); if (d.text) lines.push("  explique-moi : " + d.text); }); }); return lines.join("\n"); };
    h(`<h1>Ton score</h1>
      <div class="card"><div class="big">${state.xp} XP</div><p class="muted">Série météo : ${state.streak} jour(s) · record ${state.bestStreak} · météos : ${state.meteo.length} · épisodes : ${EP_ORDER.filter(isDone).length} / 8 · rappels faits le jour prévu : ${state.onTime || 0}</p></div>
      <div class="card"><h3>Badges</h3>${BADGES.map(b => `<div class="badge ${state.badges[b[0]] ? "on" : ""}"><span class="dot"></span><span><b>${b[1]}</b><br><small>${b[2]}</small></span></div>`).join("")}<p class="mini" style="margin-top:10px">Les badges se gagnent dans l'app, par ce que tu fais. Aucun badge ne récompense un gain d'argent.</p></div>
      <div class="card"><h3>Dictionnaire</h3><p class="mini">Tous les mots du cours expliqués en français simple.</p><button class="btn ghost small" data-go="dico">Ouvrir le dictionnaire</button></div>
      <div class="card"><h3>Ton journal</h3><p class="mini">Tout ce que tu as écrit reste sur ce téléphone. Tu peux le copier pour le garder ailleurs.</p><button class="btn ghost small" id="showJ">Afficher le journal</button><textarea id="jT" class="hidden" style="min-height:200px;margin-top:8px"></textarea></div>
      <div class="card"><h3>Sauvegarde</h3><p class="mini">Si tu changes de téléphone : copie ce code, puis colle-le dans l'app sur le nouveau téléphone.</p><button class="btn ghost small" id="expB">Montrer mon code</button> <button class="btn ghost small" id="impB">Coller un code</button><textarea id="bk" class="hidden" style="min-height:80px;margin-top:8px;font-size:12px"></textarea><button class="btn small hidden" id="impOk" style="margin-top:6px">Restaurer</button></div>
      <div class="card"><h3>À propos</h3><p class="mini">Le Club des Patients, version ${VERSION}. Cours d'éducation : il apprend à lire un marché. Ce n'est pas un conseil en investissement et il ne promet aucun gain. Aucune donnée ne quitte ton téléphone : pas de compte, pas de suivi, pas de publicité. Les prix affichés viennent du site public d'une bourse et peuvent manquer sans connexion.</p></div>
      <div class="card"><h3>Recommencer</h3><p class="mini">Efface tout : XP, badges, météos, progression.</p><button class="btn ghost small" id="reset">Tout remettre à zéro</button></div>`);
    $("#showJ").addEventListener("click", () => { const t = $("#jT"); t.classList.remove("hidden"); t.value = journal(); t.focus(); t.select(); });
    $("#expB").addEventListener("click", () => { const t = $("#bk"); t.classList.remove("hidden"); $("#impOk").classList.add("hidden"); t.value = btoa(unescape(encodeURIComponent(JSON.stringify(state)))); t.focus(); t.select(); });
    $("#impB").addEventListener("click", () => { const t = $("#bk"); t.classList.remove("hidden"); t.value = ""; t.placeholder = "Colle ton code ici"; $("#impOk").classList.remove("hidden"); t.focus(); });
    $("#impOk").addEventListener("click", () => { try { const s = JSON.parse(decodeURIComponent(escape(atob($("#bk").value.trim())))); if (!s || s.v !== 2 || !s.ep) throw 0; if (!confirm("Remplacer la progression de ce téléphone par ce code ?")) return; localStorage.setItem(KEY, JSON.stringify(s)); location.reload(); } catch (e) { toast("Ce code n'est pas valide."); } });
    $("#reset").addEventListener("click", () => { if (confirm("Tout effacer ? Cette action ne se défait pas.")) { localStorage.removeItem(KEY); location.reload(); } });
  }

  renderStats(); go("home");
})();
