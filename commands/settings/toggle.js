const Discord = require('discord.js')

module.exports = {
    name: 'toggle',
    aliases: ["tg"],
    description: "Changes the prefix of the bot",
    run: async (bot, message, args) => {
  
    const db = bot.db

    let channel;
  
    let channels = await db.fetch(`channel_${message.guild.id}`)
    
    if(channels == undefined){
      channel = message.channel.name;
    } else {
      channel = channels;
    }

    let togglexp;
  
    let togglesxp = await db.fetch(`togglexp_${message.guild.id}`)
    
    if(togglesxp == undefined){
      togglexp = 'off';
      //return message.channel.send("That command is not enabled!");
    } else {
      togglexp = togglesxp;
    }
      
    let eco;
  
    let econ = await db.fetch(`eco_${message.guild.id}`)
    
    if(econ == undefined){
      eco = 'off';
      //return message.channel.send("That command is not enabled!");
    } else {
      eco = econ;
    }
      
      
    if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply("you don't have enough permissions to toggle commands!");
        if(!args[0]) return message.reply("please specify a command to turn on/off!\nDo `l.help toggle` for more info.");
        
        if(args[0] === "xp"){
        if(!args[1]) return message.reply("toggle what? On or Off?")
        if(args[1].length > 3) return message.reply(`really? Setting it to ${args[1]}?`)
        if(args[1] !== 'on' && args[1] !== 'off') return message.reply("wat? Toggle it ON, or OFF !")
        await db.set(`togglexp_${message.guild.id}`, args[1])
        /*Version 9 - var embedp = new Discord.RichEmbed()
        .setDescription(`Toggled XP System \`${args[1]}\` successfully.`)
        .setColor("#3654ff")
        message.channel.send(embedp)*/
        message.channel.send(`Toggled the **Level System**  \`${args[1]}\`  successfully.`)
          
          var log = message.guild.channels.find(`name`, `${channel}`)
          var embed = new Discord.RichEmbed()
          .setAuthor(`Logs | Toggle`, message.guild.iconURL)
          .setDescription(`${message.author.tag} turned ${args[1]} the **Level System**.`)
          .setFooter(`Author ID: ${message.author.id}`)
          .setTimestamp()
          .setColor("#7289da")
          log.send(embed)
  //end of XP
        }
        
        if(args[0] === "eco"){
        if(!args[1]) return message.reply("toggle what? On or Off?")
        if(args[1].length > 3) return message.reply(`really? Setting it to ${args[1]}?`)
        if(args[1] !== 'on' && args[1] !== 'off') return message.reply("wat? Toggle it ON, or OFF !")
        await db.set(`eco_${message.guild.id}`, args[1])
        
        message.channel.send(`Toggled the **Economy System**  \`${args[1]}\`  successfully.`)
          
          var log = message.guild.channels.find(`name`, `${channel}`)
          var embed = new Discord.RichEmbed()
          .setAuthor(`Logs | Toggle`, message.guild.iconURL)
          .setDescription(`${message.author.tag} turned ${args[1]} the **Economy System**.`)
          .setFooter(`Author ID: ${message.author.id}`)
          .setTimestamp()
          .setColor("#7289da")
          log.send(embed)
  //end of ECO
        }

      if(args[0] === "nospam" || args[0] === "antispam"){
        if(!args[1]) return message.reply("toggle what? On or Off?")
        if(args[1].length > 3) return message.reply(`really? Setting it to ${args[1]}?`)
        if(args[1] !== 'on' && args[1] !== 'off') return message.reply("wat? Toggle it ON, or OFF !")
        await db.set(`antispam_${message.guild.id}`, args[1])
        
        message.channel.send(`Toggled the **Anti-spam System**  \`${args[1]}\`  successfully.`)
          
          var log = message.guild.channels.find(`name`, `${channel}`)
          var embed = new Discord.RichEmbed()
          .setAuthor(`Logs | Toggle`, message.guild.iconURL)
          .setDescription(`${message.author.tag} turned ${args[1]} the **Anti-spam System**.`)
          .setFooter(`Author ID: ${message.author.id}`)
          .setTimestamp()
          .setColor("#7289da")
          log.send(embed)
  //end of NOSPAM
        }
      
      if(args[0] === "imagecard" || args[0] === "imgcard"){
        if(!args[1]) return message.reply("toggle what? On or Off?")
        if(args[1].length > 3) return message.reply(`really? Setting it to ${args[1]}?`)
        if(args[1] !== 'on' && args[1] !== 'off') return message.reply("wat? Toggle it ON, or OFF !")
        await db.set(`rank_${message.guild.id}`, args[1])
        
        message.channel.send(`Toggled the **Image Cards**  \`${args[1]}\` for **Level System** successfully.`)
          
          var log = message.guild.channels.find(`name`, `${channel}`)
          var embed = new Discord.RichEmbed()
          .setAuthor(`Logs | Toggle`, message.guild.iconURL)
          .setDescription(`${message.author.tag} turned ${args[1]} the **Image Cards** for the **Level System**.`)
          .setFooter(`Author ID: ${message.author.id}`)
          .setTimestamp()
          .setColor("#7289da")
          log.send(embed)
  //end of IMGCARD
        }

       if(args[0] === "lvlmsg" || args[0] === "lvlupmsg"){
        if(!args[1]) return message.reply("toggle what? On or Off?")
        if(args[1].length > 3) return message.reply(`really? Setting it to ${args[1]}?`)
        if(args[1] !== 'on' && args[1] !== 'off') return message.reply("wat? Toggle it ON, or OFF !")
        await db.set(`lvlupmsg_${message.guild.id}`, args[1])
        
        message.channel.send(`Toggled the **Level Up messages**  \`${args[1]}\` for **Level System** successfully.`)
          
          var log = message.guild.channels.find(`name`, `${channel}`)
          var embed = new Discord.RichEmbed()
          .setAuthor(`Logs | Toggle`, message.guild.iconURL)
          .setDescription(`${message.author.tag} turned ${args[1]} the **Level Up messages** for the **Level System**.`)
          .setFooter(`Author ID: ${message.author.id}`)
          .setTimestamp()
          .setColor("#7289da")
          log.send(embed)
  //end of LVLMSG
        }

      
    }
}