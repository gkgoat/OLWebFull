import {Fraction, Expression, Equation} from 'algebra.js'
import {Decimal} from 'decimal.js';
import React, {useState} from 'react'
let Numpad = props => (<props.Div>
{new Array(10).map((_,index) => {return (<props.Div key = {index} onClick = {(evt) => props.onClick(index,evt)}>{index}</props.Div>)}).reduce((acc,v) => acc.concat([v.props.key % 3 === 0 ? (<props.Break key = {'br' + v.props.key}></props.Break>) : null,v]),[])}

</props.Div>)
export default R.pipe(props => Object.assign({},props,props.lib),props => {
let [expr, setExpr] = useState('');
let [hiddenBeginning, setHiddenBeginning] = useState('');
    return (<props.Div>
        {expr}
<props.Tabs.Tabs>
<props.Tabs.Tab title = {'Standard'}>
<Numpad Div = {props.Div} Break = {'br'} onClick = {num => setExpr(expr + num)}>


</Numpad>
{['+','-','*','/'].map(op => (<props.Div key = {op} onClick ={() => {setHiddenBeginning(hiddenBeginning + op + expr); setExpr('')}}>{op}</props.Div>))}
<props.Div onClick = {() => {setExpr(props.evalVersitile(hiddenBeginning + expr)); setHiddenBeginning('')}}>=</props.Div>
</props.Tabs.Tab>

</props.Tabs.Tabs>

    </props.Div>)
})