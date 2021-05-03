require('dotenv').config()

const Discord = require('discord.js');
const DisTube = require('distube');
const fs = require('fs');
const Levels = require('discord-xp');
const CurrencySystem = require("currency-system");
const cs = new CurrencySystem;
const connect = cs.connect;
connect(process.env.MONGO_DB_URL);
Levels.setURL(process.env.MONGO_DB_URL)
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
 
client.on('message', async(message) =>{
	if(message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	client.events.get('xp event').execute(message, Levels);

	//music commands
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
		client.commands.get('repeat or loop').execute(message, args, distube);
	}
	if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)){
		client.commands.get('filter').execute(message, args, distube, command);
	}

	//rank checking commands
	if(command === 'rank'){
		client.commands.get('check rank').execute(message);
	}
	if(command === 'lb'){
		client.commands.get('leaderboard').execute(message, Levels);
	}

	//currency commands
	if(command === 'addmoney'){
		let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else if (!args[0]) {
            return message.channel.send("Specify a user!");
        }
        // This is where  we check if the person who is running command is admin or no.
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("You do not have requied permissions.");
        // This is where money that admin add's will go default is wallet. 
        let wheretoPutMoney = args[2] || "wallet"; //or bank
        //This is where we specify amount to add.
        let amount = args[1];
        //IF no amount return.
        if (!amount) return message.channel.send("Enter amount of money to add.");
        // when you will use it from discord , it will a string but parseInt() will convert that string into a <Number>
        let money = parseInt(amount);
        // Adding the money to user.
        let result = await cs.addMoney(settings = {
            user: user,
            guild: message.guild,
            amount: money,
            wheretoPutMoney: wheretoPutMoney
        });
        //IF the package send's a response.
        if (result) return message.channel.send(`Successfully added $${money} to ${user.username}, ( in ${wheretoPutMoney} )`);
        // IF there was a error.
        else return message.channel.send("There was a unexpeted error.");
	}
});

distube
	.on("playSong", (message, queue, song) => message.channel.send(
		`Playing \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}\n`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
		`Added ${song.name} - \`${song.formattedDuration}\` to the queue by ${song.user}`
	))
	.on("playList", (message, queue, playlist, song) => message.channel.send(
		`Play \`${playlist.name}\` playlist (${playlist.songs.length} songs).\nRequested by: ${song.user}\nNow playing \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
	))
	.on("addList", (message, queue, playlist) => message.channel.send(
		`Added \`${playlist.name}\` playlist (${playlist.songs.length} songs) to queue\n`
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