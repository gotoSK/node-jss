const fs = require('fs').promises;

const folderPath = './new-folder';

async function createAndRemoveFolder() {
    try {
        try {
            await fs.mkdir(folderPath);
            console.log("Directory Created");
        } catch (err) {
            if (err.code !== 'EEXIST') throw err; // Ignore error if folder already exists
        }

        await fs.rmdir(folderPath);
        console.log("Directory Removed");
    } catch (err) {
        console.error("Error:", err);
    }
}

createAndRemoveFolder();
