module.exports = {
	subprefixes: [
		"(please tell me |tell me |tell me, |please tell me, |)who am i(\\?|)",
		"(please tell me |tell me |tell me, |please tell me, |)what am i(\\?|)",
		"(please tell me |tell me |tell me, |please tell me, |)what('s|s) my info(\\?|)"
	],
	proc: call => {
		call.message.reply(`Well I don't know your *real* name, but` +
											 `your online identity is ${call.message.author.username}, or atleast on Discord.\n` +
										   `Your Discord discriminator, or Discord Tag is ${call.message.author.discriminator}.\n` +
										   `Your Discord ID is ${call.message.author.id}.\n` +
										   `You joined Discord in ${DateToString(call.message.author.createdAt)}.\n` +
										   `You joined this server in ${DateToString(call.message.guild.members.find('id', call.message.author.id).joinedAt)}.`);
	}
}
