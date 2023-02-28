const { prefix, token } = require('./config.json')
const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const request = require('request');

bot.on('ready', () => {
    console.log(' ');
    console.log('------------------------------------------------------');
    console.log('Example Discord bot developed by @washedgram');
    console.log(' ');
    console.log(`You are now logged in as ${bot.user.tag} ...`);
    console.log(' ');
    console.log('Closing this Terminal/CMD window will disconnect the bot from your server.');
    console.log('------------------------------------------------------');
    console.log(' ');
    bot.user.setActivity('developed by @washedgram')
});

bot.login(token);

bot.on('message', msg => {

    if (msg.content.toLowerCase() === `${prefix}embed`) {
        msg.channel.send( { embed: {
            color: 2123412,
            fields: [{
                name: "This is an embedded message",
                value: "Put something else here!"
              }
            ],
            footer: {
                icon_url: bot.user.avatarURL,
                text: 'Discord bot v.1.0 | @washedgram'
                }
        }});}
    
    else if (msg.content.toLowerCase() === `${prefix}help`) {
        msg.channel.send('this is a normal message.\nType !embed to see an embedded message');
        
    }})
