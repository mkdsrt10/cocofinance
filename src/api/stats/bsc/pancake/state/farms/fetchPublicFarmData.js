const BigNumber = require( 'bignumber.js')
const masterchefABI = require( '../../config/abi/masterchef.json')
const erc20 = require( '../../config/abi/erc20.json')
const { getAddress, getMasterChefAddress } = require( '../../utils/addressHelpers')
const { BIG_TEN, BIG_ZERO } = require( '../../utils/bigNumber')
const {multicall} = require('../../utils/multicall')


const fetchFarm = async (farm) => {
  const { pid, lpAddresses, tokenAddress, quoteTokenAddress } = farm
  const lpAddress = getAddress(lpAddresses)
  const farmFetch = async () => {
    const calls = [
      // Balance of token in the LP contract
      {
        address: getAddress(tokenAddress),
        name: 'balanceOf',
        params: [lpAddress],
      },
      // Balance of quote token on LP contract
      {
        address: getAddress(quoteTokenAddress),
        name: 'balanceOf',
        params: [lpAddress],
      },
      // Balance of LP tokens in the master chef contract
      {
        address: lpAddress,
        name: 'balanceOf',
        params: [getMasterChefAddress()],
      },
      // Total supply of LP tokens
      {
        address: lpAddress,
        name: 'totalSupply',
      },
      // Token decimals
      {
        address: getAddress(tokenAddress),
        name: 'decimals',
      },
      // Quote token decimals
      {
        address: getAddress(quoteTokenAddress),
        name: 'decimals',
      },
    ]

    const [tokenBalanceLP, quoteTokenBalanceLP, lpTokenBalanceMC, lpTotalSupply, tokenDecimals, quoteTokenDecimals] =
      await multicall(erc20, calls)

    // Ratio in % of LP tokens that are staked in the MC, vs the total number in circulation
    const lpTokenRatio = new BigNumber(lpTokenBalanceMC).div(new BigNumber(lpTotalSupply))

    // Raw amount of token in the LP, including those not staked
    const tokenAmountTotal = new BigNumber(tokenBalanceLP).div(BIG_TEN.pow(tokenDecimals))
    const quoteTokenAmountTotal = new BigNumber(quoteTokenBalanceLP).div(BIG_TEN.pow(quoteTokenDecimals))

    // Amount of token in the LP that are staked in the MC (i.e amount of token * lp ratio)
    const tokenAmountMc = tokenAmountTotal.times(lpTokenRatio)
    const quoteTokenAmountMc = quoteTokenAmountTotal.times(lpTokenRatio)

    // Total staked in LP, in quote token value
    const lpTotalInQuoteToken = quoteTokenAmountMc.times(new BigNumber(2))

    // Only make masterchef calls if farm has pid
    const [info, totalAllocPoint] =
      pid || pid === 0
        ? await multicall(masterchefABI, [
            {
              address: getMasterChefAddress(),
              name: 'poolInfo',
              params: [pid],
            },
            {
              address: getMasterChefAddress(),
              name: 'totalAllocPoint',
            },
          ])
        : [null, null]

    const allocPoint = info ? new BigNumber(info.allocPoint?._hex) : BIG_ZERO
    const poolWeight = totalAllocPoint ? allocPoint.div(new BigNumber(totalAllocPoint)) : BIG_ZERO

    return {
      tokenAmountMc: tokenAmountMc.toJSON(),
      quoteTokenAmountMc: quoteTokenAmountMc.toJSON(),
      tokenAmountTotal: tokenAmountTotal.toJSON(),
      quoteTokenAmountTotal: quoteTokenAmountTotal.toJSON(),
      lpTotalSupply: new BigNumber(lpTotalSupply).toJSON(),
      lpTotalInQuoteToken: lpTotalInQuoteToken.toJSON(),
      tokenPriceVsQuote: quoteTokenAmountTotal.div(tokenAmountTotal).toJSON(),
      poolWeight: poolWeight.toJSON(),
      multiplier: `${allocPoint.div(100).toString()}X`,
    }
  }

  // In some browsers promise above gets stuck that causes fetchFarms to not proceed.
  const timeout = new Promise((resolve) => {
    const id = setTimeout(() => {
      clearTimeout(id)
      resolve({})
    }, 5000)
  })

  return Promise.race([timeout, farmFetch()])
}

module.exports = {fetchFarm}
