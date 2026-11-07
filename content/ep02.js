// Épisode 2 — Pourquoi le prix bouge (contenu v3, méthode manuel scolaire). Français très simple. Zéro emoji.
// Analogie unique : Awa, revendeuse d'attiéké à Adjamé. Prix : 500 → 520 (Moussa pressé) → 480 (pluie) ; 500/520 sans échange = pas de mouvement.
// Météo chez Awa (comité 07/11, D3) : 15 jours anciens entre 400 et 500 ; 15 jours récents entre 440 et 550.
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
        "Ce matin à Adjamé, la dernière boule s'est vendue 500 francs. C'est le dernier prix : le prix du dernier échange (une boule vraiment vendue). Les vendeuses demandent 520 : le prix vendeur (ask). Les acheteuses proposent 500 : le prix acheteur (bid). Personne ne cède.",
        "Moussa arrive, pressé : vingt boules pour un restaurant, avant 9 heures. « Je prends à votre prix : 520 ! » Trois vendeuses accourent. Vingt boules changent de main à 520. Nouveau dernier prix : 520. Le prix a monté.",
        "Les vendeuses n'ont rien changé : elles demandaient déjà 520. C'est Moussa, l'acheteur pressé, qui a accepté le prix vendeur."
      ] },

    { type: "story", title: "Scène 2 : le prix descend, puis ne bouge plus",
      img: "img/ep02_descend.jpg", alt: "Awa sous la pluie à Adjamé, le marché presque vide, ses boules d'attiéké invendues",
      text: [
        "Il a plu. Le marché est presque vide. Awa a encore des boules à vendre avant ce soir. Elle demande 520. Les rares acheteuses proposent 480 : le prix acheteur (bid). Elles ne bougent pas.",
        "Awa cède : « Bon, 480, prenez. » Nouveau dernier prix : 480. Le prix a baissé. C'est Awa, vendeuse pressée par la pluie, qui a accepté le prix acheteur. La pluie ne vend pas d'attiéké : elle a seulement rendu Awa pressée.",
        "Puis la foule revient. Les acheteuses crient 500, les vendeuses crient 520. Personne ne cède. Aucun échange : le dernier prix reste 480. Crier n'est pas acheter."
      ] },

    { type: "check", q: "Le matin, le prix est passé de 500 à 520. Sous la pluie, de 520 à 480. Qui a bougé le prix ?",
      choices: ["Les vendeuses qui demandaient 520, puis la pluie", "Moussa pressé, puis Awa pressée", "La foule qui criait 500 et 520"],
      answer: 1,
      ok: "Oui. Les vendeuses n'avaient rien changé, la pluie ne vend rien, crier n'est pas acheter. Le pressé qui accepte le prix de l'autre camp bouge le prix.",
      ko: "Pas encore. Les vendeuses n'ont pas changé leur prix. La pluie ne vend pas d'attiéké, et crier n'est pas acheter. Qui a accepté le prix de l'autre camp ?" },

    { type: "map", title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Moussa, pressé, accepte 520 : nouveau dernier prix", "Le prix monte quand un acheteur pressé accepte le prix vendeur (ask)"],
        ["Awa, pressée par la pluie, cède à 480 : nouveau dernier prix", "Le prix descend quand un vendeur pressé accepte le prix acheteur (bid)"],
        ["La foule crie, personne ne cède : pas d'échange", "Sans échange, le dernier prix ne bouge pas"]
      ],
      after: "Le prix bouge seulement quand un pressé accepte le prix de l'autre camp. Sur le Bitcoin, c'est pareil : des milliers de Moussa et d'Awa, jour et nuit." },

    { type: "widget", widget: "queue", title: "Joue : qui fait bouger le prix ?",
      intro: "L'attiéké est à 500 francs. Touche chaque bouton plusieurs fois : acheteur pressé, vendeur pressé, personne de pressé. Regarde ce que fait le dernier prix.",
      params: { start: 500, unit: "francs" },
      after: "Acheteur pressé : le prix monte. Vendeur pressé : il descend. Personne de pressé : il reste là, comme la foule qui crie sans acheter." },

    { type: "idea", title: "La règle de la météo",
      points: [
        ["Chez Awa", "Chaque soir, Awa note la boule la plus chère et la moins chère. Sur ses 30 derniers jours : les 15 anciens vont de 400 à 500 francs, les 15 récents de 440 à 550. 550 dépasse 500, 440 dépasse 400 : ça monte."],
        ["La règle", "Le prix le plus haut vu ces 15 derniers jours est-il au-dessus du plus haut des 15 jours d'avant ? ET le plus bas de ces 15 derniers jours est-il au-dessus du plus bas des 15 d'avant ? Deux fois oui : hausse. Deux fois en dessous : baisse. Sinon : range (dis « rèndj »), le prix hésite."]
      ],
      quote: "La météo décrit ce qui s'est passé. Elle ne dit jamais « achète »." },

    { type: "check", q: "Sur 30 jours, le prix le plus haut des 15 récents est au-dessus du plus haut des 15 anciens. Mais le plus bas des 15 récents est en dessous du plus bas des 15 anciens. Quelle météo ?",
      choices: ["Hausse", "Baisse", "Range"],
      answer: 2,
      ok: "Oui. Hausse demande les deux au-dessus ; baisse, les deux en dessous. Ici, un seul des deux : range, le prix hésite.",
      ko: "Pas encore. Relis la règle : hausse ou baisse demandent le plus haut ET le plus bas du même côté." },

    { type: "widget", widget: "meteo", title: "Ta première Météo du marché",
      intro: "Un graphique : un dessin du prix dans le temps. À gauche le passé, à droite aujourd'hui. Chaque jour est une bougie (épisode 4) : son haut, le prix le plus haut du jour ; son bas, le plus bas. Compare le plus haut des 15 bougies récentes à celui des 15 anciennes, pareil pour le plus bas. Choisis hausse, baisse ou range, et écris pourquoi.",
      params: {},
      after: "Deux minutes par jour. Aujourd'hui : jour 1 de ta série de météos. Pas de connexion ? L'app montre un graphique d'exemple : ta météo compte quand même." },

    { type: "check", q: "Ta météo du jour dit : hausse. Qu'est-ce que ça veut dire ?",
      choices: ["Le prix a monté ces 30 jours, c'est tout", "Le prix va monter demain : achète", "Le prix va monter demain : attends un peu"],
      answer: 0,
      ok: "Oui. La météo décrit le passé. Elle ne sait rien de demain, et elle ne dit jamais « achète ». Tu écris ta météo, c'est tout.",
      ko: "Pas encore. La météo regarde les 30 jours passés. Est-ce qu'elle sait quelque chose sur demain ?" },

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
      ["C'est quoi", "Le prix du dernier échange. Il monte si un acheteur pressé accepte le prix vendeur. Il descend si un vendeur pressé accepte le prix acheteur. Sans échange, il ne bouge pas."],
      ["Connecté à", "les deux prix (épisode 1), le carnet d'ordres (épisode 3), la bougie (épisode 4)."],
      ["Exemple", "Moussa accepte 520 : le prix monte. Awa cède à 480 : il descend. La foule crie : il reste à 480."],
      ["Vrai même si on ne le dit pas", "La pluie et les cris ne bougent pas le prix. La météo décrit le passé, jamais « achète »."],
      ["Piège classique", "Dire « c'est manipulé » au lieu de chercher qui était pressé."]
    ] },

    { type: "next", title: "À suivre",
      text: "Demain, épisode 3 : le carnet d'ordres. Moussa a eu ses vingt boules à 520 parce que trois vendeuses attendaient à ce prix. S'il en avait voulu cent, il aurait vidé ces vendeuses, puis payé plus cher les suivantes. Tu verras la liste de tous ceux qui attendent avec leur prix : le carnet d'ordres. Il est en vert et en rouge, sur le vrai marché du Bitcoin." }
  ],
  badge: { id: "prix_bouge", name: "Prix qui bouge", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)." }
};
