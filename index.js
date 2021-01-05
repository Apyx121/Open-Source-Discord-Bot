const Discord = require("discord.js");
const bot = new Discord.Client();
const botsetings = require("./botsettings.json");

bot.on("ready", () => {
  console.log("This bot is ready to be used");
});

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const fs = require("fs");
const prefix = botsetings.prefix;

const commandsFolder = fs.readdirSync("./Commands").filter((folder) => folder);

const setup = async () => {
  for (const folder of commandsFolder) {
    const commandsFile = fs
      .readdirSync(`./Commands/${folder}`)
      .filter((file) => file.endsWith(".js"));

    for (const file of commandsFile) {
      const command = require(`./Commands/${folder}/${file}`);

      bot.commands.set(command.config.name, command);
      command.config.aliases.forEach((alias) => {
        bot.aliases.set(alias, command.config.name);
      });
    }
  }
};

bot.on("message", async (message) => {
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
});

setup();
bot.login(botsetings.token);
