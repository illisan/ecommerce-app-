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

app.get('/getcart', (req, res) => {
    res.send(cart)
})

app.post('/postcart',(req, res)=>{
    // console.log(res)
    let newItem = req.body
    cart = newItem
    fs.writeFile('cart.json', JSON.stringify(cart))
    res.json({ success: true })
})

//SAVE End-point
//This endpoint will receive a username and an array of cart items
//and write them to a file (save them)
// app.post('/cart', (req, res) => {


//Get the cart items from the request



//     // //Save cart items to the object for the provided user
//     // // cart[username] = newItems

//     // //Write all of the cart data (for each user) to a file and stringify it.
//     fs.writeFile('cart.json', JSON.stringify(cart))

//     //Send back a success message
//     res.json({ success: true })
// })


app.listen(port, () => {
    console.log(`Listening on ${port}`)
})