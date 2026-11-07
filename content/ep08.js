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
        "Koffi dit « garanti ». Pourquoi ce seul mot suffit-il pour dire non ?",
        "Sur 100 personnes qui tradent chaque jour, combien perdent (étude du Brésil) ?",
        "Awa est encore là après vingt ans. Que fait-elle que Moussa ne fait pas ?"
      ]
    },
    {
      type: "words",
      goals: [
        "dire les quatre habitudes de ceux qui gagnent sur la durée",
        "calculer 1 % d'un capital, chez Awa et chez toi",
        "dire ce que « pro » veut dire dans ce cours"
      ],
      words: ["capital", "risque-trade", "stop", "journal", "pro", "porte"]
    },
    {
      type: "story",
      title: "Scène 1 : celle qui est encore là",
      img: "img/ep08_awa.jpg",
      alt: "Awa ferme son étal, carnet de décisions sous le bras.",
      text: [
        "Awa ferme son étal. Vingt ans d'attiéké à Adjamé ; presque toutes les autres ont arrêté. « Ce n'est pas la chance. Ce sont quatre habitudes. »",
        "« Un : 40 000 F, pas plus : 100 boules à 400 F. Deux : avant d'acheter, je décide mon prix de brade. Brader, c'est vendre moins cher que prévu. Mon prix : 396 F. Ma nièce le sait : si le prix tombe là, elle vend à ma place. Trois : mon carnet de décisions. Quatre : un jour trop cher, je n'y vais pas. »"
      ]
    },
    {
      type: "idea",
      title: "Le capital et le risque du trade",
      points: [
        ["Le capital", "l'argent réservé au trading, rien d'autre. Awa : 100 boules × 400 F = 40 000 F. Toi, en saison 4, pour de faux : 20 000 F."],
        ["1 % du capital", "1 sur 100. Awa : 40 000 ÷ 100 = 400 F. Toi : 20 000 ÷ 100 = 200 F."],
        ["Le risque du trade", "la perte si tu sors au prix décidé avant. Jamais plus de 1 % du capital. Awa brade à 396 : 4 F de moins × 100 boules = 400 F, 1 % de 40 000 F."]
      ],
      after: "1 %, c'est la perte si le stop est touché, pas la somme mise."
    },
    {
      type: "idea",
      title: "Le stop, le journal, la patience",
      points: [
        ["Le stop", "(dis « stope »). Un ordre placé dans la bourse crypto : « si le prix touche ce chiffre, vends ». Elle vend seule, même la nuit. Décidé avant d'acheter. Il peut glisser un peu (le glissement, épisode 3). Chez Awa : la nièce."],
        ["Le journal", "le carnet de décisions d'Awa : le prix de brade le matin, le résultat le soir. Toi : chaque trade écrit avant et après."],
        ["La patience", "savoir ne rien faire quand le prix n'est pas bon."]
      ],
      quote: "Aucune des quatre habitudes ne devine l'avenir.",
      after: "Moussa n'en a aucune, Awa les quatre. Suite en saison 2."
    },
    {
      type: "check",
      q: "Awa a 40 000 F : 100 boules à 400 F. Ce matin, elle décide : « si ça tombe, je brade à 396 ». Si elle brade tout, elle perd combien ?",
      choices: [
        "4 F : le prix d'une boule a baissé de 4",
        "400 F : 4 F × 100 boules, soit 1 %",
        "4 000 F : 10 % de ses 40 000 F"
      ],
      answer: 1,
      ok: "Oui. 4 F × 100 = 400 F, et 40 000 ÷ 100 = 400 F : exactement 1 %, sa règle.",
      ko: "Pas encore : 4 F de perte par boule, et elle a 100 boules. Multiplie, puis compare à 40 000 ÷ 100."
    },
    {
      type: "map",
      title: "Chez Awa, sur le Bitcoin : la même chose",
      rows: [
        ["Brade à 396 sur 100 boules à 400 : 400 F, 1 % de 40 000 F", "Le risque du trade : la perte au stop, jamais plus de 1 % du capital"],
        ["Le prix de brade décidé le matin, confié à sa nièce", "Le stop : un ordre placé dans la bourse, décidé avant"],
        ["Le carnet de décisions : prix de brade le matin, résultat le soir", "Le journal : chaque trade, avant et après"],
        ["Un jour trop cher, Awa n'y va pas", "La patience : savoir ne rien faire"]
      ],
      after: "Chaque habitude a son nom sur le Bitcoin."
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
              "Plus haut ; le plus haut a été refusé : personne n'a voulu payer plus cher",
              "Ni l'un ni l'autre ; rien n'a été refusé, la journée est partagée"
            ],
            answer: 0,
            why: "Rouge : la journée a fini plus bas. La longue mèche en bas : le plus bas a été refusé, personne n'a voulu vendre moins."
          },
          {
            q: "Moussa achète à 500 et revend une seconde plus tard à 450. Comment s'appelle ce qu'il a perdu ?",
            choices: [
              "Les frais de la bourse crypto",
              "L'écart entre les deux prix",
              "Le stop décidé le matin"
            ],
            answer: 1,
            why: "Il a payé le prix vendeur (ask) et reçu le prix acheteur (bid). La différence entre les deux, c'est l'écart (spread)."
          },
          {
            q: "100 000 F, un aller-retour : combien de francs, et que doit faire le prix pour revenir à zéro ?",
            choices: [
              "200 F ; le prix doit monter de 0,2 %",
              "200 F ; le prix n'a rien à faire du tout",
              "Rien ; un aller-retour est gratuit"
            ],
            answer: 0,
            why: "Un aller-retour coûte 0,2 %, soit 200 F sur 100 000 F. Le prix doit monter d'autant, juste pour revenir à zéro."
          },
          {
            q: "Le prix monte. Qu'est-ce qui s'est forcément passé, même s'il y a de la manipulation ?",
            choices: [
              "Quelqu'un a triché, et ça suffit à l'expliquer",
              "Quelqu'un a accepté de payer plus",
              "Le prix est monté tout seul, sans échange"
            ],
            answer: 1,
            why: "La manipulation existe : faux murs, groupes qui poussent un prix. Mais même manipulé, le prix bouge parce qu'un pressé a accepté. Raison de plus pour rester sur le Bitcoin, le plus gros marché, et pour avoir un stop."
          },
          {
            q: "Une pub dit « agréé BCEAO, levier ×500, trois places ce soir ». Combien de signes du détecteur dans cette pub ?",
            choices: [
              "Trois : agrément, levier, urgence",
              "Aucun : « agréé BCEAO » prouve l'honnêteté",
              "Un seul : le levier, le reste est normal"
            ],
            answer: 0,
            why: "Trois signes : agrément introuvable, levier énorme, urgence. Un seul suffisait pour dire non."
          },
          {
            q: "Qu'est-ce qu'un mur dans le carnet d'ordres, et que se passe-t-il quand un gros ordre pressé arrive ?",
            choices: [
              "Une ligne très grosse ; tant qu'elle tient, le prix bute dessus ; mur vidé, le prix saute",
              "Une ligne très grosse ; le pressé attend poliment que le mur parte, et le prix ne bouge pas",
              "Le prix du jour ; rien ne bouge, le pressé est servi au même prix que tous les autres"
            ],
            answer: 0,
            why: "Le mur, c'est une ligne très grosse. Tant qu'elle tient, le prix bute dessus. Mur vidé, le prix saute."
          },
          {
            q: "Sur quelle unité de temps décides-tu la direction, et sur laquelle jamais ?",
            choices: [
              "En 15 minutes ; jamais en 1 jour",
              "En 1 jour ; jamais en 15 minutes",
              "Sur les deux ; c'est pareil"
            ],
            answer: 1,
            why: "La direction se décide en 1 jour. Jamais en 15 minutes."
          }
        ]
      },
      after: "Cinq justes ou plus : tu es prête pour la Porte 1, l'examen qui ferme la saison. Moins de cinq : relis la carte de fin des épisodes ratés, dans Parcours (la liste des épisodes)."
    },
    {
      type: "story",
      title: "Scène 2 : c'est quoi, un pro ?",
      img: "img/ep08_pro.jpg",
      alt: "Le carnet de décisions d'Awa, ouvert.",
      text: [
        "Moussa dit : « Un pro, c'est quelqu'un qui a des millions. » Non. Ici, pro (le mot court de professionnel) ne veut pas dire riche. C'est une façon de travailler : règles écrites, journal relu, savoir dire non.",
        "Un pro avec 30 000 F reste un pro. Un amateur, c'est le contraire : sans règles, sans journal. Avec 10 millions, il reste un amateur, juste plus longtemps.",
        "Des chercheurs l'ont compté (Barber et Odean, actions américaines, 1991-1996) : ceux qui tradaient le plus gagnaient le moins. L'écart et les frais, pas le talent."
      ]
    },
    {
      type: "check",
      q: "Un pro avec 30 000 F, un amateur avec 10 millions. Qui est le pro ?",
      choices: [
        "Celui qui a le plus d'argent sur son compte en banque",
        "Celui qui a des règles, un journal, et dit non",
        "Celui qui a gagné le plus hier et aussi avant-hier"
      ],
      answer: 1,
      ok: "Oui. Pro, c'est une façon de travailler, pas une somme d'argent.",
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
      fallback: "Si une phrase ne vient pas : écris-la mal, puis corrige. L'app garde ta page sur ton téléphone, pour la saison 2."
    },
    {
      type: "post",
      questions: [
        {
          q: "Koffi dit « garanti ». Pourquoi ce seul mot suffit-il pour dire non ?",
          a: "Le risque existe toujours : un gain garanti est un mensonge, pour prendre ton argent."
        },
        {
          q: "Sur 100 personnes qui tradent chaque jour, combien perdent (étude du Brésil) ?",
          a: "97 sur 100 (Brésil, 2020). Aux États-Unis, les plus actifs gagnaient le moins (Barber et Odean)."
        },
        {
          q: "Awa est encore là après vingt ans. Que fait-elle que Moussa ne fait pas ?",
          a: "Perte petite en bradant = le risque du trade ; prix de brade décidé le matin, confié à la nièce = le stop ; carnet de décisions = le journal ; un jour trop cher, pas d'achat = la patience."
        }
      ]
    },
    {
      type: "explain",
      prompt: "Awa te demande : « Qu'as-tu appris que je ne sais pas ? » Choisis un sujet : les deux prix, le prix qui bouge, le carnet d'ordres, la bougie, l'unité de temps, les frais. Explique-le avec tes mots et un exemple d'Adjamé.",
      min: 40,
      model: "Exemple : les deux prix. Moussa achète une boule à 500 et la revend tout de suite à 450. Rien n'a bougé : il a payé le prix vendeur (ask) et reçu le prix acheteur (bid). Il a perdu l'écart (spread). Le pressé paie l'écart. La patiente ne le paie pas. Seule Awa, qui vend à 500 et reprend à 450, le reçoit."
    },
    {
      type: "card",
      items: [
        ["C'est quoi", "Quatre habitudes : risque petit, stop placé avant, journal, patience. Pro = une façon de travailler, pas une somme."],
        ["Connecté à", "La Porte 1 (l'examen). Saison 2 : combien tu risques. Saison 4 : l'argent pour de faux, 20 000 F."],
        ["Exemple", "Awa, vingt ans. Moussa, 2 000 F de frais. Koffi, qui vit de sa formation."],
        ["Vrai même si on ne le dit pas", "Les perdants gardent leurs pertes et vendent trop vite leurs gains. Le stop placé dans la bourse décide à leur place."],
        ["Piège classique", "Un trade gagnant sans stop ni journal vaut zéro ici."]
      ]
    },
    {
      type: "next",
      title: "À suivre : la Porte 1, puis la saison 2",
      text: "Plus d'épisode : la suite, c'est la Porte 1, l'examen. Trois graphiques, dix messages. Tout ce qu'il faut, tu l'as déjà : la météo (épisode 2), qui a gagné (épisode 4), le détecteur (épisode 7). La Porte s'ouvre quand tu as dix météos sur quatorze jours : l'app compte pour toi, continue ta météo chaque matin. Un essai par jour. Après : la saison 2, combien tu risques."
    }
  ],
  badge: { id: "saison1", name: "Saison 1", how: "Deux rappels réussis de cet épisode (notes Facile ou Réfléchi)." }
};
