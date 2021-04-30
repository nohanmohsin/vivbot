module.exports = {

	name: 'stop',
	description: "stop music",
	execute(message, args, distube){
		
		distube.stop(message);
	}
}