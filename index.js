const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send('hi! node-simple-todo-mem');
});

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

const router = require('./todos.js')
app.use('/todos', router);

const port = process.env.PORT || 5000;
app.listen(port, ()=>{console.log(`starting ... on ${port}`)});