var express = require('express');
var router = express.Router();
var controller = require('./controller')

// LISTA TUTTI Gli Attori
router.get('/', controller.getAll)

// // // LISTA UN FILM
router.get('/:id([a-z0-9]{24})', controller.getOne)

// // CREAZIONE UN FILM
router.post('/', controller.postOne)

// // MODIFICA UN FILM
// router.put('/:id([a-z0-9]{24})', controller.putOne)

// // ELIMINAZIONE UN FILM
// router.delete('/:id([a-z0-9]{24})', controller.deleteOne)

// // VOTAZIONE UN FILM
// router.put('/voto/:id([a-z0-9]{24})', controller.voteOne)

module.exports = router;





