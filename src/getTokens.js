const localConfig = require('../config/tokens.local1.json')
const goerliConfig = require('../config/tokens.goerli1.json')
const mainnetConfig = require('../config/tokens.mainnet1_full.json')

const getTokens = (env) => {
  switch(env) {
    case 'local':
      return localConfig
      break
    case 'goerli':
      return goerliConfig
      break
    case 'mainnet':
      return mainnetConfig
      break
  }
}

module.exports = getTokens