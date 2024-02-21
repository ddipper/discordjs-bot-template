const { REST, Routes } = require('discord.js')
require('dotenv').config()

module.exports = async (discord, commands) =>
{
   if(!commands || commands.length == 0) { console.log("No commands to register"); return; }

   const rest = new REST().setToken(process.env.TOKEN);

   try {
      console.log(`Started refreshing ${commands.length} application (/) commands.`);

      const data = await rest.put(
         Routes.applicationCommands(discord.user.id),
         { body: commands },
   );
   console.log(`Successfully reloaded ${data.length} application (/) commands.`);
   } catch (error) {
      console.error(error);
   }
}