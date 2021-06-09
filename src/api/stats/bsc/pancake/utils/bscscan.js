const { BASE_BSC_SCAN_URL } = require( 'src/constant');

 const getBscScanAddressUrl = (address) => {
  return `${BASE_BSC_SCAN_URL}/address/${address}`
}

 const getBscScanTransactionUrl = (transactionHash) => {
  return `${BASE_BSC_SCAN_URL}/tx/${transactionHash}`
}

 const getBscScanBlockNumberUrl = (block) => {
  return `${BASE_BSC_SCAN_URL}/block/${block}`
}

 const getBscScanBlockCountdownUrl = (block) => {
  return `${BASE_BSC_SCAN_URL}/block/countdown/${block}`
}

module.exports = {getBscScanAddressUrl,getBscScanTransactionUrl,getBscScanBlockNumberUrl,getBscScanBlockCountdownUrl }
