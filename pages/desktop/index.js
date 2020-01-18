import React from 'react'
import root from 'react-shadow';
import Window from '../../src/Window.js'
import Iframe from '../../src/Iframe.js'
import MainWelcomePage from '../index.js';
import {confirm} from '../../../OLEx/dist/index.js'
export default class extends React.Component{
    constructor(props = {}){
super(props)
this.onSnapMessage = this.onSnapMessage.bind(this);
this.renderExWinPossibly = confirm(() => (<span></span>),this.renderExWin.bind(this));
    }
    renderExWin(){
return (<Window><root.div></root.div></Window>)

    }
render(){return (<root.div>
    <div className = {'External'}><slot></slot></div>
    <Window><MainWelcomePage></MainWelcomePage></Window>
    <Window><mjs-host></mjs-host></Window>
    {this.renderExWinPossibly()}
    <Window><root.div className = {'iframe'}><Iframe src = {'https://snap.berkeley.edu'} onMessage = {this.onSnapMessage}></Iframe></root.div></Window></root.div>)}
onSnapMessage(m){}
}