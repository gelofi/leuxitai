const Discord = require("discord.js");

module.exports = {
  name: "setcolor",
  aliases: ["color", "colour", "rcc"],
  description: "Set a custom color for the XP System",
  run: async (bot, message, args) => {

    const db = bot.db;

    let cd = `rccolor_${message.guild.id}_${message.author.id}`
    let newCD = args[0];

    if(!newCD) return message.reply("input a new hex color code! e.g. #1c1c1c")
    
    if(newCD.length != 7 && !newCD.startsWith("#")) return message.reply("that's an invalid hex color!")
    
    await db.set(cd, newCD)
    return message.reply(`your rank card color is now set to \`${newCD}\` !`)

    if(newCD === "reset" || newCD === "delete" || newCD === "remove"){
      await db.delete(cd)
      return message.channel.send("Successfully reset your rank card color.")
    }


  }
}