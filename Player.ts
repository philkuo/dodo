class Player {

    //name: string;
    hand: Array<Card> = new Array();
    discard: Array<Card> = new Array();
    deck: Array<Card> = new Array();

    constructor(public name: string) {
        this.deck.push(new Estate()); this.deck.push(new Estate()); this.deck.push(new Estate());
        this.deck.push(new Copper()); this.deck.push(new Copper()); this.deck.push(new Copper());
        this.deck.push(new Copper()); this.deck.push(new Copper()); this.deck.push(new Copper()); this.deck.push(new Copper());
    }

    // ***** Public functions
    drawCards(n: number) {
        for (var i = 0; i < n; i++) {
            this._drawCard();
        }
    }

    // ***** Private helper functions

    private _drawCard(): boolean {
        if (this.deck.length == 0) {
            this.deck = this.discard;
            this.discard = new Array;
        }

        if (this.deck.length == 0) {
            Utility.Message("No cards left to draw!");
            return false;
        }

        this.hand.push(Utility.DrawRandomCard(this.deck));

        return true;
    }
}