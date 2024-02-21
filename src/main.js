const { Client } = require('discord.js')
const commands_init = require('./utils/commands_init')
const events_init = require ('./utils/events_init')
require('dotenv').config()

const client = new Client({ intents: 131071 });

commands_init(client);
events_init(client);

client.login(`${process.env.TOKEN}`);