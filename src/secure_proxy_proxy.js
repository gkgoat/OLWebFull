import Rpx from './recursive_proxy.js'
import {
    createPerimeter,
    createSandbox
  } from '../src/kindergarten/src/index.js';
  import {memoizeWith} from 'ramda'
  import { guard } from '../src/kindergarten/src/decorators/index.js';
  import StSymbols from './stsymbols.js'
  let mrh = memoizeWith(p => (Object.keys(p).map(k => `${k}: ${p[k].toString()}`).join(',')),protocol => memoizeWith((o,t,args,n) => o.toString() + n,(o,t,args,m) => (r => {
      let perinmeter = createPerimeter({
          purpose: 'perimeter',
getObj: guard((o,k) => o[k]),
applyObj: guard((o,t,args) => Function.prototype.apply.call(o,t,args)),
constructObj: guard((o,args,t) => Reflect.construct(o,args,t)),
expose: ['getObj','applyObj','constructObj'],
can: new Proxy(protocol),
      });
      let sandbox = createSandbox({});
      sandbox.loadModule(perinmeter);
      return Rpx(Rpx(r(o,t,args),{
          get: sandbox.perinmeter.getObj.bind(sandbox.perinmeter),
          apply: sandbox.perinmeter.applyObj.bind(sandbox.perinmeter),
          construct: sandbox.perinmeter.constructObj.bind(sandbox.perinmeter),
        }),{
get: (o,k) => k === StSymbols.security ? (new self[StSymbols.security].constructor({handler: sandbox})) : o[k],

        })
})(m === 'construct' ? (o,t,args) => Reflect.construct(o,args,t) : Function.prototype.apply.call.bind(Function.prototype.apply))));
export default protocol => pcls => (c => new Proxy(pcls,{apply: (o,t,args) => c(o,t,args,'apply'),construct: (o,args,t) => c(o,t,args,'construct')}))(mrh(protocol))