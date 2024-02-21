const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription(`Get the bot's ping.`),
	async execute(interaction) {
      interaction.reply('1');
		const ping = interaction.createdTimestamp - interaction.createdTimestamp;
		interaction.editReply(`Latency \`${ping}ms\`\n API \`${Math.round(interaction.client.ws.ping)}ms\``);
		return;
    }
}