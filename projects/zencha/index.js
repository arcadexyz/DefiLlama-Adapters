const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { sumTokens } = require("../helper/unwrapLPs");

const swapFlashLoan = '0x2D027B49B8960810F84D5fE172d07FFf62311852';

const tokens = {
    DAI: {
        boba: '0xf74195bb8a5cf652411867c5c2c5b8c2a402be35',
        eth: ADDRESS_CONSTANTS.DAI
    },
    USDT: {
        boba: '0x5de1677344d3cb0d7d465c10b72a8f60699c062d',
        eth: ADDRESS_CONSTANTS.USDT
    },
    USDC: {
        boba: '0x66a2a913e447d6b4bf33efbec43aaef87890fbbc',
        eth: ADDRESS_CONSTANTS.USDC
    }
};

function transform(address) {
    for (let token of Object.keys(tokens)) {
        if (tokens[token].boba == address) {
            return tokens[token].eth;
        }
    }
    
    return address;
}

async function tvl(timestamp, block, chainBlocks) {
    block = chainBlocks.boba;
    const balances = {};

    await sumTokens(
        balances,
        [
            [tokens.DAI.boba, swapFlashLoan],
            [tokens.USDT.boba , swapFlashLoan],
            [tokens.USDC.boba , swapFlashLoan],
        ],
        block,
        "boba",
        transform
    );

    return balances;
}

module.exports = {
    boba: {
        tvl
    }
};
// node test.js projects/zencha/index.js