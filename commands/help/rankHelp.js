module.exports = {

	name: 'bhallagena',
	description: " fdakaefaekgjrkagsf meh",
	execute(message, embed){
		embed
		.setColor('#00B1FB')
		.setDescription('check your rank and others ranks as well :)')
		.setTitle('Rank Commands')
		.addField('1. ``!rank``', 'check your rank')
		.addField('2. ``!lb``', 'check the leaderboard')
		
		message.channel.send(embed)
	}
}