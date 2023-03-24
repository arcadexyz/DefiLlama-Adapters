const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const sdk = require('@defillama/sdk')

const USDC = ADDRESS_CONSTANTS.USDC
const contract = "0xBabeE6d5F6EDD301B5Fae591a0D61AB702b359d0"
async function tvl(time, block) {
    return {
        [USDC]: (await sdk.api.abi.call({
            target: contract,
            block,
            abi: 'uint256:currentTVL'
        })).output
    }
}

module.exports = {
    methodology: `Count the USDC that has been deposited on ${contract}`,
    ethereum: {
        tvl,
    },
}