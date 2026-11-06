// Épisode 7 — Le procès de Koffi (contenu). Français très simple. Zéro emoji.
window.EPISODES = window.EPISODES || {};
window.EPISODES.ep07 = {
  id: "ep07",
  num: 7,
  title: "Le procès de Koffi",
  minutes: 15,
  intro: "Ton cousin Koffi vend une formation. Tu es le juge : tu apprends à reconnaître une arnaque en une minute. Aucun argent, surtout pas à Koffi.",
  screens: [
    {
      type: "pre",
      title: "Avant de commencer : 3 questions",
      questions: [
        "Épisode 6 : un aller-retour (acheter puis vendre) coûte combien de frais, en pourcentage ? Et pourquoi Moussa a-t-il perdu 2 000 F sans que le prix bouge ?",
        "Épisode 6 : la bourse crypto prend 0,1 % à l'achat et 0,1 % à la vente. Où ce chiffre est-il écrit, pour le vérifier toi-même, sans compte ?",
        "Un cousin te promet 15 % par semaine, « garanti ». Est-ce possible ? D'où viendrait son argent, à ton avis ?"
      ]
    },
    {
      type: "words",
      goals: [
        "reconnaître une arnaque de trading en moins d'une minute",
        "dire pourquoi « agréé BCEAO » pour la crypto est toujours faux",
        "lire deux études sur les gens qui tradent chaque jour"
      ],
      words: ["arnaque", "formation", "signaux", "levier", "licence", "risque"]
    },
    {
      type: "idea",
      title: "Les mots de Koffi",
      points: [
        ["Arnaque", "une promesse fausse, faite pour prendre ton argent."],
        ["Formation", "des cours de trading vendus par quelqu'un. Honnête si elle ne promet aucun gain."],
        ["Signaux", "des messages « achète », « vends », vendus par quelqu'un. Personne ne connaît l'avenir."],
        ["Levier", "la bourse te prête pour parier plus gros que ce que tu as. ×500 : 20 000 F jouent comme 10 millions. Tu peux tout perdre en quelques minutes."],
        ["Licence (ou agrément)", "l'autorisation officielle d'un régulateur, l'autorité qui surveille un marché. Chez nous : l'AMF-UMOA."],
        ["UEMOA, BCEAO", "les huit pays d'Afrique de l'Ouest qui utilisent le franc CFA ; leur banque centrale."]
      ],
      quote: "Vérifie sur le site de l'AMF-UMOA : si la licence n'y est pas, elle n'existe pas. En 2026, on n'y trouve aucune licence pour la crypto."
    },
    {
      type: "story",
      title: "Scène : le discours de Koffi (60 secondes)",
      img: "img/ep07_koffi.jpg",
      alt: "Koffi, souriant, tend son téléphone : une capture d'écran de gains en gros chiffres verts",
      text: [
        "Lis le discours de Koffi d'un trait. Compte les signes d'arnaque.",
        "« Petite sœur ! Pourquoi apprendre des mois ? Ma capture d'écran d'hier, la photo de mon écran : +340 000 F. Ma formation à 55 000 F : garanti, zéro risque, 15 % par semaine. Ramène deux amies : remboursée, plus une commission, de l'argent par amie. Ou je gère ton compte, tu dors. Mon groupe privé de signaux : 10 000 F par mois, précis à 85 %. Trois places, je ferme ce soir. Mon broker (dis « brokeur »), le courtier qui passe mes ordres, est agréé BCEAO. Levier ×500 : 20 000 F comme 10 millions. Pour retirer, reprendre ton argent, 25 000 F de frais de déblocage avant. Tu envoies par paiement mobile ? »"
      ]
    },
    {
      type: "idea",
      title: "Les 10 signes d'une arnaque",
      points: [
        ["1. Gain promis", "« garanti », « sans risque », « 15 % par semaine »."],
        ["2. Captures", "des images de gains comme preuve. Une capture se fabrique en deux minutes."],
        ["3. Recrutement", "on gagne en ramenant des amies (le parrainage), pas sur le marché."],
        ["4. Ton compte", "« je gère ton compte », tes codes, ton code de paiement mobile."],
        ["5. Signaux", "un groupe de signaux payant."],
        ["6. Urgence", "« trois places, je ferme ce soir »."],
        ["7. Levier", "un levier énorme présenté comme une chance."],
        ["8. Agrément", "introuvable chez un régulateur, ou « agréé BCEAO » pour de la crypto."],
        ["9. Formation", "vendue avec une promesse de résultat."],
        ["10. Frais", "payer pour débloquer un gain."]
      ],
      quote: "Un seul signe présent suffit pour dire non.",
      after: "Le risque, c'est la possibilité de perdre. Une offre honnête en parle avant du gain."
    },
    {
      type: "map",
      title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Koffi, au marché, qui vend une « formation garantie » pour vendre l'attiéké", "L'arnaque de trading : les mêmes dix signes, sur Internet"],
        ["Awa dit son prix et ne promet rien à personne", "L'offre honnête : le risque avant le gain"],
        ["Le ticket de place : un prix écrit, un reçu", "Les frais de la bourse crypto : 0,1 %, écrit sur son site"],
        ["Le cahier d'Awa montre aussi les jours de perte", "Un vrai relevé de compte montre aussi les pertes"],
        ["Le soir, Awa rentre avec sa recette, la mairie ne la fait pas payer pour sortir", "Le retrait : ton argent revient sans « frais de déblocage »"]
      ],
      after: "Des deux côtés, l'honnête dit le risque et se laisse vérifier. L'arnaqueur promet et presse."
    },
    {
      type: "check",
      q: "Koffi dit : « garanti, zéro risque, 15 % par semaine ». C'est quel signe du détecteur ?",
      choices: [
        "Signe 1 : un gain promis",
        "Signe 6 : l'urgence",
        "Aucun signe : c'est honnête"
      ],
      answer: 0,
      ok: "Bravo. « Garanti » et « zéro risque » : signe 1. La seule chose garantie en trading, c'est le risque.",
      ko: "Pas encore. Relis la liste : lequel des dix parle d'un gain promis ?"
    },
    {
      type: "widget",
      widget: "detector",
      title: "Joue : le Détecteur d'arnaque",
      intro: "Dix messages, un par un. Touche « Arnaque » ou « Correct ». Trois mots de plus vont apparaître. La BRVM : la bourse des actions (des parts d'entreprises) des huit pays de l'UEMOA. Une SGI : une société autorisée à y acheter pour toi. L'AMF-UMOA : le régulateur de cette bourse.",
      params: {
        items: [
          { text: "« Le trading comporte un risque de perdre l'argent que tu as mis. D'après les études, la majorité des particuliers perdent de l'argent. »", scam: false, why: "Zéro signe : on parle du risque avant du gain. C'est l'inverse d'une promesse." },
          { text: "« Tu me donnes ton code de paiement mobile et ton mot de passe. Je gère ton compte à ta place, tu dors et tu encaisses. »", scam: true, why: "Signe 4 : il gère ton compte et demande tes codes." },
          { text: "« Regarde ma capture d'écran d'hier : +340 000 F. Ma formation est à 55 000 F et le résultat est garanti. »", scam: true, why: "Signes 1, 2 et 9 : « garanti », capture comme preuve, formation avec promesse de résultat." },
          { text: "« Binance Academy, par exemple, propose un parcours débutant gratuit, en français. Tu peux tout lire sans ouvrir de compte ni déposer un franc. »", scam: false, why: "Zéro signe : gratuit, sans dépôt, aucune promesse. Le mot « Binance » ne fait pas une arnaque." },
          { text: "« Il ne reste que deux places ce soir dans mon groupe privé de signaux. 10 000 F par mois, précision 85 %. »", scam: true, why: "Signes 5, 6 et 1 : signaux payants, urgence fabriquée, rendement chiffré." },
          { text: "« Pour acheter des actions à la BRVM, la bourse des huit pays de l'UEMOA, il faut un compte chez une SGI agréée par l'AMF-UMOA. Ça prend une à trois semaines, et on peut tout perdre si l'entreprise va mal. »", scam: false, why: "Zéro signe : régulateur réel, délai lent, risque annoncé. « Agréé » ici n'est pas « agréé BCEAO pour la crypto »." },
          { text: "« Notre plateforme est agréée BCEAO pour la crypto. Avec le levier ×500, tes 20 000 F travaillent comme 10 millions. »", scam: true, why: "Signes 8 et 7 : aucune licence crypto sur le site de l'AMF-UMOA. Levier énorme vendu comme une chance." },
          { text: "« Sur une bourse en ligne, par exemple Binance, un aller-retour (acheter puis revendre) coûte 0,20 % de frais au tarif de base. C'est 0,10 % à l'achat et 0,10 % à la vente. Sur un petit gain, c'est beaucoup. »", scam: false, why: "Zéro signe : chiffre vérifiable, ton de mise en garde. Des pourcentages ne sont pas une promesse." },
          { text: "« Ton gain de 150 000 F est prêt. Paie juste 25 000 F de frais de déblocage par paiement mobile et tout te sera viré, c'est garanti. »", scam: true, why: "Signes 10 et 1 : payer pour retirer son propre argent, et « garanti »." },
          { text: "« Je ne te dirai jamais quel trade prendre. Je t'apprends à lire un graphique et à calculer ton risque. La décision t'appartient. »", scam: false, why: "Zéro signe : « je t'apprends » n'est pas « je te vends une formation garantie »." }
        ]
      },
      after: "Tu viens de voir que des phrases honnêtes existent. Elles parlent du risque avant du gain, sans urgence."
    },
    {
      type: "widget",
      widget: "bars",
      title: "Si ça rapportait 15 % par semaine, pourquoi ces chiffres ?",
      intro: "Deux vraies études sur les day traders (dis « dé trédeurs »). Un day trader achète et vend dans la journée. « Et al. » veut dire « et d'autres chercheurs ». L'ESMA est le régulateur des marchés en Europe. Chaque barre = la part des gens qui ont perdu de l'argent. Pour l'Europe, l'étude dit 74 à 89 % : la barre montre 74, le chiffre le plus bas.",
      params: {
        bars: [
          { label: "Brésil, traders de futures (contrats à levier) sur un jour, donc des day traders, Chague et al. 2020", pct: 97 },
          { label: "Europe, clients CFD, ESMA 2018 : 74 à 89 %", pct: 74 }
        ],
        source: "Chague, De-Losso et Giovannetti, 2020 (1 551 personnes, plus de 300 jours) ; ESMA, 2018 (clients CFD en Europe)."
      },
      after: "À Taïwan (étude Barber, Lee, Liu et Odean), moins de 1 % gagnent sur la durée. Ces chiffres montrent d'où vient l'argent de Koffi : pas du marché, de toi."
    },
    {
      type: "check",
      q: "Étude du Brésil (Chague et al. 2020) : sur 100 personnes qui tradent chaque jour, combien ont perdu de l'argent ?",
      choices: ["3", "50", "97"],
      answer: 2,
      ok: "Oui : 97 sur 100. Les 55 000 F de la formation de Koffi viennent de toi, pas du marché.",
      ko: "Pas encore. Relis la première barre : c'est le chiffre le plus haut des deux."
    },
    {
      type: "mission",
      intro: "5 minutes, dans l'app. Aucune recherche, aucun clic ailleurs.",
      steps: [
        "Touche « Précédent » jusqu'au discours de Koffi. Relis-le une fois, lentement. Puis reviens ici.",
        "Repère trois signes du détecteur dans son discours. Écris-les dans la note, avec leur numéro.",
        "Pense à un message que tu as déjà reçu : un cousin, un statut, un groupe. Ne cherche rien, ne clique sur rien.",
        "Ce message avait-il un signe du détecteur ? Note lequel, ou écris « aucun »."
      ],
      note: { label: "Ta note", placeholder: "Koffi : signes n°..., n°..., n°... Mon message : signe n°... (ou aucun)." },
      fallback: "Aucun message reçu ? Écris « aucun » : c'est une bonne nouvelle, et ça compte."
    },
    {
      type: "post",
      questions: [
        { q: "Épisode 6 : un aller-retour (acheter puis vendre) coûte combien de frais, en pourcentage ? Et pourquoi Moussa a-t-il perdu 2 000 F sans que le prix bouge ?", a: "0,2 % : 0,1 % à l'achat et 0,1 % à la vente. Dix allers-retours × 200 F = 2 000 F, même avec un prix immobile." },
        { q: "Épisode 6 : la bourse crypto prend 0,1 % à l'achat et 0,1 % à la vente. Où ce chiffre est-il écrit, pour le vérifier toi-même, sans compte ?", a: "Sur le site de la bourse crypto, lisible sans compte. Un chiffre qu'on peut vérifier n'est pas une promesse." },
        { q: "Un cousin te promet 15 % par semaine, « garanti ». Est-ce possible ? D'où viendrait son argent, à ton avis ?", a: "Non : le risque existe toujours, personne ne connaît l'avenir. Son argent vient de toi : les 55 000 F de la formation." }
      ]
    },
    {
      type: "explain",
      prompt: "Explique à Awa, avec tes mots, comment reconnaître une arnaque de trading en moins d'une minute.",
      min: 20,
      model: "Je cherche les signes : gain garanti, capture de gains, recrutement, « je gère ton compte », urgence. Ou encore : levier énorme, faux agrément, formation qui promet, frais pour retirer. Un seul signe présent suffit pour dire non. Une offre honnête parle du risque avant du gain."
    },
    {
      type: "card",
      items: [
        ["C'est quoi", "Dix signes d'arnaque. Un seul signe présent suffit pour dire non. « Garanti » = signe 1. Une offre honnête parle du risque avant du gain."],
        ["Connecté à", "l'écart (épisode 1) et les frais (épisode 6) : ce que Koffi ne dit jamais. La Porte 1 : 8 messages sur 10 au détecteur. Le Détecteur dans Jeux, à rejouer chaque mois."],
        ["Exemple", "Le discours de Koffi : 10 signes en 60 secondes."],
        ["Vrai même si on ne le dit pas", "Celui qui vend la formation gagne sur toi, pas sur le marché. Une licence qu'on ne peut pas vérifier n'existe pas."],
        ["Piège classique", "Demander « et ça rapporte combien ? » avant d'avoir cherché les signes."]
      ]
    },
    {
      type: "next",
      title: "À suivre",
      text: "Si 97 % perdent et que Koffi ment, qui gagne sur la durée ? Épisode 8 : Awa, encore là après vingt ans. Tu verras ses habitudes : des règles écrites, un cahier, la patience. Puis la Porte 1, l'examen de fin de saison."
    }
  ],
  badge: { id: "detective", name: "Détective", how: "10 sur 10 au Détecteur d'arnaque." }
};
