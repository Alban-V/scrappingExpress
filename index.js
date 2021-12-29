const express = require('express');
const app = express();
require('./dbConfig');
const fetchData = require('./scrapping/scrapping');

const port = 5400;

app.get('/', async (req, res) => {
    const data = await fetchData();
});

app.listen(port, () => {
    console.log(`Le serveur fonctionne sur le port ${port}`);
})