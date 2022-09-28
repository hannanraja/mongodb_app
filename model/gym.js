const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gymschema = new Schema({
    name: { type: String, required : [true, 'Name is required '] },
    contact: { type: Number, required : false },
    location: { type: String, required: [true,"Location is not required"]}
})

const gym = mongoose.model('gym',gymschema)
module.exports = gym;