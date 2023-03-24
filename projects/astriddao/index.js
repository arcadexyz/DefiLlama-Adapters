const { ADDRESS_CONSTANTS } = require('../../utils/constants.js');
const { sumTokens } = require('../helper/unwrapLPs')
const { getFixBalances } = require('../helper/portedTokens')

const chain = 'astar'

const COLLATERALS = {
  WASTAR: {
    tokenAddress: "0x19574c3c8fafc875051b665ec131b7e60773d2c9",
    contracts: {
      activePool: "0x70724b57618548eE97623146F76206033E67086e",
      defaultPool: "0x2fE3FDf91786f75C92e8AB3B861588D3D051D83F",
    }
  },
  BUSD: {
    tokenAddress: "0x4Bf769b05E832FCdc9053fFFBC78Ca889aCb5E1E",
    bridgeTokenMapping: "0x4fabb145d64652a948d72533023f6e7a623c7c53",
    contracts: {
      activePool: "0x892af684Afd5fCee1023f7811C35fd695Bf0cd6f",
      defaultPool: "0xe487b9066A8fFde840b29892f1052CBEdccc3073",
    }
  },
  DAI: {
    tokenAddress: "0x6De33698e9e9b787e09d3Bd7771ef63557E148bb",
    bridgeTokenMapping: ADDRESS_CONSTANTS.DAI,
    contracts: {
      activePool: "0xCE90059FbCEc696634981945600d642A79e262aD",
      defaultPool: "0x3aD8FE12674B4c9481d5C7585ed5bDC4E35025b9",
    }
  },
  DOT: {
    tokenAddress: "0xFFfFfFffFFfffFFfFFfFFFFFffFFFffffFfFFFfF",
    contracts: {
      activePool: "0x8cd0b101838b082133e25eEb76C916Ae2AC56f36",
      defaultPool: "0x4e8B4867899A69bB05EFa6A16e68363C2BBeB02f",
    }
  },
  USDC: {
    tokenAddress: "0x6a2d262d56735dba19dd70682b39f6be9a931d98",
    bridgeTokenMapping: ADDRESS_CONSTANTS.USDC,
    contracts: {
      activePool: "0x5070d543654D866964C44E610a3b7f85fcAf2859",
      defaultPool: "0xEb80f1a9ede36412cF26E1e35ae74dbA30cCfF02",
    }
  },
  WETH: {
    tokenAddress: "0x81ECac0D6Be0550A00FF064a4f9dd2400585FE9c",
    contracts: {
      activePool: "0x5Ec419F08602caE5e4C591dE65bD640d66673035",
      defaultPool: "0x2eE0F3daa042af6Fdd56f0194d5aBfdA0A723D95",
    }
  },
  WBTC: {
    tokenAddress: "0xad543f18cFf85c77E140E3E5E3c3392f6Ba9d5CA",
    bridgeTokenMapping: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
    contracts: {
      activePool: "0x1685E4f68FD9A50246ce92F0eb07a977591F5Ba2",
      defaultPool: "0xD69eB04d9ff456A31Da6D2a20538512C433ac1Ca",
    }
  },
  USDT: {
    tokenAddress: "0x3795c36e7d12a8c252a20c5a7b455f7c57b60283",
    bridgeTokenMapping: ADDRESS_CONSTANTS.USDT,
    contracts: {
      activePool: "0x74dFF63491B39E5fFE0Be44Ee3B23F674C27DB7c",
      defaultPool: "0x8EE2f5403246b86d7493ddCeED19f9347bc4DF1D",
    }
  },
}

