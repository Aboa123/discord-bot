const Discord = require("discord.js");
const config = require("./config.json");
const prefix = "짱냥이 ";

const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
client.on("message", function(message) {
  // message 작성자가 봇이면 그냥 return
  if (message.author.bot) return;
  // message 시작이 prefix가 아니면 return
  if (!message.content.startsWith(prefix)) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(' ');
  const command = args.shift().toLowerCase();
  
  switch (command) {
    case "몇시야":
        let hours = new Date().getHours();
        let minute = new Date().getMinutes();
        let secons = new Date().getSeconds();
        if(hours > 12) {
          hours = `오후 ${hours - 12}`
        }
        message.reply(`${hours}:${minute}:${secons}`);
        break;
    case "sum":
        const numArgs = args.map(x => parseFloat(x));
        console.log(numArgs)
        const sum = numArgs.reduce((counter, x) => counter += x);
        break;
  }
});

client.login(config.BOT_TOKEN);