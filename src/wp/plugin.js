import React from 'react'
import {ProgressPlugin} from 'webpack'
import {AsyncSeriesHook} from 'tapable'
export default class Plugin{
    constructor({alerter,webIntegrator}){this.mainBar = this.progressbar(0); this.alerter = alerter; this.progress = this.progressPlugin; this.integrator = webIntegrator}
    get isBrowser(){try{navigator; return true}catch(err){return false}}
    get progressbar(){return len => (React.createElement('div',{style: {width: '100%'}},[React.createElement('div',{style: {width: len},key: 'content'})]))}
    get progressPlugin(){return new ProgressPlugin((percentage, message, ...args) => (this.mainBar = this.alerter && this.alerter(message)(this.progressbar(percentage))))}
    get statusComponent(){return props => React.createElement('div',{},[(React.createElement(React.Fragment,{},props.children))])}
    async onMessage(event,compiler){if((await event.data.type) === 'tapEmit')compiler.hooks.emit.tap('st-' + Math.random(),async () => {await (await event.source.postMessage).call(await event.source,await event.data.data)})}
    awaitUntilDone(c){return new Promise(r => c.hooks.done.tap('st-' + Math.random(),r))}
apply(c){
    this.integrator && this.integrator.onInit.then(async () => {
        let offMessage = await this.integrator.onMessage.on(async e => {this.onMessage(e,c)});

        await this.awaitUntilDone(c);

        await offMessage()
    });
    let pbo;
    this.progress.apply({hooks: new Proxy(pbo = {done: new AsyncSeriesHook(['stats'])},{get: (o,k) => o[k] || c.hooks[k]})});
    c.hooks.succeedModule && c.hooks.succeedModule.tapPromise('smalltalksite',async (...args) => {if(args[0].exports && args[0].exports.st){await pbo.done.promise(...args )}});
    c.hooks.emit.tapAsync('smalltalksite',(compilation,resolve) =>  {resolve()})}

}