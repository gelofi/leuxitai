const Discord = require("discord.js");
module.exports = {
  event: "channelDelete",
  emitter: "on",
  run: async (Channel, bot) => {
    if (Channel.type == 'dm') return;
    let channels = await bot.db.fetch(`channel_${Channel.guild.id}`);
    if (channels == null) return;

    var autoEmb = new Discord.RichEmbed()
      .setTitle('Logs | Channel deleted!')
      .setDescription(`#${Channel.name}`)
      .setColor('#3654ff')
      .setFooter(`Channel ID: ${Channel.id}`)
      .setTimestamp();
    var set = Channel.guild.channels.find(`name`, `${channel}`);
    set.send(autoEmb);
  }
}