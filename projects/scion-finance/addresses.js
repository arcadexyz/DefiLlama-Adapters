const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const USDC = ADDRESS_CONSTANTS.USDC;

module.exports = {
  moonriver: [
    {
      ADDRESS: "0xc24D43093b44b7A9657571DDB79FEdf014eaef7d",
      UNDERLYING: USDC,
    },
  ],
  fantom: [
    {
      ADDRESS: "0x3938411fd77A5458721aF6B080b51008394568ef",
      UNDERLYING: USDC,
    },
  ],
};
