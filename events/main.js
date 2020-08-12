const talkedRecently = new Set();
const Discord = require("discord.js")
module.exports = {
  event: "message",
  emitter: "on",
  run: async (message, bot) => {

	  let prefix = await bot.db.fetch(`prefix_${message.guild.id}`);
	  if (prefix == null) prefix = "l.";

    if (message.content.startsWith(`<@698529160938782720>`)) {
      message.channel.send(`My prefix here is \`${prefix}\`\nChange my prefix using \`${prefix}setprefix\`.`);
    }

    //Fixes the prefix bug
	  if (!message.content.startsWith(prefix)) return;
    if (talkedRecently.has(message.author.id)) return;
	  talkedRecently.add(message.author.id);
	  setTimeout(() => {
	  	// Removes the user from the set after 0.8 seconds
		  talkedRecently.delete(message.author.id);
	  }, 800);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    // If message.member is uncached, cache it.
	  if (!message.member) message.member = await message.guild.fetchMember(message);
    const cmd = args.shift().toLowerCase();
    if (cmd.length === 0) return;
    // Get the command
    let command = bot.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = bot.commands.get(bot.aliases.get(cmd));
    // If a command is finally found, run the command
    if (command) command.run(bot, message, args, Discord);
  }
}