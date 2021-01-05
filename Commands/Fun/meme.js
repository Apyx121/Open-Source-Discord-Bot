const Discord = require("discord.js")
const botsettings = require("../../botsettings.json")

module.exports.run = async (bot, message, args) => {
    message.channel.send("This command is under development")
}

module.exports.config = {
    name: "meme",
    description: "brings you a meme from reddit",
    usage: "(botprefixhere)meme",
    aliases: []
}