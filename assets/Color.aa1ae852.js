var Xe=Object.defineProperty,qe=Object.defineProperties;var Ve=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,Ge=Object.prototype.propertyIsEnumerable;var ve=(e,t,n)=>t in e?Xe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ge=(e,t)=>{for(var n in t||(t={}))We.call(t,n)&&ve(e,n,t[n]);if(he)for(var n of he(t))Ge.call(t,n)&&ve(e,n,t[n]);return e},pe=(e,t)=>qe(e,Ve(t));import{v as p,r as g,K as Ae,L as ee,N as Ke,C as P,W as be,T as De,O as Ue,P as Qe,D as me,j,Q as Ye}from"./vendor.a4c053b2.js";function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function te(e,t){if(e==null)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t.indexOf(n=a[r])>=0||(o[n]=e[n]);return o}function ne(e){var t=g.exports.useRef(e),n=g.exports.useRef(function(r){t.current&&t.current(r)});return t.current=e,n.current}var F=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=1),e>n?n:e<t?t:e},B=function(e){return"touches"in e},re=function(e){return e&&e.ownerDocument.defaultView||self},ye=function(e,t,n){var r=e.getBoundingClientRect(),o=B(t)?function(a,c){for(var i=0;i<a.length;i++)if(a[i].identifier===c)return a[i];return a[0]}(t.touches,n):t;return{left:F((o.pageX-(r.left+re(e).pageXOffset))/r.width),top:F((o.pageY-(r.top+re(e).pageYOffset))/r.height)}},xe=function(e){!B(e)&&e.preventDefault()},oe=p.memo(function(e){var t=e.onMove,n=e.onKey,r=te(e,["onMove","onKey"]),o=g.exports.useRef(null),a=ne(t),c=ne(n),i=g.exports.useRef(null),s=g.exports.useRef(!1),l=g.exports.useMemo(function(){var k=function(h){xe(h),(B(h)?h.touches.length>0:h.buttons>0)&&o.current?a(ye(o.current,h,i.current)):O(!1)},_=function(){return O(!1)};function O(h){var v=s.current,b=re(o.current),m=h?b.addEventListener:b.removeEventListener;m(v?"touchmove":"mousemove",k),m(v?"touchend":"mouseup",_)}return[function(h){var v=h.nativeEvent,b=o.current;if(b&&(xe(v),!function(C,E){return E&&!B(C)}(v,s.current)&&b)){if(B(v)){s.current=!0;var m=v.changedTouches||[];m.length&&(i.current=m[0].identifier)}b.focus(),a(ye(b,v,i.current)),O(!0)}},function(h){var v=h.which||h.keyCode;v<37||v>40||(h.preventDefault(),c({left:v===39?.05:v===37?-.05:0,top:v===40?.05:v===38?-.05:0}))},O]},[c,a]),f=l[0],d=l[1],w=l[2];return g.exports.useEffect(function(){return w},[w]),p.createElement("div",L({},r,{onTouchStart:f,onMouseDown:f,className:"react-colorful__interactive",ref:o,onKeyDown:d,tabIndex:0,role:"slider"}))}),X=function(e){return e.filter(Boolean).join(" ")},ae=function(e){var t=e.color,n=e.left,r=e.top,o=r===void 0?.5:r,a=X(["react-colorful__pointer",e.className]);return p.createElement("div",{className:a,style:{top:100*o+"%",left:100*n+"%"}},p.createElement("div",{className:"react-colorful__pointer-fill",style:{backgroundColor:t}}))},M=function(e,t,n){return t===void 0&&(t=0),n===void 0&&(n=Math.pow(10,t)),Math.round(n*e)/n},Je={grad:.9,turn:360,rad:360/(2*Math.PI)},ce=function(e){return e[0]==="#"&&(e=e.substr(1)),e.length<6?{r:parseInt(e[0]+e[0],16),g:parseInt(e[1]+e[1],16),b:parseInt(e[2]+e[2],16),a:1}:{r:parseInt(e.substr(0,2),16),g:parseInt(e.substr(2,2),16),b:parseInt(e.substr(4,2),16),a:1}},Ze=function(e,t){return t===void 0&&(t="deg"),Number(e)*(Je[t]||1)},et=function(e){var t=/hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?tt({h:Ze(t[1],t[2]),s:Number(t[3]),l:Number(t[4]),a:t[5]===void 0?1:Number(t[5])/(t[6]?100:1)}):{h:0,s:0,v:0,a:1}},tt=function(e){var t=e.s,n=e.l;return{h:e.h,s:(t*=(n<50?n:100-n)/100)>0?2*t/(n+t)*100:0,v:n+t,a:e.a}},we=function(e){var t=e.s,n=e.v,r=e.a,o=(200-t)*n/100;return{h:M(e.h),s:M(o>0&&o<200?t*n/100/(o<=100?o:200-o)*100:0),l:M(o/2),a:M(r,2)}},ie=function(e){var t=we(e);return"hsl("+t.h+", "+t.s+"%, "+t.l+"%)"},D=function(e){var t=we(e);return"hsla("+t.h+", "+t.s+"%, "+t.l+"%, "+t.a+")"},ke=function(e){var t=e.h,n=e.s,r=e.v,o=e.a;t=t/360*6,n/=100,r/=100;var a=Math.floor(t),c=r*(1-n),i=r*(1-(t-a)*n),s=r*(1-(1-t+a)*n),l=a%6;return{r:M(255*[r,i,c,c,s,r][l]),g:M(255*[s,r,r,i,c,c][l]),b:M(255*[c,c,s,r,r,i][l]),a:M(o,2)}},nt=function(e){var t=/rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(e);return t?Ce({r:Number(t[1])/(t[2]?100/255:1),g:Number(t[3])/(t[4]?100/255:1),b:Number(t[5])/(t[6]?100/255:1),a:t[7]===void 0?1:Number(t[7])/(t[8]?100:1)}):{h:0,s:0,v:0,a:1}},se=function(e){var t=e.toString(16);return t.length<2?"0"+t:t},Ce=function(e){var t=e.r,n=e.g,r=e.b,o=e.a,a=Math.max(t,n,r),c=a-Math.min(t,n,r),i=c?a===t?(n-r)/c:a===n?2+(r-t)/c:4+(t-n)/c:0;return{h:M(60*(i<0?i+6:i)),s:M(a?c/a*100:0),v:M(a/255*100),a:o}},_e=p.memo(function(e){var t=e.hue,n=e.onChange,r=X(["react-colorful__hue",e.className]);return p.createElement("div",{className:r},p.createElement(oe,{onMove:function(o){n({h:360*o.left})},onKey:function(o){n({h:F(t+360*o.left,0,360)})},"aria-label":"Hue","aria-valuetext":M(t)},p.createElement(ae,{className:"react-colorful__hue-pointer",left:t/360,color:ie({h:t,s:100,v:100,a:1})})))}),Ee=p.memo(function(e){var t=e.hsva,n=e.onChange,r={backgroundColor:ie({h:t.h,s:100,v:100,a:1})};return p.createElement("div",{className:"react-colorful__saturation",style:r},p.createElement(oe,{onMove:function(o){n({s:100*o.left,v:100-100*o.top})},onKey:function(o){n({s:F(t.s+100*o.left,0,100),v:F(t.v-100*o.top,0,100)})},"aria-label":"Color","aria-valuetext":"Saturation "+M(t.s)+"%, Brightness "+M(t.v)+"%"},p.createElement(ae,{className:"react-colorful__saturation-pointer",top:1-t.v/100,left:t.s/100,color:ie(t)})))}),Me=function(e,t){if(e===t)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0},Se=function(e,t){return e.replace(/\s/g,"")===t.replace(/\s/g,"")};function Oe(e,t,n){var r=ne(n),o=g.exports.useState(function(){return e.toHsva(t)}),a=o[0],c=o[1],i=g.exports.useRef({color:t,hsva:a});g.exports.useEffect(function(){if(!e.equal(t,i.current.color)){var l=e.toHsva(t);i.current={hsva:l,color:t},c(l)}},[t,e]),g.exports.useEffect(function(){var l;Me(a,i.current.hsva)||e.equal(l=e.fromHsva(a),i.current.color)||(i.current={hsva:a,color:l},r(l))},[a,e,r]);var s=g.exports.useCallback(function(l){c(function(f){return Object.assign({},f,l)})},[]);return[a,s]}var rt=typeof window!="undefined"?g.exports.useLayoutEffect:g.exports.useEffect,ot=function(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:void 0},Ie=new Map,Ne=function(e){rt(function(){var t=e.current?e.current.ownerDocument:document;if(t!==void 0&&!Ie.has(t)){var n=t.createElement("style");n.innerHTML=`.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}`,Ie.set(t,n);var r=ot();r&&n.setAttribute("nonce",r),t.head.appendChild(n)}},[])},at=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,c=te(e,["className","colorModel","color","onChange"]),i=g.exports.useRef(null);Ne(i);var s=Oe(n,o,a),l=s[0],f=s[1],d=X(["react-colorful",t]);return p.createElement("div",L({},c,{ref:i,className:d}),p.createElement(Ee,{hsva:l,onChange:f}),p.createElement(_e,{hue:l.h,onChange:f,className:"react-colorful__last-control"}))},ct={defaultColor:"000",toHsva:function(e){return Ce(ce(e))},fromHsva:function(e){return n=(t=ke(e)).g,r=t.b,"#"+se(t.r)+se(n)+se(r);var t,n,r},equal:function(e,t){return e.toLowerCase()===t.toLowerCase()||Me(ce(e),ce(t))}},it=function(e){return p.createElement(at,L({},e,{colorModel:ct}))},st=function(e){var t=e.className,n=e.hsva,r=e.onChange,o={backgroundImage:"linear-gradient(90deg, "+D(Object.assign({},n,{a:0}))+", "+D(Object.assign({},n,{a:1}))+")"},a=X(["react-colorful__alpha",t]);return p.createElement("div",{className:a},p.createElement("div",{className:"react-colorful__alpha-gradient",style:o}),p.createElement(oe,{onMove:function(c){r({a:c.left})},onKey:function(c){r({a:F(n.a+c.left)})},"aria-label":"Alpha","aria-valuetext":M(100*n.a)+"%"},p.createElement(ae,{className:"react-colorful__alpha-pointer",left:n.a,color:D(n)})))},je=function(e){var t=e.className,n=e.colorModel,r=e.color,o=r===void 0?n.defaultColor:r,a=e.onChange,c=te(e,["className","colorModel","color","onChange"]),i=g.exports.useRef(null);Ne(i);var s=Oe(n,o,a),l=s[0],f=s[1],d=X(["react-colorful",t]);return p.createElement("div",L({},c,{ref:i,className:d}),p.createElement(Ee,{hsva:l,onChange:f}),p.createElement(_e,{hue:l.h,onChange:f}),p.createElement(st,{hsva:l,onChange:f,className:"react-colorful__last-control"}))},lt={defaultColor:"hsla(0, 0%, 0%, 1)",toHsva:et,fromHsva:D,equal:Se},ut=function(e){return p.createElement(je,L({},e,{colorModel:lt}))},ft={defaultColor:"rgba(0, 0, 0, 1)",toHsva:nt,fromHsva:function(e){var t=ke(e);return"rgba("+t.r+", "+t.g+", "+t.b+", "+t.a+")"},equal:Se},dt=function(e){return p.createElement(je,L({},e,{colorModel:ft}))},ht={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]};const q=ht,Re={};for(const e of Object.keys(q))Re[q[e]]=e;const u={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};var He=u;for(const e of Object.keys(u)){if(!("channels"in u[e]))throw new Error("missing channels property: "+e);if(!("labels"in u[e]))throw new Error("missing channel labels property: "+e);if(u[e].labels.length!==u[e].channels)throw new Error("channel and label counts mismatch: "+e);const{channels:t,labels:n}=u[e];delete u[e].channels,delete u[e].labels,Object.defineProperty(u[e],"channels",{value:t}),Object.defineProperty(u[e],"labels",{value:n})}u.rgb.hsl=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(t,n,r),a=Math.max(t,n,r),c=a-o;let i,s;a===o?i=0:t===a?i=(n-r)/c:n===a?i=2+(r-t)/c:r===a&&(i=4+(t-n)/c),i=Math.min(i*60,360),i<0&&(i+=360);const l=(o+a)/2;return a===o?s=0:l<=.5?s=c/(a+o):s=c/(2-a-o),[i,s*100,l*100]};u.rgb.hsv=function(e){let t,n,r,o,a;const c=e[0]/255,i=e[1]/255,s=e[2]/255,l=Math.max(c,i,s),f=l-Math.min(c,i,s),d=function(w){return(l-w)/6/f+1/2};return f===0?(o=0,a=0):(a=f/l,t=d(c),n=d(i),r=d(s),c===l?o=r-n:i===l?o=1/3+t-r:s===l&&(o=2/3+n-t),o<0?o+=1:o>1&&(o-=1)),[o*360,a*100,l*100]};u.rgb.hwb=function(e){const t=e[0],n=e[1];let r=e[2];const o=u.rgb.hsl(e)[0],a=1/255*Math.min(t,Math.min(n,r));return r=1-1/255*Math.max(t,Math.max(n,r)),[o,a*100,r*100]};u.rgb.cmyk=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.min(1-t,1-n,1-r),a=(1-t-o)/(1-o)||0,c=(1-n-o)/(1-o)||0,i=(1-r-o)/(1-o)||0;return[a*100,c*100,i*100,o*100]};function vt(e,t){return(e[0]-t[0])**2+(e[1]-t[1])**2+(e[2]-t[2])**2}u.rgb.keyword=function(e){const t=Re[e];if(t)return t;let n=1/0,r;for(const o of Object.keys(q)){const a=q[o],c=vt(e,a);c<n&&(n=c,r=o)}return r};u.keyword.rgb=function(e){return q[e]};u.rgb.xyz=function(e){let t=e[0]/255,n=e[1]/255,r=e[2]/255;t=t>.04045?((t+.055)/1.055)**2.4:t/12.92,n=n>.04045?((n+.055)/1.055)**2.4:n/12.92,r=r>.04045?((r+.055)/1.055)**2.4:r/12.92;const o=t*.4124+n*.3576+r*.1805,a=t*.2126+n*.7152+r*.0722,c=t*.0193+n*.1192+r*.9505;return[o*100,a*100,c*100]};u.rgb.lab=function(e){const t=u.rgb.xyz(e);let n=t[0],r=t[1],o=t[2];n/=95.047,r/=100,o/=108.883,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116,o=o>.008856?o**(1/3):7.787*o+16/116;const a=116*r-16,c=500*(n-r),i=200*(r-o);return[a,c,i]};u.hsl.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;let o,a,c;if(n===0)return c=r*255,[c,c,c];r<.5?o=r*(1+n):o=r+n-r*n;const i=2*r-o,s=[0,0,0];for(let l=0;l<3;l++)a=t+1/3*-(l-1),a<0&&a++,a>1&&a--,6*a<1?c=i+(o-i)*6*a:2*a<1?c=o:3*a<2?c=i+(o-i)*(2/3-a)*6:c=i,s[l]=c*255;return s};u.hsl.hsv=function(e){const t=e[0];let n=e[1]/100,r=e[2]/100,o=n;const a=Math.max(r,.01);r*=2,n*=r<=1?r:2-r,o*=a<=1?a:2-a;const c=(r+n)/2,i=r===0?2*o/(a+o):2*n/(r+n);return[t,i*100,c*100]};u.hsv.rgb=function(e){const t=e[0]/60,n=e[1]/100;let r=e[2]/100;const o=Math.floor(t)%6,a=t-Math.floor(t),c=255*r*(1-n),i=255*r*(1-n*a),s=255*r*(1-n*(1-a));switch(r*=255,o){case 0:return[r,s,c];case 1:return[i,r,c];case 2:return[c,r,s];case 3:return[c,i,r];case 4:return[s,c,r];case 5:return[r,c,i]}};u.hsv.hsl=function(e){const t=e[0],n=e[1]/100,r=e[2]/100,o=Math.max(r,.01);let a,c;c=(2-n)*r;const i=(2-n)*o;return a=n*o,a/=i<=1?i:2-i,a=a||0,c/=2,[t,a*100,c*100]};u.hwb.rgb=function(e){const t=e[0]/360;let n=e[1]/100,r=e[2]/100;const o=n+r;let a;o>1&&(n/=o,r/=o);const c=Math.floor(6*t),i=1-r;a=6*t-c,(c&1)!=0&&(a=1-a);const s=n+a*(i-n);let l,f,d;switch(c){default:case 6:case 0:l=i,f=s,d=n;break;case 1:l=s,f=i,d=n;break;case 2:l=n,f=i,d=s;break;case 3:l=n,f=s,d=i;break;case 4:l=s,f=n,d=i;break;case 5:l=i,f=n,d=s;break}return[l*255,f*255,d*255]};u.cmyk.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100,o=e[3]/100,a=1-Math.min(1,t*(1-o)+o),c=1-Math.min(1,n*(1-o)+o),i=1-Math.min(1,r*(1-o)+o);return[a*255,c*255,i*255]};u.xyz.rgb=function(e){const t=e[0]/100,n=e[1]/100,r=e[2]/100;let o,a,c;return o=t*3.2406+n*-1.5372+r*-.4986,a=t*-.9689+n*1.8758+r*.0415,c=t*.0557+n*-.204+r*1.057,o=o>.0031308?1.055*o**(1/2.4)-.055:o*12.92,a=a>.0031308?1.055*a**(1/2.4)-.055:a*12.92,c=c>.0031308?1.055*c**(1/2.4)-.055:c*12.92,o=Math.min(Math.max(0,o),1),a=Math.min(Math.max(0,a),1),c=Math.min(Math.max(0,c),1),[o*255,a*255,c*255]};u.xyz.lab=function(e){let t=e[0],n=e[1],r=e[2];t/=95.047,n/=100,r/=108.883,t=t>.008856?t**(1/3):7.787*t+16/116,n=n>.008856?n**(1/3):7.787*n+16/116,r=r>.008856?r**(1/3):7.787*r+16/116;const o=116*n-16,a=500*(t-n),c=200*(n-r);return[o,a,c]};u.lab.xyz=function(e){const t=e[0],n=e[1],r=e[2];let o,a,c;a=(t+16)/116,o=n/500+a,c=a-r/200;const i=a**3,s=o**3,l=c**3;return a=i>.008856?i:(a-16/116)/7.787,o=s>.008856?s:(o-16/116)/7.787,c=l>.008856?l:(c-16/116)/7.787,o*=95.047,a*=100,c*=108.883,[o,a,c]};u.lab.lch=function(e){const t=e[0],n=e[1],r=e[2];let o;o=Math.atan2(r,n)*360/2/Math.PI,o<0&&(o+=360);const c=Math.sqrt(n*n+r*r);return[t,c,o]};u.lch.lab=function(e){const t=e[0],n=e[1],o=e[2]/360*2*Math.PI,a=n*Math.cos(o),c=n*Math.sin(o);return[t,a,c]};u.rgb.ansi16=function(e,t=null){const[n,r,o]=e;let a=t===null?u.rgb.hsv(e)[2]:t;if(a=Math.round(a/50),a===0)return 30;let c=30+(Math.round(o/255)<<2|Math.round(r/255)<<1|Math.round(n/255));return a===2&&(c+=60),c};u.hsv.ansi16=function(e){return u.rgb.ansi16(u.hsv.rgb(e),e[2])};u.rgb.ansi256=function(e){const t=e[0],n=e[1],r=e[2];return t===n&&n===r?t<8?16:t>248?231:Math.round((t-8)/247*24)+232:16+36*Math.round(t/255*5)+6*Math.round(n/255*5)+Math.round(r/255*5)};u.ansi16.rgb=function(e){let t=e%10;if(t===0||t===7)return e>50&&(t+=3.5),t=t/10.5*255,[t,t,t];const n=(~~(e>50)+1)*.5,r=(t&1)*n*255,o=(t>>1&1)*n*255,a=(t>>2&1)*n*255;return[r,o,a]};u.ansi256.rgb=function(e){if(e>=232){const a=(e-232)*10+8;return[a,a,a]}e-=16;let t;const n=Math.floor(e/36)/5*255,r=Math.floor((t=e%36)/6)/5*255,o=t%6/5*255;return[n,r,o]};u.rgb.hex=function(e){const n=(((Math.round(e[0])&255)<<16)+((Math.round(e[1])&255)<<8)+(Math.round(e[2])&255)).toString(16).toUpperCase();return"000000".substring(n.length)+n};u.hex.rgb=function(e){const t=e.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!t)return[0,0,0];let n=t[0];t[0].length===3&&(n=n.split("").map(i=>i+i).join(""));const r=parseInt(n,16),o=r>>16&255,a=r>>8&255,c=r&255;return[o,a,c]};u.rgb.hcg=function(e){const t=e[0]/255,n=e[1]/255,r=e[2]/255,o=Math.max(Math.max(t,n),r),a=Math.min(Math.min(t,n),r),c=o-a;let i,s;return c<1?i=a/(1-c):i=0,c<=0?s=0:o===t?s=(n-r)/c%6:o===n?s=2+(r-t)/c:s=4+(t-n)/c,s/=6,s%=1,[s*360,c*100,i*100]};u.hsl.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=n<.5?2*t*n:2*t*(1-n);let o=0;return r<1&&(o=(n-.5*r)/(1-r)),[e[0],r*100,o*100]};u.hsv.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=t*n;let o=0;return r<1&&(o=(n-r)/(1-r)),[e[0],r*100,o*100]};u.hcg.rgb=function(e){const t=e[0]/360,n=e[1]/100,r=e[2]/100;if(n===0)return[r*255,r*255,r*255];const o=[0,0,0],a=t%1*6,c=a%1,i=1-c;let s=0;switch(Math.floor(a)){case 0:o[0]=1,o[1]=c,o[2]=0;break;case 1:o[0]=i,o[1]=1,o[2]=0;break;case 2:o[0]=0,o[1]=1,o[2]=c;break;case 3:o[0]=0,o[1]=i,o[2]=1;break;case 4:o[0]=c,o[1]=0,o[2]=1;break;default:o[0]=1,o[1]=0,o[2]=i}return s=(1-n)*r,[(n*o[0]+s)*255,(n*o[1]+s)*255,(n*o[2]+s)*255]};u.hcg.hsv=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);let o=0;return r>0&&(o=t/r),[e[0],o*100,r*100]};u.hcg.hsl=function(e){const t=e[1]/100,r=e[2]/100*(1-t)+.5*t;let o=0;return r>0&&r<.5?o=t/(2*r):r>=.5&&r<1&&(o=t/(2*(1-r))),[e[0],o*100,r*100]};u.hcg.hwb=function(e){const t=e[1]/100,n=e[2]/100,r=t+n*(1-t);return[e[0],(r-t)*100,(1-r)*100]};u.hwb.hcg=function(e){const t=e[1]/100,n=e[2]/100,r=1-n,o=r-t;let a=0;return o<1&&(a=(r-o)/(1-o)),[e[0],o*100,a*100]};u.apple.rgb=function(e){return[e[0]/65535*255,e[1]/65535*255,e[2]/65535*255]};u.rgb.apple=function(e){return[e[0]/255*65535,e[1]/255*65535,e[2]/255*65535]};u.gray.rgb=function(e){return[e[0]/100*255,e[0]/100*255,e[0]/100*255]};u.gray.hsl=function(e){return[0,0,e[0]]};u.gray.hsv=u.gray.hsl;u.gray.hwb=function(e){return[0,100,e[0]]};u.gray.cmyk=function(e){return[0,0,0,e[0]]};u.gray.lab=function(e){return[e[0],0,0]};u.gray.hex=function(e){const t=Math.round(e[0]/100*255)&255,r=((t<<16)+(t<<8)+t).toString(16).toUpperCase();return"000000".substring(r.length)+r};u.rgb.gray=function(e){return[(e[0]+e[1]+e[2])/3/255*100]};const U=He;function gt(){const e={},t=Object.keys(U);for(let n=t.length,r=0;r<n;r++)e[t[r]]={distance:-1,parent:null};return e}function pt(e){const t=gt(),n=[e];for(t[e].distance=0;n.length;){const r=n.pop(),o=Object.keys(U[r]);for(let a=o.length,c=0;c<a;c++){const i=o[c],s=t[i];s.distance===-1&&(s.distance=t[r].distance+1,s.parent=r,n.unshift(i))}}return t}function bt(e,t){return function(n){return t(e(n))}}function mt(e,t){const n=[t[e].parent,e];let r=U[t[e].parent][e],o=t[e].parent;for(;t[o].parent;)n.unshift(t[o].parent),r=bt(U[t[o].parent][o],r),o=t[o].parent;return r.conversion=n,r}var yt=function(e){const t=pt(e),n={},r=Object.keys(t);for(let o=r.length,a=0;a<o;a++){const c=r[a];t[c].parent!==null&&(n[c]=mt(c,t))}return n};const le=He,xt=yt,z={},wt=Object.keys(le);function kt(e){const t=function(...n){const r=n[0];return r==null?r:(r.length>1&&(n=r),e(n))};return"conversion"in e&&(t.conversion=e.conversion),t}function Ct(e){const t=function(...n){const r=n[0];if(r==null)return r;r.length>1&&(n=r);const o=e(n);if(typeof o=="object")for(let a=o.length,c=0;c<a;c++)o[c]=Math.round(o[c]);return o};return"conversion"in e&&(t.conversion=e.conversion),t}wt.forEach(e=>{z[e]={},Object.defineProperty(z[e],"channels",{value:le[e].channels}),Object.defineProperty(z[e],"labels",{value:le[e].labels});const t=xt(e);Object.keys(t).forEach(r=>{const o=t[r];z[e][r]=Ct(o),z[e][r].raw=kt(o)})});var I=z,_t=Ae,Et=function(){return _t.Date.now()},Mt=Et,St=/\s/;function Ot(e){for(var t=e.length;t--&&St.test(e.charAt(t)););return t}var It=Ot,Nt=It,jt=/^\s+/;function Rt(e){return e&&e.slice(0,Nt(e)+1).replace(jt,"")}var Ht=Rt,Pt=Ht,Pe=ee,Tt=Ke,Te=0/0,Lt=/^[-+]0x[0-9a-f]+$/i,Ft=/^0b[01]+$/i,zt=/^0o[0-7]+$/i,$t=parseInt;function Bt(e){if(typeof e=="number")return e;if(Tt(e))return Te;if(Pe(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=Pe(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Pt(e);var n=Ft.test(e);return n||zt.test(e)?$t(e.slice(2),n?2:8):Lt.test(e)?Te:+e}var Xt=Bt,qt=ee,ue=Mt,Le=Xt,Vt="Expected a function",Wt=Math.max,Gt=Math.min;function At(e,t,n){var r,o,a,c,i,s,l=0,f=!1,d=!1,w=!0;if(typeof e!="function")throw new TypeError(Vt);t=Le(t)||0,qt(n)&&(f=!!n.leading,d="maxWait"in n,a=d?Wt(Le(n.maxWait)||0,t):a,w="trailing"in n?!!n.trailing:w);function k(x){var N=r,H=o;return r=o=void 0,l=x,c=e.apply(H,N),c}function _(x){return l=x,i=setTimeout(v,t),f?k(x):c}function O(x){var N=x-s,H=x-l,A=t-N;return d?Gt(A,a-H):A}function h(x){var N=x-s,H=x-l;return s===void 0||N>=t||N<0||d&&H>=a}function v(){var x=ue();if(h(x))return b(x);i=setTimeout(v,O(x))}function b(x){return i=void 0,w&&r?k(x):(r=o=void 0,c)}function m(){i!==void 0&&clearTimeout(i),l=0,r=s=o=i=void 0}function C(){return i===void 0?c:b(ue())}function E(){var x=ue(),N=h(x);if(r=arguments,o=this,s=x,N){if(i===void 0)return _(s);if(d)return clearTimeout(i),i=setTimeout(v,t),k(s)}return i===void 0&&(i=setTimeout(v,t)),c}return E.cancel=m,E.flush=C,E}var Kt=At,Dt=Kt,Ut=ee,Qt="Expected a function";function Yt(e,t,n){var r=!0,o=!0;if(typeof e!="function")throw new TypeError(Qt);return Ut(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),Dt(e,t,{leading:r,maxWait:t,trailing:o})}var Jt=Yt,V,W;function R(e,t){return nn(e)||tn(e,t)||en(e,t)||Zt()}function Zt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function en(e,t){if(!!e){if(typeof e=="string")return Fe(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Fe(e,t)}}function Fe(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function tn(e,t){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(e)))){var n=[],r=!0,o=!1,a=void 0;try{for(var c=e[Symbol.iterator](),i;!(r=(i=c.next()).done)&&(n.push(i.value),!(t&&n.length===t));r=!0);}catch(s){o=!0,a=s}finally{try{!r&&c.return!=null&&c.return()}finally{if(o)throw a}}return n}}function nn(e){if(Array.isArray(e))return e}function S(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function rn(e,t){if(e==null)return{};var n=on(e,t),r,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function on(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var an=P.div({position:"relative",maxWidth:250}),cn=P(be)({position:"absolute",zIndex:1,top:4,left:4}),sn=P.div({width:200,margin:5,".react-colorful__saturation":{borderRadius:"4px 4px 0 0"},".react-colorful__hue":{boxShadow:"inset 0 0 0 1px rgb(0 0 0 / 5%)"},".react-colorful__last-control":{borderRadius:"0 0 4px 4px"}}),ln=P(De)(function(e){var t=e.theme;return{fontFamily:t.typography.fonts.base}}),un=P.div({display:"grid",gridTemplateColumns:"repeat(9, 16px)",gap:6,padding:3,marginTop:5,width:200}),fn=P.div(function(e){var t=e.theme,n=e.active;return{width:16,height:16,boxShadow:n?"".concat(t.appBorderColor," 0 0 0 1px inset, ").concat(t.color.mediumdark,"50 0 0 0 4px"):"".concat(t.appBorderColor," 0 0 0 1px inset"),borderRadius:t.appBorderRadius}}),dn=`url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>')`,fe=function(t){var n=t.value,r=t.active,o=t.onClick,a=t.style,c=rn(t,["value","active","onClick","style"]),i="linear-gradient(".concat(n,", ").concat(n,"), ").concat(dn,", linear-gradient(#fff, #fff)");return j(fn,pe(ge({},c),{active:r,onClick:o,style:Object.assign({},a,{backgroundImage:i})}))};fe.displayName="Swatch";var hn=P(Ue.Input)(function(e){var t=e.theme;return{width:"100%",paddingLeft:30,paddingRight:30,boxSizing:"border-box",fontFamily:t.typography.fonts.base}}),vn=P(Qe)(function(e){var t=e.theme;return{position:"absolute",zIndex:1,top:6,right:7,width:20,height:20,padding:4,boxSizing:"border-box",cursor:"pointer",color:t.input.color}}),y;(function(e){e.RGB="rgb",e.HSL="hsl",e.HEX="hex"})(y||(y={}));var Q=Object.values(y),gn=/\(([0-9]+),\s*([0-9]+)%?,\s*([0-9]+)%?,?\s*([0-9.]+)?\)/,pn=/^\s*rgba?\(([0-9]+),\s*([0-9]+),\s*([0-9]+),?\s*([0-9.]+)?\)\s*$/i,bn=/^\s*hsla?\(([0-9]+),\s*([0-9]+)%,\s*([0-9]+)%,?\s*([0-9.]+)?\)\s*$/i,de=/^\s*#?([0-9a-f]{3}|[0-9a-f]{6})\s*$/i,mn=/^\s*#?([0-9a-f]{3})\s*$/i,yn=(V={},S(V,y.HEX,it),S(V,y.RGB,dt),S(V,y.HSL,ut),V),Y=(W={},S(W,y.HEX,"transparent"),S(W,y.RGB,"rgba(0, 0, 0, 0)"),S(W,y.HSL,"hsla(0, 0%, 0%, 0)"),W),ze=function(t){var n=t==null?void 0:t.match(gn);if(!n)return[0,0,0,1];var r=R(n,5),o=r[1],a=r[2],c=r[3],i=r[4],s=i===void 0?1:i;return[o,a,c,s].map(Number)},G=function(t){var n;if(!!t){var r=!0;if(pn.test(t)){var o,a=ze(t),c=R(a,4),i=c[0],s=c[1],l=c[2],f=c[3],d=I.rgb.hsl([i,s,l])||[0,0,0],w=R(d,3),k=w[0],_=w[1],O=w[2];return o={valid:r,value:t,keyword:I.rgb.keyword([i,s,l]),colorSpace:y.RGB},S(o,y.RGB,t),S(o,y.HSL,"hsla(".concat(k,", ").concat(_,"%, ").concat(O,"%, ").concat(f,")")),S(o,y.HEX,"#".concat(I.rgb.hex([i,s,l]).toLowerCase())),o}if(bn.test(t)){var h,v=ze(t),b=R(v,4),m=b[0],C=b[1],E=b[2],x=b[3],N=I.hsl.rgb([m,C,E])||[0,0,0],H=R(N,3),A=H[0],$e=H[1],Be=H[2];return h={valid:r,value:t,keyword:I.hsl.keyword([m,C,E]),colorSpace:y.HSL},S(h,y.RGB,"rgba(".concat(A,", ").concat($e,", ").concat(Be,", ").concat(x,")")),S(h,y.HSL,t),S(h,y.HEX,"#".concat(I.hsl.hex([m,C,E]).toLowerCase())),h}var K=t.replace("#",""),$=I.keyword.rgb(K)||I.hex.rgb(K),Z=I.rgb.hsl($),T=t;if(/[^#a-f0-9]/i.test(t)?T=K:de.test(t)&&(T="#".concat(K)),T.startsWith("#"))r=de.test(T);else try{I.keyword.hex(T)}catch{r=!1}return n={valid:r,value:T,keyword:I.rgb.keyword($),colorSpace:y.HEX},S(n,y.RGB,"rgba(".concat($[0],", ").concat($[1],", ").concat($[2],", 1)")),S(n,y.HSL,"hsla(".concat(Z[0],", ").concat(Z[1],"%, ").concat(Z[2],"%, 1)")),S(n,y.HEX,T),n}},xn=function(t,n,r){if(!t||!(n!=null&&n.valid))return Y[r];if(r!==y.HEX)return(n==null?void 0:n[r])||Y[r];if(!n.hex.startsWith("#"))try{return"#".concat(I.keyword.hex(n.hex))}catch{return Y.hex}var o=n.hex.match(mn);if(!o)return de.test(n.hex)?n.hex:Y.hex;var a=o[1].split(""),c=R(a,3),i=c[0],s=c[1],l=c[2];return"#".concat(i).concat(i).concat(s).concat(s).concat(l).concat(l)},wn=function(t,n){var r=g.exports.useState(t||""),o=R(r,2),a=o[0],c=o[1],i=g.exports.useState(function(){return G(a)}),s=R(i,2),l=s[0],f=s[1],d=g.exports.useState((l==null?void 0:l.colorSpace)||y.HEX),w=R(d,2),k=w[0],_=w[1];g.exports.useEffect(function(){t===void 0&&(c(""),f(void 0),_(y.HEX))},[t]);var O=g.exports.useMemo(function(){return xn(a,l,k).toLowerCase()},[a,l,k]),h=g.exports.useCallback(function(b){var m=G(b);c((m==null?void 0:m.value)||b||""),!!m&&(f(m),_(m.colorSpace),n(m.value))},[n]),v=g.exports.useCallback(function(){var b=Q.indexOf(k)+1;b>=Q.length&&(b=0),_(Q[b]);var m=(l==null?void 0:l[Q[b]])||"";c(m),n(m)},[l,k,n]);return{value:a,realValue:O,updateValue:h,color:l,colorSpace:k,cycleColorSpace:v}},J=function(t){return t.replace(/\s*/,"").toLowerCase()},kn=function(t,n,r){var o=g.exports.useState(n!=null&&n.valid?[n]:[]),a=R(o,2),c=a[0],i=a[1];g.exports.useEffect(function(){n===void 0&&i([])},[n]);var s=g.exports.useMemo(function(){var f=(t||[]).map(function(d){return typeof d=="string"?G(d):d.title?Object.assign({},G(d.color),{keyword:d.title}):G(d.color)});return f.concat(c).filter(Boolean).slice(-27)},[t,c]),l=g.exports.useCallback(function(f){!(f!=null&&f.valid)||s.some(function(d){return J(d[r])===J(f[r])})||i(function(d){return d.concat(f)})},[r,s]);return{presets:s,addPreset:l}},Cn=function(t){var n=t.name,r=t.value,o=t.onChange,a=t.onFocus,c=t.onBlur,i=t.presetColors,s=t.startOpen,l=wn(r,Jt(o,200)),f=l.value,d=l.realValue,w=l.updateValue,k=l.color,_=l.colorSpace,O=l.cycleColorSpace,h=kn(i,k,_),v=h.presets,b=h.addPreset,m=yn[_];return me(an,{children:[j(cn,{trigger:"click",startOpen:s,closeOnClick:!0,onVisibilityChange:function(){return b(k)},tooltip:me(sn,{children:[j(m,{color:d==="transparent"?"#000000":d,onChange:w,onFocus:a,onBlur:c}),v.length>0&&j(un,{children:v.map(function(C,E){return j(be,{hasChrome:!1,tooltip:j(ln,{note:C.keyword||C.value}),children:j(fe,{value:C[_],active:k&&J(C[_])===J(k[_]),onClick:function(){return w(C.value)}})},"".concat(C.value,"-").concat(E))})})]}),children:j(fe,{value:d,style:{margin:4}})}),j(hn,{id:Ye(n),value:f,onChange:function(E){return w(E.target.value)},onFocus:function(E){return E.target.select()},placeholder:"Choose color..."}),f?j(vn,{icon:"markup",onClick:O}):null]})};Cn.displayName="ColorControl";export{Cn as ColorControl,Cn as default};
//# sourceMappingURL=Color.aa1ae852.js.map
