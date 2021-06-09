'use strict';

function incorporateBifiFee(r, n = 365, t = 1, c = 1) {
  return r*c;
}

module.exports = { incorporateBifiFee: incorporateBifiFee };
