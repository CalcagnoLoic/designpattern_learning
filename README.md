# Utilisez des design patterns en JavaScript

# Description

Nouveauté : vous pouvez maintenant trier l'ensemble de vos films par date de sortie. Une nouvelle librairie a été intégrée dans le projet. Elle se trouve dans le dossier ``/lib/sorter/index.js``.

Elle fonctionne très bien mais est un peu longue à s’exécuter : une seconde pour chaque opération. La team produit vous a donc missionné pour mettre en place une solution.

# User Stories
## Première User Story

- (GIVEN) : Je suis sur la page d'accueil des films
- (WHEN) : Je trie les films par date de sortie croissante
- (THEN) : Tous les films sont triés du plus vieux au plus récent ; le temps de chargement est d'une seconde.

## Deuxième User Story

- (GIVEN) : Je suis sur la page d'accueil des films
- (WHEN) : Je trie à nouveau les films par date de sortie croissante
- (THEN) : Tous les films sont triés du plus vieux au plus récent mais le temps de chargement est immédiat.

## Troisième User Story

- (GIVEN) : Je suis sur la page d'accueil des films
- (WHEN) : Je trie les films par date de sortie décroissante
- (THEN) : Tous les films sont triés du plus récent au plus vieux ; le temps de chargement est d'une seconde.

## Quatrième User Story

- (GIVEN) : Je suis sur la page d'accueil des films
- (WHEN) : Je trie à nouveau les films par date de sortie décroissante
- (THEN) : Tous les films sont triés du plus récent au plus vieux mais le temps de chargement est immédiat.
