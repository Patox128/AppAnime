const AnimeList = require('../models/AnimeList');

// Crea lista de anime
exports.crearAnimeList = async (req, res) => {
    try {
        const anime = new AnimeList(req.body);
        anime.userId = req.usuario.id
        await anime.save();
        res.json(anime);
        } catch (error) {
        console.log(error);
        res.status(500).send("Hubo un error");
    }
};

// obtiener lista de anime del usuario
exports.obtenerAnimeList = async (req, res) => {
    try {
        const animeList = await AnimeList.findAll({ where: {userId: req.usuario.id}});
        res.json({ animeList });
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

// eliminar anime de la lista del usuario
exports.eliminarAnimeList = async (req, res) => {
    try {
        const animeList = await AnimeList.findOne({where: {id: req.params.id}});

        if(!animeList) {
            return res.status(404).json({msg: 'Anime no encontrado en la lista'});
        }

        if(animeList.userId !== req.usuario.id) {
            return res.status(401).json({msg: 'No Autorizado'});
        }

        await AnimeList.destroy({ where: {id: req.params.id}});
        res.json({ msg: "Anime eliminado de la lista" });

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

