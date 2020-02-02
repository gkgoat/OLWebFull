import React from 'react'
import root from 'react-shadow';
import Window from '../../src/Window.js'
import Iframe from '../../src/Iframe.js'
import MainWelcomePage from '../index.js';
import {chromeSwitch} from '../../../OLEx/dist/index.js'
import * as Polyglot from 'node-polyglot'
export default class extends React.Component{
    constructor(props = {}){
super(props);
this.state = {objectTagSheet: {},HotTable: null};
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
componentDidMount(){
    this.mounted = true;
    
    }
    componentWillUnmount(){
this.mounted = false;

    }
    renderExWin(){
return (<Window><root.div></root.div></Window>)

    }
render(){
    let HotTable;
    try{
    if(navigator)HotTable = this.state.HotTable;
    }catch(err){
HotTable = function(props){return (<span></span>)};

    };
    return (<root.div>
    <div className = {'External'}>{this.props.children}<slot></slot></div>
    <Window><MainWelcomePage></MainWelcomePage></Window>
    <Window><mjs-host></mjs-host></Window>
<Window>{HotTable && <HotTable></HotTable>}</Window>
    {this.renderExWinPossibly()}
    <Window><root.div className = {'iframe'}><Iframe src = {'https://snap.berkeley.edu'} onMessage = {this.onSnapMessage}></Iframe></root.div></Window></root.div>)}
onSnapMessage(m){}
}