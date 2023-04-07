//koppla på express och handlebars
const express = require ('express')
const handlebars = require ('express-handlebars')

const app = express()




//starta servern
app.listen(3000, () => {
    console.log("http://localhost:3000/");
})