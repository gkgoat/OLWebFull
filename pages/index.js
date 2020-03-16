import React from 'react'
import Link from 'next/link'
import Window from '../src/Window.js'
import changeLanguage_ from '../src/lang.js'
import {Container, Row, Col, Tabs, Tab} from 'react-bootstrap'
let changeLanguage = global.localStorage && changeLanguage_.bind(null,localStorage.setItem.bind(localStorage,'lang'));
function MainWelcomePage(props = {}){
    let theRef = React.createRef();
return (<div>
    <p ref = {theRef}></p>
    <h3>Desktop <Link href = '/desktop'><a>here</a></Link></h3>
    {global.localStorage && (localStorage.getItem('lang') || ((!localStorage.getItem('lang')) && localStorage.getItem('lang-temp'))) || (<span><button onClick = {changeLanguage && changeLanguage.bind(null,theRef)}>Confirm Language</button></span>)}
    <h1>Welcome To Smalltalk{props.user ? ',': '.'} {props.user && props.user.name || ''}{props.user && '.'}</h1>
    <div>
<Container>
{products && products.map(p => (<Row key = {p.id}><Col><Tabs defaultActiveKey = {'try'}><Tab eventKey = {'try'}>{p.try(React,{noWelcome: true})}</Tab></Tabs></Col></Row>))}

</Container>
    </div>
</div>)
}
export default MainWelcomePage