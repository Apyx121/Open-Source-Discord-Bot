const Discord = require("discord.js");
const botsettings = require("../../botsettings.json");
const got = require("got");

module.exports.run = async (bot, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setAuthor(`Requested by ${message.author.tag}`, message.author.displayAvatarURL());
  got("https://www.reddit.com/r/memes/random/.json").then(async (response) => {
    const content = JSON.parse(response.body);
    const permalink = content[0].data.children[0].data.permalink;
    const memeUrl = `https://reddit.com${permalink}`;
    const memeImage = content[0].data.children[0].data.url;
    const memeTitle = content[0].data.children[0].data.title;
    const memeUpvotes = content[0].data.children[0].data.ups;
    const memeDownvotes = content[0].data.children[0].data.downs;
    const memeNumComments = content[0].data.children[0].data.num_comments;
    embed.setTitle(`${memeTitle}`);
    embed.setURL(`${memeUrl}`);
    embed.setImage(memeImage);
    embed.setColor(0x2f3136);
    embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`);
    await message.channel.send(embed);
  });
};

module.exports.config = {
  name: "meme",
  description: "brings you a meme from reddit",
  usage: "(botprefixhere)meme",
  aliases: [""],
};
