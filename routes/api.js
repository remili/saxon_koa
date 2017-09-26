const router = require('koa-router')();
const users = require('../controller/users');
const clients = require('../controller/clients');
const orders = require('../controller/orders');
const salers = require('../controller/salers');
const auth = require('../config/auth');


router.get('/login',users.login);


router.post('/clients',clients.add);

router.get('/clients',auth.isAuthenticated(),clients.search);
router.get('/clients/:id',clients.search);

router.put('/clients/:id',clients.update);


router.post('/orders',orders.add);

router.get('/orders',orders.search);
router.get('/orders/:id',orders.search);

router.put('/orders/:id',orders.update);


router.post('/salers',salers.add);

router.get('/salers',salers.search);
router.get('/salers/:id',salers.search);

router.put('/salers/:id',salers.update);

module.exports = router;

    