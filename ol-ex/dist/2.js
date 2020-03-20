(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{189:function(e,n,r){var t=new(r(305));t.default=t,e.exports=t},305:function(e,n,r){
/*!
 * chrome-promise
 * https://github.com/tfoxy/chrome-promise
 *
 * Copyright 2015 Tomás Fox
 * Released under the MIT license
 */
!function(n,r){e.exports=function(e){"use strict";var n=Array.prototype.slice,r=Object.prototype.hasOwnProperty;return t.default=t,t;function t(o){var i=(o=o||{}).chrome||e.chrome,s=o.Promise||e.Promise,c=i.runtime,a=this;if(!a)throw new Error("ChromePromise must be called with new keyword");function f(e,r){return function(){var t=n.call(arguments);return new s((function(o,i){t.push((function(){var e=c.lastError,r=n.call(arguments);if(e)i(e);else switch(r.length){case 0:o();break;case 1:o(r[0]);break;default:o(r)}})),e.apply(r,t)}))}}function u(e,n){for(var o in e)if(r.call(e,o)){var i;try{i=e[o]}catch(e){continue}var s=typeof i;"object"!==s||i instanceof t?n[o]="function"===s?f(i,e):i:(n[o]={},u(i,n[o]))}}u(i,a),i.permissions&&i.permissions.onAdded.addListener((function(e){if(e.permissions&&e.permissions.length){var n={};e.permissions.forEach((function(e){var r=/^[^.]+/.exec(e);r in i&&(n[r]=i[r])})),u(n,a)}}))}}(this||n)}("undefined"!=typeof self?self:this)}}]);