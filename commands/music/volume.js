const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`❌ | 何も再生されていません`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`🔊 | 現在の音量は ${queue.volume}% \n*変更したいなら **1** から **${maxVol}** の間の数字を入力してください*`);

        if (queue.volume === vol) return message.channel.send(`❌ | 既に音量は ${queue.volume}% です。`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`❌ | **1** から **${maxVol}** の間の数字を入力してください*`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `🔊 | 音量を **${vol}**/**${maxVol}**% に設定しました` : `❌ | エラーが発生しました`);
    },
};