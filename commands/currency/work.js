module.exports = {

	name: 'work',
	description: "work game",
	async execute(message, args, cs){
        let result = await cs.work(settings = {
            user: message.author,
            guild: message.guild,
            maxAmount: 100,//The max amount of moneyy you get when you work.
            replies: ['Programmer', 'Builder', 'Waiter', 'Busboy', 'Chief', 'Mechanic'],
            cooldown: 25 //25 seconds,
    
        });
    
        message.channel.send(result);
	}
}