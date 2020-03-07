import React from 'react'
import composeRefs from '@seznam/compose-react-refs'
import {setCodeMode, getCodeMode} from './codi.js'
class IframeBase extends React.Component{
render(){let {theRef,...ps} = this.props;return (<iframe ref = {composeRefs(theRef,(i) => {
    this.listener && window.removeEventListener('message',this.listener); 
    window.addEventListener('message',this.listener = m => {if(m.source === i.contentWindow){setCodeMode('user', () => this.props.onMessage(m))}});
composeRefs(this.props.windowRef)(i.contentWindow)
})} {...ps}></iframe>)}

}
let Iframe;
export default Iframe = {canRenderHTML: true,html: React.forwardRef((props,ref) => (<IframeBase {...props} theRef = {ref}></IframeBase>))}