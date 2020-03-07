let path = require('path');
let fs = require('fs').promises;
module.exports = (opts, ctxt) => {
let myModule = path.resolve('../../../re-boot/dist/index.js');
    return fs.readFile(myModule).then(c => ({code: c,dependencies: [myModule]})).catch(err => ({code: ''}));
}