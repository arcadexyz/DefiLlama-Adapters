const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { nullAddress, treasuryExports } = require("../helper/treasury");

const aragonTreasury = "0xfb633F47A84a1450EE0413f2C32dC1772CcAea3e";
const ANT = "0xa117000000f279D81A1D3cc75430fAA017FA5A2e";
const ANT_ETH_LP = "0x9dEF9511fEc79f83AFCBFfe4776B1D817DC775aE"


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC,//USDC
        ADDRESS_CONSTANTS.DAI,//DAI
        ADDRESS_CONSTANTS.WETH,//WETH
        '0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984',//UNI
        '0xC18360217D8F7Ab5e7c516566761Ea12Ce7F9D72',//ENS
        '0x4Fabb145d64652a948d72533023f6E7A623C7C53',//BUSD
        '0xc944E90C64B2c07662A292be6244BDf05Cda44a7',//GRT
        '0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c',//yyDAI+yUSDC+yUSDT+yTUSD
        '0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F',//GTC
        '0xdd974D5C2e2928deA5F71b9825b8b646686BD200',//KNC
        '0x8f8221aFbB33998d8584A2B05749bA73c37a938a',//REQ
        '0x24cCeDEBF841544C9e6a62Af4E8c2fA6e5a46FdE',//BlueSparrow
        '0x232FB065D9d24c34708eeDbF03724f2e95ABE768',//SHEESHA
        '0xaC9Bb427953aC7FDDC562ADcA86CF42D988047Fd',//STT
     ],
    owners: [aragonTreasury],
    ownTokens: [ANT, ANT_ETH_LP],
  },
})