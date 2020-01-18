import React from 'react'
import composeRefs from '@seznam/compose-react-refs'
class IframeBase extends React.Component{
render(){let {theRef,...ps} = this.props;return (<iframe ref = {composeRefs(theRef,(i) => {this.listener && window.removeEventListener('message',this.listener); window.addEventListener('message',this.listener = m => {if(m.source === i.contentWindow){this.props.onMessage(m)}})})} {...ps}></iframe>)}

}
let Iframe;
export default Iframe = React.forwardRef((props,ref) => (<IframeBase {...props} theRef = {ref}></IframeBase>))