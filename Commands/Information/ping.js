const Discord = require("discord.js");
const botsettings = require("../../botsettings.json");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
    .setTitle("This displays API latency ping")
    .setColor(0x2f3136)
    .setTimestamp()
    .addField(
      "This is an open source bot",
      `The API latency ping is: ${bot.ws.ping}`
    );
  await message.channel.send(embed);
};

module.exports.config = {
  name: "ping",
  description: "displays the bot ping into an embed",
  usage: "(thebotsprefix)ping",
  aliases: [""],
};
