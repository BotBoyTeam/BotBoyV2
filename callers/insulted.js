module.exports = {
	subprefixes: [
		"fuck you",
		"kys",
		"kill (yourself|your self)",
		"end it",
		"screw you",
		"you suck",
		"(youre|youre|you are|your) bad",
	],
	proc: call => {
		let n = Date.now();
		call.message.reply(':unamused:')
	}
}
