import Desktop from '../../../pages/desktop/index.js'
Desktop.wins.push((desk) => ({id: 'browsix',render: (React,lib) => <lib.cw render = {() => {
    let [elem, setElem] = React.useState();
    let [oldFocus, setOldFocus] = React.useState();
    lib.useEventListener('click',() => {oldFocus()},'addEventListener','removeEventListener',elem || (document.createElement('div')));
    return (<browsix-terminal ref = {elem => {
        if(!elem.shadowRoot.querySelector('input').focus.stFilled)setOldFocus(elem.shadowRoot.querySelector('input').focus.bind(elem.shadowRoot.querySelector('input')));
        elem.shadowRoot.querySelector('input').focus = Object.assign(() => {},{stFilled: true}); 
        setElem(elem);
    }}></browsix-terminal>)

}}></lib.cw>}))