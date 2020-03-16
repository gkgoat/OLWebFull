import input from './clui-driver'
import clkp from './clkp'
import {toAny} from './cast'
import * as R from 'ramda'
export default (c: (arg0: any) => any,obj: any) => input(toAny(Object).assign({},obj,{command: clkp(c),onUpdate: R.pipe((us: { run: any }) => ({type: us.run ? 'run': 'update',data: us.run ? us.run() : us}),obj.onUpdate)}))