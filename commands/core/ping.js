const ms = require('ms');

module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.channel.send(`現在のサーバー応答速度は **${client.ws.ping}ms** です 🛰️`);
    },
};