const { execSync } = require('child_process');
const fs = require('fs');

// arguments passed to this program
var args = process.argv.slice(2);
//console.log(args[0])

const allFileContents = fs.readFileSync('instances_to_be_processed.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    console.log(`Line from file: ${line}`);
    // line is the instance name

    // based on instance name, find json object
    // TO DO:

    // for the instance, invoke check syntax script on remote server
    try {
        let sts = execSync(`ssh 
                -o StrictHostKeyChecking=no 
                -o UserKnownHostsFile=/dev/null 
                -i ${process.env.PRIVATE_KEY} 
                | 
                /path/to/syntax/check/script 
                -server ${server}
                ${line}`).toString();
        console.log(sts);
    } catch(err) {
        console.log(err.status);
    }
});