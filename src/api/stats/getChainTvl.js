const BigNumber = require('bignumber.js');
const { MultiCall } = require('eth-multicall');
const { web3Factory, multicallAddress } = require('../utils/web3');
const fetchPrice = require('../utils/fetchPrice');

const BeefyVaultV6ABI = require('../abis/BeefyVaultV6.json');
const getAprs = require("./getAprs");

const {AVAX_CHAIN_ID, BSC_CHAIN_ID, FANTOM_CHAIN_ID, HECO_CHAIN_ID, POLYGON_CHAIN_ID} = require("../../constant");
const {bscPools} = require( "../vault/bsc_pools");
const {fantomPools} = require( "../vault/fantom_pools");
const {avalanchePools} = require( "../vault/avalanche_pools");
const {hecoPools} = require( "../vault/heco_pools");
const {polygonPools} = require("../vault/polygon_pools");

function getVaults(chainId){
  switch (chainId){
    case BSC_CHAIN_ID:
      return bscPools;
    case POLYGON_CHAIN_ID:
      return polygonPools;
    case HECO_CHAIN_ID:
      return hecoPools;
    case AVAX_CHAIN_ID:
      return avalanchePools;
    case FANTOM_CHAIN_ID:
      return fantomPools
  }
  return []
}

const getChainTvl = async chain => {
  const chainId = chain.chainId;
  const vaults = await getVaults(chain.chainId);
  const vaultsBifi = vaults.filter(vault => vault.aggregatedFrom === "Beefy")
  const vaultsPancake = vaults.filter(vault => vault.aggregatedFrom === "Pancake")
  let tvls = { [chainId]: {} };

  const vaultBalances = await getVaultBalances(chainId, vaultsBifi);

  const aprs = getAprs();

  for (let i = 0; i < vaultsPancake.length; i++) {
    const vault = vaultsPancake[i];
    const apr = aprs[vault.id];
    tvls[chainId] = { ...tvls[chainId], [vault.id]: {...apr} };
  }

  for (let i = 0; i < vaultsBifi.length; i++) {
    const vault = vaultsBifi[i];
    const vaultBal = vaultBalances[i];
    const tokenPrice = await fetchPrice({ oracle: vault.oracle, id: vault.oracleId });
    const tvl = vaultBal.times(tokenPrice).dividedBy(10 ** (vault.tokenDecimals ?? 18));

    const apr = aprs[vault.id]

    let item =  {tvl: 0, apr: apr};
    if (!tvl.isNaN()) {
      item = { tvl: Number(tvl.toFixed(2)), apr: apr}  ;
    }

    tvls[chainId] = { ...tvls[chainId], [vault.id]: {...vault, ...item} };
  }
  return tvls;
};

const getVaultBalances = async (chainId, vaults) => {
  const web3 = web3Factory(chainId);
  const multicall = new MultiCall(web3, multicallAddress(chainId));
  const balanceCalls = [];
  vaults.forEach(vault => {
    const vaultContract = new web3.eth.Contract(BeefyVaultV6ABI, vault.earnedTokenAddress);
    balanceCalls.push({
      balance: vaultContract.methods.balance(),
    });
  });
  const res = await multicall.all([balanceCalls]);
  return res[0].map(v => new BigNumber(v.balance));
};

module.exports = getChainTvl;
