"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var f=i(function(m,a){
var u=require('@stdlib/math-base-assert-is-nan/dist'),p=require('@stdlib/math-base-special-log1p/dist');function N(e,r){var t;return u(r)||u(e)||r<=0?NaN:e<0||e>1?0:(t=p(r),r/((1+r*e)*t))}a.exports=N
});var v=i(function(F,s){
var y=require('@stdlib/utils-constant-function/dist'),o=require('@stdlib/math-base-assert-is-nan/dist'),c=require('@stdlib/math-base-special-log1p/dist');function d(e){var r;if(o(e)||e<=0)return y(NaN);return r=c(e),t;function t(n){return o(n)?NaN:n<0||n>1?0:e/((1+e*n)*r)}}s.exports=d
});var l=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=f(),g=v();l(q,"factory",g);module.exports=q;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
