import React, {useState} from 'react'
import root from 'react-shadow';
import Window_ from '../../src/Window.js'
import Iframe_ from '../../src/Iframe.js'
import MainWelcomePage from '../index.js';
import Desktop3D from '../3desktop/index.js'
import {chromeSwitch} from '../../../OLEx/dist/index.js'
import DiscordPolyfill from '../../src/DiscordPolyfill.js'
import Discord from '../discord/index.js'
import { withObserver, MutationObserver } from 'react-mutation-observer';
import AAPI from '../../src/appi.js'
import * as R from 'ramda'
import * as Polyglot from 'node-polyglot'
export default class extends React.Component{
    constructor(props = {}){
super(props);
this.state = {objectTagSheet: {},HotTable: null,appDataMap: new Map(),windows: []};
this.aapi_ = AAPI(React)(props.mode);
this.aapi = code => this.aapi_(this,this.addWindow.bind(this))(code);
this.onSnapMessage = this.onSnapMessage.bind(this);
try{
this.renderExWinPossibly = chromeSwitch(() => (<span></span>),this.renderExWin.bind(this));
}catch(err){
    this.renderExWinPossibly = () => (<span></span>);

};
var f;
try{
f = fetch;
}catch(err){
f = () => Promise.reject();

};
(f)('/pages/api/usr').then(r => r.text()).then(t => {


}).catch(err => {});
try{
if(navigator)import('@handsontable/react').then(m => this.mounted && this.setState({HotTable: m.HotTable}));
}catch(err){


}; 
}
componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
if(prevProps.mode !== this.props.mode)this.aapi_ = AAPI(React)(this.props.mode)
  }
componentDidMount(){
    this.mounted = true;
    
    }
    componentWillUnmount(){
this.mounted = false;

    }
    addWindow(w){
        return new Promise(c => this.setState(s => ({windows: s.windows.concat([w])}),c))
    }
    removeWindow(w){
return new Promise(c => this.setState(s => ({windows: s.windows.filter(sw => sw.id !== w.id)})))

    }
    renderExWin(Div,Window){
return (<Window><Div></Div></Window>)

    }
    get discord(){return this.props.discord || (DiscordPolyfill(this))}
render(){
    let HotTable;
    try{
    if(navigator)HotTable = this.state.HotTable;
    }catch(err){
HotTable = function(props){return (<span></span>)};

    };
    let isBrowser = false;
    try{
(navigator);
isBrowser = true;

    }catch(err){


    };
    let discord = this.discord;
    let Div = this.props.div || root.div;
    let Window = this.props.Window || Window_;
    let Iframe = this.props.Iframe || Iframe_;
    let MyMutationObserver = this.props.observer || MutationObserver;
    MyMutationObserver = (Old => props => (<Old {...props} subtree = {true}>{props.children}</Old>))(MyMutationObserver);
    let windows = (this.props.windows || []).concat(this.props.div === null ? [{id: 'welcome',render: (React) => {return (<MainWelcomePage></MainWelcomePage>)}}] : []).concat(discord ? [{id: 'discord',render: (React,lib) => {let theDiscord = Discord(React,useState);return (<lib.Div><theDiscord lib = {lib} discord = {discord}></theDiscord></lib.Div>)}}] : []).concat(isBrowser ? [{id: 'three',render: rct => (<Desktop3d dcls = {Desktop} linkParent = {this}></Desktop3d>)}] : []).concat([]).concat(this.state.windows)
    return (<MyMutationObserver><Div>
    {this.props.div === null ? (<div className = {'External'}>{this.props.children}<slot></slot></div>): null}
<Window>{HotTable && <HotTable></HotTable>}</Window>
    {this.renderExWinPossibly(Div,Window)}

    {windows.map(w => (<MyMutationObserver><Window key = {w.id}><MyMutationObserver>{w.render(React,{div: Div},this.state.appDataMap.get(w.id),(v) => {this.setState({appDataMap: new Map(this.state.appDataMap).set(w.id,v)})})}</MyMutationObserver></Window></MyMutationObserver>))}
    </Div></MyMutationObserver>)
}
}