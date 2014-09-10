class Player {

    //name: string; //implicitly declared in ctor
    hand: Array<Card> = new Array();
    discard: Array<Card> = new Array();
    deck: Array<Card> = new Array();

    // how many actions the player has left this turn
    actionsLeft = 0;
    // how many coins the player has left to spend this turn
    coinsLeft = 0;

    constructor(public name: string) {
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
            Utilities.Message("No cards left to draw!");
            return false;
        }

        this.hand.push(Utilities.DrawRandomCard(this.deck));

        return true;
    }
}