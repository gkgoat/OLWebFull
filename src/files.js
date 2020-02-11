import React from 'react'

export default props => {
    return (<box><filemanager cwd = {props.cwd || (props.setCWD(props.prefix))} onCd = {v => {if(v.beginsWith(props.prefix))props.setCWD(v)}}></filemanager></box>)
}