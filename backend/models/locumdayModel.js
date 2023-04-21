const mongoose = require('mongoose')

const locumdaySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    date: {
        type: Date,
        required: [true, 'Please add a date'],
    },
    company: {
        type: String,
        required: [true, 'Please add the company']
    },
    location: {
        type: String,
        required: [true, 'Please add the town or city']
    },
    rate: {
        type: Number,
        required: [true, 'Please add the daily rate']
    },
    miles: {
        type: Number,
        required: [true, 'Please add the distance travelled both ways'],
    },
    parking: {
        type: Number,
        // required: [true, 'Please add parking cost'],
    }
},
{
    timestamps: true
}
)

module.exports = mongoose.model('LocumDay', locumdaySchema)