const Discord = require("discord.js");
// Create a new client instance
const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

// When the client is ready, run this code (only once)
client.once("ready", () => {
  console.log("Ready! Halileleoeleo");
});

client.on("messageCreate", (message) => {
  if (message.content === "kamu ganteng?") {
    message.reply("iyah");
  } else if (message.content === "info") {
    message.channel.send("saya dingin.");
  } else if (message.content === "sok keras lu dek") {
    message.channel.send("apa iyah ?");
  }
});
client.login("OTUzMzI2NzMxNDM4MTk4ODI0.YjC8tA.YURi5SaS11RnCXiCDgzzsLqreRk");
