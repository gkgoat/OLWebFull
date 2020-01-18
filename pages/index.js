import React from 'react'
import Link from 'next/link'
import Window from '../src/Window.js'
import changeLanguage_ from '../src/lang.js'
let changeLanguage = global.localStorage && changeLanguage_.bind(null,localStorage.setItem.bind(localStorage,'lang'));
function MainWelcomePage(props = {}){
    let theRef = React.createRef();
return (<div>
    <p ref = {theRef}></p>
    <h3>Desktop <Link href = '/desktop'><a>here</a></Link></h3>
    {global.localStorage && (localStorage.getItem('lang') || ((!localStorage.getItem('lang')) && localStorage.getItem('lang-temp'))) || (<span><button onClick = {changeLanguage && changeLanguage.bind(null,theRef)}>Confirm Language</button></span>)}
    <h1>Welcome To ObjectLand{props.user ? ',': '.'} {props.user && props.user.name || ''}{props.user && '.'}</h1>
    <div>
        <h2>Pureness</h2>
        <p>ObjectLand's Squeak runtime is pure. ObjectLand's JavaScript runtime is mostly pure</p>
        <p>Pure means that:
<ul>
<li>Everything is an object and it takes things from something</li>
<li>Every object holds state, which are objects</li>
<li>Every object communicates by sending messages to other objects</li>
</ul>

        </p>
    </div>
</div>)
}
export default MainWelcomePage