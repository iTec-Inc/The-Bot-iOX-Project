// require the discord.js module
const Discord = require('discord.js');

// create the Discord client
const client = new Discord.Client();

// When the app is ready it will write out Ready using this
client.once('ready', () => {
	console.log('BOT-iOX is now ready. Made by PLIXIN INC© 2020, BOT-iOX and its related goods are all owned by PLIXIN INC©. This project is fully open-source and is available at its project page. ');
});

client.on('message', message => {
	if (message.content === 'help') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('This is the BOT-iOX project which helps people make bots, This Project is made by PLIXIN INC, And is available open-source from the project page. ');
        console.log('Bot has said "This is the BOT-iOX project which helps people make bots, This Project is made by PLIXIN INC, And is available open-source from the project page. "');
	}
});

client.on('message', message => {
	if (message.content === 'Hello') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('hello to you too.');
        console.log('Bot has said "hello to you too"');
	}
});

client.on('message', message => {
	if (message.content === 'Hi') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('hello to you too.');
        console.log('Bot has said "hello to you too"');
	}
});

client.on('message', message => {
	if (message.content === 'hi') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('hello to you too.');
        console.log('Bot has said "hello to you too"');
	}
});

client.on('message', message => {
	if (message.content === 'hello') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('hello to you too.');
        console.log('Bot has said "hello to you too"');
	}
});

client.on('message', message => {
	if (message.content === '') {
        // send back "Pong." to the channel the message was sent in
        message.channel.send('.');
        console.log('Bot has said "."');
	}
});

// Replace the value between the quotes with your token
client.login('your-token-goes-here');