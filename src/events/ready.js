const { Events, ActivityType } = require('discord.js');

const time = new Date();

module.exports = {
	name: Events.ClientReady,
	once: true,
	execute(client) {
		console.log(`${time.getHours().toString().padStart(2, '0')}:${time.getMinutes().toString().padStart(2, '0')}:${time.getSeconds().toString().padStart(2, '0')} Ready! Logged in as ${client.user.tag}`);

		client.user.setPresence({
			activities: [{ name: `ddipperq`, type: ActivityType.Listening }],
		 });
	},
};
