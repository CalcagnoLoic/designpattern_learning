# Utilisez des design patterns en JavaScript

<p align="center">
    <img src="https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white" alt="Logo VScode">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="js">
    <img src="https://img.shields.io/badge/OpenClassroom-8A2BE2?style=for-the-badge&logoColor=white" alt="js">
</p>

<p align="center">
    <img src="assets/project.png" alt="projet fil rouge" style="width:70%;">
    <figcaption align="center">* Ce projet n'est disponible que sur ordinateur. </figcaption>
</p>

Différents types de design pattern sont abordés dans ce repo. La résolution à chaque problématiques métier se trouve sur la branche associée au design pattern.

Il existe 3 types de pattern :
- Le [`Creational Design Pattern`](https://github.com/CalcagnoLoic/designpattern_learning#i-creational-design-pattern) : il s'agit des patterns dédiés à la création d'objets
- Le [`Structural Design Pattern`](https://github.com/CalcagnoLoic/designpattern_learning#ii-structural-design-pattern) : il s'agit des patterns dédiés à la gestion et l'assemblage est objets dans des structures plus grandes
- Le [`Behavorial Design Pattern`](https://github.com/CalcagnoLoic/designpattern_learning#iii-behavorial-design-pattern) : il s'agit des patterns dédiés à la communication entre les objets.

# I. `Creational Design Pattern`

## 1. Le `constructor pattern`

Il s'agit d'un pattern qu'on utilise surtout pour faciliter la création et/ou le formatage d'un objet. Dans la pratique, on peut : 
-  Formater des données provenant d'API, du LocaleStorage ou du SessionStorage
- Créer des objets. En effet, ce pattern est très utilisé en jQuery pour effectuer des animations. 

La problématique métier se trouve [ici](https://github.com/CalcagnoLoic/designpattern_learning/blob/constructor-pattern/README.md) sur la branche `constructor-pattern`.

## 2. Le `factory pattern`

Il s'agit d'un pattern qui permet de faciliter la création d'objets au sein d'une codebase. On s'en sert pour créer et gérer les différents types d'objets qui ont des caractéristiques identiques. Dans la pratique, on peut : 

- Gérer différentes sources de données. Par exemple une source venant d'une API et une source venant d'une base de données.
- Gérer les basculements de données. Il s'agit simplement de passer de données mockées vers de réelles données provenant d'une API par exemple. 

La problématique métier se trouve [ici](https://github.com/CalcagnoLoic/designpattern_learning/blob/factory-pattern/README.md) sur la branche `factory-pattern`.

## 3. Le `singleton pattern`

Ce type de pattern est le plus souvent utilisé à la gestion et à la connexion à une base de données. Ce type de pattern ne peut être instancié qu'une seule fois. Il existe plusieurs avantages à ce pattern

- L'économie des ressources. A chaque instanciation d'un objet, cela consomme des ressources et plus particulièrement la mémoire vive. On a donc un gain de consommation des ressources avec le singleton. 
- Diminution de l'impact des variables globales. De façon générale, une variable globale n'est pas une bonne pratique car elles favorisent des effets de bord. 

La problématique métier se trouve [ici](https://github.com/CalcagnoLoic/designpattern_learning/blob/singleton-pattern/README.md) sur la branche `singleton-pattern`.

# II. `Structural Design Pattern`

## 1. L'`adapter pattern`

Il s'agit du pattern le plus utilisé et le plus facile à implémenter. 

Il est composé de 3 acteurs:
- Le client qui correspond à l'objet qui réalise la requête.
- L'adapter qui est l'objet utilisé par le client. Le client instancie l'adapter et c'est ce dernier qui est en charge des modifications pour communiquer avec l'adapté.
- L'adapté qui est appeler par l'adapter. C'est lui qui se charge de faire la transposition entre une ancienne librairie et une nouvelle par exemple. 

La raison que ce pattern est très répandu est qu'il permet surtout de mettre à jour une API. Au lieu de modifier tout le code, on crée juste un objet qui se charge de faire la traduction entre deux objets aux interfaces incompatibles.

La problématique métier se trouve [ici](https://github.com/CalcagnoLoic/designpattern_learning/blob/adapter-pattern/README.md) sur la branche `adapter-pattern`.

## 2. Le `decorator pattern`

Il s'agit d'un pattern ajoutant une fonctionnalité à un objet. Il est composé de 3 acteurs : 

- Le client : c'est un objet ou une fonction qui appelle le decorator.
- Le component : c'est l'objet sous la nouvelle fonctionnalité (ici, `movieCard`).
- Le decorator : cet objet récupère un objet existant, le surcharge et finalement le retourne (ici, `movieCartWithPlayer`).

C'est un pattern très répandu car il permet de rapidement ajouter de nouvelles fonctionnalités à un objet sans le surcharger ou le complexifier. 

**Attention**, il ne faut pas rentrer dans une boucle! Un decorator qui surcharge un decorator qui surcharge un decorator qui surcharge un decorator qui surcharge un decorator qui surcharge ...

La problématique métier se trouve [ici](https://github.com/CalcagnoLoic/designpattern_learning/blob/decorator-pattern/README.md) sur la branche `decorator-pattern`.

## 3. Le `proxy pattern`

Ce type de pattern sert à mettre en place un système de cache. Le chache est une mémorisation temporare des copies des données afin de diminuer le temps d'exécution lors de futures utilisations. Le plus souvent, le cache est stocké dans la mémoire vive (RAM) du pc. Ce pattern est composé de 3 acteurs:

- Le client : c'est l'objet ou la fonction qui appele le proxy
- Le proxy : c'est l'objet qui se charge de faire la communication entre le client et le sujet
- Le sujet : c'est l'objet qui va être appeler le proxy

**Attention**, un proxy ne sert pas uniquement au cache. Dès qu'un objet devient un peu trop complexe, on peut passer par un proxy pour faciliter sa manipulation. Mais lorsque l'on travaille avec le chache, il y a un réel gain de performance: 

- Lors de la première requête,  le temps de reponse sera stocker dans la fonction du proxy
- Lors de la seconde requête, le proxy regarde si un resultat est stocké. Si oui, il retourne directement le résultat sans passer par la librairie, c'est une réponse instantanée. 

Un dernier exemple, c'est l'utilisation de l'API Google Maps dans une appli. Les appels d'Api google sont soumis à un quota. Grâce à un proxy pattern, on peut limiter le nombre de requêtes effectuées. 

La problématique métier se trouve [ici](https://github.com/CalcagnoLoic/designpattern_learning/blob/proxy-pattern/README.md) sur la branche `proxy-pattern`.

# III. `Behavorial Design Pattern`

## 1. L'`observer pattern`

Une méthode bien connue de ce pattern est la méthode `addEventListener()`. Ce pattern est composé de 2 acteurs :

- Le sujet : c'est lui qui maintient les observateurs. Les observateurs sont notifiés lorsqu'il y a un changement d'état (par exemple: abonnement vs désabonnement)
- Le ou les observer: quand ils sont notifiés d'un changement d'état, ils déclenchent un script. 

Les observer permettent de découpler une architecture. Au lieu de surcharger des classes ou d'utiliser des décorateurs, on va créer plein de petits objets spécifiques qui communiquent entre eux. 

3 exemples de ce pattern:

- Les méthodes `persist` et `flush` du Symfony
- Les méthodes `session.add` et `session.commit` de SQLAlchemy en Python
- La libraire RxJS d'Angular pour les appels d'API

La problématique métier se trouve [ici](https://github.com/CalcagnoLoic/designpattern_learning/blob/observer-pattern/README.md) sur la branche `observer-pattern`.

## 2. Le `state pattern`

Le principe de ce pattern est de gérer facilement les changements d'état d'une application. Il est composé de deux acteurs : 

- Le context: C'est l'objet qui permet d'une part, de connaitre le state courant et d'autre part, d'effectuer des modifications d'état.
- Le ou les states: Ce sont des objets qui composent l'objet context.

La problématique métier se trouve [ici](https://github.com/CalcagnoLoic/designpattern_learning/blob/state-pattern/README.md) sur la branche `state-pattern`.

## 3. Le `template pattern`

Ce pattern est composé de 2 acteurs : 

- Le template: Il peut réaliser une série d'étapes, par exemple, envoyer ou recevoir des données d'API.
- Les objets qui héritent de l'acteur template: Ce sont les objets possédant l'implémentation de l'algorithme de recherche par exemple. 

L'acteur template ne sera jamais utilisé en direct. Il va juste servir de modèle, en fait, on se rapproche d'une classe abstraite. 

La problématique métier se trouve [ici](https://github.com/CalcagnoLoic/designpattern_learning/blob/template-pattern/README.md) sur la branche `template-pattern`.

---------------------------------------------------------------------------------
Apprentissage réalisé grâce au cours ['Utilisez des design patterns en JavaScript'](https://openclassrooms.com/fr/courses/7133336-utilisez-des-design-patterns-en-javascript) d'OpenClassrooms donné par [@tdimnet](https://github.com/tdimnet/)
