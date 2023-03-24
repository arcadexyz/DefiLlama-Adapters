const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const {  nullAddress,treasuryExports } = require("../helper/treasury");

const synthetixTreasury = "0x99f4176ee457afedffcb1839c7ab7a030a5e4a92";

const SNX = "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC,//USDC
        ADDRESS_CONSTANTS.DAI,//DAI
        '0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B',//CVX
        ADDRESS_CONSTANTS.WETH,//WETH
        ADDRESS_CONSTANTS.USDT,//USDT
        '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',//sUSD
        '0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32',//LIDO
        '0x31c8EAcBFFdD875c74b94b077895Bd78CF1E64A3',//RAD
     ],
    owners: [synthetixTreasury],
    ownTokens: [SNX],
  },
})