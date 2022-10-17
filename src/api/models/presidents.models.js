const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const presidentsSchema = new Schema(
    {
        name: {type: String, required: true}, 
        number: {type: Number, required: true},
        party: {type: String, required: true},
        portrait: {type: String, required: false}, 
        election: [{type: Number, required: false}]
    }
)

const Presidents = mongoose.model("presidents", presidentsSchema);

module.exports = Presidents;
