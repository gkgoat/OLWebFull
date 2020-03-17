import {connect} from 'net'
import * as R from 'ramda'
import SocketStream from './socket_stream.js'
export default R.pipe(connect.bind(null,2500,'docker'),R.construct(SocketStream))