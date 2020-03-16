// import App from 'next/app'
import React from 'react'
import * as R from 'ramda'
function StApp({ Component, pageProps }) {
    let w = Component.w || R.identity;
    return w.call(Component,<div>
        <div>{Component.LaunchButton && (<Component.LaunchButton launch = {intent => (<pageProps.AppStore></pageProps.AppStore>)} icon = {'store'}/>)}</div>
        <Component {...pageProps} />
    </div>,pageProps,React)
  }
  
  
  export default StApp
  