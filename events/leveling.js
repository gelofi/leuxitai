const Discord = require("discord.js");

module.exports = {
  event: "message",
  emitter: "on",
  run: async (message, bot) => {

    let db = bot.db;

    // Leveling
	  if (message.guild) {
		  if (message.author.bot) return;

		  xp(message);

		  let L5 = await db.fetch(`level5_${message.guild.id}`);
		  let L10 = await db.fetch(`level10_${message.guild.id}`);
		  let L15 = await db.fetch(`level15_${message.guild.id}`);
		  let L20 = await db.fetch(`level20_${message.guild.id}`);
		  let L25 = await db.fetch(`level25_${message.guild.id}`);
		  let L30 = await db.fetch(`level30_${message.guild.id}`);
		  let L35 = await db.fetch(`level35_${message.guild.id}`);
		  let L40 = await db.fetch(`level40_${message.guild.id}`);
		  let L45 = await db.fetch(`level45_${message.guild.id}`);
		  let L50 = await db.fetch(`level50_${message.guild.id}`);
		  let L55 = await db.fetch(`level55_${message.guild.id}`);
		  let L60 = await db.fetch(`level60_${message.guild.id}`);
		  let L70 = await db.fetch(`level70_${message.guild.id}`);
		  let L80 = await db.fetch(`level80_${message.guild.id}`);
		  let L90 = await db.fetch(`level90_${message.guild.id}`);
		  let L100 = await db.fetch(`level100_${message.guild.id}`);

		  //Roles Level
		  let l5 = message.guild.roles.find(role => role.name === `${L5}`);
		  let l10 = message.guild.roles.find(role => role.name === `${L10}`);
		  let l15 = message.guild.roles.find(role => role.name === `${L15}`);
		  let l20 = message.guild.roles.find(role => role.name === `${L20}`);
		  let l25 = message.guild.roles.find(role => role.name === `${L25}`);
		  let l30 = message.guild.roles.find(role => role.name === `${L30}`);
		  let l35 = message.guild.roles.find(role => role.name === `${L35}`);
		  let l40 = message.guild.roles.find(role => role.name === `${L40}`);
		  let l45 = message.guild.roles.find(role => role.name === `${L45}`);
		  let l50 = message.guild.roles.find(role => role.name === `${L50}`);
		  let l55 = message.guild.roles.find(role => role.name === `${L55}`);
      let l60 = message.guild.roles.find(role => role.name === `${L60}`);
      let l70 = message.guild.roles.find(role => role.name === `${L70}`);
      let l80 = message.guild.roles.find(role => role.name === `${L80}`);
      let l90 = message.guild.roles.find(role => role.name === `${L90}`);
      let l100 = message.guild.roles.find(role => role.name === `${L100}`);

      let leveling = bot.dblevels.get(`level_${message.guild.id}_${message.author.id}`);

      switch(leveling){
        case 5: if (l5) { message.member.addRole(l5.id); } break;
        case 10: if (l10) { message.member.addRole(l10.id); } break;
        case 15: if (l15) { message.member.addRole(l15.id); } break;
        case 20: if (l20) { message.member.addRole(l20.id); } break;
        case 25: if (l25) { message.member.addRole(l25.id); } break;
        case 30: if (l30) { message.member.addRole(l30.id); } break;
        case 35: if (l35) { message.member.addRole(l35.id); } break;
        case 40: if (l40) { message.member.addRole(l40.id); } break;
        case 45: if (l45) { message.member.addRole(l45.id); } break;
        case 50: if (l50) { message.member.addRole(l50.id); } break;
        case 55: if (l55) { message.member.addRole(l55.id); } break;
        case 60: if (l60) { message.member.addRole(l60.id); } break;
        case 70: if (l70) { message.member.addRole(l70.id); } break;
        case 80: if (l80) { message.member.addRole(l80.id); } break;
        case 90: if (l90) { message.member.addRole(l90.id); } break;
        case 100: if (l100) { message.member.addRole(l100.id); } break;
      }

    }

  async function xp(message) {
    try {
      let coins = '<:leuxicoin:715493556810416238>';
      let togglexp = await db.fetch(`togglexp_${message.guild.id}`);
      let lvlmsg = await db.fetch(`lvlupmsg_${message.guild.id}`);
      if(lvlmsg == null) lvlmsg = "on"
      if (togglexp == undefined) togglexp = 'off';

      if (togglexp !== 'on') return;
      if (bot.cooldown.has(message.author.id)) return;

      bot.cooldown.add(message.author.id);
      const randomXP = Math.floor(Math.random() * 14) + 1;
      await bot.dblevels.add(`xp_${message.guild.id}_${message.author.id}`, randomXP);
      let level = await bot.dblevels.get(`level_${message.guild.id}_${message.author.id}`);
      let nexp = Math.floor(Math.pow(level / 0.1, 2));
      //let level = Math.floor(0.3 * Math.sqrt(xp));
      let exp =
        (await bot.dblevels.get(`xp_${message.guild.id}_${message.author.id}`)) ||
        bot.dblevels.set(`level_${message.guild.id}_${message.author.id}`, 1);
      if (exp > nexp) {
        if (level == 0) level = 1;
        await bot.dblevels.add(
          `level_${message.guild.id}_${message.author.id}`, 1
        );
        let newLevel = await bot.dblevels.get(
          `level_${message.guild.id}_${message.author.id}`
        );
        await db.add(`money_${message.guild.id}_${message.author.id}`, 200);
        if(lvlmsg === "on"){
          message.reply(
          `you leveled up to ${newLevel}! GG!\n + ${coins} **200** LeuxiCoins to your wallet.`
          );
        }
      }

      let cdTime = await db.fetch(`cdTime_${message.guild.id}`);
      setTimeout(() => {
        bot.cooldown.delete(message.author.id);
      }, cdTime !== null ? cdTime : 45 * 1000);

      } catch (err) {
        console.log("XP Error occured: But this was handled successfully.")
      }
    }
  }
}