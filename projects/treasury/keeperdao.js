const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { nullAddress, treasuryExports } = require("../helper/treasury");

const keeperDaoTreasury = "0x9a67F1940164d0318612b497E8e6038f902a00a4";
const ROOK = "0xfA5047c9c78B8877af97BDcb85Db743fD7313d4a";


module.exports = treasuryExports({
  ethereum: {
    tokens: [ 
        nullAddress,
        ADDRESS_CONSTANTS.USDC,//USDC
        '0xFe2e637202056d30016725477c5da089Ab0A043A',//sETH2
        ADDRESS_CONSTANTS.DAI,//DAI
        '0xae78736Cd615f374D3085123A210448E74Fc6393',//rETH
        '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',//stETH
        ADDRESS_CONSTANTS.WETH,//WETH
        '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',//WBTC
        '0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF',//ALCX
        '0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D'//renBTC
     ],
    owners: [keeperDaoTreasury],
    ownTokens: [ROOK],
  },
})
