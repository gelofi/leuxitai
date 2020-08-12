module.exports = {
  event: "guildDelete",
  emitter: "on",
  run: async (guild, bot) => {
	  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
	  bot.user.setActivity(`${bot.guilds.size} servers | l.help`, { type: 'WATCHING' }).catch(console.error);
  } 
}