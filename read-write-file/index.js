// using path.join() better option than directly specifying the file name since different systems can have different way of specifying the file names

const fsPromises = require('fs').promises;
const path = require('path');

async function fileOps () {
    try {
        // read
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log(data);
        // delete
        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'));
        // write
        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);
        // append
        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\nAnd how are you?');
        // rename
        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseComplete.txt'), 'utf8');
        console.log(newData);
    } catch (err) {
        console.log(err);
    }
}

fileOps();

// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'How are you?', 'utf8', (err) => {
//     if (err) throw err;
//     console.log('Write');

//     fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\nI hope you are fine.', (err) => {
//         if (err) throw err;
//         console.log('Append');

//         fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'reply2.txt'), (err) => {
//             if (err) throw err;
//             console.log('Rename');
//         });
//     });
// });


process.on('uncaughtException', err => {
    console.log(`There was an uncaught error: ${err}`);
    process.exit(1);
});