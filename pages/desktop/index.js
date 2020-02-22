import React, {useState} from 'react'
import root from 'react-shadow';
import Window_ from '../../src/Window.js'
import Iframe_ from '../../src/Iframe.js'
import MainWelcomePage from '../index.js';
import Desktop3D from '../3desktop/index.js'
import {chromeSwitch} from '../../../OLEx/dist/index.js'
import DiscordPolyfill from '../../src/DiscordPolyfill.js'
import Discord from '../discord/index.js'
import AAPI from '../../src/appi.js'
import * as R from 'ramda'
import * as Polyglot from 'node-polyglot'
import { create } from "react-test-renderer";
import MainWorker from '../../src/main.worker.js'
export default class Desktop extends React.Component{
    constructor(props = {}){
super(props);
this.state = {usesSingleWindow: false,currentWindow: undefined,objectTagSheet: {},HotTable: null,appDataMap: new Map(),windows: [],d_a: undefined,javaPackage: undefined,jlink: undefined};
this.state = Object.assign({},this.state,(() => {try{return {javaPackage: Packages.com.smalltalkland.slandroid,jlink: jlink}}catch(err){return {}}})());
this.aapi_ = AAPI(React)(props.mode);
this.aapi = code => this.aapi_(this,this.addWindow.bind(this))(code);
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
import('react-mutation-observer').then(m => this.setState({d_a: m})).catch(err => {});
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
    let wrap = R.identity;
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
    let MyMutationObserver = this.props.Observer || (this.state.d_a && this.state.d_a.MutationObserver) || (props => props.children);
    MyMutationObserver = (Old => props => Old && (<Old {...props} subtree = {true}>{props.children}</Old>))(MyMutationObserver);
    MyMutationObserver = MyMutationObserver || (props => props.children);
    let lib = {div: Div,Window,Iframe,MutationObserver: MyMutationObserver};
    let windows = (this.props.windows || [])
    .concat(this.props.div === null ? [{id: 'welcome',render: (React) => {return (<MainWelcomePage></MainWelcomePage>)}}] : [])
    .concat(discord ? [{id: 'discord',render: (React,lib) => {let theDiscord = Discord(React,useState);return (<lib.Div><theDiscord lib = {lib} discord = {discord}></theDiscord></lib.Div>)}}] : [])
    .concat(isBrowser  && Desktop3D ? [{id: 'three',render: rct => (<Desktop3D dcls = {Desktop} linkParent = {this}></Desktop3D>)}] : [])
    .concat(Iframe.canRenderHTML ? [{id: 'langs',render: r => (<Iframe.html src = {(() => {try{return location.hostname + '/lang/' + lang}catch(err){return ''}})()} windowRef = {win => {ReactDOM.render(<Div></Div>,win.document.querySelector('#firstHeading'))}}></Iframe.html>)}] : []).concat([]).concat(this.state.windows)
    let rw = w => (<MyMutationObserver key = {w.id}><Window><MyMutationObserver>{w.render(React,lib,this.state.appDataMap.get(w.id),(v) => {this.setState({appDataMap: new Map(this.state.appDataMap).set(w.id,v)})})}</MyMutationObserver></Window></MyMutationObserver>);
    if(this.props.w)wrap = R.pipe(wrap,this.props.w.bind(null,lib));
    if(this.state.usesSingleWindow)wrap = R.pipe(wrap,e => (<MyMutationObserver><Div>{this.state.currentWindow ? rw(this.state.currentWindow) : this.props.children}</Div></MyMutationObserver>));
if(this.props.isWatch)wrap = R.pipe(wrap,e => (<MyMutationObserver><Div><this.props.Watch><MyMutationObserver>{e.props.children[0].props.children[0].props.children}</MyMutationObserver></this.props.Watch></Div></MyMutationObserver>));
    if(this.props.head === 'less')wrap = R.pipe(wrap,create);
    if(this.props.head === 'embed')wrap = R.pipe(wrap,e => {e.props.children[0].props.children.map(c => c.key === 'sutils' ? c.props.children[0].props.children[0].props.children[0].children.map(nc => ReactDOM.render(nc,(e => {e.classList.add('ol');let existing = document.querySelector('.sprite-info_group_14-B_').querySelector('.ol');if(existing)return existing;document.querySelector('.sprite-info_group_14-B_')?.appendChild(e); return e})(document.createElement('div')))) : null)});
    return wrap(<MyMutationObserver><Div>
    {this.props.children}
<Window>{HotTable && <HotTable></HotTable>}</Window>
    {this.renderExWinPossibly(Div,Window)}

    {windows.map(rw)}
    </Div></MyMutationObserver>)
}
}