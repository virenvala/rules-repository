const { spawnSync } = require('node:child_process');
const ls = spawnSync('ls', ['-lh', '/usr']);

/*ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});*/
console.log(ls.stdout.toString());