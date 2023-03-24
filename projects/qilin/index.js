const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const sdk = require('@defillama/sdk')
const { sumTokensExport } = require('../helper/unwrapLPs')

const contract = "0x57A0B07dcD834cAbB844BEc8E7903A3B2faE6245"
const usdcToken = ADDRESS_CONSTANTS.USDC

module.exports = {
    ethereum: { tvl: sumTokensExport({ owner: contract, tokens: [usdcToken]}) },
}