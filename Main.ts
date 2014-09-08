window.onload = () => {

    var gameState: GameState;
    var thisPlayer: Player;

    gameState = new GameState();
    gameState.players.push(new Player("dodo player"));
    gameState.temp();

    thisPlayer = gameState.players[0];
    gameState.currentPlayer = thisPlayer;

    View.gameState = gameState;
    View.root = document.getElementById("playSpace");

    thisPlayer.drawCards(5);

    View.RenderAll();
}