const { exec } = require('child_process');
var args = process.argv.slice(2);
console.log(args[0])
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
  }
});
console.log(git_diff);