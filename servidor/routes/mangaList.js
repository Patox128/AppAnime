const express = require('express');
const router = express.Router();
const mangaListController = require('../controller/mangaListController');
const auth = require('../middleware/auth');

// Crear lista de mangas
// api/mangaList
router.post('/',
    auth,
    mangaListController.crearMangaList
);

// Obtener lista de mangas del usuario
router.get('/',
    auth,
    mangaListController.obtenerMangaList
);

// eliminar manga de la lista
router.delete('/:id',
    auth,
    mangaListController.eliminarMangaList
);

module.exports = router;