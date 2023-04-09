// ファイルへの書き込みを行う関数
function write(filename, text) {
  const fs = require('fs');
  fs.writeFileSync(filename, text);
}

// ファイルから読み込みを行う関数
function read(filename) {
  const fs = require('fs');
  return fs.readFileSync(filename, 'utf8');
}
