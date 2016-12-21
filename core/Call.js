class Call {
  constructor(message, args, command, regex, regexIndex) {
	  this.args = args;
		this.hasArgs = !args==null || !args=="";
	  this.message = message;
	  this.command = command;
	  this.regex = regex;
	  this.regexIndex = regexIndex;
  }
}

module.exports = Call
