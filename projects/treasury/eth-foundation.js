const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { nullAddress, treasuryExports } = require("../helper/treasury");

const treasury = "0xde0b295669a9fd93d5f28d9ec85e40f4cb697bae";
const WETH = ADDRESS_CONSTANTS.WETH;
const ETH = "0x0000000000000000000000000000000000000000";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC, //USDC
        "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07", //OMG
        "0xB8c77482e45F1F44dE1745F52C74426C631bDD52", //BNB

     ],
    owners: [treasury],
    ownTokens: [ETH, WETH],
  },
})