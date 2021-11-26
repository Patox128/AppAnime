const GenderAnime = require('../models/GenderAnime');
const { validationResult } = require('express-validator');

exports.crearGenderAnime = async(req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    try {
        // crear una temporada anime
        const genderAnime = new GenderAnime(req.body);
        await genderAnime.save();
        res.json(genderAnime);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerGenderAnime = async (req, res) => {
    try {
        const genderAnime = await GenderAnime.findAll();
        res.json({genderAnime});
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}

// Actualizar genero anime
exports.actualizarGenderAnime = async (req, res) => {
    // revisar si hay errores
    const errores = validationResult(req);
    if(!errores.isEmpty()) {
        return res.status(400).json({errores: errores.array()})
    }

    // extraer la informacion del proyecto
    const { name } = req.body;

    try {
        // let temporada = await Temporada.findByPk(req.params.id);
        // revisar el ID y actualizar
        const [genderAnime] = await GenderAnime.update({name}, {where: {id: req.params.id}});
        if(!genderAnime) {
            return res.status(404).json({msg: 'Genero no encontrado'});
        }
        res.status(204).json()
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }

}

// Elimina una temporda por ID
exports.eliminarGenderAnime = async(req, res) => {

    try {
        // let temporada = await Temporada.findByPk(req.params.id);
        // revisar el ID y actualizar
        const genderAnime = await GenderAnime.destroy({where: {id: req.params.id}});
        if(!genderAnime) {
            return res.status(404).json({msg: 'Genero no encontrado'});
        }
        res.json({msg: 'Genero Eliminado'});
    
    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }

}