module.exports = {

	name: 'fun help',
	description: "meh",
	execute(message, embed){
		embed
		.setColor('#00B1FB')
		.setDescription('all the fun commands :3')
		.setTitle('fun Commands')
		.addField('1. ``!trigger``', 'trigger effect on pfp')
		.addField('2. ``!mindchng``', 'change my mind meme with custom text')
		.addField('3. ``!fuse <mention>``', 'fuse your pfp with your friends pfp')
		.addField('4. ``!facepalm``', 'facepalm on your pfp')
		.addField('5. ``!rip <mention (optional)> ``', 'rip your pfp or a ping')
		.addField('6. ``!kiss <mention>``', 'kiss someone ( ͡° ͜ʖ ͡°)')
        .addField('7. ``!slap <mention>``', 'slap someone');

		message.channel.send(embed)
	}
}