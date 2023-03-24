const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { nullAddress, treasuryExports } = require("../helper/treasury");

const oneInchTreasury = "0x7951c7ef839e26F63DA87a42C9a87986507f1c07";
const ONE_INCH = "0x111111111117dC0aa78b770fA6A738034120C302";

module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC,//USDC
        ADDRESS_CONSTANTS.WETH,//WETH
        ADDRESS_CONSTANTS.USDT,//USDT
        ADDRESS_CONSTANTS.DAI,//DAI
        '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',//WBTC
     ],
    owners: [oneInchTreasury],
    ownTokens: [ONE_INCH]
  },
})