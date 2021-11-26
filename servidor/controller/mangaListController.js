const MangaList = require('../models/MangaList');

// Crea lista de manga
exports.crearMangaList = async (req, res) => {

    try {
        const manga = new MangaList(req.body);

        manga.userId = req.usuario.id

            await manga.save();
            res.json(manga);
        } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

// obtiener lista de manga del usuario
exports.obtenerMangaList = async (req, res) => {

    try {
        const mangaList = await MangaList.findAll({ where: {userId: req.usuario.id}});
        res.json({ mangaList });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
    
}

// Eliminar manga de la lista del usuario
exports.eliminarMangaList = async(req, res) => {

    try {
        const mangaList = await MangaList.findOne({where: {id: req.params.id}});

        if(!mangaList) {
            return res.status(404).json({msg: 'Manga no encontrado en la lista'})
        }

        if(mangaList.userId !== req.usuario.id){
            return res.status(401).json({msg: 'No Autorizado'});
        }
        
        await MangaList.destroy({ where: {id: req.params.id}});
        res.json({ msg: "Manga eliminado de la lista" });

    } catch (error) {
        console.log(error);
        res.status(500).send('Error en el servidor');
    }

}


