import React from 'react'
import Desktop from '../desktop/index.js'
import blessed from 'blessed';
import {render} from 'react-blessed';
import Files from '../../src/files.js'
export default (req,res) => {
let s = blessed.screen({input: req,output: res});
let c = render(<Desktop windows = {[{id: 'files',render: (React,lib,data,setData) => (<box><Files cwd = {data.cwd} prefix = {'/home'} setCWD = {v => setData(Object.assign({},data,{cwd: v}))}></Files></box>)}]} div = {'box'} Iframe = {'box'} Window = {props => (<box draggable = {true}>{props.children}</box>)}></Desktop>,s)
}