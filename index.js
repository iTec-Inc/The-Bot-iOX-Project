// require the discord.js module
const Discord = require('discord.js');

// create the Discord client
const client = new Discord.Client();

// When the app is ready it will write out Ready using this
client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content === 'Hello') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('hello to you too.');
	}
});

// Replace the value between the quotes with your token
client.login('your-token-goes-here');