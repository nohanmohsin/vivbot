module.exports = {

	name: 'balance',
	description: "check balance of user",
	async execute(message, args, cs){
        let user;
        if (message.mentions.users.first()) {
            user = message.mentions.users.first();
        } else if (args[0]) {
            user = message.guild.members.cache.get(args[0]).user;
        } else if (!args[0]) {
            user = message.author;
        }
    
        let result = await cs.balance(settings = {
            user: user,
            guild: message.guild
        });
        message.channel.send(`${user.tag}, \n have $${result.wallet} in you wallet and $${result.bank} in there bank.`);
    
	}
}