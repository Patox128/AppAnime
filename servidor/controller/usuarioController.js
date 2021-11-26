require('dotenv').config();

const User = require ('../models/User');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');


exports.crearUsuario = async (req,res) => {

    // revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    // extraer email y password
    const {email, password} = req.body

    try {
        let usuario = await User.findOne({where: {email}});

        if(usuario) {
            return res.status(400).json({ msg: 'El usuario ya existe'})
        }

        // crea el nuevo usuario
        usuario = new User(req.body);

        // hashear el password
        const salt = await bcryptjs.genSalt(10);
        usuario.password = await bcryptjs.hash(password, salt);

        // guardar usuario
        await usuario.save();

        // Crear y firmar el JWT
        const payload = {
            usuario: {
                id: usuario.id
            }
        };
        console.log(process.env.SECRETA);
        // Firmar el JWT
        jwt.sign(payload, process.env.SECRETA, {
            expiresIn: 3600
        }, (error, token) => {
            if(error) throw error;
            // mensaje de confirmacion
            res.json({ token });

        });

    } catch (error) {
        console.log(error);
        res.status(400).send('hubo un error');
    }

}