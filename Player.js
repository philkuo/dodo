var Player = (function () {
    function Player(name) {
        this.name = name;
        //name: string; //implicitly declared in ctor
        this.hand = new Array();
        this.discard = new Array();
        this.deck = new Array();
        // how many actions the player has left this turn
        this.actionsLeft = 0;
        // how many coins the player has left to spend this turn
        this.coinsLeft = 0;
    }
    // ***** Public functions
    Player.prototype.drawCards = function (n) {
        for (var i = 0; i < n; i++) {
            this._drawCard();
        }
    };

    // ***** Private helper functions
    Player.prototype._drawCard = function () {
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
    };
    return Player;
})();
//# sourceMappingURL=Player.js.map
