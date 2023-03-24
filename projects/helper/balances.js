const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const BigNumber = require("bignumber.js");

const usdtAddress = ADDRESS_CONSTANTS.USDT;

const toUSDT = (value, times = 1e6) => BigNumber(value).times(times).toFixed(0);

const toUSDTBalances = (value, times = 1e6) => ({
  [usdtAddress]: toUSDT(value, times),
});

module.exports = {
  toUSDT,
  toUSDTBalances,
  usdtAddress,
};
