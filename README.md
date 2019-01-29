# discord-bot

## What is it?
Basic setup for a customizable Discord bot using DiscordJS. Good resource for developing further, helped me a ton my first time: https://gist.github.com/y21/a599ef74c8746341dbcbd32093a69eb8

## How do I use it?
0. Make a Discord app and bot within the app: https://discordapp.com/developers/applications/. Remember to save your client ID and bot token for later. 
1. Authorize your bot for use in your Discord server by following this link: https://discordapp.com/oauth2/authorize?client_id=INSERT_CLIENT_ID_HERE&scope=bot. (You'll need administrative access to your server to authorize this) Remember to give your bot permissions to post in the channel(s) where you'd like to see output before actually running the code.
2. Replace 'token' in line 13 of `main.js` with your bot's token ID.
3. Run the actual bot code. This should run in your Terminal/CMD window until terminated:
```
tba
```
*--inspect will let you debug much more easily, using `node main.js` works fine too
