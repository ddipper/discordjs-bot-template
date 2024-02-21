const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription('123'),
	async execute(interaction) {
        interaction.reply({content:`World!`,ephemeral :true})
    }
}