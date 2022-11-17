const qrcode = require('qrcode')
const {exec} = require("child_process");
const fs = require('fs')

//QRcode.toFile("./QR/000001.png","000001")

exec("node_modules\\.bin\\http-server --cors")
console.log("iniciado server en localhost:8080")

// var HTML
var etiquetas
var longitud

etiquetas= JSON.parse(fs.readFileSync('etiquetas.json', 'utf-8'))
longitud = Object.keys(etiquetas).length/4

for (var i = 0;i<longitud;i++){
  qrcode.toFile("QR/" + etiquetas[i + '-0'],etiquetas[i + '-1'])
}
// fs.readFile('./etiquetas.json', (err, html) => {
//     if(err){
//         throw err;
//     } else ETIQUETAS= etiquetas
// });
//
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-type', 'text/html');
//     res.write(HTML)
//     res.write(ETIQUETAS)
//     res.end();
// });
//
// server.listen(port, hostname, () => {
//     console.log('Server started on port ' + port);
// });
