const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const {ohmTvl} = require('../helper/ohm')

const transforms = {
    "0xf74195bb8a5cf652411867c5c2c5b8c2a402be35": ADDRESS_CONSTANTS.DAI,
    "0x66a2a913e447d6b4bf33efbec43aaef87890fbbc": ADDRESS_CONSTANTS.USDC,
}

module.exports={
    ...ohmTvl("0xbfFC76cDC85A496404662dc7D8A270cE9567C544", [
        ["0xf74195Bb8a5cf652411867c5C2C5b8C2a402be35", false], //dai
        ["0xF582bC0437a1F1D0476f3a0c8efeEc8d05E6bc96", true],
        ["0x32fDfeA5CdCe7E417818ed5093E8bD4cA85dfE06", true],
        ["0x66a2A913e447d6b4BF33EFbec43aAeF87890FBbc", false] //usdc
    ], "boba", "0xAECFc89Da2f125D893Da6Fb6d157b5DfF1F0aD9E",
    "0xaC3a4aF1778203c8B651dAfA73cEd5b79c80F239", addr=>
        transforms[addr.toLowerCase()] ,
        undefined, false)
}