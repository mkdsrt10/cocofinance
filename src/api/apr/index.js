const getApr = require('../stats/getAprs');

async function Apr(ctx) {
  try {
    const vaultApr = await getApr();
    ctx.status = 200;
    ctx.body = { ...vaultApr };
  } catch (err) {
    console.error(err);
    ctx.status = 500;
  }
}

module.exports = {
  Apr,
};
