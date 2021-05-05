module.exports = {

	name: 'gamble',
	description: "gamble game",
	async execute(message, args, cs){
        let money = args.join(" ");
        if (isNaN(money)) return message.channel.send("Amount is not a number.");

        let result = await cs.gamble(settings = {
            user: message.author,
            guild: message.guild,
            amount: money,
            minAmount: 1,
            cooldown: 25 //25 seconds
        });
        message.channel.send(result);

	}
}