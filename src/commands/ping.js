const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription(`Get the bot's ping.`),
	async execute(interaction) {
      interaction.reply(`Latency \`${Date.now() - interaction.createdTimestamp}ms\`\nAPI \`${Math.round(interaction.client.ws.ping)}ms\``);
    }
}