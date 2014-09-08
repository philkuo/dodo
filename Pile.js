var Pile = (function () {
    //private cardCtor: new () => Card; // constructor for the cards in this pile
    //cardsLeft: number; //
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

    Pile.prototype.getCard = function () {
        if (this.cardsLeft > 0) {
            this.cardsLeft--;
            return new this.cardCtor();
        } else {
            Utility.Message("No \"" + (new this.cardCtor()).name + "\"s left in this pile!"); // todo: there's gotta be a better way to get the card name here
            return null;
        }
    };
    return Pile;
})();
//# sourceMappingURL=Pile.js.map
