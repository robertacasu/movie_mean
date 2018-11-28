var express = require('express');
var router = express.Router();
var controller = require ('./controller')

// LISTA TUTTI I FILM
router.get('/',controller.getAll)

// // LISTA UN FILM
router.get('/:id([0-9]{1,4})',controller.getOne)

// CREAZIONE UN FILM
router.post('/', controller.postOne)

// MODIFICA UN FILM
router.put('/:id([0-9]{1,4})', controller.putOne)

// ELIMINAZIONE UN FILM
router.delete('/:id([0-9]{1,4})', controller.deleteOne)

// VOTAZIONE UN FILM
router.put('/voto/:id([0-9]{1,4})', controller.voteOne)

module.exports = router;





