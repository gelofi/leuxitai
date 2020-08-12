module.exports = {
  event: "guildCreate",
  emitter: "on",
  run: async (guild, bot) => {
  	console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
	  bot.user.setActivity(`${bot.guilds.size} servers | l.help`, { type: 'WATCHING' }).catch(console.error);
  }
}