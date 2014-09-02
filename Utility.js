var Utility = (function () {
    function Utility() {
    }
    // removes a random card from an array of cards and returns it
    Utility.DrawRandomCard = function (pile) {
        if (pile.length == 0)
            throw new Error("Can't draw from an empty pile.");

        return pile.splice(Math.floor(Math.random() * pile.length), 1)[0];
    };

    // removes a specific card from a specific pile
    Utility.RemoveCard = function (card, pile) {
        Utility.Message("Utility.RemoveCard(): removing \"" + card.name + "\"");
        var i = pile.indexOf(card);
        if (i == -1)
            throw new Error("Card \"" + card.name + "\" was not found in given pile.");
        pile.splice(i, 1);
    };

    // writes a standard message to the log
    Utility.Message = function (message) {
        // todo: add game log
        console.log(message);
    };

    // write a more interesting message to the log
    Utility.Warning = function (message) {
        // todo: add game log
        console.warn(message);
    };
    return Utility;
})();
//# sourceMappingURL=Utility.js.map
