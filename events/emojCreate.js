const Discord = require("discord.js");
module.exports = {
  event: "emojiCreate",
  emitter: "on",
  run: async (emoji, bot) => {

    let channel = await bot.db.fetch(`channel_${emoji.guild.id}`);
    if (channel == null) return;

    var autoEmb = new Discord.RichEmbed()
      .setTitle('Logs | Added emoji!')
      .setDescription(`${emoji} **${emoji.name}**`)
      .setColor('#3654ff')
      .setFooter(`Emoji ID: ${emoji.id}`)
      .setTimestamp();
    var set = emoji.guild.channels.find(`name`, `${channel}`);
    set.send(autoEmb);

  }
}