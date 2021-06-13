const {MessageAttachment} = require('discord.js')
module.exports = {

	name: 'fuse',
	description: "fuse two images",
	async execute(message, Canvas){
        if(message.mentions.users.first()){
            const mention = message.mentions.users.first();
            const author = message.author;
            
            const avatarMention = mention.displayAvatarURL({ format: 'png'});
            const avatarAuthor = author.displayAvatarURL({ format: 'png' });
            const result = await Canvas.fuse(avatarMention, avatarAuthor);
            message.channel.send(
                new MessageAttachment(result, 'fused.png')
            )
        }
		else{
            message.channel.send('ping other user that you wanna fuse your pfp with')
        }
		
	}
}