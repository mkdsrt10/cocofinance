const { fetchAmmPrices } = require('../utils/fetchAmmPrices');
const getNonAmmPrices = require('./getNonAmmPrices');

const { sleep } = require('../utils/time');

const doppleLpPools = require('../data/doppleLpPools.json');
const autoLpPools = require('../data/autoLpPools.json');
const cakeV2LpPools = require('../data/cakeV2Lp.json');


const INIT_DELAY = 0 * 60 * 1000;
const REFRESH_INTERVAL = 5 * 60 * 1000;

// FIXME: if this list grows too big we might hit the ratelimit on initialization everytime
// Implement in case of emergency -> https://github.com/beefyfinance/beefy-api/issues/103
const pools = [
  ...doppleLpPools,
  ...autoLpPools,
  ...cakeV2LpPools,
];

const knownPrices = {
  BUSD: 1,
  USDT: 1,
  HUSD: 1,
  DAI: 1,
  USDC: 1,
  UST: 1,
};

let tokenPricesCache = {};
let lpPricesCache = {};
let isProcessing = true;

const getDataLp= () => {
  return {lp: lpPricesCache, tp: tokenPricesCache}
}

const updateAmmPrices = async () => {
  console.log('> updating amm prices');
  isProcessing = true;
  try {
    let { poolPrices, tokenPrices } = await fetchAmmPrices(pools, knownPrices);
    const nonAmmPrices = await getNonAmmPrices(tokenPrices);
    tokenPricesCache = tokenPrices;
    lpPricesCache = { ...poolPrices, ...nonAmmPrices };
  } catch (err) {
    console.error(err);
  }
  isProcessing = false;

  setTimeout(updateAmmPrices, REFRESH_INTERVAL);
  console.log('> updated amm prices');
};

const getAmmTokensPrices = async () => {
  // TODO: can we replace this mutex with events system?
  while (isProcessing) {
    await sleep(500);
  }
  return tokenPricesCache;
};

const getAmmLpPrices = async () => {
  while (isProcessing) {
    await sleep(500);
  }
  return lpPricesCache;
};

const getAmmTokenPrice = async tokenSymbol => {
  const tokenPrices = await getAmmTokensPrices();
  if (tokenPrices.hasOwnProperty(tokenSymbol)) {
    return tokenPrices[tokenSymbol];
  }
  console.error(`Unknown token '${tokenSymbol}'. Consider adding it to .json file`);
};

const getAmmLpPrice = async lpName => {
  const lpPrices = await getAmmLpPrices();
  if (lpPrices.hasOwnProperty(lpName)) {
    return lpPrices[lpName];
  }
  console.error(`Unknown liqudity pair '${lpName}'. Consider adding it to .json file`);
};

// Flexible delayed initialization used to work around ratelimits
setTimeout(updateAmmPrices, INIT_DELAY);

module.exports = {
  getAmmTokenPrice,
  getAmmTokensPrices,
  getAmmLpPrice,
  getAmmLpPrices,
  getDataLp
};
