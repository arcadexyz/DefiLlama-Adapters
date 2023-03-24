const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0xcAD001c30E96765aC90307669d578219D4fb1DCe";
const eul = "0xd9Fcd98c322942075A5C3860693e9f4f03AAE07b";

module.exports = treasuryExports({
  ethereum: {
    tokens: [
      ADDRESS_CONSTANTS.USDC, // USDC
      ADDRESS_CONSTANTS.USDT, // USDT
      "0xc944E90C64B2c07662A292be6244BDf05Cda44a7", // GRT
    ],
    owners: [treasury],
    ownTokens: [eul],
  },
});
