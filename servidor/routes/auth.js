const express = require ('express');
const router = express.Router();
const { check } = require('express-validator');
const authController = require('../controller/authController');
const auth = require('../middleware/auth');

// Iniciar sesion
// api/auth
router.post('/', 
    [
        check('email', 'Agrega un email válido').isEmail(),
        check('password', 'El password debe ser minimo de 6 caracteres').isLength({ min: 6})
    ],
    authController.autenticarUser
);

// obtener usuario autenticado
router.get('/',
    auth,
    authController.userAutenticado
);

module.exports = router;