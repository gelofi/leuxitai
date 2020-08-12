const Discord = require("discord.js");

module.exports = {
  event: "roleUpdate",
  emitter: "on",
  run: async (oldRole, newRole, bot) => {

    let channel = await bot.db.fetch(`channel_${newRole.guild.id}`);
    if (channel == null) return;

    if (
      oldRole.permissions == newRole.permissions &&
      oldRole.name == newRole.name &&
      oldRole.hexColor == newRole.hexColor
    ) return
    var autoEmb = new Discord.RichEmbed()
      .setTitle('Logs | Role edited!')
      .setDescription(
        `~~${oldRole.name}~~  ->  ${newRole}\n**Color**:\n~~${
          oldRole.hexColor
        }~~ -> **${newRole.hexColor}**`
      )
      .addField(
        'Permissions',
        `[${oldRole.permissions}](https:\/\/discordapi.com/permissions.html#${
          oldRole.permissions
        }) -> [${
          newRole.permissions
        }](https://discordapi.com/permissions.html#${newRole.permissions})`
      )
      .setColor(newRole.color)
      .setFooter(`Role ID: ${newRole.id}`)
      .setTimestamp();
    var set = newRole.guild.channels.find(`name`, `${channel}`);
    set.send(autoEmb);
  }
}