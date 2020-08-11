const Discord = require('discord.js')

module.exports = {
    name: 'ecoreset',
    aliases: ["ecor", "reseteco"],
    description: "reset your bank and money stats",
    run: async (bot, message, args) => {
      
    const db = bot.db

    let eco;
  
    let econ = await db.fetch(`eco_${message.guild.id}`)
    
    if(econ == null || econ == undefined){
      eco = 'off';
      //return message.channel.send("That command is not enabled!");
    } else {
      eco = econ;
    }
      
    if(eco !== 'on') return message.channel.send("This command is not toggled on!");
    
    const user = message.author;
    
    message.channel.send('Are you sure to reset your Eco profile?\nReply `YES` if you are now sure.\nThis menu will end in 30 seconds.')
    .then(() => {
    message.channel.awaitMessages(response => response.content === 'YES', {
      maxMatches: 1,
      time: 30000,
      errors: ['time'],
      })
      .then((collected) => {
      bot.db.delete(`money_${message.guild.id}_${user.id}`)
      bot.db.delete(`bank_${message.guild.id}_${user.id}`)
      message.channel.send(`Successfully reset the Eco Profile (Money & Bank) for ${user}.`)
        })
        .catch((err) => {
          message.channel.send('Economy Reset menu has been canceled.');
          });
      });

    
  }
}
