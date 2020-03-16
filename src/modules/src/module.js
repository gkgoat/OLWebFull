import workerModule from './wk.js'
import React from 'react'
export default async (m) => {let f;try{f = await import(`../${m}/index.js`)}catch(err){f = workerModule(m)}; return {component: (n => props => n(Object.extend({},props,{React: React})))(f({document}))}}