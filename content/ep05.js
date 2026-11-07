// Épisode 5 — L'unité de temps : 1 jour, 4 heures, 15 minutes (contenu). Français très simple. Zéro emoji.
// Chiffres (REDACTION §5) : journée d'Awa 500/550/440/520 ; Moussa 100 000 F papier, 5 gains de 200 F puis une perte de 1 500 F, 200 F de frais par aller-retour (0,2 % de 100 000 F).
window.EPISODES = window.EPISODES || {};
window.EPISODES.ep05 = {
  id: "ep05",
  num: 5,
  title: "L'unité de temps : 1 jour, 4 heures, 15 minutes",
  minutes: 14,
  intro: "Le même marché, résumé avec plus ou moins de détail. Aucun argent, aucun compte, juste ton téléphone.",
  screens: [
    {
      type: "pre",
      title: "Avant de commencer : 3 questions",
      questions: [
        "Une bougie (épisode 4), c'est quoi ? Cite ses quatre prix.",
        "La journée d'Awa en une ligne : ouverture 500, plus haut 550, plus bas 440, clôture 520. Le corps est vert ou rouge ? Pourquoi ?",
        "Une ligne par quart d'heure au lieu d'une par jour : Awa verrait-elle mieux la direction de la semaine ? Pourquoi ?"
      ]
    },
    {
      type: "words",
      goals: [
        "dire ce qu'est une unité de temps et nommer les trois du cours",
        "choisir l'unité de temps où l'on décide la direction",
        "reconnaître le scalping et dire pourquoi il fait perdre"
      ],
      words: ["unite-temps", "un-jour", "quatre-heures", "quinze-minutes", "zoom", "scalping"]
    },
    {
      type: "story",
      title: "Scène 1 : le cahier d'Awa, trois pages pour la même journée",
      img: "img/ep05_cahier.jpg",
      alt: "Le cahier d'Awa ouvert sur trois pages. Une page avec une seule ligne, une avec six lignes, une remplie de petites lignes de chiffres.",
      text: [
        "Awa tient un cahier depuis vingt ans. Chaque soir, une ligne : premier prix, plus haut, plus bas, dernier prix. Samedi, la journée de l'épisode 4 : 500, 550, 440, 520.",
        "Sa nièce demande le détail de la journée. Awa prend une page neuve et coupe la journée en tranches de 4 heures : six lignes, une par tranche.",
        "Troisième page : une ligne par quart d'heure. Même samedi, même marché, mêmes boules vendues. Seulement plus de détail."
      ]
    },
    {
      type: "idea",
      title: "Ce que ça veut dire : l'unité de temps",
      points: [
        ["Unité de temps", "la durée que résume une bougie (une ligne du cahier). En anglais : timeframe (dis « taïme-frème »)."],
        ["1 jour", "une ligne pour tout le samedi : 500, 550, 440, 520."],
        ["4 heures", "24 ÷ 4 = 6 lignes par jour. Exemple, 6 h à 10 h : ouverture 500, plus haut 550, plus bas 500, clôture 520. La nuit : trois lignes vides."],
        ["15 minutes", "4 par heure, 4 × 24 = 96 lignes. Awa vend 12 heures sur 24 : 48 pleines, 48 vides."]
      ],
      quote: "Sur le Bitcoin, les 96 sont pleines : il ne ferme jamais."
    },
    {
      type: "map",
      title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Le même cahier résumé par jour, par 4 heures, par quart d'heure", "L'unité de temps : 1 jour, 4 heures, 15 minutes (le zoom)"],
        ["Une ligne, six lignes ou 96 lignes : les mêmes boules vendues", "Une bougie, six ou 96 : les mêmes échanges, plus ou moins de détail"],
        ["La nuit, trois lignes vides dans le cahier d'Awa", "Sur le Bitcoin, aucune ligne vide : il ne ferme jamais"]
      ],
      after: "Changer d'unité de temps, c'est le zoom. Comme la carte du téléphone : de loin toute la ville, de près une rue."
    },
    {
      type: "widget",
      widget: "timeframes",
      title: "Sur l'écran : les mêmes bougies du Bitcoin, trois unités de temps",
      intro: "Vraies bougies BTC/USDT. Touche 1 jour, puis 4 heures, puis 15 minutes. Règle du cours : la direction (hausse, baisse ou range) se décide en 1 jour. Jamais en 15 minutes : ces bougies se contredisent tous les quarts d'heure.",
      params: {},
      after: "Mêmes échanges, seul le zoom a changé. En 15 minutes, tu vois surtout du bruit : les petits mouvements qu'on ne peut pas prévoir, qui cachent la direction. 4 heures servira plus tard, pour le moment d'entrer (acheter). Pas de connexion ? L'app montre des bougies d'exemple : regarde-les pareil."
    },
    {
      type: "check",
      q: "Tu passes de 1 jour à 15 minutes sur le même graphique. Qu'est-ce qui change ?",
      choices: [
        "Le marché : d'autres acheteurs arrivent",
        "Le détail : chaque bougie résume moins",
        "Le prix du Bitcoin : il devient plus bas"
      ],
      answer: 1,
      ok: "Oui. Même marché, mêmes échanges. Seule la durée résumée par chaque bougie a changé.",
      ko: "Pas encore : les échanges sont les mêmes sur les trois pages du cahier. Qu'est-ce que le zoom change ?"
    },
    {
      type: "story",
      title: "Scène 2 : Moussa fait du scalping en 15 minutes",
      img: "img/ep05_moussa.jpg",
      alt: "Moussa, le chauffeur Yango, toujours pressé, son téléphone à la main",
      text: [
        "Moussa, le chauffeur Yango, veut essayer le Bitcoin. Pour de faux d'abord : 100 000 francs d'argent papier, sur une app d'entraînement. Entre deux courses, il regarde le prix.",
        "Il trouve le réglage 15 minutes. « Ça bouge tout le temps, je peux gagner dix fois par jour ! » C'est le scalping (dis « scalpingue ») : beaucoup de tout petits allers-retours (un achat puis une vente), très vite.",
        "Trois petites bougies vertes, il achète. Deux rouges, il vend. Il gagne 200 francs. Cinq fois. Puis une grosse baisse : il perd 1 500 francs d'un coup."
      ]
    },
    {
      type: "idea",
      title: "Le compte de Moussa, pas à pas",
      points: [
        ["Gagné", "5 × 200 = 1 000 francs."],
        ["Perdu", "une grosse baisse : 1 500 francs d'un coup. 1 000 gagnés, 1 500 perdus : il lui manque 500 francs."],
        ["Les frais", "chaque aller-retour coûte des frais à la bourse crypto : 200 francs ici (demain, tu verras pourquoi). 6 allers-retours : 6 × 200 = 1 200 francs."],
        ["Total", "500 + 1 200 = 1 700 francs de moins qu'au matin. Chaque gain de 200 partait en frais : 200 gagnés, 200 payés."]
      ],
      quote: "Ne fais pas de scalping. Les petits gains partent en frais, et une grosse baisse efface le reste."
    },
    {
      type: "check",
      q: "Moussa gagne 200 francs cinq fois, puis perd 1 500 francs. Quelle est la leçon ?",
      choices: [
        "Regarder encore plus près : en 5 minutes",
        "Pas de scalping : les frais mangent ses gains",
        "Acheter plus vite, avec des bougies de 4 heures"
      ],
      answer: 1,
      ok: "Oui. Même dans le bon sens, ses petits gains partaient en frais. Et une seule grosse baisse a tout effacé.",
      ko: "Pas encore : relis le compte de Moussa. Combien gardait-il, sur chaque gain de 200 francs, après les frais ?"
    },
    {
      type: "mission",
      intro: "5 minutes, dans l'app.",
      steps: [
        "Touche « Revoir le jeu », juste sous cette mission : les trois unités de temps.",
        "Touche 1 jour. Sur les 30 bougies, fais la météo (règle de l'épisode 2) : le plus haut touché sur les 15 bougies récentes est-il au-dessus du plus haut touché sur les 15 anciennes ? ET le plus bas touché sur les 15 récentes est-il au-dessus du plus bas des 15 anciennes ? Deux fois oui = hausse. Deux fois en dessous = baisse. Sinon = range. Écris « 1 jour : ... ».",
        "Touche 15 minutes. Même règle. Écris « 15 minutes : ... ». « Illisible » est juste.",
        "Reviens en 1 jour : l'unité de temps de ta météo."
      ],
      note: { label: "Tes deux phrases", placeholder: "1 jour : ... / 15 minutes : ..." },
      fallback: "Si les vraies bougies ne chargent pas, l'app montre des bougies d'exemple. Fais la mission dessus : elle compte."
    },
    {
      type: "post",
      questions: [
        {
          q: "Une bougie (épisode 4), c'est quoi ? Cite ses quatre prix.",
          a: "Un bâton qui résume une période avec quatre prix : ouverture, plus haut, plus bas, clôture."
        },
        {
          q: "La journée d'Awa en une ligne : ouverture 500, plus haut 550, plus bas 440, clôture 520. Le corps est vert ou rouge ? Pourquoi ?",
          a: "Vert : la clôture 520 est au-dessus de l'ouverture 500. En 4 heures ou en 15 minutes, certaines lignes sont rouges, mais la journée entière reste verte."
        },
        {
          q: "Une ligne par quart d'heure au lieu d'une par jour : Awa verrait-elle mieux la direction de la semaine ? Pourquoi ?",
          a: "Non : plus de lignes, c'est plus de bruit, pas plus de direction. La direction se décide en 1 jour."
        }
      ]
    },
    {
      type: "explain",
      prompt: "Explique à Moussa, avec tes mots, pourquoi trois bougies vertes de 15 minutes ne suffisent pas pour acheter.",
      min: 30,
      model: "Tes bougies de 15 minutes, c'est la page pleine du cahier : beaucoup de détail, beaucoup de bruit. La direction se décide en 1 jour. Et chaque aller-retour coûte des frais : tes gains de 200 francs partaient en frais avant la grosse baisse."
    },
    {
      type: "card",
      items: [
        ["C'est quoi", "La durée que résume chaque bougie. 1 jour pour la direction. 4 heures, plus tard, pour le moment d'entrer. 15 minutes : du bruit."],
        ["Connecté à", "la bougie (épisode 4), la météo en 1 jour (épisode 2), les frais (épisode 6)."],
        ["Exemple", "La journée d'Awa : une ligne, six lignes ou 96 lignes. Même journée, plus ou moins de détail."],
        ["Vrai même si on ne le dit pas", "Plus l'unité de temps est petite, plus on fait d'allers-retours, plus on paie de frais."],
        ["Piège classique", "Croire que plus de bougies, c'est plus d'information. C'est plus de bruit. Moussa : 1 700 francs de moins en un jour."]
      ]
    },
    {
      type: "next",
      title: "À suivre",
      text: "Un autre jour, Moussa a fait dix allers-retours dans la journée. Le soir, le prix du Bitcoin est revenu à sa place du matin. Pourtant son compte a perdu 2 000 francs sur 100 000. Demain, épisode 6 : les frais. Ce que la bourse crypto prend à chaque achat et à chaque vente, calculé au franc près."
    }
  ],
  badge: { id: "altitude", name: "Trois unités de temps", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)" }
};
