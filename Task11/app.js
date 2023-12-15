// Import express
const express = require('express');
// buat object express
const app =  express();

//
app.get("/", (req, res) => {
    res.send("Hello Express");
});

//Mendefinisikan port
app.listen(3000);