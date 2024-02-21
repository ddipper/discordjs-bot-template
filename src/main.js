const Client = require('discord.js')
const commands_init = require('./utils/commands_init')
const events_init = require ('./utils/events_init')
const config = require("dotenv")
config({ path: '../env' });

const client = new Client({ intents: 131071 });

commands_init(client);
events_init(client);

client.login(`${process.env.TOKEN}`);