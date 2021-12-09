const router = require('express').Router();
const path = require('path');


app.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname + './public/exercise.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname + './public/index.html'));
});

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname + './public/stats.html'));
  });


module.exports = router;