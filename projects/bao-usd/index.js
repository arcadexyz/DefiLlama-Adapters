const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { sumTokensExport, } = require("../helper/unwrapLPs");

module.exports = {
  ethereum: {
    tvl: sumTokensExport({ tokens: [ADDRESS_CONSTANTS.DAI], owner: '0x720282bb7e721634c95f0933636de3171dc405de'}),
  }
};