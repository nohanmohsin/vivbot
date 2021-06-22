const {MessageAttachment} = require('discord.js')
module.exports = {

	name: 'slap',
	description: "slap someone",
	async execute(message, Canvas){
		if(message.mentions.users.first()){
            const mention = message.mentions.users.first();
            const author = message.author;
            
            const avatarMention = mention.displayAvatarURL({ format: 'png'});
            const avatarAuthor = author.displayAvatarURL({ format: 'png' });
            const result = await Canvas.slap(avatarAuthor, avatarMention);
            message.channel.send(
                new MessageAttachment(result, 'slap.png')
            )
        }
		else{
            message.channel.send('ping other user to slap them')
        }
	}
}