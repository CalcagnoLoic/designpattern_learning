# Utilisez des design patterns en JavaScript

Différents types de design pattern sont abordés dans ce repo. La résolution à chaque problématiques métier se trouve sur la branche associée au design pattern.

Il existe 3 types de pattern :
- Le `Creational Design Pattern` : il s'agit des patterns dédiés à la création d'objets
- Le `Structural Design Pattern` : il s'agit des patterns dédiés à la gestion et l'assemblage est objets dans des structures plus grandes
- Le `Behavorial Design Pattern` : il s'agit des patterns dédiés à la communication entre les objets.

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

## 1. L'`Adapter pattern`



