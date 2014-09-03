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
}

//***** Base cards

class Copper extends Card {
    _name = "Copper";
    _cost = 0;
}

class Silver extends Card {
    _name = "Silver";
    _cost = 3;
}

class Gold extends Card {
    _name = "Gold";
    _cost = 6;
}

class Estate extends Card {
    _name = "Estate";
    _cost = 2;
}


// *****

class KingsCourt extends Card {
    _name = "King's Court";
    _cost = 7;
}