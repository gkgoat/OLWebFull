import Rpx from './recursive_proxy.js'
import StSymbols from './stsymbols.js'
let sw = f => (...args) => {return (v => {return new Proxy(v,{get: (o,k) => o[k]})})(f(...args))};
WebAssembly.Instance = new Proxy(WebAssembly.Instance,{construct: (o,args,t) => Reflect.construct(o,args.map(arg => arg.constructor === Object ? (Rpx(arg,{get: (o,k) => o[k] instanceof Object ? o[k] : sw(o[k])})) : arg),t)})