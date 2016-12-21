module.exports = {
	subprefixes: [
		"when did (i|<@\\d+>|.+) join discord(\\?|)",
		"at what (date|time|date and time|moment|second|minute|hour|day|month|year|week) did (i|<@\\d+>|.+) join discord(\\?|)"
	],
	proc: call => {
		if((call.regexIndex == 0 && call.regex[1].toLowerCase() == "i") || (call.regexIndex == 1 && call.regex[2].toLowerCase() == "i")){
			call.message.reply(`You joined Discord in ${DateToString(call.message.author.createdTimestamp)}.`);
		}else{
			if((call.regexIndex == 0 && call.regex[1].startsWith("<@")) || (call.regexIndex == 1 && call.regex[2].startsWith("<@"))){
				if(BotBoy.users.find('id', call.message.mentions.users.array()[0].id) == null){
					call.message.reply(`Couldn't find anyone with the name of ${call.regexIndex == 0 ? call.regex[1] : call.regex[2]} on this server!`);
				}else{
					call.message.reply(`${call.message.mentions.users.array()[0].username} joined Discord in ${DateToString(call.message.mentions.users.array()[0].createdTimestamp)}.`);
				}
			}else{
				let m = call.regexIndex == 0 ? BotBoy.users.find('username', call.regex[1]) : BotBoy.users.find('username', call.regex[2]);
				if(m == null){
					call.message.reply(`Couldn't find anyone with the name of ${call.regexIndex == 0 ? call.regex[1] : call.regex[2]} on this server!`);
				}else{
					call.message.reply(`${m.username} joined Discord in ${DateToString(m.createdTimestamp)}.`);
				}
			}
		}
		// call.message.reply(`You joined Discord in ${DateToString(call.message.author.createdTimestamp)}.`);
	}
}
