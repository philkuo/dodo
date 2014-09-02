window.onload = function () {
    var gameState;
    var thisPlayer;

    gameState = new GameState();
    gameState.players.push(new Player("dodo player"));

    thisPlayer = gameState.players[0];

    View.gameState = gameState;
    View.playSpaceElem = document.getElementById("playSpace");

    thisPlayer.drawCards(5);

    View.RenderAll();
};
//# sourceMappingURL=Main.js.map
