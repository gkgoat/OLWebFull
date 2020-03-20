import * as Jemul from './imp.js'
import mi from '../mi.js'
class NJemul extends mi(Jemul.Jemul8){
constructor(it){super(new Proxy(it,{get: (o,k) => k === 'memoryAllocator' ? new Proxy(o[k],{ }): o[k]}))}

}