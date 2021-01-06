const Discord = require("discord.js")
const botsettings = require("../botsettings.json")

module.exports = bot => {
    console.log("This bot is ready to be used")

    const activity = [
        `${bot.guilds.cache.size} servers`,
        `${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} users`,
        `${bot.channels.cache.size} channels`,
        `Have fun using my bot!`
    ]

    let i = 0;
    setInterval(() => bot.user.setActivity(`${activity[i++ % activity.length]}`,  { type: "WATCHING" }), 10000)
}