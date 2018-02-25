const express = require('express')
const app = express()
const port = process.argv[2] || 8080
const bodyParser = require('body-parser')
const fs = require('fs')


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json())

let cart = {
    coat:[
        {
        price: 230,
        name: "Anca Wool Coat",
        }
    ]
}

fs.readFile('cart.json', (err, data) => {
    if (data) {
        cart = JSON.parse(data)
    }
})



app.listen(port, () => {
    console.log(`Listening on ${port}`)
})