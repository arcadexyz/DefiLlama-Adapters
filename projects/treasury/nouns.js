const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0x0BC3807Ec262cB779b38D65b38158acC3bfedE10";

module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC, //USDC
        "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",//stETH
     ],
    owners: [treasury,],
  },
})