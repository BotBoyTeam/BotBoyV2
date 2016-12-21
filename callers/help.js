module.exports = {
	subprefixes: [
		"what do you do(\\?|)",
		"what(s|'s) your commands(\\?|)",
		"what do you respond to(\\?|)",
		"help"
	],
	proc: call => {
		let n = Date.now();
		call.message.reply("You can ask me about your information, like your Discord ID, `Hey BotBoy, What's my Discord ID?`\n" +
	                     "When you joined this server, `Ok BotBoy, When did I join this server?`\n" +
										   "Who you are, `Alright BotBoy, Who am I?`\n" +
										   "Pokemon Info, `Alright BotBoy, Give me info on the pokemon Snivy.`\n" +
										   "Server Info, `Hey BotBoy, What's this server about?`" +
										   "and more! Join me in my server! https://discord.gg/bc4CHJw")
	}
}
