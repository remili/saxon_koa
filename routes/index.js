const router = require('koa-router')();

const api = require('./api');
const page = require('./page');

router.use('/api',api.routes());
router.use('/page',page.routes());

module.exports = router;