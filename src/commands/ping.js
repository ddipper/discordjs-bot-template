const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription(`Get the bot's ping.`),
	async execute(interaction) {
		const ping = Math.round(interaction.client.ws.ping);
      interaction.reply(`${ping}ms.`);
		return;
    }
}