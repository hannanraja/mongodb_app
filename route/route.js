const express = require('express')
const { Router } = require('express')
const router = express.Router()
var bodyParser = require('body-parser')
const gymModel = require('../model/gym.js')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
router.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));

router.get('/getdata', async (req, res) => {
    try {
        const gymData = await gymModel.find()
        res.status(200).send(gymData)
    }
    catch (err) {
        res.status(500).send("error occured while connection +" + err)
    }
})
router.post('/postdata', async (req, res) => {
    let gymdata = new gymModel(req.body)
    console.log(gymdata)
    try {
        const saveddata = await gymdata.save()
        res.send('Data is saved for ' + gymdata.name)
    } 
    catch (err) {
        res.status(500).send("error occured while connection : "+ err)
    }
})


module.exports = router