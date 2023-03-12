const qrcode = require('qrcode')
const {exec} = require("child_process");
const fs = require('fs')

var dir = './QR';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

var etiquetas
var longitud

etiquetas= JSON.parse(fs.readFileSync('etiquetas.json', 'utf-8'))
longitud = Object.keys(etiquetas).length/4

for (var i = 0;i<longitud;i++){
  qrcode.toFile("QR/" + etiquetas[i + '-0'],etiquetas[i + '-1'])
}

exec("node_modules\\.bin\\http-server --cors -c-1")
console.log("iniciado server en localhost:8080")
console.log("recuerda cerrar esta ventana una vez termines de usarme")

var url = 'http://localhost:8080';
var start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
exec(start + ' ' + url);