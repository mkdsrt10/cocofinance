const addresses = require('../config/constants/contracts');
const tokens = require('../config/constants/tokens')

 const getAddress = (address) => {
  const mainNetChainId = 56
  return address[mainNetChainId]
}

 const getMasterChefAddress = () => {
  return getAddress(addresses.masterChef)
}
 const getMulticallAddress = () => {
  return getAddress(addresses.multiCall)
}
 const getWbnbAddress = () => {
  return getAddress(tokens.wbnb.address)
}
 const getPancakeProfileAddress = () => {
  return getAddress(addresses.pancakeProfile)
}
 const getPancakeRabbitsAddress = () => {
  return getAddress(addresses.pancakeRabbits)
}
 const getBunnyFactoryAddress = () => {
  return getAddress(addresses.bunnyFactory)
}
 const getPointCenterIfoAddress = () => {
  return getAddress(addresses.pointCenterIfo)
}
 const getBunnySpecialAddress = () => {
  return getAddress(addresses.bunnySpecial)
}
 const getTradingCompetitionAddress = () => {
  return getAddress(addresses.tradingCompetition)
}
 const getChainlinkOracleAddress = () => {
  return getAddress(addresses.chainlinkOracle)
}


module.exports = {getAddress, getBunnyFactoryAddress, getBunnySpecialAddress, getChainlinkOracleAddress, getMasterChefAddress,
getMulticallAddress, getPancakeProfileAddress, getPancakeRabbitsAddress, getPointCenterIfoAddress, getTradingCompetitionAddress, getWbnbAddress}
