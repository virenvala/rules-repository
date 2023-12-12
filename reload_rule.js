const { execSync } = require('child_process');
const fs = require('fs');

// arguments passed to this program
var args = process.argv.slice(2);
//console.log(args[0])

// primary
try {
    let sts = execSync(`ssh 
                -o StrictHostKeyChecking=no 
                -o UserKnownHostsFile=/dev/null 
                -i ${process.env.TEST_PRIVATE_KEY} 
                netcool@10.23.97.129 
                | 
                mpstatus`).toString();
    console.log(sts);
} catch(err) {
    console.log(err.status);
}

