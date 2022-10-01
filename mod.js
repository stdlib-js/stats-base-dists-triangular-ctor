// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=Object.defineProperty,n=Object.prototype,e=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,o=n.__lookupGetter__,a=n.__lookupSetter__;var f=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,f){var c,s,l,y;if("object"!=typeof r||null===r||"[object Array]"===e.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((s="value"in f)&&(o.call(r,t)||a.call(r,t)?(c=r.__proto__,r.__proto__=n,delete r[t],r[t]=f.value,r.__proto__=c):r[t]=f.value),l="get"in f,y="set"in f,s&&(l||y))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&i&&i.call(r,t,f.get),y&&u&&u.call(r,t,f.set),r};function c(r,t,n){f(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function s(r,t,n){f(r,t,{configurable:!1,enumerable:!1,get:n})}function l(r){return"number"==typeof r}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var h=Object.prototype.hasOwnProperty;var b="function"==typeof Symbol?Symbol.toStringTag:"";var m=p()?function(r){var t,n,e,i,u;if(null==r)return v.call(r);n=r[b],u=b,t=null!=(i=r)&&h.call(i,u);try{r[b]=void 0}catch(t){return v.call(r)}return e=v.call(r),t?r[b]=n:delete r[b],e}:function(r){return v.call(r)},N=Number,w=N.prototype.toString;var d=p();function g(r){return"object"==typeof r&&(r instanceof N||(d?function(r){try{return w.call(r),!0}catch(r){return!1}}(r):"[object Number]"===m(r)))}function A(r){return l(r)||g(r)}function _(r){return r!=r}c(A,"isPrimitive",l),c(A,"isObject",g);var U="function"==typeof Uint32Array;var E="function"==typeof Uint32Array?Uint32Array:null;var j,I="function"==typeof Uint32Array?Uint32Array:void 0;j=function(){var r,t,n;if("function"!=typeof E)return!1;try{t=new E(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(U&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?I:function(){throw new Error("not implemented")};var T=j,M="function"==typeof Float64Array;var O="function"==typeof Float64Array?Float64Array:null;var S,V="function"==typeof Float64Array?Float64Array:void 0;S=function(){var r,t,n;if("function"!=typeof O)return!1;try{t=new O([1,3.14,-3.14,NaN]),n=t,r=(M&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?V:function(){throw new Error("not implemented")};var F=S,H="function"==typeof Uint8Array;var P="function"==typeof Uint8Array?Uint8Array:null;var G,q="function"==typeof Uint8Array?Uint8Array:void 0;G=function(){var r,t,n;if("function"!=typeof P)return!1;try{t=new P(t=[1,3.14,-3.14,256,257]),n=t,r=(H&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?q:function(){throw new Error("not implemented")};var x=G,R="function"==typeof Uint16Array;var k="function"==typeof Uint16Array?Uint16Array:null;var L,W="function"==typeof Uint16Array?Uint16Array:void 0;L=function(){var r,t,n;if("function"!=typeof k)return!1;try{t=new k(t=[1,3.14,-3.14,65536,65537]),n=t,r=(R&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?W:function(){throw new Error("not implemented")};var C,Y={uint16:L,uint8:x};(C=new Y.uint16(1))[0]=4660;var z=52===new Y.uint8(C.buffer)[0],B=!0===z?1:0,D=new F(1),J=new T(D.buffer);function K(r){return D[0]=r,J[B]}var Q=!0===z?1:0,X=new F(1),Z=new T(X.buffer);function $(r,t){return X[0]=r,Z[Q]=t>>>0,X[0]}var rr=N.NEGATIVE_INFINITY;var tr=.6931471803691238,nr=1.9082149292705877e-10;function er(r){var t,n,e,i,u,o,a,f,c,s,l,y;return 0===r?rr:_(r)||r<0?NaN:(u=0,(n=K(r))<1048576&&(u-=54,n=K(r*=0x40000000000000)),n>=2146435072?r+r:(u+=(n>>20)-1023|0,u+=(f=(n&=1048575)+614244&1048576|0)>>20|0,a=(r=$(r,n|1072693248^f))-1,(1048575&2+n)<3?0===a?0===u?0:u*tr+u*nr:(o=a*a*(.5-.3333333333333333*a),0===u?a-o:u*tr-(o-u*nr-a)):(f=n-398458|0,c=440401-n|0,i=(l=(y=(s=a/(2+a))*s)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(l),e=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(l),o=e+i,(f|=c)>0?(t=.5*a*a,0===u?a-(t-s*(t+o)):u*tr-(t-(s*(t+o)+u*nr)-a)):0===u?a-s*(a-o):u*tr-(s*(a-o)-u*nr-a))))}var ir=Math.sqrt;var ur=Math.floor;function or(r){return ur(r)===r}function ar(r){return or(r/2)}function fr(r){return ar(r>0?r-1:r+1)}var cr,sr,lr=Number.POSITIVE_INFINITY;function yr(r){return r===lr||r===rr}function pr(r){return Math.abs(r)}!0===z?(cr=1,sr=0):(cr=0,sr=1);var vr={HIGH:cr,LOW:sr},hr=new F(1),br=new T(hr.buffer),mr=vr.HIGH,Nr=vr.LOW;function wr(r,t){return hr[0]=t,r[0]=br[mr],r[1]=br[Nr],r}function dr(r,t){return 1===arguments.length?wr([0,0],r):wr(r,t)}var gr,Ar,_r=!0===z?0:1,Ur=new F(1),Er=new T(Ur.buffer);function jr(r,t){return Ur[0]=r,Er[_r]=t>>>0,Ur[0]}function Ir(r){return 0|r}!0===z?(gr=1,Ar=0):(gr=0,Ar=1);var Tr={HIGH:gr,LOW:Ar},Mr=new F(1),Or=new T(Mr.buffer),Sr=Tr.HIGH,Vr=Tr.LOW;function Fr(r,t){return Or[Sr]=r,Or[Vr]=t,Mr[0]}var Hr=[0,0];function Pr(r,t){var n,e;return dr(Hr,r),n=Hr[0],n&=2147483647,e=K(t),Fr(n|=e&=2147483648,Hr[1])}var Gr=[1,1.5],qr=[0,.5849624872207642],xr=[0,1.350039202129749e-8];function Rr(r,t){return _(t)||yr(t)?(r[0]=t,r[1]=0,r):0!==t&&pr(t)<22250738585072014e-324?(r[0]=4503599627370496*t,r[1]=-52,r):(r[0]=t,r[1]=0,r)}var kr=[0,0],Lr=[0,0];function Wr(r,t){var n,e;return 0===t||0===r||_(r)||yr(r)?r:(function(r,t){1===arguments.length?Rr([0,0],r):Rr(r,t)}(kr,r),t+=kr[1],t+=function(r){var t=K(r);return(t=(2146435072&t)>>>20)-1023|0}(r=kr[0]),t<-1074?Pr(0,r):t>1023?r<0?rr:lr:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,dr(Lr,r),n=Lr[0],n&=2148532223,e*Fr(n|=t+1023<<20,Lr[1])))}var Cr=.6931471805599453;var Yr=1e300,zr=1e-300,Br=[0,0],Dr=[0,0];function Jr(r,t){var n,e,i,u,o,a,f,c,s,l,y,p,v,h;if(_(r)||_(t))return NaN;if(dr(Br,t),o=Br[0],0===Br[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return ir(r);if(-.5===t)return 1/ir(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(yr(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:pr(r)<1==(t===lr)?0:lr}(r,t)}if(dr(Br,r),u=Br[0],0===Br[1]){if(0===u)return function(r,t){return t===rr?lr:t===lr?0:t>0?fr(t)?r:0:fr(t)?Pr(lr,r):lr}(r,t);if(1===r)return 1;if(-1===r&&fr(t))return-1;if(yr(r))return r===rr?Jr(-0,-t):t<0?0:lr}if(r<0&&!1===or(t))return(r-r)/(r-r);if(i=pr(r),n=2147483647&u|0,e=2147483647&o|0,f=o>>>31|0,a=(a=u>>>31|0)&&fr(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(2147483647&K(r))<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===f?a*Yr*Yr:a*zr*zr;if(n>1072693248)return 0===f?a*Yr*Yr:a*zr*zr;y=function(r,t){var n,e,i,u,o,a;return n=(o=1.9259629911266175e-8*(i=t-1)-i*i*(0===(a=i)?.5:.5+a*(.25*a-.3333333333333333))*1.4426950408889634)-((e=jr(e=(u=1.4426950216293335*i)+o,0))-u),r[0]=e,r[1]=n,r}(Dr,i)}else y=function(r,t,n){var e,i,u,o,a,f,c,s,l,y,p,v,h,b,m,N,w,d,g,A,_;return d=0,n<1048576&&(d-=53,n=K(t*=9007199254740992)),d+=(n>>20)-1023|0,n=1072693248|(g=1048575&n|0),g<=235662?A=0:g<767610?A=1:(A=0,d+=1,n-=1048576),o=jr(i=(N=(t=$(t,n))-(c=Gr[A]))*(w=1/(t+c)),0),e=524288+(n>>1|536870912),f=$(0,e+=A<<18),m=(u=i*i)*u*(0===(_=u)?.5999999999999946:.5999999999999946+_*(.4285714285785502+_*(.33333332981837743+_*(.272728123808534+_*(.23066074577556175+.20697501780033842*_))))),f=jr(f=3+(u=o*o)+(m+=(a=w*(N-o*f-o*(t-(f-c))))*(o+i)),0),h=(p=-7.028461650952758e-9*(l=jr(l=(N=o*f)+(w=a*f+(m-(f-3-u))*i),0))+.9617966939259756*(w-(l-N))+xr[A])-((v=jr(v=(y=.9617967009544373*l)+p+(s=qr[A])+(b=d),0))-b-s-y),r[0]=v,r[1]=h,r}(Dr,i,n);if(l=(t-(c=jr(t,0)))*y[0]+t*y[1],s=c*y[0],dr(Br,p=l+s),v=Ir(Br[0]),h=Ir(Br[1]),v>=1083179008){if(0!=(v-1083179008|h))return a*Yr*Yr;if(l+8008566259537294e-32>p-s)return a*Yr*Yr}else if((2147483647&v)>=1083231232){if(0!=(v-3230714880|h))return a*zr*zr;if(l<=p-s)return a*zr*zr}return p=function(r,t,n){var e,i,u,o,a,f,c,s,l,y,p;return y=((l=2147483647&r|0)>>20)-1023|0,s=0,l>1071644672&&(e=((s=r+(1048576>>y+1)>>>0)&~(1048575>>(y=((2147483647&s)>>20)-1023|0)))>>>0,s=(1048575&s|1048576)>>20-y>>>0,r<0&&(s=-s),t-=u=$(0,e)),r=Ir(r=K(c=1-((c=(o=.6931471824645996*(u=jr(u=n+t,0)))+(a=(n-(u-t))*Cr+-1.904654299957768e-9*u))*(i=c-(u=c*c)*(0===(p=u)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(i-2)-((f=a-(c-o))+c*f)-c))),(r+=s<<20>>>0)>>20<=0?Wr(c,s):$(c,r)}(v,s,l),a*p}function Kr(r,t,n,e){var i,u;return _(r)||_(t)||_(n)||_(e)||t>e||e>n?NaN:r<=t?0:(i=(n-t)*(e-t),u=(n-t)*(n-e),r<=e?Jr(r-t,2)/i:r<n?1-Jr(n-r,2)/u:1)}function Qr(r){return function(){return r}}function Xr(r,t,n,e){var i,u;return _(r)||_(t)||_(n)||_(e)||t>e||e>n?NaN:r<=t?rr:(i=(n-t)*(e-t),u=(n-t)*(n-e),r<=e?2*er(r-t)-er(i):r<n?er(1-Jr(n-r,2)/u):0)}function Zr(r,t,n,e){var i,u,o;return _(r)||_(t)||_(n)||_(e)||t>e||e>n?NaN:r<t?rr:(i=er(n-t)+er(e-t),u=er(n-t),o=er(n-t)+er(n-e),r<e?Cr+er(r-t)-i:r===e?Cr-u:r<=n?Cr+er(n-r)-o:rr)}c(Kr,"factory",(function(r,t,n){var e,i;return _(r)||_(t)||_(n)?Qr(NaN):r<=n&&n<=t?(e=(t-r)*(n-r),i=(t-r)*(t-n),function(u){if(_(u))return NaN;if(u<=r)return 0;if(u<=n)return Jr(u-r,2)/e;if(u<t)return 1-Jr(t-u,2)/i;return 1}):Qr(NaN)})),c(Xr,"factory",(function(r,t,n){var e,i;return _(r)||_(t)||_(n)?Qr(NaN):r<=n&&n<=t?(e=(t-r)*(n-r),i=(t-r)*(t-n),function(u){if(_(u))return NaN;if(u<=r)return rr;if(u<=n)return 2*er(u-r)-er(e);if(u<t)return er(1-Jr(t-u,2)/i);return 0}):Qr(NaN)})),c(Zr,"factory",(function(r,t,n){var e,i,u;return _(r)||_(t)||_(n)||r>n||n>t?Qr(NaN):(e=er(t-r)+er(n-r),i=er(t-r),u=er(t-r)+er(t-n),function(o){if(_(o))return NaN;if(o<r)return rr;if(o<n)return Cr+er(o-r)-e;if(o===n)return Cr-i;if(o<=t)return Cr+er(t-o)-u;return rr})}));var $r=Math.ceil;function rt(r){return r<0?$r(r):ur(r)}function tt(r){var t;return _(r)||r===lr?r:r===rr?0:r>709.782712893384?lr:r<-745.1332191019411?0:r>-3.725290298461914e-9&&r<3.725290298461914e-9?1+r:function(r,t,n){var e,i,u,o;return Wr(1-(t-(e=r-t)*(u=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-u)-r),n)}(r-.6931471803691238*(t=rt(r<0?1.4426950408889634*r-.5:1.4426950408889634*r+.5)),1.9082149292705877e-10*t,t)}function nt(r,t,n,e){var i,u,o,a;return _(r)||_(t)||_(n)||_(e)||t>e||e>n?NaN:0===r?1:(u=n-t,o=e-t,a=(i=n-e)*tt(t*r)-u*tt(e*r),a+=o*tt(n*r),a*=2,a/=u*o*i*Jr(r,2))}function et(r,t,n,e){return _(r)||_(t)||_(n)||_(e)||t>e||e>n?NaN:r<t?0:r<e?2*(r-t)/((n-t)*(e-t)):r===e?2/(n-t):r<=n?2*(n-r)/((n-t)*(n-e)):0}function it(r,t,n,e){var i,u;return _(r)||_(t)||_(n)||_(e)||t>e||e>n||r<0||r>1?NaN:(u=(n-t)*(n-e),r<(i=(e-t)/(n-t))?t+ir((n-t)*(e-t)*r):r>i?n-ir(u*(1-r)):e)}function ut(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}function ot(){var r,t,n;if(!(this instanceof ot))return 0===arguments.length?new ot:new ot(arguments[0],arguments[1],arguments[2]);if(arguments.length){if(t=arguments[1],n=arguments[2],!l(r=arguments[0])||_(r))throw new TypeError(ut("invalid argument. Minimum support must be a number. Value: `%s`.",r));if(!l(t)||_(t))throw new TypeError(ut("invalid argument. Maximum support must be a number. Value: `%s`.",t));if(!l(n)||_(n))throw new TypeError(ut("invalid argument. Mode must be a number. Value: `%s`.",n));if(!(r<=n&&n<=t))throw new RangeError(ut("invalid arguments. Parameters must satisfy the following condition: %s. a: `%f`. b: `%f`. c: `%f`.","a <= c <= b",r,t,n))}else r=0,t=1,n=.5;return f(this,"a",{configurable:!1,enumerable:!0,get:function(){return r},set:function(e){if(!l(e)||_(e))throw new TypeError(ut("invalid assignment. Must be a number. Value: `%s`.",e));if(e>t||e>n)throw new RangeError(ut("invalid assignment. Must be less than or equal to both the maximum support and the mode. Value: `%f`.",e));r=e}}),f(this,"b",{configurable:!1,enumerable:!0,get:function(){return t},set:function(e){if(!l(e)||_(e))throw new TypeError(ut("invalid assignment. Must be a number. Value: `%s`.",e));if(r>e||n>e)throw new RangeError(ut("invalid assignment. Must be greater than or equal to both the minimum support and the mode. Value: `%f`.",e));t=e}}),f(this,"c",{configurable:!1,enumerable:!0,get:function(){return n},set:function(e){if(!l(e)||_(e))throw new TypeError(ut("invalid assignment. Must be a number. Value: `%s`.",e));if(r>e||t<e)throw new RangeError(ut("invalid assignment. Must be greater than or equal to the minimum support and less than or equal to the maximum support. Value: `%f`.",e));n=e}}),this}c(nt,"factory",(function(r,t,n){var e,i,u;return _(r)||_(t)||_(n)||r>n||n>t?Qr(NaN):(e=t-n,i=t-r,u=n-r,function(o){var a;if(_(o))return NaN;if(0===o)return 1;return a=e*tt(r*o)-i*tt(n*o),a+=u*tt(t*o),a*=2,a/=i*u*e*Jr(o,2)})})),c(et,"factory",(function(r,t,n){var e,i,u;return _(r)||_(t)||_(n)||r>n||n>t?Qr(NaN):(e=(t-r)*(n-r),i=t-r,u=(t-r)*(t-n),function(o){if(_(o))return NaN;if(o<r)return 0;if(o<n)return 2*(o-r)/e;if(o===n)return 2/i;if(o<=t)return 2*(t-o)/u;return 0})})),c(it,"factory",(function(r,t,n){var e,i,u;return _(r)||_(t)||_(n)||r>n||n>t?Qr(NaN):(e=(n-r)/(t-r),i=(t-r)*(n-r),u=(t-r)*(t-n),function(o){if(_(o)||o<0||o>1)return NaN;if(o<e)return r+ir(i*o);if(o>e)return t-ir(u*(1-o));return n})})),s(ot.prototype,"entropy",(function(){return r=this.a,t=this.b,n=this.c,_(r)||_(t)||_(n)||!(r<=n&&n<=t)?NaN:.5+er(.5*(t-r));var r,t,n})),s(ot.prototype,"kurtosis",(function(){return r=this.a,t=this.b,n=this.c,_(r)||_(t)||_(n)||!(r<=n&&n<=t)?NaN:-.6;var r,t,n})),s(ot.prototype,"mean",(function(){return r=this.a,t=this.b,n=this.c,_(r)||_(t)||_(n)||!(r<=n&&n<=t)?NaN:(r+t+n)/3;var r,t,n})),s(ot.prototype,"median",(function(){return r=this.a,t=this.b,n=this.c,_(r)||_(t)||_(n)||!(r<=n&&n<=t)?NaN:n>=(r+t)/2?r+ir(.5*(t-r)*(n-r)):t-ir(.5*(t-r)*(t-n));var r,t,n})),s(ot.prototype,"mode",(function(){return r=this.a,t=this.b,n=this.c,_(r)||_(t)||_(n)||!(r<=n&&n<=t)?NaN:n;var r,t,n})),s(ot.prototype,"skewness",(function(){return r=this.a,t=this.b,n=this.c,_(r)||_(t)||_(n)||!(r<=n&&n<=t)?NaN:(e=1.4142135623730951*(r+t-2*n)*(2*r-t-n)*(r-2*t+n),e/=5*Jr(r*r+t*t+n*n-r*t-r*n-t*n,1.5));var r,t,n,e})),s(ot.prototype,"stdev",(function(){return r=this.a,t=this.b,n=this.c,_(r)||_(t)||_(n)||!(r<=n&&n<=t)?NaN:ir((r*r+t*t+n*n-r*t-r*n-t*n)/18);var r,t,n})),s(ot.prototype,"variance",(function(){return r=this.a,t=this.b,n=this.c,_(r)||_(t)||_(n)||!(r<=n&&n<=t)?NaN:(r*r+t*t+n*n-r*t-r*n-t*n)/18;var r,t,n})),c(ot.prototype,"cdf",(function(r){return Kr(r,this.a,this.b,this.c)})),c(ot.prototype,"logcdf",(function(r){return Xr(r,this.a,this.b,this.c)})),c(ot.prototype,"logpdf",(function(r){return Zr(r,this.a,this.b,this.c)})),c(ot.prototype,"mgf",(function(r){return nt(r,this.a,this.b,this.c)})),c(ot.prototype,"pdf",(function(r){return et(r,this.a,this.b,this.c)})),c(ot.prototype,"quantile",(function(r){return it(r,this.a,this.b,this.c)}));export{ot as default};
//# sourceMappingURL=mod.js.map