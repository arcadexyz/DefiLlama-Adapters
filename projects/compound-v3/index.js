const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { compoundV3Exports } = require('../helper/compoundV3')
const markets = [
  "0xc3d688B66703497DAA19211EEdff47f25384cdc3", // USDC Market
  '0xa17581a9e3356d9a858b789d68b4d866e593ae94', // ETH Market
]

const collaterals = [
  ADDRESS_CONSTANTS.USDC,
  ADDRESS_CONSTANTS.WETH,
]

module.exports = compoundV3Exports({
  ethereum: {
    markets, collaterals,
  },
  polygon: {
    markets:["0xF25212E676D1F7F89Cd72fFEe66158f541246445"], collaterals:["0x2791bca1f2de4661ed88a30c99a7a9449aa84174"],
  }
})