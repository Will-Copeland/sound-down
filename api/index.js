const express = require("express");

const app = express();


app.get('/test2', (req, res, next) => {
    res.send(["AA"])
});

app.get('/test', (req, res, next) => {
    res.send(["one", "two", "three"])
    console.log('Connected');
});

// app.post('/sound', (req, res, next) => {

// });

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    
})