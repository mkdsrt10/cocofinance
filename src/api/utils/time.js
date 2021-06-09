function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

module.exports = {
  sleep, isEmpty
};
