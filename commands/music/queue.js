module.exports = {

	name: 'queue',
	description: "send the current queue",
	execute(message, args, distube){
		
		let queue = distube.getQueue(message);
        message.channel.send('Current queue:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
	}
}