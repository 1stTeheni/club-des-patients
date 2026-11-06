// Épisode 4 — La bougie : une journée en un dessin. Français très simple. Zéro emoji.
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
        "dire qui a gagné sur plusieurs bougies"
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
        "8 h. Trois chauffeurs pressés : « Je prends à ton prix. » Awa monte à 520, 540, puis 550. Ensuite, personne ne veut plus payer 550 : Awa doit redescendre à 520.",
        "12 h. La pluie vide le marché. Awa cède trois boules à 440, pour ne pas rentrer avec. Puis les lycéens arrivent. Awa ne veut plus vendre si bas : ils acceptent 480, puis 500.",
        "18 h. Dernière boule, 520 francs. Awa ferme.",
        "Dans son cahier, Awa garde une ligne par jour, avec quatre prix. Première boule 500, la plus chère 550, la moins chère 440, dernière boule 520."
      ]
    },
    {
      type: "idea",
      title: "Ce que ça veut dire : la bougie",
      points: [
        ["La bougie", "un bâton qui résume une journée avec quatre prix. En anglais : candlestick (dis « candeul-stique »)."],
        ["Les quatre prix", "l'ouverture, le premier (500) ; le plus haut (550) ; le plus bas (440) ; la clôture, le dernier (520). Clôture veut dire fermeture."],
        ["Le corps", "un rectangle épais entre ouverture et clôture : 500 à 520. Vert si la clôture est au-dessus (a fini plus haut), rouge si en dessous."],
        ["Les mèches", "deux traits fins, du corps au plus haut (550) et au plus bas (440). En anglais : wick (dis « ouique »)."]
      ],
      after: "Une mèche : un prix qui a existé un moment, puis a été refusé."
    },
    {
      type: "map",
      title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Le cahier d'Awa, une ligne par jour : 1er prix, plus haut, plus bas, dernier prix", "La bougie (ouverture, plus haut, plus bas, clôture)"],
        ["La boule d'attiéké", "Le Bitcoin (une monnaie qui existe seulement sur Internet)"],
        ["Le franc CFA pour payer", "L'USDT (une monnaie d'Internet qui vaut à peu près 1 dollar, environ 600 F)"],
        ["Le prix le plus cher du jour chez Awa", "Le plus haut de la bougie"],
        ["Le prix le moins cher du jour chez Awa", "Le plus bas de la bougie"]
      ],
      after: "La ligne du cahier d'Awa et la bougie du Bitcoin, c'est exactement la même chose. Quatre prix pour une journée : chez Awa en francs, sur le Bitcoin en USDT."
    },
    {
      type: "widget",
      widget: "candle",
      title: "Regarde : la journée d'Awa en une bougie",
      intro: "Voici la journée d'Awa dessinée en une bougie. Touche chaque partie : ouverture, plus haut, plus bas, clôture, corps, mèche. Puis touche le bouton « journée rouge » : mêmes plus haut et plus bas, mais la clôture passe sous l'ouverture.",
      params: { day: { o: 500, h: 550, l: 440, c: 520 }, unit: "francs" },
      after: "Le corps vert va de 500 à 520 : la journée a fini plus haut. La mèche du haut monte à 550 : les chauffeurs pressés ont payé. Puis personne n'a plus voulu payer 550 : Awa a dû redescendre. Le haut a été refusé. La mèche du bas descend à 440 : la pluie, puis personne n'a plus voulu vendre si bas. Les lycéens ont payé 480, puis 500 : le bas a été refusé."
    },
    {
      type: "check",
      q: "Sur la bougie d'Awa, le trait fin qui monte jusqu'à 550, qu'est-ce que c'est ?",
      choices: [
        "Le corps : la journée a fini à 550",
        "La mèche du haut : le prix est allé à 550, puis a été refusé",
        "L'ouverture : la journée a commencé à 550"
      ],
      answer: 1,
      ok: "Bravo : un trait fin est une mèche. Le prix est allé à 550, puis personne n'a plus voulu payer 550.",
      ko: "Pas encore : le trait fin n'est pas le rectangle. Relis ce que l'app a dit quand tu as touché « Mèche »."
    },
    {
      type: "idea",
      title: "Qui a gagné ? Sur une bougie, puis sur plusieurs",
      points: [
        ["Sur une bougie", "vert : les acheteurs ont gagné la journée. Rouge : les vendeurs."],
        ["Sur plusieurs bougies, par exemple les 5 dernières", "compare la clôture de la dernière à l'ouverture de la première. Au-dessus : les acheteurs ont gagné. En dessous : les vendeurs ont gagné. Presque égal (moins de 1 %, moins de 5 francs sur 500) : partagé."],
        ["La semaine d'Awa", "ouverture puis clôture : lundi 480, 500 ; mardi 500, 490 ; mercredi 490, 500 ; jeudi 500, 520 ; vendredi 520, 510."],
        ["Le calcul", "510 (clôture de vendredi) est au-dessus de 480 (ouverture de lundi) : les acheteurs ont gagné la semaine, même si vendredi est rouge."]
      ],
      after: "C'est la règle de la Porte 1."
    },
    {
      type: "check",
      q: "Semaine d'Awa : lundi, première boule à 480. Vendredi, dernière boule à 510. Qui a gagné la semaine ?",
      choices: [
        "Les acheteurs : 510 est au-dessus de 480",
        "Les vendeurs : vendredi est une journée rouge",
        "Partagé : il y a eu des jours verts et des jours rouges"
      ],
      answer: 0,
      ok: "Bravo : on compare seulement la dernière clôture à la première ouverture. 510 est au-dessus de 480.",
      ko: "Pas encore : oublie les jours un par un. Compare la clôture de vendredi à l'ouverture de lundi."
    },
    {
      type: "widget",
      widget: "candles",
      title: "Joue : la Chasse aux mèches",
      intro: "Trente vraies bougies du Bitcoin, une par jour, en USDT. Touche les cinq bougies aux mèches les plus longues. Pour chacune, dis quel côté a été refusé. Règle : regarde la mèche la plus longue. En haut : le haut a été refusé, personne n'a voulu payer plus. En bas : le bas a été refusé, personne n'a voulu vendre moins.",
      params: { mode: "hunt" },
      after: "Score sur 5. À 5 sur 5 : badge Œil de mèche. Tu peux rejouer dans Jeux."
    },
    {
      type: "mission",
      intro: "5 minutes, dans l'app. Pas de compte, pas d'argent.",
      steps: [
        "Touche « Précédent » pour revoir les trente bougies de la Chasse. La bougie la plus à droite, c'est aujourd'hui.",
        "Sa couleur : vert (a fini plus haut) ou rouge (a fini plus bas) ?",
        "Sa mèche la plus longue : en haut ou en bas ? Donc quel côté a été refusé ?",
        "Écris une ligne : la date, la couleur, le côté refusé, le dernier prix affiché sous le dessin.",
        "Bonus : sur une bourse crypto, par exemple binance.com, sans compte, touche la dernière bougie BTC/USDT. Note ses quatre prix. Puis compare sa clôture à l'ouverture de la cinquième avant elle : qui a gagné ?"
      ],
      note: { label: "Ta ligne de journal", placeholder: "ex. : 08/11 · verte · mèche la plus longue en bas · dernier prix 100 000 USDT" },
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
        ["C'est quoi", "Un bâton qui résume une journée avec quatre prix : ouverture, plus haut, plus bas, clôture. Corps entre ouverture et clôture, mèches jusqu'au plus haut et au plus bas."],
        ["Connecté à", "le prix qui bouge (épisode 2), le carnet d'ordres (épisode 3), l'unité de temps (épisode 5), la Porte 1 (qui a gagné sur 5 bougies)."],
        ["Exemple", "Awa : 500, 550, 440, 520. Corps vert de 500 à 520. Mèches jusqu'à 550 et 440."],
        ["Vrai même si on ne le dit pas", "La couleur dit si la journée a fini plus haut ou plus bas, pas combien. Une longue mèche est un prix refusé. Sur plusieurs bougies, seules comptent la première ouverture et la dernière clôture."],
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
