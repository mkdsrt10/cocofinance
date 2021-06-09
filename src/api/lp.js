const {getDataLp} = require("./stats/getAmmPrices");

async function lp(ctx) {
    try {
        const lp = await getDataLp();
        ctx.status = 200;
        ctx.body = { ...lp };
    } catch (err) {
        console.error(err);
        ctx.status = 500;
    }
}

module.exports = {
    lp,
};
