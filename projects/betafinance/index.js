const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const sdk = require("@defillama/sdk");
const { getConfig } = require('../helper/cache')
const { sumTokens } = require("../helper/unwrapLPs");

const config = {
  ethereum: {
    bank: '0x972a785b390D05123497169a04c72dE652493BE1',
    collaterals: [
      ADDRESS_CONSTANTS.USDT,
      ADDRESS_CONSTANTS.USDC,
      ADDRESS_CONSTANTS.DAI,
      ADDRESS_CONSTANTS.WETH,
    ],
    poolURL: 'https://beta-reward-xvn33y7hlq-uc.a.run.app/beta_active_eth/reward_infos'
  },
  avax: {
    bank: '0xf3a82ddd4fbf49a35eccf264997f82d40510f36b',
    collaterals: [
      "0xc7198437980c041c805a1edcba50c1ce5db95118",
      "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",
      "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",
      "0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab",
      "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7",
    ],
    poolURL: 'https://beta-reward-xvn33y7hlq-uc.a.run.app/beta_active_avax/reward_infos'
  }
}

const underlyingABI = "address:underlying"

async function getPools(chain) {
  const url = config[chain].poolURL
  return (await getConfig('beta-finance/'+chain, url)).pool_infos
    .filter(i => i.kind === 'BetaLendHandler')
    .map(i => i.address)
}

function setChainTVL(chain) {
  module.exports[chain] = {
    tvl: async (ts, _block, chainBlocks) => {
      const block = chainBlocks[chain]
      const pools = await getPools(chain)
      const { bank, collaterals } = config[chain]
      const calls = pools.map(i => ({ target: i }))
      const underlyings = await sdk.api.abi.multiCall({ abi: underlyingABI, calls, block, chain })
      const toa = underlyings.output.map(({ output, input: { target }}) => [output, target])
      collaterals.forEach(token => toa.push([token, bank]))
      return sumTokens({}, toa, block, chain)
    }
  }
}

module.exports = {
  methodology:
    "TVL is comprised of tokens deposited to the protocol as collateral, similar to Compound Finance and other lending protocols the borrowed tokens are not counted as TVL.",
};

Object.keys(config).forEach(setChainTVL)