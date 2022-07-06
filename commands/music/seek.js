const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ | 何も再生されていません`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`❌ | 現在再生中の曲の長さを超える時間を送ろうとしています。\n*使用例: **5s, 10s, 1m**`);

        await queue.seek(timeToMS);

        message.channel.send(`✅ | 進行状況を **${ms(timeToMS, { long: true })}** に進みました。`);
    },
};