const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const sdk = require('@defillama/sdk')
const { sumTokensAndLPsSharedOwners } = require('../helper/unwrapLPs')
const abi = require('./abi.json')
const { getLogs } = require('../helper/cache/getLogs')

const rollupChain = "0xf86FD6735f88d5b6aa709B357AD5Be22CEDf1A05"
const registry = "0xfe81ab6930a30bdae731fe7b6c6abfbeafc014a8"

async function tvl(timestamp, block, _, { api }){
    const strategies = (await getLogs({
        api,
        target: registry,
        fromBlock: 12283733-1,
        topic:'StrategyRegistered(address,uint32)'
    })).map(s=>"0x"+s.data.slice(26, 66))
    const [syncBalances, tokens] = await Promise.all([abi.syncBalance,abi.supplyToken].map(abiMethod=>sdk.api.abi.multiCall({
        abi: abiMethod,
        block,
        calls: strategies.map(s=>({target:s}))
    })))
    const balances = {}
    syncBalances.output.forEach((bal, i)=>{
        sdk.util.sumSingleBalance(balances, tokens.output[i].output, bal.output)
    })
    await sumTokensAndLPsSharedOwners(balances, [
        ADDRESS_CONSTANTS.USDC, //usdc
        ADDRESS_CONSTANTS.DAI, //dai
        "0x4fabb145d64652a948d72533023f6e7a623c7c53", //busd
        ADDRESS_CONSTANTS.USDT, //usdt
    ].map(t=>[t,false]), [rollupChain], block)
    return balances
}

module.exports={
    ethereum:{tvl}
}