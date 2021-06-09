const {bscPools: farmsConfig} = require( '../../../../../vault/bsc_pools')
const isArchivedPid = require( '../../utils/farmHelpers')
const fetchFarms = require( './fetchFarms')

const nonArchivedFarms = farmsConfig.filter(({ pid }) => !isArchivedPid(pid))

const fetchFarmsPublicDataAsync = async (pids) => {
    const farmsToFetch = farmsConfig.filter((farmConfig) => farmConfig.platform === "Pancake")

    // Add price helper farms
    // const farmsWithPriceHelpers = farmsToFetch.concat(priceHelperLpsConfig)

    return await fetchFarms(farmsToFetch)
}

module.exports = {fetchFarmsPublicDataAsync, nonArchivedFarms, farmsConfig}
