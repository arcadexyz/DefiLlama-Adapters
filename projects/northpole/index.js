const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const sdk = require('@defillama/sdk');
const abi = require('./abi.json')

async function tvl(timestamp, ethBlock, chainBlocks) {


  let tvl = (await sdk.api.abi.multiCall({
    block: chainBlocks.avax,
    calls: [{
      target: '0x6dda10d81F374438F024Ef4aCB894f23d3d6894A'
      // params: ['']
    }],
    abi: abi.totalTVL,
    chain: 'avax'
  })).output.map(t => t.output);

  return {
    [ADDRESS_CONSTANTS.USDT]: Number(tvl) / 10 ** 12
  }
}

module.exports = {
  methodology: 'The cumulative market value of each vault collateral is TVL',
  avax:{
    tvl,
  },
}