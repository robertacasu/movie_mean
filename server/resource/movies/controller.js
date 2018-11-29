module.exports = (function () {

    var Movie = require('./Movie')

    var getAll = function (req, res) {
        res.json ("lista di tutti i films")
    }
    var getOne = function (req, res) {
        var id = req.params.id
        res.json("lista di un film di id: "+ id )
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
        var id = req.params.id
        res.json("hai cancellato un film di id: " + id)
    }
    var voteOne = function (req, res) {
        var id = req.params.id
        var voto = req.body.voto
        res.json("hai votato un film di id: " + id + "e gli hai dato" + voto)
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