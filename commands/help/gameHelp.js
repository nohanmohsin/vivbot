module.exports = {

	name: 'music help',
	description: "meh",
	execute(message, embed){
		embed
		.setColor('#00B1FB')
		.setDescription('all the game commands :3')
		.setTitle('Game Commands')
		.addField('1. ``!trivia``', 'play a game of trivia')
		.addField('2. ``!battle <mention>``', 'battle your friend')
		.addField('3. ``!tictactoe <mention>``', 'play a game of tictactoe with your friend')
		.addField('4. ``!snake``', 'play the classic snake game in discord :D')
		message.channel.send(embed)
	}
}