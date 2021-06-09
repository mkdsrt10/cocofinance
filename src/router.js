'use strict';

const Router = require('koa-router');
const router = new Router();

const tvl = require('./api/tvl');
const apr = require('./api/apr');
const lp = require('./api/lp');
const noop = require("./api/noop");

router.get('/apr', apr.Apr);
router.get('/lp', lp.lp);
router.get('/tvl', tvl.vaultTvl);

router.get('/', noop);

module.exports = router;
