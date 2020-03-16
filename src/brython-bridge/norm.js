import {JSDOM} from 'jsdom'
import brython from 'raw-loader!../Brython-3.8.7/brython.js'
export default html => py => (d => {d.eval(brython); return d})(new JSDOM(`<!DOCTYPE html><html><head><script type = "text/python">${py}</script></head><body>${html}</body>`,{runScripts: "dangerously"}))