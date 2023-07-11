# Utilisez des design patterns en Javascript

# Description

Au démarrage du projet, nous avons désormais une modale qui s'affiche. Cette modale comprend un formulaire où l'utilisateur va pouvoir rentrer son prénom et son nom.

Ces informations vont devoir être stockées via l'API de LocalStorage. À partir du fichier ``js/db/User.js``, créez un Singleton qui va gérer la connexion utilisateur.

En parcourant le code, vous constaterez des modifications dans les fichiers :
- ``js/templates/Modal.js`` - ce (nouveau) fichier correspond au code de la modale contenant le formulaire de connexion.
- la méthode main de la classe App appelle maintenant la modale une fois que les requêtes API pour récupérer les films ont été réalisées.

Vous n'avez pas besoin de toucher aux règles d'affiche du fichier Modal.js, concentrez-vous uniquement sur le fichier User.js

# User Stories
## Première User Story

- (GIVEN) Je suis sur la page d'accueil
- (WHEN) Je lance l'application pour la première fois (et que mon prénom et nom ne sont pas dans le LocalStorage)
- (THEN) Je vois le formulaire de connexion

## Deuxième User Story

- (GIVEN) Je suis sur la page d'accueil
- (WHEN) Je remplis le formulaire de connexion
- (THEN) Les données sont sauvegardées en LocalStorage

## Troisième User Story

- (GIVEN) Je suis sur la page d'accueil
- (WHEN) Je lance l'application et que mon prénom et nom sont dans le LocalStorage.
- (THEN) Je ne vois pas la modale de connexion
