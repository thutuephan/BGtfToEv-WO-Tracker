const router = require('express').Router();
const path = require('path');



router.get('/exercise', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/exercise.html'));
});


router.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });


  router.get('/', (req, res) => {
    // because it is the homepage, no need to add index after "/"
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  

module.exports = router;