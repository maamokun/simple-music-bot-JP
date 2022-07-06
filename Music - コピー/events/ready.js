module.exports = async (client) => {
    console.log(`ログインしました！ ${client.user.username}\n-> ${client.guilds.cache.size} guilds | ${client.users.cache.size} users`);

    client.user.setActivity(client.config.app.playing);
};