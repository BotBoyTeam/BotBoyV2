module.exports = {
	subprefixes: [
		"who am i(\\?|)",
		"what am i(\\?|)",
		"what('s|s| is) my info(\\?|)",
		"tell me who i am",
		"who is (<@\\d+>|.+)(\\?|)"
	],
	proc: call => {
		if(call.ragexIndex < 4){
			call.message.reply(`Well I don't know your *real* name, but ` +
										   `Your online identity is ${call.message.author.username}, or atleast on Discord.\n` +
										   `Your Discord discriminator, or Discord Tag is ${call.message.author.discriminator}.\n` +
										   `Your Discord ID is ${call.message.author.id}.\n` +
										   `You joined Discord in ${DateToString(call.message.author.createdTimestamp)}.\n` +
										   `You joined this server in ${DateToString(call.message.guild.members.find('id', call.message.author.id).joinedTimestamp)}.`);
		}else{
			let m = null;
			if(call.regex[1].startsWith("<@")){
				m = BotBoy.users.find('id', call.message.mentions.users.array()[0].id);
			}else{
				m = BotBoy.users.find('name', call.regex[1]);
			}
			if(m == null){
				call.message.reply(`Couldn't find them anywhere!`);
			}else{
				call.message.reply(`Well I don't know their *real* name, but ` +
										   `Their online identity is ${m.username}, or atleast on Discord.\n` +
										   `Their Discord discriminator, or Discord Tag is ${m.discriminator}.\n` +
										   `Their Discord ID is ${m.id}.\n` +
										   `They joined Discord in ${DateToString(m.createdTimestamp)}.`);
			}
		}
	}
}
