module.exports = {
    path: '*',
    method: 'all',
    lookup: 'connection.remoteAddress',
    // 5000 requests per hour
    total: 5000,
    expire: 1000 * 60 * 60
}