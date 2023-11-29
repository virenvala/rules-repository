const { exec } = require('child_process');
const fs = require('fs');

var args = process.argv.slice(2);
console.log(args[0])

const allFileContents = fs.readFileSync('diff.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    console.log(`Line from file: ${line}`);
});

let git_diff = '';
exec(`ps`, (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // the *entire* stdout and stderr (buffered)
        //console.log(`${stdout}`);
        git_diff = stdout;
        //console.log(`stderr: ${stderr}`);
        console.log(git_diff);
        console.log(process.env.TEST_CREDS_PSW == 'test1234')
        console.log(process.env.TEST_PRIVATE_KEY_FILE)
        fs.writeFileSync("/tmp/test", process.env.TEST_PRIVATE_KEY_FILE);
        fs.readFile("/tmp/test", (err, data) => {
            if (err) {
                console.error(err);
                return;
            }
            console.log(data.toString());
        });
    }
});
console.log(git_diff);