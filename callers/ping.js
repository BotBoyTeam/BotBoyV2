module.exports = {
	subprefixes: [
		"what's your response time(\\?|)",
		"ping"
	],
	proc: call => {
		let n = Date.now();
		call.message.channel.sendMessage(':trackball: Getting response time...').then(m => {
			let time = (m.createdAt-n)/1000;
			m.edit(`<@${call.message.author.id}>, My response time is ${time} seconds.`);
		});
	}
}
