enum Phase { Action, Buy };
class GameState {

    //***** Public properties

    id: number; // unique
    players: Array<Player> = new Array();

    currentPlayer: Player;
    currentPhase: Phase = Phase.Action;

    cardPiles: Array<Pile> = new Array();
    victoryPiles: Array<Pile> = new Array();
    treasurePiles: Array<Pile> = new Array();
    trashPile: Array<Card> = new Array();
    cursePile: Pile;

    //***** Private internal properties

    private _ready: boolean = false;
    get ready(): boolean { // debug purposes?
        return this._isReady();
    }

    constructor() {
    }


    //***** Public functions

    //*** setup funcs
    setupBasicCards(): void {
        if (this.players.length == 0)
            throw new Error("Add players to gamestate first.");

        // for treasures, the rules are kind of vague, they are sort of infinite, but not
        // but the box set contains 60 copper, 40 silver, 30 gold
        this.treasurePiles.push(new Pile(Cards.Copper, 60));
        this.treasurePiles.push(new Pile(Cards.Silver, 40));
        this.treasurePiles.push(new Pile(Cards.Gold, 30));

        // 8 VP cards in 1-2p, 12 VP cards in 3-4p
        var vpCards: number;
        if (this.players.length <= 2)
            vpCards = 8;
        else if (this.players.length <= 4)
            vpCards = 12;
        else
            throw new Error("NYI: rules for more than 4 players");
        this.victoryPiles.push(new Pile(Cards.Estate, vpCards));
        this.victoryPiles.push(new Pile(Cards.Duchy, vpCards));
        this.victoryPiles.push(new Pile(Cards.Province, vpCards));

        // curses: (players-1)*10

        // deal out 7 coppers and 3 estates to each player, coppers come out of the supply but estates do not
        this.players.forEach((player: Player) => {
            player.deck.push(this.treasurePiles[0].getCard());
            player.deck.push(this.treasurePiles[0].getCard());
            player.deck.push(this.treasurePiles[0].getCard());
            player.deck.push(this.treasurePiles[0].getCard());
            player.deck.push(this.treasurePiles[0].getCard());
            player.deck.push(this.treasurePiles[0].getCard());
            player.deck.push(this.treasurePiles[0].getCard());
            player.deck.push(new Cards.Estate());
            player.deck.push(new Cards.Estate());
            player.deck.push(new Cards.Estate());
        });

        // todo temp
        this.cardPiles.push(new Pile(Cards.Village, 10));
    }

    //*** end setup funcs

    //***** Private helper functions
    private _insureReady() {
        if (!this._isReady())
            throw new Error("GameState is not yet ready!");
    }

    private _isReady(): boolean {
        if (this.players.length > 0) {
            this._ready = true;
        }
        else {
            this._ready = false;
        }

        return this._ready;
    }

}