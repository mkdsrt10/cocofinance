'use strict';

const Koa = require('koa');
const helmet = require('koa-helmet');
const body = require('koa-bodyparser');
const cors = require('@koa/cors');
const conditional = require('koa-conditional-get');
const etag = require('koa-etag');

const rt = require('./middleware/rt');
const powered = require('./middleware/powered');
const router = require('./router');
const {APP_NAME} = require("./constant");

const app = new Koa();

/** Middleware : Log time to response in the response */
app.use(rt);
/** Caching mechanism using Etag & Conditional-Get */
app.use(conditional());
app.use(etag());
/** Helmet for setting header of the response */
app.use(helmet());
/** CORS Enabled */
app.use(cors({ origin: '*' }));
/** Middleware : Powered by */
app.use(powered);
/** Helper: Body parser */
app.use(body());

app.context.cache = {};
/** Router definition */
app.use(router.routes());
/** Allowed methods */
app.use(router.allowedMethods());

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`> ${APP_NAME} running! (:${port})`);
