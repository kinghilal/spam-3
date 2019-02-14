const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("545738929702436864")
setInterval(function() {
channel.send(`$give all 1`);
channel.send(`$give all 2`);
channel.send(`$give all 3`);
channel.send(`$give all 4`);
channel.send(`$give all 5`);
channel.send(`$give all 6`);
channel.send(`$give all 7`);
channel.send(`$give all 8`);
channel.send(`$give all 9`);
channel.send(`$give all 10`);
}, 1)
})

client.login(process.env.BOT_TOKEN);
