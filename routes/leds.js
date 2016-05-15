var express = require('express');
var router = express.Router();
var ledmodel = require('./ledmodel');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('/api is running');
});

router.route('/led')
  .get(ledmodel.getAllLed)
  .post(ledmodel.addLed);

router.route('/led/:id')
  .get(ledmodel.getLedById)
  .put(ledmodel.updateLed)
  .delete(ledmodel.deleteLedById);

module.exports = router;
