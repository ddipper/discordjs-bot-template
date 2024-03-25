const { SlashCommandBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('button-await')
        .setDescription(`Check button interactions.`),
    async execute(interaction) {
        const button = new ButtonBuilder()
            .setLabel('Button')
            .setCustomId('buttonAwait')
            .setStyle(ButtonStyle.Secondary);

        const response = await interaction.reply({components: [new ActionRowBuilder().addComponents(button)]});

        const collectorFilter = i => i.user.id === interaction.user.id;

        try{
            const confirmation = await response.awaitMessageComponent({time: 60_000});
        } catch {
            await interaction.editReply({content: 'Confirmation not received within 1 minute, cancelling', components: []});
        }

    }
}