module.exports = {

	name: 'deposit',
	description: "deposit money from wallet to bank",
	async execute(message, args, cs){
        let money = args.join(" ");
        if (!money) return message.channel.send("Enter the amount you want to deposit.");

        let result = await cs.deposite(settings = {
            user: message.author,
            guild: message.guild,
            amount: money
        });
        message.channel.send(result);
	}
}