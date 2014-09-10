var Utilities = (function () {
    function Utilities() {
    }
    // removes a random card from an array of cards and returns it
    Utilities.DrawRandomCard = function (pile) {
        if (pile.length == 0)
            throw new Error("Can't draw from an empty pile.");

        return pile.splice(Math.floor(Math.random() * pile.length), 1)[0];
    };

    // removes a specific card from a specific pile
    Utilities.RemoveCard = function (card, pile) {
        Utilities.Message("Utility.RemoveCard(): removing \"" + card.name + "\"");
        var i = pile.indexOf(card);
        if (i == -1)
            throw new Error("Card \"" + card.name + "\" was not found in given pile.");
        pile.splice(i, 1);
    };

    // writes a standard message to the log
    Utilities.Message = function (message) {
        // todo: add game log
        console.log(message);
    };

    // write a more interesting message to the log
    Utilities.Warning = function (message) {
        // todo: add game log
        console.warn(message);
    };
    return Utilities;
})();
//# sourceMappingURL=Utilities.js.map
