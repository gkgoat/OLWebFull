import * as _React from 'react'
import Desktop_$ from '../pages/desktop/index.js'
import ReactDOM from 'react-dom'
try{
let React = Object.extend({},_React,_React.React,ReactDOM)
let Desktop_ = props => {return (<Desktop_$ {...props} w = {(e, lib) => props.w(<lib.MyMutationObserver><lib.Div>{props.replacement(React)(e,lib) || (e.props.children[0].props.children[0].props.children)}</lib.Div></lib.MyMutationObserver>)}></Desktop_$>,lib)};
let d_;
try{
d_ = document.createElement('div');
}catch(err){};
let dr_;
dr_ = React.render.bind(React,<Desktop_ replacement = {React => (e,lib) => (<lib.Div><lib.Div></lib.Div></lib.Div>)}></Desktop_>);
dr_(d_);
}catch(err){


}
export let d = d_;
export let dr = dr_;
export let Desktop = Desktop_;
export let _React_ = React;