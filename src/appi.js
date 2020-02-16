import * as R from 'ramda'
export default React => mode => (desktop,lib,addWindow) => appCode => {
    let w = new Worker(URL.createObjectURL(new Blob(appCode)));
    let morohClassMap = new Map();
    let newMoroh = (desc => R.pipe([R.props(['desc','children']),ndesc => [ndesc[0] ? Object.assign({},desc,ndesc[0]) : desc,ndesk[1]],desc => (<lib.Div onClick = {w.postMessage.bind(w,desc[0].clickMessage)} style = {{bg: desc[0].color,"backgroundColor": desc[0].color}}>{desk[1].concat(desc[0].children.map(c => (MC => (<MC></MC>))(newMoroh(c))))}</lib.Div>)]))
    w.addEventListener('message',R.pipe([m => m.data,R.cond([
    [d => d.type === 'post_canvas',
    R.pipe([d => d.data,
        d => ([d,document.createElement('canvas')]),
        d => ({canvas: d[1],d: d[0],id: d[0].name,render: R.pipe([rct => ([rct,d[1]]),a => (<lib.Div ref = {R.pipe([e => e.appendChild.bind(e),R.partialRight(R.call,a[1])])}></lib.Div>)])}),
        R.tap(addWindow),
        R.props('canvas','d'),
        c => [c[0].transferControlToOffscreen(),c[1]],
        nc => [{type: 'return',data:{id: nc[1].id,canvas: nc[0]}},nc[0]],
        R.apply.bind(R,w.postMessage.bind(w)),
    ])
    ],
    [
d => d.type === 'create_moroh',
R.pipe([
d => d.data,
d => [d[0],newMoroh(d[1])],
R.tap(R.apply.bind(R,morohClassMap.set.bind(morohClassMap))),


])

    ],
    [
d => d.type === 'moroh_in_window',
R.pipe([
d => d.data,
R.props('id','wid'),
d => [morohClassMap.get(d[0]),d[1]],
d => [{id: d[1],render: rct => (C => (<C></C>))(d[0])}],
R.tap(addWindow),
])

    ]

])]));
}