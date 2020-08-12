const Discord = require("discord.js");

module.exports = {
  event: "roleCreate",
  emitter: "on",
  run: async (role, bot) => {
    let channel = await bot.db.fetch(`channel_${role.guild.id}`);
    if (channel == null) return;

    var autoEmb = new Discord.RichEmbed()
      .setTitle('Logs | Role created!')
      .setDescription(`${role} (${role.name})`)
      .setColor(role.color)
      .setFooter(`Role ID: ${role.id}`)
      .setTimestamp();
    var set = role.guild.channels.find(`name`, `${channel}`);
    set.send(autoEmb);
  }
}