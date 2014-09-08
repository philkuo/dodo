class Pile {

    //private cardCtor: new () => Card; // constructor for the cards in this pile
    //cardsLeft: number; // 

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

    getCard(): Card {
        if (this.cardsLeft > 0) {
            this.cardsLeft--;
            return new this.cardCtor();
        }
        else {
            Utility.Message("No \"" + (new this.cardCtor()).name + "\"s left in this pile!"); // todo: there's gotta be a better way to get the card name here
            return null;
        }
    }

}