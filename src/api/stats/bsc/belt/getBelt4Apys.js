const axios = require('axios');

const { incorporateBifiFee } = require('../../../utils/incorporateBifiFee');
const { BASE_HPY } = require('../../../../constant');

const getBelt4Apys = async () => {
  const poolStat = await fetchBelt4Stats();

  const apr = Number(poolStat['APR']);
  const aprAuto = Number(poolStat['APR_AUTO']);
  const apy = incorporateBifiFee(apr + aprAuto * 0.955, BASE_HPY, 1);

  return { 'belt-4belt': apy };
};

const fetchBelt4Stats = async () => {
  try {
    const response = await axios.get('https://static.autofarm.network/bsc/farm_data.json');
    //341 id Belt4 Auto farm data. We take this data (i.e. APR for Belt & APR_Auto and then on top of these charge BIFI fee and give the final result)
    return response.data.pools[341];
  } catch (err) {
    console.error(err);
    return {};
  }
};

module.exports = getBelt4Apys;
