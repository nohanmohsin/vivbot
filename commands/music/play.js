
module.exports = {

	name: 'play',
	description: "play music",
	execute(message, args, distube){
		
		distube.play(message, args.join(" "))
	}
}