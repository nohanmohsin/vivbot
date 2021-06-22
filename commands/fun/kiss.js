const {MessageAttachment} = require('discord.js')
module.exports = {

	name: 'kiss( ͡° ͜ʖ ͡°)',
	description: "kiss someone ( ͡° ͜ʖ ͡°)",
	async execute(message, Canvas){
		if(message.mentions.users.first()){
            const mention = message.mentions.users.first();
            const author = message.author;
            
            const avatarMention = mention.displayAvatarURL({ format: 'png'});
            const avatarAuthor = author.displayAvatarURL({ format: 'png' });
            const result = await Canvas.kiss(avatarMention, avatarAuthor);
            message.channel.send(
                new MessageAttachment(result, 'kiss.png')
            )
        }
		else{
            message.channel.send('ping other user to kiss them ( ͡° ͜ʖ ͡°)')
        }
	}
}