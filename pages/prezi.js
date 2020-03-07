import React, {useEffect} from 'react'
import Desktop from './desktop/index.js'
import Reveal from 'reveal'
export default props => {useEffect(Reveal.initialize.bind(Reveal));return (<div className = {'reveal'}><div className = {'slides'}><section><Desktop {...props}></Desktop></section></div></div>)}