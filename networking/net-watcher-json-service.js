'use strict';
const fs = require('fs');
const net = require('net');
const filename = process.argv[2];

if (!filename) throw Error('Error: No file specified.');

net.createServer(connection => {
    // Reporting.
    console.log('subscriber connected.');
    connection.write(JSON.stringify({type: 'watching', file: filename}) + '\n\r');

    // Watcher setup.
    const watcher = fs.watch(filename, () => connection.write(JSON.stringify({type: 'changed', timestamp: Date.now()}) + '\n\r'));

    // Cleanup.
    connection.on('close', () => {
        console.log('Subscriber disconnected.');
        watcher.close();
    });
}).listen(60300, () => console.log('Listening for subscribers....'));