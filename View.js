var View = (function () {
    function View() {
    }
    View.RenderAll = function () {
        View._insureReady();

        Utility.Message("View.RenderAll() called.");

        var handDiv = document.createElement("div");
        var deckDiv = document.createElement("div");
        var discardDiv = document.createElement("div");
        var drawButton = document.createElement("a");

        var player = View.gameState.players[0];

        // render player's hand
        player.hand.forEach(function foreachPlayerHandCard(card) {
            var cardLink = document.createElement("a");
            cardLink.style.display = "block";
            cardLink.innerHTML = card.name;
            cardLink.href = "javascript:;";
            cardLink.onclick = function cardInHandOnClick() {
                Utility.RemoveCard(card, player.hand);
                player.discard.push(card);
                View.RenderAll();
            };
            handDiv.appendChild(cardLink);
        });

        // render player's deck
        var deckDivString = "Deck (" + player.deck.length + "): ";
        for (var i = 0; i < player.deck.length; i++)
            deckDivString += "|";
        deckDiv.innerHTML = deckDivString;

        // render player's discard
        player.discard.forEach(function foreachPlayerDiscardCard(card) {
            var cardDiv = document.createElement("div");
            cardDiv.innerHTML = card.name;
            discardDiv.appendChild(cardDiv);
        });

        drawButton.href = "javascript:;";
        drawButton.innerHTML = "Draw a card";
        drawButton.onclick = function drawButtonOnClick() {
            player.drawCards(1);
            View.RenderAll();
        };

        View.playSpaceElem.innerHTML = "";
        View.playSpaceElem.appendChild(drawButton);
        View.playSpaceElem.appendChild(handDiv);
        View.playSpaceElem.appendChild(deckDiv);
        View.playSpaceElem.appendChild(discardDiv);
    };

    View._insureReady = function () {
        if (!View.gameState)
            throw new Error("View.gameState is not initialized.");
        if (!View.playSpaceElem)
            throw new Error("View.playSpaceElem is not initialized.");
    };
    return View;
})();
//# sourceMappingURL=View.js.map
