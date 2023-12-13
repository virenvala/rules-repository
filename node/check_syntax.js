const { exec } = require('node:child_process');
const fs = require('fs');

const allFileContents = fs.readFileSync('instances_to_be_processed.txt', 'utf-8');
allFileContents.split(/\r?\n/).forEach(line => {
    console.log(`Line from file: ${line}`);
    // line is the instance name
    let instance_name = line;
    // based on instance name, find json object
    // TO DO:

    // for the instance, invoke check syntax script on remote server
    try {
        //let sts = execSync(`ssh -o StrictHostKeyChecking=no -i /home/virenvala/.ssh/id_rsa netcool@10.23.97.129 "source /etc/profile; /usr/tivoli/netcool/omnibus/probes/nco_p_syntax -server C_D_COL_D4_P1 -rulesfile /usr/tivoli/netcool/omnibus/etc/custom/MOBILE/rules/Ericsson_Generic_3GPP/esn_ossrc_3gpp_corba_3g_riy.rules"`);
        //exec(`ssh -o StrictHostKeyChecking=no -i /home/virenvala/.ssh/id_rsa netcool@10.23.97.129 /home/netcool/test_syntax.sh`, function(err, stdout, stderr) {
        exec(`ssh -o StrictHostKeyChecking=no -i /home/virenvala/.ssh/id_rsa netcool@10.23.97.129 "source /etc/profile; /usr/tivoli/netcool/omnibus/probes/nco_p_syntax -server C_D_COL_D4_P1 -rulesfile /usr/tivoli/netcool/omnibus/etc/custom/MOBILE/rules/Ericsson_Generic_3GPP/esn_ossrc_3gpp_corba_3g_riy.rules"`, { maxBuffer: 1000 * 1000 * 10 }, function (err, stdout, stderr) {
            if (err) {
                console.log("error---");
                console.log(err);
            }
            console.log(stdout);
            if (stdout.indexOf("Rules file syntax OK") > 0) {
                console.log("syntax ok");
            }
        });

    } catch (err) {
        console.log("error-----");
        console.log(err);
        console.log(err.status);
    }
});