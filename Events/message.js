const Discord = require("discord.js");
const botsettings = require("../botsettings.json");

module.exports = async (bot, message) => {
  const prefix = botsettings.prefix;

  if (message.author.bot || message.channel.type === "dm") return;
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  if (!message.member) {
    member.member = await message.guild.fetchMember(message);
  }

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length == 0) return;

  const command = bot.commands.get(cmd);
  if (!command) {
    command = bot.commands.get(bot.aliases.get(cmd));
  }

  if (command) {
    command.run(bot, message, args);
  }
};
