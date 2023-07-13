# Utilisez des design patterns en JavaScript

# Description

Nous allons profiter d'une petite accalmie côté produit pour refactoriser la connexion utilisateur. En effet, cette dernière est actuellement réalisée dans le fichier `js/templates/FormModal.js`.

Deux méthodes dans l'objet FormModal se servent de l'objet User :

```js
// La méthode onSubmitForm
onSubmitForm() {
    this.$wrapper
        .querySelector('form')
        .addEventListener('submit', e => {
            e.preventDefault()

            const firstNameInputValue = this
                .$wrapper
                .querySelector('#firstname')
                .value

            const lastNameInputValue = this
                .$wrapper
                .querySelector('#lastname')
                .value

            const user = new User({
                firstName: firstNameInputValue,
                lastName: lastNameInputValue
            })

            if (user.user) {
                this.$modalWrapper.classList.remove('modal-on')
                this.$modalWrapper.innerHTML = ""
            }

        })
}

// Et la méthode shouldDisplayForm
shouldDisplayForm() {
const user = new User()
return !user.user
}
```

Nous allons devoir implémenter un State Pattern pour mieux gérer cette dépendance.

# User Stories
## Première User Story

- (GIVEN) : Je suis sur la page d'accueil du projet
- (WHEN) : Je ne suis pas connecté en tant qu'utilisateur
- (THEN) : Le formulaire de connexion s'affiche

## Deuxième User Story


