import mi from './mi.js'
import * as morphic from '../../morphic.js/morphic.js'
export default instance => class extends mi(morphic.Morph,instance){
constructor(bytes,imports){
try{super()}catch(err){};
morphic.Morph.call(this);
this.canvasOperations = [];
instance.call(this,bytes,new Proxy(imports,{get: (o,k) => k === 'canvas' ? {} : o[k]}));

}
drawOn(c){
this.canvasOperations.forEach(o => o(c));

}
}