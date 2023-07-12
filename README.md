# Utilisez des design patterns en JavaScript

# Description

L'équipe Produit de Filmo Patterns est venu vous voir ce matin avec une nouvelle idée qui va révolutionner le projet ! En effet, nous allons pouvoir mettre en envie les différents films.

Pour l'instant, cela ne fera qu'augmenter (ou diminuer) notre compteur d'envies. Cela dit, nous aimerions plus tard pouvoir réaliser d'autres traitements. Vous allez donc devoir mettre en place un Observer pour gérer facilement la mise en envie d'un film.

Vous pouvez voir que le compteur se situe dans le header du projet.

# User Stories
## Première User Story

- (GIVEN) : Je suis sur la page d'accueil des films
- (WHEN) : Je clique sur un film pour le mettre envie
- (THEN) : L'icône du cœur change de couleur (vous pouvez utiliser la classe .wished)
- (THEN) : le compteur d'envie augmente d'une unité.

## Deuxième User Story

- (GIVEN) : Je suis sur la page d'accueil des films
- (WHEN) : Je clique sur un film déjà en envie
- (THEN) : Cela retire le film de mes envies et l'icône du cœur revient à son état initiale.
- (THEN) : Le compte d'envie diminue d'une unité.


