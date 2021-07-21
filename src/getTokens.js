const localConfig = require('../config/tokens.local1.json')
const goerliConfig = require('../config/tokens.goerli1.json')
const mainnetFullConfig = require('../config/tokens.mainnet1_full.json')
const mainnetLimited= require('../config/tokens.mainnet1.json')

const getTokens = (env, limit=false) => {
  switch(env) {
    case 'local':
      return localConfig
      break
    case 'goerli':
      return goerliConfig
      break
    case 'mainnet':
      if (limit) {
        return mainnetLimited
      } else {
        return mainnetFullConfig
      }
      break
  }
}

module.exports = getTokens