const mongoose = require('mongoose')

const ContactSchema = mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      //  reffering to specific collection
      ref:'users',
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    password: {
        type: String,
    },
    type: {
      type: 'String',
        default: 'personal'
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('contact', ContactSchema)