# Utilisez des design patterns en JavaScript

# Description

Nous pouvons désormais filtrer nos films par acteur grâce à une API de filtrage. Cette API se trouve dans le dossier lib à la racine de notre projet. Le problème, c'est que la première version n'est pas très rapide et met une seconde à afficher les films filtrés : c'est énorme !

Nous avons décidé de développer une nouvelle version de cette API : ``lib/filter-v2``. Seulement voilà, cette nouvelle version ne s'utilise pas tout à fait pareil.

```js
// Voici comment on utilise la V1
const FilterLib = new FilterV1(this.Movies, actor)
const FilteredMoviesV1 = await FilterLib.filterByActor()
 
// Voici comment on utilise la V2
const FilteredMoviesV2 = await FilterV2.filterByActor(this.actor, this.Movies)
```

- Dans la première version, on doit instancier la librairie puis appeler la méthode filterByActor.
- Dans la deuxième version, nous n'avons plus besoin d'instancier : nous passons par une méthode statique. De plus, l'ordre des paramètres a été modifié.

# User Stories
## Première User Story

- (GIVEN) Je suis sur la page d'accueil de Filmo Patterns
- (WHEN) Je filtre les films d'Arnold Schwarzenegger
- (THEN) Les films d'Arnold Schwarzenegger s'affichent en utilisant la nouvelle API
