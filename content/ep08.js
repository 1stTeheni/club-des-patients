// Épisode 8 — Qui gagne, et pourquoi (bilan de la saison 1). Français très simple. Zéro emoji.
window.EPISODES = window.EPISODES || {};
window.EPISODES.ep08 = {
  id: "ep08",
  num: 8,
  title: "Qui gagne, et pourquoi",
  minutes: 15,
  intro: "Dernier épisode de la saison 1 (les huit leçons de ce début de cours). Tu vas voir pourquoi Awa est encore là après vingt ans. Aucun argent, aucun compte.",
  screens: [
    {
      type: "pre",
      title: "Avant de commencer : 3 questions",
      questions: [
        "Koffi promet un gain « garanti ». Pourquoi ce seul mot suffit-il pour dire non ?",
        "Sur 100 particuliers qui tradent chaque jour, combien perdent de l'argent, d'après l'étude du Brésil ?",
        "Awa vend de l'attiéké depuis vingt ans et elle est encore là. D'après toi, que fait-elle que Moussa ne fait pas ?"
      ]
    },
    {
      type: "words",
      goals: [
        "dire les quatre habitudes de ceux qui gagnent sur la durée",
        "expliquer pourquoi ceux qui tradent le plus gagnent le moins",
        "dire ce que « pro » veut dire dans ce cours"
      ],
      words: ["capital", "risque", "stop", "journal", "pro", "porte"]
    },
    {
      type: "story",
      title: "Scène 1 : celle qui est encore là",
      img: "img/ep08_awa.jpg",
      alt: "Awa ferme son étal le soir à Adjamé, son cahier sous le bras.",
      text: [
        "Awa ferme son étal. Vingt ans qu'elle vend de l'attiéké à Adjamé. Beaucoup ont commencé avec elle. Presque toutes ont arrêté. Elle est encore là. « Ce n'est pas la chance, dit-elle. Ce sont quatre habitudes. »",
        "Un : elle n'achète que des boules dont la perte reste petite, si elle doit brader. Brader : vendre moins cher que prévu, au prix décidé le matin. Petite : 200 F sur 20 000 F. Deux : le prix de brade, elle le décide le matin, avant d'acheter. Et le soir, elle le tient. Trois : son cahier, une ligne par jour, pertes comprises. Quatre : elle ne va pas à Anyama un jour où les boules sont trop chères."
      ]
    },
    {
      type: "idea",
      title: "Ce que ça veut dire : les quatre habitudes",
      points: [
        ["Le capital", "L'argent mis de côté pour trader, rien d'autre. Ici : 20 000 F pour de faux."],
        ["Un risque petit et fixe", "Le risque du trade : ce que tu acceptes de perdre sur un trade. C'est la perte si le stop (le prix de sortie décidé avant d'acheter) est touché. Au plus 1 % du capital : 200 F sur 20 000 F."],
        ["Le stop", "Stop (dis « stope ») veut dire arrêt : le prix où tu vendras si tu t'es trompée. Il se choisit avant d'acheter."],
        ["Le journal", "Le cahier où tu écris chaque trade, avant (le plan) et après (la leçon)."],
        ["La patience", "Savoir ne rien faire quand le prix n'est pas bon."]
      ],
      quote: "Aucune des quatre habitudes ne devine l'avenir.",
      after: "Moussa n'en a aucune. Awa a les quatre."
    },
    {
      type: "map",
      title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Awa n'achète que des boules dont la perte, si elle doit brader au prix décidé le matin, reste petite (200 F sur 20 000 F)", "Le risque du trade : la perte si le stop est touché, au plus 1 % du capital"],
        ["Le prix de brade qu'Awa décide le matin, avant d'acheter", "Le stop : le prix de sortie décidé avant d'acheter"],
        ["Le cahier d'Awa, une ligne par jour, pertes comprises", "Le journal : chaque trade écrit avant et après"],
        ["Awa ne va pas à Anyama un jour où les boules sont trop chères", "La patience : savoir ne rien faire"],
        ["Awa, encore là après vingt ans : règles, cahier, patience", "Qui gagne sur la durée"]
      ],
      after: "Chaque habitude d'Awa a son nom sur le Bitcoin. Même façon de travailler."
    },
    {
      type: "check",
      q: "Laquelle de ces choses n'est PAS une des quatre habitudes de ceux qui gagnent ?",
      choices: ["Deviner où ira le prix demain", "Le stop choisi avant d'acheter", "Le journal"],
      answer: 0,
      ok: "Bravo : aucune des quatre habitudes ne devine l'avenir.",
      ko: "Pas encore : relis la phrase à retenir de l'écran d'avant. Les quatre habitudes ne devinent rien."
    },
    {
      type: "idea",
      title: "Ceux qui tradent le plus gagnent le moins",
      points: [
        ["L'étude", "Barber et Odean ont compté les résultats de milliers de particuliers (des gens qui tradent leur propre argent). États-Unis, 2000."],
        ["Les 20 % qui tradaient le plus", "11,4 % de gain par an : 1 140 F sur 10 000 F."],
        ["Le marché, sur la même période", "17,9 % par an : 1 790 F sur 10 000 F. C'est ce que donnait acheter une fois, puis garder sans rien faire."]
      ],
      quote: "La différence vient de l'écart (spread) et des frais. Pas du talent.",
      after: "Chaque aller-retour paie l'écart (épisode 1) et les frais (épisode 6). Plus on trade, plus on paie. Acheter une fois et garder rapportait plus que trader tous les jours."
    },
    {
      type: "widget",
      widget: "quiz",
      title: "Le quiz de la saison : 7 questions mélangées",
      intro: "Les questions sautent d'un épisode à l'autre. Réponds de tête, sans rouvrir les cartes.",
      params: {
        items: [
          {
            q: "Bougie rouge, longue mèche en bas. La journée a fini plus haut ou plus bas ? Quel côté a été refusé ?",
            choices: [
              "Plus bas ; le plus bas a été refusé : personne n'a voulu vendre moins",
              "Plus haut ; le plus haut a été refusé : personne n'a voulu payer plus",
              "Ni l'un ni l'autre ; rien n'a été refusé"
            ],
            answer: 0,
            why: "Rouge : la journée a fini plus bas. La longue mèche en bas : le plus bas a été refusé, personne n'a voulu vendre moins."
          },
          {
            q: "Moussa achète à 500 et revend une seconde plus tard à 450. Comment s'appelle ce qu'il a perdu ?",
            choices: [
              "Les frais",
              "L'écart (spread) entre les deux prix",
              "Le stop"
            ],
            answer: 1,
            why: "Il a payé le prix vendeur (ask) et reçu le prix acheteur (bid). La différence entre les deux, c'est l'écart (spread)."
          },
          {
            q: "100 000 F, un aller-retour : combien de francs, et que doit faire le prix pour revenir à zéro ?",
            choices: [
              "200 F ; le prix doit monter de 0,2 %",
              "200 F ; le prix n'a rien à faire",
              "Rien : un aller-retour est gratuit"
            ],
            answer: 0,
            why: "Un aller-retour coûte 0,2 %, soit 200 F sur 100 000 F. Le prix doit monter d'autant, juste pour revenir à zéro."
          },
          {
            q: "« Le prix monte parce qu'il y a de la manipulation. » Vrai ou faux ? Quelle est la seule vraie raison ?",
            choices: [
              "Vrai : quelqu'un triche",
              "Faux : quelqu'un a accepté de payer plus",
              "Faux : le prix monte tout seul"
            ],
            answer: 1,
            why: "Le prix monte pour une seule raison : quelqu'un, quelque part, a accepté de payer plus."
          },
          {
            q: "Une pub dit « agréé BCEAO, levier ×500, trois places ce soir ». Combien de signes du détecteur dans cette pub ?",
            choices: [
              "Trois : agrément invérifiable, levier énorme, urgence. Un seul suffisait pour dire non.",
              "Aucun : « agréé BCEAO » prouve que c'est honnête",
              "On ne peut pas savoir sans essayer avec un peu d'argent"
            ],
            answer: 0,
            why: "Trois signes du détecteur : agrément invérifiable, levier énorme, urgence. Un seul suffisait pour dire non."
          },
          {
            q: "Qu'est-ce qu'un mur dans le carnet d'ordres, et que se passe-t-il quand un gros ordre pressé arrive ?",
            choices: [
              "Une ligne très grosse ; tant qu'elle tient, le prix bute dessus ; mur vidé, le prix saute",
              "Une ligne très grosse ; le pressé attend que le mur parte",
              "Le prix du jour ; rien ne bouge"
            ],
            answer: 0,
            why: "Le mur, c'est une ligne très grosse. Tant qu'elle tient, le prix bute dessus. Mur vidé, le prix saute."
          },
          {
            q: "Sur quelle unité de temps décides-tu la direction, et sur laquelle jamais ?",
            choices: [
              "En 15 minutes ; jamais en 1 jour",
              "En 1 jour ; jamais en 15 minutes",
              "Sur les deux, c'est pareil"
            ],
            answer: 1,
            why: "La direction se décide en 1 jour. Jamais en 15 minutes."
          }
        ]
      },
      after: "Cinq justes ou plus : tu es prête pour la Porte 1, l'examen qui ferme la saison. Moins de cinq : relis la carte de fin des épisodes ratés, dans le Parcours."
    },
    {
      type: "story",
      title: "Scène 2 : c'est quoi, un « pro » ?",
      img: "img/ep08_pro.jpg",
      alt: "Le cahier d'Awa ouvert sur une page de règles, un stylo posé dessus.",
      text: [
        "Moussa dit : « Un pro, c'est quelqu'un qui a des millions. » Awa secoue la tête. Ici, pro (le mot court de professionnel) ne veut pas dire riche. Pro veut dire une façon de travailler : règles écrites, journal relu, savoir dire non.",
        "Un pro avec 30 000 F reste un pro. Un amateur, c'est le contraire : sans règles, sans journal. Avec 10 millions, il reste un amateur, juste plus longtemps.",
        "Tu commenceras en paper trading (dis « pépeur trédingue ») : trader avec de l'argent pour de faux. Avec 20 000 F, même une très bonne année ne fait que quelques milliers de francs. Ce que tu gagnes ici, c'est la compétence."
      ]
    },
    {
      type: "check",
      q: "Un pro avec 30 000 F, un amateur avec 10 millions. Qui est le pro ?",
      choices: [
        "Celui qui a le plus d'argent",
        "Celui qui a des règles écrites, un journal, et qui sait dire non",
        "Celui qui a gagné hier"
      ],
      answer: 1,
      ok: "Bravo : pro, c'est une façon de travailler, pas une somme d'argent.",
      ko: "Pas encore : dans ce cours, pro ne veut pas dire riche. Relis la scène 2."
    },
    {
      type: "mission",
      intro: "5 minutes, dans l'app : ta page « pourquoi », première page de ton journal.",
      steps: [
        "Titre : « Pourquoi je veux apprendre ça ». Puis trois phrases, pas plus, pas moins.",
        "Phrase 1 : ce que tu veux savoir faire. Phrase 2 : ce que tu sais des chiffres (97 sur 100, les frais, Koffi). Phrase 3 : la règle que tu te promets.",
        "Interdit : le mot « gagner » suivi d'un montant. Si tu as écrit un montant, recommence."
      ],
      note: {
        label: "Ta page « pourquoi »",
        placeholder: "1. ... 2. ... 3. ..."
      },
      fallback: "Si une phrase ne vient pas : écris-la mal, puis corrige. L'app garde ta page pour la saison 2."
    },
    {
      type: "post",
      questions: [
        {
          q: "Koffi promet un gain « garanti ». Pourquoi ce seul mot suffit-il pour dire non ?",
          a: "En trading, le risque de perdre existe toujours. Un gain garanti est donc un mensonge, fait pour prendre ton argent."
        },
        {
          q: "Sur 100 particuliers qui tradent chaque jour, combien perdent de l'argent, d'après l'étude du Brésil ?",
          a: "97 sur 100 (Brésil, 2020). Aux États-Unis, Barber et Odean : les plus actifs 11,4 % par an, acheter et garder 17,9 %."
        },
        {
          q: "Awa vend de l'attiéké depuis vingt ans et elle est encore là. D'après toi, que fait-elle que Moussa ne fait pas ? Donne ses quatre habitudes et leur nom sur le Bitcoin.",
          a: "Perte petite si elle brade au prix du matin = le risque du trade. Prix de brade décidé le matin = le stop. Son cahier, pertes comprises = le journal. Un jour cher, elle n'y va pas = la patience."
        }
      ]
    },
    {
      type: "explain",
      prompt: "Awa te demande : « Qu'as-tu appris que je ne sais pas déjà ? » Choisis un sujet de la saison. Les deux prix, le prix qui bouge, le carnet d'ordres, la bougie, l'unité de temps, les frais. Explique-le à Awa avec tes mots et un exemple d'Adjamé. Sans rouvrir le cours.",
      min: 40,
      model: "Exemple avec les deux prix. Moussa achète une boule à 500 et la revend une seconde plus tard à 450. Rien n'a bougé. Il a payé le prix vendeur (ask) et reçu le prix acheteur (bid). Il a perdu l'écart (spread). Le pressé paie l'écart. La patiente, comme Awa, le reçoit."
    },
    {
      type: "card",
      items: [
        ["C'est quoi", "Quatre habitudes pour durer : risque du trade petit et fixe, stop choisi avant, journal, patience. Pro = une façon de travailler, pas une somme."],
        ["Connecté à", "Toute la saison 1. La Porte 1 (l'examen). La saison 2 : combien tu risques, au franc près."],
        ["Exemple", "Awa, encore là après vingt ans. Moussa, dix allers-retours et 2 000 F de frais. Koffi, qui vit de sa formation."],
        ["Vrai même si on ne le dit pas", "Les perdants ne vendent pas quand ils perdent : ils espèrent. Ils vendent trop vite quand ils gagnent : ils ont peur. Les frais, pas le talent, font la différence."],
        ["Piège classique", "Croire qu'un trade gagnant pris sans stop ni journal est un bon trade. Ici, il vaut zéro."]
      ]
    },
    {
      type: "next",
      title: "À suivre : la Porte 1, puis la saison 2",
      text: "Demain, pas d'épisode : la Porte 1, l'examen qui ferme la saison 1. Pour y entrer : dix météos sur les quatorze derniers jours. Deux parties. A : trois graphiques de 30 jours, deux questions chacun. Qui a gagné sur les 5 dernières bougies (épisode 4) ? Clôture de la dernière contre ouverture de la première. Au-dessus : les acheteurs. En dessous : les vendeurs. Presque égal (moins de 1 %) : partagé. Le sens des 30 jours (épisode 2) : les 15 bougies récentes contre les 15 anciennes. Plus hauts et plus bas au-dessus : hausse. En dessous : baisse. Sinon : range. B : dix messages nouveaux, arnaque ou correct, sans faute sur « garanti ». Réussite : 2 graphiques sur 3, 8 messages sur 10. Un essai par jour. Après : la saison 2, combien tu risques."
    }
  ],
  badge: { id: "saison1", name: "Saison 1", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)." }
};
