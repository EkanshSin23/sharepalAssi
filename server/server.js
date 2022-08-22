const express = require('express');
const app = express();
const City = require('./db/db')

//this is just an sample api to get city (not working)
app.post('/api/data', async (req, res) => {
    try {
        await City.create({
            city: req.body.city
        })
    } catch (error) {

    }
})
app.listen('8000', () => {
    console.log('8000');
})