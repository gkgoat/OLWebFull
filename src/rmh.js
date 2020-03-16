import React, {useState} from 'react'
import * as R from 'ramda'
import useProp from './useProp.js'
export let Morph = props => {return props.w(<props.Container>{props.submorphs.map(c => (<c.klass {...c}></c.klass>))}</props.Container>)}
let HasStyle = s => props => {return Object.assign({},props,{w: R.pipe(props.w,ob => React.createElement(ob.type,Object.assign({},ob.props,{style: ob.props.style + s(props)}),ob.props.children))})}
let HasColor = HasStyle(p => `background-color: ${p.color};`)
export let ColoredMorph = R.pipe(HasColor,Morph);
let HasExtent = HasStyle(p => `left: ${p.left};top: ${p.top};width: ${p.width};height:${p.height};`);
export let ExtentedMorph = R.pipe(HasExtent,Morph);
export let ColoredExtentedMorph = R.pipe(HasExtent,HasColor,Morph)
let HasText = pt => props => {return Object.assign({},props,{w: R.pipe(props.w,ob => pt(props))})};
export let TextMorph = R.pipe(HasText,Morph)