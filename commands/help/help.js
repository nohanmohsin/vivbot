const musicHelp = require('./musicHelp');
const currencyHelp = require('./currencyHelp');
const rankHelp = require('./rankHelp');
const funHelp = require('./funHelp');
const gameHelp = require('./gameHelp');
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
				{
					name: "ðFun Commands", value: `*have fun with your friends with these image manipulation commands
					**7 commands**`, inline: true},
				{ name: `ð¶**Music Commands/music**
				`, value: `*all the music commands*
				**11 commands**`, inline: true },
				{name: ' ð°**Currency Commands**', value: `*use our digital currency with these commands*
				**9 commands**`, inline: true},
				{ name: `ð**Rank Commands**
				`, value: `*check your rank in the server*
				**2 commands**`, inline: true },
				{
					name: 'ð® **Game Commands**', value: `*few games to play in the server*
					**4 commands**`, inline:true}
				
	  		)
			message.channel.send(embed)
		}

		else{
			const helparg=args[0].toLowerCase();
			if(helparg == 'music'){
				musicHelp.execute(message, embed)
			}
	
			if(helparg == 'currency'){
				currencyHelp.execute(message, embed)
			}
	
			if(helparg == 'rank'){
				rankHelp.execute(message, embed)
			}
			if(helparg == 'fun'){
				funHelp.execute(message, embed)
			}
			if(helparg == 'game'){
				gameHelp.execute(message, embed)
			}
			else{
				message.channel.send('that category doesnt exist :(')
			}
		}
	}
}