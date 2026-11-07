// Épisode 7 — Koffi vend sa formation (contenu). Français très simple. Zéro emoji.
window.EPISODES = window.EPISODES || {};
window.EPISODES.ep07 = {
  id: "ep07",
  num: 7,
  title: "Koffi vend sa formation",
  minutes: 15,
  intro: "Ton cousin Koffi vend une formation. À toi de dire non : tu apprends à reconnaître une arnaque en une minute. Aucun argent, surtout pas à Koffi.",
  screens: [
    {
      type: "pre",
      title: "Avant de commencer : 3 questions",
      questions: [
        "Épisode 6 : un aller-retour coûte combien de frais ? Pourquoi Moussa a-t-il perdu 2 000 F sans que le prix bouge ?",
        "Épisode 6 : où le chiffre des frais est-il écrit, pour le vérifier toi-même, sans compte ?",
        "Un cousin te promet 15 % par semaine, « garanti ». Possible ? D'où viendrait son argent ?"
      ]
    },
    {
      type: "words",
      goals: [
        "reconnaître une arnaque de trading en moins d'une minute",
        "dire pourquoi « agréé BCEAO » pour la crypto est toujours faux",
        "dire, en francs, pourquoi 15 % par semaine est impossible"
      ],
      words: ["arnaque", "formation", "signaux", "levier", "licence", "frais-deblocage"]
    },
    {
      type: "story",
      title: "Scène : Koffi, 60 secondes",
      img: "img/ep07_koffi.jpg",
      alt: "Koffi tend son téléphone : une capture de gains",
      text: [
        "Lis d'un trait. Ses mots sont expliqués après.",
        "« Petite sœur ! Regarde ma capture d'hier : +340 000 F. Ma formation, 55 000 F : garanti, zéro risque, 15 % par semaine. Ramène deux amies : remboursée, plus une commission. Ou je gère ton compte, tu dors. »",
        "« Mon groupe de signaux : 10 000 F par mois, précis à 85 %. Trois places, je ferme ce soir. Mon courtier est agréé BCEAO. Levier ×500 : tes 20 000 F font 10 millions. Pour retirer, 25 000 F de frais de déblocage. Tu envoies par paiement mobile ? »"
      ]
    },
    {
      type: "idea",
      title: "Les mots de Koffi (1) : il promet, il presse",
      points: [
        ["Il promet", "1. Un gain promis : « garanti », « 15 % par semaine », une formation qui promet un résultat. 2. Une capture d'écran (la photo de son écran) comme preuve : ça se fabrique en deux minutes. 3. Des signaux payants, ou un canal gratuit qui pousse vers un groupe « VIP » payant."],
        ["Il presse", "4. L'urgence : « trois places, ce soir ». 5. L'approche en privé : « petite sœur », « tu as été choisie ». 6. « Je gère ton compte » : tes codes, ton écran en partage."]
      ],
      after: "Pas tout compris ? Normal : Koffi compte dessus. La suite à l'écran suivant."
    },
    {
      type: "idea",
      title: "Les mots de Koffi (2) : l'argent sort de ta poche",
      points: [
        ["7. Le levier", "la bourse te prête. ×500 : 20 000 F × 500 = 10 millions. Une baisse de 0,2 % (2 F sur 1 000 F) efface tout."],
        ["8. L'agrément", "une licence, c'est l'autorisation du régulateur (celui qui surveille un marché). La BCEAO (banque centrale) n'en donne aucune pour la crypto. Pas sur son site : pas de licence."],
        ["9. Le parrainage", "des amies, ou un lien vers « son » courtier."],
        ["10. Payer pour retirer", "« déblocage », « vérification », « taxe », « commission ». Ou un petit retrait réussi, puis « dépose plus »."]
      ],
      quote: "Un seul signe suffit pour dire non."
    },
    {
      type: "check",
      q: "Koffi dit : « garanti, zéro risque, 15 % par semaine ». C'est quelle famille de signes ?",
      choices: [
        "Il promet",
        "Il presse",
        "L'argent sort de ta poche"
      ],
      answer: 0,
      ok: "Oui. « Garanti » et « zéro risque » : signe 1, un gain promis. La seule chose garantie en trading, c'est le risque.",
      ko: "Pas encore. Il annonce un gain à l'avance : laquelle des trois familles fait ça ?"
    },
    {
      type: "map",
      title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Koffi vend une « formation garantie »", "L'arnaque de trading : les mêmes dix signes, sur Internet"],
        ["Awa dit son prix et ne promet rien", "L'offre honnête : le risque (la possibilité de perdre) avant le gain"],
        ["Le ticket de place : un prix écrit, un reçu", "Les frais : 0,1 %, écrits sur le site"],
        ["Le soir, Awa rentre avec sa recette, sans payer pour sortir", "Le retrait : ton argent revient. Un petit frais fixe écrit sur le site, jamais un « déblocage »"]
      ],
      after: "L'honnête dit le risque et se laisse vérifier. L'arnaqueur promet et presse."
    },
    {
      type: "widget",
      widget: "detector",
      title: "Joue : le Détecteur d'arnaque",
      intro: "Dix messages, un par un. Touche « Arnaque » ou « Aucun signe ». Attention : aucun signe ne prouve rien, un arnaqueur peut écrire une phrase honnête.",
      params: {
        items: [
          { text: "« Le trading comporte un risque de perdre l'argent que tu as mis. La majorité des gens qui tradent seuls perdent de l'argent. »", scam: false, why: "Aucun signe dans cette phrase. Mais une phrase sur le risque ne prouve rien : les arnaqueurs la copient. Regarde le reste." },
          { text: "« Tu me donnes ton code de paiement mobile et ton mot de passe. Je gère ton compte à ta place, tu dors et tu encaisses. »", scam: true, why: "Signe 6 : il gère ton compte et demande tes codes." },
          { text: "« Regarde ma capture d'écran d'hier : +340 000 F. Ma formation est à 55 000 F et le résultat est garanti. »", scam: true, why: "Signes 1 et 2 : « garanti », formation qui promet un résultat, capture comme preuve." },
          { text: "« L'école en ligne d'une bourse crypto propose un parcours débutant gratuit, en français. Tu peux tout lire sans ouvrir de compte ni déposer un franc. »", scam: false, why: "Aucun signe : gratuit, sans dépôt, aucune promesse. Ça ne prouve rien sur la suite : continue à regarder." },
          { text: "« Mon canal gratuit t'a donné un signal par jour. Pour les autres, il reste deux places ce soir dans le groupe VIP : 10 000 F par mois, précis à 85 %. »", scam: true, why: "Signes 3 et 4 : canal gratuit qui pousse vers un VIP payant, urgence fabriquée. « 85 % » est un chiffre invérifiable." },
          { text: "« Pour acheter des parts d'entreprises à la bourse des actions d'Abidjan, il faut passer par une société autorisée. Ça prend une à trois semaines, et on peut perdre si l'entreprise va mal. »", scam: false, why: "Aucun signe : délai lent, risque annoncé, rien de garanti ni de pressé." },
          { text: "« Notre plateforme est agréée BCEAO pour la crypto. Avec le levier ×500, tes 20 000 F travaillent comme 10 millions. »", scam: true, why: "Signes 8 et 7 : aucune licence crypto chez le régulateur. Levier énorme vendu comme une chance." },
          { text: "« Sur une bourse crypto, un aller-retour (acheter puis revendre) coûte 0,20 % de frais au tarif de base : 0,10 % à l'achat et 0,10 % à la vente. Sur un petit gain, c'est beaucoup. »", scam: false, why: "Aucun signe : un chiffre vérifiable sur le site, et une mise en garde. Des frais ne sont pas une promesse." },
          { text: "« Ton premier retrait de 5 000 F est passé, tu l'as vu. Ton gain de 150 000 F est prêt : paie 25 000 F de frais de vérification par paiement mobile, c'est garanti. »", scam: true, why: "Signes 10 et 1 : payer pour retirer (ici « vérification »), après un petit retrait qui marche ; et « garanti »." },
          { text: "« Bonjour petite sœur, je t'ai choisie. Inscris-toi chez mon courtier avec mon lien, je t'accompagne en privé. »", scam: true, why: "Signes 5 et 9 : approche en privé, lien vers « son » courtier." }
        ]
      },
      after: "Quatre messages sans signe : ils parlent du risque, sans urgence. Aucun signe ne prouve rien : continue à regarder."
    },
    {
      type: "check",
      q: "Koffi promet 15 % par semaine. 15 % de 20 000 F, c'est 3 000 F : 20 000 + 3 000 = 23 000 F après une semaine. 15 % de 23 000, c'est 3 450 : 23 000 + 3 450 = 26 450 F. En refaisant ça 52 fois, on dépasse 28 millions. Pourtant, au Brésil, sur 100 personnes qui tradent chaque jour, 97 ont perdu (2020). D'où vient l'argent de Koffi ?",
      choices: [
        "Du marché, grâce à ses signaux",
        "De toi : formation et signaux",
        "De la bourse crypto, qui le paie"
      ],
      answer: 1,
      ok: "Oui. Si 15 % par semaine existait, Koffi ne vendrait pas une formation à 55 000 F. Son argent vient de toi.",
      ko: "Pas encore. 28 millions en un an : si c'était vrai, vendrait-il une formation ?"
    },
    {
      type: "idea",
      title: "Si tu as déjà payé",
      points: [
        ["N'envoie plus rien", "jamais, même « pour récupérer ». L'argent déjà parti ne revient pas."],
        ["Garde les messages, bloque", "garde les captures comme preuve, puis bloque le numéro. Ne réponds plus."],
        ["Les offres de « récupération »", "quelqu'un qui propose de récupérer ta perte contre des frais, c'est le même arnaqueur, ou son ami."]
      ],
      quote: "Ce n'est pas une honte. Ça s'arrête aujourd'hui."
    },
    {
      type: "mission",
      intro: "5 minutes, dans l'app. Aucune recherche, aucun clic ailleurs.",
      steps: [
        "Relis le discours de Koffi, de mémoire ou en revenant à la scène (bouton « Précédent », il recule d'un écran).",
        "Repère trois signes dans son discours. Écris-les dans la note, avec leur numéro ou leur famille.",
        "Pense à un message que tu as déjà reçu : un cousin, un statut, un groupe. Ne cherche rien, ne clique sur rien.",
        "Ce message avait-il un signe ? Note lequel, ou écris « aucun »."
      ],
      note: { label: "Ta note", placeholder: "Koffi : signes n°..., n°..., n°... Mon message : signe n°... (ou aucun)." },
      fallback: "Aucun message reçu ? Écris « aucun » : c'est une bonne nouvelle, et ça compte."
    },
    {
      type: "post",
      questions: [
        { q: "Épisode 6 : un aller-retour coûte combien de frais ? Pourquoi Moussa a-t-il perdu 2 000 F sans que le prix bouge ?", a: "0,2 % (0,1 % par côté). Dix allers-retours × 200 F = 2 000 F, prix immobile." },
        { q: "Épisode 6 : où le chiffre des frais est-il écrit, pour le vérifier toi-même, sans compte ?", a: "Sur le site de la bourse crypto, sans compte. Un chiffre vérifiable n'est pas une promesse." },
        { q: "Un cousin te promet 15 % par semaine, « garanti ». Possible ? D'où viendrait son argent ?", a: "Non : 20 000 F deviendraient 28 millions en un an, il ne vendrait pas de formation. Son argent vient de toi." }
      ]
    },
    {
      type: "explain",
      prompt: "Explique à Awa, avec tes mots, comment reconnaître une arnaque de trading en moins d'une minute.",
      min: 20,
      model: "Je cherche les signes, en trois familles. Il promet : gain garanti, capture, signaux. Il presse : urgence, message en privé, « je gère ton compte ». L'argent sort de ta poche : levier, agrément introuvable, parrainage, payer pour retirer. Un seul signe suffit pour dire non. Aucun signe ne prouve rien."
    },
    {
      type: "card",
      items: [
        ["C'est quoi", "Dix signes d'arnaque, en trois familles : il promet, il presse, l'argent sort de ta poche. Un seul signe suffit pour dire non."],
        ["Connecté à", "l'écart (épisode 1), les frais (épisode 6) : ce que Koffi ne dit jamais. Porte 1 : 8 messages sur 10. Détecteur : à rejouer dans Jeux."],
        ["Exemple", "Koffi : dix signes en 60 secondes."],
        ["Vrai même si on ne le dit pas", "Zéro signe ne veut pas dire honnête : continue à regarder. Une vraie arnaque prend des semaines ; le premier signe suffit."],
        ["Piège classique", "Demander « et ça rapporte combien ? » avant d'avoir cherché les signes."]
      ]
    },
    {
      type: "next",
      title: "À suivre",
      text: "Si 97 sur 100 perdent et que Koffi ment, qui gagne sur la durée ? Épisode 8 : Awa, encore là après vingt ans. Ses quatre habitudes : une perte petite, un prix de sortie décidé avant, un carnet de décisions, la patience. Puis la Porte 1, l'examen de fin de saison."
    }
  ],
  badge: { id: "detective", name: "Détective", how: "10 sur 10 au Détecteur d'arnaque." }
};
