const getChainTvl = require('./getChainTvl.js');
const getAprs = require("./getAprs");
const {isEmpty} = require("../utils/time");

const {
  BSC_CHAIN_ID,
  HECO_CHAIN_ID,
  AVAX_CHAIN_ID,
  POLYGON_CHAIN_ID,
  FANTOM_CHAIN_ID,
} = require('../../constant');

const INIT_DELAY = 10 * 1000;
const REFRESH_INTERVAL = 15 * 60 * 1000;

let tvl = {};

const chains = [
  {
    chainId: BSC_CHAIN_ID,
    vaultsEndpoint:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/vault/bsc_pools.js',
  },
  {
    chainId: POLYGON_CHAIN_ID,
    vaultsEndpoint:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/vault/polygon_pools.js',
  },
  {
    chainId: FANTOM_CHAIN_ID,
    vaultsEndpoint:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/vault/fantom_pools.js',
  },
  {
    chainId: HECO_CHAIN_ID,
    vaultsEndpoint:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/vault/heco_pools.js',
  },
  {
    chainId: AVAX_CHAIN_ID,
    vaultsEndpoint:
      'https://raw.githubusercontent.com/beefyfinance/beefy-app/prod/src/features/configure/vault/avalanche_pools.js',
  },
];

const getTvl = () => {
  return tvl;
};

const updateTvl = async () => {
  console.log('> updating tvl');

  const aprs = getAprs();

  if (isEmpty(aprs)){
    setTimeout(updateTvl, INIT_DELAY);
  } else {
    try {
      let promises = [];

      chains.forEach(chain => promises.push(getChainTvl(chain)));

      const results = await Promise.allSettled(promises);

      for (const result of results) {
        if (result.status !== 'fulfilled') {
          console.warn('getChainTvl error', result.reason);
          continue;
        }
        tvl = { ...tvl, ...result.value };
      }

      console.log('> updated tvl');
    } catch (err) {
      console.error('> tvl initialization failed', err);
    }

    setTimeout(updateTvl, REFRESH_INTERVAL);
  }
};

setTimeout(updateTvl, INIT_DELAY);

module.exports = getTvl;
