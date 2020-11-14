const router = require('express').Router();

// Testing
router.get('/api/test', (req, res) => {
  res.send({ express: 'Testing server...' });
});

module.exports = router;
