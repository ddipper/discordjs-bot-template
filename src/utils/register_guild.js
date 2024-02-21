const { REST, Routes } = require('discord.js')
require('dotenv').config()

module.exports = async (discord, commands) =>
{
   if(!commands || commands.length == 0) { console.log("No commands to register"); return; }

   const rest = new REST().setToken(process.env.TOKEN);

   try {
      console.log(`Started refreshing ${commands.length} guild (/) commands.`);

      const data = await rest.put(
         Routes.applicationGuildCommands(discord.user.id, process.env.GUILD_ID),
         { body: commands },
   );
   console.log(`Successfully reloaded ${data.length} guild (/) commands.`);
   } catch (error) {
      console.error(error);
   }
}