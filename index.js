const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const lists = require('./data/lists.json');

app.get('/', (req, res) => {
    res.send('Skill-Up Api is running!');
});

app.get('/all-lists', (req, res) => {
    res.send(lists)
})

app.listen(port, () => {
    console.log('Skill-up server running on port', port);
})
