import browser from '../src/external/browser.js'
import * as morphic from '../../morphic.js/morphic.js'
import '@webcomponents/custom-elements/custom-elements.min.js'
import * as wc from '../src/wc.js'
async function init(){
let b = await browser();
let stp;
let React;
if(location.hash.beginsWith('st')){
stp = (async () => {
React = await import('react');
let ReactDOM = await import('react-dom');
React = Object.assign({},React,React.default,ReactDOM);
let Window = (await import('../src/Window.js')).default;
let d;
document.body.appendChild(d = document.createElement('div'));
React.render(<div>
<Window>

    
</Window>

</div>,d)
})();


}
let canvases = document.querySelectorAll('canvas');
let onC;
let mh;
let mopts = {subtree: true,childList: true};
canvases.forEach(onC = async c => {let e, init;let w = new morphic.WorldMorph(c,false); w.hand.processMouseUp = (old => event => old(e = event))(w.hand.processMouseUp.bind(w.hand));w.contextMenu = (old => () => {let m = old(); if(init){m.addItem('init',async () => {if(!await b.runtime.sendMessage({type: 'init'}))return;init(); init = null})};m.addItem('pass',() => {e.stopPropagation(); e.stopImmediatePropagation(); }); return m})(w.contextMenu.bind(w));c.c_world = w;await new Promise(async c => {init = c; c(await b.runtime.sendMessage({type: 'didInit'}))});});
let mo = new MutationObserver(mh = ml => ml.forEach(m => {
    if(m.addedNodes){
        m.addedNodes.filter(n => n.classList.includes('st-window')).forEach(n => {let w = document.createElement('st-htmlwindow');let op = n.parentNode;w.appendChild(n);op.appendChild(w);w.st_un = () => {op.appendChild(n); op.removeChild(w);}});
        m.addedNodes.filter(n => !n.c_world).filter(n => n.nodeType.toLowerCase() === 'canvas').forEach(n => {onC(n)});
        m.addedNodes.filter(n => n.shadowRoot).forEach(n => {let o;o = m.st_s_mo = new MutationObserver(mh); o.observe(n.shadowRoot,mopts)});
    };
    if(m.removedNodes){
        m.removedNodes.filter(n => n.st_un).forEach(n => {n.st_un(); n.st_un = undefined});
        m.removedNodes.filter(n => n.st_s_mo).foeEach(n => n.st_s_mo.disconnect());
    }

}));
mo.observe(document.body,mopts);
}
init()