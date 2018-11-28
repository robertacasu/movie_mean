module.exports = (function () {

    var getAll = function (req,res) {
        res.json ("lista di tutti i films")
    }
    var getOne = function (req, res) {
        var id = req.params.id
        res.json("lista di un film di id: "+ id )
    }
    return {
        getgAll: getAll,
        getOne: getOne
    }
})()