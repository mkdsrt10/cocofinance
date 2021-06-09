const farmsConfig = require('./farms')
const {fetchFarmsPublicDataAsync, nonArchivedFarms} = require( './farms')

const getPancakeFarmsData = async (includeArchive = false) => {
  const farmsToFetch = includeArchive ? farmsConfig : nonArchivedFarms
  const pids = farmsToFetch.map((farmToFetch) => farmToFetch.pid)
  const farmsData = await fetchFarmsPublicDataAsync(pids)
  return farmsData
}

module.exports = { getPancakeFarmsData}
