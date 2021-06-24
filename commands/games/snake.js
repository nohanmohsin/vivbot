module.exports = {

	name: 'snake',
	description: "play a game of snake",
	async execute(message, SnakeGame){
        
        const snakeGame = new SnakeGame({
            title: 'Snake Game',
            color: "GREEN",
            timestamp: false,
            gameOverTitle: "Game Over"
        });
        return snakeGame.newGame(message);
	}
}