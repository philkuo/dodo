class View {

    static playSpaceElem: HTMLElement;
    static gameState: GameState;

    static RenderAll() {
        View._insureReady();

        Utility.Message("View.RenderAll() called.");

        var handDiv: HTMLElement = document.createElement("div");
        var deckDiv: HTMLElement = document.createElement("div");
        var discardDiv: HTMLElement = document.createElement("div");
        var drawButton: HTMLAnchorElement = document.createElement("a");

        var player: Player = View.gameState.players[0];

        // render player's hand
        player.hand.forEach(function foreachPlayerHandCard(card: Card): void {
            var cardLink: HTMLAnchorElement = document.createElement("a");
            cardLink.style.display = "block";
            cardLink.innerHTML = card.name;
            cardLink.href = "javascript:;";
            cardLink.onclick = function cardInHandOnClick() {
                Utility.RemoveCard(card, player.hand);
                player.discard.push(card);
                View.RenderAll();
            }
            handDiv.appendChild(cardLink);
        });

        // render player's deck
        var deckDivString: string = "Deck (" + player.deck.length + "): ";
        for (var i: number = 0; i < player.deck.length; i++)
            deckDivString += "|";
        deckDiv.innerHTML = deckDivString;

        // render player's discard
        player.discard.forEach(function foreachPlayerDiscardCard(card: Card): void {
            var cardDiv: HTMLElement = document.createElement("div");
            cardDiv.innerHTML = card.name;
            discardDiv.appendChild(cardDiv);
        });

        // "draw card" button
        drawButton.href = "javascript:;";
        drawButton.innerHTML = "Draw a card";
        drawButton.onclick = function drawButtonOnClick() {
            player.drawCards(1);
            View.RenderAll();
        };

        // put all the created elements onto the page
        View.playSpaceElem.innerHTML = "";
        View.playSpaceElem.appendChild(drawButton);
        View.playSpaceElem.appendChild(handDiv);
        View.playSpaceElem.appendChild(deckDiv);
        View.playSpaceElem.appendChild(discardDiv);
    }

    private static _insureReady() {
        if (!View.gameState)
            throw new Error("View.gameState is not initialized.");
        if (!View.playSpaceElem)
            throw new Error("View.playSpaceElem is not initialized.");
    }
}