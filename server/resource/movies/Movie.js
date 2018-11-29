var mongoose = require('mongoose');

var movieSchema = new mongoose.Schema({

    titolo: {
        type: String,
        required: [true, 'Devi inserire il titolo'],
        unique: true,
        trim: true,
        index: true
    },

    anno: {
        type: Number,
        required: true,
        min: 1900,
        max: 2020
    },

    voto: {
        type: Number,
        default:0,
        min: 0,
        max: 10
    },
    nvoti: {
        type: Number,
        default: 0
    },

    genere: [{
        type: String,
        enum: ['horror', 'fantasy', 'commedia', 'thriller', 'drammatico', 'romantico']
    }],
    dataCreazione: {
        type: Date,
    }
});

movieSchema.pre('save', function (next){
    this.dataCreazione = Date.now()
    next()
})

module.exports = mongoose.model('movie', movieSchema )