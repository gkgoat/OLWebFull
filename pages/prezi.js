import React, {useEffect} from 'react'
import Desktop from './desktop/index.js'
import Reveal from 'reveal'
import bindThis from '../src/bind_this.js'
import Index from './index.js'
import Iframe from '../src/Iframe.js'
export default Object.assign(props => {
    useEffect(Reveal.initialize.bind(Reveal));
    return (<>
    <section>Welcome to Smalltalk!</section>
    <section>
<h1>Projects</h1>
<Iframe src = {'about:blank'} winReact = {<html><body><Index {...props} onlyProjects = {true}></Index></body></html>}></Iframe>
    </section>
    <section>
<h1>Main Page:</h1>
<Iframe src = {'about:blank'} winReact = {<html><body><Index {...props}></Index></body></html>}></Iframe>
    </section>
    <section>{props.noDesktop ? null : <Desktop {...props}></Desktop>}</section>
    </>)
},{w: bindThis((to,e) => {
    return (<div className = {'reveal'}><div className = {'slides'}>{e.children.filter(c => c.type !== to)} {e.children.filter(c => c.type === to).map(c => (<div>{c}</div>))}</div></div>)
})})