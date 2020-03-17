import React from 'react'
import Draggable from 'react-draggable';
import {Container, Row, Col} from 'react-bootstrap'
import { Manager, Reference, Popper } from 'react-popper';
import * as R from 'ramda'
import XSvg from 'raw-loader!./open-iconic/svg/x.svg'
export default class Window extends React.Component{
render(){return (<Draggable handle = {"span._titlebar"}>
    <Container>
        <Row>
            <Col>
            <Manager>
                <Reference>
                    {({ref}) => (                <span style = {{height: this.props.titleHeight || '12px'}} className = {'_titlebar'}>{this.props.noClose ? (<></>) : (<span onClick = {this.props.onClose}><svg dangerouslySetInnerHTML = {{__html: XSvg}}></svg></span>)}
                    {this.props.titlebar && this.props.titlebar()}
                <span ref = {ref}>{'_______'}</span>
                </span>)}
                </Reference>
                <Popper>
{({ ref, style, placement, arrowProps }) => (<div ref = {ref} style = {style} data-placement = {placement}>
{this.props.noPopper ? (<></>) : (<Window noPopper={true} noClose = {true} titlebar = {R.pipe(this.props.titlebar || (() => {return <span></span>}),t => (<span>{t}Help</span>))}>
Drags Window
    
</Window>)}
    <div ref={arrowProps.ref} style={arrowProps.style} />
</div>)}

                </Popper>
            </Manager>
            </Col></Row>
            <Row><Col>{this.props.children}</Col></Row>
            </Container>
        </Draggable>)}

}