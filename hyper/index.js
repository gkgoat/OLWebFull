import Desktop from '../pages/desktop/index.js'
import React from 'react'
import ReactDOM from 'react-dom'
module.exports.onRendererWindow = function onRendererWindow(w){


};
module.exports.decorateTerm = function decorateTerm(Old,env){
    class New extends env.React.Component{
        constructor(){super(); this.state = {isDesktopOL: false}}
    render(){
        if(this.state.isDesktopOL)return env.React.createElement('div',{ref: e => {
            ReactDOM.render(<Desktop>{<span ref = {d => {
                env.React.render(this.props.customChildren,d)
            }
        }></span>}</Desktop>,e)}});
        return env.React.createElement(Old,Object.assign({},this.props,{ref: this.props.fRef}),this.props.children)}

    };
return env.React.forwardRef((ref,props) => (env.React.createElement(New,props,props.children)))

};