const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { getUniTVL } = require('../helper/unknownTokens')

const FLEXUSD = "0x7b2B3C5308ab5b2a1d9a94d20D35CCDf61e05b72";
const WBCH = "0x3743eC0673453E5009310C727Ba4eaF7b3a1cc04";
const SBCH_FACTORY = "0x16bc2B187D7C7255b647830C05a6283f2B9A3AF8";

const DAI = ADDRESS_CONSTANTS.DAI;
const WETH = ADDRESS_CONSTANTS.WETH;
const ETH_FACTORY = "0xee3E9E46E34a27dC755a63e2849C9913Ee1A06E2";

module.exports = {
  misrepresentedTokens: true,
  methodology:
    "Factory address (0x16bc2B187D7C7255b647830C05a6283f2B9A3AF8) is used to find the LP pairs. TVL is equal to the liquidity on the AMM.",
  ethereum: {
    tvl: getUniTVL({ chain: 'ethereum', useDefaultCoreAssets: true, factory: ETH_FACTORY}),
  },
  smartbch: {
    tvl: getUniTVL({ chain: 'smartbch', useDefaultCoreAssets: true, factory: SBCH_FACTORY})
  },
}
