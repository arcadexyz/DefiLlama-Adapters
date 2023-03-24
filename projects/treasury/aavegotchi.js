const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { nullAddress, treasuryExports } = require("../helper/treasury");

const aavegotchiTreasury2 = "0xFFE6280ae4E864D9aF836B562359FD828EcE8020";
const GHST = "0x3F382DbD960E3a9bbCeaE22651E88158d2791550";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.DAI//DAI
     ],
    owners: [aavegotchiTreasury2],
    ownTokens: [GHST],
  },
})