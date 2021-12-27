const express = require('express');
const app = express();
require('./dbConfig');

const port = 5400;

app.listen(port, () => {
    console.log(`Le serveur fonctionne sur le port ${port}`);
})