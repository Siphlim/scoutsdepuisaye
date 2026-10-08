<<<<<<< HEAD
VERSION 8.4 STATIQUE
204 pages WordPress publiées réintégrées.
Le générateur reproductible est inclus dans tools/generate-site.py.
Source WordPress : data/source.xml.
Pour régénérer : python tools/generate-site.py
=======
SITE SCOUTS DE PUISAYE - VERSION 8.1 STATIQUE

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
Toutes les pages publiées contiennent directement le header, le footer et leur menu latéral. Aucun fetch() n'est utilisé : la version fonctionne en local, sur GitHub Pages et sur OVH.

Les fichiers communs restent disponibles dans templates/ comme sources de référence. Après modification d'un template, il faut régénérer les pages avant publication.

REMPLACEMENT DU LOGO DU FOOTER
Remplacer assets/logo-sgdf-rectangle.svg en conservant le même nom.

PORTAGE DES 223 CONTENUS
Le dossier partagé n’a fourni ici que la home et les assets principaux. Cette archive pose donc la nouvelle structure et des pages de section, mais ne réinjecte pas automatiquement les 223 contenus de la V7. Copiez ensuite les contenus éditoriaux dans les blocs <article class="content"> correspondants.
>>>>>>> 835b8f6593e50fb31ef23f7e3855a191806eb948
