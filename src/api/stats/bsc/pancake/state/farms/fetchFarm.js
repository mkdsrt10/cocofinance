const BigNumber = require("bignumber.js");
const {getFarmApr} = require("../../utils/apr");
const {fetchFarm: fetchPublicFarmData} = require('./fetchPublicFarmData')

const fetchFarm = async (farm, cakePrice) => {
  const farmPublicData = await fetchPublicFarmData(farm)
  const totalLiquidity = new BigNumber(farmPublicData.lpTotalInQuoteToken)
  const apr = getFarmApr(new BigNumber(farmPublicData.poolWeight), cakePrice, totalLiquidity)
  return { ...farm, apr:apr/100, tvl: totalLiquidity }
}

module.exports = fetchFarm
