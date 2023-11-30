var spawn = require('child_process').spawn;
var grep = spawn('grep', ['jenkins']);
var ps = spawn('ps', ['-ef']);

ps.stdout.pipe(grep.stdin);

grep.stdout.on('data', function (data) {
    console.log(data.toString("utf8"));
});