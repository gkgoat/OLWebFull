import React from 'react'
import ReactDOM from 'react-dom'
import Window from './Window.js'
export class Shape extends HTMLElement{
constructor(){super(); let s = this.attachShadow({mode: 'open'}); s.appendChild(this.shape(document.createElement('slot')))}

}
export class HTMLWindow extends HTMLElement{
constructor(){
super();
let s = this.attachShadow({node: 'open'});
this.d = document.createElement('div');
s.appendChild(this.d);
ReactDOM.render(<div><Window {...this}><slot></slot></Window></div>,this.d)

}
attributeChangedCallback(name,old,newV){ReactDOM.render(<div><Window {...this}><slot></slot></Window></div>,this.d)}
static get observedAttributes(){return Object.keys(Window.propTypes)}
}