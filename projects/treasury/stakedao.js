const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { treasuryExports, nullAddress } = require("../helper/treasury");

const eth = "0xF930EBBd05eF8b25B1797b9b2109DDC9B0d43063";
const poly = "0xdA2D2f638D6fcbE306236583845e5822554c02EA";
const avax = "0x69D6C2ACb2485D629E184BC4E1DD972D8DDD8669";

const ethTokens = [
  nullAddress,
  ADDRESS_CONSTANTS.USDC, // USDC
  "0x31429d1856aD1377A8A0079410B297e1a9e214c2", // ANGLE
  "0xD533a949740bb3306d119CC777fa900bA034cd52", // CRV
  "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490", // 3CRV
  "0xc2544A32872A91F4A553b404C6950e89De901fdb", // FPIS
  "0xba100000625a3754423978a60c9317c58a424e3D", // BAL
  "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF", // ALCX
  ADDRESS_CONSTANTS.WETH, // WETH
  "0x65Ef703f5594D2573eb71Aaf55BC0CB548492df4", // MULTI
  "0x1a7e4e63778B4f12a199C062f3eFdD288afCBce8", // agEUR
  "0xcAfE001067cDEF266AfB7Eb5A286dCFD277f3dE5", // PSP
  "0x4104b135DBC9609Fc1A9490E61369036497660c8", // APW
  "0x514910771AF9Ca656af840dff83E8264EcF986CA", // LINK
  "0x579CEa1889991f68aCc35Ff5c3dd0621fF29b0C9", // IQ
  "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9", // AAVE
  "0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421", // VSP
  "0x6f80310CA7F2C654691D1383149Fa1A57d8AB1f8", // SILO
  "0xd632f22692FaC7611d2AA1C0D552930D43CAEd3B", // FRAX3CRV-f
  "0x5aFE3855358E112B5647B952709E6165e1c1eEEe", // SAFE
  "0x318C3a9373419aA57c7C8aa53Eef92814e975F51", // 90D-StakeDAO-sdFRAX3CRV-f-0
  "0x43E54C2E7b3e294De3A155785F52AB49d87B9922", // asdCRV
  "0xA13a9247ea42D743238089903570127DdA72fE44", // bb-a-USD
  "0x7B50775383d3D6f0215A8F290f2C9e2eEBBEceb2", // bb-a-USD
  "0x2d011aDf89f0576C9B722c28269FcB5D50C2d179", // B-sdBAL-STABLE
  "0xdEa1fc87b6F4536e852AEa73aEb8F4aC0cF843C3", // CNV
  "0xA3D87FffcE63B53E0d54fAa1cc983B7eB0b74A9c", // eCRV
  "0x06325440D014e39736583c165C2963BA99fAf14E", // steCRV
  "0x6788f608CfE5CfCD02e6152eC79505341E0774be", // sdAPWAPW-f
  "0x8c524635d52bd7b1Bd55E062303177a7d916C046", // sdFXSFXS-f
  "0x6a69FfD1353Fa129f7F9932BB68Fa7bE88F3888A", // sdYFIYFI-f-gauge
  "0x93Dede06AE3B5590aF1d4c111BC54C3f717E4b35", // gALCX
  "0x9994E35Db50125E0DF82e4c2dde62496CE330999", // MORPHO
  "0x9B85d6e87350c021616Ae3DA78b9B1335c68283A", // sd3EURpool-f-gauge
  "0x752B4c6e92d96467fE9b9a2522EF07228E00F87c", // sdANGLE
  "0x26f01FE3BE55361b0643bc9d5D60980E37A2770D", // sdAPW
  "0x76fB1951F3395031B3ec703a16567ab92E792770", // sdB-sdBAL-STABLE-gauge
  "0xF24d8651578a55b0C119B9910759a351A3458895", // sdBal
  "0xBe77585F4159e674767Acf91284160E8C09b96D8", // sdcrvFRAX-gauge
  "0x5af15DA84A4a6EDf2d9FA6720De921E1026E37b7", // sdFRAX3CRV-f
  "0xA7Ae691A17CA71Ca24b2D21De117213c2b64A54b", // sdeCRV-gauge
  "0xfA51194E8eafc40523574A65C1e4606E1432408B", // sdFRAX3CRV-f-gauge
  "0x4eB7440E6b9341505f86096EFB4019EAb287f611", // fsdeursCRV-27
  "0xaF32c61C4a2F79b16D8D1D36455196115F454A9b", // sdsanDAI_EUR-gauge
  "0xB6261Be83EA2D58d8dd4a73f3F1A353fa1044Ef7", // sdsanFRAX_EUR-gauge
  "0xAC9978DB68E11EbB9Ffdb65F31053A69522B6320", // sdsanUSDC_EUR-gauge
  "0x1E3923A498de30ff8C5Ac8bfAb1De9AFa58fDE5d", // sdsdAGAG-f-gauge
  "0xE55843a90672f7d8218285e51EE8fF8E233F35d5", // sdANGLE-gauge
  "0x3E8C72655e48591d93e6dfdA16823dB0fF23d859", // sdBal-gauge
  "0x7f50786A0b15723D741727882ee99a0BF34e3466", // sdCRV-gauge
  "0x531167aBE95375Ec212f2b5417EF05a9953410C1", // sdsdCRVCRV-f-gauge
  "0xF3C6e8fbB946260e8c2a55d48a5e01C82fD63106", // sdFXS-gauge
  "0xb10DE77F94AFd8080FB7b563ee0d6388291F07Fb", // sdsdFXSFXS-f-gauge
  "0xaA25cb1b10b8252480Cc6A3b17C22e6C0E00Bcb4", // sdBTCCoveredCallV2
  "0xc10B7CA0383F0357EdEED233Dc806B5229DCF4a5", // sdETHCoveredCallV2
];

const ethOwnTokens = [
  "0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F", // SDT
  "0xB3a33E69582623F650e54Cc1cf4e439473A28D26", // sdsdtfraxbp-f-gauge
  "0xC891a1BaCF802127874054e703b386346fE94b00", // sdSDTETH-f-gauge
  "0x60355587a8D4aa67c2E64060Ab36e566B9bCC000", // SDTETH-f-gauge
];

const polyTokens = [
  nullAddress,
  "0xE0B52e49357Fd4DAf2c15e02058DCE6BC0057db4", // agEUR
  "0x900F717EA076E1E7a484ad9DD2dB81CEEc60eBF1", // ANGLE
  "0x8437d7C167dFB82ED4Cb79CD44B7a32A1dd95c77", // aPolAGEUR
  "0x5aa0197D0d3E05c4aA070dfA2f54Cd67A447173A", // fagEUR-1
];

const avaxTokens = [nullAddress];

module.exports = treasuryExports({
  ethereum: {
    tokens: ethTokens,
    ownTokens: ethOwnTokens,
    ownTokenOwners: [eth],
    owners: [eth],
  },
  polygon: {
    tokens: polyTokens,
    ownTokens: [],
    ownTokenOwners: [poly],
    owners: [poly],
  },
  avax: {
    tokens: avaxTokens,
    ownTokens: [],
    ownTokenOwners: [avax],
    owners: [avax],
  },
});
