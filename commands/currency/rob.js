module.exports = {

	name: 'rob',
	description: "rob a user",
	async execute(client, message, args, cs){
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        }

        if (user.bot || user === client.user) return message.channel.send("This user is a bot.");
        if (!user) return message.channel.send('Sorry, you forgot to mention somebody.');
        
        let result = await cs.rob(settings = {
            user: message.author,
            user2: user,
            guild: message.guild,
            minAmount: 100,
            successPercentage: 5,
            cooldown: 25 //25 seconds
        });

        message.channel.send(result);
	}
}