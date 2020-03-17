import React, {useState} from 'react'
import * as ReactZ from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import root from 'react-shadow';
import Window_ from '../../src/Window.js'
import Iframe_ from '../../src/Iframe.js'
import MainWelcomePage from '../index.js';
import Desktop3D from '../3desktop/index.js'
import DiscordPolyfill from '../../src/DiscordPolyfill.js'
import Discord from '../discord/index.js'
import AAPI from '../../src/appi.js'
import * as R from 'ramda'
import * as Polyglot from 'node-polyglot'
import { create } from "react-test-renderer";
import MainWorker from '../../src/main.worker.js'
import BrowserWrapper from '../../src/browser_loader.js'
import Prezi from '../prezi.js'
import cw from '../../src/cw.js'
import useEventListener from '../../src/handler.js'
import Inspector_ from '../../src/Inspector.js'
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {    return { hasError: true };  }
    componentDidCatch(error, errorInfo) {     }
    render() {
      if (this.state.hasError) {      return <h1>Something went wrong.</h1>;    }
      return this.props.children; 
    }
  }
let Inspector = R.pipe(props => Object.assign({},props,props.lib),Inspector_);
let DefaultDOMCanvas = props => (<canvas {...props} ref = {props.onCanvas}></canvas>)
let List = props => (<div>{props.all.map(v => (<div className = {props.selected === v ? 'selected' : ''} onClick = {props.onSelect.bind(null,v)} key = {v}></div>))}</div>)
let ExtensionLib;
import('../../ol-ex/lib.js').then(v => ExtensionLib = v).catch(err => {});
export default class Desktop extends React.Component{
    get document(){try{return document}catch(err){return null}}
    constructor(props = {}){
super(props);
this.state = {usesSingleWindow: false,currentWindow: undefined,objectTagSheet: {},HotTable: null,appDataMap: new Map(),windows: [],d_a: undefined,javaPackage: undefined,jlink: undefined,ex: undefined};
this.state = Object.assign({},this.state,(() => {try{return {javaPackage: Packages.com.smalltalkland.slandroid,jlink: jlink}}catch(err){return {}}})());
this.aapi_ = React && AAPI(React)(props.mode);
this.aapi = code => this.aapi_(this,this.addWindow.bind(this))(code);
    this.renderExWinPossibly = () => (<span></span>);
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
    let document = this.document;
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
    let DOMCanvas = this.props.Canvas || DefaultDOMCanvas;
    let MyMutationObserver = this.props.Observer || /*(this.state.d_a && this.state.d_a.MutationObserver) || */(props => props.children);
    if(!document)MyMutationObserver = props => props.children;
    MyMutationObserver = MyMutationObserver || (props => props.children);
    let lib = {List,div: Div,Div,Window,Iframe,MutationObserver: MyMutationObserver,useEventListener,DOMInterop: {DOMCanvas},cw,desk: {getDeskProps: () => this.props},TextArea: isBrowser || document ? 'textarea': null,Tabs: isBrowser || document ? {Tabs, Tab} : null};
    let windows = (this.props.windows || [])
    .concat(this.props.div === null ? [{id: 'welcome',render: (React) => {return (<MainWelcomePage></MainWelcomePage>)}}] : [])
    .concat(discord ? [{id: 'discord',render: (React,lib) => {let theDiscord = Discord(React,useState);return (<lib.Div><theDiscord lib = {lib} discord = {discord}></theDiscord></lib.Div>)}}] : [])
    .concat(isBrowser  && Desktop3D ? [{id: 'three',render: rct => (<ErrorBoundary><Desktop3D dcls = {Desktop} linkParent = {this}></Desktop3D></ErrorBoundary>)}] : [])
    //.concat(isBrowser ? [{id: 'prezi',render: rct => Prezi.w(<div><Prezi noDesktop = {true}></Prezi></div>)}] : [])
    .concat(Iframe.canRenderHTML && ExtensionLib ? [{id: 'langs',render: r => (<Iframe.html src = {(() => {try{return location.hostname + '/lang/' + lang}catch(err){return ''}})()} windowRef = {win => {ExtensionLib.dr(win.document.querySelector('#firstHeading'))}}></Iframe.html>)}] : [])
    .concat(this.constructor.wins.map(w => w(this,lib)))
    .concat([])
    .concat(this.state.windows)
    .concat([{id: 'self',render: (React,lib) => (<Inspector lib = {lib} obj = {this}></Inspector>)}])
    let rw = w => (<MyMutationObserver key = {w.id}><Window><MyMutationObserver>{w.render(Object.assign({},React,ReactZ),lib,this.state.appDataMap.get(w.id),(v) => {this.setState({appDataMap: new Map(this.state.appDataMap).set(w.id,v)})})}</MyMutationObserver></Window></MyMutationObserver>);
    if(this.props.w)wrap = R.pipe(wrap,this.props.w.bind(null,lib));
    if(this.state.usesSingleWindow)wrap = R.pipe(wrap,e => (<MyMutationObserver><Div>{this.state.currentWindow ? rw(this.state.currentWindow) : this.props.children}</Div></MyMutationObserver>));
if(this.props.isWatch)wrap = R.pipe(wrap,e => (<MyMutationObserver><Div><this.props.Watch><MyMutationObserver>{e.props.children[0].props.children[0].props.children}</MyMutationObserver></this.props.Watch></Div></MyMutationObserver>));
    if(this.props.head === 'less')wrap = R.pipe(wrap,create);
    if(this.props.head === 'embed')wrap = R.pipe(wrap,e => {e.props.children[0].props.children.map(c => c.key === 'sutils' ? c.props.children[0].props.children[0].props.children[0].children.map(nc => ReactDOM.render(nc,(e => {e.classList.add('ol');let existing = document.querySelector('.sprite-info_group_14-B_').querySelector('.ol');if(existing)return existing;document.querySelector('.sprite-info_group_14-B_')?.appendChild(e); return e})(document.createElement('div')))) : null)});
if(this.props.connextToEx)wrap = R.pipe(wrap,e => this.props.ex ? (() => {this.setState((s,p) => ({ex: p.ex})); return e})() : (<BrowserWrapper>{v => {this.setState({ex: v});return e}}</BrowserWrapper>));
    return wrap(<MyMutationObserver><Div>
    {this.props.children}
<Window>{HotTable && <HotTable></HotTable>}</Window>
    {this.renderExWinPossibly(Div,Window)}

    {windows.map(rw)}
    </Div></MyMutationObserver>)
}
}
Object.assign(Desktop,{wins: [],wantsToBeInspectedAsReact: true})