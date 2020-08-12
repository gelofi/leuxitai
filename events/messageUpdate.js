const Discord = require("discord.js");

module.exports = {
  event: "messageUpdate",
  emitter: "on",
  run: async (oldMessage, newMessage, bot) => {
    if (newMessage.author.bot) return;
    let channel = await bot.db.fetch(`channel_${oldMessage.guild.id}`);
    if (channel == null) return;

    var autoEmb = new Discord.RichEmbed()
      .setAuthor(`Logs | Message edited!`, newMessage.author.displayAvatarURL)
      .setDescription(
        `**${newMessage.author.tag}**'s message was edited in ${
          newMessage.channel
        } | [Link](https://discordapp.com/channels/${newMessage.guild.id}/${
          newMessage.channel.id
        }/${newMessage.id})`
      )
      .addField(`Old Message`, `${oldMessage}`)
      .addField(`New Message`, `${newMessage}`)
      .setColor('#3654ff')
      .setFooter(`Message ID: ${newMessage.id}`)
      .setTimestamp();
    var set = newMessage.guild.channels.find(`name`, `${channel}`);
    set.send(autoEmb);
  }
}