const Discord = require("discord.js")
const botsettings = require("../../botsettings.json")

module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setTitle("This displays API latency ping")
    .setColor(0x2f3136)
    .setTimestamp()
    .setDescription("This is an open source bot")
    .setDescription(`The API latency ping is: ${bot.ws.ping}`)
    message.channel.send(embed)
}

module.exports.config = {
    name: "ping",
    description: "displays the bot ping into an embed",
    usage: "(thebotsprefix)ping",
    aliases: []
}