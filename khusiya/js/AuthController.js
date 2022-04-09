const form = require('..js/form')
const bcrypt = require('bcrypt.js')
const jwt = require('jsonwebtoken')
const form = require('./form')

const register = (req, res, next) => {
    
    let form = new form({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        messages: req.body.messages
    })
    form.save()
    .then( form => {
        res.json({
            message : " form submitted succesfully"
        })
    })
    .catch(error => {
        res.json({
            message: "An error occured"
        })
    })
}
module.exports = {
    register
}