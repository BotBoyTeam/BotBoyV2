module.exports = {
	subprefixes: [
		"(what is|what's|whats) (.+) (multiplied by|divided by|subtracted by|times|minus|plus|to the power of|\\-|\\+|\\/|\\^) (.+)(\\?|)",
		"(what is|what's|whats) the (circumference|square root|tangent|cosine|cube root|arctangent|absolute value|natural logarithm) of (.+)(\\?|)"
	],
	proc: call => {
		if(call.regexIndex == 0){
			let n1 = Number(call.regex[2]);
			if(call.regex[2].toLowerCase() == "pi"){ n1 = Math.PI; }
			let n2 = Number(call.regex[4]);
			if(call.regex[4].toLowerCase() == "pi"){ n2 = Math.PI; }
			if(isNaN(n1) || isNaN(n2)){
				call.message.reply(`That's not a number!`);
			}else{
				switch(call.regex[3]){
					case "multiplied by":
					case "times":
					case "*":
						call.message.reply(n1 * n2);
						break;
					case "divided by":
					case "/":
						call.message.reply(n1 / n2);
						break;
					case "subtracted by":
					case "minus":
					case "=":
						call.message.reply(n1 - n2);
						break;
					case "plus":
					case "+":
						call.message.reply(n1 + n2);
						break;
					case "to the power of":
					case "^":
						call.message.reply(Math.pow(n1, n2));
						break;
				}
			}
		}else if(call.regexIndex == 1){
			let n1 = Number(call.regex[3]);
			if(call.regex[3].toLowerCase() == "pi"){ n1 = Math.PI; }
			if(isNaN(n1)){
				call.message.reply(`That's not a number!`);
			}else{
				switch(call.regex[1]){
					case "circumference":
						call.message.reply(2 * Math.PI * n1);
						break;
					case "square root":
						call.message.reply(Math.sqrt(n1));
						break;
					case "tangent":
						call.message.reply(Math.tan(n1));
						break;
					case "cosine":
						call.message.reply(Math.cos(n1));
						break;
					case "cube root":
						call.message.reply(Math.cbrt(n1));
						break;
					case "arctangent":
						call.message.reply(Math.atan(n1));
						break;
					case "absolute value":
						call.message.reply(Math.abs(n1));
						break;
					case "natural logarithm":
						call.message.reply(Math.log(n1));
						break;
				}
			}
		}
	}
}
