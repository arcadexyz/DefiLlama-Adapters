const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const {  nullAddress,treasuryExports } = require("../helper/treasury");

const rarTreasury = "0xFDfF6b56CcE39482032b27140252FF4F16432785";
const rarTreasury1 = "0x1cf0dF2A5A20Cd61d68d4489eEBbf85b8d39e18a";

const RARI = "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC,//USDC
        ADDRESS_CONSTANTS.DAI,//DAI
        '0x028171bCA77440897B824Ca71D1c56caC55b68A3',//aDAI
        ADDRESS_CONSTANTS.WETH,//WETH
        ADDRESS_CONSTANTS.USDT,//USDT
     ],
    owners: [rarTreasury, rarTreasury1],
    ownTokens: [RARI],
  },
})