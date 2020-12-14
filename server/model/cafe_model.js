const mongoose = require('mongoose')
//const mongooseAutoInc = require('mongoose-auto-increment');
const Schema = mongoose.Schema

const Cafe = new Schema(
    {
        name: { type: String, required: true, unique:true },
        password: { type: String, required: true },
        seatNumber: { type: Number, required: false, unique:true },
        time: { type: [String], required: true },

    },
    { timestamps: true },
)

//Cafe.plugin(mongooseAutoInc.plugin, 'cafe');
module.exports = mongoose.model('cafe', Cafe)