const Discord = require("discord.js");

module.exports = {
  event: "guildMemberRemove",
  emitter: "on",
  run: async (member, bot) => {
    let channel = await bot.db.fetch(`channel_${member.guild.id}`);
    if (channel == null) return;

    let mem = member.toString();
    var autoEmb = new Discord.RichEmbed()
      .setTitle('Logs | Member left!')
      .setThumbnail(member.user.displayAvatarURL)
      .setDescription(`${mem} just left our server :(`)
      .setColor('#3654ff')
      .setFooter(`ID: ${member.id}`)
      .setTimestamp();
    var set = member.guild.channels.find(`name`, `${channel}`);
    set.send(autoEmb);
  }
}