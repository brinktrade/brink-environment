const localConfig = require('../config/web.local1.json')
const goerliConfig = require('../config/web.goerli1.json')
const mainnetConfig = require('../config/web.mainnet1.json')

const getWebConfig = (env) => {
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

module.exports = getWebConfig