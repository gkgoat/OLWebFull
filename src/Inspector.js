import React, {useState} from 'react'
import * as R from 'ramda'
let Inspector;
export default Inspector = R.pipe(props => Object.assign({},props,props.lib),props => {if(props.Tabs && props.Div && props.List && props.TextArea && props.Window){let [key,setKey] = useState([]);let isReactComponent = props.obj instanceof Function;return (<props.Tabs.Tabs>
    <props.Tabs.Tab title = {'Inspect'}>
        <props.Div>
            <props.List all = {Object.keys(props.obj)} selected = {key} onSelect= {setKey}></props.List>
            <props.Div direction = {'ttb'}>
                <props.TextArea value = {props.obj[key]?.toString()}></props.TextArea>
                <Inspector obj = {props.obj[key]}></Inspector>
            </props.Div>
        </props.Div>
    </props.Tabs.Tab>
    {props.obj.wantsToBeInspectedAsReact ? (<props.Tabs.Tab title = {'Use'}>
        <props.Window>
            <props.obj></props.obj>

        </props.Window>

    </props.Tabs.Tab>) : null}
</props.Tabs.Tabs>)}; return null})