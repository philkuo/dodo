class Pile {

    //private cardCtor: new () => Card; // constructor for the cards in this pile
    //cardsLeft: number; // how many cards remain in this pile

    constructor(
        private cardCtor: new () => Card, // todo: is it possible to pass the class instead of just the ctor? 
        public cardsLeft: number) {
    }

    // ***** Public functions
    notEmpty(): boolean {
        return this.cardsLeft > 0;
    }
    isEmpty(): boolean {
        return this.cardsLeft <= 0;
    }

    // as long as this pile still has cards left, return one of the cards and decrement cardsLeft
    getCard(): Card {
        if (this.cardsLeft > 0) {
            this.cardsLeft--;
            return new this.cardCtor();
        }
        else {
            Utilities.Message("No \"" + (new this.cardCtor()).name + "\"s left in this pile!"); // todo: there's gotta be a better way to get the card name here
            return null;
        }
    }

    // returns a card from this pile without decrementing cardsLeft (such as for display or informational purposes)
    peek(): Card {
        return new this.cardCtor();
    }

}