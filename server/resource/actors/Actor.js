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
    foto: {
        type: String,
        default: "https://st3.depositphotos.com/1432405/12655/v/950/depositphotos_126557196-stock-illustration-full-male-avatar-icon-flat.jpg"
    },
    movies: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'movie'
    }],
});

actorSchema.pre('save', function (next) {
    this.dataCreazione = Date.now()
    next()
})

module.exports = mongoose.model('Actor', actorSchema, "actor")