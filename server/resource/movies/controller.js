module.exports = (function () {

    var Movie = require('./Movie')

    var getAll = function (req, res) {
        // Movie.find()
        //     .exec()
        //     .then(function (movies) {
        //         res.json(movies);
        //     })
        //     .catch(function (err) {
        //         res.json(err);
        //     });

        var query = Movie.find();
        if (req.query.anno){
            query.where('anno').equals(req.query.anno).sort({field: 1})
        }
        if (req.query.votomin) {
            query.where('votomin').gt(req.query.votomin).sort({ field: 1 })
        }
        if (req.query.votomax) {
            query.where('votomax').gt(req.query.votomax).sort({ field: 1 })
        }
        if (req.query.genere) {
            query.where('genere').gt(req.query.genere).sort({ field: 1 })
        }

        if (req.query.genere) {
            var generi = req.query.genere.split(",")
            console.log(generi)
            query.where('genere').in(generi).sort({ field: 1 })
        }


        query.exec()
            .then(function (movies) {
                res.json(movies)
            })
            .catch(function (err) {
                res.json(err);
            });
    }
    var getOne = function (req, res) {
        
        Movie.findById(req.params.id)
            .exec()
            .then(function (movie) {
                res.json(movie)
            })
            .catch(function (err) {
                res.json(err);
            });
        
    }
    var postOne = function (req, res) {
        var nuovo = new Movie(req.body)
        nuovo.save()
            .then(function (data) {
                res.json(data)
            })
            .catch(function (err) {
                res.json (err);
            });
    }
    var putOne = function (req, res) {
        var id = req.params.id
        var film = req.body
        res.json(film)
    }
    var deleteOne = function (req, res) {
        Movie.findByIdAndRemove(req.params.id)
            .exec()
            .then(function () {
                res.json("hai cancellato il film richiesto")
            })
            .catch(function (err) {
                res.json(err);
            });
        
    }
    var voteOne = function (req, res) {
        var voto= req.body.voto

        Movie.findById(req.params.id)
            .exec()
            .then(function (movie) {
                movie.nvoti += 1;
                movie.voto = (movie.voto+ voto)/ movie.nvoti;
                
                return movie.save();
            })
            .then(function (data) {
                res.json(data);
            })
            .catch(function (err) {
                res.json(err);
            });

    }
    // creazione film + modifica di un film + eliminazione + voto il film
    return {
        getAll: getAll,
        getOne: getOne,
        postOne: postOne,
        putOne: putOne,
        deleteOne: deleteOne,
        voteOne: voteOne,
    }
})()