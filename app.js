const express = require('express')
const app = new express()
const port = 4300
const router = require('./route/route.js')
const { default: mongoose } = require('mongoose')

const uri = "mongodb+srv://hannan:kameeney3@myfirstcluster.4vmmebo.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true })
const dbConn = mongoose.connection


dbConn.on('open', () => {
    console.log("mongoose DB is connected")
})
app.listen(port, () => {
   console.log("App is listening on PORT : " + port)
})

app.use('/operation', router)