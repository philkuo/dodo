var Pile = (function () {
    //private cardCtor: new () => Card; // constructor for the cards in this pile
    //cardsLeft: number; // how many cards remain in this pile
    function Pile(cardCtor, cardsLeft) {
        this.cardCtor = cardCtor;
        this.cardsLeft = cardsLeft;
    }
    // ***** Public functions
    Pile.prototype.notEmpty = function () {
        return this.cardsLeft > 0;
    };
    Pile.prototype.isEmpty = function () {
        return this.cardsLeft <= 0;
    };

    // as long as this pile still has cards left, return one of the cards and decrement cardsLeft
    Pile.prototype.getCard = function () {
        if (this.cardsLeft > 0) {
            this.cardsLeft--;
            return new this.cardCtor();
        } else {
            Utilities.Message("No \"" + (new this.cardCtor()).name + "\"s left in this pile!"); // todo: there's gotta be a better way to get the card name here
            return null;
        }
    };

    // returns a card from this pile without decrementing cardsLeft (such as for display or informational purposes)
    Pile.prototype.peek = function () {
        return new this.cardCtor();
    };
    return Pile;
})();
//# sourceMappingURL=Pile.js.map
