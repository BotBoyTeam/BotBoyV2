# BotBoy Version 2.
###### This could have your process runnout of memory!
* [Installation](#installation)
* [Usage](#usage)
  * [Prefixes](#prefixes)
  * [Calls](#calls)
  * [Call Structure](#call-structure)
  * [Error Codes](#error-codes)
* [Customization](#customization)
* [Contributing](#contributing)

### Installation
Extract the bot and use the command:
```py
$ npm i
```

### Usage
In the `data/application.json` file there will be this:
```json
{
	"token"      : "",
	"appid"      : "",
	"rethink"    : {
		"user"     : "",
		"password" : ""
	}
}
```
| Key       | Value                                                                      |
|-----------|----------------------------------------------------------------------------|
| `token`   | Bot Token                                                                  |
| `appid`   | Application ID of the bot. Needed for the `invite` command *(Coming Soon)* |
| `rethink` | Rethink Login                                                              |

### Customization
#### Prefixes
You can edit prefixes in the `data/prefixes.json` file.  
Everything in the file gets turned into Regular Expression *(or RegExp)* and so, it supports that.
#### Calls
Calls is a fancy way of saying commands in the way its build in the bot.  
**All** files in the `calls` directory get parsed into calls.  
All error to parse a call gets logged into console.  
Example Call:  
```js
module.exports = {
	subprefixes: [
		"what('s|s) this command about(\\?|)"
	],
	proc: call => {
		call.message.reply('How should I know?');
	}
}
```
Subprefixes also get turned into Regular Expression to match whatever was after the used prefix.  
`proc` is basically the response of the call.
#### Error Codes
Error codes get directed into a directory called `error_codes`.
When a command fails, the error gets written with included info such as the author of the message and the guild.
### Contributing
You should make sure that your PR is neat and tested for me to merge to the repo.  
I will update the bot when significant changes happen.  
Adding calls are OK for PRs.
