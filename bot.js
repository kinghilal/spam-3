const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("545738929702436864")
setInterval(function() {
channel.send(`$give all 1 , $give all 2 , $give all 3 , $give all 4 , $give all 5 , $give all 6 , $give all 7 , $give all 8 , $give all 9 , $give all 10`);
}, 1)
})

client.login(process.env.BOT_TOKEN);
