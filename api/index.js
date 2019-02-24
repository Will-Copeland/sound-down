const express = require("express");

const app = express();


app.get('/', (req, res, next) => {
    res.send("SKKSDKKSD")
});

app.get('/test', (req, res, next) => {
    res.send(["one", "two", "three"])
    console.log('Connected');
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
    
})