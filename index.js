const express = require('express');

const db = require('./data/dbConfig');

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send("<h1>Its working!!!</h1>");
});

const port = 5000;

server.get('/api/cars', (req, res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        res.status(500).json({ error: "could not get cars"});
    })
})

server.post('/api/cars', (req, res) => {
    db('cars').insert(req.body, 'id')
    .then(car => {
        res.status(201).json(car);
    })
    .catch(err => {
        res.status(500).json({ error: 'could not add car' });
    })
})

server.listen(port, () => {
    console.log(`server is listening on port ${port}`)
});