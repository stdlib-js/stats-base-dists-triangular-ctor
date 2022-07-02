// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import{isPrimitive as i}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-number@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-entropy@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-kurtosis@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-mean@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-median@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-mode@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-skewness@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-stdev@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-variance@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-cdf@esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-logcdf@esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-logpdf@esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-mgf@esm/index.mjs";import g from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-pdf@esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-triangular-quantile@esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";function y(){var s,e,n;if(!(this instanceof y))return 0===arguments.length?new y:new y(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(e=arguments[1],n=arguments[2],!i(s=arguments[0])||r(s))throw new TypeError(v("invalid argument. Minimum support must be a number. Value: `%s`.",s));if(!i(e)||r(e))throw new TypeError(v("invalid argument. Maximum support must be a number. Value: `%s`.",e));if(!i(n)||r(n))throw new TypeError(v("invalid argument. Mode must be a number. Value: `%s`.",n));if(!(s<=n&&n<=e))throw new RangeError(v("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",s,e,n))}else s=0,e=1,n=.5;return t(this,"a",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!i(t)||r(t))throw new TypeError(v("invalid assignment. Must be a number. Value: `%s`.",t));if(t>e||t>n)throw new RangeError(v("invalid assignment. Must be less than or equal to both the maximum support and the mode. Value: `%f`.",t));s=t}}),t(this,"b",{configurable:!1,enumerable:!0,get:function(){return e},set:function(t){if(!i(t)||r(t))throw new TypeError(v("invalid assignment. Must be a number. Value: `%s`.",t));if(s>t||n>t)throw new RangeError(v("invalid assignment. Must be greater than or equal to both the minimum support and the mode. Value: `%f`.",t));e=t}}),t(this,"c",{configurable:!1,enumerable:!0,get:function(){return n},set:function(t){if(!i(t)||r(t))throw new TypeError(v("invalid assignment. Must be a number. Value: `%s`.",t));if(s>t||e<t)throw new RangeError(v("invalid assignment. Must be greater than or equal to the minimum support and less than or equal to the maximum support. Value: `%f`.",t));n=t}}),this}e(y.prototype,"entropy",(function(){return n(this.a,this.b,this.c)})),e(y.prototype,"kurtosis",(function(){return a(this.a,this.b,this.c)})),e(y.prototype,"mean",(function(){return o(this.a,this.b,this.c)})),e(y.prototype,"median",(function(){return m(this.a,this.b,this.c)})),e(y.prototype,"mode",(function(){return d(this.a,this.b,this.c)})),e(y.prototype,"skewness",(function(){return u(this.a,this.b,this.c)})),e(y.prototype,"stdev",(function(){return h(this.a,this.b,this.c)})),e(y.prototype,"variance",(function(){return l(this.a,this.b,this.c)})),s(y.prototype,"cdf",(function(t){return p(t,this.a,this.b,this.c)})),s(y.prototype,"logcdf",(function(t){return f(t,this.a,this.b,this.c)})),s(y.prototype,"logpdf",(function(t){return b(t,this.a,this.b,this.c)})),s(y.prototype,"mgf",(function(t){return c(t,this.a,this.b,this.c)})),s(y.prototype,"pdf",(function(t){return g(t,this.a,this.b,this.c)})),s(y.prototype,"quantile",(function(t){return j(t,this.a,this.b,this.c)}));export{y as default};
//# sourceMappingURL=index.mjs.map
