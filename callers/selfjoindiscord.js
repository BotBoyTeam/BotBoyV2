module.exports = {
	subprefixes: [
		"when did you join discord(\\?|)",
		"when were you created(\\?|)",
		"at what (date|time|date and time|moment|second|minute|hour|day|month|year|week) did you join discord(\\?|)",
		"at what (date|time|date and time|moment|second|minute|hour|day|month|year|week) were you created(\\?|)"
	],
	proc: call => {
		call.message.reply(`I was technically created ${DateToString(BotBoy.user.createdTimestamp)}, but really I existed around April of 2016.`);
	}
}
