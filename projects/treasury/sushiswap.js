const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { nullAddress, treasuryExports } = require("../helper/treasury");

const sushiSwapTreasury = "0xe94B5EEC1fA96CEecbD33EF5Baa8d00E4493F4f3";
const SUSHI = "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC,//USDC
     ],
    owners: [sushiSwapTreasury],
    ownTokens: [SUSHI],
  },
})
