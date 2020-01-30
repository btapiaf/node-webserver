const http = require('http'); //crea una constante http que requiere http para poder crear el servidor

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    let salida = {
        nombre: 'bORIS',
        edad: 25,
        url: req.url
    }
    res.write(JSON.stringify(salida));
    //res.write("Hola Mundo, desde nodeJS!");
    res.end();
}).listen(8085);

console.log("Escuchando en el puerto 8085");
