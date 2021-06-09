'use strict';

const {APP_NAME} = require("../constant");

async function rt(ctx, next) {
  await next();
  ctx.set('X-Powered-By', APP_NAME);
}

module.exports = rt;
