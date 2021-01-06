const Discord = require("discord.js");
const bot = new Discord.Client();
const botsetings = require("./botsettings.json");

bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

const fs = require("fs");

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

const events = async () => {
  fs.readdir("./Events", (err, files) => {
    if (err) {
      return console.error(err);
    }
    files.forEach((file) => {
      if (!file.endsWith(".js")) return;
      const event = require(`./Events/${file}`);
      const eventName = file.split(".")[0];
      bot.on(eventName, event.bind(null, bot));
    });
  });
};

events();
setup();
bot.login(botsetings.token);
