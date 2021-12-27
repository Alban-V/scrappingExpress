const express = require('express');

const app = express();

const PORT = 5400;

app.listen(PORT, () => {
    console.log("Le serveur fonctionne sur le port 5400")
})