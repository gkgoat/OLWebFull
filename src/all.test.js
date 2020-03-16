let esm = require('esm')(module);
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const puppeteer = require('puppeteer');
let dom;
let oldHE;
let browser;
let mp = {get: (o,k) => (v => (v instanceof Function || v instanceof o.appendChild.constructor) ? (o.mocks || (o.mocks = Object.create(null)))[k] || (o.mocks[k] = jest.fn(o[k])): v)(o[k])};
const Rpx = esm('./recursive_proxy.js').default;
beforeAll(async () => {
dom = new JSDOM('<html><body></body></html>',{runScripts: "dangerously"});
oldHE = global.HTMLElement;
global.HTMLElement = dom.HTMLElement;
browser = await puppeteer.launch();
})
afterAll(async () => {
    await browser.close();
    global.HTMLElement = oldHE;
dom = null;

})
beforeEach(() => {
dom.window.document.body.children.forEach(c => dom.window. document.body.removeChild(c))

})
test('testing works',() => {
expect(1 + 2).toBe(3);

});

let poolp = esm('./poolp.js').default;
test('pools promises',() => {
return poolp((o,t) => o + t)(Promise.resolve(1),Promise.resolve(2)).then(v => expect(v).toBe(3))

})

describe('dom tests',() => {
test('runs custom elements',() => {
let Shape = esm('./wc_base.js').Shape;
expect(() => new Shape()).toThrow();
})
describe('morphs',() => {
    let canvas, error, world;
beforeAll(() => {
    canvas = Rpx(dom.window.document.createElement('canvas'),mp); 
    let oldC = global.HTMLCanvasElement;
    try{
        global.HTMLCanvasElement = dom.window.HTMLCanvasElement;
        let Morphic = esm('../../morphic.js/morphic.js');
        global.HTMLCanvasElement = oldC; 
        world = new Morphic.WorldMorph(canvas,false)
    }catch(err){global.HTMLCanvasElement = oldC;error = err}});
test('loads',() => {expect(error).toBe(undefined)})

})
describe('st',() => {
let sjs = esm('./sthost/host.js').default;
let vm;
let c;
let oldPush, oldPop;
beforeAll(() => {
return sjs().then(async o => Object.assign({},o,{host: await o.runHost(c =  Rpx(await o.newNodeCanvas(),mp))})).then(o => {vm = o.host; oldPush = vm.push; oldPop = vm.pop; vm.push = jest.fn(oldPush); vm.pop = jest.fn(oldPop); return o})

});
afterAll(() => {
vm.display.quitFlag = true;
vm.push = oldPush;
vm.pop = oldPop;
})

})
});
describe('web tests',() => {


})