module.exports = {
	subprefixes: [
		"(please tell me |tell me |tell me, |please tell me, |)when did i join this (discord |)(server|guild)(\\?|)",
		"(please tell me |tell me |tell me, |please tell me, |)at what (date|time|date and time|moment|second|minute|hour|day|month|year|week) did i join this (discord |)(server|guild)(\\?|)"
	],
	proc: call => {
		call.message.reply(`You joined this server in ${DateToString(call.message.guild.members.find('id', call.message.author.id).joinedAt)}.`);
	}
}
