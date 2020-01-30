const express = require('express'); //exportamos express
const app = express(); // llamamos a la funcion express

const hbs = require('hbs'); //requerimos el modulo hms
require('./hbs/helpers');

const port = process.env.PORT || 3000; //escucha un puerto que este libre o el puerto 3000

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales'); //creamos las vistas con hbs
app.set('view engine', 'hbs');

app.get('/', function(req, res) { // creamos nuestra ruta con el metodo get que solo nos sirve para recibir datos
    res.render('home', {
        nombre: "BoRiS TaPia"
    });
});

app.get('/about', (req, res) => { //creamos una ruta llamada about con el metodo get 
    //res.send('Esta es mi primera web app');
    res.render('about');
});

app.listen(port, () => { //escuchamos el puerto que se encuentra
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
