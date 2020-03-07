let codeMode;
export function getCodeMode(){return codeMode}
export function setCodeMode(v,during){let old = codeMode; codeMode = v; try{var result = during(); } finally{codeMode = old}; try{return result}catch(err){}}