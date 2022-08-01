// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,r;t=this,r=function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,o=n.__defineSetter__,u=n.__lookupGetter__,a=n.__lookupSetter__,f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,f){var c,s,l,y;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(u.call(t,r)||a.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=f.value,t.__proto__=c):t[r]=f.value),l="get"in f,y="set"in f,s&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(t,r,f.get),y&&o&&o.call(t,r,f.set),t};function c(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(t,r,n){f(t,r,{configurable:!1,enumerable:!1,get:n})}function l(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var h=Object.prototype.toString,b=Object.prototype.hasOwnProperty,v="function"==typeof Symbol?Symbol.toStringTag:"",m=p()?function(t){var r,n,e,i,o;if(null==t)return h.call(t);n=t[v],o=v,r=null!=(i=t)&&b.call(i,o);try{t[v]=void 0}catch(r){return h.call(t)}return e=h.call(t),r?t[v]=n:delete t[v],e}:function(t){return h.call(t)},N=Number,d=N.prototype.toString,w=p();function g(t){return"object"==typeof t&&(t instanceof N||(w?function(t){try{return d.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function A(t){return l(t)||g(t)}function _(t){return t!=t}c(A,"isPrimitive",l),c(A,"isObject",g);var U,j="function"==typeof Uint32Array,E="function"==typeof Uint32Array?Uint32Array:null,T="function"==typeof Uint32Array?Uint32Array:void 0;U=function(){var t,r,n;if("function"!=typeof E)return!1;try{r=new E(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(j&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?T:function(){throw new Error("not implemented")};var I,M=U,O="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,V="function"==typeof Float64Array?Float64Array:void 0;I=function(){var t,r,n;if("function"!=typeof S)return!1;try{r=new S([1,3.14,-3.14,NaN]),n=r,t=(O&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?V:function(){throw new Error("not implemented")};var F,H=I,P="function"==typeof Uint8Array,x="function"==typeof Uint8Array?Uint8Array:null,G="function"==typeof Uint8Array?Uint8Array:void 0;F=function(){var t,r,n;if("function"!=typeof x)return!1;try{r=new x(r=[1,3.14,-3.14,256,257]),n=r,t=(P&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?G:function(){throw new Error("not implemented")};var q,R=F,k="function"==typeof Uint16Array,L="function"==typeof Uint16Array?Uint16Array:null,W="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var t,r,n;if("function"!=typeof L)return!1;try{r=new L(r=[1,3.14,-3.14,65536,65537]),n=r,t=(k&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?W:function(){throw new Error("not implemented")};var C,Y={uint16:q,uint8:R};(C=new Y.uint16(1))[0]=4660;var z=52===new Y.uint8(C.buffer)[0],B=!0===z?1:0,D=new H(1),J=new M(D.buffer);function K(t){return D[0]=t,J[B]}var Q=!0===z?1:0,X=new H(1),Z=new M(X.buffer);function $(t,r){return X[0]=t,Z[Q]=r>>>0,X[0]}var tt=1023,rt=N.NEGATIVE_INFINITY,nt=.6931471803691238,et=1.9082149292705877e-10,it=1048575;function ot(t){var r,n,e,i,o,u,a,f,c,s,l,y;return 0===t?rt:_(t)||t<0?NaN:(o=0,(n=K(t))<1048576&&(o-=54,n=K(t*=0x40000000000000)),n>=2146435072?t+t:(o+=(n>>20)-tt|0,o+=(f=614244+(n&=it)&1048576|0)>>20|0,a=(t=$(t,n|1072693248^f))-1,(it&2+n)<3?0===a?0===o?0:o*nt+o*et:(u=a*a*(.5-.3333333333333333*a),0===o?a-u:o*nt-(u-o*et-a)):(f=n-398458|0,c=440401-n|0,i=(l=(y=(s=a/(2+a))*s)*y)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(l),e=y*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(l),u=e+i,(f|=c)>0?(r=.5*a*a,0===o?a-(r-s*(r+u)):o*nt-(r-(s*(r+u)+o*et)-a)):0===o?a-s*(a-u):o*nt-(s*(a-u)-o*et-a))))}var ut=Math.sqrt,at=Math.floor;function ft(t){return at(t)===t}function ct(t){return ft(t/2)}function st(t){return ct(t>0?t-1:t+1)}var lt,yt,pt=Number.POSITIVE_INFINITY;function ht(t){return t===pt||t===rt}function bt(t){return Math.abs(t)}!0===z?(lt=1,yt=0):(lt=0,yt=1);var vt={HIGH:lt,LOW:yt},mt=new H(1),Nt=new M(mt.buffer),dt=vt.HIGH,wt=vt.LOW;function gt(t,r){return mt[0]=r,t[0]=Nt[dt],t[1]=Nt[wt],t}function At(t,r){return 1===arguments.length?gt([0,0],t):gt(t,r)}var _t,Ut,jt=!0===z?0:1,Et=new H(1),Tt=new M(Et.buffer);function It(t,r){return Et[0]=t,Tt[jt]=r>>>0,Et[0]}function Mt(t){return 0|t}!0===z?(_t=1,Ut=0):(_t=0,Ut=1);var Ot={HIGH:_t,LOW:Ut},St=new H(1),Vt=new M(St.buffer),Ft=Ot.HIGH,Ht=Ot.LOW;function Pt(t,r){return Vt[Ft]=t,Vt[Ht]=r,St[0]}var xt=[0,0];function Gt(t,r){var n,e;return At(xt,t),n=xt[0],n&=2147483647,e=K(r),Pt(n|=e&=2147483648,xt[1])}var qt=1048576,Rt=[1,1.5],kt=[0,.5849624872207642],Lt=[0,1.350039202129749e-8];function Wt(t,r){return _(r)||ht(r)?(t[0]=r,t[1]=0,t):0!==r&&bt(r)<22250738585072014e-324?(t[0]=4503599627370496*r,t[1]=-52,t):(t[0]=r,t[1]=0,t)}var Ct=[0,0],Yt=[0,0];function zt(t,r){var n,e;return 0===r||0===t||_(t)||ht(t)?t:(function(t,r){1===arguments.length?Wt([0,0],t):Wt(t,r)}(Ct,t),r+=Ct[1],r+=function(t){var r=K(t);return(r=(2146435072&r)>>>20)-tt|0}(t=Ct[0]),r<-1074?Gt(0,t):r>1023?t<0?rt:pt:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,At(Yt,t),n=Yt[0],n&=2148532223,e*Pt(n|=r+tt<<20,Yt[1])))}var Bt=.6931471805599453,Dt=2147483647,Jt=1048575,Kt=1048576,Qt=2147483647,Xt=1083179008,Zt=1e300,$t=1e-300,tr=[0,0],rr=[0,0];function nr(t,r){var n,e,i,o,u,a,f,c,s,l,y,p,h,b;if(_(t)||_(r))return NaN;if(At(tr,r),u=tr[0],0===tr[1]){if(0===r)return 1;if(1===r)return t;if(-1===r)return 1/t;if(.5===r)return ut(t);if(-.5===r)return 1/ut(t);if(2===r)return t*t;if(3===r)return t*t*t;if(4===r)return(t*=t)*t;if(ht(r))return function(t,r){return-1===t?(t-t)/(t-t):1===t?1:bt(t)<1==(r===pt)?0:pt}(t,r)}if(At(tr,t),o=tr[0],0===tr[1]){if(0===o)return function(t,r){return r===rt?pt:r===pt?0:r>0?st(r)?t:0:st(r)?Gt(pt,t):pt}(t,r);if(1===t)return 1;if(-1===t&&st(r))return-1;if(ht(t))return t===rt?nr(-0,-r):r<0?0:pt}if(t<0&&!1===ft(r))return(t-t)/(t-t);if(i=bt(t),n=o&Qt|0,e=u&Qt|0,f=u>>>31|0,a=(a=o>>>31|0)&&st(r)?-1:1,e>1105199104){if(e>1139802112)return function(t,r){return(2147483647&K(t))<=1072693247?r<0?1/0:0:r>0?1/0:0}(t,r);if(n<1072693247)return 1===f?a*Zt*Zt:a*$t*$t;if(n>1072693248)return 0===f?a*Zt*Zt:a*$t*$t;y=function(t,r){var n,e,i,o,u,a;return n=(u=1.9259629911266175e-8*(i=r-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=It(e=(o=1.4426950216293335*i)+u,0))-o),t[0]=e,t[1]=n,t}(rr,i)}else y=function(t,r,n){var e,i,o,u,a,f,c,s,l,y,p,h,b,v,m,N,d,w,g,A,_;return w=0,n<qt&&(w-=53,n=K(r*=9007199254740992)),w+=(n>>20)-tt|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,w+=1,n-=qt),u=It(i=(N=(r=$(r,n))-(c=Rt[A]))*(d=1/(r+c)),0),e=524288+(n>>1|536870912),f=$(0,e+=A<<18),m=(o=i*i)*o*(0===(_=o)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=It(f=3+(o=u*u)+(m+=(a=d*(N-u*f-u*(r-(f-c))))*(u+i)),0),b=(p=-7.028461650952758e-9*(l=It(l=(N=u*f)+(d=a*f+(m-(f-3-o))*i),0))+.9617966939259756*(d-(l-N))+Lt[A])-((h=It(h=(y=.9617967009544373*l)+p+(s=kt[A])+(v=w),0))-v-s-y),t[0]=h,t[1]=b,t}(rr,i,n);if(l=(r-(c=It(r,0)))*y[0]+r*y[1],s=c*y[0],At(tr,p=l+s),h=Mt(tr[0]),b=Mt(tr[1]),h>=Xt){if(0!=(h-Xt|b))return a*Zt*Zt;if(l+8008566259537294e-32>p-s)return a*Zt*Zt}else if((h&Qt)>=1083231232){if(0!=(h-3230714880|b))return a*$t*$t;if(l<=p-s)return a*$t*$t}return p=function(t,r,n){var e,i,o,u,a,f,c,s,l,y;return l=((s=t&Dt|0)>>20)-tt|0,c=0,s>1071644672&&(i=$(0,((c=t+(Kt>>l+1)>>>0)&~(Jt>>(l=((c&Dt)>>20)-tt|0)))>>>0),c=(c&Jt|Kt)>>20-l>>>0,t<0&&(c=-c),r-=i),t=Mt(t=K(f=1-((f=(o=.6931471824645996*(i=It(i=n+r,0)))+(u=(n-(i-r))*Bt+-1.904654299957768e-9*i))*(e=f-(i=f*f)*(0===(y=i)?.16666666666666602:.16666666666666602+y*(y*(6613756321437934e-20+y*(4.1381367970572385e-8*y-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((a=u-(f-o))+f*a)-f))),(t+=c<<20>>>0)>>20<=0?zt(f,c):$(f,t)}(h,s,l),a*p}function er(t,r,n,e){var i,o;return _(t)||_(r)||_(n)||_(e)||r>e||e>n?NaN:t<=r?0:(i=(n-r)*(e-r),o=(n-r)*(n-e),t<=e?nr(t-r,2)/i:t<n?1-nr(n-t,2)/o:1)}function ir(t){return function(){return t}}function or(t,r,n,e){var i,o;return _(t)||_(r)||_(n)||_(e)||r>e||e>n?NaN:t<=r?rt:(i=(n-r)*(e-r),o=(n-r)*(n-e),t<=e?2*ot(t-r)-ot(i):t<n?ot(1-nr(n-t,2)/o):0)}function ur(t,r,n,e){var i,o,u;return _(t)||_(r)||_(n)||_(e)||r>e||e>n?NaN:t<r?rt:(i=ot(n-r)+ot(e-r),o=ot(n-r),u=ot(n-r)+ot(n-e),t<e?Bt+ot(t-r)-i:t===e?Bt-o:t<=n?Bt+ot(n-t)-u:rt)}c(er,"factory",(function(t,r,n){var e,i;return _(t)||_(r)||_(n)?ir(NaN):t<=n&&n<=r?(e=(r-t)*(n-t),i=(r-t)*(r-n),function(o){return _(o)?NaN:o<=t?0:o<=n?nr(o-t,2)/e:o<r?1-nr(r-o,2)/i:1}):ir(NaN)})),c(or,"factory",(function(t,r,n){var e,i;return _(t)||_(r)||_(n)?ir(NaN):t<=n&&n<=r?(e=(r-t)*(n-t),i=(r-t)*(r-n),function(o){return _(o)?NaN:o<=t?rt:o<=n?2*ot(o-t)-ot(e):o<r?ot(1-nr(r-o,2)/i):0}):ir(NaN)})),c(ur,"factory",(function(t,r,n){var e,i,o;return _(t)||_(r)||_(n)||t>n||n>r?ir(NaN):(e=ot(r-t)+ot(n-t),i=ot(r-t),o=ot(r-t)+ot(r-n),function(u){return _(u)?NaN:u<t?rt:u<n?Bt+ot(u-t)-e:u===n?Bt-i:u<=r?Bt+ot(r-u)-o:rt})}));var ar=Math.ceil;function fr(t){return t<0?ar(t):at(t)}var cr=1.4426950408889634,sr=1/(1<<28);function lr(t){var r;return _(t)||t===pt?t:t===rt?0:t>709.782712893384?pt:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<sr?1+t:function(t,r,n){var e,i,o,u;return zt(1-(r-(e=t-r)*(o=e-(i=e*e)*(0===(u=i)?.16666666666666602:.16666666666666602+u*(u*(6613756321437934e-20+u*(4.1381367970572385e-8*u-16533902205465252e-22))-.0027777777777015593)))/(2-o)-t),n)}(t-.6931471803691238*(r=fr(t<0?cr*t-.5:cr*t+.5)),1.9082149292705877e-10*r,r)}function yr(t,r,n,e){var i,o,u,a;return _(t)||_(r)||_(n)||_(e)||r>e||e>n?NaN:0===t?1:(o=n-r,u=e-r,a=(i=n-e)*lr(r*t)-o*lr(e*t),a+=u*lr(n*t),a*=2,a/=o*u*i*nr(t,2))}function pr(t,r,n,e){return _(t)||_(r)||_(n)||_(e)||r>e||e>n?NaN:t<r?0:t<e?2*(t-r)/((n-r)*(e-r)):t===e?2/(n-r):t<=n?2*(n-t)/((n-r)*(n-e)):0}function hr(t,r,n,e){var i,o;return _(t)||_(r)||_(n)||_(e)||r>e||e>n||t<0||t>1?NaN:(o=(n-r)*(n-e),t<(i=(e-r)/(n-r))?r+ut((n-r)*(e-r)*t):t>i?n-ut(o*(1-t)):e)}function br(){var t,r=arguments,n=r[0],e="https://stdlib.io/e/"+n+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}function vr(){var t,r,n;if(!(this instanceof vr))return 0===arguments.length?new vr:new vr(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(r=arguments[1],n=arguments[2],!l(t=arguments[0])||_(t))throw new TypeError(br("invalid argument. Minimum support must be a number. Value: `%s`.",t));if(!l(r)||_(r))throw new TypeError(br("invalid argument. Maximum support must be a number. Value: `%s`.",r));if(!l(n)||_(n))throw new TypeError(br("invalid argument. Mode must be a number. Value: `%s`.",n));if(!(t<=n&&n<=r))throw new RangeError(br("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",t,r,n))}else t=0,r=1,n=.5;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return t},set:function(e){if(!l(e)||_(e))throw new TypeError(br("invalid assignment. Must be a number. Value: `%s`.",e));if(e>r||e>n)throw new RangeError(br("invalid assignment. Must be less than or equal to both the maximum support and the mode. Value: `%f`.",e));t=e}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!l(e)||_(e))throw new TypeError(br("invalid assignment. Must be a number. Value: `%s`.",e));if(t>e||n>e)throw new RangeError(br("invalid assignment. Must be greater than or equal to both the minimum support and the mode. Value: `%f`.",e));r=e}}),f(this,"c",{configurable:!1,enumerable:!0,get:function(){return n},set:function(e){if(!l(e)||_(e))throw new TypeError(br("invalid assignment. Must be a number. Value: `%s`.",e));if(t>e||r<e)throw new RangeError(br("invalid assignment. Must be greater than or equal to the minimum support and less than or equal to the maximum support. Value: `%f`.",e));n=e}}),this}return c(yr,"factory",(function(t,r,n){var e,i,o;return _(t)||_(r)||_(n)||t>n||n>r?ir(NaN):(e=r-n,i=r-t,o=n-t,function(u){var a;return _(u)?NaN:0===u?1:(a=e*lr(t*u)-i*lr(n*u),a+=o*lr(r*u),a*=2,a/=i*o*e*nr(u,2))})})),c(pr,"factory",(function(t,r,n){var e,i,o;return _(t)||_(r)||_(n)||t>n||n>r?ir(NaN):(e=(r-t)*(n-t),i=r-t,o=(r-t)*(r-n),function(u){return _(u)?NaN:u<t?0:u<n?2*(u-t)/e:u===n?2/i:u<=r?2*(r-u)/o:0})})),c(hr,"factory",(function(t,r,n){var e,i,o;return _(t)||_(r)||_(n)||t>n||n>r?ir(NaN):(e=(n-t)/(r-t),i=(r-t)*(n-t),o=(r-t)*(r-n),function(u){return _(u)||u<0||u>1?NaN:u<e?t+ut(i*u):u>e?r-ut(o*(1-u)):n})})),s(vr.prototype,"entropy",(function(){return t=this.a,r=this.b,n=this.c,_(t)||_(r)||_(n)||!(t<=n&&n<=r)?NaN:.5+ot(.5*(r-t));var t,r,n})),s(vr.prototype,"kurtosis",(function(){return t=this.a,r=this.b,n=this.c,_(t)||_(r)||_(n)||!(t<=n&&n<=r)?NaN:-.6;var t,r,n})),s(vr.prototype,"mean",(function(){return t=this.a,r=this.b,n=this.c,_(t)||_(r)||_(n)||!(t<=n&&n<=r)?NaN:(t+r+n)/3;var t,r,n})),s(vr.prototype,"median",(function(){return t=this.a,r=this.b,n=this.c,_(t)||_(r)||_(n)||!(t<=n&&n<=r)?NaN:n>=(t+r)/2?t+ut(.5*(r-t)*(n-t)):r-ut(.5*(r-t)*(r-n));var t,r,n})),s(vr.prototype,"mode",(function(){return t=this.a,r=this.b,n=this.c,_(t)||_(r)||_(n)||!(t<=n&&n<=r)?NaN:n;var t,r,n})),s(vr.prototype,"skewness",(function(){return t=this.a,r=this.b,n=this.c,_(t)||_(r)||_(n)||!(t<=n&&n<=r)?NaN:(e=1.4142135623730951*(t+r-2*n)*(2*t-r-n)*(t-2*r+n),e/=5*nr(t*t+r*r+n*n-t*r-t*n-r*n,1.5));var t,r,n,e})),s(vr.prototype,"stdev",(function(){return t=this.a,r=this.b,n=this.c,_(t)||_(r)||_(n)||!(t<=n&&n<=r)?NaN:ut((t*t+r*r+n*n-t*r-t*n-r*n)/18);var t,r,n})),s(vr.prototype,"variance",(function(){return t=this.a,r=this.b,n=this.c,_(t)||_(r)||_(n)||!(t<=n&&n<=r)?NaN:(t*t+r*r+n*n-t*r-t*n-r*n)/18;var t,r,n})),c(vr.prototype,"cdf",(function(t){return er(t,this.a,this.b,this.c)})),c(vr.prototype,"logcdf",(function(t){return or(t,this.a,this.b,this.c)})),c(vr.prototype,"logpdf",(function(t){return ur(t,this.a,this.b,this.c)})),c(vr.prototype,"mgf",(function(t){return yr(t,this.a,this.b,this.c)})),c(vr.prototype,"pdf",(function(t){return pr(t,this.a,this.b,this.c)})),c(vr.prototype,"quantile",(function(t){return hr(t,this.a,this.b,this.c)})),vr},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).Triangular=r();
//# sourceMappingURL=browser.js.map
