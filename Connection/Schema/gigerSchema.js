const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = new Schema({
    Type: {
        type: String,
        required: true
    },
    Attendence: {
        type: String,
        required: true
    },
    Location: {
        type: String,
        default: null
    },
    GiggersAssigned: [{
        type: Schema.Types.ObjectId,
        ref: 'Gigger'
    }],
    Status: {
        type: String,
        required: true
    },
    createdAt: { 
        type: Date,
        default: Date.now
    }
});
