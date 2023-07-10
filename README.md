# Utilisez des design patterns en JavaScript : `Constructor Pattern`

# Description

il y a deux fichiers JSON actuellement dans le dossier data :

- ``old-movie-data.json`` qui correspond à l'ancien formatage de nos données. Ici, les heures sont des chaînes de caractère et nous n'avons que les versions anglaises des titres de film.
- ``new-movie-data.json`` qui correspond à notre nouveau système de formatage des données. Ici, les heures sont maintenant des nombres et s'expriment en minutes. De plus, nous avons maintenant les versions anglaises et françaises des titres de film. Nous devons privilégier les versions françaises.

# User Stories
## Première User Story

- (Given) Je suis sur la page d'accueil du projet
- (When) Je réalise ma requête API sur le nouveau fichier de formatage.
- (Then) Je souhaite voir s'afficher l'heure des films en mode ${nombreHeure}h${nombreMinutes}

## Deuxième User Story

- (Given) Je suis sur la page d'accueil du projet
- (When) Je réalise ma requête API sur le nouveau fichier de formtage
- (Then) Je souhaite voir s'afficher la version française du titre en priorité, sinon la version anglaise.
