module.exports = {
  event: "ready",
  emitter: "on",
  run: async (bot) => {
	  console.log(`${bot.user.username} is now online!`);
	  bot.user.setActivity(`${bot.guilds.size} servers | l.help`, { type: 'WATCHING' }).catch(console.error);
  }
}