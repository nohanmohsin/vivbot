module.exports = {

	name: 'add money',
	description: "add money to user",
	async execute(message, args, cs){
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
}