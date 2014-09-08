class View {

    static root: HTMLElement;
    static gameState: GameState;

    private static _player: Player;

    static RenderAll() {
        Utility.Message("View.RenderAll() called.");
        View._insureReady();

        View._player = View.gameState.players[0];

        View.root.style.whiteSpace = "nowrap";

        var playerSpaceDiv: HTMLElement = document.createElement("div");
        var kingdomDiv: HTMLElement = document.createElement("div");

        playerSpaceDiv.style.width = "500px";
        playerSpaceDiv.style.display = "inline-block";
        playerSpaceDiv.style.backgroundColor = "#ddd";
        View._renderPlayerSpace(playerSpaceDiv);

        kingdomDiv.style.width = "500px";
        kingdomDiv.style.display = "inline-block";
        kingdomDiv.style.backgroundColor = "#ddd";
        kingdomDiv.style.marginLeft = "10px";
        kingdomDiv.innerHTML = "kingdom stuff";

        View.root.innerHTML = "";
        View.root.appendChild(playerSpaceDiv);
        View.root.appendChild(kingdomDiv);
    }

    private static _insureReady() {
        if (!View.gameState)
            throw new Error("View.gameState is not initialized.");
        if (!View.root)
            throw new Error("View.playSpaceElem is not initialized.");
    }

    // ***** Render methods
    private static _renderPlayerSpace(playerSpaceDiv: HTMLElement) {
        var handDiv: HTMLElement = document.createElement("div");
        var deckDiv: HTMLElement = document.createElement("div");
        var discardDiv: HTMLElement = document.createElement("div");
        var numbersDiv: HTMLElement = document.createElement("div");
        var drawButton: HTMLAnchorElement = document.createElement("a");

        // "draw card" button, todo: temp debug
        drawButton.href = "javascript:;";
        drawButton.innerHTML = "Draw a card";
        drawButton.onclick = function drawButtonOnClick() {
            View._player.drawCards(1);
            View.RenderAll();
        };

        View._renderPlayerHand(handDiv);
        View._renderPlayerDeck(deckDiv);
        View._renderPlayerDiscard(discardDiv);
        View._renderPlayerNumbers(numbersDiv);

        playerSpaceDiv.appendChild(numbersDiv);
        playerSpaceDiv.appendChild(document.createElement("hr"));
        playerSpaceDiv.appendChild(drawButton);
        playerSpaceDiv.appendChild(document.createElement("hr"));
        playerSpaceDiv.appendChild(handDiv);
        playerSpaceDiv.appendChild(document.createElement("hr"));
        playerSpaceDiv.appendChild(deckDiv);
        playerSpaceDiv.appendChild(document.createElement("hr"));
        playerSpaceDiv.appendChild(discardDiv);
    }

    private static _renderPlayerHand(handDiv: HTMLElement) {
        View._player.hand.forEach(function foreachPlayerHandCard(card: Card): void {
            handDiv.appendChild(
                View._makeCard(card, true, card.action/*function cardInHandOnClick() {
                    Utility.RemoveCard(card, View._player.hand);
                    View._player.discard.push(card);
                    View.RenderAll();
            }*/));
        });
    }
    private static _renderPlayerDeck(deckDiv: HTMLElement) {
        var deckDivString: string = "Deck (" + View._player.deck.length + "): ";
        for (var i: number = 0; i < View._player.deck.length; i++)
            deckDivString += "|";
        deckDiv.innerHTML = deckDivString;
    }
    private static _renderPlayerDiscard(discardDiv: HTMLElement) {
        View._player.discard.forEach(function foreachPlayerDiscardCard(card: Card): void {
            var cardDiv: HTMLElement = document.createElement("div");
            cardDiv.innerHTML = card.name;
            discardDiv.appendChild(cardDiv);
        });
    }
    private static _renderPlayerNumbers(numbersDiv: HTMLElement) {
        numbersDiv.innerHTML = "A: " + View._player.actionsLeft + " | $: " + View._player.coinsLeft;
    }
    // ***** Utility
    private static _makeCard(
        card: Card,
        clickable: boolean,
        clickAction: (GameState) => void
    ): HTMLElement {
        var cardRoot: HTMLElement;

        if (clickable) {
            var cardLink: HTMLAnchorElement = document.createElement("a");
            cardLink.href = "javascript:;";
            cardLink.onclick = function cardOnClick() {
                clickAction(View.gameState);
            };
            cardRoot = cardLink;
        }
        else
            cardRoot = document.createElement("div");

        var cardName: HTMLElement = document.createElement("span");

        cardRoot.className = "card";

        cardName.innerHTML = card.name;

        cardRoot.appendChild(cardName);

        return cardRoot;
    }
}