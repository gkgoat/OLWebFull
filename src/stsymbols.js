export default new Proxy(Symbol.st || {},{get: (o,k) => o[k] || (o[k] = new Symbol()),has: (o,k) => true})