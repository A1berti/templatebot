exports.run = (bot, message) => {
  message.channel.send(`Olá, ${message.author.username}!\n\nVocê pode me convidar para o seu servidor com o link abaixo:\n**https://discord.com/api/oauth2/authorize?client_id=716459121565499452&permissions=0&scope=bot**`);
    return;
}
