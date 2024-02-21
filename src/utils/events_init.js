import fs from 'node:fs';
const path = __dirname + '/../../events/';

module.exports = (discord) => {
   const eventFiles = fs.readdirSync(path).filter(file => file.endsWith('.js'));
   for (const file of eventFiles) {
      const filePath = path.join(path, file);
      const event = require(filePath);
      if (event.once) {
         discord.once(event.name, (...args) => event.execute(...args));
      } else {
         discord.on(event.name, (...args) => event.execute(...args));
      }
  }
}