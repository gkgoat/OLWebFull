let allProps = new Map();
export function useProp(name,getSet){let l = getSet.concat([() => allProps.set(name,undefined)]);allProps.set(name,l); return l}
export function getProp(name){return allProps.get(name)}