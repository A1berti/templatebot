exports.run = (bot, message, args) => {
  const template = args.join(' ');
  if (template === 'Mostrar quantidade de membros no tópico de um canal automaticamente' || template === 'mqdmntduca') {
    message.channel.send('**Mostrar quantidade de membros no tópico de um canal automaticamente**\n\nColoque no evento `ready.js`\n```const canal = bot.channels.cache.get(\'id-do-canal\');\nconst guilda = bot.guilds.cache.get(\'id-da-guilda\');\nconst quantidade = guild.memberCount;\n  i = 0;\nsetInterval( () => ch.setTopic(`Atualmente temos ` + quantidade + \' membros!\'), {\n    }, 180 * 1000);```\n**• Esse evento troca o tópico do canal há cada 180 segundos**\n**• Esse evento apenas funciona na versão `12.0` do discord.js**\n**• Esse evento apenas funciona na versão `12.0` do Node.js**');
  }
}