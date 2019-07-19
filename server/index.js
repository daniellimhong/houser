require('dotenv').config()
const express = require('express');
const massive = require('massive');
const controller = require('./controller')

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

const app = (express());
app.use(express.json());

massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    console.log("Database connected")
})

app.get('/api/houses', controller.getAllHouses)
app.post('/api/houses', controller.postHouse)
app.delete('/api/houses/:id', controller.deleteHouse)

app.listen( SERVER_PORT, () => console.log(`Server listening on Port ${SERVER_PORT}`) )



