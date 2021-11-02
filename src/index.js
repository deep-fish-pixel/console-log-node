function log(...messages){
  console.log('\x1B[37m%s\x1B[0m', messages.join(' '));
}

function info(...messages){
  console.info('\x1B[37m%s\x1B[0m', `☺${messages.join(' ')}`);
}

function success(...messages){
  console.info('\x1B[32m%s\x1B[0m', `✔${messages.join(' ')}`);
}

function warn(...messages){
  console.warn('\x1B[33m%s\x1B[0m', `⚠${messages.join(' ')}`);
}

function error(...messages){
  console.error('\x1B[31m%s\x1B[0m', `✘${messages.join(' ')}`);
}

module.exports = {
  log,
  info,
  success,
  warn,
  error
};
