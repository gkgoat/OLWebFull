import * as reboot from '../../../re-boot/dist/index'
import * as R from 'ramda'
import poolp from '../poolp.js'
import React, {lazy} from 'react'
import * as St from './model'
import Konva from 'konva';
import { Stage, Layer, Star, Text } from 'react-konva';
let identityComponent = props => (<>{props.children}</>)
// same memoize function from before
const memoize = (fn) => {
    let cache = new Map();
    return (...args) => {
      let n = args[0];
      if (cache.has(n)) {
        return cache.get(n);
      }
      else {
        let result = fn(n);
        cache.set(n,result);
        return result;
      }
    }
  }
  let mlazy = memoize(lazy);
export let DOMRenderer = R.pipe(props => Object.assign({},props,{VMSuspense: mlazy(props.vm.driver.ping().catch(err => null)).read()}),function(props){let {vm,setVM} = props;let SStage = props.useStage ? Stage : identityComponent;let SLayer = props.useLayer ? Layer : identityComponent;return (<SStage width = {props.width} height = {props.height}><SLayer><Shape sceneFunc = {(ctxt,shape) => {poolp((nvm) => {context.fillStrokeShape(shape); return setVM(nvm)})(vm.driver.renderOn(ctxt))}}></Shape></SLayer></SStage>)})