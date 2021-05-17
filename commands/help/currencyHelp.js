module.exports = {

	name: 'currency help',
	description: "TmT",
	execute(message, embed){
		embed
		.setColor('#00B1FB')
		.setDescription('use our digital currency with these commands B)')
		.setTitle('Currency Commands')
		.addField('1. ``!addmoney <mention> ``', 'give money to user')
		.addField('2. ``!bal``', 'check balance')
		.addField('3. ``!gamble <bet>``', 'gamble and earn money fast')
		.addField('4. ``!givemoney <mention>``', 'give money to another user')
		.addField('5. ``!deposit <amount or all> ``', 'deposit money from wallet to bank')
		.addField('6. ``!moneylb``', 'check the currency leaderboard')
        .addField('7. ``!work``', 'work hard and earn money')
        .addField('8. ``!rob <mention>``', 'rob an user')
        .addField('9. ``!withdraw <amount or all>``', 'withdraw money from bank to wallet')
		message.channel.send(embed)
	}
}