import * as mysql from 'mysql'
import {createHash} from 'crypto'
export function newHashObject(t){let h = createHash('sha256');h.write(t); h.end(); return h}
export function preadHash(h){return new Promise(c => h.on('readable',() => c(h.read())))}
export function createDefaultConnection(opts){return mysql.createConnection(Object.extend({},opts,{host: 'db',user: 'admin',password: 'admin'}))}
function pquery(c,q){return new Promise(callback => c.query(q,...args => callback(args)))}
export async function init(c){
    await pquery(c,'create table users(uid INT, username VARCHAR(1024), password_hash VARCHAR(1024), PRIMARY KEY uid)'); 
    await pquery(c,`insert into users(uid, username, password_hash) values (0,Admin,${await preadHash(newHashObject('admin'))})`);
}