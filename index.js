require('dotenv').config()

const Discord = require('discord.js');
const DisTube = require('distube');
const fs = require('fs');
const Levels = require("discord-xp");

const client = new Discord.Client({
  partials: ['MESSAGE', 'REACTION', 'CHANNEL']
});
const distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
const prefix = '!';



client.commands = new Discord.Collection();
client.events = new Discord.Collection();

const commandFolder =  fs.readdirSync('./commands')
//looking through folders inside the commands folder
for(const folder of commandFolder){
    
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	//looking through files
	for(const file of commandFiles){
		const command = require(`./commands/${folder}/${file}`);

		client.commands.set(command.name, command);
	}
 
}

const eventsFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));
//looking through folders inside the events folder
for(const file of eventsFiles ){
	const event = require(`./events/${file}`);
	client.events.set(event.name, event);
}

client.once('ready', () => {
    console.log('yeet');
});
 
client.on('message', message =>{
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	client.events.get('messageXp').execute(message )

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
	if (["repeat", "loop"].includes(command)){
		client.commands.get('repeatLoop').execute(message, args, distube);
	}
	if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)){
		client.commands.get('filter').execute(message, args, distube, command);
	}
});

distube
	.on("playSong", (message, queue, song) => message.channel.send(
		`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n${status(queue)}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
		`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
	))
	.on("playList", (message, queue, playlist, song) => message.channel.send(
		`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
	))
	.on("addList", (message, queue, playlist) => message.channel.send(
		`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n${status(queue)}`
	))
	// DisTubeOptions.searchSongs = true
	.on("searchResult", (message, result) => {
		let i = 0;
		message.channel.send(`**Choose an option from below**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Enter anything else or wait 60 seconds to cancel*`);
	})
	// DisTubeOptions.searchSongs = true
	.on("searchCancel", (message) => message.channel.send(`Searching canceled`))
	.on("error", (message, e) => {
		console.error(e)
		message.channel.send("An error encountered: " + e);
});


client.login(process.env.BOT_TOKEN)