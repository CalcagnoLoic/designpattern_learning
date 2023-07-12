class WishlistSubject {
    constructor() {
        this._observers = [];
    }

    subscribe(observer) {
        this._observers.push(observer);
    }

    unsubscribe(observer) {
        this._observers = this._observers.filter((obs) => ob !== observer);
    }

    fire(action) {
        this._observers.forEach((obs) => obs.update(action));
    }
}
