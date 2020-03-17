import {JSDOM} from 'jsdom'
import brython from 'raw-loader!../Brython-3.8.7/brython.js'
import brythonStdlib from 'raw-loader!../Brython-3.8.7/brython_stdlib.js'
export default html => py => (d => {d.eval(brython + brythonStdlib); return d})(new JSDOM(`<!DOCTYPE html><html><head><script type = "text/python">${py}</script></head><body>${html}</body>`,{runScripts: "dangerously"}))