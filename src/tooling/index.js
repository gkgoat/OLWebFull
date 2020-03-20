import {parse} from 'yargs'
import * as webpack from 'webpack'
import * as proto from './webpack.config.proto.js'
import * as path from 'path'
import {spawn} from 'child_process'
import {Server} from 'ws'
import * as WebSocket from 'ws'
import * as http from 'http'
import {Readable, Writable, Duplex} from 'stream'
let h;
let tp = __dirname;
export default h = (console,input,process,prevServer) => argv => {
    let hs;
    let s = prevServer || new Server({server: hs = http.createServer((req,res) => {res.end('404')})});
    hs?.listen(19600);
    let dispose = s.close || (() => new Promise(c => hs.close(c)));
    s.close = dispose;
    let hn = conn => {
conn.one('message',m => {
if(m.type === 'runCmd'){let c;off();h(c = {stdout: new Writable({_write: conn.send.bind(conn)})},txt => new Promise(c => {conn.send(txt); let om, s = '';conn.on('message',om = m => {s = s + m; if('/n' in s){conn.off('message',om); c(s)}})}),c) }

});

    };
    let off = () => s.off('connection',hn);
    s.on('connection',hn);
    let cont = async () => {let w = h(console,input,process,prevServer);
        let continue_ = await input('continue? (y or n)');
        if(continue_.toLowerCase() === 'y'){off();w((await input('command>')).split(' '));}}
    let yargs = parse(argv).scriptName('st-tooling').command('build [file]','build js software',yargs => {
    yargs.positional('file', {
        type: 'string',
        describe: 'the file to build'
      })

},async argv => {
let file = argv._[0];
let c = webpack(Object.assign({},proto,{target: await input('target?'),entry: file,output: {filename:'index.js',path: path.resolve(__dirname, 'dist')}}));
await new Promise(r => c.run(r));
console.log('done.');
await cont()
}).command('cd [dir]','change directory',yargs => {
    yargs.positional('dir', {
        type: 'string',
        describe: 'the place to go to'
      })

},async argv => {
let dir = argv._[0];
process.chdir(dir);
await cont()
}).command('busybox','run busybox',yargs => {yargs.positional('all',{type: 'string',describe: 'command to run'})},async args => {
let all = args._[0].split(' ');
let cmd = spawn(path.resolve(tp,'busybox'),all);
cmd.stdout.pipe(process.stdout,{end: false});
(await input.getStream()).pipe(cmd.stdin);
await new Promise(c => cmd.on('close',c));
await cont();
})
}