module.exports = {

	name: 'withdraw',
	description: "withdraw money from bank to wallet",
	async execute(message, args, cs){
        let money = args.join(" ");
        if (!money) return message.channel.send("Enter the amount you want to withdraw.");

        let result = await cs.withdraw(settings = {
            user: message.author,
            guild: message.guild,
            amount: money
        });
        message.channel.send(result);
	}
}