const ms = require('ms');
const os = require("os");
const { resolve } = require('path');
const { callbackify } = require('util');

module.exports = {
    name: 'about',
    aliases: ['ping'],
    utilisation: '{prefix}about',

    execute(client, message) {
        message.channel.send(`**サーバー応答速度:** ${client.ws.ping}ms 🛰️ \n**CPUモデル:** ${os.cpus()[0].model} :brain: \n**メモリー使用率:** ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${os.totalmem} MB :desktop:`);
    },
};
