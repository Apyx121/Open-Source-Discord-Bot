const Discord = require("discord.js");
const botsettings = require("../../botsettings.json");

module.exports.run = async (bot, message, args) => {
  await message.channel.send("command in development");
};

module.exports.config = {
  name: "covid",
  usage: "",
  description: "shows the status of covid around the world or in a country",
  aliases: ["corona"],
};
