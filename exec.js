const { execSync } = require('child_process');

try {
    let sts = execSync(`ps -ef | grep jenkins`);
    console.log(sts);
} catch(err) {
    console.log(err.status);
}