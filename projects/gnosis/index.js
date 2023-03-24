const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');

const { sumTokensExport } = require('../helper/unwrapLPs')
const sdk = require('@defillama/sdk')

module.exports = {
  start: 1579811423, // Thu, 23 Jan 2020 20:30:23 GMT
  ethereum: { tvl: sdk.util.sumChainTvls([
    '0xc59b0e4de5f1248c1140964e0ff287b192407e0c',
    '0x6f400810b62df8e13fded51be75ff5393eaa841f',
  ].map(addTvl)), }
};

function addTvl(owner) {
  const tokens = [
    ADDRESS_CONSTANTS.WETH,
    ADDRESS_CONSTANTS.DAI,
    ADDRESS_CONSTANTS.USDC,
    '0x6810e776880c02933d47db1b9fc05908e5386b96',
    '0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e',
    '0x57ab1ec28d129707052df4df418d58a2d46d5f51',
    '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
    '0xa1d65E8fB6e87b60FECCBc582F7f97804B725521',
    '0xc00e94cb662c3520282e6f5717214004a7f26888',
    '0x514910771af9ca656af840dff83e8264ecf986ca',
    '0x6b3595068778dd592e39a122f4f5a5cf09c90fe2',
    '0x22eEab2f980E8ed7824f8EA548C9595564a0F0e4',
    '0xe2f2a5c287993345a840db3b0845fbc70f5935a5',
    '0x0000000000085d4780B73119b644AE5ecd22b376',
    ADDRESS_CONSTANTS.USDT,
    '0x0b38210ea11411557c13457D4dA7dC6ea731B88a',
    '0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419',
  ]

  return sumTokensExport({ owner, tokens, })
}
