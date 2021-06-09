const BigNumber = require('bignumber.js/bignumber')

const APP_NAME = "Coco.finance"

const API_BASE_URL = process.env.API_BASE_URL || 'http://localhost:3000';


BigNumber.config({
    EXPONENTIAL_AT: 1000,
    DECIMAL_PLACES: 80,
})

const BSC_BLOCK_TIME = 3

// CAKE_PER_BLOCK details
// 40 CAKE is minted per block
// 20 CAKE per block is sent to Burn pool (A farm just for burning cake)
// 10 CAKE per block goes to CAKE syrup pool
// 10 CAKE per block goes to Yield farms and lottery
// CAKE_PER_BLOCK in config/index.ts = 40 as we only change the amount sent to the burn pool which is effectively a farm.
// CAKE/Block in src/views/Home/components/CakeStats.tsx = 20 (40 - Amount sent to burn pool)

const CAKE_PER_BLOCK = new BigNumber(40)
const BLOCKS_PER_YEAR = new BigNumber((60 / BSC_BLOCK_TIME) * 60 * 24 * 365) // 10512000
const CAKE_PER_YEAR = CAKE_PER_BLOCK.times(BLOCKS_PER_YEAR)
const BASE_EXCHANGE_URL = 'https://exchange.pancakeswap.finance'
const BASE_ADD_LIQUIDITY_URL = `${BASE_EXCHANGE_URL}/#/add`
const BASE_BSC_SCAN_URL = 'https://bscscan.com'



const BASE_HPY = 2190;
const HOURLY_HPY = 8760;
const DAILY_HPY = 365;
const WEEKLY_HPY = 52;

const FORTUBE_REQ_TOKENS = 'https://bsc.for.tube/api/v2/bank_tokens';
const FORTUBE_REQ_MARKETS = 'https://bsc.for.tube/api/v1/bank/markets?mode=extended';
const FORTUBE_API_TOKEN = process.env.FORTUBE_API_TOKEN;

const MAINNET_BSC_RPC_ENDPOINTS = [
    'https://bsc-dataseed.binance.org',
    'https://bsc-dataseed1.defibit.io',
    'https://bsc-dataseed1.ninicoin.io',
    'https://bsc-dataseed2.defibit.io',
    'https://bsc-dataseed3.defibit.io',
    'https://bsc-dataseed4.defibit.io',
    'https://bsc-dataseed2.ninicoin.io',
    'https://bsc-dataseed3.ninicoin.io',
    'https://bsc-dataseed4.ninicoin.io',
    'https://bsc-dataseed1.binance.org',
    'https://bsc-dataseed2.binance.org',
    'https://bsc-dataseed3.binance.org',
    'https://bsc-dataseed4.binance.org',
];

const CUSTOM_BSC_RPC_ENDPOINTS = [process.env.BSC_RPC].filter(item => item);

const BSC_RPC_ENDPOINTS = CUSTOM_BSC_RPC_ENDPOINTS.length
    ? CUSTOM_BSC_RPC_ENDPOINTS
    : MAINNET_BSC_RPC_ENDPOINTS;

const BSC_RPC = BSC_RPC_ENDPOINTS[0];
const HECO_RPC = process.env.HECO_RPC || 'https://http-mainnet.hecochain.com';
const AVAX_RPC = process.env.AVAX_RPC || 'https://api.avax.network/ext/bc/C/rpc';
const POLYGON_RPC = process.env.POLYGON_RPC || 'https://rpc-mainnet.maticvigil.com/';
const FANTOM_RPC = process.env.FANTOM_RPC || 'https://rpc.ftm.tools';

const BSC_CHAIN_ID = 56;
const HECO_CHAIN_ID = 128;
const POLYGON_CHAIN_ID = 137;
const AVAX_CHAIN_ID = 43114;
const FANTOM_CHAIN_ID = 250;

const MULTICHAIN_RPC = {
    56: BSC_RPC,
    128: HECO_RPC,
    137: POLYGON_RPC,
    43114: AVAX_RPC,
    250: FANTOM_RPC,
};

module.exports = {
    APP_NAME,
    API_BASE_URL,
    BSC_RPC,
    BSC_RPC_ENDPOINTS,
    BSC_CHAIN_ID,
    HECO_RPC,
    HECO_CHAIN_ID,
    AVAX_RPC,
    AVAX_CHAIN_ID,
    POLYGON_RPC,
    POLYGON_CHAIN_ID,
    FANTOM_RPC,
    FANTOM_CHAIN_ID,
    BASE_HPY,
    HOURLY_HPY,
    DAILY_HPY,
    WEEKLY_HPY,
    FORTUBE_REQ_TOKENS,
    FORTUBE_REQ_MARKETS,
    FORTUBE_API_TOKEN,
    MULTICHAIN_RPC,
    BASE_BSC_SCAN_URL,
    CAKE_PER_YEAR,
    CAKE_PER_BLOCK,
    BLOCKS_PER_YEAR,
    BASE_EXCHANGE_URL,
    BASE_ADD_LIQUIDITY_URL
};
