const https = require('https');
const options = {
  hostname: 'indodax.com',
  port: 443,
  method: 'GET'
};

const paths = {
    serverTime: '/api/server_time',
    pairs: '/api/pairs',
    price_increments: '/api/price_increments',
    summaries: '/api/summaries',
    ticker: (pairId) => {
        return '/api/ticker/' + pairId
    },
    tickerAll : '/api/ticker_all',
    trades: (pairId) => {
        return '/api/trades/' + pairId
    },
    depth: (pairId) => {
        return '/api/depth/' + pairId
    },
};

const addPath = (path) => {
    options.path = path;
};

// pass your desired path from paths object
addPath(paths.ticker('btcidr'));

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`)

  res.on('data', d => {
    process.stdout.write(d)
  })
})

req.on('error', error => {
  console.error(error)
})

req.end()
