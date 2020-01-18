import ReactDOM from 'react-dom'
function strip(html){
    var doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
 }
export default async function changeLanguage(set,theRef){
    let lang = prompt('language');
    let win = (open('https://'.concat(lang.concat('.wikipedia.org'))));
    let confirmed = await new Promise(c => {    ReactDOM.render(<p><button onClick = {c.bind(null,true)}>Confirm</button><button onClick = {c.bind(null,false)}>Cancel</button></p>,theRef.current);})

win.close();
    if(confirmed)set(lang)
    }