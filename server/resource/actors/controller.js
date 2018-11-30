module.exports = (function () {
    var movies = require('../movies/Movie')
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
        var query = Actor.find();
        if (req.query.eta) {
            query.where('etamax').lt(req.query.etamax).sort({ field: 1 })
        }
        try {
            var actors = await query.populate({
                path: 'movies',
                select: ['titolo']
            });
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
    var putOne = function (req,res) {
        var body = req.body
        Actor.findById(req.params.id)
        .exec()
            .then(function (actor) {
                Object.assign(actor, req.body)
                return actor.save()
            })
            .then(function(data){
                res.json(data)
            })
            .catch(function (err) {
                res.json(err);
            })
    }
    var deleteOne = function (req,res) {
        Actor.findByIdAndRemove(req.params.id)
        .exec()
        .then (function(){
            res.json("è stato cancellato l'attore richiesto")
        })
            .catch(function (err) {
                res.json(err);
            })
    }
    
   

    return {
        getAll: getAll,
        getOne: getOne,
        postOne: postOne,
        putOne: putOne,
        deleteOne: deleteOne,
    }
})()