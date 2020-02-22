import React, {useState} from 'react'
import Desktop from '../desktop/index.js'
import blessed from 'blessed';
import {render} from 'react-blessed';
import Files from '../../src/files.js'
import useHandler from '../../../src/handler.js'
import {Server as WSServer} from 'ws'
export default (req,res) => {
let s = blessed.screen({input: req,output: res});
let Sochet = props => {
    let [wss,setWss] = useState(() => new WSServer({noServer: true})); 
    useHandler('connection',ws => {},'on','off',wss);
    useHandler('upgrade',(r,s,h) => {wss.handleUpgrade(r,s,h,ws => {wss.emit('connection',ws,r)})},'on','off',req.server)
return props.children({id: 'websocket',render: (React,lib) => (<lib.Div></lib.Div>)})
};
let c = render(<Sochet>{wsw => <Desktop discord = {res.discord} windows = {[wsw,{id: 'files',render: (React,lib,data,setData) => (<box><Files cwd = {data.cwd} prefix = {'/home'} setCWD = {v => setData(Object.assign({},data,{cwd: v}))}></Files></box>)}]} div = {'box'} Iframe = {'box'} Window = {props => (<box draggable = {true}>{props.children}</box>)} observer = {props => (<box>{props.children}</box>)}></Desktop>}</Sochet>,s)
}