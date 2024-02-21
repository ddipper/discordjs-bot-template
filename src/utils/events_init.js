const fs = require('node:fs')
const path = require('node:path')
const events_path = __dirname + './../events/';

module.exports = (discord) => {
   const eventFiles = fs.readdirSync(events_path).filter(file => file.endsWith('.js'));
   for (const file of eventFiles) {
      const filePath = path.join(events_path, file);
      const event = require(filePath);
      if (event.once) {
         discord.once(event.name, (...args) => event.execute(...args));
      } else {
         discord.on(event.name, (...args) => event.execute(...args));
      }
  }
}