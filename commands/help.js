const {prefix} = require('../config.json');

exports.run = (bot, message) => {
  message.channel.send(`Olá, ${message.author.username}!\n\n**Todos os meus comandos:**\n${prefix}help, ${prefix}invite\n\n**Templates (use ${prefix}template):**\nmqdmntduca`);
}
