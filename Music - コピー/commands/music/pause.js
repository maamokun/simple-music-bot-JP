module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`❌ | 何も再生されていません`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `✅ | ${queue.current.title} を一時停止しました` : `❌ | エラーが発生しました`);
    },
};