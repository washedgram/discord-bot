const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('ready', () => {
    console.log(' ');
    console.log('----------------------------------------------');
    console.log(`You are now logged in as ${bot.user.tag} ...`);
    console.log('----------------------------------------------');
    console.log(' ');
    bot.user.setActivity('developed by @washedgram')
});

bot.login('token'); //insert your own token you created here!

bot.on('message', msg => {

    if (msg.content.toLowerCase() === '!embed') {
        msg.channel.send( { embed: {
            color: 2123412,
            fields: [{
                name: "This is an embedded message",
                value: "Put something else here!"
              }
            ],
            footer: {
                icon_url: client.user.avatarURL,
                text: 'grambot v1.0.0'
                }
        }});}
    
    else if (msg.content.toLowerCase() === '!help') {
        msg.channel.send('this is a normal message.\ntype !embed to see an embedded message');
        
    }})
