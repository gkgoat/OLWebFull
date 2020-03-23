import {Kernel, BootArgs} from './browsix/src/kernel/kernel'
import {SocketFile} from './browsix/src/kernel/socket'
import {ITask} from './browsix/src/kernel/types'
import {mock} from './SmallMock/index.js'
export class KernelPlus extends Kernel{
    linkPort: SocketFile;
    linkReaders: Array<Function> = [];
    constructor(fs: any, nCPUs: number, args: BootArgs){super(fs,nCPUs,args); this.linkPort = this.ports[9000] = new SocketFile({kernel: this} as any as ITask); this.initLinkPort(v => Promise.all(this.linkReaders.map(r => r(v))).then(_ => {}))}
async initLinkPort(f: (a: Buffer) => Promise<void>){
    let b: any = [];
while(true){await new Promise(c => this.linkPort?.read(b = new Buffer(' '),1,(_,len) => c(len))); await f(b[0])}

}
on(e: string,h: Function){if(e === 'sock:read')this.linkReaders.push(h)}
off(e: string,h: Function){if(e === 'sock:read')this.linkReaders = this.linkReaders.filter(r => r !== h)}
once(e: string,h: Function){let h2: Function;if(e === 'sock:read')return this.on(e,h2 = (v: any) => {h(v); this.off(e,h2)}); return super.once(e,h)}
_syscallsCommon: any;
get syscallsCommon(){let args: any;return new Proxy(this._syscallsCommon,args = {get: (m => (o: any,k: string | number | symbol) => k === 'mock' ? args.mock : m())(mock()),set: mock(),mock: {old: this._syscallsCommon}} as any)}
set syscallsCommon(v){this._syscallsCommon = v?.mock?.old || v}
}