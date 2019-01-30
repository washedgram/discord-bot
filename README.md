# discord-bot

## What is it?
Basic setup for a customizable Discord bot using Discord.js. More resources for further developing it to your specifications farther down this README.

## How do I set it up?
0. Make a Discord application and bot within the application: https://discordapp.com/developers/applications/. Remember to save your client ID and bot token for later. 
1. Authorize the bot you just made for use in your server by following this link: https://discordapp.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot. (You'll need administrative access to your server to authorize this) Remember to give your bot permissions to post in the channel(s) where you'd like to see output before actually running the code.
2. Add your Discord bot's token in the 'token' section of `config.json`.
3. Install Node.js / NPM: https://www.npmjs.com/get-npm
4. Open Terminal / Command Prompt and execute the following code:
```
cd __directory you saved this code__
npm install 
node main
```
*only run `npm install` the first time you run the code, this installs the necessary packages if you don't have them already.
*run `node --inspect main.js` for debugging purposes (a Node.js debugging inspector will run alongside your bot)

## Just got it set up, what next?
- The rest takes place inside Discord. 
- Once `main.js` is running (you should see a message saying 'You are now logged in'), message `!help` in any channel that the bot can access.
- Your bot will stay online as long as the Terminal / Command Prompt window is left alive.
- Here's some sample outputs when the bot is functioning correctly:

  ![title](https://github.com/washedgram/discord-bot/blob/master/example%20ss.jpg)


## How can I add more functionality?
- Straight from the source: https://discordjs.guide/#/
- Basic features: https://gist.github.com/y21/a599ef74c8746341dbcbd32093a69eb8
- Embed messages: https://anidiots.guide/first-bot/using-embeds-in-messages
- More: https://github.com/discordjs/Commando-guide

Going to add more example commands / functions in the future for anyone interested in following this repository. I wasn't able to find a singular resource to help start up this process from square one --> having the actual bot running so I figured this might be somewhat useful for someone else.
