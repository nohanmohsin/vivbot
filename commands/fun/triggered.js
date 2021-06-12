const {MessageAttachment} = require('discord.js')
module.exports = {

	name: 'triggered',
	description: "have a triggered pfp",
	async execute(message, Canvas){
		const user = message.mentions.users.first() || message.author;
		console.log(user);
		const avatar = user.displayAvatarURL({ format: 'png'});

		const result = await Canvas.trigger(avatar);
	
		message.channel.send(
			new MessageAttachment(result, 'triggered.gif')
		)
		
	}
}