const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const {  nullAddress,treasuryExports } = require("../helper/treasury");

const bitdaoTreasury1 = "0x78605Df79524164911C144801f41e9811B7DB73D";

const BIT = "0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC,//USDC
        ADDRESS_CONSTANTS.DAI,//DAI
        ADDRESS_CONSTANTS.WETH,//WETH
        ADDRESS_CONSTANTS.USDT,//USDT
        '0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9',//FTT
        '0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272',//xSUSHI
     ],
    owners: [bitdaoTreasury1],
    ownTokens: [BIT],
  },
})