const { CAKE_PER_YEAR } = require('../../../../../constant')

/**
 * Get farm APR value in %
 * @param poolWeight allocationPoint / totalAllocationPoint
 * @param cakePriceUsd Cake price in USD
 * @param poolLiquidityUsd Total pool liquidity in USD
 * @returns
 */
 const getFarmApr = (poolWeight, cakePriceUsd, poolLiquidityUsd) => {
  const yearlyCakeRewardAllocation = CAKE_PER_YEAR.times(poolWeight)
  const apr = yearlyCakeRewardAllocation.times(cakePriceUsd).div(poolLiquidityUsd).times(100)
  return apr.isNaN() || !apr.isFinite() ? null : apr.toNumber()
}

module.exports = {getFarmApr}
