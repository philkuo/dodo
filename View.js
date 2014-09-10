var View = (function () {
    function View() {
    }
    View.RenderAll = function () {
        Utilities.Message("View.RenderAll() called.");
        View._insureReady();

        View._player = View.gameState.players[0];

        View.root.style.whiteSpace = "nowrap";

        var playerSpaceDiv = document.createElement("div");
        var kingdomDiv = document.createElement("div");

        playerSpaceDiv.style.width = "500px";
        playerSpaceDiv.style.display = "inline-block";
        playerSpaceDiv.style.backgroundColor = "#ddd";
        View._renderPlayerSpace(playerSpaceDiv);

        kingdomDiv.style.width = "500px";
        kingdomDiv.style.display = "inline-block";
        kingdomDiv.style.backgroundColor = "#ddd";
        kingdomDiv.style.marginLeft = "10px";
        View._renderKingdomSpace(kingdomDiv);

        View.root.innerHTML = "";
        View.root.appendChild(playerSpaceDiv);
        View.root.appendChild(kingdomDiv);
    };

    View._insureReady = function () {
        if (!View.gameState)
            throw new Error("View.gameState is not initialized.");
        if (!View.root)
            throw new Error("View.playSpaceElem is not initialized.");
    };

    // ***** Render methods
    View._renderPlayerSpace = function (playerSpaceDiv) {
        var handDiv = document.createElement("div");
        var deckDiv = document.createElement("div");
        var discardDiv = document.createElement("div");
        var numbersDiv = document.createElement("div");
        var drawButton = document.createElement("a");

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
    };

    View._renderPlayerHand = function (handDiv) {
        View._player.hand.forEach(function foreachPlayerHandCard(card) {
            handDiv.appendChild(View._makeCard(card, false, true, card.action));
        });
    };
    View._renderPlayerDeck = function (deckDiv) {
        var deckDivString = "Deck (" + View._player.deck.length + "): ";
        for (var i = 0; i < View._player.deck.length; i++)
            deckDivString += "|";
        deckDiv.innerHTML = deckDivString;
    };
    View._renderPlayerDiscard = function (discardDiv) {
        View._player.discard.forEach(function foreachPlayerDiscardCard(card) {
            var cardDiv = document.createElement("div");
            cardDiv.innerHTML = card.name;
            discardDiv.appendChild(cardDiv);
        });
    };
    View._renderPlayerNumbers = function (numbersDiv) {
        numbersDiv.innerHTML = "A: " + View._player.actionsLeft + " | $: " + View._player.coinsLeft;
    };

    View._renderKingdomSpace = function (kingdomDiv) {
        View.gameState.cardPiles.forEach(function renderEachCardPile(pile) {
            var pileCard = pile.peek();
            var pileDisabled = (View._player.coinsLeft >= pileCard.cost) && pile.notEmpty();
            kingdomDiv.appendChild(View._makeCard(pileCard, pileDisabled, pileDisabled, function buyCardTodo() {
                View._player.coinsLeft -= pileCard.cost;
                View._player.discard.push(pile.getCard());
                View.RenderAll();
            }));
        });
    };

    // ***** Utility
    View._makeCard = function (card, disabled, clickable, clickAction) {
        var cardRoot;

        if (clickable) {
            var cardLink = document.createElement("a");
            cardLink.href = "javascript:;";
            cardLink.onclick = function cardOnClick() {
                clickAction(View.gameState);
            };
            cardRoot = cardLink;
        } else
            cardRoot = document.createElement("div");

        var cardName = document.createElement("span");

        cardRoot.className = "card";

        cardName.innerHTML = card.name;

        cardRoot.appendChild(cardName);

        return cardRoot;
    };
    return View;
})();
//# sourceMappingURL=View.js.map
