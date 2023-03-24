const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { sumTokensExport } = require("../helper/unwrapLPs")

module.exports = {
  ethereum: {
    tvl: sumTokensExport({
      owner: '0x3691ef68ba22a854c36bc92f6b5f30473ef5fb0a',
      tokens: [
        ADDRESS_CONSTANTS.USDC,
        ADDRESS_CONSTANTS.WETH,
        "0xd1C117319B3595fbc39b471AB1fd485629eb05F2",
        "0x853d955aCEf822Db058eb8505911ED77F175b99e",
        ADDRESS_CONSTANTS.DAI,
        "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
        "0xa8b607Aa09B6A2E306F93e74c282Fb13f6A80452",
        "0xc14900dFB1Aa54e7674e1eCf9ce02b3b35157ba5",
        "0xac3E018457B222d93114458476f3E3416Abbe38F",
        "0x4Dbe3f01aBe271D3E65432c74851625a8c30Aa7B",
        "0x691Af94cC63B99bd36173eD6Fb1eF5508b2774ec"
      ]
    }),
  },
}
