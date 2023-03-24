const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { sumTokensExport } = require('../helper/unwrapLPs')

module.exports = {
  ethereum: {
    tvl: sumTokensExport({ tokensAndOwners: [
      [ADDRESS_CONSTANTS.USDC, '0xaef566ca7e84d1e736f999765a804687f39d9094'],
      [ADDRESS_CONSTANTS.USDC, '0xD05aCe63789cCb35B9cE71d01e4d632a0486Da4B'],
      ['0x39aa39c021dfbae8fac545936693ac917d5e7563', '0xD05aCe63789cCb35B9cE71d01e4d632a0486Da4B'],
    ]})
  }
}