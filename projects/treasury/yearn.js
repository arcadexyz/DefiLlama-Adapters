const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const {  nullAddress,treasuryExports } = require("../helper/treasury");

const yearnTreasury = "0x93a62da5a14c80f265dabc077fcee437b1a0efde";
const yearnTreasury1 = "0xFEB4acf3df3cDEA7399794D0869ef76A6EfAff52";

const YEARN = "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC,//USDC
        ADDRESS_CONSTANTS.DAI,//DAI
        '0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490',//3crv
        ADDRESS_CONSTANTS.WETH,//WETH
        ADDRESS_CONSTANTS.USDT,//USDT
        '0xD533a949740bb3306d119CC777fa900bA034cd52',//CRV
        '0xba100000625a3754423978a60c9317c58a424e3D',//BAL
        '0x31429d1856aD1377A8A0079410B297e1a9e214c2',//ANGLE
        '0x57Ab1ec28D129707052df4dF418D58a2D46d5f51',//sUSD
        '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',//WBTC
     ],
    owners: [yearnTreasury,yearnTreasury1],
    ownTokens: [YEARN],
  },
})