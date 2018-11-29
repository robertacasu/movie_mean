var mongoose = require('mongoose');

var actorSchema = new mongoose.Schema({

    nome: {
        type: String,
        required: [true, 'Devi inserire il nome'],
        trim: true,
        index: true
    },

    cognome: {
        type: String,
        required: true
    },
    eta: {
        type: Number
    },
    immagine: {
        type: String,
        
    }
});

actorSchema.pre('save', function (next) {
    this.dataCreazione = Date.now()
    next()
})

module.exports = mongoose.model('Actor', actorSchema, "actor")