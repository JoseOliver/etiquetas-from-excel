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

exec("node_modules\\.bin\\http-server --cors")
console.log("iniciado server en localhost:8080")
