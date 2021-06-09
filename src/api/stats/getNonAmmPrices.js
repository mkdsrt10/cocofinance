const getDopplePrices = require('./bsc/dopple/getDopplePrices');
const {getBelt4BeltLpPrice} = require("./bsc/belt/getBeltPrice");

const getNonAmmPrices = async tokenPrices => {
  let prices = {};

  const results = await Promise.allSettled([
    getBelt4BeltLpPrice(),
    getDopplePrices(),
  ]);

  for (const result of results) {
    if (result.status !== 'fulfilled') {
      console.warn('getNonAmmPrices error', result.reason);
      continue;
    }
    prices = { ...prices, ...result.value };
  }

  return prices;
};

module.exports = getNonAmmPrices;
