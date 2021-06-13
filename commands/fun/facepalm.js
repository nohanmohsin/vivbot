const {MessageAttachment} = require('discord.js')
module.exports = {

	name: 'facepalm',
	description: "facepalm with your pfp",
	async execute(message, Canvas){
		const user = message.author;
		
		const avatar = user.displayAvatarURL({ format: 'png'});

		const result = await Canvas.facepalm(avatar);
	
		message.channel.send(
			new MessageAttachment(result, 'facepalmed.png')
		)
		
	}
}