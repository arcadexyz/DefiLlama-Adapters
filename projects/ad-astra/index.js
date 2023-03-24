const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { sumTokensExport } = require('../helper/sumTokens')

module.exports={
    ethereum:{
        tvl: sumTokensExport({
            owner: '0x92a26975433a61cf1134802586aa669bab8b69f3',
            tokens: [ADDRESS_CONSTANTS.USDC, ADDRESS_CONSTANTS.USDT, '0x4fabb145d64652a948d72533023f6e7a623c7c53', '0xdc9Ac3C20D1ed0B540dF9b1feDC10039Df13F99c', ],
        })
    }
}