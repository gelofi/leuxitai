const Discord = require("discord.js");
module.exports = {
  event: "emojiDelete",
  emitter: "on",
  run: async (emoji, bot) => {

    let channel = await bot.db.fetch(`channel_${emoji.guild.id}`);
	  if (channel == null) return;

	  var autoEmb = new Discord.RichEmbed()
		  .setTitle('Logs | Emoji deleted!')
		  .setDescription(`${emoji} **${emoji.name}**`)
		  .setColor('#ff3636')
		  .setFooter(`Emoji ID: ${emoji.id}`)
		  .setTimestamp();
	  var set = emoji.guild.channels.find(`name`, `${channel}`);
	  set.send(autoEmb);
    
  }
}