
const getGasCosts = () => {
  const gasCosts = [
    { tx: 'ACCOUNT_DEPLOYMENT', gas: 200000 },
    { tx: 'UNIV2_ETH_TO_ERC20', gas: 300000 },
    { tx: 'UNIV2_ERC20_TO_ETH', gas: 300000 },
    { tx: 'UNIV2_ERC20_DIRECT', gas: 300000 },
    { tx: 'UNIV2_ERC20_CROSS_WETH', gas: 400000 }
  ]
  return gasCosts
}
  
module.exports = getGasCosts