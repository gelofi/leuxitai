const Discord = require("discord.js");
const ms = require('ms');

module.exports = {
  event: "guildMemberAdd",
  emitter: "on",
  run: async (member, bot) => {
    const db  = bot.db
    let mem = member.toString();
    let channel = await db.fetch(`channel_${member.guild.id}`);
    if (channel == null) return;

    var autoEmb = new Discord.RichEmbed()
      .setTitle('Logs | New member!')
      .setThumbnail(member.user.displayAvatarURL)
      .setDescription(`${mem} just joined our server!`)
      .setColor('#3654ff')
      .setFooter(`ID: ${member.id}`)
        .setTimestamp();
    var set = member.guild.channels.find(`name`, `${channel}`);
    set.send(autoEmb);

    let timedrole1 = await db.fetch(`timedrole1_${member.guild.id}`);

    let timedrole1time = await db.fetch(`timedrole1time_${member.guild.id}`);
    let tr2 = await db.fetch(`timedrole2_${member.guild.id}`);
    let tr2t = await db.fetch(`timedrole2time_${member.guild.id}`);

    let tr3 = await db.fetch(`timedrole3_${member.guild.id}`);
    let tr3t = await db.fetch(`timedrole3time_${member.guild.id}`);

    let autorole = member.guild.roles.find(r => r.name === `${timedrole1}`);
    let timerole = member.guild.roles.find(r => r.name === `${tr2}`);
    let timedrole = member.guild.roles.find(r => r.name === `${tr3}`);

    if (timedrole1 !== null && tr2 == null) {
      setTimeout(function() {
        member.addRole(autorole);

        var addEmb = new Discord.RichEmbed()
          .setTitle('Logs | Autorole given!')
          .setThumbnail(member.user.displayAvatarURL)
          .setDescription(
            `${mem} gained the role **${timedrole1}** after **${ms(
              timedrole1time
            )}**`
          )
          .setColor('#3654ff')
          .setFooter(`ID: ${member.id}`)
          .setTimestamp();
        var set = member.guild.channels.find(`name`, `${channel}`);
        set.send(addEmb);
      }, timedrole1time);
    }

    if (timedrole1 !== null && tr2 !== null) {
      setTimeout(function() {
        member.addRole(autorole);
        var addEmb = new Discord.RichEmbed()
          .setTitle('Logs | Autorole given!')
          .setThumbnail(member.user.displayAvatarURL)
          .setDescription(
            `${mem} gained the role **${timedrole1}** after **${ms(
              timedrole1time
            )}**`
          )
          .setColor('#3654ff')
          .setFooter(`ID: ${member.id}`)
          .setTimestamp();
        var set = member.guild.channels.find(`name`, `${channel}`);
        set.send(addEmb);
		}, timedrole1time);

      setTimeout(function() {
        member.addRole(timerole);
        var addEmb = new Discord.RichEmbed()
          .setTitle('Logs | Autorole given!')
          .setThumbnail(member.user.displayAvatarURL)
          .setDescription(`${mem} gained the role **${tr2}** after **${ms(tr2t)}**`)
          .setColor('#3654ff')
          .setFooter(`ID: ${member.id}`)
          .setTimestamp();
        var set = member.guild.channels.find(`name`, `${channel}`);
        set.send(addEmb);
      }, tr2t);
    }

    if (timedrole1 !== null && tr2 !== null && tr3 !== null) {
      setTimeout(function() {
        member.addRole(autorole);
        var addEmb = new Discord.RichEmbed()
          .setTitle('Logs | Autorole given!')
          .setThumbnail(member.user.displayAvatarURL)
          .setDescription(
            `${mem} gained the role **${timedrole1}** after **${ms(
              timedrole1time
            )}**`
          )
          .setColor('#3654ff')
          .setFooter(`ID: ${member.id}`)
          .setTimestamp();
        var set = member.guild.channels.find(`name`, `${channel}`);
        set.send(addEmb);
      }, timedrole1time);

      setTimeout(function() {
        member.addRole(timerole);
        var addEmb = new Discord.RichEmbed()
          .setTitle('Logs | Autorole given!')
          .setThumbnail(member.user.displayAvatarURL)
          .setDescription(
            `${mem} gained the role **${tr2}** after **${ms(tr2t)}**`
          )
          .setColor('#3654ff')
          .setFooter(`ID: ${member.id}`)
          .setTimestamp();
        var set = member.guild.channels.find(`name`, `${channel}`);
        set.send(addEmb);
      }, tr2t);

      setTimeout(function() {
        member.addRole(timedrole);
        var addEmb = new Discord.RichEmbed()
          .setTitle('Logs | Autorole given!')
          .setThumbnail(member.user.displayAvatarURL)
          .setDescription(
            `${mem} gained the role **${tr3}** after **${ms(tr3t)}**`
          )
          .setColor('#3654ff')
          .setFooter(`ID: ${member.id}`)
          .setTimestamp();
        var set = member.guild.channels.find(`name`, `${channel}`);
        set.send(addEmb);
      }, tr2t);
    }
  }
}