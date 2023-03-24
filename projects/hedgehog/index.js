const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const WETH = ADDRESS_CONSTANTS.WETH;
const USDC = ADDRESS_CONSTANTS.USDC;
const OSQTH = "0xf1B99e3E573A1a9C5E6B2Ce818b617F0E664E86B";

const VAULT_MATH = "0x40B22821f694f1F3b226b57B5852d7832e2B5f3f";

async function tvl(timestamp, block, _, { api }) {
  const fundBalances = await api.call({ abi: 'function getTotalAmounts() view returns (uint256, uint256, uint256)', target: VAULT_MATH })
  api.addTokens([WETH, USDC, OSQTH], fundBalances)
}

module.exports = {
  methodology:
    "Counts the amount of wETH, USDC & oSQTH in the strategy-controlled pools and treasury",
  ethereum: { tvl, },
};
