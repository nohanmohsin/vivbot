module.exports = {

	name: 'filter music',
	description: "add some filters to the song currently playing",
	execute(message, args, distube, command){
        let filter = distube.setFilter(message, command);
        message.channel.send("Current queue filter: " + (filter || "Off"));
	}
}