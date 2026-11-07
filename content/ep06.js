// Épisode 6 — Les coûts qu'on ne voit pas (contenu v3, revu comité 07/11). Français très simple. Zéro emoji.
window.EPISODES = window.EPISODES || {};
window.EPISODES.ep06 = {
  id: "ep06",
  num: 6,
  title: "Les coûts qu'on ne voit pas",
  minutes: 15,
  intro: "Tu apprends ce qu'est un pourcentage, ce que sont les frais, et pourquoi Moussa a perdu 2 000 F sans que le prix bouge. Aucun argent, aucun compte.",
  screens: [
    { type: "pre", title: "Avant de commencer : 3 questions",
      questions: [
        "Épisode 5 : dans quelle unité de temps décide-t-on la direction ? Pourquoi pas en 15 minutes ?",
        "Épisode 5 : Moussa gratte en 15 minutes et vise tout petit. Pourquoi les frais mangent-ils une grosse part ?",
        "Moussa achète puis vend du Bitcoin dix fois. Le soir, même prix. A-t-il encore ses 100 000 F ?"
      ] },

    { type: "words",
      goals: [
        "calculer 0,1 % d'un montant, en francs, en comptant les paquets de 1 000 F",
        "compter les frais d'un aller-retour : à l'achat, puis encore à la vente",
        "dire de combien le prix doit monter pour revenir à zéro"
      ],
      words: ["pourcentage", "frais", "aller-retour", "gain", "perte", "revenir-a-zero"] },

    { type: "story", title: "Scène : deux tickets et un papier", img: "img/ep06_comptes.jpg",
      alt: "Moussa et Awa devant un papier de comptes ; à côté, deux tickets : l'entrée d'Anyama, la place d'Adjamé",
      text: [
        "Le matin, à Anyama, Awa paie le ticket d'entrée pour acheter. L'après-midi, à Adjamé, le ticket de place pour vendre. Deux tickets.",
        "Moussa arrive avec un papier. Il avait 100 000 F sur sa bourse crypto. Dix fois, il a acheté puis revendu du Bitcoin en spot (dis « spote » : avec son argent, en le possédant vraiment). Le soir, même prix. Pourtant, il manque 2 000 F. « On m'a volé. »",
        "Awa pose ses deux tickets sur le papier. « Toi aussi : un ticket à chaque achat, un à chaque vente. » Moussa compte. « Vingt tickets. »"
      ] },

    { type: "idea", title: "Ce que ça veut dire : pourcentage et frais",
      points: [
        ["Pourcentage", "tu envoies 10 000 F par Wave, Wave garde 100 F : c'est 1 %, 1 F sur 100 F."],
        ["0,1 %", "dix fois moins : 1 F sur 1 000 F. Compte les paquets de 1 000 F : 20 000 F, 20 paquets, 20 F. 100 000 F, 100 paquets, 100 F."],
        ["Calculatrice", "même chose : le montant × 0,001."],
        ["Frais", "ce que la bourse crypto garde à chaque achat et à chaque vente. En anglais : fees (dis « fiz »). Ici : 0,1 % à l'achat, 0,1 % à la vente."]
      ],
      quote: "Wave prend 1 %. La bourse crypto prend 0,1 %, dix fois moins." },

    { type: "idea", title: "Un aller-retour, du début à la fin",
      points: [
        ["Aller-retour", "un achat puis une vente de la même chose. L'aller : tu achètes du Bitcoin. Le retour : tu le revends. Les traders disent « un trade » (dis « trède »)."],
        ["Gain", "l'argent en plus à la fin, frais payés."],
        ["Perte", "l'argent en moins à la fin, frais compris."],
        ["Revenir à zéro", "finir avec la même somme qu'au départ, frais payés. Ni gain, ni perte."]
      ],
      quote: "Deux tickets par aller-retour : les frais à l'achat, puis encore à la vente." },

    { type: "widget", widget: "fees", title: "Sur l'écran : combien coûte un aller-retour ?",
      intro: "Glisse le curseur du montant. Lis les frais à l'achat, puis encore à la vente, et le total. Puis lis de combien le prix doit monter pour revenir à zéro.",
      params: { feePct: 0.1, spreadPct: 0 },
      after: "Le total en francs change avec le montant. La montée pour revenir à zéro, elle, ne change pas : environ 0,2 % (on arrondit). L'écart est à 0 F ici. Sur le Bitcoin, il fait un centime de dollar, environ 6 F, sur plus de cent mille dollars : on peut l'oublier." },

    { type: "check", q: "Tu achètes pour 50 000 F de Bitcoin. Frais de 0,1 % à l'achat : combien, en francs ?",
      choices: ["5 F", "50 F", "500 F"], answer: 1,
      ok: "Oui. 50 000 F, c'est 50 paquets de 1 000 F : 1 F par paquet, 50 F. C'est le ticket de l'aller.",
      ko: "Pas encore : 0,1 %, c'est 1 F sur 1 000 F. Combien de paquets de 1 000 F dans 50 000 F ?" },

    { type: "map", title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Le ticket d'entrée d'Anyama (acheter) et le ticket de place d'Adjamé (vendre)", "Les frais : 0,1 % à l'achat, puis encore 0,1 % à la vente"],
        ["La mairie qui organise le marché et vend les tickets", "La bourse crypto : le site qui organise le marché et prend les frais"],
        ["Awa paie ses boules avec son argent et les a dans son panier", "Le spot (dis « spote ») : acheter avec son argent et posséder vraiment le Bitcoin"]
      ],
      after: "Deux tickets chez Awa. Chez toi : les frais à l'achat, puis encore à la vente. La même mécanique." },

    { type: "idea", title: "Le calcul, en francs",
      points: [
        ["Aller-retour de 100 000 F", "100 paquets : 100 F à l'achat, puis encore 100 F à la vente : 200 F."],
        ["Revenir à zéro", "le prix doit monter d'environ 0,2 % : 200 F sur 100 000 F."],
        ["Moussa, dix fois", "10 × 200 F = 2 000 F, avec un prix immobile."],
        ["Gain visé 500 F", "les frais prennent 200 F, il reste 300 F : 2 F sur 5, presque la moitié."],
        ["Gain visé 5 000 F", "sur plusieurs semaines : il reste 4 800 F, une petite part. « Visé » n'est pas « obtenu »."]
      ],
      quote: "Les frais ne changent pas. C'est le gain visé qui change." },

    { type: "check", q: "Moussa fait dix allers-retours de 50 000 F. Le prix finit au même chiffre. Combien a-t-il payé de frais ?",
      choices: ["100 F", "1 000 F", "0 F, le prix n'a pas bougé"], answer: 1,
      ok: "Oui. 50 F + 50 F = 100 F par aller-retour, et 10 × 100 F = 1 000 F. Un prix immobile ne rend pas les tickets.",
      ko: "Pas encore : un aller-retour de 50 000 F, c'est 50 F à l'achat, puis encore 50 F à la vente. Multiplie par dix." },

    { type: "mission", intro: "5 minutes, dans l'app. Pour de faux : un aller-retour de 40 000 F.",
      steps: [
        "Compte les paquets de 1 000 F dans 40 000 F. Frais à l'achat : ... F. À la vente : ... F. En tout : ... F.",
        "Vérifie sur la calculatrice (« Revoir le jeu », juste sous cette mission), curseur sur 40 000 F.",
        "Prends le dernier prix du Bitcoin en dollars (ta météo de ce matin, ou le carnet de l'épisode 3). Garde les chiffres avant la virgule, enlève les trois derniers, puis multiplie par 2 : c'est 0,2 % du prix. Exemple : 100 000 → 100 → 200.",
        "Ajoute-le au prix : 100 000 + 200 = 100 200. Là, tu reviens à zéro, à peu près."
      ],
      note: { label: "Tes chiffres", placeholder: "ex. : achat ... F, vente ... F, en tout ... F · prix de départ ... dollars, prix de retour à zéro ... dollars" },
      fallback: "Sans prix dans la météo, prends l'exemple : 100 000 dollars." },

    { type: "post", questions: [
      { q: "Épisode 5 : dans quelle unité de temps décide-t-on la direction ? Pourquoi pas en 15 minutes ?",
        a: "En 1 jour. En 15 minutes, le bruit cache la direction et chaque aller-retour a ses frais." },
      { q: "Épisode 5 : Moussa gratte en 15 minutes et vise tout petit. Pourquoi les frais mangent-ils une grosse part ?",
        a: "200 F de frais par aller-retour, toujours. Sur 500 F visés, il reste 300 F." },
      { q: "Moussa achète puis vend du Bitcoin dix fois. Le soir, même prix. A-t-il encore ses 100 000 F ?",
        a: "Non : il manque 2 000 F, dix fois 200 F de frais. Le prix immobile ne les rend pas." }
    ] },

    { type: "explain", prompt: "Explique à Moussa, avec tes mots, pourquoi il lui manque 2 000 F. Le prix, lui, est revenu au même chiffre.", min: 30,
      model: "À chaque achat et à chaque vente, la bourse crypto prend des frais : 0,1 % du montant, 1 F par paquet de 1 000 F. Un aller-retour de 100 000 F coûte 100 F + 100 F = 200 F. Dix allers-retours : 10 × 200 F = 2 000 F, même si le prix n'a pas bougé." },

    { type: "card", items: [
      ["C'est quoi", "Ce que la bourse crypto prend à l'achat, puis à la vente : 0,1 % + 0,1 % = 0,2 % par aller-retour."],
      ["Connecté à", "l'écart (épisode 1), le scalping (épisode 5), les tickets d'Awa."],
      ["Exemple", "100 000 F : 200 F l'aller-retour. Dix fois : 2 000 F, le trou de Moussa."],
      ["Vrai même si on ne le dit pas", "Le Bitcoin monte ou descend d'environ 2,2 % par jour (bougies de 1 jour, 2025). Bouger n'est pas gagner : un jour sur deux, c'est vers le bas, et les frais restent dus."],
      ["Piège classique", "Croire que « prix revenu au même chiffre » veut dire « rien perdu »."]
    ] },

    { type: "next", title: "À suivre",
      text: "Demain, épisode 7 : l'arnaque, une promesse fausse faite pour prendre ton argent. Koffi, le cousin, vend une « formation garantie ». Il promet 15 % par semaine : tu verras le calcul. Tu apprendras à reconnaître les signes : « garanti », « sans risque », « paie pour retirer »." }
  ],
  badge: { id: "calculatrice", name: "Calculatrice", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)" }
};
