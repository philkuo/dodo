class GameState {

    //***** Public properties

    id: number; // unique
    players: Array<Player> = new Array();


    //***** Private internal properties

    private _ready: boolean = false;
    get ready(): boolean { // debug purposes?
        return this._isReady();
    }


    constructor() {
    }


    //***** Public functions

    //*** setup funcs

    //*** end setup funcs

    temp(): void {
        var copperPile: Pile = new Pile(Copper, 7);
        var estatePile: Pile = new Pile(Estate, 3);

        this.players.forEach(function foreachPlayer(player: Player): void {
            player.deck.push(copperPile.getCard());
            player.deck.push(copperPile.getCard());
            player.deck.push(copperPile.getCard());
            player.deck.push(copperPile.getCard());
            player.deck.push(copperPile.getCard());
            player.deck.push(copperPile.getCard());
            player.deck.push(copperPile.getCard());
            player.deck.push(estatePile.getCard());
            player.deck.push(estatePile.getCard());
            player.deck.push(estatePile.getCard());
        });
    }

    //***** Private helper functions
    private _insureReady() {
        if (!this._isReady())
            throw new Error("GameState is not yet ready!");
    }

    private _isReady() {
        if (this.players.length > 0) {
            this._ready = true;
        }
        else {
            this._ready = false;
        }

        return this._ready;
    }

}