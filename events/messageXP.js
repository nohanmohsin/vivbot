module.exports = {

	name: 'xp event',
	description: "give xp to user",
	async execute(message){
        const randomAmountOfXp = Math.floor(Math.random() * 30) + 1; // Min 1, Max 30
		const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp)
	
		if (hasLeveledUp) {
			const user = await Levels.fetch(message.author.id, message.guild.id)
			
			console.log(user);
			message.channel.send(`${message.author}, congratulations! You have leveled up to **${user.level}**. :tada:`);
		}
	}
}