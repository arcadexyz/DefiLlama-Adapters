const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const {  nullAddress,treasuryExports } = require("../helper/treasury");

const dodoTreasury = "0xAB21016BD4127638b8c555e36636449b33dF1C38";

const DODO = "0x43dfc4159d86f3a37a5a4b3d4580b888ad7d4ddd";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDT,//TETHER
        ADDRESS_CONSTANTS.USDC,//USDC
     ],
    owners: [dodoTreasury],
    ownTokens: [DODO],
  },
})