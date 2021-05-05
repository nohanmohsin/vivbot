module.exports = {

	name: 'give money',
	description: "give money to an user",
	async execute(client, message, args, cs){
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else {
            user.id = "1"
        }
    
        if (user.bot || user === client.user) return message.channel.send("This user is a bot.");
        if (!client.users.cache.get(user.id) || !user) return message.channel.send('Sorry, you forgot to mention somebody.');
    
        let amount = args[1];
        if (!amount) return message.channel.send("Enter amount of money to add.");
        if (amount.includes("-")) return message.channel.send("You can't send negitive money.")
        let money = parseInt(amount);
    
        let result = await cs.transferMoney(settings = {
            user: message.author,
            user2: user,
            guild: message.guild,
            amount: money
        });
        message.channel.send(result);
	}
}