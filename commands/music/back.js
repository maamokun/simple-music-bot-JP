module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ | 何も再生されていません`);

        if (!queue.previousTracks[1]) return message.channel.send(`❌| 前に再生されてた曲がありません`);

        await queue.back();

        message.channel.send(`✅ | ひとつ前のトラックを再生します。`);
    },
};