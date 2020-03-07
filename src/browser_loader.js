import browser from './external/browser.js'
import React, {useState} from 'react'
export default props => { let [val,setVal] = useState();if(!val)browser().then(setVal);return props.children(val)}