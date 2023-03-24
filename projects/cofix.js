const { ADDRESS_CONSTANTS } = require('../utils/constants.js');
const { sumTokens } = require('./helper/unwrapLPs')

async function tvl(_, block) {
  return sumTokens({}, [
    [ADDRESS_CONSTANTS.USDT, '0xb2b7bedd7d7fc19804c7dd4a4e8174c4c73c210d'],
    [ADDRESS_CONSTANTS.WETH, '0xb2b7bedd7d7fc19804c7dd4a4e8174c4c73c210d'],
    ['0x0316EB71485b0Ab14103307bf65a021042c6d380', '0x7c2d7b53aca4038f2eb649164181114b9aee93cb'],
    [ADDRESS_CONSTANTS.WETH, '0x7c2d7b53aca4038f2eb649164181114b9aee93cb'],
  ], block)
}

module.exports = {
  ethereum: { tvl }
}
