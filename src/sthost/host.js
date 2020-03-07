import blobbiEvents from '../blobbi/text_model.js'
import * as R from 'ramda'
import saf from '../saf.js'
export default () => import('../../../SqueakJS/squeak.js').then(() => ({runHost: async function(){
    self.SqueakJS.runImage(URL.createObjectURL(new Blob(await import('raw-loader!../../../data/host.image')))); 
    let vm = await this.onVM();
    let push = R.tap(vm.push.bind(vm));
    while(push(vm.pop()).stl === undefined)await saf(); 
    let stl = vm.primHandler.js_fromStBlock(push(vm.pop()).stl);
    blobbiEvents.on('tell squeak',async arg => {})},onVM: () => new Promise(c => {let sjs = Object.getOwnPropertyDescriptor(self.SqueakJS,'vm');Object.defineProperty(self.SqueakJS,'vm',{get: () => null,set: v => {
        function run() {
            try {
                if (v.display.quitFlag) self.onQuit(v, v.display, options);
                else v.interpret(50, function runAgain(ms) {
                    if (ms == "sleep") ms = 200;
                    try{
                    window.setTimeout(run, ms);
                    }catch(err){};
                });
            } catch(error) {
                console.error(error);
                alert(error);
            }
        }
        c(v);
        Object.defineProperty(self.SqueakJS,'vm',sjs);
        run();
    }})})}))