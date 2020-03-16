import browser from '../src/external/browser.js'
import * as R from 'ramda'
import {JSDOM} from 'jsdom'
import 'pseudo-worker/polyfill'
import MyWorker from 'worker-loader!../src/main.worker.js'
async function init(){
let b = await browser();
let d = new JSDOM('',{runScripts: 'dangerously'});
let w = new MyWorker();
let pm = self => v => new Promise(c => {let id;self.postMessage(Object.assign({},v,{id: id = Math.random()}));let om;self.addEventListener('message',om = evt => {if(evt.data.id === id){self.removeEventListener('message',om);c(evt.data)}})});
let tabs = [];
b.tabs.onCreated.addListener(async function onCreate(t){
tabs.push(t);

});
(await b.tabs.query({})).then(a => a.forEach(onCreate));
b.tabs.onRemoved.addListener(t => tabs = tabs.filter(n => n !== t));
let postToAll = m => Promise.all(tabs.map(t => b.tabs.sendMessage(t,m)));
w.addEventListener('message',async evt => {
    if(evt.data.type  === 'postOut')evt.source.postMessage({type: 'reply',data: await b.runtime.sendMessage(evt.data.data),id: evt.data.id});
    if(evt.data.type === 'reflect')onMessage(evt.data.data,null,m => {evt.sender.postMessage(Object.assign({},m,{id: evt.data.id}))});
});
b.runtime.onMessage.addListener(R.cond([[m => m.st,async function onMessage(message,sender,reply){
if(message.type === 'broadcast')reply(await postToAll(message.data));
if(message.type === 'postToJSDOM')reply(await pm(d.window)(message.data));
if(message.type === 'postToWorker')reply(await pm(w)(message.data));
}],[R.T,R.always(null)]]));
}
init()