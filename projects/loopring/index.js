const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
 /*==================================================
  Modules
  ==================================================*/

  const sdk = require('@defillama/sdk');

  const BigNumber = require('bignumber.js');

 /*==================================================
  Vars
  ==================================================*/

  const oldLoopringExchange = '0x944644Ea989Ec64c2Ab9eF341D383cEf586A5777';
  const newLoopringExchangeDepositContract = '0x674bdf20A0F284D710BC40872100128e2d66Bd3f';

  const listedTokens = [
    '0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD',  // LRC
    ADDRESS_CONSTANTS.USDT,  // USDT
    ADDRESS_CONSTANTS.DAI,  // DAI
    '0x514910771AF9Ca656af840dff83E8264EcF986CA',  // LINK
    ADDRESS_CONSTANTS.USDC,  // USDC
    '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599',  // WBTC
    '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',  // MKR
  ];

/*==================================================
  TVL
  ==================================================*/

  async function tvl(timestamp, block) {
    let ethBalanceOld = await sdk.api.eth.getBalance({target: oldLoopringExchange, block});
    let ethBalanceNew = await sdk.api.eth.getBalance({target: newLoopringExchangeDepositContract, block});
    let ethBlanaceTotal = BigNumber(ethBalanceOld.output || 0).plus(ethBalanceNew.output);

    let balances = {
      '0x0000000000000000000000000000000000000000': ethBlanaceTotal
    };

    let calls = [];
    listedTokens.forEach((token) => {
      calls.push({
        target: token,
        params: oldLoopringExchange
      });
      calls.push({
        target: token,
        params: newLoopringExchangeDepositContract
      });
    });

    let balanceOfResults = await sdk.api.abi.multiCall({
      block,
      calls,
      abi: 'erc20:balanceOf'
    });

    sdk.util.sumMultiBalanceOf(balances, balanceOfResults, true);

    return balances;
  }

/*==================================================
  Exports
  ==================================================*/

  module.exports = {
    start: 1574241665, // 11/20/2019 @ 09:21AM (UTC)
    ethereum: { tvl }
  }
