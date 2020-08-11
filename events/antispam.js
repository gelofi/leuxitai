const Discord = require("discord.js");
module.exports = {
  event: "message",
  emitter: "on",
  run: async (message, bot) => {

    const usersMap = new Map();
    const LIMIT = 5; const TIME = 7; const DIFF = 3000;

    const db = bot.db
    //Fixes the bot bug
    if (message.author.bot) return;
    if (message.guild) {
      //Fixes the bot bug
      if (message.author.bot) return;

      let msg = await db.fetch(`msgCounter_${message.guild.id}`);
      if (msg == null) msg = LIMIT;

      let msgSec = await db.fetch(`msgSec_${message.guild.id}`);
      if (msgSec == null) msgSec === TIME;

      if (usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference =
          message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);
        if (difference > DIFF) {
          clearTimeout(timer);
          console.log('Cleared timeout- Antispam is operational.');
          userData.msgCount = 1;
          userData.lastMessage = message;
          userData.timer = setTimeout(() => {
            usersMap.delete(message.author.id);
          }, msgSec * 1000);
          usersMap.set(message.author.id, userData);
        } else {
          ++msgCount;
          if (parseInt(msgCount) === msg) {
            let antispam = await db.fetch(`antispam_${message.guild.id}`);
            if (antispam == null) antispam = 'off';
            if (antispam !== 'on') return;

            let channel = await db.fetch(`channel_${message.guild.id}`);

            var log = new Discord.RichEmbed()
              .setTitle('Logs | Spamming!')
              .setDescription(
                `${message.author} tried to spam in ${
                  message.channel
                }.\n\n**Leuxitai** took care of it and purged **${msg}** messages.`
              )
              .setColor('#1a40a1')
              .setFooter(`Spammer ID: ${message.author.id}`)
              .setTimestamp();
            var set = message.guild.channels.find(`name`, `${channel}`);
            set.send(log);
            message.channel.bulkDelete(msg);
            message.reply("please don't spam!");
          } else {
            userData.msgCount = msgCount;
            usersMap.set(message.author.id, userData);
          }
        }
      } else {
        let fn = setTimeout(() => {
          usersMap.delete(message.author.id);
        }, msgSec * 1000);
        usersMap.set(message.author.id, {
          msgCount: 1,
          lastMessage: message,
          timer: fn
        });
      }
      let swearWords = await db.fetch(`bannedwords_${message.guild.id}`);
		  if (swearWords == null) swearWords = ['‽'];
		  if (swearWords.some(w => message.content.toLowerCase().includes(w))) {
			  message.delete();
			  message.reply('watch your mouth! You said a banned word!');
		  }
    }
  }
}