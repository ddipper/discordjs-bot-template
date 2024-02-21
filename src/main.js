import { Client } from 'discord.js';
import commands_init from './utils/commands_init'
import events_init from './utils/events_init'
const { token } = require('./config.json');

const client = new Client({ intents: 131071 });

client.commands = new Collection();


client.login(token);