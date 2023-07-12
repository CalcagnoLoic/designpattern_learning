# Utilisez des design patterns en JavaScript

# Description

Nouveauté : les films provenant du ficher ``data/external-movie-data.json`` contient un nouveau champ : ``trailer_id``. Ce champ correspond à l'ID du trailer du film. Ce dernier est hébergé sur Youtube.

Quand on clic sur l'affiche, nous souhaitons donc pouvoir ouvrir une fenêtre modale contenant un iframe. Cet iframe va nous permettre de lancer la vidéo directement depuis Filmo Patterns.

## User Stories

## Première User Story

- (GIVEN) : Les films des fichiers ``data/external-movie-data.json`` et ``data/new-movie-data.json`` ont été chargés et sont affichés sur le projet.
- (WHEN) : je clique sur l'un des films, par exemple Demolition Man.
- (THEN) : une modale avec un player me proposant de lancer la bande annonce

