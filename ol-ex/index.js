import browser from '../src/external/browser.js'
import * as morphic from '../../morphic.js/morphic.js'
import '@webcomponents/custom-elements/custom-elements.min.js'
import * as wc from '../src/wc.js'
import SysSim from '../src/jsim/sys-sim.js'
function isDocument(elem){
return elem === document || (elem.children.filter(c => c.nodeName.toLowerCase() === 'header').length)

}
function imel(key,reloop,ime){
if(!key.st_ime){key.preventDefault(); key.stopPropagation(); key.stopImmediatePropagation();
    let nk = ime(key,KeyboardEvent)
    nk.st_ime = true;
nk.oldTarget = key.target;
    reloop(nk,reloop,ime);
}else{
    let o =     key.st_i_done;
    key.st_i_done = true;
if(!o)key.oldTarget.dispatchEvent(key);

};
}
function imeh(ime){
return key => {
return imel(key,imel,ime.default)

}

}
function copyKey(key,type,obj){
return new KeyboardEvent(type,{...key, ...obj})

}
async function init(){
let b = await browser();
let stp;
let React;
let imehh = imeh({default: k => k});
self.addEventListener('keyup',imehh)
self.addEventListener('keydown',imehh)
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
let data = new Proxy({
_isDesktop: false,
get isDesktop(){return this._isDesktop},
set isDesktop(v){if(v){document.body.children.filter(c => c.tagName !== 'st-htmlwindow').forEach(c => {let w = document.createElement('st-htmlwindow'); w.appendChild(c); document.body.appendChild(w)})}else{document.body.children.forEach(w => document.body.appendChild(w.firstChild))}; this._isDesktop = v},
start(){
SysSim.start.call(this);
this.give = (old => (...args) => old(...args).then(() => {}))(this.give);
this.putStore(this.inventory(this),mopts).done(() => {


});
}
},{get: (o,k) => o[k] || SysSim[k]})
canvases.forEach(onC = async c => {let e, init;let w = new morphic.WorldMorph(c,false); w.hand.processMouseUp = (old => event => old(e = event))(w.hand.processMouseUp.bind(w.hand));w.contextMenu = (old => () => {let m = old(); if(init){m.addItem('init',async () => {if(!await b.runtime.sendMessage({type: 'init'}))return;init(); init = null})};m.addItem('pass',() => {e.stopPropagation(); e.stopImmediatePropagation(); }); return m})(w.contextMenu.bind(w));c.c_world = w;await new Promise(async c => {init = c; c(await b.runtime.sendMessage({type: 'didInit'}))});});
let mo = new MutationObserver(mh = ml => ml.forEach(m => {
    if(isDocument(m.target) || m.target.getAttribute('st-web-all-windows-locked')){
        m.removedNodes?.filter(n => n.tagName.toLowerCase() === 'st-htmlwindow' && !n.isClosed)?.forEach(w => w.setAttribute('st-locked',true));

    }
    if(isDocument(m.target)){
        data.isDesktop = !!data.isDeesktop;

    }
    if(m.addedNodes){
        m.addedNodes.filter(n => n.classList.includes('st-window')).forEach(n => {let w = document.createElement('st-htmlwindow');let op = n.parentNode;w.appendChild(n);op.appendChild(w);w.st_un = () => {op.appendChild(n); op.removeChild(w);}});
        m.addedNodes.filter(n => !n.c_world).filter(n => n.tagName.toLowerCase() === 'canvas').forEach(n => {onC(n)});
        m.addedNodes.filter(n => n.shadowRoot || n.contentDocument).forEach(n => {let o;o = m.st_s_mo = new MutationObserver(mh); o.observe(n.shadowRoot  || n.contentDocument,mopts)});
        m.addedNodes.forEach(self => {self.addEventListener('keyup',imehh)
        self.addEventListener('keydown',imehh)});
    };
    if(m.removedNodes){
        m.removedNodes.filter(n => n.st_un).forEach(n => {n.st_un(); n.st_un = undefined});
        m.removedNodes.filter(n => n.st_s_mo).foeEach(n => n.st_s_mo.disconnect());
        let l = m.removedNodes.filter(n => n.getAttribute('st-locked'));
        l.forEach(m.target.appendChild.bind(m.target));
        l.forEach(n => {let w;n.appendChild(w = document.createElement('st-htmlwindow')); w.appendChild(document.createTextNode('Locked.'))});
        m.removedNodes.forEach(self => {self.removeEventListener('keyup',imehh)
        self.removeEventListener('keydown',imehh)});
    }

}));
mo.observe(document.body,mopts);
}
init()