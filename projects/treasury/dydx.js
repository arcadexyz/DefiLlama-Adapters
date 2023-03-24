const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const {  nullAddress,treasuryExports } = require("../helper/treasury");

const dydxTreasury = "0xE710CEd57456D3A16152c32835B5FB4E72D9eA5b";

const DYDX = "0x92d6c1e31e14520e676a687f0a93788b716beff5";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDT,//TETHER
     ],
    owners: [dydxTreasury],
    ownTokens: [DYDX],
  },
})