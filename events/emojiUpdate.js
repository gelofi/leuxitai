const Discord = require("discord.js");
module.exports = {
  event: "emojiUpdate",
  emitter: "on",
  run: async (oldEmoji, newEmoji, bot) => {

    let channel = await bot.db.fetch(`channel_${newEmoji.guild.id}`);
	  if (channel == null) return;

	  var autoEmb = new Discord.RichEmbed()
		  .setTitle('Logs | Emoji updated!')
		  .setDescription(
	  		`${newEmoji} ~~**${oldEmoji.name}**~~ -> **${newEmoji.name}**`
		  )
		  .setColor('#3654ff')
		  .setFooter(`Emoji ID: ${newEmoji.id}`)
		  .setTimestamp();
	  var set = newEmoji.guild.channels.find(`name`, `${channel}`);
	  set.send(autoEmb);

  }
}