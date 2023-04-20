const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
require('models/Creature');
const Creature = mongoose.model('creatures');

// Root route
router.get('/', (req, res) => {
    res.send('Root API route');
});

router.get('/creatures', async (req, res) => {
    const filter = {};
    const creatures = await Creature.find(filter);
    console.log(creatures);
    res.json(creatures);
})

module.exports = router;