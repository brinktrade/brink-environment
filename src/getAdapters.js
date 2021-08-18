const localAdapters = require('../config/adapters.local1.json')
const testAdapters = require('../config/adapters.test1.json')
const goerliAdapters = require('../config/adapters.goerli1.json')
const mainnetAdapters = require('../config/adapters.mainnet1.json')

const getAdapters = (env) => {
  switch(env) {
    case 'test':
      return testAdapters
      break
    case 'local':
      return localAdapters
      break
    case 'goerli':
      return goerliAdapters
      break
    case 'mainnet':
      return mainnetAdapters
      break
  }
}

module.exports = getAdapters