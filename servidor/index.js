const express = require('express');
const cors = require('cors');

// crear servidor
const app = express();

// conectar DB
require('./config/db');

// PUERTO DE LA APP
const PORT = process.env.PORT || 4000;

// Express body parser 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// habilitar cors
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hola');
})

// Importar rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/temporadas', require('./routes/temporadas'));
app.use('/api/animes', require('./routes/animes'));
app.use('/api/mangas', require('./routes/mangas'));
app.use('/api/mangaList', require('./routes/mangaList'));
app.use('/api/animeList', require('./routes/animeList'));
app.use('/api/genderAnime', require('./routes/genderAnime'));
app.use('/api/genderManga', require('./routes/genderManga'));
app.use('/api/genderListManga', require('./routes/genderListManga'));


app.listen(PORT, () => {
    console.log(`El servidor esta funcionando en el puerto ${PORT}`);
});










