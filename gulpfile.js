var child_process = require('child_process');
const { series, src, dest } = require('gulp');
const {PassThrough} = require('stream');
exports.build = function(){return series(child_process.exec.bind(child_process,'next build'),function(){var p;p = new PassThrough(); p.write(`<?xml version="1.0" encoding="utf-8"?>
<resources>
    <string name = "JSCode"><![CDATA[`); return src('./.next/static/*/*.js').on('end',function(){p.end(`]]></string>

    </resources>`)}).pipe(p,{end: false}).pipe(dest('../../values/js.xml'))})}