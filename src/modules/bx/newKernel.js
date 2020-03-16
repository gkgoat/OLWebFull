import {Boot as OldBoot} from './bx.js'
function BootInter(node){return new Promise((c,e) => OldBoot(node ? 'InMemory' : 'IndexedDB',[],(err,val) => err ? e(err) : c(val)))}
export async function Boot(){try{return await BootInter()}catch(err){return await BootInter(true)}}