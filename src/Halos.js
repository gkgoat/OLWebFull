import React, {useState, useEffect} from 'react'
import R from 'ramda'
import root from 'react-shadow'
import ReactDOM from 'react-dom'
import bindThis from './bind_this.js'
import {setCodeMode, getCodeMode} from './codi.js'
let getParentChain = elem => [elem,...((elem.parentNode && getParentChain(elem.parentNode)) || [])]
let getElementChain = elem => getParentChain(elem).concat(getParentChain(elem)[0].host ? getElementChain(getParentChain(elem)[0].host) : [])
let er = ref => c => c.$$typeof.toString().includes('react.element') ? c : (<c.tagName {...new Proxy(c)} ref = {e => {ref(e) ? (() => {[].forEach.call(e.childNodes,e.removeChild.bind(e)); [].forEach.call(c.childNodes,e.appendChild.bind(e))})() : [].forEach.call(e.childNodes,c.appendChild.bind(c))}}></c.tagName>);
let HaloInner = props => {if(!props.running)return (<>{props.children}</>);return (<root.div mode = {'closed'} ref = {ReactDOM.render.bind(ReactDOM,<div>{props.children}</div>)}>
<div>

    <slot></slot>
</div>

</root.div>)}
export default win => {return new Proxy({default: 
    props => {
        let [running, setRunning] = useState(true);
        let ner = er(e => !running);
        let stop = () => {setRunning(false); };
        useEffect(() => {setRunning(true);return () => setRunning(false)},[props.elem,props.children]);
        return (<>{R.adjust(props.children.indexOf(props.elem),(e) => (<HaloInner elem = {props.elem} running = {running}>{ner(props.elem)}</HaloInner>),props.children).map(ner)}}))}</>)
    },
handHaloMap: new Map(),
},{
apply: bindThis((p,o,t,a) => {
    let h = o.handHaloMap; let oldHand = h.get(t.hand);
    if(t instanceof MouseEvent || (t.$$fakeMouseEvent)){
 let target = t.target; 
    let childrenToPut = [].slice.call(target.parentNode.childNodes);
    let stop = ()  => {[].forEach.call(target.parentNode.childNodes,target.parentNode.removeChild.bind(target.parentNode));childrenToPut.forEach(i => target.parentNode.appendChild(i));ReactDOM.unmountComponentAtNode(target.parentNode);};
    ReactDOM.render(R.tap(h.set.bind(h,t.hand))(Object.extend({},oldHand,{props: Object.extend({},oldHand.props,{elem: target,children: childrenToPut,noMoreHalos: stop})}) || (<o.default 
        noMoreHalos = {stop} 
        elem = {target} 
        children = {childrenToPut}></o.default>,target.parentNode)));
    }else if(t instanceof MessageEvent){
return p.call({$$fakeMouseEvent: true,target: new Proxy(document.querySelector(t.data.selector),{get: (elem,key) => (v => v instanceof Function ? ((...args) => setCodeMode('user',() => Function.prototype.call.call(v,elem,...args))) : v)(elem[key])})},a);

    };
    })
})}