module.exports = (function () {

    var Actor = require('./Actor')

    // var getAll = function (req, res) {
    //      var query = Actor.find(); 
    //      query
    //     .exec()
            
    //         .then(function (data) {
    //             res.json(data)
    //         })
    //         .catch(function (err) {
    //             res.json(err);
    //         });
    // }

    var getAll = async function (req, res) {
        try {
            var actors = await Actor.find ();
            res.json(actors)
    }
     catch (err) {
            res.json(err);
        }
    }
    // return {getAll};

    var getOne = function (req,res) {
        Actor.findById(req.params.id) 
        .exec()
        .then (function (data) {
            res.json(data)
        })
            .catch(function (err) {
                res.json(err);
            }); }
    var postOne = function (req,res) {
        var nuovo = new Actor (req.body)
        nuovo.save()
        .then (function (data) {
            res.json(data)
        })
            .catch(function (err) {
                res.json(err);
            })
    }




















    
        

    // var postOne = function (req, res) {
    //     var nuovo = new Actor(req.body)
    //     nuovo.save()
    //         .then(function (data) {
    //             res.json(data)
    //         })
    //         .catch(function (err) {
    //             res.json (err);
    //         });
    // }
    // var putOne = function (req, res) {
    //     var id = req.params.id
    //     var film = req.body
    //     res.json(film)
    // }
    // var deleteOne = function (req, res) {
    //     Actor.findByIdAndRemove(req.params.id)
    //         .exec()
    //         .then(function () {
    //             res.json("hai cancellato il film richiesto")
    //         })
    //         .catch(function (err) {
    //             res.json(err);
    //         });
        
    // }
    // var voteOne = function (req, res) {
    //     var voto= req.body.voto

    //     Actor.findById(req.params.id)
    //         .exec()
    //         .then(function (actor) {
    //             actor.nvoti += 1;
    //             actor.voto = (actor.voto+ voto)/ actor.nvoti;
                
    //             return actor.save();
    //         })
    //         .then(function (data) {
    //             res.json(data);
    //         })
    //         .catch(function (err) {
    //             res.json(err);
    //         });

    // }
    // creazione film + modifica di un film + eliminazione + voto il film
    return {
        getAll: getAll,
        getOne: getOne,
        postOne: postOne,
        // putOne: putOne,
        // deleteOne: deleteOne,
        // voteOne: voteOne,
    }
})()