const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'How are you?', 'utf8', (err) => {
    if (err) throw err;
    console.log('Write');

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nI hope you are fine.', (err) => {
        if (err) throw err;
        console.log('Append');

        fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'reply2.txt'), (err) => {
            if (err) throw err;
            console.log('Rename');
        });
    });
});


process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
});