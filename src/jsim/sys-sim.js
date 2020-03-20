import "./siml.js"
import Spp from '../secure_proxy_proxy.js'
let SppM_ = o => Spp(new Proxy(0,{get: (o,k) => o[k] || (() => true)}))(Proxy);
export default {
start(){
    let inventoryMap = new Map();
    let SppM = SppM_({});
this.newEntity = cls => new SppM(Object.create(cls));
this.inventory = obj => inventoryMap.get(obj,null) || inventoryMap.set(obj,new Sim.Store('sys.inventory' + obj.name,96 * (obj === this ? 100000 : 1)));
this.give = (obj,from,to) => Promise.all([new Promise(c => this.getStore(this.inventory(from),v => v === obj).done(c)),new Promise(c => this.putStore(this.inventory(to),obj).done(c))]);
let self = this;
this.newUtil_Bounceback = ({HOLDTIME}) => ({
    isBounceback: true,
    get _HOLDTIME(){return HOLDTIME},
start(){
this.send({},HOLDTIME,self)

},
onMessage(sender,message){
    this.send(message, HOLDTIME, sender);
}

})
this.newObject = ({personData,extras}) => ({
    ...extras,
start(){
    if(extras.start)extras.start.call(this);
this.putStore(self.inventory(self),this).done(() => {
if(personData){try{this.ai = new personData.AI(this);}catch(err){}; this.userWs = new WebSocket('localhost:19600');this.userWs.onerror = () => {let o = this.userWs;this.userWs = new WebSocket(location.hostname + ':1700'); this.userWs.onopen = o.onopen}; this.userWs.onopen = () => {this.onOpen().then(() => {this.userWs.send('mode:users'); this.userWs.send(personData.uid || 'a nonexistent mouse')})}}

})
this.newDOMRepresentative = ({document, MutationObserver}) => ({element}) => this.newObject({
extras: {
start(){
this.onClick = new Sim.Event();
element.addEventListener('click',evt => {this.onClick.fire()});

}

}
})
},
async onOpen(){}
})
},
onMessage(sender,message){
    let send = (m,h,s) => this.send(m,h,s);
if(sender.isBounceback)send(message, sender._HOLDTIME, sender);

}

}