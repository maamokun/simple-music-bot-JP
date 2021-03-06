player.on('error', (queue, error) => {
    console.log(`Error emitted from the queue ${error.message}`);
});

player.on('connectionError', (queue, error) => {
    console.log(`Error emitted from the connection ${error.message}`);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`๐ง | **${queue.connection.channel.name}** ใง ${track.title} ใฎๅ็ใ้ๅงใใพใใ`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`โ | ${track.title} ใๅ็ๅพใกใซ่ฟฝๅ ใใพใใ`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('โ | ๆๅๅๆญใใใใใใๅ็ๅพใกใชในใใใฏใชใขใใพใใ');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('โ | ่ชฐใใใชใใชใฃใใใใๅ็ใๅๆญขใใพใ');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('โ | ๅ็ๅพใกใฎๆฒใฎๅ็ใ็ตไบใใพใใ');
});