
module.exports = {

	name: 'battle',
	description: "battle a friend",
	async execute(message, minigames){
		if(message.mentions.users.first()){
            minigames.startBattle(message.mentions.users.first(), message);
            
        }

		else{
            message.channel.send('please ping the user you want to battle with')
        }
		
	}
}