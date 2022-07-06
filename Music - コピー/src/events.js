player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`🎧 | **${queue.connection.channel.name}** で ${track.title} の再生を開始しました`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`✅ | ${track.title} を再生待ちに追加しました`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('❌ | 手動切断されたため、再生待ちリストをクリアしました');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('❌ | 誰もいなくなったため、再生を停止します');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('✅ | 再生待ちの曲の再生が終了しました');
});