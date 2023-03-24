const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { sumTokens2 } = require('../helper/unwrapLPs')
const chain = 'ethereum'

async function tvl(_, _b, { [ chain]: block }) {
  const owners = [
    '0x335DE1cB210B6d981EF3c5253ed7A39456Ee8F1D'
  ]
  const tokens = [
    '0x4Fabb145d64652a948d72533023f6E7A623C7C53',//busd
    ADDRESS_CONSTANTS.USDC,//usdc
    ADDRESS_CONSTANTS.USDT,//usdt
    ADDRESS_CONSTANTS.DAI,//dai
    '0x8e870d67f660d95d5be530380d0ec0bd388289e1',//usdp
]
  return sumTokens2({ chain, block, owners, tokens, })
}

module.exports = {
	ethereum: {
		tvl
	}
}