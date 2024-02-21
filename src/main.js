const { Client, GatewayIntentBits, Events } = require('discord.js')
require('dotenv').config()
const commands_init = require('./utils/commands_init')
const events_init = require ('./utils/events_init')
const register_guild = require('./utils/register_guild')
const register_app = require('./utils/register_app')

const client = new Client({ 
   intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.GuildMembers ] 
   });

commands_init(client);
events_init(client);

client.login(`${process.env.TOKEN}`);

client.once(Events.ClientReady, (client)=>{
   register_guild(client, commands_init(client)); //deploy commands to guild (paste guild id to .env)
   // register_app(client, commands_init(client)); //register commands to app (global)
})