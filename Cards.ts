class Card {
    /*protected*/_name: string = "Default Name"; // sadly, TypeScript does not support "protected"
    get name(): string {
        return this._name;
    }

    _cost: number = 0;
    // how much a card costs to buy
    get cost(): number {
        // todo: impelment actions that modify card cost
        return this._cost;
    }

    _coin: number = 0;
    // how much a treasure is worth
    get coin(): number {
        return this._coin;
    }

    _points: number = 0;
    // how many victory points a card gives
    get points(): number {
        return this._points;
    }

    _action: (GameState) => void = function defaultCardAction() { };
    // the a function that is the card's action
    get action(): (GameState) => void {
        //return this._action;
        return (gameState: GameState) => {
            gameState.currentPlayer.coinsLeft += this.coin;
            var cardIndex: number = gameState.currentPlayer.hand.indexOf(this);
            if (cardIndex <= -1) throw new Error("The card to discard was not found in the player's hand.");
            gameState.currentPlayer.discard.push(gameState.currentPlayer.hand.splice(cardIndex, 1)[0]);
            View.RenderAll();
        };
    }
}

module Cards {

//***** Basic cards

    export class Copper extends Card {
        _name = "Copper";
        _cost = 0;
        _coin = 1;
    }
    export class Silver extends Card {
        _name = "Silver";
        _cost = 3;
        _coin = 2;
    }
    export class Gold extends Card {
        _name = "Gold";
        _cost = 6;
        _coin = 3;
    }
    export class Estate extends Card {
        _name = "Estate";
        _cost = 2;
        _points = 1;
    }
    export class Duchy extends Card {
        _name = "Duchy";
        _cost = 5;
        _points = 3;
    }
    export class Province extends Card {
        _name = "Province";
        _cost = 8;
        _points = 6;
    }


// ***** Base Set

    export class Village extends Card {
        _name = "Village";
        _cost = 3;
        _action = function VillageAction(gameState: GameState) {
            gameState.currentPlayer.actionsLeft += 2;
            gameState.currentPlayer.drawCards(1);
        };
    }
}