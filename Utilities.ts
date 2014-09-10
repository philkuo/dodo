class Utilities {

    // removes a random card from an array of cards and returns it
    static DrawRandomCard(
        pile: Array<Card>
    ): Card {
        if (pile.length == 0)
            throw new Error("Can't draw from an empty pile.");

        return pile.splice(Math.floor(Math.random() * pile.length), 1)[0];
    }

    // removes a specific card from a specific pile
    static RemoveCard(
        card: Card,
        pile: Array<Card>
    ): void {
        Utilities.Message("Utility.RemoveCard(): removing \"" + card.name + "\"");
        var i: number = pile.indexOf(card);
        if (i == -1)
            throw new Error("Card \"" + card.name + "\" was not found in given pile.");
        pile.splice(i, 1);
    }

    // writes a standard message to the log
    static Message(
        message: string
    ): void {
        // todo: add game log
        console.log(message);
    }

    // write a more interesting message to the log
    static Warning(
        message: string
    ): void {
        // todo: add game log
        console.warn(message);
    }
} 