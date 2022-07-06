module.exports = (client, int) => {
    if (!int.isButton()) return;

    const queue = player.getQueue(int.guildId);

    switch (int.customId) {
        case 'saveTrack': {
            if (!queue || !queue.playing) return int.reply({ content: `❌ | 音楽が再生されていません！`, ephemeral: true, components: [] });

            int.member.send(`:floppy_disk: | ${queue.current.title} - ${queue.current.author} (${queue.current.url}) | ${int.member.guild.name} より`).then(() => {
                return int.reply({ content: `✅ | DMに曲の情報を送信しました`, ephemeral: true, components: [] });
            }).catch(error => {
                return int.reply({ content: `:warning: | DMを送信できませんでした`, ephemeral: true, components: [] });
            });
        }
    }
};