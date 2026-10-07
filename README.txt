SITE SCOUTS DE PUISAYE - VERSION 8 STRUCTURELLE

Cette version part de la V7 et introduit :
- header commun dans includes/header.html ;
- footer commun dans includes/footer.html ;
- menus latéraux communs dans menus/ ;
- dossiers vivre-laventure/ et grandir-en-paix/ ;
- sous-dossier vivre-laventure/savoirs/ ;
- suppression du Journal d’aventure de la navigation et des pages générées ;
- footer horizontal avec logo rectangulaire cliquable vers SGDF ;
- home allégée : suppression de la mention « Scouts et Guides de France », titre réduit, emblème agrandi.

IMPORTANT
Les composants communs sont chargés avec fetch(). Ils ne fonctionneront pas en ouvrant directement index.html en file://.
Tester depuis un serveur local, par exemple : python -m http.server 8000
Puis ouvrir http://localhost:8000/
Sur OVH ou un autre hébergement HTTP/HTTPS, les inclusions fonctionneront directement.

REMPLACEMENT DU LOGO DU FOOTER
Remplacer assets/logo-sgdf-rectangle.svg en conservant le même nom.

PORTAGE DES 223 CONTENUS
Le dossier partagé n’a fourni ici que la home et les assets principaux. Cette archive pose donc la nouvelle structure et des pages de section, mais ne réinjecte pas automatiquement les 223 contenus de la V7. Copiez ensuite les contenus éditoriaux dans les blocs <article class="content"> correspondants.
