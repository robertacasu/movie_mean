var mongoose = require('mongoose');

mongoose.connect(
    'mongodb://admin:admin1990@ds141783.mlab.com:41783/themoviedb',
    { 
        useCreateIndex:true,
        useNewUrlParser: true },
    function (err) {
        if (err) console.log(err);
        else console.log("connesso al db");
    });

mongoose.Promise = global.Promise;