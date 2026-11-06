// Épisode 1 — Il y a toujours deux prix. Français très simple. Zéro emoji. Format « screens » v3.
window.EPISODES = window.EPISODES || {};
window.EPISODES.ep01 = {
  id: "ep01", num: 1, title: "Il y a toujours deux prix", minutes: 15,
  intro: "Aucun argent, aucun compte. Ton téléphone et 15 minutes : tu apprends ce qu'est un marché, le Bitcoin, et les deux prix.",
  screens: [
    { type: "pre", title: "Avant de commencer : 3 questions", questions: [
      "Au marché, une boule d'attiéké a-t-elle un seul prix, ou plusieurs ? Lesquels ?",
      "Tu achètes une boule 500 francs et tu la revends une seconde plus tard. Récupères-tu tes 500 francs ?",
      "Qui paie plus cher au marché : la personne pressée, ou la personne patiente ? Pourquoi ?"
    ] },
    { type: "words", goals: [
      "dire ce qu'est un marché, le Bitcoin et le trading",
      "lire les deux prix d'un marché : le prix acheteur et le prix vendeur",
      "dire qui paie l'écart : le pressé ou le patient"
    ], words: ["marche", "bitcoin", "trading", "prix-acheteur", "prix-vendeur", "ecart"] },
    { type: "story", title: "Awa, revendeuse d'attiéké", img: "img/ep01_awa.jpg", alt: "Awa, revendeuse d'attiéké, derrière sa table au marché d'Adjamé, des boules devant elle", text: [
      "Awa vend des boules d'attiéké au marché d'Adjamé. Un marché, c'est un endroit où des gens achètent et d'autres vendent.",
      "Le matin, à Anyama, Awa achète ses boules vers 400 francs aux productrices. Awa est l'acheteuse : elle paie pour avoir la boule. Les productrices sont les vendeuses. 400 francs, c'est le prix.",
      "À Adjamé, Awa revend la boule vers 500 francs. Acheter pour revendre plus cher, c'est du trading (dis « trédingue »). Awa est une trader (dis « trédeur »).",
      "Ce cours parle d'un marché pareil, sur Internet (le réseau qui relie tous les téléphones). On y achète et revend le Bitcoin : une monnaie qui existe seulement sur Internet. On n'achète pas un Bitcoin entier : on en achète un morceau, comme une demi-boule."
    ] },
    { type: "story", title: "Moussa est pressé", img: "img/ep01_moussa.jpg", alt: "Moussa, chauffeur Yango, pressé, paie 500 francs une boule à Awa sans discuter", text: [
      "Le soir, Moussa, le chauffeur Yango, arrive en courant : « Donne-moi vite, je prends à ton prix. » Il paie 500 francs la boule, le prix qu'Awa demande. Moussa est pressé : il accepte tout de suite le prix de l'autre.",
      "Une seconde plus tard, Moussa change d'avis et veut revendre la boule à Awa. Awa ne dit pas 500 : « Je te la reprends à 450. » La boule est la même, et les deux prix d'Awa n'ont pas bougé : 500 et 450. Pourtant, Moussa a déjà perdu 50 francs.",
      "Une cliente patiente, elle, dit son prix : « Moi, je paie 450, pas plus. » Et elle attend. Parfois elle est servie, parfois non."
    ] },
    { type: "idea", title: "Il y a toujours deux prix", points: [
      ["Le prix vendeur (ask)", "le prix le plus bas qu'un vendeur demande maintenant (dis « asque »). Chez Awa : 500 francs."],
      ["Le prix acheteur (bid)", "le prix le plus haut qu'un acheteur propose maintenant (dis « bide »). Chez Awa : 450 francs."],
      ["L'écart (spread)", "la différence entre les deux (dis « sprède »). Chez Awa : 50 francs."],
      ["La règle", "le pressé accepte le prix de l'autre : il paie l'écart. Le patient dit son prix et attend : il ne paie pas l'écart, mais n'est pas toujours servi. Seule Awa, qui vend à 500 et reprend à 450, reçoit l'écart."]
    ], quote: "Il n'y a jamais un seul prix. Il y en a toujours deux, et le pressé paie l'écart." },
    { type: "map", title: "Chez Awa, sur le Bitcoin : la même chose", rows: [
      ["La boule d'attiéké", "Le Bitcoin (une monnaie qui existe seulement sur Internet)"],
      ["Le franc CFA pour payer", "L'USDT (une monnaie d'Internet qui vaut environ 1 dollar, soit environ 600 francs)"],
      ["La mairie qui organise le marché et vend le ticket de place", "La bourse crypto (le site qui organise le marché et prend des frais)"],
      ["Le prix que demande la vendeuse la moins chère", "Le prix vendeur (ask)"],
      ["Le prix que propose l'acheteuse la plus généreuse", "Le prix acheteur (bid)"],
      ["La différence entre les deux", "L'écart (spread)"]
    ], after: "Même mécanique, même règle : le pressé paie l'écart. Sur l'écran, la ligne s'appelle BTC/USDT : le prix d'un Bitcoin entier, payé en USDT." },
    { type: "widget", widget: "moussa", title: "Joue : Moussa, pressé, au marché d'Awa", intro: "Le curseur, c'est le monde au marché : à gauche plein, à droite désert. Glisse-le et regarde l'écart changer. Puis touche « Acheter puis revendre tout de suite » : c'est Moussa, pressé.", params: {}, after: "Plus il y a de monde au marché, plus l'écart est petit. Plus il y a de vendeuses, plus elles se font concurrence, donc l'écart se resserre. Être pressé, c'est accepter de payer l'écart, grand ou petit." },
    { type: "check", q: "Moussa achète une boule à 500 francs. Une seconde plus tard, il la revend à Awa. Combien reçoit-il ?", choices: ["500 francs : il revend au prix qu'il a payé", "450 francs : le prix acheteur, celui où Awa reprend", "550 francs : parce qu'il revend"], answer: 1, ok: "Oui. Il a payé le prix vendeur, 500, et reçoit le prix acheteur, 450. La différence, 50 francs, c'est l'écart.", ko: "Pas encore. Relis ce qu'Awa propose à Moussa quand il veut revendre. Est-ce le même prix que celui qu'il a payé ?" },
    { type: "widget", widget: "book", title: "Le vrai marché du Bitcoin, en direct", intro: "Voici le marché du Bitcoin, maintenant, sur une bourse crypto (le site qui organise ce marché). En rouge, en haut : les vendeurs et leur prix vendeur (ask). En vert, en bas : les acheteurs et leur prix acheteur (bid). Entre les deux : l'écart. Les prix sont en USDT, une monnaie d'Internet qui vaut environ 1 dollar, soit environ 600 francs.", params: { levels: 4, wall: false }, after: "L'écart fait environ un centime de dollar, environ 6 francs. C'est sur un prix de plus de cent mille dollars, environ 60 millions de francs. C'est un marché plein de monde : l'écart est minuscule. Ce prix, c'est celui d'un Bitcoin entier. Avec 20 000 francs, on en achète un tout petit morceau." },
    { type: "check", q: "Sur l'écran du Bitcoin, tu veux acheter tout de suite. Quel prix paies-tu ?", choices: ["Le prix vendeur (ask), en rouge", "Le prix acheteur (bid), en vert", "Le milieu entre les deux"], answer: 0, ok: "Oui. Acheter tout de suite, c'est accepter le prix du vendeur. C'est le prix vendeur, en rouge, le plus haut des deux.", ko: "Pas encore. Quand tu achètes tout de suite, tu acceptes le prix de qui ? Regarde la couleur des vendeurs sur l'écran d'avant." },
    { type: "mission", title: "Mission du jour", intro: "5 minutes, dans l'app. Aucun compte, aucun argent.", steps: [
      "Reviens à l'écran du vrai marché du Bitcoin (bouton Précédent, deux écrans plus haut).",
      "Lis le prix vert le plus proche du milieu : c'est le prix acheteur (bid).",
      "Lis le prix rouge le plus proche du milieu : c'est le prix vendeur (ask).",
      "Écris les deux prix ici, en USDT, avec l'écart (le rouge moins le vert).",
      "Bonus : le même tableau est sur le site d'une bourse crypto, par exemple binance.com, sans compte. Cherche BTC/USDT."
    ], note: { label: "Tes chiffres, en USDT (prix acheteur vert · prix vendeur rouge · écart)", placeholder: "ex. : acheteur 100 000,00 USDT · vendeur 100 000,01 USDT · écart 0,01 USDT (environ 6 francs) · prix d'un Bitcoin entier, j'en achèterais un morceau" }, fallback: "Si l'écran dit « carnet d'exemple » (pas de connexion), note quand même ses chiffres. Le bonus n'est pas obligatoire." },
    { type: "post", questions: [
      { q: "Au marché, une boule d'attiéké a-t-elle un seul prix, ou plusieurs ? Lesquels ?", a: "Deux. Le prix vendeur (ask) : le plus bas qu'un vendeur demande. Le prix acheteur (bid) : le plus haut qu'un acheteur propose." },
      { q: "Tu achètes une boule 500 francs et tu la revends une seconde plus tard. Récupères-tu tes 500 francs ?", a: "Non. Tu as payé le prix vendeur, 500 ; on te reprend au prix acheteur, 450. Tu paies l'écart : 50 francs." },
      { q: "Qui paie plus cher au marché : la personne pressée, ou la personne patiente ? Pourquoi ?", a: "La pressée : elle accepte tout de suite le prix de l'autre et paie l'écart. La patiente dit son prix et attend : elle ne paie pas l'écart, mais n'est pas toujours servie." }
    ] },
    { type: "explain", prompt: "Explique à une amie pourquoi Moussa a perdu 50 francs alors que les prix d'Awa n'ont pas bougé.", min: 30, model: "Au marché, il y a toujours deux prix. Moussa, pressé, a payé le prix vendeur d'Awa : 500 francs. Quand il revend, Awa reprend à son prix acheteur : 450 francs. La différence, 50 francs, s'appelle l'écart. Moussa, le pressé, la paie. Awa, qui vend à 500 et reprend à 450, la reçoit." },
    { type: "card", items: [
      ["C'est quoi", "Un marché a toujours deux prix : le prix acheteur (bid) et le prix vendeur (ask). La différence s'appelle l'écart (spread). Le pressé la paie ; le patient ne la paie pas, mais n'est pas toujours servi. Awa, qui vend à 500 et reprend à 450, la reçoit."],
      ["Connecté à", "le prix qui bouge (épisode 2), le carnet d'ordres (épisode 3), les frais (épisode 6)."],
      ["Exemple", "Moussa paie la boule 500 francs, Awa la reprend à 450. Il perd 50 francs : les deux prix d'Awa n'ont pas bougé."],
      ["Vrai même si on ne le dit pas", "Sur le Bitcoin, c'est pareil : prix vendeur en rouge, prix acheteur en vert. Et on achète un morceau de Bitcoin, pas un entier."],
      ["Piège classique", "Croire que « le prix du Bitcoin » affiché sert à acheter ET à vendre. Non : acheter coûte le prix vendeur, vendre donne le prix acheteur."]
    ] },
    { type: "next", title: "À suivre", text: "Demain, épisode 2 : pourquoi le prix monte et descend. Tu verras que le prix monte quand un acheteur pressé accepte le prix vendeur. Et qu'il descend quand un vendeur pressé accepte le prix acheteur. Avec Moussa, et avec la pluie sur le marché d'Awa." }
  ],
  badge: { id: "deux_prix", name: "Deux prix", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)." }
};
