const mongoose = require('mongoose');

mongoose.connect(
    "mongodb://localhost:27017/node-api-scrapping", 
    { useNewUrlParser: true, useUnifiedTopology: true},
    (err) => {
        if (!err) console.log("Mongodb connected");
        else console.log(`Connection Error : ${err}`);
    }
)