// Épisode 3 — Le carnet d'ordres : la liste d'attente (contenu v3, revu comité 07/11). Français très simple. Zéro emoji.
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
        "Épisode 2 : Moussa, pressé, veut 100 boules d'un coup. Paie-t-il toutes ses boules au même prix ?",
        "Épisode 2 : acheteuses à 500, vendeuses à 520, personne ne cède. Où sont notés ces prix qui attendent ?",
        "Une grossiste arrive avec 200 boules au même prix. Le prix monte-t-il sans mal au-dessus ? Pourquoi ?"
      ] },

    { type: "words",
      goals: ["lire le carnet d'ordres ligne par ligne", "reconnaître un mur", "calculer le glissement d'un ordre au marché"],
      words: ["ordre", "ordre-limite", "ordre-au-marche", "carnet-ordres", "mur", "glissement"] },

    { type: "story", title: "Scène : le registre de la gérante",
      img: "img/ep03_files.jpg", alt: "Awa et toi devant le registre de la gérante ; les lignes des vendeuses, et le tas de 200 boules de la grossiste",
      text: [
        "Un matin, à Adjamé. Imagine une gérante du marché avec un grand registre : qui attend, à quel prix, combien de boules. Dans un vrai marché, personne ne tient ce registre. Sur le Bitcoin, la bourse crypto le tient pour tout le monde.",
        "Vendeuses : 20 boules à 500, 30 à 510, 50 à 520. Plus haut, la grossiste d'Anyama : 200 boules à 530. Une cliente patiente a écrit : « 450, pas plus, j'attends. »",
        "Moussa, pressé : « 100 boules, tout de suite, je prends vos prix. » Il vide 500, puis 510, puis 520."
      ] },

    { type: "idea", title: "Ce que ça veut dire",
      points: [
        ["Un ordre", "une demande à la bourse crypto : « j'achète » ou « je vends », tant de boules."],
        ["L'ordre limite", "tu écris ton prix dans le registre et tu attends. La cliente à 450 : patiente."],
        ["L'ordre au marché", "tu prends tout de suite le prix de l'autre. Moussa : pressé."],
        ["Le carnet d'ordres", "le registre : tous les ordres limites qui attendent. Une ligne = un prix et sa quantité."],
        ["Le glissement", "un gros ordre au marché vide plusieurs lignes, chacune plus chère : on paie plus cher que prévu."]
      ],
      quote: "Le carnet d'ordres, c'est la liste d'attente du marché." },

    { type: "map", title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["« Je prends à ton prix » (Moussa, pressé)", "L'ordre au marché : prendre tout de suite le prix de l'autre"],
        ["« 450, pas plus, j'attends » (la cliente patiente)", "L'ordre limite : dire son prix et attendre"],
        ["Le registre de la gérante : qui attend, à quel prix, combien", "Le carnet d'ordres (rouge = vendeurs, vert = acheteurs)"],
        ["La grossiste : 200 boules au même prix", "Le mur : une ligne à la quantité énorme"],
        ["Moussa vide 500, puis 510, puis 520", "Le glissement (slippage, dis « slipèdje ») : payer plus cher que prévu"]
      ],
      after: "Même mécanique : le registre devient un écran." },

    { type: "widget", widget: "wall", title: "Joue : Moussa mange le mur",
      intro: "Moussa veut 100 boules tout de suite : un ordre au marché. Touche « Moussa achète 50 boules » deux fois et regarde le prix. Puis continue jusqu'à ce que le mur tombe.",
      params: { wallQty: 200, unit: "boules" },
      after: "Moussa a payé ligne par ligne. 20 × 500 = 10 000 F. 30 × 510 = 15 300 F. 50 × 520 = 26 000 F. Total : 10 000 + 15 300 + 26 000 = 51 300 F pour 100 boules. Une boule : 51 300 ÷ 100 = 513 F, au lieu de 500 : le glissement. Tant que le mur tenait, le prix butait sur 530. Vidé, le prix saute à 540. La grossiste peut le retirer à tout moment." },

    { type: "check", q: "Moussa voulait payer 500 la boule et a payé 513 la boule. Comment s'appelle cet argent en plus ?",
      choices: ["L'écart (spread) entre le prix acheteur et le prix vendeur", "Le glissement (slippage)", "Le mur de la grossiste"],
      answer: 1,
      ok: "Oui. Le glissement, c'est payer plus cher que prévu parce qu'on a vidé plusieurs lignes.",
      ko: "Pas encore : cet argent en plus vient des lignes vidées une par une, à 510 puis 520. Ce n'est pas l'écart." },

    { type: "idea", title: "Marché plein, marché désert",
      points: [
        ["Marché plein", "le matin, Adjamé est plein : des centaines de vendeuses, des lignes serrées. Beaucoup de boules partent sans presque bouger le prix. Écart de quelques francs, glissement petit. Les professionnels disent « liquide »."],
        ["Marché désert", "le soir, il ne reste qu'Awa : écart de 50 F. Un village à deux vendeuses : des lignes rares, avec des trous. Quelques boules, et le prix saute. Dangereux pour un pressé."]
      ],
      quote: "Le Bitcoin est un marché plein." },

    { type: "widget", widget: "book", title: "Mini-jeu : où est le mur ?",
      intro: "Voici le vrai carnet d'ordres de BTC/USDT, maintenant. Rouge en haut : les vendeurs. Vert en bas : les acheteurs. Touche la plus grosse ligne : c'est le mur. Si toutes se ressemblent, l'app te le dira.",
      params: { levels: 5, wall: true },
      after: "Tu viens de lire le registre, version Bitcoin : chaque ligne est un ordre limite, un patient qui attend. L'app montre seulement cinq lignes de chaque côté ; les vrais murs sont souvent plus loin. Un mur freine, il n'arrête pas : son propriétaire peut le retirer à tout moment." },

    { type: "check", q: "Dans le carnet d'ordres, les lignes rouges, au-dessus de l'écart, c'est qui ?",
      choices: ["Des vendeurs qui attendent, à leur prix vendeur", "Des acheteurs qui attendent, chacun à son prix acheteur", "Des pressés qui viennent d'acheter tout de suite"],
      answer: 0,
      ok: "Oui. Rouge au-dessus = vendeurs qui attendent. Vert en dessous = acheteurs qui attendent.",
      ko: "Pas encore : regarde la couleur des lignes au-dessus de l'écart. Qui demande un prix plus haut que les lignes vertes ?" },

    { type: "mission",
      intro: "5 minutes, dans l'app. Pas de compte, pas d'argent.",
      steps: [
        "Touche « Revoir le jeu », juste sous cette mission : le vrai carnet d'ordres.",
        "Côté rouge, la plus grosse quantité : le mur vendeur. Côté vert : le mur acheteur.",
        "La quantité est en Bitcoin. 0,5 Bitcoin, c'est la moitié d'un Bitcoin.",
        "Écris la date, le prix vendeur (première ligne rouge), et chaque mur : prix, quantité.",
        "Facultatif : sur une bourse crypto, par exemple binance.com, sans compte, cherche le carnet d'ordres BTC/USDT. Le mur est-il encore là dix minutes après ?"
      ],
      note: { label: "Ta ligne de journal", placeholder: "ex. : 08/11 · prix vendeur 100 000,05 · mur vendeur à 100 000,08 : 3,9 Bitcoin · mur acheteur à 99 999,90 : 5,2 Bitcoin" },
      fallback: "Si le vrai carnet d'ordres ne charge pas, l'app montre un exemple : fais les étapes 2 à 4." },

    { type: "post", questions: [
      { q: "Épisode 2 : Moussa, pressé, veut 100 boules d'un coup. Paie-t-il toutes ses boules au même prix ?",
        a: "Non. La ligne à 500 n'a que 20 boules. Il vide aussi 510 et 520 : 513 F la boule, le glissement." },
      { q: "Épisode 2 : acheteuses à 500, vendeuses à 520, personne ne cède. Où sont notés ces prix qui attendent ?",
        a: "Dans le carnet d'ordres : vendeurs en rouge, acheteurs en vert." },
      { q: "Une grossiste arrive avec 200 boules au même prix. Le prix monte-t-il sans mal au-dessus ? Pourquoi ?",
        a: "Non : il faut d'abord acheter ses 200 boules. C'est un mur, qu'elle peut retirer à tout moment." }
    ] },

    { type: "explain",
      prompt: "Explique à Awa, avec tes mots, ce qu'est le glissement. Pourquoi Moussa a-t-il payé 513 et pas 500 ?",
      min: 30,
      model: "Le glissement, c'est payer plus cher que prévu. Moussa voulait 100 boules tout de suite, mais la ligne à 500 n'en avait que 20. Il a vidé aussi 510 et 520 : 51 300 F pour 100 boules, 513 F la boule." },

    { type: "card", items: [
      ["C'est quoi", "Le carnet d'ordres : tous les ordres limites qui attendent. Vendeurs en rouge au-dessus, acheteurs en vert en dessous."],
      ["Connecté à", "l'écart (épisode 1), qui bouge le prix (épisode 2), les frais (épisode 6)."],
      ["Exemple", "Moussa veut 100 boules « à 500 », paie 513 F la boule : 13 F de plus, 13 × 100 = 1 300 F."],
      ["Vrai même si on ne le dit pas", "Un mur peut être retiré à tout moment. Le patient ne paie ni l'écart ni le glissement, mais n'est pas toujours servi."],
      ["Piège classique", "Lire un mur comme une garantie : c'est une information du moment."]
    ] },

    { type: "next", title: "À suivre",
      text: "Aujourd'hui, tu as lu le carnet d'ordres à un instant précis. Demain, épisode 4 : la bougie, un bâton qui résume une journée de prix avec quatre chiffres : premier prix, plus haut, plus bas, dernier prix. Chez Awa : une ligne par jour dans son cahier. Plus tard, tu apprendras le stop (dis « stope », l'arrêt : le prix où tu décides de vendre si tu t'es trompée). Ce jour-là, souviens-toi du glissement." }
  ],
  badge: { id: "file_attente", name: "Liste d'attente", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)." }
};
