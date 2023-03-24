const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
module.exports = {
  ethereum: {
    toa: [
      [ADDRESS_CONSTANTS.USDC, '0x53E1c9750014C7Cf8303D69A3CA06A555C739DD0'],
      [ADDRESS_CONSTANTS.USDT, '0xCD4F2844b11A4515398fD2201247Cf2ed411245f'],
      [ADDRESS_CONSTANTS.DAI, '0x6Db6ABb2a55154C385e90d3fD05EE8ca46e3BA35'],
      [ADDRESS_CONSTANTS.USDC, '0xD824fDFEdbE9b99F0B27e911Ad963Ec4544dF2Dc'],
      ['0x2260fac5e5542a773aa44fbcfedf7c193bc2c599', '0xD824fDFEdbE9b99F0B27e911Ad963Ec4544dF2Dc'],
      [ADDRESS_CONSTANTS.WETH, '0xD824fDFEdbE9b99F0B27e911Ad963Ec4544dF2Dc'],
      ['0x1f9840a85d5af5bf1d1762f925bdaddc4201f984', '0xD824fDFEdbE9b99F0B27e911Ad963Ec4544dF2Dc'],
      ['0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9', '0xD824fDFEdbE9b99F0B27e911Ad963Ec4544dF2Dc'],
      ['0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0', '0xD824fDFEdbE9b99F0B27e911Ad963Ec4544dF2Dc'],
      ['0xd533a949740bb3306d119cc777fa900ba034cd52', '0xD824fDFEdbE9b99F0B27e911Ad963Ec4544dF2Dc'],
    ],
    staking: [
      ['0x6e9730ecffbed43fd876a264c982e254ef05a0de', '0x2b9a023415f0feeb88597c1a7d09fdefa0ef5614'],
    ],
    pool2: [
      ['0x5239873C892376799B6Cb49a3CFB1146d4A260b8', '0x8c043C37a5f16440A1d6919C7F60aBaEd0592b31'],
    ],
  },
  polygon: {
    toa: [
      ['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', '0x8a5Ae804Da4924081663D4C5DaB4DC9BB7092E2E'],
      ['0xc2132D05D31c914a87C6611C10748AEb04B58e8F', '0xa4dbb459fb9051b976947d2d8ab74477e1720a73'],
      ['0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063', '0xeE2dEf710a8a0021DCbF99C4cD7f69Dc536fc57b'],
      ['0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6', '0x014fD6Db604b55eF900704ed5c25F9Ef61e8B225'],
      ['0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', '0x014fD6Db604b55eF900704ed5c25F9Ef61e8B225'],
      ['0x53e0bca35ec356bd5dddfebbd1fc0fd03fabad39', '0x014fD6Db604b55eF900704ed5c25F9Ef61e8B225'],
      ['0xb33eaad8d922b1083446dc23f610c2567fb5180f', '0x014fD6Db604b55eF900704ed5c25F9Ef61e8B225'],
      ['0xd6df932a45c0f255f85145f286ea0b292b21c90b', '0x014fD6Db604b55eF900704ed5c25F9Ef61e8B225'],
      ['0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270', '0x014fD6Db604b55eF900704ed5c25F9Ef61e8B225'],
      ['0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174', '0x014fD6Db604b55eF900704ed5c25F9Ef61e8B225'],
    ],
    staking: [
      ['0xf6f85b3f9fd581c2ee717c404f7684486f057f95', '0xf0882a08D855ec8Ad3f25087dE3FB311A5344b20'],
      ['0xf6f85b3f9fd581c2ee717c404f7684486f057f95', '0x9b2311c6D57EA5a65B29223C87C50C59E1D9cF13'],
    ],
  },
  avax: {
    toa: [
      ['0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664', '0xAA1110b6A39647f93dfBbc6345216912E1dee6FF'],
      ['0xc7198437980c041c805A1EDcbA50c1Ce5db95118', '0xFbb37792f98fd57AC1f2f20b151e2db5cceF7F11'],
      ['0xd586E7F844cEa2F87f50152665BCbc2C279D8d70', '0xaF3745feCEe0a79c5F19991291Cd60B716C4F698'],
    ],
    staking: [
      ['0x8965349fb649a33a30cbfda057d8ec2c48abe2a2', '0x1929aED2175688252C9388df11B162F7303ff926'],
    ],
  },
}