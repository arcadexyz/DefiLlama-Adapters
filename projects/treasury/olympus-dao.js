const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const {  nullAddress,treasuryExports } = require("../helper/treasury");

const ohmTreasury = "0x9A315BdF513367C0377FB36545857d12e85813Ef";
const ohmTreasury1 = "0x31F8Cc382c9898b273eff4e0b7626a6987C846E8";

const OHM = "0x64aa3364F17a4D01c6f1751Fd97C2BD3D7e7f1D5";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC,//USDC
        ADDRESS_CONSTANTS.DAI,//DAI
        '0x028171bCA77440897B824Ca71D1c56caC55b68A3',//aDAI
        ADDRESS_CONSTANTS.WETH,//WETH
        ADDRESS_CONSTANTS.USDT,//USDT
        '0x853d955aCEf822Db058eb8505911ED77F175b99e',//FRAX
        '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',//WBTC
        '0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF',//ALCX
        '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',//FXS
        '0x0f2D719407FdBeFF09D87557AbB7232601FD9F29',//SYN
        '0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8',//agEUR
        '0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68',//INV

     ],
    owners: [ohmTreasury, ohmTreasury1],
    ownTokens: [OHM],
  },
})