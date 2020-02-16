import useHandler from '../../src/handler.js'
export default (React,useState) => (props) => {
    let [messages,setMessages] = useState();
    useHandler('message',(m) => {setMessages((messages || []).concat([m])); if(m.content.beginsWith('o|init')){let c = m.channel.createMessageCollector(a => true,{}); c.on('collect',() => {})}},'on','off',props.discord);
    return (<props.lib.Div></props.lib.Div>)
}