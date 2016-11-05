const path = require('path').join(__dirname, "../callers");
const ErrorWriter = require('./WriteErrorCodes.js')

String.prototype.startsWithArray = function(array){
	return array.map(p=>{
		if(this.toLowerCase().startsWith(p)){
			return true
		}else{
			return false
		}
	}).includes(true);
}

String.prototype.hasPrefix = function(){
	return Prefixes.map(p=>{
		if(this.startsWithArray(Premessages) && this.toLowerCase().match(p)){
			return true
		}else{
			return false
		}
	}).includes(true);
}

function caseOff(){
	return new RegExp(this.toString(), 'i');
}

String.prototype.getArgs = function(cmd){
	ends = [''];
	cmd.subprefixes.map(p=>{
		if(this.toLowerCase().match(new RegExp(p, 'i'))){
			if(this.toLowerCase().match(new RegExp(p, 'i')).length>1){
				ends = this.match(new RegExp(p+"(.*)", 'i')).reverse()[0]
			}
		}
	});
	return ends;
}

class CommandHandler {
  constructor() {
		this.cmds = [];
    this.reload();
  }

	reload() {
		let cmds = [];
		require("fs").readdirSync(path).forEach(function(file) {
		  try{
		    cmds.push(require("../callers/" + file));
		  }catch(e){
		    console.log(`Call File ${file} failed to load:`)
				console.log(e)
		  }
		});
		this.cmds = cmds
	}

	exec(message) {
		let executed = false
		this.cmds.map(c=>{
			c.subprefixes.map(sp=>{
				if(message.content.match(new RegExp(sp, "gi"))&&!executed){
					let nc = new Call(message, message.content.getArgs(c), c);
					c.proc(nc);
					executed = true;
				}
			});
		});
	}
}
const Commands = new CommandHandler;
global.Callers = Commands;

module.exports = (message) => {
	if(message.content.hasPrefix()){
		try{
			Commands.exec(message);
		}catch(e){
			message.reply("Um... Something borked in my code. Here's an error message:```js"+e+"```Error Code "+message.id);
			ErrorWriter(e, message, 'guildmsg');
		}
	}
}
