module.exports = {

	name: 'skip',
	description: "skip music",
	execute(message, args, distube){
		
        distube.skip(message);
	}
}