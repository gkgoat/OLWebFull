import require from 'raw-loader!./require.js'
export default c => `(function(ol_define,ol_require){return ${c}}).apply(null,(function(){${require};return [define,require]})())`