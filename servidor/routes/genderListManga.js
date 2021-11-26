const express = require('express');
const router = express.Router();
const genderListMangaController = require('../controller/genderListMangaController');
const auth = require('../middleware/auth');

// crear generos de un manga
// api/genderListManga
router.post('/',
    auth,
    genderListMangaController.crearGenderListManga
);

// obtener los generos de un manga
router.get('/',
    auth,
    genderListMangaController.obtenerGenderListManga
);

module.exports = router