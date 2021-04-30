require('dotenv').config()

const Discord = require('discord.js');
const DisTube = require('distube');

const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL']
});
const distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
const prefix = '!';

const fs = require('fs');

client.commands = new Discord.Collection();

const commandFolder =  fs.readdirSync('./commands')
//looking through folders
for(const folder of commandFolder){
    
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	//looking through files
	for(const file of commandFiles){
		const command = require(`./commands/${folder}/${file}`);

		client.commands.set(command.name, command);
	}
 
}
 
client.once('ready', () => {
    console.log('yeet');
});
 
client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	if(command === 'play'){
		client.commands.get('play').execute(message, args, distube);
	}
	if(command === 'stop'){
		client.commands.get('stop').execute(message, args, distube);
	}
	if(command === 'skip'){
		client.commands.get('skip').execute(message, args, distube);
	}
	if(command === 'queue'){
		client.commands.get('queue').execute(message, args, distube);
	}
});

client.login(process.env.BOT_TOKEN)