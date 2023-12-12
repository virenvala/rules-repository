const { execSync } = require('child_process');
const fs = require('fs');

const process_names = fs.readFileSync('instances_to_be_processed.txt', 'utf-8');
process_names.split(/\r?\n/).forEach(line => {
    // primary
    console.log(`Initiating kill process: ${line} on server ${primary_ip_address}`);
    findProcessIdAndKill(user, primary_ip_address, line);
    
    // backup
    console.log(`Initiating kill process: ${line} on server ${backup_ip_address}`);
    findProcessIdAndKill(user, backup_ip_address, line);
});

function findProcessIdAndKill(user, ip_address, process_name) {
    try {
        //let sts = execSync(`ssh -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -i ${process.env.TEST_PRIVATE_KEY} netcool@10.23.97.129 | mpstatus`).toString();
        let process_string = execSync(`ssh -o StrictHostKeyChecking=no -i /home/virenvala/.ssh/id_rsa ${user}@${ip_address} /usr/tivoli/netcool/omnibus/bin/mpstatus | grep ${process_name}`).toString();
        let process_id;
        try {
            process_id = process_string.substring(process_string.indexOf('RUNNING') + 7, process_string.length);
            process_id = process_id.trim();
        } catch (err) {
            console.log("process_id not found");
        }
        console.log(process_id);

        // kill process id to reload rules
        if (process_id) {
            let kill_output = execSync(`ssh -o StrictHostKeyChecking=no -i /home/virenvala/.ssh/id_rsa ${user}@${ip_address} kill -HUP ${process_id}`).toString();
            console.log(`Process ${process_id} killed.`);
        }
    } catch (err) {
        console.log(err.status);
    }
}


