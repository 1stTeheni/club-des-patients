// Épisode 4 — La bougie : une journée en un dessin. Français très simple. Zéro emoji.
// Chiffres d'Awa (REDACTION §5) : ouverture 500, plus haut 550, plus bas 440, clôture 520. Règle Porte 1 sur 5 bougies (comité 07/11, D1) : exemple 500 → 520.
window.EPISODES = window.EPISODES || {};
window.EPISODES.ep04 = {
  id: "ep04",
  num: 4,
  title: "La bougie : une journée en un dessin",
  minutes: 15,
  intro: "Une journée entière de prix, résumée en un seul petit dessin : la bougie. Et qui a gagné sur plusieurs bougies. Aucun argent, aucun compte.",
  screens: [
    {
      type: "pre",
      title: "Avant de commencer : 3 questions",
      questions: [
        "Dans le carnet d'ordres, à quoi reconnaît-on un mur ? Peut-il disparaître d'un coup ?",
        "Moussa veut 100 boules d'un coup. Il paie 500, puis 510, puis 520. Comment s'appelle ce coût en plus ?",
        "Quels quatre prix résument la journée d'Awa ? Et comment les dessiner en un seul bâton ?"
      ]
    },
    {
      type: "words",
      goals: [
        "lire les quatre prix d'une journée et dessiner la bougie",
        "dire ce que racontent le corps et les mèches",
        "dire qui a gagné sur 5 bougies, avec la règle de l'examen"
      ],
      words: ["bougie", "ouverture", "cloture", "corps", "meche", "refuse"]
    },
    {
      type: "story",
      title: "Scène : la journée d'Awa, de 6 h à 18 h",
      img: "img/ep04_journee.jpg",
      alt: "Awa derrière son étal d'attiéké, son cahier ouvert sur une ligne à quatre prix : 500, 550, 440, 520",
      text: [
        "6 h. Awa ouvre son étal. Première boule vendue à la couturière : 500 francs.",
        "8 h. Trois chauffeurs pressés : « Je prends à ton prix. » Awa monte à 520, 540, puis 550. Puis personne ne veut plus payer 550 : elle redescend à 520.",
        "12 h. La pluie vide le marché. Awa cède trois boules à 440. Puis les lycéens arrivent : ils acceptent 480, puis 500.",
        "18 h. Dernière boule : 520 francs. Awa ferme.",
        "Dans son cahier, quatre prix pour la journée : première boule 500, la plus chère 550, la moins chère 440, dernière boule 520."
      ]
    },
    {
      type: "idea",
      title: "Ce que ça veut dire : la bougie et ses quatre prix",
      points: [
        ["La bougie", "un bâton qui résume une journée avec quatre prix. En anglais : candlestick (dis « candeul-stique »)."],
        ["L'ouverture", "le premier prix de la journée : 500."],
        ["Le plus haut", "le prix le plus cher de la journée : 550."],
        ["Le plus bas", "le prix le moins cher : 440."],
        ["La clôture", "le dernier prix : 520. Clôture veut dire fermeture."]
      ],
      after: "La ligne du cahier d'Awa, c'est exactement une bougie. L'écran suivant montre comment on la dessine."
    },
    {
      type: "map",
      title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Le cahier d'Awa, une ligne par jour : 1er prix, plus haut, plus bas, dernier prix", "La bougie (ouverture, plus haut, plus bas, clôture)"],
        ["Le prix le plus cher du jour chez Awa : 550", "Le plus haut de la bougie"],
        ["Le prix le moins cher du jour chez Awa : 440", "Le plus bas de la bougie"]
      ],
      after: "La ligne du cahier d'Awa et la bougie du Bitcoin, c'est la même chose. Quatre prix pour une journée : chez Awa en francs, sur le Bitcoin en USDT."
    },
    {
      type: "widget",
      widget: "candle",
      title: "Regarde : le corps et les mèches",
      intro: "La journée d'Awa en une bougie. Le corps : le rectangle épais entre l'ouverture (500) et la clôture (520), vert car la journée a fini plus haut. Les mèches : deux traits fins jusqu'au plus haut (550) et au plus bas (440). En anglais : wick (dis « ouique »). Touche chaque partie, puis « journée rouge ».",
      params: { day: { o: 500, h: 550, l: 440, c: 520 }, unit: "francs" },
      after: "Journée rouge : la clôture passe sous l'ouverture. Vert : les acheteurs ont gagné la journée ; rouge : les vendeurs. Une mèche est un prix qui a existé un moment, puis a été refusé : personne n'a plus voulu payer 550, ni vendre à 440."
    },
    {
      type: "check",
      q: "Sur la bougie d'Awa, le trait fin qui monte jusqu'à 550, qu'est-ce que c'est ?",
      choices: [
        "Le corps : la journée a fini à 550",
        "La mèche du haut : 550 a été refusé",
        "L'ouverture : la journée a commencé à 550"
      ],
      answer: 1,
      ok: "Oui. Un trait fin est une mèche. Le prix est allé à 550, puis personne n'a plus voulu payer 550.",
      ko: "Pas encore : le trait fin n'est pas le rectangle. Relis ce que l'app a dit quand tu as touché « Mèche »."
    },
    {
      type: "idea",
      title: "Qui a gagné sur 5 bougies ?",
      points: [
        ["La règle", "Prends l'ouverture de la première des 5 et la clôture de la dernière. D'abord : si la différence fait moins de 1 sur 100 de l'ouverture (moins de 5 F sur 500 F), c'est partagé. Sinon : clôture au-dessus, les acheteurs ont gagné ; en dessous, les vendeurs."],
        ["Chez Awa, pas à pas", "Lundi, ouverture 500. 1 sur 100 de 500 : 500 ÷ 100 = 5 F. Vendredi, clôture 520. 520 − 500 = 20 F. 20 est plus que 5 : pas partagé. 520 est au-dessus de 500 : les acheteurs ont gagné la semaine."]
      ],
      after: "Retiens-la : elle te servira à l'examen de fin de saison, la Porte 1."
    },
    {
      type: "check",
      q: "Les 5 jours d'Awa : lundi, première boule à 500. Vendredi, dernière boule à 520. Qui a gagné la semaine ?",
      choices: [
        "Les acheteurs : 520 est au-dessus de 500",
        "Les vendeurs : vendredi est une journée rouge",
        "Partagé : 20 francs, c'est presque égal"
      ],
      answer: 0,
      ok: "Oui. 1 sur 100 de 500, c'est 5 F ; 20 F, c'est plus : pas partagé. 520 est au-dessus de 500 : acheteurs.",
      ko: "Pas encore : oublie les jours un par un. Calcule d'abord 1 sur 100 de 500, puis compare 520 à 500."
    },
    {
      type: "widget",
      widget: "candles",
      title: "Joue : la Chasse aux mèches",
      intro: "Trente vraies bougies du Bitcoin, une par jour, en USDT. Touche les cinq bougies aux mèches les plus longues. Mèche la plus longue en haut : le haut a été refusé, personne n'a voulu payer plus. En bas : le bas a été refusé, personne n'a voulu vendre moins.",
      params: { mode: "hunt" },
      after: "Score sur 5. À 5 sur 5 : badge Œil de mèche. Tu pourras rejouer dans Jeux, le menu des jeux de l'app. Pas de connexion ? L'app montre des bougies d'exemple : joue dessus."
    },
    {
      type: "mission",
      intro: "5 minutes, dans l'app. Pas de compte, pas d'argent.",
      steps: [
        "Touche « Revoir le jeu », sous cette mission : les trente bougies. La plus à droite, c'est aujourd'hui, pas finie : la journée va de minuit à minuit, heure d'Abidjan.",
        "Sa couleur : vert (a fini plus haut) ou rouge (a fini plus bas) ?",
        "Sa mèche la plus longue : en haut ou en bas ? Donc quel côté a été refusé ?",
        "Écris une ligne : date, couleur, côté refusé, dernier prix affiché sous le dessin.",
        "Facultatif : sur une bourse crypto, par exemple binance.com, sans compte, note les quatre prix de la dernière bougie BTC/USDT."
      ],
      note: { label: "Ta ligne du jour", placeholder: "ex. : 08/11 · verte · mèche la plus longue en bas, le bas refusé · dernier prix 100 000 USDT" },
      fallback: "Si les vraies bougies ne chargent pas, l'app montre des bougies d'exemple. Fais les étapes dessus. La mission compte."
    },
    {
      type: "post",
      questions: [
        { q: "Dans le carnet d'ordres, à quoi reconnaît-on un mur ? Peut-il disparaître d'un coup ?",
          a: "Une ligne avec une quantité beaucoup plus grosse que les autres. Oui : son propriétaire peut la retirer à tout moment." },
        { q: "Moussa veut 100 boules d'un coup. Il paie 500, puis 510, puis 520. Comment s'appelle ce coût en plus ?",
          a: "Le glissement (slippage) : son gros ordre a mangé plusieurs lignes du carnet d'ordres, chacune plus chère." },
        { q: "Quels quatre prix résument la journée d'Awa ? Et comment les dessiner en un seul bâton ?",
          a: "Ouverture, plus haut, plus bas, clôture. Un corps entre ouverture et clôture (vert si elle finit plus haut), des mèches jusqu'au plus haut et au plus bas." }
      ]
    },
    {
      type: "explain",
      prompt: "Explique à Moussa, avec tes mots, comment on dessine une bougie avec les quatre prix d'une journée.",
      min: 30,
      model: "On prend quatre prix : l'ouverture (le premier), le plus haut, le plus bas, la clôture (le dernier). On dessine un rectangle entre l'ouverture et la clôture : vert si elle finit plus haut, rouge sinon. Puis deux traits fins, jusqu'au plus haut et jusqu'au plus bas : les mèches."
    },
    {
      type: "card",
      items: [
        ["C'est quoi", "Un bâton qui résume une journée : ouverture, plus haut, plus bas, clôture. Corps entre ouverture et clôture, mèches jusqu'au plus haut et au plus bas."],
        ["Connecté à", "le prix qui bouge (épisode 2), le carnet d'ordres (épisode 3), l'unité de temps (épisode 5), la Porte 1."],
        ["Exemple", "Awa : 500, 550, 440, 520. Corps vert de 500 à 520. Mèches jusqu'à 550 et 440."],
        ["Vrai même si on ne le dit pas", "La couleur dit si la journée a fini plus haut ou plus bas, pas de combien. Une mèche est un prix refusé."],
        ["Piège classique", "Apprendre par cœur des dessins aux noms compliqués, au lieu de lire les quatre prix."]
      ]
    },
    {
      type: "next",
      title: "À suivre",
      text: "Aujourd'hui, une bougie résumait une journée entière. Demain, la journée d'Awa se dessine autrement : six bougies de 4 heures, ou 96 de 15 minutes. C'est l'unité de temps : le zoom, comme sur une carte du téléphone. Épisode 5 : choisir le bon zoom pour lire le marché."
    }
  ],
  badge: { id: "oeil", name: "Œil de mèche", how: "5 sur 5 à la Chasse aux mèches, épisode 4." }
};
