import requests

paths = {
    'serverTime': '/api/server_time',
    'pairs': '/api/pairs',
    'price_increments': '/api/price_increments',
    'summaries': '/api/summaries',
    'ticker': (lambda pairId: '/api/ticker/' + pairId),
    'tickerAll': '/api/ticker_all',
    'trades': (lambda pairId: '/api/trades/' + pairId),
    'depth': (lambda pairId: '/api/depth/' + pairId)
}


def req(path):
    url = 'https://indodax.com'
    api_url = url + path
    return requests.get(api_url)