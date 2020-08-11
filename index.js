require("./server")()
const { Client, Collection } = require('discord.js');
const bot = new Client({ disableEveryone: true });
const { token, mongodb } = require('./config.js');

// Collections
bot.cooldown = new Set(); bot.playing = new Set();
bot.commands = new Collection(); bot.aliases = new Collection();

// Run the command loader
['command', 'event'].forEach(handler => require(`./handlers/${handler}`)(bot));
//Leuxitai BOT - by Fizx26 - Copyright © 2020 Fizx, FizxCreations.
let db = new (require('quickmongo')).Database(mongodb);
bot.db = db; bot.dblevels = db;
//Leuxitai v16.5

bot.login(token);

