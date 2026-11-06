// Épisode 6 — Les coûts qu'on ne voit pas (contenu v3, méthode manuel). Français très simple. Zéro emoji.
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
        "Épisode 5 : dans quelle unité de temps décide-t-on la direction, et pourquoi pas en 15 minutes ?",
        "Épisode 5 : Moussa gratte en 15 minutes et vise tout petit. Pourquoi les frais mangent-ils presque tout ?",
        "Moussa achète puis vend du Bitcoin dix fois dans la journée. Le soir, le prix est au même chiffre. A-t-il encore ses 100 000 F ?"
      ] },

    { type: "words",
      goals: [
        "calculer 0,1 % d'un montant, en francs",
        "compter les frais d'un aller-retour : à l'achat et à la vente",
        "dire de combien le prix doit monter pour revenir à zéro"
      ],
      words: ["pourcentage", "frais", "aller-retour", "gain", "perte", "revenir-a-zero"] },

    { type: "story", title: "La scène : deux tickets et un papier", img: "img/ep06_comptes.jpg",
      alt: "Moussa et Awa devant un papier de comptes ; à côté, deux tickets : l'entrée d'Anyama, la place d'Adjamé",
      text: [
        "À Anyama, le matin, Awa paie le ticket d'entrée du marché de gros pour acheter ses 100 boules. À Adjamé, l'après-midi, elle paie le ticket de place pour vendre. Deux tickets : un pour acheter, un pour vendre.",
        "Moussa arrive avec un papier. Il avait 100 000 F sur sa bourse crypto (le site où l'on achète du Bitcoin). Dix fois, il a acheté puis revendu du Bitcoin. Le soir, le prix est revenu au même chiffre. Il lui manque pourtant 2 000 F. « On m'a volé. »",
        "Awa pose ses deux tickets sur le papier. « Toi aussi : un ticket à chaque achat, un à chaque vente. »"
      ] },

    { type: "idea", title: "Ce que ça veut dire : pourcentage et frais",
      points: [
        ["Pourcentage", "une part sur 100. 1 % de 10 000 F = 100 F."],
        ["0,1 %", "dix fois moins que 1 % : 1 franc sur 1 000 francs."],
        ["Le calcul", "1 sur 1 000 s'écrit 0,001. Donc : montant × 0,001. Exemple : 100 000 × 0,001 = 100 F."],
        ["Frais", "l'argent que la bourse crypto garde à chaque achat et à chaque vente. En anglais : fees (dis « fiz »). Ici : 0,1 % à l'achat, 0,1 % à la vente. Ils sont écrits sur le site de la bourse, page « frais » : on peut les vérifier sans compte."]
      ],
      quote: "Wave prend environ 1 % sur un envoi : c'est un frais.",
      after: "Chez Awa : deux tickets. L'entrée à Anyama pour acheter, la place à Adjamé pour vendre." },

    { type: "idea", title: "Un aller-retour, du début à la fin",
      points: [
        ["Aller-retour", "un achat puis une vente de la même chose. L'aller : tu achètes du Bitcoin. Le retour : tu le revends. Les traders disent « un trade » (dis « trède »)."],
        ["Gain", "l'argent en plus à la fin, frais payés."],
        ["Perte", "l'argent en moins à la fin, frais compris."],
        ["Revenir à zéro", "finir avec la même somme qu'au départ, frais payés. Ni gain, ni perte."],
        ["Spot", "mot anglais (dis « spote »). Le seul marché qu'on utilise ici : tu paies avec ton argent, sans emprunter. Tu possèdes vraiment le Bitcoin."],
        ["Ordre limite (rappel, ép. 3)", "dire ton prix et attendre. Beaucoup de bourses crypto prennent alors des frais un peu plus bas."]
      ],
      quote: "Deux tickets par aller-retour." },

    { type: "map", title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Le ticket d'entrée du marché de gros d'Anyama (acheter) et le ticket de place d'Adjamé (vendre) : deux tickets", "Les frais : 0,1 % à l'achat + 0,1 % à la vente"],
        ["La mairie qui organise le marché et vend le ticket de place", "La bourse crypto (le site qui organise le marché et prend des frais)"],
        ["Le franc CFA pour payer", "L'USDT (une monnaie d'Internet qui vaut à peu près 1 dollar, environ 600 F)"],
        ["« Moi je paie 450, pas plus, j'attends » (la cliente patiente)", "L'ordre limite : dire son prix et attendre"]
      ],
      after: "Deux tickets chez Awa : un pour acheter, un pour vendre. Deux fois les frais chez toi : la même mécanique." },

    { type: "widget", widget: "fees", title: "Sur l'écran : combien coûte un aller-retour ?",
      intro: "Glisse le curseur du montant. Lis les frais à l'achat, les frais à la vente, et le total. Puis lis de combien le prix doit monter pour revenir à zéro.",
      params: { feePct: 0.1, spreadPct: 0 },
      after: "Le total en francs change avec le montant. La montée pour revenir à zéro ne change jamais : 0,2 %. L'écart est à 0 F ici. Sur le Bitcoin, il fait un centime de dollar, environ 6 francs, sur plus de cent mille dollars. On peut l'oublier. Sur un marché désert, il faudrait l'ajouter." },

    { type: "check", q: "Tu achètes pour 100 000 F de Bitcoin. Frais de 0,1 % à l'achat : combien, en francs ?",
      choices: ["10 F", "100 F", "1 000 F"], answer: 1,
      ok: "Bravo : 100 000 × 0,001 = 100 F. C'est le ticket de l'aller.",
      ko: "Pas encore : 0,1 %, c'est 1 franc sur 1 000 francs. Combien de fois 1 000 F dans 100 000 F ?" },

    { type: "idea", title: "Le calcul, étape par étape",
      points: [
        ["1. L'achat", "100 000 × 0,001 = 100 F."],
        ["2. La vente", "100 000 × 0,001 = 100 F."],
        ["3. L'aller-retour", "100 + 100 = 200 F, soit 200 sur 100 000 = 0,2 %."],
        ["4. Revenir à zéro", "le prix doit monter de 0,2 %, juste pour payer les 200 F."],
        ["5. Moussa, dix fois", "10 × 200 F = 2 000 F, avec un prix immobile."],
        ["6. Gain visé 0,5 %", "100 000 × 0,005 = 500 F. Frais : 200 ÷ 500 = 0,4, c'est-à-dire 40 sur 100 = 40 % du gain."],
        ["7. Gain visé 5 %", "100 000 × 0,05 = 5 000 F. Frais : 200 ÷ 5 000 = 0,04, c'est-à-dire 4 sur 100 = 4 % du gain."]
      ],
      quote: "Les frais ne changent pas. C'est le gain visé qui change." },

    { type: "check", q: "Moussa fait dix allers-retours de 100 000 F. Le prix finit au même chiffre. Combien a-t-il payé de frais ?",
      choices: ["200 F", "2 000 F", "0 F, le prix n'a pas bougé"], answer: 1,
      ok: "Bravo : 10 × 200 F = 2 000 F. Un prix immobile ne rend pas les tickets.",
      ko: "Pas encore : un aller-retour coûte 200 F. Multiplie par dix." },

    { type: "mission", intro: "5 minutes, dans l'app, avec tes 20 000 F papier (pour de faux).",
      steps: [
        "Reviens à la calculatrice (bouton Précédent, quatre écrans en arrière). Curseur sur 20 000 F. Lis les frais.",
        "Vérifie : 20 000 × 0,001 = 20 F. Puis 20 + 20 = 40 F l'aller-retour.",
        "Prends le dernier prix du Bitcoin (onglet Météo). Calcule prix × 0,002 (0,2 % du prix), puis prix + ce résultat : là, tu reviens à zéro.",
        "Exemple avec 100 000 dollars : 100 000 × 0,002 = 200 ; 100 000 + 200 = 100 200 dollars.",
        "Écris : « Un aller-retour de 20 000 F me coûte 40 F. Pour revenir à zéro, le Bitcoin doit monter de ... à ... »."
      ],
      note: { label: "Tes chiffres et ta phrase", placeholder: "ex. : prix de départ ..., × 0,002 = ..., prix + ... = ..., ma phrase ..." },
      fallback: "Sans prix dans la météo, prends l'exemple de l'étape 4." },

    { type: "post", questions: [
      { q: "Épisode 5 : dans quelle unité de temps décide-t-on la direction, et pourquoi pas en 15 minutes ?",
        a: "En 1 jour. En 15 minutes, le bruit cache la direction et chaque aller-retour coûte l'écart plus les frais." },
      { q: "Épisode 5 : Moussa gratte en 15 minutes et vise tout petit. Pourquoi les frais mangent-ils presque tout ?",
        a: "Les frais ne changent pas : 200 F par aller-retour. Sur 500 F visés, c'est 40 % ; sur 5 000 F, 4 %." },
      { q: "Moussa achète puis vend du Bitcoin dix fois dans la journée. Le soir, le prix est au même chiffre. A-t-il encore ses 100 000 F ? Combien lui manque-t-il ?",
        a: "Non : il manque 2 000 F, soit dix fois 200 F de frais. Le prix immobile ne les rend pas." }
    ] },

    { type: "explain", prompt: "Explique à Moussa, avec tes mots, pourquoi il lui manque 2 000 F. Le prix, lui, est revenu au même chiffre.", min: 30,
      model: "À chaque achat et à chaque vente, la bourse crypto prend des frais : 0,1 % du montant. Un aller-retour de 100 000 F coûte 100 F + 100 F = 200 F. Dix allers-retours : 10 × 200 F = 2 000 F, même si le prix n'a pas bougé." },

    { type: "card", items: [
      ["C'est quoi", "L'argent que la bourse crypto prend à chaque achat et à chaque vente : 0,1 % + 0,1 % = 0,2 % par aller-retour."],
      ["Connecté à", "l'écart (ép. 1), le scalping (ép. 5), les deux tickets d'Awa."],
      ["Exemple", "100 000 F : 100 + 100 = 200 F par aller-retour. Dix fois : 2 000 F, le trou de Moussa."],
      ["Vrai même si on ne le dit pas", "D'un jour à l'autre, la clôture du Bitcoin change en moyenne de 2,2 % (22 francs sur 1 000). En moyenne : on additionne tous les jours, puis on divise. Un aller-retour coûte 0,2 % : presque un dixième d'une journée ordinaire. Dix allers-retours : une journée entière donnée à la bourse."],
      ["Piège classique", "Croire que « prix revenu au même chiffre » veut dire « rien perdu »."]
    ] },

    { type: "next", title: "À suivre",
      text: "Demain, épisode 7 : l'arnaque, une promesse fausse faite pour prendre ton argent. Koffi, le cousin, vend une « formation garantie, 15 % par semaine ». Tu apprendras à reconnaître les signes : « garanti », « sans risque », « paie pour retirer ». Et tu sauras dire pourquoi 15 % par semaine est impossible." }
  ],
  badge: { id: "calculatrice", name: "Calculatrice", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)" }
};
