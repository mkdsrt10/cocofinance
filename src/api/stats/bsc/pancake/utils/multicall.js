const { Interface } = require( '@ethersproject/abi');
const { web3Factory } = require('../../../../utils/web3');
const MultiCallAbi = require( '../config/abi/Multicall.json');
const { getMulticallAddress } = require( './addressHelpers');

// interface Call {
//   address: string // Address of the contract
//   name: string // Function name on the contract (example: balanceOf)
//   params?: any[] // Function params
// }

const multicall = async (abi, calls, chainId=56) => {
  const web3 = web3Factory(chainId)
  const multi = new web3.eth.Contract(MultiCallAbi, getMulticallAddress())
  const itf = new Interface(abi)

  const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
  const { returnData } = await multi.methods.aggregate(calldata).call()
  const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call))

  return res
}

module.exports = {multicall}
