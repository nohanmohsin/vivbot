module.exports = {

	name: 'repeat or loop',
	description: "repeat or loop music",
	execute(message, args, distube){
		distube.setRepeatMode(message, parseInt(args[0]));
	}
}