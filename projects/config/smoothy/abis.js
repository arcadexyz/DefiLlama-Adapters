const { ADDRESS_CONSTANTS } = require('../../../utils/constants.js');
let abis = {};

abis.smoothy = {
    _ntokens: "uint256:_ntokens",
    getTokenStats: "function getTokenStats(uint256 bTokenIdx) view returns (uint256 softWeight, uint256 hardWeight, uint256 balance, uint256 decimals)",
  };


abis.tokens = [
    {
        symbol: "USDT",
        address: ADDRESS_CONSTANTS.USDT,
        id: 0,
        decimals: 6,
    },
    {
        symbol: "USDC",
        address: ADDRESS_CONSTANTS.USDC,
        id: 1,
        decimals: 6,
    },
    {
        symbol: "DAI",
        address: ADDRESS_CONSTANTS.DAI,
        id: 2,
        decimals: 18,
    },
    {
        symbol: "TUSD",
        address: "0x0000000000085d4780B73119b644AE5ecd22b376",
        id: 3,
        decimals: 18,
    },
    {
        symbol: "sUSD",
        address: "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
        id: 4,
        decimals: 18,
    },
    {
        symbol: "BUSD",
        address: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
        id: 5,
        decimals: 18,
    },
    {
        symbol: "PAX",
        address: "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
        id: 6,
        decimals: 18,
    },
    {
        symbol: "GUSD",
        address: "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
        id: 7,
        decimals: 2,
    },
];

module.exports = {
    abis
}
