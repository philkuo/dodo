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
        this._points = 0;
        this._action = function defaultCardAction() {
        };
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

    Object.defineProperty(Card.prototype, "points", {
        // how many victory points a card gives
        get: function () {
            return this._points;
        },
        enumerable: true,
        configurable: true
    });

    Object.defineProperty(Card.prototype, "action", {
        // the a function that is the card's action
        get: function () {
            var _this = this;
            //return this._action;
            return function (gameState) {
                gameState.currentPlayer.coinsLeft += _this.coin;
                View.RenderAll();
            };
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
        this._coin = 1;
    }
    return Copper;
})(Card);
var Silver = (function (_super) {
    __extends(Silver, _super);
    function Silver() {
        _super.apply(this, arguments);
        this._name = "Silver";
        this._cost = 3;
        this._coin = 2;
    }
    return Silver;
})(Card);
var Gold = (function (_super) {
    __extends(Gold, _super);
    function Gold() {
        _super.apply(this, arguments);
        this._name = "Gold";
        this._cost = 6;
        this._coin = 3;
    }
    return Gold;
})(Card);
var Estate = (function (_super) {
    __extends(Estate, _super);
    function Estate() {
        _super.apply(this, arguments);
        this._name = "Estate";
        this._cost = 2;
        this._points = 1;
    }
    return Estate;
})(Card);
var Duchy = (function (_super) {
    __extends(Duchy, _super);
    function Duchy() {
        _super.apply(this, arguments);
        this._name = "Duchy";
        this._cost = 5;
        this._points = 3;
    }
    return Duchy;
})(Card);
var Province = (function (_super) {
    __extends(Province, _super);
    function Province() {
        _super.apply(this, arguments);
        this._name = "Province";
        this._cost = 8;
        this._points = 6;
    }
    return Province;
})(Card);

// ***** Base Set
var Village = (function (_super) {
    __extends(Village, _super);
    function Village() {
        _super.apply(this, arguments);
        this._name = "Village";
        this._cost = 3;
        this._action = function VillageAction(gameState) {
            gameState.currentPlayer.actionsLeft += 2;
            gameState.currentPlayer.drawCards(1);
        };
    }
    return Village;
})(Card);
//# sourceMappingURL=Cards.js.map
