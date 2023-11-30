const { exec } = require('child_process');

exec(`ps -ef | grep jenkins`, (err, stdout, stderr) => {
    if (err) {
        //some err occurred
        console.error(err)
    } else {
        // output
        console.log(stdout);
    }
});