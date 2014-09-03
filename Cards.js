var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Card = (function () {
    function Card() {
        /*protected*/ this._name = "Default Name";
        this._cost = 0;
        this._coin = 0;
    }
    Object.defineProperty(Card.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Card.prototype, "cost", {
        // how much a card costs to buy
        get: function () {
            // todo: impelment actions that modify card cost
            return this._cost;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Card.prototype, "coin", {
        // how much a treasure is worth
        get: function () {
            return this._coin;
        },
        enumerable: true,
        configurable: true
    });
    return Card;
})();

//***** Base cards
var Copper = (function (_super) {
    __extends(Copper, _super);
    function Copper() {
        _super.apply(this, arguments);
        this._name = "Copper";
        this._cost = 0;
    }
    return Copper;
})(Card);

var Silver = (function (_super) {
    __extends(Silver, _super);
    function Silver() {
        _super.apply(this, arguments);
        this._name = "Silver";
        this._cost = 3;
    }
    return Silver;
})(Card);

var Gold = (function (_super) {
    __extends(Gold, _super);
    function Gold() {
        _super.apply(this, arguments);
        this._name = "Gold";
        this._cost = 6;
    }
    return Gold;
})(Card);

var Estate = (function (_super) {
    __extends(Estate, _super);
    function Estate() {
        _super.apply(this, arguments);
        this._name = "Estate";
        this._cost = 2;
    }
    return Estate;
})(Card);

// *****
var KingsCourt = (function (_super) {
    __extends(KingsCourt, _super);
    function KingsCourt() {
        _super.apply(this, arguments);
        this._name = "King's Court";
        this._cost = 7;
    }
    return KingsCourt;
})(Card);
//# sourceMappingURL=Cards.js.map
