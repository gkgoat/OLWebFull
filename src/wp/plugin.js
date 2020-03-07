import React from 'react'
import {ProgressPlugin} from 'webpack'
import {AsyncSeriesHook} from 'tapable'
export default class Plugin{
    constructor(alerter){this.mainBar = this.progressbar(0); this.alerter = alerter; this.progress = this.progressPlugin}
    get isBrowser(){try{navigator; return true}catch(err){return false}}
    get progressbar(){return len => (React.createElement('div',{style: {width: '100%'}},[React.createElement('div',{style: {width: len}})]))}
    get progressPlugin(){return new ProgressPlugin((percentage, message, ...args) => this.mainBar = this.alerter(message)(this.progressbar(percentage)))}
apply(c){let pbo;this.progress.apply({hooks: new Proxy(pbo = {done: new AsyncSeriesHook(['stats'])},{get: (o,k) => o[k] || c.hooks[k]})});c.hooks.succeedModule.tapPromise('smalltalksite',async (...args) => {if(args[0].exports && args[0].exports.st){await pbo.done.promise(...args )}});c.hooks.emit.tapAsync('smalltalksite',(compilation,resolve) =>  {resolve()})}

}