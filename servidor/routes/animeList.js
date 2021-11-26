const express = require('express');
const router = express.Router();
const animeListController = require('../controller/animeListController');
const auth = require('../middleware/auth');

// Crear lista de animes
// api/animeList
router.post('/',
    auth,
    animeListController.crearAnimeList
);

// Obtener lista de animes del usuario
router.get('/',
    auth,
    animeListController.obtenerAnimeList
);

// eliminar animes de la lista
router.delete('/:id',
    auth,
    animeListController.eliminarAnimeList
);

module.exports = router;