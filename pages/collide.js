import Collide from '../src/collide/renderer/components/App.jsx'
let require;
(async () => {

    try{
        return require = (self || global).require;

    }catch(err){
        let rjs;
        require = await (rjs = await import('../src/require.js')).require;
let define = rjs.define;
define('fs',() => {return {}})
return require
    }
})();
export default ({sessionID, ...props}) => (<Collide {...props} wqinCreator = {parent[sessionID].st.rw}></Collide>)