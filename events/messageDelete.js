const Discord = require("discord.js")

module.exports = {
  event: "messageDelete",
  emitter: "on",
  run: async (message, bot) => {
    let channel = await bot.db.fetch(`channel_${message.guild.id}`);
    if (channel == null) return;

    try {
      var autoEmb = new Discord.RichEmbed()
        .setAuthor(`${message.author.tag} | Message deleted!`, message.author.displayAvatarURL)
        .setDescription(`${message}\n\nChannel: ${message.channel}`)
        .setColor('#3654ff')
        .setFooter(`Author ID: ${message.author.id}\nMessage ID: ${message.id}`)
        .setTimestamp();
      var set = message.guild.channels.find(`name`, `${channel}`);
      set.send(autoEmb);

    } catch (error) {
      var fail = new Discord.RichEmbed()
        .setAuthor('Logs | Message deleted!')
        .setDescription(
          'I cannot find the information on that message!\nThat message is either deleted before I could log it, or is 2 weeks old.'
        )
        .setColor('#ff3636')
        .setFooter(`Message ID: ${message.id}`);
      var set = message.guild.channels.find(`name`, `${channel}`);
      set.send(error + fail);
    }

  }
}