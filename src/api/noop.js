'use strict';

async function noop(ctx, next) {
  ctx.body = "Hello"
  ctx.status = 200;
}

module.exports = noop;
