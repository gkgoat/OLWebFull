import * as webpack from 'webpack'
import Plugin from './plugin.js'
import { createFsFromVolume, Volume } from 'memfs'
export default ({module,entry,plugins}) => jsdom => {let v = new Volume(); let fs = createFsFromVolume(v); return (new Promise(c => {
    let compiler = webpack({module,entry, 
        output: {path: '/',filename: 'index.js'},
        plugins: [    new webpack.optimize.LimitChunkCountPlugin({
    maxChunks: 1,
  })
].concat(plugins)
});
   compiler.outputFileSystem = fs; return compiler.run(c)})).then(() => new Promise(c => fs.readFile('/index.js',(err,data) => c(data)))).then(text => jsdom.eval(text))

}