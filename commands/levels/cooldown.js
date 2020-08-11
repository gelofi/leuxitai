const Discord = require("discord.js");

module.exports = {
  name: "setcooldown",
  aliases: ["xpcooldown", "cooldown", "cd"],
  description: "Set a cooldown for the XP System",
  run: async (bot, message, args) => {

    const db = bot.db;

    let cd = `cdTime_${message.guild.id}`
    let newCD = args[0];

    if(!newCD) return message.reply("input a new XP cooldown!")
    if(isNaN(parseInt(newCD))) return message.reply("that's not a number!")

    await db.set(cd, parseInt(newCD))
    return message.channel.send(`**XP Cooldown** is now set to \`${newCD}\` !`)

    if(newCD === "reset" || newCD === "delete" || newCD === "remove"){
      await db.delete(cd)
      return message.channel.send("Cooldown deleted successfully. Cooldown is back to 45 seconds.")
    }


  }
}