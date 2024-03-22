const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hello')
		.setDescription(`Says hello @user.`)
      .addUserOption(option => option.setName('user').setDescription('The user you want to greet.').setRequired(true)),
	async execute(interaction) {
      const target = interaction.options.getMember('user');
      interaction.reply(`Hello ${target}!`);
    }
}