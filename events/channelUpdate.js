const Discord = require("discord.js");
module.exports = {
  event: "channelUpdate",
  emitter: "on",
  run: async (oldChannel, newChannel, bot) => {
    if (newChannel.type === 'dm') return;
    let channel = await bot.db.fetch(`channel_${newChannel.guild.id}`);
    if (channel == null) return;

    if (oldChannel.topic == '' || oldChannel.topic == null) oldChannel.topic = 'No topic set.';
    if (newChannel.topic == '' || newChannel.topic == null) newChannel.topic = 'No topic set.';

    if (oldChannel.name !== newChannel.name || oldChannel.topic !== newChannel.topic) {
      var autoEmb = new Discord.RichEmbed()
        .setTitle('Logs | Channel updated!')
        .setDescription(
          `~~${oldChannel.name}~~ -> ${newChannel}\n**Old Topic**\n${
            oldChannel.topic
          }\n\n**New Topic**\n${newChannel.topic}`
        )
        .setColor('#3654ff')
        .setFooter(`Channel ID: ${newChannel.id}`)
        .setTimestamp();
      var set = newChannel.guild.channels.find(`name`, `${channel}`);
      set.send(autoEmb);
    } else {
      var emb = new Discord.RichEmbed()
        .setTitle('Logs | Channel updated!')
        .setDescription(`${oldChannel}'s channel permissions has been updated!`)
        .setColor('#7289da')
        .setFooter(`Channel ID: ${newChannel.id}`)
        .setTimestamp();
      var set = newChannel.guild.channels.find(`name`, `${channel}`);
      set.send(emb);
    }
  }
}