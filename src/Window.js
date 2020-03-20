import React, {useState} from 'react'
import Draggable from 'react-draggable';
import {Container, Row, Col} from 'react-bootstrap'
import { Manager, Reference, Popper } from 'react-popper';
import * as R from 'ramda'
import XSvg from 'raw-loader!./open-iconic/svg/x.svg'
export default function Window(props){let [isMaximized, setIsMaximized] = useState(false);return (<div style = {{width: isMaximized && '100%',height: isMaximized && '100%'}}><Draggable handle = {"span._titlebar"}>
    <Container>
        <Row>
            <Col>
            <Manager>
                <Reference>
                    {({ref}) => (                <span st-locked = {true} style = {{height: props.titleHeight || '12px'}} className = {'_titlebar'}>{props.noClose ? (<></>) : (<span onClick = {props.onClose}><svg dangerouslySetInnerHTML = {{__html: XSvg}}></svg></span>)}
                    {props.titlebar && props.titlebar()}
                <span st-locked = {true} ref = {ref}>{'_______'}</span>
                </span>)}
                </Reference>
                <Popper>
{({ ref, style, placement, arrowProps }) => (<div ref = {ref} style = {style} data-placement = {placement}>
{props.noPopper ? (<></>) : (<Window noPopper={true} noClose = {true} titlebar = {R.pipe(props.titlebar || (() => {return <span></span>}),t => (<span>{t}Help</span>))}>
Drags Window
    
</Window>)}
    <div ref={arrowProps.ref} style={arrowProps.style} st-locked = {true}/>
</div>)}

                </Popper>
            </Manager>
            </Col></Row>
            <Row><Col>{props.children}</Col></Row>
            </Container>
        </Draggable>
        </div>)}