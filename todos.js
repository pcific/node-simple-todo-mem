const express = require('express');
const router = express.Router();

const dump = require('./dump.js');

const todosList = [
    undefined,
    {
        "id": 1,
        "name": "Go to the post office",
        "date": "2020-06-01T09:30:00.000Z"
    },
    {
        "id": 2,
        "name": "Deposit paycheck",
        "date": "2020-06-01T15:15:00.000Z"
    },
    {
        "id": 3,
        "name": "Water plants",
        "date": "2020-06-01T18:18:00.000Z"
    },
    {
        "id": 4,
        "name": "Finish homework",
        "date": "2020-06-01T21:21:00.000Z"
    }
];


router.get('/', (req, res)=>{
    res.send(todosList.filter((e)=>{return !!(e)}));
});
router.get('/:id', (req, res)=>{
    const id2 = req.params.id ;
    res.send(todosList[parseInt(id2)]);
});
router.post('/new', (req, res)=>{
    if(!req.body.name){
        return res.status(400).end();
    }
    const todo2 = {
        id: todosList.length,
        name: req.body.name,
        date: new Date()
    };
    todosList[todo2.id] = todo2 ;
    res.status(201).send(todo2);
});
router.put('/:id', (req, res)=>{
    if(!req.body.name || !req.body.date || req.body.id !== parseInt(req.params.id) ) {
        return res.status(400).end();
    }
    const todo2 = {
        id:   req.body.id,
        name: req.body.name,
        date: req.body.date
    };
    todosList[todo2.id] = todo2 ;
    res.status(204).end();
});
router.delete('/:id', (req, res)=>{
    const id2 = req.params.id ;
    todosList[parseInt(id2)] = undefined ;
    res.status(204).end();
});

module.exports = router
