const Discord = require("discord.js");
module.exports = {
  event: "channelCreate",
  emitter: "on",
  run: async (Channel, bot) => {
    if (Channel.type == 'dm') return;
    let channel = await bot.db.fetch(`channel_${Channel.guild.id}`);
    if (channel == null) return;
    var autoEmb = new Discord.RichEmbed()
      .setTitle('Logs | New channel created!')
      .setDescription(`${Channel}`)
      .setColor('#3654ff')
      .setFooter(`Channel ID: ${Channel.id}`)
      .setTimestamp();
    var set = Channel.guild.channels.find(`name`, `${channel}`);
    set.send(autoEmb);
  }
}