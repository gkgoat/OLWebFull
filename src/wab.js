import Rpx from './recursive_proxy.js'
let sw = f => (...args) => {return (v => {return v})(f(...args))};
WebAssembly.Instance = new Proxy(WebAssembly.Instance,{construct: (o,args,t) => Reflect.construct(o,args.map(arg => arg.constructor === Object ? (Rpx(arg,{get: (o,k) => o instanceof Object ? o : sw(o)})) : arg),t)})