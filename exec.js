const { execSync } = require('child_process');

let sts = execSync(`ps -ef | grep jenkins`, (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // output
        console.log(stdout);
    }
});
console.log("Status: " + sts);