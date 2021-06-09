const fetchFarm = require( './fetchFarm')
const BigNumber = require("bignumber.js");
const {getAmmTokensPrices} = require("../../../../getAmmPrices");

const fetchFarms = async (farmsToFetch) => {
  const tokenPrice = await getAmmTokensPrices()
  const cakePrice = tokenPrice["CAKE"]
    let promises = [];
  // const data = await Promise.all(
    farmsToFetch.forEach( (farmConfig) => {
      promises.push((async (farmConfig) => {
          const farmApr = await fetchFarm(farmConfig, new BigNumber(cakePrice))
          return {[farmConfig.id]:farmApr}
      })(farmConfig))
    })
    const values = await Promise.all(promises);
    let aprs = {}
    for (const item of values) {
        aprs = { ...aprs, ...item };
    }
  // )
  return aprs
}

module.exports = fetchFarms