const BAI_TOKEN_ADDRESS = "0x733ebcC6DF85f8266349DEFD0980f8Ced9B45f35"
const STAKES = {
  WASTAR: {
    contracts: {
      stabilityPool: "0x7e3D1e75C8deef26d659B2fb7b7E436ab8Ea35d9"
    }
  },
  BUSD: {
    contracts: {
      stabilityPool: "0x2D95D9191F12a17D61B3a1904581DceFd2C6e3eD"
    }
  },
  DAI: {
    contracts: {
      stabilityPool: "0xA5Bb226e06732005Cf6053429B8F6d607A8A530a"
    }
  },
  DOT: {
    contracts: {
      stabilityPool: "0xB333a7a951DC495bA7F27999cD41361AAafb6BE0"
    }
  },
  USDC: {
    contracts: {
      stabilityPool: "0x3598e5Aa98FDa59261b7372D68C116ad7220716D"
    }
  },
  WETH: {
    contracts: {
      stabilityPool: "0x19Af5DA5770d17808aA9b0011a47693379f338DD"
    }
  },
  WBTC: {
    contracts: {
      stabilityPool: "0x9A64Af13Cd72212ab0D812BEB839Fa93692E8B9F"
    }
  },
  USDT: {
    contracts: {
      stabilityPool: "0xb33CaFa19D66a0321329b6ECD0Fb9339b5BaE253"
    }
  },
}

const ATID_TOKEN_ADDRESS = "0x5271D85CE4241b310C0B34b7C2f1f036686A6d7C";
const ATID_STAKES = {
  WASTAR: {
    contracts: {
      atidStaking: "0xc21c8f9e4FdAdb1c57EfE3D7838731e20847e1C6"
    }
  },
  BUSD: {
    contracts: {
      atidStaking: "0x11BeC3669290906E93C3209FD14752d4FAeDAcf5"
    }
  },
  DAI: {
    contracts: {
      atidStaking: "0x94a2F15E0A41e61B453F2eE86C4712857e3C8c65"
    }
  },
  DOT: {
    contracts: {
      atidStaking: "0x7644a930c267f0F936db61fE5a608d755BD8DFa5"
    }
  },
  USDC: {
    contracts: {
      atidStaking: "0x38df7Bf5b5c4E5cbb2558b8D44A8F122e1D5D435"
    }
  },
  WETH: {
    contracts: {
      atidStaking: "0x0Ae22e6c492F8e591FCdEFEec677bAc52Aa7363a"
    }
  },
  WBTC: {
    contracts: {
      atidStaking: "0xCaC1c3003E3F1e98850676575f8dA25A6a9b8daA"
    }
  },
  USDT: {
    contracts: {
      atidStaking: "0xdF91F16f68821f1f7D9FB1659A28ccb5844EdcAd"
    }
  },
}

const BRIDGE_TOKEN_MAPPINGS = {}
for (const collateralInfo of Object.values(COLLATERALS)) {
  if (collateralInfo.bridgeTokenMapping) {
    BRIDGE_TOKEN_MAPPINGS[collateralInfo.tokenAddress] = collateralInfo.bridgeTokenMapping;
  }
}

function translateBalancesForBridgeToken(balances) {
  const translatedBalances = {};
  for (const key in balances) {
    if (key in BRIDGE_TOKEN_MAPPINGS) {
      translatedBalances[BRIDGE_TOKEN_MAPPINGS[key]] = balances[key]
    } else {
      translatedBalances[key] = balances[key]
    }
  }
  return translatedBalances
}

async function tvl(ts, _block, chainBlocks ) {
  const block = chainBlocks[chain]
  let balances = {}

  for (const collateralInfo of Object.values(COLLATERALS)) {
    const tokensAndOwners = Object.values(collateralInfo.contracts).map(owner => [collateralInfo.tokenAddress, owner])
    await sumTokens(balances, tokensAndOwners, block, chain)
  }

  for (const stakeInfo of Object.values(STAKES)) {
    const tokensAndOwners = Object.values(stakeInfo.contracts).map(owner => [BAI_TOKEN_ADDRESS, owner])
    await sumTokens(balances, tokensAndOwners, block, chain)
  }

  for (const atidStakeInfo of Object.values(ATID_STAKES)) {
    const tokensAndOwners = Object.values(atidStakeInfo.contracts).map(owner => [ATID_TOKEN_ADDRESS, owner])
    await sumTokens(balances, tokensAndOwners, block, chain)
  }

  balances = translateBalancesForBridgeToken(balances);

  (await getFixBalances(chain))(balances)

  return balances
}

module.exports = {
  timetravel: true,
  start: 915830,
  methodology: "Total locked collateral assets (in ERC-20 form) in ActivePool and DefaultPool, plus total staked BAI in StabilityPool",
  astar: {
    tvl,
  },
};
