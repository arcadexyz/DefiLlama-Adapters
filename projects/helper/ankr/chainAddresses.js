const { ADDRESS_CONSTANTS } = require('../../../utils/constants.js');
const coinAddresses = {
  weth: ADDRESS_CONSTANTS.WETH, //Ethereum
  ftm: "0x4e15361fd6b4bb609fa63c81a2be19d873717870",  //Fantom
  matic: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0", //Matic
  dot: "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0", //DOT
  avax: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee", //Avalanche
};

module.exports = coinAddresses;