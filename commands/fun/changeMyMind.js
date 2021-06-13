const {MessageAttachment} = require('discord.js')
module.exports = {

	name: 'changeMind',
	description: "change mind meme with custom text that you input",
	async execute(message, args, Canvas){
		if(args.length > 0){
            console.log(args);
            const text = args[0];
            
            const result = await Canvas.changemymind(text);

            message.channel.send(
                new MessageAttachment(result, 'mindchng.png')
            )

        }
        else{
            message.channel.send('please enter some text to edit in the meme')
        }
	}
}