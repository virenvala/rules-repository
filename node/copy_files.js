const { execSync } = require('child_process');
const fs = require('fs');

// arguments passed to this program
var args = process.argv.slice(2);
//console.log(args[0])

let instances_to_be_processed = [];
const updated_files = fs.readFileSync('diff.txt', 'utf-8');
updated_files.split(/\r?\n/).forEach(line => {
    console.log(`File: ${line}`);
    if (line.endsWith('.rules') || line.endsWith('.lookup')) {
        // either .rules or .lookup files updated
        // find the process name from the parent folder
        // assuming the rules/lookup files are placed inside
        // 'probe_instances' dir

        let instance_name = line.replace('probe_instances/', '');
        if (instance_name) {
            instance_name = instance_name.substring(0, instance_name.indexOf('/'));
            console.log(instance_name);
            instances_to_be_processed.push(instance_name);

            // find instance details based on instance_name
            // from json
            // TO DO:

            // for json object found, do scp first on primary server
            // and then on backup server

            // primary
            try {
                let sts = execSync(`scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i ${process.env.PRIVATE_KEY} ${line} ${user}@${primary_server}:${rules_location}`).toString();
                console.log(sts);
            } catch(err) {
                console.log(err.status);
            }

            // backup
            try {
                let scp = execSync(`scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i ${process.env.PRIVATE_KEY} ${line} ${user}@${backup_server}:${rules_location}`).toString();
                console.log(scp);
            } catch(err) {
                console.log(err.status);
            }
        }
    }
});

// if instances processed, write to file
if (instances_to_be_processed.length > 0) {
    fs.writeFileSync('instances_to_be_processed.txt', instances_to_be_processed.join('\n'));
}