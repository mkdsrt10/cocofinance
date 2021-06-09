const getDoppleApys = require('./dopple/getDoppleApys');
const getBelt4Apys = require("./belt/getBelt4Apys");
const {getPancakeFarmsData} = require("./pancake/state/hooks");

const getApys = [
  getDoppleApys,
  getBelt4Apys,
  getPancakeFarmsData
];
// ^^ APYs are sorted alphabetically

const getBSCApys = async () => {
  let apys = {};

  let promises = [];
  getApys.forEach(getApy => {
    promises.push(getApy())
  });
  const values = await Promise.all(promises);

  for (const item of values) {
    apys = { ...apys, ...item };
  }

  return apys;
};

module.exports = { getBSCApys };
