const express = require('express');
const router = express.Router();
const { Firestore } = require("@google-cloud/firestore");

const mongoose = require('mongoose');
require('models/Creature');
const Creature = mongoose.model('creatures');

const firestore = new Firestore();

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

router.get('/newCreatures', async (req,res) => {
    let pokemonRef = firestore.collection("pokemon");
    
    pokemonRef.get().then((querySnapshot) => {
        let newObjects = [];
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            console.log(doc.id);
            // Add every single doc to newObjects array
            newObjects.push(doc.data());
            console.log(`New Array: ${newObjects}`);
        });
        res.json(newObjects);
    });

    // Return newObjects array
})

router.post('/newPokemon', async (req, res) => {
    console.log(req.body);    
    creatureObject = {};
    creatureObject.name = req.body.name;
    creatureObject.hp = req.body.hp;
    creatureObject.type = req.body.type;
    creatureObject.fav_attack = req.body.fav_attack;
    creatureObject.height = req.body.height;
    creatureObject.weight = req.body.weight;
    console.log(creatureObject);

    let collectionRef = firestore.collection('pokemon');
    let documentRef = await collectionRef.add(creatureObject);
    console.log(`Document created: ${documentRef.id}`);

    return res.status(200).json(creatureObject);
});

router.post('/newUser', async (req, res) => {
    console.log(req.body);
    userObject = {};
    userObject.email = req.body.email;
    userObject.type = req.body.type;
    console.log(userObject);

    let collectionRef = firestore.collection('subscribers');
    let documentRef = await collectionRef.add(userObject);

    return res.status(200).json(userObject);
})

module.exports = router;