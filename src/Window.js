import React from 'react'
import Draggable from 'react-draggable';
import {Container, Row, Col} from 'react-bootstrap'
export default class extends React.Component{
render(){return (<Draggable handle = {"span._titlebar"}><Container><Row><Col><span className = {'_titlebar'}>X<span>{'_______'}</span></span></Col></Row><Row><Col>{this.props.children}</Col></Row></Container></Draggable>)}

}