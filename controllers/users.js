const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('userRoute works');
});

module.exports = router;
