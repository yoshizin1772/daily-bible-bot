const { EmbedBuilder } = require('discord.js')
const { Versiculo } = require("../services/versiculos");
const cron = require("node-cron");


module.exports = {
    name: "clientReady",
    once: true,

    async execute(client) {

        console.log(`
                ██████╗ ███████╗██╗  ██╗
                ██╔══██╗╚══███╔╝██║ ██╔╝
                ██████╔╝  ███╔╝ █████╔╝
                ██╔══██╗ ███╔╝  ██╔═██╗
                ██║  ██║███████╗██║  ██╗
                ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝`)

        console.log("✔ Bot iniciado com sucesso");

    cron.schedule("00 08 * * *", async () => {
        const data = await Versiculo()
        console.log('✔ versiculo armazenado e sendo enviado')

        const embed = new EmbedBuilder()
            .setTitle(`📖versiculo do dia`)
            .setDescription(`
                ${data.cap}
                ${data.verse}
            `)
            .setColor("Red")

        const channel = await client.channels.fetch(
            process.env.CHANNEL_ID
        );

        await channel.send({
            embeds: [embed]
        });

            console.log('✔ versiculo enviado com sucesso')

        });
    }
};
