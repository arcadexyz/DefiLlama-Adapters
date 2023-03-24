const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { sumTokensExport } = require('../helper/unwrapLPs')

const bridgecontract = '0xc6895a02F9dFe64341c7B1d03e77018E24Db15eD';
const usdc = ADDRESS_CONSTANTS.USDC
const wbtc = '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599'

module.exports = {
  methodology: "Tracks funds locked in the Lago Bridge contract on Ethereum",
  ethereum: {
    tvl: sumTokensExport({ owner: bridgecontract, tokens: [usdc, wbtc,] })
  },
  hallmarks: [
    [Math.floor(new Date('2022-12-23') / 1e3), 'Project is winding down'],
  ],
};
