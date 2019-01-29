# discord-bot

## What is it?
Basic setup for a customizable Discord bot using DiscordJS. Good resource for developing further, helped me a ton my first time: https://gist.github.com/y21/a599ef74c8746341dbcbd32093a69eb8

## How do I use it?
0. Make a Discord app and bot within the app: https://discordapp.com/developers/applications/. Remember to save your client ID and bot token for later. 
1. Authorize your bot for use in your Discord server by following this link: https://discordapp.com/oauth2/authorize?client_id=INSERTCLIENTIDHERE&scope=bot. Remember to give your bot permissions to post in the channel(s) where you'd like to see output.
2. Install NodeJS: `npm install node`
3. Run the actual bot code:
```
cd directory you committed this code
cd discord-bot-master
node --inspect main.js
```
*by using --inspect you can debug much more easily, running `node main.js` works fine too
