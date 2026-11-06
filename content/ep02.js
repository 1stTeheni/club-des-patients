// Épisode 2 — Pourquoi le prix bouge (contenu v3, méthode manuel scolaire). Français très simple. Zéro emoji.
// Analogie unique : Awa, revendeuse d'attiéké à Adjamé. Prix : 500 → 520 (Moussa pressé) → 480 (pluie) ; 500/520 sans échange = pas de mouvement.
window.EPISODES = window.EPISODES || {};
window.EPISODES.ep02 = {
  id: "ep02",
  num: 2,
  title: "Pourquoi le prix bouge",
  minutes: 15,
  intro: "Tu vas voir qui fait monter un prix, qui le fait descendre, et pourquoi parfois il ne bouge pas. Puis tu liras ton premier graphique.",
  screens: [
    { type: "pre", title: "Avant de commencer : 3 questions", questions: [
      "Épisode 1 : Moussa, pressé, paie 500 francs. Quel prix accepte-t-il : le prix vendeur ou le prix acheteur ?",
      "Épisode 1 : Awa reprend la boule de Moussa à 450 francs. Quel prix est-ce : le prix vendeur ou le prix acheteur ?",
      "Les acheteuses crient 500, les vendeuses 520, personne ne cède. Le prix bouge-t-il ?"
    ] },

    { type: "words",
      goals: [
        "dire ce qu'est le dernier prix et ce qui le fait bouger",
        "trouver qui a fait monter ou descendre un prix : un acheteur pressé ou un vendeur pressé",
        "lire un graphique de 30 jours et dire hausse, baisse ou range avec la règle de la météo"
      ],
      words: ["dernier-prix", "echange", "hausse", "baisse", "range", "graphique"] },

    { type: "story", title: "Scène 1 : le prix monte (7 h 30)",
      img: "img/ep02_monte.jpg", alt: "Moussa, pressé, accepte 520 francs la boule ; trois vendeuses accourent vers lui",
      text: [
        "Ce matin à Adjamé, la dernière boule s'est vendue 500 francs. C'est le dernier prix : le prix du dernier échange. Les vendeuses demandent 520 : le prix vendeur (ask). Les acheteuses proposent 500 : le prix acheteur (bid). Personne ne cède.",
        "Moussa arrive, pressé : il a promis vingt boules à un restaurant pour 9 heures. « Je prends à votre prix : 520 ! » Trois vendeuses accourent. Vingt boules changent de main à 520. Nouveau dernier prix : 520. Le prix a monté.",
        "Les vendeuses n'ont rien changé : elles demandaient déjà 520. C'est Moussa, l'acheteur pressé, qui a accepté le prix vendeur."
      ] },

    { type: "story", title: "Scène 2 : le prix descend, puis ne bouge plus",
      img: "img/ep02_descend.jpg", alt: "Awa sous la pluie à Adjamé, le marché presque vide, ses boules d'attiéké invendues",
      text: [
        "Il a plu. Le marché est presque vide. Awa a encore des boules qui ne tiendront pas jusqu'à demain. Elle demande 520. Les rares acheteuses proposent 480 : le prix acheteur (bid). Elles ne bougent pas.",
        "Awa cède : « Bon, 480, prenez. » Nouveau dernier prix : 480. Le prix a baissé. Les acheteuses n'ont rien changé. C'est Awa, vendeuse pressée par la pluie, qui a accepté le prix acheteur. La pluie ne vend pas d'attiéké : elle a seulement rendu Awa pressée.",
        "Puis la foule revient. Les acheteuses crient 500, les vendeuses crient 520. Personne ne cède pendant une heure. Aucun échange : le dernier prix reste 480. Crier n'est pas acheter."
      ] },

    { type: "check", q: "Le matin, le prix est passé de 500 à 520. Sous la pluie, de 520 à 480. Qui a bougé le prix ?",
      choices: ["Les vendeuses qui demandaient 520, puis la pluie", "Moussa, acheteur pressé, qui a accepté 520 ; puis Awa, vendeuse pressée, qui a accepté 480", "La foule qui criait 500 et 520"],
      answer: 1,
      ok: "Oui. Les vendeuses n'avaient rien changé, la pluie ne vend rien, crier n'est pas acheter. Le pressé qui accepte le prix de l'autre camp bouge le prix.",
      ko: "Pas encore. Les vendeuses n'ont pas changé leur prix. La pluie ne vend pas d'attiéké, et crier n'est pas acheter. Qui a accepté le prix de l'autre camp ?" },

    { type: "idea", title: "Le prix, c'est le dernier échange",
      points: [
        ["Un échange", "un achat qui a vraiment eu lieu : acheteur et vendeur d'accord sur un prix."],
        ["Le dernier prix", "le prix du dernier échange. « Le prix du Bitcoin », c'est ce chiffre-là."],
        ["Le prix monte", "quand un acheteur pressé accepte le prix vendeur (ask). Moussa à 520."],
        ["Le prix descend", "quand un vendeur pressé accepte le prix acheteur (bid). Awa à 480."],
        ["Le prix ne bouge pas", "tant que personne ne cède, même si mille personnes crient. Sans échange, pas de nouveau prix."]
      ],
      quote: "Le prix bouge seulement quand un pressé accepte le prix de l'autre camp.",
      after: "Sur le Bitcoin, c'est pareil : des milliers de Moussa et d'Awa, jour et nuit." },

    { type: "map", title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["La boule d'attiéké", "Le Bitcoin (une monnaie qui existe seulement sur Internet)"],
        ["Le prix que demande la vendeuse la moins chère", "Le prix vendeur (ask)"],
        ["Le prix que propose l'acheteuse la plus généreuse", "Le prix acheteur (bid)"],
        ["Un client pressé accepte 520 : nouveau prix", "Le prix monte quand un acheteur accepte le prix vendeur"],
        ["Awa cède à 480 sous la pluie : nouveau prix", "Le prix descend quand un vendeur accepte le prix acheteur"]
      ],
      after: "Même règle sur le Bitcoin : seul un pressé qui cède fait bouger le dernier prix." },

    { type: "widget", widget: "queue", title: "Joue : qui fait bouger le prix ?",
      intro: "L'attiéké est à 500 francs. Touche chaque bouton plusieurs fois : acheteur pressé, vendeur pressé, personne de pressé. Regarde ce que fait le dernier prix.",
      params: { start: 500, unit: "francs" },
      after: "Acheteur pressé : le prix monte. Vendeur pressé : il descend. Personne de pressé : il reste là, comme la foule qui crie sans acheter." },

    { type: "idea", title: "Lire un graphique : la règle de la météo",
      points: [
        ["Un graphique", "un dessin du prix dans le temps. À gauche le passé, à droite aujourd'hui. En haut les prix hauts, en bas les prix bas. Chaque bâton résume un jour de prix : une bougie (épisode 4)."],
        ["La règle", "Le graphique montre 30 bâtons, un par jour. Coupe-les en deux : les 15 anciens à gauche, les 15 récents à droite. Si les plus hauts ET les plus bas des récents sont au-dessus de ceux des anciens : hausse. S'ils sont en dessous : baisse. Sinon : range. Range (dis « rèndj ») : le prix hésite."],
        ["Chez Awa", "les 15 jours anciens, la boule allait de 440 à 520 francs. Les 15 jours récents, de 480 à 550. 550 dépasse 520, et 480 dépasse 440 : hausse."]
      ] },

    { type: "check", q: "30 bâtons. Les 15 récents : plus haut au-dessus de celui des anciens, mais plus bas en dessous. Quelle météo ?",
      choices: ["Hausse : le plus haut est au-dessus", "Baisse : le plus bas est en dessous", "Range : il faut les deux au-dessus, ou les deux en dessous"],
      answer: 2,
      ok: "Oui. Hausse demande les deux au-dessus ; baisse, les deux en dessous. Ici, un seul des deux : range.",
      ko: "Pas encore. Relis la règle. Hausse ou baisse : il faut le plus haut ET le plus bas du même côté." },

    { type: "widget", widget: "meteo", title: "Ta première Météo du marché",
      intro: "La météo du marché, c'est ton rituel. Regarde les 30 bâtons : les 15 récents contre les 15 anciens. Choisis hausse, baisse ou range, puis écris pourquoi en quelques mots. Exemple : « hauts et bas des 15 récents au-dessus ».",
      params: {},
      after: "Deux minutes par jour, tous les jours. Aujourd'hui, c'est le jour 1 de ta série de météos. Tu as le droit de te tromper : on apprend à regarder avant de nommer." },

    { type: "post", questions: [
      { q: "Épisode 1 : Moussa, pressé, paie 500 francs. Quel prix accepte-t-il : le prix vendeur ou le prix acheteur ?",
        a: "Le prix vendeur (ask) : ce que demande Awa. Moussa, acheteur pressé, l'accepte. Épisode 2 : un échange a lieu, le dernier prix monte." },
      { q: "Épisode 1 : Awa reprend la boule de Moussa à 450 francs. Quel prix est-ce : le prix vendeur ou le prix acheteur ?",
        a: "Le prix acheteur (bid) : ce qu'Awa propose pour reprendre. Épisode 2 : Moussa, vendeur pressé, l'accepte, et le dernier prix descend." },
      { q: "Les acheteuses crient 500, les vendeuses 520, personne ne cède. Le prix bouge-t-il ?",
        a: "Non. Sans échange, pas de nouveau dernier prix. Il bouge seulement quand quelqu'un cède." }
    ] },

    { type: "explain",
      prompt: "Explique à Moussa, avec tes mots, pourquoi le prix de l'attiéké a monté ce matin.",
      min: 30,
      model: "Le prix a monté parce que toi, Moussa, tu étais pressé. Les vendeuses demandaient 520, et tu as accepté ce prix vendeur. Un échange a eu lieu à 520 : c'est le nouveau dernier prix. Les vendeuses n'ont rien changé. C'est le pressé qui bouge le prix." },

    { type: "card", items: [
      ["C'est quoi", "Le dernier prix, c'est le prix du dernier échange. Il monte si un acheteur pressé accepte le prix vendeur. Il descend si un vendeur pressé accepte le prix acheteur. Sans échange, il ne bouge pas."],
      ["Connecté à", "les deux prix (épisode 1), le carnet d'ordres (épisode 3), la bougie (épisode 4)."],
      ["Exemple", "Moussa accepte 520 : le prix monte. Awa cède à 480 : il descend. La foule crie sans acheter : il reste à 480."],
      ["Vrai même si on ne le dit pas", "La pluie et les cris ne bougent pas le prix. Seule la personne qui cède le bouge."],
      ["Piège classique", "Dire « c'est manipulé » (quelqu'un aurait triché en cachette) au lieu de chercher qui était pressé."]
    ] },

    { type: "next", title: "À suivre",
      text: "Demain, épisode 3 : le carnet d'ordres. Moussa a eu ses vingt boules à 520 parce que trois vendeuses attendaient à ce prix. S'il en avait voulu cent, il aurait vidé ces vendeuses, puis payé plus cher les suivantes. Tu verras la liste de tous ceux qui attendent avec leur prix : le carnet d'ordres. Il est en vert et en rouge, sur le vrai marché du Bitcoin." }
  ],
  badge: { id: "prix_bouge", name: "Prix qui bouge", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)." }
};
