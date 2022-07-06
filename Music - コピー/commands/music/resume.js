module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`❌ | 何も再生されていません`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `✅ | ${queue.current.title} の再生が再開されました` : `❌ | エラーが発生しました`);
    },
};