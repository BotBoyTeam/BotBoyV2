module.exports = {
	subprefixes: [
		"(please tell me |tell me |tell me, |please tell me, |)what('s|s) my (discord |)id(\\?|)"
	],
	proc: call => {
		call.message.reply(`Your Discord ID is ${call.message.author.id}.`);
	}
}
