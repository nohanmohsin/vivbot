const musicHelp = require('./musicHelp');
const currencyHelp = require('./currencyHelp');
const rankHelp = require('./rankHelp')
const Discord = require('discord.js');
const embed = new Discord.MessageEmbed();


module.exports = {

	name: 'help',
	description: "view all the help categories",
	execute(message, args){
		if(args.length == 0){
			embed
			.setColor('#0000FF')
			.setDescription('to be able to check all the commands in the sections use ``!help [section name]``\n eg.``!help music``')
			.setTitle('The VIVbot Commands')
			
			.addFields(
				{ name: `🎶**music Commands/music**
				`, value: `*all the music commands*
				**11 commands**`, inline: true },
				{name: ' 💰**currency Commands**', value: `*use our digital currency with these commands*
				**9 commands**`, inline: true},
				{ name: `📈**rank Commands**
				`, value: `*check your rank in the server*
				**2 commands**`, inline: true }
	  		)
			message.channel.send(embed)
		}

		if(args[0].toLowerCase() == 'music'){
			musicHelp.execute(message, embed)
		}

		if(args[0].toLowerCase() == 'currency'){
			currencyHelp.execute(message, embed)
		}

		if(args[0].toLowerCase() == 'rank'){
			rankHelp.execute(message, embed)
		}
	}
}