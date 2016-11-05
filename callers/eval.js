module.exports = {
	subprefixes: [
		"eval(, | )",
		"evaluate(, | )"
	],
	proc: call => {
		if(call.message.author.id=='158049329150427136'){
			try{
				call.message.reply("```js\n" + eval(call.args) + "```");
			}catch(e){
				call.message.reply("```js\n"+e+"```");
			}
		}else{
			call.message.reply("Hey! You can't do that!")
		}
	}
}
