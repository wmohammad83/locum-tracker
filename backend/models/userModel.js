const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username'],
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please add an email'],
        unique: true
    },
    firstname: {
        type: String,
        required: [true, 'Please add your firstname']
    },
    lastname: {
        type: String,
        required: [true, 'Please add your lastname']
    },
    password: {
        type: String,
        required: [true, 'Please add a password']
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('User', userSchema)