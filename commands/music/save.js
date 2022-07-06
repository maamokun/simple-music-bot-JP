module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ | 何も再生されていません`);

        message.author.send(`:floppy_disk: | ${queue.current.title} - ${queue.current.author} (${queue.current.url}) | ${message.guild.name} より`).then(() => {
            message.channel.send(`✅ | DMに曲の情報を送信しました`);
        }).catch(error => {
            message.channel.send(`:warning: | DMを送信できませんでした`);
        });
    },
};
