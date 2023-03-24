const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { sumTokens } = require('./unwrapLPs')
const sdk = require('@defillama/sdk')


const WETH = ADDRESS_CONSTANTS.WETH

function normalizeArray(arrayOrString){
    if(Array.isArray(arrayOrString)){
        return arrayOrString
    }else {
        return [arrayOrString]
    }
}

function tokenHolderBalances(tokenHolderMap, chain = 'ethereum') {
    return async (timestamp, block, chainBlocks) => {
        if (chain !== 'ethereum') block = chainBlocks[chain]
        const tokensAndHolders = []
        let ethHolders = []
        for (const group of tokenHolderMap) {
            const holders = normalizeArray(group.holders);
            const tokens = normalizeArray(group.tokens)
            if (group.checkETHBalance === true) {
                ethHolders = ethHolders.concat(holders)
            }
            tokens.forEach(token => {
                holders.forEach(holder => {
                    tokensAndHolders.push([token, holder])
                })
            })
        }

        const balances = {};
        await sumTokens(balances, tokensAndHolders, block, chain);
        if (ethHolders.length > 0) {
            const ethBalances = await sdk.api.eth.getBalances({
                targets: ethHolders,
                block,
                chain,
            })
            let nativeToken = WETH
            switch (chain) {
                case 'bsc': nativeToken = 'bsc:0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'; break;  // wbnb
                case 'polygon': nativeToken = '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0'; break;   // matic
                case 'xdai': nativeToken = ADDRESS_CONSTANTS.DAI; break;   // xdai
                case 'avax': nativeToken = 'avax:0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7'; break;   // avax
            }
            ethBalances.output.forEach(ethBal => {
                sdk.util.sumSingleBalance(balances, nativeToken, ethBal.balance)
            })
        }
        return balances
    }
}

module.exports = {
    tokenHolderBalances
}