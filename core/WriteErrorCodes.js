const fs = require('fs');
module.exports = (error, message, type) => {
	data = `Error Code ${message.id}\n` +
	       `User: ${message.author.username}#${message.author.discriminator} (${message.author.id})\n` +
				 `Guild: ${message.guild.name} (${message.guild.id})\n\n` + err
	fs.writeFile(__dirname+"/../error_codes/"+type+message.id, data, function(err) {
	    if(err) {
	    		console.log("Could not print error code "+message.id);
	        return console.log(err);
	    }
	    console.log("The file was saved!");
	});
}
