const request = require('superagent');
String.prototype.capitalize = function(){
    return this.charAt(0).toUpperCase() + this.slice(1);
}
module.exports = {
	subprefixes: [
		"What (info|information) is there on( the|) pokemon",
		"What('s|s| is)( the|) pokemon",
		"What (stats|statistics) are( there on|)( the|) pokemon",
		"What('s|s| are| is) the stats for( the|) pokemon",
		"(please give me |give me )(stats|statistics|info|information) on the pokemon"
	],
	proc: call => {
		if(call.hasArgs){
			call.message.channel.sendMessage(':trackball: Getting pokemon info...').then(m => {
				pkm = call.args.split(' ')[1]
				if(pkm==undefined||pkm==""){
					call.message.reply(`You didn't tell me what I should lookup!`)
					return;
				}
				pkm = pkm.replace(/\?/, "").replace(/\./, "")
				request.get(`http://pokeapi.co/api/v2/pokemon/${pkm.toLowerCase()}`)
				.end((err, res)=>{
					if(err){
						m.edit(`<@${call.message.author.id}>, Couldn't find statistics on the pokemon! ${err.detail}`);
					}else if(res.statusCode!=200){
						m.edit(`<@${call.message.author.id}>, There isn't a pokemon named ${pkm} I could find!`);
					}else{ // { |ty| typs[pkm['types'][ty]['slot']] = "`"+pkm['types'][ty]['type']['name'].upcase+"`" }
						types = []
						Object.keys(res.body.types).map(type=>{
							types[res.body.types[type].slot] = "**`"+res.body.types[type].type.name.toUpperCase()+"`**"
						})
						m.edit(`<@${call.message.author.id}>, Here's some nice info I found on ${res.body.name.capitalize()}!\n` +
					         `**${res.body.name.capitalize()}** ${types.join(" ")}\n` +
					         `${res.body.is_default ? "*Default Pokemon*\n" : ""}` +
					         `**ID**: ${res.body.id}\n` +
					         `**Order**: ${res.body.order}\n` +
								   `**Height**: ${res.body.height/10} meters\n` +
								   `**Weight**: ${res.body.weight/10} kilograms\n` +
								   `**Base Experience**: ${res.body.base_experience} XP\n` +
								   `**Stats**:\n` + "```ruby\n" +
								   `${res.body.stats.map(stat=>stat.stat.name.split('-').map(v=>v.capitalize()).join(' ')+": "+stat.base_stat+", "+stat.effort+" Effort").join('\n')}` + "```" +
								   `${res.body.sprites.front_default}`);
					}
				})
			});
		}else{
			call.message.reply(`You didn't tell me what I should lookup!`)
		}
	}
}
