module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ | 何も再生されていません`);

        if (!queue.tracks[0]) return message.channel.send(`❌ | 再生待ちの曲がありません`);

        await queue.shuffle();

        return message.channel.send(`✅ | **${queue.tracks.length}**曲をシャッフルしました`);
    },
};