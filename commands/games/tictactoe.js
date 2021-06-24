module.exports = {

	name: 'tictactoe',
	description: "play a game of tictactoe",
	async execute(message, reconlx){
        if(message.mentions.users.first()){
            const game = new reconlx.tictactoe({
                message: message,
                player_two: message.mentions.users.first()
            })
        }
        else{
            message.channel.send('ping the user you want to play tictactoe with')
        }
	}
}