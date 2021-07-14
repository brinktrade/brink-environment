const localConfig = require('../config/network.config.local1.json')
const goerliConfig = require('../config/network.config.goerli1.json')
const mainnetConfig = require('../config/network.config.mainnet1.json')

const getEnvConfig = (env) => {
  switch(environmentConfiguration) {
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

module.exports = deployData