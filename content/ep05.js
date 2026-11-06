// Épisode 5 — L'unité de temps : 1 jour, 4 heures, 15 minutes (contenu). Français très simple. Zéro emoji.
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
        "Le samedi d'Awa en une ligne : ouverture 500, plus haut 550, plus bas 440, clôture 520. Le corps est vert ou rouge ? Pourquoi ?",
        "Une ligne par quart d'heure au lieu d'une par jour : Awa verrait-elle mieux la direction de la semaine ? Pourquoi ?"
      ]
    },
    {
      type: "words",
      goals: [
        "dire ce qu'est une unité de temps et nommer les trois du cours",
        "choisir l'unité de temps où l'on décide la direction",
        "reconnaître le scalping et dire pourquoi il coûte cher"
      ],
      words: ["unite-temps", "un-jour", "quatre-heures", "quinze-minutes", "zoom", "scalping"]
    },
    {
      type: "story",
      title: "Scène 1 : le cahier d'Awa, trois pages pour le même samedi",
      img: "img/ep05_cahier.jpg",
      alt: "Le cahier d'Awa ouvert sur trois pages. Une page avec une seule ligne, une avec six lignes, une remplie de petites lignes de chiffres.",
      text: [
        "Awa tient un cahier depuis vingt ans. Chaque soir, une ligne : premier prix, plus haut, plus bas, dernier prix. Samedi : 500, 550, 440, 520.",
        "Sa nièce demande le détail de la journée. Awa prend une page neuve et coupe la journée en tranches de 4 heures. Vingt-quatre heures : six lignes, une par tranche.",
        "Troisième page : une ligne par quart d'heure. Même samedi, même marché, mêmes boules vendues. Seulement plus de détail."
      ]
    },
    {
      type: "idea",
      title: "Ce que ça veut dire : l'unité de temps",
      points: [
        ["Unité de temps", "la durée que résume une bougie, une ligne du cahier. En anglais : timeframe (dis « taïme-frème »)."],
        ["1 jour", "une ligne pour tout le samedi : 500, 550, 440, 520."],
        ["4 heures", "six lignes par jour. De 6 h à 10 h : ouverture 500, plus haut 550, plus bas 500, clôture 520."],
        ["10 h à 14 h", "ouverture 520, plus haut 520, plus bas 440, clôture 500."],
        ["14 h à 18 h", "ouverture 500, plus haut 520, plus bas 500, clôture 520. La nuit : trois lignes vides."],
        ["15 minutes", "96 lignes, la moitié pleines de petits chiffres, la nuit vide."]
      ],
      quote: "Sur le Bitcoin, les 96 sont pleines : il ne ferme jamais."
    },
    {
      type: "map",
      title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Le cahier d'Awa, une ligne par jour : 1er prix, plus haut, plus bas, dernier prix", "La bougie (ouverture, plus haut, plus bas, clôture)"],
        ["Le même cahier résumé par jour, par 4 heures, par quart d'heure", "L'unité de temps : 1 jour, 4 heures, 15 minutes (le zoom)"],
        ["Le marché d'Adjamé : des gens qui achètent, d'autres qui vendent", "Le marché du Bitcoin : pareil, mais sur Internet, ouvert jour et nuit"],
        ["Awa qui achète pour revendre", "Une trader (dis « trédeur »)"]
      ],
      after: "Trois pages, un seul samedi. Trois unités de temps, un seul marché. Changer d'unité de temps, c'est le zoom. Comme la carte du téléphone : de loin toute la ville, de près une rue."
    },
    {
      type: "widget",
      widget: "timeframes",
      title: "Sur l'écran : les mêmes bougies du Bitcoin, trois unités de temps",
      intro: "Vraies bougies BTC/USDT. Touche 1 jour, puis 4 heures, puis 15 minutes. En 1 jour, la direction se voit d'un coup. En 15 minutes, les bougies se contredisent.",
      params: {},
      after: "Mêmes acheteurs, mêmes vendeurs, mêmes échanges. Tu as seulement changé le zoom : le marché est le même, seul le détail change."
    },
    {
      type: "check",
      q: "Tu passes de 1 jour à 15 minutes sur le même graphique. Qu'est-ce qui change ?",
      choices: [
        "Le marché : d'autres acheteurs et vendeurs arrivent",
        "Le détail : chaque bougie résume moins de temps",
        "Le prix du Bitcoin : il devient plus bas"
      ],
      answer: 1,
      ok: "Bravo : même marché, mêmes échanges. Seule la durée résumée par chaque bougie a changé.",
      ko: "Pas encore : les échanges sont les mêmes sur les trois pages du cahier. Qu'est-ce que le zoom change ?"
    },
    {
      type: "idea",
      title: "La règle : la direction se décide en 1 jour",
      points: [
        ["D'abord 1 jour", "tu regardes les bougies de 1 jour et tu dis : hausse, baisse ou range. C'est la direction."],
        ["Ensuite, plus petit", "4 heures servira plus tard à régler le moment d'entrer (acheter)."],
        ["Jamais l'inverse", "jamais avec des bougies de 15 minutes : elles se contredisent tous les quarts d'heure."],
        ["Pourquoi", "en 15 minutes, le bruit dépasse ce qu'on peut gagner. Le bruit : les petits mouvements qu'on ne peut pas prévoir et qui cachent la direction. Chaque aller-retour (un achat puis une vente) coûte l'écart plus deux fois les frais. Les frais : ce que la bourse crypto prend à chaque achat et à chaque vente ; détail demain."]
      ]
    },
    {
      type: "story",
      title: "Scène 2 : Moussa gratte en 15 minutes",
      text: [
        "Moussa a 100 000 F sur sa bourse crypto. Il a trouvé le réglage 15 minutes sur son application. « Ça bouge tous les quarts d'heure, je peux gagner dix fois par jour ! »",
        "C'est le scalping (dis « scalpingue ») : beaucoup de tout petits allers-retours, très vite. Acheter et revendre dans la même journée, c'est le day trading (dis « dé trédingue »).",
        "Trois petites bougies vertes, il achète. Deux rouges, il vend. Il gagne 200 francs, cinq fois. À chaque fois, il paie l'écart et les frais.",
        "Puis une grosse baisse : il perd 1 500 francs d'un coup. En 1 jour, le marché descendait depuis une semaine. Moussa ne l'a jamais regardé."
      ]
    },
    {
      type: "check",
      q: "Moussa gagne cinq fois 200 francs, puis perd 1 500 francs d'un coup. Quelle unité de temps a-t-il oubliée ?",
      choices: [
        "15 minutes : il fallait regarder encore plus près",
        "1 jour : la direction de la semaine était en baisse",
        "4 heures : il fallait acheter plus vite"
      ],
      answer: 1,
      ok: "Bravo : il a décidé en 15 minutes, sans regarder la direction en 1 jour. Elle descendait.",
      ko: "Pas encore : relis la règle. Dans quelle unité de temps décide-t-on la direction ?"
    },
    {
      type: "mission",
      intro: "5 minutes, dans l'app ou sur ton téléphone.",
      steps: [
        "Reviens à l'écran des trois unités de temps (bouton « Précédent »). Ou un site de graphiques gratuit, par exemple TradingView (tradingview.com), BTC/USDT.",
        "Mets 1 jour (« 1D » ou « 1J »). Regarde les 30 dernières bougies.",
        "Compare les 15 bougies récentes aux 15 anciennes : plus hauts ET plus bas au-dessus = hausse ; en dessous = baisse ; sinon range. Écris « 1 jour : ... ».",
        "Passe en 4 heures (« 4h »). Même règle sur 30 bougies. Écris « 4 heures : ... ».",
        "Passe en 15 minutes (« 15m »). Écris « 15 minutes : ... ». « Illisible » est juste.",
        "Reviens en 1 jour. C'est l'unité de temps de ta météo."
      ],
      note: { label: "Tes trois phrases", placeholder: "1 jour : ... / 4 heures : ... / 15 minutes : ..." },
      fallback: "Pas de bouton sur le site ? L'écran de l'app suffit."
    },
    {
      type: "post",
      questions: [
        {
          q: "Une bougie (épisode 4), c'est quoi ? Cite ses quatre prix.",
          a: "Un bâton qui résume une période avec quatre prix : ouverture, plus haut, plus bas, clôture."
        },
        {
          q: "Le samedi d'Awa en une ligne : ouverture 500, plus haut 550, plus bas 440, clôture 520. Le corps est vert ou rouge ? Pourquoi ?",
          a: "Vert : la clôture 520 est au-dessus de l'ouverture 500. Six lignes en 4 heures, 96 en 15 minutes : le corps reste vert."
        },
        {
          q: "Une ligne par quart d'heure au lieu d'une par jour : Awa verrait-elle mieux la direction de la semaine ? Pourquoi ? Et où décide-t-on la direction ?",
          a: "Non : plus de lignes, c'est plus de bruit, pas plus de direction. On décide en 1 jour."
        }
      ]
    },
    {
      type: "explain",
      prompt: "Explique à Moussa, avec tes mots, pourquoi trois bougies vertes de 15 minutes ne suffisent pas pour acheter.",
      min: 30,
      model: "Tes bougies de 15 minutes, c'est la page pleine du cahier : beaucoup de détail, beaucoup de bruit. La direction se décide en 1 jour, et en 1 jour le marché descendait. Tu as acheté contre la direction, en payant l'écart et les frais à chaque fois."
    },
    {
      type: "card",
      items: [
        ["C'est quoi", "L'unité de temps, c'est la durée que résume chaque bougie. 1 jour pour la direction. 4 heures, plus tard, pour le moment d'entrer. 15 minutes : du bruit."],
        ["Connecté à", "la bougie (épisode 4), la météo en 1 jour (épisode 2), les frais (épisode 6)."],
        ["Exemple", "Le samedi d'Awa : une ligne, six lignes ou 96 lignes. Même journée, même marché, plus ou moins de détail."],
        ["Vrai même si on ne le dit pas", "Plus l'unité de temps est petite, plus on fait d'allers-retours. Et plus on paie l'écart et les frais."],
        ["Piège classique", "Croire que plus de bougies, c'est plus d'information. C'est plus de bruit. Moussa : cinq fois 200 francs, puis 1 500 perdus d'un coup."]
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
