import React, {useState, useEffect} from 'react'
import * as memoize from 'memoizee'
let onVue;
export default onVue = memoize(vue => props => {let [state,setState] = useState(() => vue.data());let obj = {$slots: {default: props.children},data: new Proxy(state,{set: (o,k,v) => setState(Object.extend({},o,{[k]: v}))})};useEffect(() => {vue.beforeCreate.call(obj); return () => vue.destroyed.call(obj)});return vue.render.call(obj,(o,p,c) => React.createElement(onVue(o),p,c))},{length: 1})