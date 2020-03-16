import * as wc from './wc_base.js'
import '!!@webcomponents/custom-elements/src/native-shim.js'
Object.keys(wc).forEach(k => customElements.define('st-' + k.toLowerCase(),wc[k]));
export * from './wc_base.js'