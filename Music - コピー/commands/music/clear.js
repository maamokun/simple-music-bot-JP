module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ | 何も再生されていません`);

        if (!queue.tracks[0]) return message.channel.send(`❌ | 再生待ちの曲がありません`);

        await queue.clear();

        message.channel.send(`🗑️ | 再生待ちリストをクリアしました`);
    },
};