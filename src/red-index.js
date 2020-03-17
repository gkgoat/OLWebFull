import bindThis from './bind_this.js'
import * as webpack from 'webpack'
import next from '../next.config.js'
import {createFsFromVolume, Volume} from 'memfs'
export default RED => {
RED.nodes.registerType('smalltalk-webpack',bindThis((self,config) => {
RED.nodes.createNode(self,config);
let w = webpack(next.webpack({
    entry: {rindex: './red/rindex.js'},
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          options: {presets: ["next/babel"]},
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
    },

},{webpack: webpack}));
let v = new Volume();
let fs = createFsFromVolume(v);
w.outputFileSystem = fs;
w.watch({
    // Example watchOptions
    aggregateTimeout: 300,
    poll: undefined
  },(err,stats) => {
let f = self.context().flow;
f.set('_st_wres',f.get('_st_wres').concat([stats]))

});
self.context().flow._st_w = new Proxy(self);

self.on('input',(msg,send,done) => {

done()
});
}))
RED.nodes.registerType('smalltalk-iframe',bindThis((self,config) => {
    RED.nodes.createNode(self,config);
}));
RED.nodes.registerType('smalltalk-wireless-reciever',bindThis((self,config) => {
    RED.nodes.createNode(self,config);
    let onWMessage = (msg) => self.send(msg);
    let oldSend = self.context().flow[config.wireless].send;
    self.context().flow[config.wireless].send = onWMessage;
    self.on('input',(msg,send,done) => {
        self.context().flow[config.wireless].send(msg)
    });
    this.on('close', function(removed, done) {
        oldSend.call(self.context().flow[config.wireless],'wireless closed')
        self.context().flow[config.wireless].send = oldSend;
        if (removed) {
            // This node has been deleted
        } else {
            // This node is being restarted
        }
        done();
    });
}));
}