import {Duplex} from 'stream'
export default class SocketStream extends Duplex{
constructor(socket,options){
super(options);
this.socket = socket;
socket.on('data',this.onSData = (d) => {if(!this.push(d))socket.off('data',this.onSData)})
socket.off('data',this.onSData);
}
_write(c,enc,next){this.socket.write(c,enc,next)}
_read(size){this.socket.on('data',this.onSData)}
}