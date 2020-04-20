//This will contain all the handling of routes/endpoints

const express = require('express');
const router = express.Router();
//json middleware
router.use(express.json());

//import model
let ItemCollection = require('../models/ItemSchema');

//add endpoint and routes here
//Create new item
router.post('/', (req, res) => {
    const debugMSG = `Got a CREATE item request!`
    console.log(debugMSG);// Sanity debug
    console.log(req.body);
    // res.send(req.body);// Send the response
    ItemCollection.create(req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
})

//Read specific item by name
router.get('/:item_name', (req, res) => {
    const debugMSG = `Got a Read item request for ${req.params.name}!`
    console.log(debugMSG);// Sanity debug
    // res.send(debugMSG);// Send the response
    ItemCollection.findOne({ itemName: req.params.item_name }, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
})

//Update item by name//3rd parameter {new:true} gives you the updated object!!!!
router.put('/:item_name', (req, res) => {
    const debugMSG = `Got a UPDATE item request for ${req.params.name}!`
    console.log(debugMSG);// Sanity debug
    console.log(req.body);
    // res.send(req.body);// Send the response
    ItemCollection.findOneAndUpdate({ itemName: req.params.item_name }, req.body, {new:true}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
})

//Delete item by name
router.delete('/:item_name', (req, res) => {
    const debugMSG = `Got a DELETE item request for ${req.params.name}!`
    console.log(debugMSG);// Sanity debug
    // res.send(debugMSG);// Send the response
    ItemCollection.findOneAndDelete({ itemName: req.params.item_name }, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
})

//Read all items
router.get('/', (req, res) => {
    const debugMSG = `Got a Read all items request !`;
    console.log(debugMSG);// Sanity debug
    // res.send(debugMSG);// Send the response
    ItemCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    });
})

//Setup some seed data//OPTIONAL FOR TESTING
router.post('/seed/data', (req, res) => {
    console.log(`Creating some seed data...`);
    const seedData = [
        {
            "itemName": "Rollerblades",
            "itemDesc": "Like new",
            "itemPrice": 38.00
        },
        {
            "itemName": "Bicycle",
            "itemDesc": "Like new",
            "itemPrice": 35.00
        },
        {
            "itemName": "Tricycle",
            "itemDesc": "Like new",
            "itemPrice": 32.00
        }
    ];

    //Add to our collection
    ItemCollection.create(seedData, (errors,results)=>{
        errors ? res.send(errors) : res.send(results);
    });
})

// //sanity
// router.get('/test',(req,res)=>{
//     res.send(`Loud and Clear`)
// })

//export router
module.exports = router;