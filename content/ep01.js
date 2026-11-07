// Épisode 1 — Il y a toujours deux prix. Français très simple. Zéro emoji. Format « screens » v3 (révision comité 07/11).
window.EPISODES = window.EPISODES || {};
window.EPISODES.ep01 = {
  id: "ep01", num: 1, title: "Il y a toujours deux prix", minutes: 15,
  intro: "Aucun argent, aucun compte. Ton téléphone et 15 minutes : tu apprends ce qu'est un marché, les deux prix, et ce que ce cours t'apprend.",
  screens: [
    { type: "pre", title: "Avant de commencer : 3 questions", questions: [
      "Une boule d'attiéké a-t-elle un seul prix, ou plusieurs ? Lesquels ?",
      "Tu achètes une boule 500 francs et tu la revends tout de suite. Récupères-tu tes 500 francs ?",
      "Qui paie plus cher : la personne pressée ou la patiente ? Pourquoi ?"
    ] },
    { type: "words", goals: [
      "lire les deux prix d'un marché : le prix acheteur et le prix vendeur",
      "dire qui paie l'écart : le pressé ou le patient",
      "dire ce que ce cours t'apprend, et ce qu'il ne fait jamais"
    ], words: ["marche", "trading", "bitcoin", "prix-acheteur", "prix-vendeur", "ecart"] },
    { type: "story", title: "Awa, revendeuse d'attiéké", img: "img/ep01_awa.jpg", alt: "Awa, revendeuse d'attiéké, derrière sa table au marché d'Adjamé, des boules devant elle", text: [
      "Awa vend des boules d'attiéké au marché d'Adjamé. Un marché : un endroit où des gens achètent et d'autres vendent.",
      "Le matin, Awa achète ses boules 400 francs aux productrices d'Anyama : elle est l'acheteuse, elles, les vendeuses. À Adjamé, elle revend 500 francs. Acheter pour revendre plus cher : du trading (dis « trédingue »). Awa est une trader (dis « trédeur »).",
      "Ce cours parle d'un marché pareil, sur Internet : le Bitcoin, une monnaie d'Internet. On s'en sert pour payer sur Internet, ou on le garde comme l'or. On le paie en USDT, une monnaie d'Internet qui vaut toujours à peu près 1 dollar."
    ] },
    { type: "story", title: "Moussa est pressé", img: "img/ep01_moussa.jpg", alt: "Le soir, Moussa, pressé, paie 500 francs une boule à Awa sans discuter, le marché presque vide", text: [
      "Le soir, le marché se vide. Moussa, le chauffeur, arrive en courant : « Donne-moi vite, je prends à ton prix. » Il paie 500 francs, le prix qu'Awa demande. Moussa est pressé : il accepte tout de suite le prix de l'autre.",
      "Son client annule. Moussa revient : « Reprends ta boule. » Awa : « Je te la reprends à 450. » Les deux prix d'Awa n'ont pas bougé : 500 et 450. Pourtant, Moussa a déjà perdu 50 francs.",
      "Une cliente patiente dit son prix : « Moi, je paie 450, pas plus. » Elle attend. Parfois elle est servie, parfois non."
    ] },
    { type: "idea", title: "Il y a toujours deux prix", points: [
      ["Le prix vendeur (ask)", "le prix le plus bas qu'un vendeur demande (dis « asque »). Chez Awa : 500 francs."],
      ["Le prix acheteur (bid)", "le prix le plus haut qu'un acheteur propose (dis « bide »). Chez Awa : 450 francs."],
      ["L'écart (spread)", "la différence entre les deux (dis « sprède »). Chez Awa : 50 francs."],
      ["La règle", "le pressé accepte le prix de l'autre : il paie l'écart. Le patient dit son prix et attend : il ne le paie pas, mais n'est pas toujours servi. Seule Awa, qui vend 500 et reprend 450, le reçoit. C'est son métier : elle attend, et elle garde les boules que personne n'achète."]
    ], quote: "Deux prix, toujours. Le pressé paie l'écart." },
    { type: "map", title: "Chez Awa, sur le Bitcoin : la même chose", rows: [
      ["La boule d'attiéké", "Le Bitcoin"],
      ["Le franc CFA pour payer", "L'USDT (à peu près 1 dollar, environ 600 francs)"],
      ["La mairie qui organise le marché d'Adjamé", "La bourse crypto (le site qui organise le marché du Bitcoin)"],
      ["Le prix de la vendeuse la moins chère", "Le prix vendeur (ask)"],
      ["Le prix de l'acheteuse la plus généreuse", "Le prix acheteur (bid)"],
      ["La différence entre les deux", "L'écart (spread)"]
    ], after: "Même règle : le pressé paie l'écart. Sur le Bitcoin, ceux qui ont dit leur prix et attendu reçoivent l'écart. Sur l'écran, le prix s'écrit BTC/USDT : un Bitcoin entier, payé en USDT." },
    { type: "widget", widget: "moussa", title: "Joue : Moussa, pressé, au marché d'Awa", intro: "Le curseur, c'est le monde au marché : à gauche beaucoup de vendeuses, à droite presque personne. Glisse-le et regarde l'écart changer. Puis touche « Acheter puis revendre tout de suite » : c'est Moussa, pressé.", params: {}, after: "Le soir chez Awa, peu de monde : écart de 50 F. Le matin, marché plein : écart de quelques francs. Plus il y a de vendeuses, plus elles se font concurrence, plus l'écart est petit. Être pressé, c'est accepter de payer l'écart, grand ou petit." },
    { type: "story", title: "Moussa sort son téléphone", text: [
      "Moussa montre son téléphone à Awa : « Toi, tu fais du trading avec des boules. Sur Internet, on en fait avec d'autres choses. »",
      "Des monnaies des pays : des dollars achetés avec des francs. Des petits morceaux d'entreprises : les actions, qu'on achète à la bourse d'Abidjan, la BRVM. Le cacao et l'or. Et des monnaies d'Internet : les cryptomonnaies.",
      "« La plus connue, c'est le Bitcoin », dit Moussa. Awa regarde l'écran : des chiffres rouges, des chiffres verts. « Deux prix. Comme chez moi. »"
    ] },
    { type: "idea", title: "Ce que ce cours t'apprend", points: [
      ["Un seul marché", "le Bitcoin : ouvert jour et nuit, prix visibles gratuitement sans compte, on achète un morceau. Il bouge beaucoup : il peut perdre un dixième en une semaine. La bourse garde ton argent, pas toi : on choisit une grosse bourse connue."],
      ["Une seule façon", "acheter avec ton argent, attendre des jours ou des semaines, revendre plus cher, comme Awa. Jamais d'argent prêté, jamais parier que le prix baisse : beaucoup y perdent (épisode 7)."],
      ["D'abord pour de faux", "pendant des mois. Argent réel : saison 5, si tu veux."]
    ] },
    { type: "check", q: "Dans ce cours, tu apprends à faire quoi ?", choices: ["Acheter un morceau de Bitcoin avec mon argent, attendre, revendre", "Acheter du Bitcoin avec de l'argent prêté, revendre le jour même", "Acheter des actions, des dollars et du Bitcoin en même temps"], answer: 0, ok: "Oui. Un seul marché, une seule façon, d'abord pour de faux.", ko: "Pas encore. Relis l'écran d'avant : un seul marché, une seule façon, jamais d'argent prêté." },
    { type: "widget", widget: "book", title: "Le vrai marché du Bitcoin, en direct", intro: "Le marché du Bitcoin, maintenant, sur une bourse crypto. En rouge, en haut : les vendeurs et leur prix vendeur (ask). En vert, en bas : les acheteurs et leur prix acheteur (bid). Entre les deux : l'écart. Les prix sont en USDT.", params: { levels: 4, wall: false }, after: "Ce prix, c'est un Bitcoin entier : plus de cent mille dollars (100 000 × 600 = 60 millions de francs). Avec 20 000 francs pour de faux, tu en achèterais un tout petit morceau : la bourse fait le calcul. L'écart : environ un centime de dollar (1 dollar = 100 centimes ; 600 ÷ 100 = 6 francs). Presque rien : il y a beaucoup de monde." },
    { type: "mission", title: "Mission du jour", intro: "5 minutes, dans l'app. Aucun compte, aucun argent.", steps: [
      "Reviens à l'écran du vrai marché : bouton « Revoir le jeu », juste sous cette mission.",
      "Lis le prix vert le plus proche du milieu : le prix acheteur (bid).",
      "Lis le prix rouge le plus proche du milieu : le prix vendeur (ask), celui que tu paies si tu achètes tout de suite.",
      "Écris les deux prix en USDT, et l'écart (le rouge moins le vert).",
      "Facultatif : le même tableau est sur le site d'une bourse crypto, par exemple binance.com, sans compte. Cherche BTC/USDT."
    ], note: { label: "Tes chiffres, en USDT (prix acheteur vert · prix vendeur rouge · écart)", placeholder: "ex. : acheteur 100 000,00 · vendeur 100 000,01 · écart 0,01 USDT (environ 6 francs)" }, fallback: "Si l'écran dit « Pas de connexion », note quand même ses chiffres." },
    { type: "post", questions: [
      { q: "Une boule d'attiéké a-t-elle un seul prix, ou plusieurs ? Lesquels ?", a: "Deux : le prix vendeur (ask), le plus bas demandé ; le prix acheteur (bid), le plus haut proposé." },
      { q: "Tu achètes une boule 500 francs et tu la revends tout de suite. Récupères-tu tes 500 francs ?", a: "Non. Tu paies le prix vendeur, 500 ; on te reprend au prix acheteur, 450. L'écart : 50 francs." },
      { q: "Qui paie plus cher : la personne pressée ou la patiente ? Pourquoi ?", a: "La pressée : elle accepte le prix de l'autre et paie l'écart. La patiente dit son prix et attend, sans toujours être servie." }
    ] },
    { type: "explain", prompt: "Explique à une amie pourquoi Moussa a perdu 50 francs alors que les prix d'Awa n'ont pas bougé.", min: 30, model: "Au marché, il y a toujours deux prix. Moussa, pressé, a payé le prix vendeur d'Awa : 500 francs. Quand il revend, Awa reprend à son prix acheteur : 450 francs. La différence, 50 francs, s'appelle l'écart. Moussa, le pressé, la paie. Awa, qui vend 500 et reprend 450, la reçoit." },
    { type: "card", items: [
      ["C'est quoi", "Deux prix : le prix acheteur (bid) et le prix vendeur (ask). La différence : l'écart (spread). Le pressé la paie, le patient non."],
      ["Connecté à", "prix qui bouge (épisode 2), carnet d'ordres (épisode 3), frais (épisode 6)."],
      ["Exemple", "Moussa paie 500, Awa reprend à 450 : il perd 50 francs sans que les prix bougent."],
      ["Vrai même si on ne le dit pas", "Sur le Bitcoin, ceux qui ont dit leur prix et attendu reçoivent l'écart."],
      ["Piège classique", "Croire qu'un seul prix sert à acheter ET à vendre. Acheter coûte le prix vendeur, vendre donne le prix acheteur."]
    ] },
    { type: "next", title: "À suivre", text: "Demain, épisode 2 : pourquoi le prix monte et descend. Le prix monte quand un acheteur pressé accepte le prix vendeur. Il descend quand un vendeur pressé accepte le prix acheteur. Avec Moussa, et avec la pluie sur le marché d'Awa." }
  ],
  badge: { id: "deux_prix", name: "Deux prix", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)." }
};
