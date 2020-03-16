import {toType, toAny} from './cast'
import Rpx from './recursive_proxy.js'
//@ts-ignore
import * as reboot from '../../re-boot/dist/index.js'
export default (f: (arg0: any) => any) => Rpx(f,{get: function(o: any,k: string | number | symbol){if(k === 'run')return o;if(k === 'commands')return o;return o((k.toString()).split('').map(c => c.charCodeAt(0)).map(i => new Array(i).reduce(reboot.ADD1,reboot.ZERO)).map(reboot.CHAR).reduce((p,c) => reboot.CONS(c)(p),reboot.FALSE))}})