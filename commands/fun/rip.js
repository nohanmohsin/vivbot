const {MessageAttachment} = require('discord.js')
module.exports = {

	name: 'rip',
	description: "put fs in the chat",
	async execute(message, Canvas){
		const user = message.mentions.users.first() || message.author;
		
		const avatar = user.displayAvatarURL({ format: 'png'});

		const result = await Canvas.rip(avatar);
	
		message.channel.send(
			new MessageAttachment(result, 'triggered.gif')
		)
		
	}
}