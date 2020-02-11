import React from 'react'
import root from 'react-shadow';
import Window_ from '../../src/Window.js'
import Iframe_ from '../../src/Iframe.js'
import MainWelcomePage from '../index.js';
import {chromeSwitch} from '../../../OLEx/dist/index.js'
import * as Polyglot from 'node-polyglot'
export default class extends React.Component{
    constructor(props = {}){
super(props);
this.state = {objectTagSheet: {},HotTable: null,appDataMap: new Map()};
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
    renderExWin(Div,Window){
return (<Window><Div></Div></Window>)

    }
render(){
    let HotTable;
    try{
    if(navigator)HotTable = this.state.HotTable;
    }catch(err){
HotTable = function(props){return (<span></span>)};

    };
    let Div = this.props.div || root.div;
    let Window = this.props.Window || Window_;
    let Iframe = this.props.Iframe || Iframe_;
    let windows = (this.props.windows || []).concat(this.props.div === null ? [{id: 'welcome',render: (React) => (<MainWelcomePage></MainWelcomePage>)}] : []).concat([])
    return (<Div>
    {this.props.div === null ? (<div className = {'External'}>{this.props.children}<slot></slot></div>): null}
<Window>{HotTable && <HotTable></HotTable>}</Window>
    {this.renderExWinPossibly(Div,Window)}

    {windows.map(w => (<Window key = {w.id}>{w.render(React,{div: Div},this.state.appDataMap.get(w.id),(v) => {this.setState({appDataMap: new Map(this.state.appDataMap).set(w.id,v)})})}</Window>))}
    </Div>)
}
}