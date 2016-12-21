String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}
module.exports = {
	subprefixes: [
		"what('s|s| is) this (server|guild)( about|)(\\?|)",
		"what('s|s| is) this (server|guild)(\\?|)",
		"tell me what this (server|guild)('s|s| is) about",
		"tell me what this (server|guild) is"
	],
	proc: call => {
		call.message.reply(`This Server is name is ${call.message.guild.name}.\n` +
										   `It's hosted in ${call.message.guild.region.capitalize()}.\n` +
										   `${call.message.guild.large ? "It's a large server.\n" : ''}` +
										   `It's ID is ${call.message.guild.id}.\n` +
										   `It's owner's name is ${call.message.guild.owner.user.username}.\n` +
										   `It has ${call.message.guild.memberCount} members.\n` +
										   `It has ${call.message.guild.channels.size} channels.\n` +
										   `It has a verification level of ${call.message.guild.verificationLevel}.\n` +
										   `It was created in ${DateToString(call.message.guild.createdTimestamp)}.\n`);
	}
}
