const GenderListManga = require('../models/GenderListManga');

exports.crearGenderListManga = async(req, res) => {
    
    try {
        // crear lista de generos de manga
        const genderListManga = new GenderListManga(req.body);
        await genderListManga.save();
        res.json(genderListManga);


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerGenderListManga = async (req, res) => {
    try {
        const genderListManga = await GenderListManga.findAll();
        res.json({genderListManga});
    } catch (error) {
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}
