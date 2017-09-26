const router = require('koa-router')();

/*
const users = require('../database/users');
const orders = require('./database/orders');
const salers = require('../database/salers');
const clients = require('./database/clients');

router.get('/users',users.add);
router.get('/orders',orders.add);
router.get('/salers',salers.add);
router.get('/clients',clients.add);
*/

module.exports = 
    router.get('/404',async (ctx) => {
        ctx.body = 'page 404 page!'
    }).get('/index',async (ctx) => {
        ctx.body = 'page index page!'
    })