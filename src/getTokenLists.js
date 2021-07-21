const getTokenLists = () => {
  const tokenLists = {
    'https://cloudflare-ipfs.com/ipns/tokens.uniswap.org': {
      name: 'Uniswap Default List',
      logoURI: 'ipfs://QmNa8mQkrNKp1WEEeGjFezDmDeodkWRevGFN8JCV7b4Xir'
    },
    'https://defiprime.com/defiprime.tokenlist.json': {
      name: 'Defiprime',
      logoURI: 'https://defiprime.com/images/defiprime-logo-hires2.png',
      exclude: true // need to exclude because their logos are broken
    },
    'http://tokens.1inch.eth.link': {
      name: '1inch',
      logoURI: 'https://1inch.exchange/assets/images/logo.png',
      exclude: true
    },
    'https://zapper.fi/api/token-list': {
      name: 'Zapper Token List',
      logoURI: 'https://zapper.fi/logo192.png'
    },
    'http://tokenlist.zerion.eth.link': {
      name: 'Zerion Explore',
      logoURI: 'https://token-icons.s3.amazonaws.com/brand/1_z-white_blue-rounded-square.png',
      exclude: true
    },
    'http://tokenlist.aave.eth.link': {
      name: 'Aave Token List',
      logoURI: 'ipfs://QmWzL3TSmkMhbqGBEwyeFyWVvLmEo3F44HBMFnmTUiTfp1',
      exclude: true
    },
    'http://datafi.theagora.eth.link': {
      name: 'Agora dataFi Tokens',
      logoURI: 'https://hut34.io/dataFiLogos/theAgoraLogoGradient300.png',
      exclude: true
    },
    'http://defi.cmc.eth.link': {
      name: 'CMC DeFi',
      logoURI: 'ipfs://QmQAGtNJ2rSGpnP6dh6PPKNSmZL8RTZXmgFwgTdy5Nz5mx',
      exclude: true
    },
    'http://stablecoin.cmc.eth.link': {
      name: 'CMC Stablecoin',
      logoURI: 'ipfs://QmQAGtNJ2rSGpnP6dh6PPKNSmZL8RTZXmgFwgTdy5Nz5mx',
      exclude: true
    },
    'http://erc20.cmc.eth.link': {
      name: 'CMC200 ERC20',
      logoURI: 'ipfs://QmQAGtNJ2rSGpnP6dh6PPKNSmZL8RTZXmgFwgTdy5Nz5mx',
      exclude: true
    },
    'https://compli.fi/complifi.tokenlist.json': {
      name: 'CompliFi Originals',
      logoURI: 'ipfs://QmRfLtruB4vrPbuCiKPU3J6Xq62FxLmNjaNmsHeH3AMfPX',
      exclude: true
    },
    'https://tokens.coingecko.com/uniswap/all.json': {
      name: 'CoinGecko',
      logoURI: 'https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png'
    },
    'https://www.coingecko.com/tokens_list/uniswap/defi_100/v_0_0_0.json': {
      name: 'CoinGecko DeFi 100',
      logoURI: 'https://www.coingecko.com/assets/thumbnail-007177f3eca19695592f0b8b0eabbdae282b54154e1be912285c9034ea6cbaf2.png',
      exclude: true
    },
    'https://raw.githubusercontent.com/compound-finance/token-list/master/compound.tokenlist.json': {
      name: 'Compound',
      logoURI: 'https://raw.githubusercontent.com/compound-finance/token-list/master/assets/compound-interface.svg'
    },
    'https://raw.githubusercontent.com/b-u-i-d-l/bazar-tokens-list/master/dist/decentralizedFlexibleOrganizations.json': {
      name: 'DFO Flexible Org',
      logoURI: 'https://cloudflare-ipfs.com/ipfs/QmZehrSK4WRnE4pPPrChSDVh7m9qfBJQdUfotsNYDKZHha',
      exclude: true
    },
    'http://tokenlist.dharma.eth.link': {
      name: 'Dharma Token List',
      logoURI: 'ipfs://QmVSnomsK2wLaFpgDMrLQgvhJ66YR4jrcvW5HjDEc8VVwA',
      exclude: true
    },
    'https://cdn.furucombo.app/furucombo.tokenlist.json': {
      name: 'Furucombo',
      logoURI: 'https://cdn.furucombo.app/assets/img/logo/logo-rounded-square.svg',
      exclude: true
    },
    'http://t2crtokens.eth.link': {
      name: 'Kleros T2CR',
      logoURI: 'ipfs://QmRYXpD8X4sQZwA1E4SJvEjVZpEK1WtSrTqzTWvGpZVDwa',
      exclude: true
    },
    'https://api.kyber.network/tokenlist': {
      name: 'Kyber',
      logoURI: 'https://files.kyberswap.com/DesignAssets/tokens/iOS/knc.png'
    },
    'https://messari.io/tokenlist/messari-verified': {
      name: 'Messari Verified',
      logoURI: 'https://messari.io/images/logo_tcr-check.svg',
      exclude: true
    },
    'https://uniswap.mycryptoapi.com/': {
      name: 'MyCrypto Token List',
      logoURI: 'https://raw.githubusercontent.com/MyCryptoHQ/MyCrypto/master/src/assets/images/favicon.png',
      exclude: true
    },
    'https://raw.githubusercontent.com/opynfinance/opyn-tokenlist/master/opyn-v1.tokenlist.json': {
      name: 'Opyn v1',
      logoURI: 'https://i.imgur.com/HU1u66R.jpg',
      exclude: true
    },
    'https://app.tryroll.com/tokens.json': {
      name: 'Roll Social Money',
      logoURI: 'https://tryroll.com/wp-content/uploads/2018/11/cropped-icon-270x270.png',
      exclude: true
    },
    'https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/set.tokenlist.json': {
      name: 'Set',
      logoURI: 'https://raw.githubusercontent.com/SetProtocol/uniswap-tokenlist/main/assets/set-logo.svg',
      exclude: true
    },
    'http://synths.snx.eth.link': {
      name: 'Synthetix',
      logoURI: 'https://raw.githubusercontent.com/Synthetixio/synthetix-assets/v2.0.5/snx/SNX.svg',
      exclude: true
    },
    'http://testnet.tokenlist.eth.link': {
      name: 'Testnet Token List',
      logoURI: 'ipfs://QmaypvtnoXGQo4gSGHjgXaMUY98hf2FotQRfXgdLL4jo4i',
      exclude: true
    },
    'https://umaproject.org/uma.tokenlist.json': {
      name: 'UMA',
      logoURI: 'https://umaproject.org/assets/images/UMA_square_red_logo_circle.png',
      exclude: true
    },
    'http://wrapped.tokensoft.eth.link': {
      name: 'Wrapped Tokens',
      logoURI: 'https://cloudflare-ipfs.com/ipfs/QmUJQF5rDNQn37ToqCynz6iecGqAmeKHDQCigJWpUwuVLN',
      exclude: true
    }
  }
  return tokenLists
}
    
module.exports = getTokenLists