import * as R from 'ramda'
import { fromEvent, merge, interval } from 'rxjs';
import * as RxOperators from 'rxjs/operators'
import poolp from './poolp.js'
import why from './async_loop.js'
let myRxMessages = fromEvent(self,'message');
let reboot = import('./external/reboot.js').catch(err => null);
let myWorkerCreation = myRxMessages.pipe(RxOperators.filter(R.pipe(R.path(['data','type']),R.equals('newWorker'))));
let subWorkers = myWorkerCreation.pipe(RxOperators.map(R.pipe(R.path(['data','data']),R.construct(Blob),URL.createObjectURL.bind(URL),R.construct(Worker))),RxOperators.map(R.partialRight(fromEvent,'message')));
let subWorkersAll = subWorkers.pipe(RxOperators.mergeMap(R.identity));
let allMessages = merge(myRxMessages,subWorkersAll);
let time = interval(1).pipe(RxOperators.map(R.partialRight(R.divide,1000)));
let objMap = new WeakMap();
let r;
let setObject = o => objMap.set(r = Math.random(),o);
let sow = R.pipe(R.apply(R.juxt)([poolp(R.tap(setObject)),R.identity]),o => poolp(R.apply(R.identity))(...[o[0],r,o[1]]),poolp(l => ({res: l[1],id: l[2]})));
let pv = p => {let v;p.then(rv => v = rv); return v};
let objSub = allMessages.pipe(RxOperators.map(R.props('data','source'))).subscribe(R.pipe(R.cond([
    [R.pipe(R.prop(0),R.prop('type'),R.equals('get')),R.pipe(R.apply(R.juxt)([R.pipe(d => [objMap.get(d[0].obj)[d[0].k],o[1]],sow),R.identity]))],
    [R.pipe(R.prop(0),R.prop('type'),R.equals('apply')),R.pipe(R.apply(R.juxt)([R.pipe(d => [(() => (0)).apply.call((d[0].curried ? R.uncurryN(d[0].cv) : R.identity)(objMap.get(d[0].obj)),d[0].t,d[0].args.map(objMap.get.bind(objMap))),o[1]],sow),R.identity]))]
]),R.pipe(R.apply(poolp(self.postMessage.call.bind(self.postMessage))))));