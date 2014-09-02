var GameState = (function () {
    function GameState() {
        this.players = new Array();
        //***** Private internal properties
        this._ready = false;
    }
    Object.defineProperty(GameState.prototype, "ready", {
        get: function () {
            return this._isReady();
        },
        enumerable: true,
        configurable: true
    });

    //***** Public functions
    //*** setup funcs
    //*** end setup funcs
    //***** Private helper functions
    GameState.prototype._insureReady = function () {
        if (!this._isReady())
            throw new Error("GameState is not yet ready!");
    };

    GameState.prototype._isReady = function () {
        if (this.players.length > 0) {
            this._ready = true;
        } else {
            this._ready = false;
        }

        return this._ready;
    };
    return GameState;
})();
//# sourceMappingURL=GameState.js.map
