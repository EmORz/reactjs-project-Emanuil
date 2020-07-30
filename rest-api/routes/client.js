const controllers = require('../controllers');
const router = require('express').Router();
//const { auth } = require('../utils');

router.get('/', controllers.client.get);

router.post('/', controllers.client.post);

// router.put('/:id', auth(), controllers.product.put);

// router.delete('/:id', auth(), controllers.product.delete);

module.exports = router;