const bscPools = [
  {
    id: 'dopple-dop-lp',
    logo: 'Beefy/DOPPLE-DOP-LP.svg',
    name: 'BUSD/USDT/USDC/DAI',
    token: 'BUSD/USDT/USDC/DAI',
    tokenDescription: 'Dopple',
    tokenAddress: '0x9116F04092828390799514Bac9986529d70c3791',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    poolId: 1,
    swap: "0x5162f992EDF7101637446ecCcD5943A9dcC63A8A",
    earnedToken: 'mooDoppleDopLP',
    earnedTokenAddress: '0x8464365600d6A1b86A7f7c80DCD63AFa861069dB',
    earnContractAddress: '0x8464365600d6A1b86A7f7c80DCD63AFa861069dB',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'dopple-dop-lp',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    assets: ['BUSD', 'USDT', 'USDC', 'DAI'],
    platform: 'Dopple',
    aggregatedFrom:"Beefy",
    callFee: 0.5,
    addLiquidityUrl: 'https://dopple.finance/Deposit/dop-lps',
  },
  {
    id: 'dopple-ust-lp',
    logo: 'Beefy/DOPPLE-UST-LP.png',
    name: 'UST/BUSD/USDT',
    token: 'UST/BUSD/USDT',
    tokenDescription: 'Dopple',
    tokenAddress: '0x7Edcdc8cD062948CE9A9bc38c477E6aa244dD545',
    tokenDecimals: 18,
    poolId: 4,
    swap: "0x830e287ac5947B1C0DA865dfB3Afd7CdF7900464",
    tokenDescriptionUrl: '#',
    earnedToken: 'mooDoppleUstLP',
    earnedTokenAddress: '0x4Af8ED7c9f5D0C672F71a82c827FC3A02485791F',
    earnContractAddress: '0x4Af8ED7c9f5D0C672F71a82c827FC3A02485791F',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'dopple-ust-lp',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    assets: ['BUSD', 'USDT', 'UST'],
    platform: 'Dopple',
    aggregatedFrom:"Beefy",
    callFee: 0.5,
    addLiquidityUrl: 'https://dopple.finance/Deposit/ust-pools-lps',
  },
  {
    id: 'dopple-dolly-lp',
    logo: 'Beefy/DOPPLE-DOLLY-LP.svg',
    name: 'DOLLY/BUSD/USDT',
    token: 'DOLLY/BUSD/USDT',
    tokenDescription: 'Dopple',
    tokenAddress: '0xAA5509Ce0ecEA324bff504A46Fc61EB75Cb68B0c',
    poolId: 12,
    swap: "0x61f864a7dFE66Cc818a4Fd0baabe845323D70454",
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooDoppleDollyLP',
    earnedTokenAddress: '0xCcb7A9E2e4F08407065f51d32C365304fbF2FD01',
    earnContractAddress: '0xCcb7A9E2e4F08407065f51d32C365304fbF2FD01',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'dopple-dolly-lp',
    oraclePrice: 0,
    depositsPaused: false,
    status: 'active',
    assets: ['DOLLY', 'USDT', 'BUSD'],
    platform: 'Dopple',
    aggregatedFrom:"Beefy",
    callFee: 0.5,
    addLiquidityUrl: 'https://dopple.finance/Deposit/dolly-lps',
  },
  {
    id: 'belt-4belt',
    logo: 'Beefy/BELT-VENUSBLP.png',
    name: 'BUSD/USDT/USDC/DAI',
    token: '4BELT LP',
    tokenDescription: 'Belt (Auto)',
    tokenAddress: '0x9cb73F20164e399958261c289Eb5F9846f4D1404',
    tokenDecimals: 18,
    tokenDescriptionUrl: '#',
    earnedToken: 'mooBelt4Belt',
    earnedTokenAddress: '0xc1fcf50ccaCd1583BD9d3b41657056878C94e592',
    earnContractAddress: '0xc1fcf50ccaCd1583BD9d3b41657056878C94e592',
    pricePerFullShare: 1,
    tvl: 0,
    oracle: 'lps',
    oracleId: 'belt-4belt',
    oraclePrice: 0,
    depositsPaused: true,
    status: 'active',
    platform: 'Belt',
    aggregatedFrom:"Beefy",
    assets: ['USDT', 'BUSD', 'USDC', 'DAI', '4BELT'],
    callFee: 0.5,
    addLiquidityUrl: 'https://belt.fi/',
  },
  {
    id: 'usdt-busd-lp',
    logo: 'pancake/usdt-busd.svg',
    name: 'USDT-BUSD LP',
    tokenDescription: 'Pancakeswap Stable',
    tokenAddress: {
      97: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenAddress: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      97: '',
    },
    pid: 258,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00',
    },
    tvl: 0,
    status: 'active',
    platform: 'Pancake',
    aggregatedFrom:"Pancake",
    assets: ['USDT', 'BUSD', "CAKE"],
    callFee: 0,
    addLiquidityUrl: 'https://exchange.pancakeswap.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x55d398326f99059ff775485246999027b3197955',
    pairInfo: "https://pancakeswap.info/pair/0x7EFaEf62fDdCCa950418312c6C91Aef321375A00"
  },
  {
    id: 'usdc-busd-lp',
    logo: 'pancake/usdc-busd.svg',
    name: 'USDC-BUSD LP',
    tokenDescription: 'Pancakeswap Stable',
    quoteTokenAddress: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      97: '',
    },
    tokenAddress: {
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
      97: '',
    },
    pid: 283,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
    },
    tvl: 0,
    status: 'active',
    platform: 'Pancake',
    aggregatedFrom:"Pancake",
    assets: ['USDC', 'BUSD', "CAKE"],
    callFee: 0,
    addLiquidityUrl: 'https://exchange.pancakeswap.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    pairInfo: "https://pancakeswap.info/pair/0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1"
  },
  {
    id: 'dai-busd-lp',
    logo: 'pancake/dai-busd.svg',
    name: 'DAI-BUSD LP',
    tokenDescription: 'Pancakeswap Stable',
    quoteTokenAddress: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      97: '',
    },
    tokenAddress: {
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
      97: '',
    },
    pid: 282,
    lpSymbol: 'DAI-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489',
    },
    tvl: 0,
    status: 'active',
    platform: 'Pancake',
    aggregatedFrom:"Pancake",
    assets: ['DAI', 'BUSD', "CAKE"],
    callFee: 0,
    addLiquidityUrl: 'https://exchange.pancakeswap.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    pairInfo: "https://pancakeswap.info/pair/0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489"
  },
  {
    id: 'ust-busd-lp',
    logo: 'pancake/ust-busd.svg',
    name: 'UST-BUSD LP',
    tokenDescription: 'Pancakeswap Stable',
    quoteTokenAddress: {
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
      97: '',
    },
    tokenAddress: {
      56: '0x23396cf899ca06c4472205fc903bdb4de249d6fc',
      97: '',
    },
    pid: 293,
    lpSymbol: 'UST-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x05faf555522Fa3F93959F86B41A3808666093210',
    },
    tvl: 0,
    status: 'active',
    platform: 'Pancake',
    aggregatedFrom:"Pancake",
    assets: ['UST', 'BUSD', "CAKE"],
    callFee: 0,
    addLiquidityUrl: 'https://exchange.pancakeswap.finance/#/add/0xe9e7cea3dedca5984780bafc599bd69add087d56/0x23396cf899ca06c4472205fc903bdb4de249d6fc',
    pairInfo: "https://pancakeswap.info/pair/0x05faf555522Fa3F93959F86B41A3808666093210"
  },
];

module.exports = {bscPools}
