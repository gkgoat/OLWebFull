import * as R from 'ramda'
import { fromEvent, merge, interval } from 'rxjs';
import * as RxOperators from 'rxjs/operators'
let myRxMessages = fromEvent(self,'message');
let myWorkerCreation = myRxMessages.pipe(RxOperators.filter(R.pipe(R.path(['data','type']),R.equals('newWorker'))));
let subWorkers = myWorkerCreation.pipe(RxOperators.map(R.pipe(R.path(['data','data']),R.construct(Blob),URL.createObjectURL.bind(URL),R.construct(Worker))),RxOperators.map(R.partialRight(fromEvent,'message')));
let subWorkersAll = subWorkers.pipe(RxOperators.mergeMap(R.identity));
let allMessages = merge(myRxMessages,subWorkersAll);
let time = interval(1).pipe(RxOperators.map(R.partialRight(R.divide,1000)));
