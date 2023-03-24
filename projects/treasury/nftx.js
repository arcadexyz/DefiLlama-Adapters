const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { nullAddress, treasuryExports } = require("../helper/treasury");

const nftxDao = "0x40D73Df4F99bae688CE3C23a01022224FE16C7b2";

module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC,//USDC
     ],
    owners: [nftxDao]
  },
})