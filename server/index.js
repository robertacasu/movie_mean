var express = require('express');
const app = express();
const PORT = 3000 || process.env.port;
require('./config/db.js');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
var path = require('path');

require('./routes/routes.js')(app,express);


// // middleware per file statici
// app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
// app.use('/immagini', express.static(path.join(__dirname, 'public', 'images')));

// app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules', 'bootstrap', 'dist')));
// app.use('/jquery', express.static(path.join(__dirname, 'node_modules', 'jquery', 'dist')));
// app.use('/popper', express.static(path.join(__dirname, 'node_modules', 'popper.js', 'dist', 'umd')));





// // ROUTING DI BASE -> req rest li scelgo io
// app.get('/', function (request, response) {
//     response.sendFile(__dirname + "/public/index.html");
// });








//AVVIO DEL SERVER
app.listen(PORT, function () {
    console.log("http://localhost"+PORT)
});


