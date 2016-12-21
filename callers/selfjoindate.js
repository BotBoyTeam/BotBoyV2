module.exports = {
	subprefixes: [
		"when did you join this (discord |)(server|guild)(\\?|)",
		"at what (date|time|date and time|moment|second|minute|hour|day|month|year|week) did you join this (discord |)(server|guild)(\\?|)"
	],
	proc: call => {
		call.message.reply(`I joined this server in ${DateToString(call.message.guild.members.find('id', BotBoy.user.id).joinedTimestamp)}.`);
	}
}
