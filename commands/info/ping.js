const Discord = require('discord.js')

module.exports = {
    name: 'ping',
    aliases: ["pong", "p"],
    description: "sends the API latency of the bot.",
    run: async (bot, message, args) => {
      
      const mongoping = await bot.db.fetchLatency();
      
        message.channel.send("Pinging...").then(m => {
        var mer = ["are we stupid?",
                   "yeah bruh I'm alive",
                   "🔊 bruh moment",
                   "tu parles français?",
                   "tú hablas español?",
                   "ping LOL 😀 👍",
                   "i'm good hbu?",
                   "what's up?",
                   "haha yes ping go brr",
                   "how???", "```message.channel.send```(",
                   "running slow?",
                   "why tho", "slide to my DMs i'm lonely",
                   "i'm up and going",
                   "oh why, monsieur?",
                   "WHY DID YOU PING ME",
                   "it's over, isn't it?",
                   "how's your day?",
                   "sleep tight, don't let the bed bugs bite",
                   "i'm a bot, beep boop",
                   "Pong!", "what?",
                   "can I eat a 2 week old cake?",
                   "homemade burrito recipe google search",
                   "stop i'm playing geometry dash",
                   "how to gain followers on Twitter"];
        m.edit(mer[Math.round(Math.random() * (mer.length - 1))] 
        + ` -${Math.round(m.createdTimestamp - message.createdTimestamp)}ms- MDB: -${Math.round(mongoping.average)}ms-`);
   })
    }
}