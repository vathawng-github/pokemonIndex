const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { ObjectId, Int32 } = require('mongodb');

const CreatureSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    hp: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    fav_attack: {
        type: String,
        required: true
    },
    height: {
        type: String,
        required: true
    },
    weight: {
        type: String,
        required: true
    }
});

mongoose.model('creatures', CreatureSchema);

