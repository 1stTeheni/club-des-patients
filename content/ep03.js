// Épisode 3 — Le carnet d'ordres : la liste d'attente (contenu). Français très simple. Zéro emoji.
window.EPISODES = window.EPISODES || {};
window.EPISODES.ep03 = {
  id: "ep03",
  num: 3,
  title: "Le carnet d'ordres : la liste d'attente",
  minutes: 14,
  intro: "Tu vas lire la liste d'attente du marché du Bitcoin ligne par ligne, trouver le mur, et calculer ce que paie un pressé. Aucun argent, aucun compte.",
  screens: [
    { type: "pre", title: "Avant de commencer : 3 questions",
      questions: [
        "Épisode 2 : Moussa, pressé, accepte le prix de la vendeuse, et le prix monte. S'il veut 100 boules d'un coup, paiera-t-il toutes ses boules au même prix ?",
        "Épisode 2 : acheteuses à 500, vendeuses à 520, personne ne cède, le prix ne bouge pas. Où sont notés ces prix qui attendent ?",
        "Une grossiste arrive avec 200 boules au même prix. Le prix peut-il monter facilement au-dessus de son prix ? Pourquoi ?"
      ] },

    { type: "words",
      goals: ["lire le carnet d'ordres ligne par ligne", "reconnaître un mur", "calculer le glissement d'un ordre au marché"],
      words: ["ordre", "ordre-limite", "ordre-au-marche", "carnet-ordres", "mur", "glissement"] },

    { type: "story", title: "Scène : le registre de la gérante du marché",
      img: "img/ep03_files.jpg", alt: "Les lignes des vendeuses, de la moins chère à la plus chère, et au fond la montagne de boules de la grossiste",
      text: [
        "Samedi matin, Adjamé. Awa t'emmène voir la gérante du marché. Elle tient un grand registre : la liste de tous ceux qui attendent. Chaque vendeuse qui attend y écrit son prix et son nombre de boules. Les acheteuses font pareil.",
        "Côté vendeuses : 20 boules à 500, 30 à 510, 50 à 520. Tout en haut, la grossiste d'Anyama : 200 boules à 530. Côté acheteuses, Awa, qui rachète aussi des boules le soir, a écrit : « 450, pas plus, j'attends. »",
        "Moussa arrive, pressé : « 100 boules, tout de suite, je prends vos prix. » Il vide la ligne à 500, puis 510, puis 520. Il s'arrête devant les 200 boules à 530."
      ] },

    { type: "idea", title: "Ce que ça veut dire",
      points: [
        ["Un ordre", "une demande à la bourse crypto : « j'achète » ou « je vends », tant de boules (et, pour l'ordre limite, à tel prix)."],
        ["L'ordre limite", "tu écris ton prix dans le registre et attends. Awa à 450 : patiente."],
        ["L'ordre au marché", "tu prends tout de suite le prix de l'autre, sans dire de prix. Moussa : pressé."],
        ["Le carnet d'ordres", "le registre de la gérante : tous les ordres limites qui attendent. Une ligne = un prix et sa quantité."]
      ],
      quote: "Le carnet d'ordres, c'est la liste d'attente du marché : qui attend, à quel prix, pour combien.",
      after: "Un ordre au marché ne s'écrit pas dans le registre : il vide les lignes des autres." },

    { type: "map", title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["« Je prends à ton prix » (Moussa, pressé)", "L'ordre au marché : prendre tout de suite le prix de l'autre"],
        ["« Moi je paie 450, pas plus, j'attends » (Awa, patiente, qui rachète des boules le soir)", "L'ordre limite : dire son prix et attendre"],
        ["Le registre de la gérante du marché : qui attend, à quel prix, combien de boules", "Le carnet d'ordres (lignes rouges = vendeurs, vertes = acheteurs)"],
        ["La grosse productrice d'Anyama avec 200 boules au même prix", "Le mur (une ligne avec une quantité énorme)"],
        ["Moussa veut 100 boules : il vide 500, puis 510, puis 520", "Le glissement (slippage)"]
      ],
      after: "C'est la même mécanique : seul le registre change, il devient un écran." },

    { type: "widget", widget: "book", title: "Regarde : le vrai carnet d'ordres, en direct",
      intro: "Voici le vrai carnet d'ordres de BTC/USDT (le Bitcoin payé en USDT), sur une bourse crypto. Lignes rouges au-dessus : les vendeurs qui attendent, chacun avec son prix vendeur (ask) et sa quantité. Lignes vertes en dessous : les acheteurs qui attendent, avec leur prix acheteur (bid). Au milieu : l'écart (spread), la différence entre le premier rouge et le premier vert. Regarde une ligne rouge, puis une verte. À gauche : le prix, en USDT. À droite : la quantité qui attend, en Bitcoin. Un Bitcoin se coupe en morceaux : 0,5 Bitcoin, c'est possible.",
      params: { levels: 4, wall: false },
      after: "Tu viens de lire le registre de la gérante, version Bitcoin. Chaque ligne est un ordre limite : un patient qui attend." },

    { type: "check", q: "Dans le carnet d'ordres, les lignes rouges, au-dessus de l'écart, c'est qui ?",
      choices: ["Des vendeurs qui attendent, chacun à son prix vendeur", "Des acheteurs qui attendent, chacun à son prix acheteur", "Des pressés qui viennent d'acheter"],
      answer: 0,
      ok: "Bravo : rouge au-dessus = vendeurs qui attendent. Vert en dessous = acheteurs qui attendent.",
      ko: "Pas encore : regarde la couleur des lignes au-dessus de l'écart. Qui demande un prix plus haut que les lignes vertes ?" },

    { type: "widget", widget: "wall", title: "Joue : Moussa mange le mur",
      intro: "Moussa veut 100 boules : un ordre au marché. En attente : 20 boules à 500, 30 à 510, 50 à 520. Au-dessus, la grossiste d'Anyama : 200 boules à 530, le mur. Puis 40 à 540. Touche « Moussa achète 50 boules » deux fois : il vide 500, 510 et 520. 51 300 F pour 100 boules : 513 F la boule. Payer plus cher que prévu, lignes vidées une par une : le glissement (slippage, dis « slipèdje »). Continue : quatre touchers vident le mur.",
      params: { wallQty: 200, unit: "boules" },
      after: "Mur là : le prix bute sur 530. Mur vidé : il saute à 540. La grossiste peut le retirer à tout moment : un mur freine, il ne promet rien." },

    { type: "check", q: "Moussa voulait payer 500 la boule et a payé 513 la boule. Comment s'appelle cet argent en plus ?",
      choices: ["L'écart (spread) entre prix acheteur et prix vendeur", "Le glissement (slippage)", "Le mur"],
      answer: 1,
      ok: "Bravo : le glissement, c'est payer plus cher que prévu parce qu'on a vidé plusieurs lignes.",
      ko: "Pas encore : cet argent en plus vient des lignes vidées une par une, à 510 puis 520. Ce n'est pas l'écart." },

    { type: "widget", widget: "book", title: "Mini-jeu : où est le mur ?",
      intro: "Le vrai carnet d'ordres, encore. Adjamé un samedi : des centaines de vendeuses, des lignes serrées. Beaucoup de boules partent sans presque bouger le prix. C'est un marché plein : écart petit, glissement petit. Les professionnels disent « liquide ». Un village à deux vendeuses : des lignes rares, avec des trous. Quelques boules, et le prix saute. C'est un marché désert : dangereux pour un pressé. Le Bitcoin est un marché plein. Touche la plus grosse ligne : c'est le mur. Si toutes se ressemblent, l'app te le dira.",
      params: { levels: 5, wall: true },
      after: "Un mur freine, il n'arrête pas. Son propriétaire peut le retirer à tout moment : une information du moment, pas une promesse." },

    { type: "mission",
      intro: "5 minutes, dans l'app. Pas de compte, pas d'argent.",
      steps: [
        "Reviens à l'écran « Où est le mur ? » : c'est le vrai carnet d'ordres.",
        "Côté rouge, la plus grosse quantité est le mur vendeur. Côté vert, le mur acheteur.",
        "La quantité est en Bitcoin. Un Bitcoin se coupe en morceaux : 8,2 Bitcoin ou 0,5 Bitcoin, c'est possible.",
        "Écris une ligne : la date, le prix vendeur (la ligne rouge juste au-dessus de l'écart), chaque mur avec son prix et sa quantité.",
        "Bonus : sur une bourse crypto, par exemple binance.com, sans compte, cherche le carnet d'ordres de BTC/USDT. Le mur est-il encore là dix minutes après ?"
      ],
      note: { label: "Ta ligne de journal", placeholder: "ex. : 08/11 · prix vendeur 100 000 · mur vendeur à 100 600 : 8,2 Bitcoin · mur acheteur à 99 400 : 11,5 Bitcoin" },
      fallback: "Si le vrai carnet d'ordres ne charge pas, l'app montre un exemple. Fais les étapes 2 à 4 dessus." },

    { type: "post", questions: [
      { q: "Épisode 2 : Moussa, pressé, accepte le prix de la vendeuse, et le prix monte. S'il veut 100 boules d'un coup, paiera-t-il toutes ses boules au même prix ?",
        a: "Non. La ligne à 500 n'a que 20 boules. Il vide aussi 510 et 520 : 513 F la boule. C'est le glissement (slippage)." },
      { q: "Épisode 2 : acheteuses à 500, vendeuses à 520, personne ne cède, le prix ne bouge pas. Où sont notés ces prix qui attendent ?",
        a: "Dans le carnet d'ordres : ce sont des ordres limites. Vendeurs en rouge au-dessus, acheteurs en vert en dessous." },
      { q: "Une grossiste arrive avec 200 boules au même prix. Le prix peut-il monter facilement au-dessus de son prix ? Pourquoi ? Et comment s'appelle cette ligne ?",
        a: "Non : il faut d'abord acheter ses 200 boules. Cette ligne s'appelle un mur. Mais la grossiste peut reprendre ses boules à tout moment." }
    ] },

    { type: "explain",
      prompt: "Explique à Awa, avec tes mots, ce qu'est le glissement. Pourquoi Moussa a-t-il payé 513 et pas 500 ?",
      min: 30,
      model: "Le glissement, c'est payer plus cher que prévu. Moussa voulait 100 boules tout de suite, mais la ligne à 500 n'en avait que 20. Il a dû vider aussi 510 et 520 : 513 F la boule." },

    { type: "card", items: [
      ["C'est quoi", "Le carnet d'ordres : tous les ordres limites qui attendent. Vendeurs en rouge au-dessus, acheteurs en vert en dessous, un prix et une quantité par ligne."],
      ["Connecté à", "prix acheteur, prix vendeur et écart (épisode 1). Qui bouge le prix (épisode 2). Les frais (épisode 6)."],
      ["Exemple", "Moussa veut 100 boules « à 500 » et paie 513 F la boule. Glissement : 13 F par boule, 1 300 F en tout."],
      ["Vrai même si on ne le dit pas", "Un mur peut être retiré à tout moment. Marché plein : glissement petit. Marché désert : glissement énorme. Le patient ne paie pas l'écart ni le glissement, mais il n'est pas toujours servi."],
      ["Piège classique", "Lire un mur comme une garantie, alors que c'est une information du moment."]
    ] },

    { type: "next", title: "À suivre",
      text: "Aujourd'hui, tu as lu le carnet d'ordres à un instant précis. Demain, épisode 4 : la bougie. Un bâton qui résume une journée entière de prix avec quatre chiffres. Premier prix, plus haut, plus bas, dernier prix. Chez Awa : une ligne par jour dans son cahier, 500, 550, 440, 520. Tu as déjà vu ces bâtons verts et rouges dans ta météo du marché." }
  ],
  badge: { id: "file_attente", name: "Liste d'attente", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)." }
};
