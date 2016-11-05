const Discord = require("discord.js");
const rethink = require('rethinkdb');
const AppData = require("./data/application.json");
const CParse = require("./core/ParseCommand.js");
let BotBoy = new Discord.Client({
	autoReconnect: true,
	disable_everyone: true,
	bot: true
});
global.Call = require("./core/Call.js");
global.Prefixes = require("./data/prefix.json").map(p=>new RegExp(p));
global.Premessages = require("./data/premessages.json");
global.DateToString = require("./core/DateFormat.js");

BotBoy.reloadPrefixes = function(){
	global.Prefixes = require("./data/prefix.json").map(p=>new RegExp(p));
}

rethink.connect({host: 'localhost', port: 28015,  password: AppData.rethink.password}, (err, conn) => {
	if(err){ throw err; }
	console.log("Connected to Rethink");
	conn.use('BotBoy');
	BotBoy.r = rethink;
	BotBoy.rdbconn = conn;

	global.BotBoy = BotBoy;
	BotBoy.login(AppData.token).then(() => {
		console.log("Connected to Discord");
	}).catch((e) => {
		throw e;
	});
}).catch((e) => {
	throw e;
})
BotBoy.on("ready", () => {
	console.log("Bot ready");
});
BotBoy.on("message", message => {
	if(message.author === BotBoy.user) return;
	if(message.channel.type !== "text"){
		// TODO: Cleverbot
	}else{
		CParse(message);
	}
});

process.on("uncaughtException", e => {
	console.dir(e.stack);
});

process.on("SIGINT", e => {
	BotBoy.destroy();
});
