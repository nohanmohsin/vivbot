module.exports = {

	name: 'music help',
	description: "meh",
	execute(message, embed){
		embed
		.setColor('#00B1FB')
		.setDescription('all the music commands :3')
		.setTitle('Music Commands')
		.addField('1. ``!play <songName> ``', 'play a song')
		.addField('2. ``!queue``', 'see the current queue')
		.addField('3. ``!skip``', 'skip the current song')
		.addField('4. ``!stop``', 'disconnect from vc')
		.addField('5. ``!repeat/loop``', 'repeat the current song or loop the queue')
		.addField('6. ``![`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`]``', 'add fun effects in your songs')
		message.channel.send(embed)
	}
}