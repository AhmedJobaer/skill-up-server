const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Skill-Up Api is running!');
});

app.listen(port, () => {
    console.log('Skill-up server running on port', port);
})