const mongoose    = require('mongoose')
const Schema      = mongoose.Schema

const formSchema = new Schema({
    name:{
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    },
    messages : {
        type:String
    }
},{timestamps: true})
const form = mongoose.model('form',formSchema)

module.exports = form