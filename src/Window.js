import React from 'react'
import Draggable from 'react-draggable';
export default class extends React.Component{
render(){return (<Draggable handle = {"span"}><div><span>X<span>{'_______'}</span></span><div>{this.props.children}</div></div></Draggable>)}

}