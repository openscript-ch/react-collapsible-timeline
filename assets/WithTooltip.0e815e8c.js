var Yt=Object.defineProperty,zt=Object.defineProperties;var qt=Object.getOwnPropertyDescriptors;var rt=Object.getOwnPropertySymbols;var Gt=Object.prototype.hasOwnProperty,Zt=Object.prototype.propertyIsEnumerable;var ot=(t,e,o)=>e in t?Yt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,oe=(t,e)=>{for(var o in e||(e={}))Gt.call(e,o)&&ot(t,o,e[o]);if(rt)for(var o of rt(e))Zt.call(e,o)&&ot(t,o,e[o]);return t},ce=(t,e)=>zt(t,qt(e));import{a6 as Ne,a7 as M,a8 as D,a9 as W,aa as $,ab as He,ac as wt,ad as Re,ae as pe,af as Jt,ag as Kt,ah as nt,ai as bt,aj as Ot,ak as Qt,r as T,al as xt,X as _,_ as _t,j as G,a2 as er,am as tr,e as Le,Z as rr,s as Se,an as fe,ao as de,a0 as or}from"./iframe.55d7f575.js";function I(t){return t?(t.nodeName||"").toLowerCase():null}function N(t){if(t==null)return window;if(t.toString()!=="[object Window]"){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ne(t){var e=N(t).Element;return t instanceof e||t instanceof Element}function L(t){var e=N(t).HTMLElement;return t instanceof e||t instanceof HTMLElement}function Tt(t){if(typeof ShadowRoot=="undefined")return!1;var e=N(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function nr(t){var e=t.state;Object.keys(e.elements).forEach(function(o){var r=e.styles[o]||{},n=e.attributes[o]||{},i=e.elements[o];!L(i)||!I(i)||(Object.assign(i.style,r),Object.keys(n).forEach(function(s){var a=n[s];a===!1?i.removeAttribute(s):i.setAttribute(s,a===!0?"":a)}))})}function ir(t){var e=t.state,o={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,o.popper),e.styles=o,e.elements.arrow&&Object.assign(e.elements.arrow.style,o.arrow),function(){Object.keys(e.elements).forEach(function(r){var n=e.elements[r],i=e.attributes[r]||{},s=Object.keys(e.styles.hasOwnProperty(r)?e.styles[r]:o[r]),a=s.reduce(function(l,c){return l[c]="",l},{});!L(n)||!I(n)||(Object.assign(n.style,a),Object.keys(i).forEach(function(l){n.removeAttribute(l)}))})}}var ar={name:"applyStyles",enabled:!0,phase:"write",fn:nr,effect:ir,requires:["computeStyles"]};function F(t){return t.split("-")[0]}var ee=Math.max,Pe=Math.min,ie=Math.round;function ae(t,e){e===void 0&&(e=!1);var o=t.getBoundingClientRect(),r=1,n=1;if(L(t)&&e){var i=t.offsetHeight,s=t.offsetWidth;s>0&&(r=ie(o.width)/s||1),i>0&&(n=ie(o.height)/i||1)}return{width:o.width/r,height:o.height/n,top:o.top/n,right:o.right/r,bottom:o.bottom/n,left:o.left/r,x:o.left/r,y:o.top/n}}function Ue(t){var e=ae(t),o=t.offsetWidth,r=t.offsetHeight;return Math.abs(e.width-o)<=1&&(o=e.width),Math.abs(e.height-r)<=1&&(r=e.height),{x:t.offsetLeft,y:t.offsetTop,width:o,height:r}}function Ct(t,e){var o=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(o&&Tt(o)){var r=e;do{if(r&&t.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function V(t){return N(t).getComputedStyle(t)}function sr(t){return["table","td","th"].indexOf(I(t))>=0}function Z(t){return((ne(t)?t.ownerDocument:t.document)||window.document).documentElement}function Ae(t){return I(t)==="html"?t:t.assignedSlot||t.parentNode||(Tt(t)?t.host:null)||Z(t)}function it(t){return!L(t)||V(t).position==="fixed"?null:t.offsetParent}function lr(t){var e=navigator.userAgent.toLowerCase().indexOf("firefox")!==-1,o=navigator.userAgent.indexOf("Trident")!==-1;if(o&&L(t)){var r=V(t);if(r.position==="fixed")return null}for(var n=Ae(t);L(n)&&["html","body"].indexOf(I(n))<0;){var i=V(n);if(i.transform!=="none"||i.perspective!=="none"||i.contain==="paint"||["transform","perspective"].indexOf(i.willChange)!==-1||e&&i.willChange==="filter"||e&&i.filter&&i.filter!=="none")return n;n=n.parentNode}return null}function me(t){for(var e=N(t),o=it(t);o&&sr(o)&&V(o).position==="static";)o=it(o);return o&&(I(o)==="html"||I(o)==="body"&&V(o).position==="static")?e:o||lr(t)||e}function Fe(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function ve(t,e,o){return ee(t,Pe(e,o))}function ur(t,e,o){var r=ve(t,e,o);return r>o?o:r}function Rt(){return{top:0,right:0,bottom:0,left:0}}function Pt(t){return Object.assign({},Rt(),t)}function Et(t,e){return e.reduce(function(o,r){return o[r]=t,o},{})}var cr=function(e,o){return e=typeof e=="function"?e(Object.assign({},o.rects,{placement:o.placement})):e,Pt(typeof e!="number"?e:Et(e,Ne))};function pr(t){var e,o=t.state,r=t.name,n=t.options,i=o.elements.arrow,s=o.modifiersData.popperOffsets,a=F(o.placement),l=Fe(a),c=[D,$].indexOf(a)>=0,u=c?"height":"width";if(!(!i||!s)){var d=cr(n.padding,o),m=Ue(i),p=l==="y"?M:D,v=l==="y"?W:$,h=o.rects.reference[u]+o.rects.reference[l]-s[l]-o.rects.popper[u],g=s[l]-o.rects.reference[l],O=me(i),C=O?l==="y"?O.clientHeight||0:O.clientWidth||0:0,y=h/2-g/2,f=d[p],w=C-m[u]-d[v],b=C/2-m[u]/2+y,x=ve(f,b,w),R=l;o.modifiersData[r]=(e={},e[R]=x,e.centerOffset=x-b,e)}}function fr(t){var e=t.state,o=t.options,r=o.element,n=r===void 0?"[data-popper-arrow]":r;n!=null&&(typeof n=="string"&&(n=e.elements.popper.querySelector(n),!n)||!Ct(e.elements.popper,n)||(e.elements.arrow=n))}var dr={name:"arrow",enabled:!0,phase:"main",fn:pr,effect:fr,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function se(t){return t.split("-")[1]}var vr={top:"auto",right:"auto",bottom:"auto",left:"auto"};function hr(t){var e=t.x,o=t.y,r=window,n=r.devicePixelRatio||1;return{x:ie(e*n)/n||0,y:ie(o*n)/n||0}}function at(t){var e,o=t.popper,r=t.popperRect,n=t.placement,i=t.variation,s=t.offsets,a=t.position,l=t.gpuAcceleration,c=t.adaptive,u=t.roundOffsets,d=t.isFixed,m=s.x,p=m===void 0?0:m,v=s.y,h=v===void 0?0:v,g=typeof u=="function"?u({x:p,y:h}):{x:p,y:h};p=g.x,h=g.y;var O=s.hasOwnProperty("x"),C=s.hasOwnProperty("y"),y=D,f=M,w=window;if(c){var b=me(o),x="clientHeight",R="clientWidth";if(b===N(o)&&(b=Z(o),V(b).position!=="static"&&a==="absolute"&&(x="scrollHeight",R="scrollWidth")),b=b,n===M||(n===D||n===$)&&i===He){f=W;var S=d&&w.visualViewport?w.visualViewport.height:b[x];h-=S-r.height,h*=l?1:-1}if(n===D||(n===M||n===W)&&i===He){y=$;var E=d&&w.visualViewport?w.visualViewport.width:b[R];p-=E-r.width,p*=l?1:-1}}var P=Object.assign({position:a},c&&vr),j=u===!0?hr({x:p,y:h}):{x:p,y:h};if(p=j.x,h=j.y,l){var A;return Object.assign({},P,(A={},A[f]=C?"0":"",A[y]=O?"0":"",A.transform=(w.devicePixelRatio||1)<=1?"translate("+p+"px, "+h+"px)":"translate3d("+p+"px, "+h+"px, 0)",A))}return Object.assign({},P,(e={},e[f]=C?h+"px":"",e[y]=O?p+"px":"",e.transform="",e))}function gr(t){var e=t.state,o=t.options,r=o.gpuAcceleration,n=r===void 0?!0:r,i=o.adaptive,s=i===void 0?!0:i,a=o.roundOffsets,l=a===void 0?!0:a,c={placement:F(e.placement),variation:se(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:n,isFixed:e.options.strategy==="fixed"};e.modifiersData.popperOffsets!=null&&(e.styles.popper=Object.assign({},e.styles.popper,at(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:l})))),e.modifiersData.arrow!=null&&(e.styles.arrow=Object.assign({},e.styles.arrow,at(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})}var mr={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:gr,data:{}},xe={passive:!0};function yr(t){var e=t.state,o=t.instance,r=t.options,n=r.scroll,i=n===void 0?!0:n,s=r.resize,a=s===void 0?!0:s,l=N(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return i&&c.forEach(function(u){u.addEventListener("scroll",o.update,xe)}),a&&l.addEventListener("resize",o.update,xe),function(){i&&c.forEach(function(u){u.removeEventListener("scroll",o.update,xe)}),a&&l.removeEventListener("resize",o.update,xe)}}var wr={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:yr,data:{}},br={left:"right",right:"left",bottom:"top",top:"bottom"};function Te(t){return t.replace(/left|right|bottom|top/g,function(e){return br[e]})}var Or={start:"end",end:"start"};function st(t){return t.replace(/start|end/g,function(e){return Or[e]})}function Ie(t){var e=N(t),o=e.pageXOffset,r=e.pageYOffset;return{scrollLeft:o,scrollTop:r}}function Ve(t){return ae(Z(t)).left+Ie(t).scrollLeft}function xr(t){var e=N(t),o=Z(t),r=e.visualViewport,n=o.clientWidth,i=o.clientHeight,s=0,a=0;return r&&(n=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:n,height:i,x:s+Ve(t),y:a}}function Tr(t){var e,o=Z(t),r=Ie(t),n=(e=t.ownerDocument)==null?void 0:e.body,i=ee(o.scrollWidth,o.clientWidth,n?n.scrollWidth:0,n?n.clientWidth:0),s=ee(o.scrollHeight,o.clientHeight,n?n.scrollHeight:0,n?n.clientHeight:0),a=-r.scrollLeft+Ve(t),l=-r.scrollTop;return V(n||o).direction==="rtl"&&(a+=ee(o.clientWidth,n?n.clientWidth:0)-i),{width:i,height:s,x:a,y:l}}function Xe(t){var e=V(t),o=e.overflow,r=e.overflowX,n=e.overflowY;return/auto|scroll|overlay|hidden/.test(o+n+r)}function St(t){return["html","body","#document"].indexOf(I(t))>=0?t.ownerDocument.body:L(t)&&Xe(t)?t:St(Ae(t))}function he(t,e){var o;e===void 0&&(e=[]);var r=St(t),n=r===((o=t.ownerDocument)==null?void 0:o.body),i=N(r),s=n?[i].concat(i.visualViewport||[],Xe(r)?r:[]):r,a=e.concat(s);return n?a:a.concat(he(Ae(s)))}function We(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Cr(t){var e=ae(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}function lt(t,e){return e===wt?We(xr(t)):ne(e)?Cr(e):We(Tr(Z(t)))}function Rr(t){var e=he(Ae(t)),o=["absolute","fixed"].indexOf(V(t).position)>=0,r=o&&L(t)?me(t):t;return ne(r)?e.filter(function(n){return ne(n)&&Ct(n,r)&&I(n)!=="body"}):[]}function Pr(t,e,o){var r=e==="clippingParents"?Rr(t):[].concat(e),n=[].concat(r,[o]),i=n[0],s=n.reduce(function(a,l){var c=lt(t,l);return a.top=ee(c.top,a.top),a.right=Pe(c.right,a.right),a.bottom=Pe(c.bottom,a.bottom),a.left=ee(c.left,a.left),a},lt(t,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function At(t){var e=t.reference,o=t.element,r=t.placement,n=r?F(r):null,i=r?se(r):null,s=e.x+e.width/2-o.width/2,a=e.y+e.height/2-o.height/2,l;switch(n){case M:l={x:s,y:e.y-o.height};break;case W:l={x:s,y:e.y+e.height};break;case $:l={x:e.x+e.width,y:a};break;case D:l={x:e.x-o.width,y:a};break;default:l={x:e.x,y:e.y}}var c=n?Fe(n):null;if(c!=null){var u=c==="y"?"height":"width";switch(i){case Re:l[c]=l[c]-(e[u]/2-o[u]/2);break;case He:l[c]=l[c]+(e[u]/2-o[u]/2);break}}return l}function ge(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=r===void 0?t.placement:r,i=o.boundary,s=i===void 0?Jt:i,a=o.rootBoundary,l=a===void 0?wt:a,c=o.elementContext,u=c===void 0?pe:c,d=o.altBoundary,m=d===void 0?!1:d,p=o.padding,v=p===void 0?0:p,h=Pt(typeof v!="number"?v:Et(v,Ne)),g=u===pe?Kt:pe,O=t.rects.popper,C=t.elements[m?g:u],y=Pr(ne(C)?C:C.contextElement||Z(t.elements.popper),s,l),f=ae(t.elements.reference),w=At({reference:f,element:O,strategy:"absolute",placement:n}),b=We(Object.assign({},O,w)),x=u===pe?b:f,R={top:y.top-x.top+h.top,bottom:x.bottom-y.bottom+h.bottom,left:y.left-x.left+h.left,right:x.right-y.right+h.right},S=t.modifiersData.offset;if(u===pe&&S){var E=S[n];Object.keys(R).forEach(function(P){var j=[$,W].indexOf(P)>=0?1:-1,A=[M,W].indexOf(P)>=0?"y":"x";R[P]+=E[A]*j})}return R}function Er(t,e){e===void 0&&(e={});var o=e,r=o.placement,n=o.boundary,i=o.rootBoundary,s=o.padding,a=o.flipVariations,l=o.allowedAutoPlacements,c=l===void 0?bt:l,u=se(r),d=u?a?nt:nt.filter(function(v){return se(v)===u}):Ne,m=d.filter(function(v){return c.indexOf(v)>=0});m.length===0&&(m=d);var p=m.reduce(function(v,h){return v[h]=ge(t,{placement:h,boundary:n,rootBoundary:i,padding:s})[F(h)],v},{});return Object.keys(p).sort(function(v,h){return p[v]-p[h]})}function Sr(t){if(F(t)===Ot)return[];var e=Te(t);return[st(t),e,st(e)]}function Ar(t){var e=t.state,o=t.options,r=t.name;if(!e.modifiersData[r]._skip){for(var n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!0:s,l=o.fallbackPlacements,c=o.padding,u=o.boundary,d=o.rootBoundary,m=o.altBoundary,p=o.flipVariations,v=p===void 0?!0:p,h=o.allowedAutoPlacements,g=e.options.placement,O=F(g),C=O===g,y=l||(C||!v?[Te(g)]:Sr(g)),f=[g].concat(y).reduce(function(re,z){return re.concat(F(z)===Ot?Er(e,{placement:z,boundary:u,rootBoundary:d,padding:c,flipVariations:v,allowedAutoPlacements:h}):z)},[]),w=e.rects.reference,b=e.rects.popper,x=new Map,R=!0,S=f[0],E=0;E<f.length;E++){var P=f[E],j=F(P),A=se(P)===Re,X=[M,W].indexOf(j)>=0,Y=X?"width":"height",k=ge(e,{placement:P,boundary:u,rootBoundary:d,altBoundary:m,padding:c}),B=X?A?$:D:A?W:M;w[Y]>b[Y]&&(B=Te(B));var te=Te(B),J=[];if(i&&J.push(k[j]<=0),a&&J.push(k[B]<=0,k[te]<=0),J.every(function(re){return re})){S=P,R=!1;break}x.set(P,J)}if(R)for(var ye=v?3:1,ke=function(z){var ue=f.find(function(be){var K=x.get(be);if(K)return K.slice(0,z).every(function(je){return je})});if(ue)return S=ue,"break"},le=ye;le>0;le--){var we=ke(le);if(we==="break")break}e.placement!==S&&(e.modifiersData[r]._skip=!0,e.placement=S,e.reset=!0)}}var kr={name:"flip",enabled:!0,phase:"main",fn:Ar,requiresIfExists:["offset"],data:{_skip:!1}};function ut(t,e,o){return o===void 0&&(o={x:0,y:0}),{top:t.top-e.height-o.y,right:t.right-e.width+o.x,bottom:t.bottom-e.height+o.y,left:t.left-e.width-o.x}}function ct(t){return[M,$,W,D].some(function(e){return t[e]>=0})}function jr(t){var e=t.state,o=t.name,r=e.rects.reference,n=e.rects.popper,i=e.modifiersData.preventOverflow,s=ge(e,{elementContext:"reference"}),a=ge(e,{altBoundary:!0}),l=ut(s,r),c=ut(a,n,i),u=ct(l),d=ct(c);e.modifiersData[o]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:u,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":u,"data-popper-escaped":d})}var Br={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:jr};function Mr(t,e,o){var r=F(t),n=[D,M].indexOf(r)>=0?-1:1,i=typeof o=="function"?o(Object.assign({},e,{placement:t})):o,s=i[0],a=i[1];return s=s||0,a=(a||0)*n,[D,$].indexOf(r)>=0?{x:a,y:s}:{x:s,y:a}}function Dr(t){var e=t.state,o=t.options,r=t.name,n=o.offset,i=n===void 0?[0,0]:n,s=bt.reduce(function(u,d){return u[d]=Mr(d,e.rects,i),u},{}),a=s[e.placement],l=a.x,c=a.y;e.modifiersData.popperOffsets!=null&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[r]=s}var Hr={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Dr};function Lr(t){var e=t.state,o=t.name;e.modifiersData[o]=At({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})}var Wr={name:"popperOffsets",enabled:!0,phase:"read",fn:Lr,data:{}};function $r(t){return t==="x"?"y":"x"}function Nr(t){var e=t.state,o=t.options,r=t.name,n=o.mainAxis,i=n===void 0?!0:n,s=o.altAxis,a=s===void 0?!1:s,l=o.boundary,c=o.rootBoundary,u=o.altBoundary,d=o.padding,m=o.tether,p=m===void 0?!0:m,v=o.tetherOffset,h=v===void 0?0:v,g=ge(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:u}),O=F(e.placement),C=se(e.placement),y=!C,f=Fe(O),w=$r(f),b=e.modifiersData.popperOffsets,x=e.rects.reference,R=e.rects.popper,S=typeof h=="function"?h(Object.assign({},e.rects,{placement:e.placement})):h,E=typeof S=="number"?{mainAxis:S,altAxis:S}:Object.assign({mainAxis:0,altAxis:0},S),P=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,j={x:0,y:0};if(!!b){if(i){var A,X=f==="y"?M:D,Y=f==="y"?W:$,k=f==="y"?"height":"width",B=b[f],te=B+g[X],J=B-g[Y],ye=p?-R[k]/2:0,ke=C===Re?x[k]:R[k],le=C===Re?-R[k]:-x[k],we=e.elements.arrow,re=p&&we?Ue(we):{width:0,height:0},z=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:Rt(),ue=z[X],be=z[Y],K=ve(0,x[k],re[k]),je=y?x[k]/2-ye-K-ue-E.mainAxis:ke-K-ue-E.mainAxis,Nt=y?-x[k]/2+ye+K+be+E.mainAxis:le+K+be+E.mainAxis,Be=e.elements.arrow&&me(e.elements.arrow),Ut=Be?f==="y"?Be.clientTop||0:Be.clientLeft||0:0,qe=(A=P==null?void 0:P[f])!=null?A:0,Ft=B+je-qe-Ut,It=B+Nt-qe,Ge=ve(p?Pe(te,Ft):te,B,p?ee(J,It):J);b[f]=Ge,j[f]=Ge-B}if(a){var Ze,Vt=f==="x"?M:D,Xt=f==="x"?W:$,Q=b[w],Oe=w==="y"?"height":"width",Je=Q+g[Vt],Ke=Q-g[Xt],Me=[M,D].indexOf(O)!==-1,Qe=(Ze=P==null?void 0:P[w])!=null?Ze:0,_e=Me?Je:Q-x[Oe]-R[Oe]-Qe+E.altAxis,et=Me?Q+x[Oe]+R[Oe]-Qe-E.altAxis:Ke,tt=p&&Me?ur(_e,Q,et):ve(p?_e:Je,Q,p?et:Ke);b[w]=tt,j[w]=tt-Q}e.modifiersData[r]=j}}var Ur={name:"preventOverflow",enabled:!0,phase:"main",fn:Nr,requiresIfExists:["offset"]};function Fr(t){return{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}}function Ir(t){return t===N(t)||!L(t)?Ie(t):Fr(t)}function Vr(t){var e=t.getBoundingClientRect(),o=ie(e.width)/t.offsetWidth||1,r=ie(e.height)/t.offsetHeight||1;return o!==1||r!==1}function Xr(t,e,o){o===void 0&&(o=!1);var r=L(e),n=L(e)&&Vr(e),i=Z(e),s=ae(t,n),a={scrollLeft:0,scrollTop:0},l={x:0,y:0};return(r||!r&&!o)&&((I(e)!=="body"||Xe(i))&&(a=Ir(e)),L(e)?(l=ae(e,!0),l.x+=e.clientLeft,l.y+=e.clientTop):i&&(l.x=Ve(i))),{x:s.left+a.scrollLeft-l.x,y:s.top+a.scrollTop-l.y,width:s.width,height:s.height}}function Yr(t){var e=new Map,o=new Set,r=[];t.forEach(function(i){e.set(i.name,i)});function n(i){o.add(i.name);var s=[].concat(i.requires||[],i.requiresIfExists||[]);s.forEach(function(a){if(!o.has(a)){var l=e.get(a);l&&n(l)}}),r.push(i)}return t.forEach(function(i){o.has(i.name)||n(i)}),r}function zr(t){var e=Yr(t);return Qt.reduce(function(o,r){return o.concat(e.filter(function(n){return n.phase===r}))},[])}function qr(t){var e;return function(){return e||(e=new Promise(function(o){Promise.resolve().then(function(){e=void 0,o(t())})})),e}}function Gr(t){var e=t.reduce(function(o,r){var n=o[r.name];return o[r.name]=n?Object.assign({},n,r,{options:Object.assign({},n.options,r.options),data:Object.assign({},n.data,r.data)}):r,o},{});return Object.keys(e).map(function(o){return e[o]})}var pt={placement:"bottom",modifiers:[],strategy:"absolute"};function ft(){for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return!e.some(function(r){return!(r&&typeof r.getBoundingClientRect=="function")})}function Zr(t){t===void 0&&(t={});var e=t,o=e.defaultModifiers,r=o===void 0?[]:o,n=e.defaultOptions,i=n===void 0?pt:n;return function(a,l,c){c===void 0&&(c=i);var u={placement:"bottom",orderedModifiers:[],options:Object.assign({},pt,i),modifiersData:{},elements:{reference:a,popper:l},attributes:{},styles:{}},d=[],m=!1,p={state:u,setOptions:function(O){var C=typeof O=="function"?O(u.options):O;h(),u.options=Object.assign({},i,u.options,C),u.scrollParents={reference:ne(a)?he(a):a.contextElement?he(a.contextElement):[],popper:he(l)};var y=zr(Gr([].concat(r,u.options.modifiers)));return u.orderedModifiers=y.filter(function(f){return f.enabled}),v(),p.update()},forceUpdate:function(){if(!m){var O=u.elements,C=O.reference,y=O.popper;if(!!ft(C,y)){u.rects={reference:Xr(C,me(y),u.options.strategy==="fixed"),popper:Ue(y)},u.reset=!1,u.placement=u.options.placement,u.orderedModifiers.forEach(function(E){return u.modifiersData[E.name]=Object.assign({},E.data)});for(var f=0;f<u.orderedModifiers.length;f++){if(u.reset===!0){u.reset=!1,f=-1;continue}var w=u.orderedModifiers[f],b=w.fn,x=w.options,R=x===void 0?{}:x,S=w.name;typeof b=="function"&&(u=b({state:u,options:R,name:S,instance:p})||u)}}}},update:qr(function(){return new Promise(function(g){p.forceUpdate(),g(u)})}),destroy:function(){h(),m=!0}};if(!ft(a,l))return p;p.setOptions(c).then(function(g){!m&&c.onFirstUpdate&&c.onFirstUpdate(g)});function v(){u.orderedModifiers.forEach(function(g){var O=g.name,C=g.options,y=C===void 0?{}:C,f=g.effect;if(typeof f=="function"){var w=f({state:u,name:O,instance:p,options:y}),b=function(){};d.push(w||b)}})}function h(){d.forEach(function(g){return g()}),d=[]}return p}}var Jr=[wr,Wr,mr,ar,Hr,kr,Ur,dr,Br],Kr=Zr({defaultModifiers:Jr}),kt=T.exports.createContext(),jt=T.exports.createContext();function Qr(t){var e=t.children,o=T.exports.useState(null),r=o[0],n=o[1],i=T.exports.useRef(!1);T.exports.useEffect(function(){return function(){i.current=!0}},[]);var s=T.exports.useCallback(function(a){i.current||n(a)},[]);return T.exports.createElement(kt.Provider,{value:r},T.exports.createElement(jt.Provider,{value:s},e))}var Bt=function(e){return Array.isArray(e)?e[0]:e},Mt=function(e){if(typeof e=="function"){for(var o=arguments.length,r=new Array(o>1?o-1:0),n=1;n<o;n++)r[n-1]=arguments[n];return e.apply(void 0,r)}},$e=function(e,o){if(typeof e=="function")return Mt(e,o);e!=null&&(e.current=o)},dt=function(e){return e.reduce(function(o,r){var n=r[0],i=r[1];return o[n]=i,o},{})},vt=typeof window!="undefined"&&window.document&&window.document.createElement?T.exports.useLayoutEffect:T.exports.useEffect,_r=typeof Element!="undefined",eo=typeof Map=="function",to=typeof Set=="function",ro=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Ce(t,e){if(t===e)return!0;if(t&&e&&typeof t=="object"&&typeof e=="object"){if(t.constructor!==e.constructor)return!1;var o,r,n;if(Array.isArray(t)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(!Ce(t[r],e[r]))return!1;return!0}var i;if(eo&&t instanceof Map&&e instanceof Map){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;for(i=t.entries();!(r=i.next()).done;)if(!Ce(r.value[1],e.get(r.value[0])))return!1;return!0}if(to&&t instanceof Set&&e instanceof Set){if(t.size!==e.size)return!1;for(i=t.entries();!(r=i.next()).done;)if(!e.has(r.value[0]))return!1;return!0}if(ro&&ArrayBuffer.isView(t)&&ArrayBuffer.isView(e)){if(o=t.length,o!=e.length)return!1;for(r=o;r--!==0;)if(t[r]!==e[r])return!1;return!0}if(t.constructor===RegExp)return t.source===e.source&&t.flags===e.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===e.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===e.toString();if(n=Object.keys(t),o=n.length,o!==Object.keys(e).length)return!1;for(r=o;r--!==0;)if(!Object.prototype.hasOwnProperty.call(e,n[r]))return!1;if(_r&&t instanceof Element)return!1;for(r=o;r--!==0;)if(!((n[r]==="_owner"||n[r]==="__v"||n[r]==="__o")&&t.$$typeof)&&!Ce(t[n[r]],e[n[r]]))return!1;return!0}return t!==t&&e!==e}var oo=function(e,o){try{return Ce(e,o)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}},no=[],io=function(e,o,r){r===void 0&&(r={});var n=T.exports.useRef(null),i={onFirstUpdate:r.onFirstUpdate,placement:r.placement||"bottom",strategy:r.strategy||"absolute",modifiers:r.modifiers||no},s=T.exports.useState({styles:{popper:{position:i.strategy,left:"0",top:"0"},arrow:{position:"absolute"}},attributes:{}}),a=s[0],l=s[1],c=T.exports.useMemo(function(){return{name:"updateState",enabled:!0,phase:"write",fn:function(p){var v=p.state,h=Object.keys(v.elements);l({styles:dt(h.map(function(g){return[g,v.styles[g]||{}]})),attributes:dt(h.map(function(g){return[g,v.attributes[g]]}))})},requires:["computeStyles"]}},[]),u=T.exports.useMemo(function(){var m={onFirstUpdate:i.onFirstUpdate,placement:i.placement,strategy:i.strategy,modifiers:[].concat(i.modifiers,[c,{name:"applyStyles",enabled:!1}])};return oo(n.current,m)?n.current||m:(n.current=m,m)},[i.onFirstUpdate,i.placement,i.strategy,i.modifiers,c]),d=T.exports.useRef();return vt(function(){d.current&&d.current.setOptions(u)},[u]),vt(function(){if(!(e==null||o==null)){var m=r.createPopper||Kr,p=m(e,o,u);return d.current=p,function(){p.destroy(),d.current=null}}},[e,o,r.createPopper]),{state:d.current?d.current.state:null,styles:a.styles,attributes:a.attributes,update:d.current?d.current.update:null,forceUpdate:d.current?d.current.forceUpdate:null}},ao=function(){},so=function(){return Promise.resolve(null)},lo=[];function uo(t){var e=t.placement,o=e===void 0?"bottom":e,r=t.strategy,n=r===void 0?"absolute":r,i=t.modifiers,s=i===void 0?lo:i,a=t.referenceElement,l=t.onFirstUpdate,c=t.innerRef,u=t.children,d=T.exports.useContext(kt),m=T.exports.useState(null),p=m[0],v=m[1],h=T.exports.useState(null),g=h[0],O=h[1];T.exports.useEffect(function(){$e(c,p)},[c,p]);var C=T.exports.useMemo(function(){return{placement:o,strategy:n,onFirstUpdate:l,modifiers:[].concat(s,[{name:"arrow",enabled:g!=null,options:{element:g}}])}},[o,n,l,s,g]),y=io(a||d,p,C),f=y.state,w=y.styles,b=y.forceUpdate,x=y.update,R=T.exports.useMemo(function(){return{ref:v,style:w.popper,placement:f?f.placement:o,hasPopperEscaped:f&&f.modifiersData.hide?f.modifiersData.hide.hasPopperEscaped:null,isReferenceHidden:f&&f.modifiersData.hide?f.modifiersData.hide.isReferenceHidden:null,arrowProps:{style:w.arrow,ref:O},forceUpdate:b||ao,update:x||so}},[v,O,o,f,w,x,b]);return Bt(u)(R)}function co(t){var e=t.children,o=t.innerRef,r=T.exports.useContext(jt),n=T.exports.useCallback(function(i){$e(o,i),Mt(r,i)},[o,r]);return T.exports.useEffect(function(){return function(){return $e(o,null)}}),T.exports.useEffect(function(){},[r]),Bt(e)({ref:n})}var Dt=Le.createContext({}),U=function(){for(var e=arguments.length,o=new Array(e),r=0;r<e;r++)o[r]=arguments[r];return function(){for(var n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return o.forEach(function(a){return a&&a.apply(void 0,i)})}},po=function(){},ht=function(){return!!(typeof window!="undefined"&&window.document&&window.document.createElement)},fo=function(e,o){if(typeof e=="function")return e(o);e!=null&&(e.current=o)},Ht=function(t){xt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.observer=void 0,r.tooltipRef=void 0,r.handleOutsideClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideClickHandler,c=r.props,u=c.hideTooltip,d=c.clearScheduled;d(),u(),l&&l(a)}},r.handleOutsideRightClick=function(a){if(r.tooltipRef&&!r.tooltipRef.contains(a.target)){var l=r.context.parentOutsideRightClickHandler,c=r.props,u=c.hideTooltip,d=c.clearScheduled;d(),u(),l&&l(a)}},r.addOutsideClickHandler=function(){document.body.addEventListener("touchend",r.handleOutsideClick),document.body.addEventListener("click",r.handleOutsideClick)},r.removeOutsideClickHandler=function(){document.body.removeEventListener("touchend",r.handleOutsideClick),document.body.removeEventListener("click",r.handleOutsideClick)},r.addOutsideRightClickHandler=function(){return document.body.addEventListener("contextmenu",r.handleOutsideRightClick)},r.removeOutsideRightClickHandler=function(){return document.body.removeEventListener("contextmenu",r.handleOutsideRightClick)},r.getTooltipRef=function(a){r.tooltipRef=a,fo(r.props.innerRef,a)},r.getArrowProps=function(a){return a===void 0&&(a={}),_({},a,{style:_({},a.style,r.props.arrowProps.style)})},r.getTooltipProps=function(a){return a===void 0&&(a={}),_({},a,r.isTriggeredBy("hover")&&{onMouseEnter:U(r.props.clearScheduled,a.onMouseEnter),onMouseLeave:U(r.props.hideTooltip,a.onMouseLeave)},{style:_({},a.style,r.props.style)})},r.contextValue={isParentNoneTriggered:r.props.trigger==="none",addParentOutsideClickHandler:r.addOutsideClickHandler,addParentOutsideRightClickHandler:r.addOutsideRightClickHandler,parentOutsideClickHandler:r.handleOutsideClick,parentOutsideRightClickHandler:r.handleOutsideRightClick,removeParentOutsideClickHandler:r.removeOutsideClickHandler,removeParentOutsideRightClickHandler:r.removeOutsideRightClickHandler},r}var o=e.prototype;return o.componentDidMount=function(){var n=this,i=this.observer=new MutationObserver(function(){n.props.update()});if(i.observe(this.tooltipRef,this.props.mutationObserverOptions),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var s=this.context,a=s.removeParentOutsideClickHandler,l=s.removeParentOutsideRightClickHandler;this.addOutsideClickHandler(),this.addOutsideRightClickHandler(),a&&a(),l&&l()}},o.componentDidUpdate=function(){this.props.closeOnReferenceHidden&&this.props.isReferenceHidden&&this.props.hideTooltip()},o.componentWillUnmount=function(){if(this.observer&&this.observer.disconnect(),this.isTriggeredBy("hover")||this.isTriggeredBy("click")||this.isTriggeredBy("right-click")){var n=this.context,i=n.isParentNoneTriggered,s=n.addParentOutsideClickHandler,a=n.addParentOutsideRightClickHandler;this.removeOutsideClickHandler(),this.removeOutsideRightClickHandler(),this.handleOutsideClick=void 0,this.handleOutsideRightClick=void 0,!i&&s&&s(),!i&&a&&a()}},o.render=function(){var n=this.props,i=n.arrowProps,s=n.placement,a=n.tooltip;return G(Dt.Provider,{value:this.contextValue,children:a({arrowRef:i.ref,getArrowProps:this.getArrowProps,getTooltipProps:this.getTooltipProps,placement:s,tooltipRef:this.getTooltipRef})})},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(T.exports.Component);Ht.contextType=Dt;var vo={childList:!0,subtree:!0},Lt=function(t){xt(e,t);function e(){for(var r,n=arguments.length,i=new Array(n),s=0;s<n;s++)i[s]=arguments[s];return r=t.call.apply(t,[this].concat(i))||this,r.state={tooltipShown:r.props.defaultTooltipShown},r.hideTimeout=void 0,r.showTimeout=void 0,r.popperOffset=void 0,r.setTooltipState=function(a){var l=function(){return r.props.onVisibilityChange(a.tooltipShown)};r.isControlled()?l():r.setState(a,l)},r.clearScheduled=function(){clearTimeout(r.hideTimeout),clearTimeout(r.showTimeout)},r.showTooltip=function(a){var l=a.pageX,c=a.pageY;r.clearScheduled();var u={tooltipShown:!0};r.props.followCursor&&(u=_({},u,{pageX:l,pageY:c})),r.showTimeout=window.setTimeout(function(){return r.setTooltipState(u)},r.props.delayShow)},r.hideTooltip=function(){r.clearScheduled(),r.hideTimeout=window.setTimeout(function(){return r.setTooltipState({tooltipShown:!1})},r.props.delayHide)},r.toggleTooltip=function(a){var l=a.pageX,c=a.pageY,u=r.getState()?"hideTooltip":"showTooltip";r[u]({pageX:l,pageY:c})},r.clickToggle=function(a){a.preventDefault();var l=a.pageX,c=a.pageY,u=r.props.followCursor?"showTooltip":"toggleTooltip";r[u]({pageX:l,pageY:c})},r.contextMenuToggle=function(a){a.preventDefault();var l=a.pageX,c=a.pageY,u=r.props.followCursor?"showTooltip":"toggleTooltip";r[u]({pageX:l,pageY:c})},r.getTriggerProps=function(a){return a===void 0&&(a={}),_({},a,r.isTriggeredBy("click")&&{onClick:U(r.clickToggle,a.onClick),onTouchEnd:U(r.clickToggle,a.onTouchEnd)},r.isTriggeredBy("right-click")&&{onContextMenu:U(r.contextMenuToggle,a.onContextMenu)},r.isTriggeredBy("hover")&&_({onMouseEnter:U(r.showTooltip,a.onMouseEnter),onMouseLeave:U(r.hideTooltip,a.onMouseLeave)},r.props.followCursor&&{onMouseMove:U(r.showTooltip,a.onMouseMove)}),r.isTriggeredBy("focus")&&{onFocus:U(r.showTooltip,a.onFocus),onBlur:U(r.hideTooltip,a.onBlur)})},r}var o=e.prototype;return o.componentWillUnmount=function(){this.clearScheduled()},o.render=function(){var n=this,i=this.props,s=i.children,a=i.tooltip,l=i.placement,c=i.trigger,u=i.getTriggerRef,d=i.modifiers,m=i.closeOnReferenceHidden,p=i.usePortal,v=i.portalContainer,h=i.followCursor,g=i.getTooltipRef,O=i.mutationObserverOptions,C=_t(i,["children","tooltip","placement","trigger","getTriggerRef","modifiers","closeOnReferenceHidden","usePortal","portalContainer","followCursor","getTooltipRef","mutationObserverOptions"]),y=G(uo,ce(oe({innerRef:g,placement:l,modifiers:[{name:"followCursor",enabled:h,phase:"main",fn:function(w){n.popperOffset=w.state.rects.popper}}].concat(d)},C),{children:function(f){var w=f.ref,b=f.style,x=f.placement,R=f.arrowProps,S=f.isReferenceHidden,E=f.update;if(h&&n.popperOffset){var P=n.state,j=P.pageX,A=P.pageY,X=n.popperOffset,Y=X.width,k=X.height,B=j+Y>window.pageXOffset+document.body.offsetWidth?j-Y:j,te=A+k>window.pageYOffset+document.body.offsetHeight?A-k:A;b.transform="translate3d("+B+"px, "+te+"px, 0"}return G(Ht,{arrowProps:R,closeOnReferenceHidden:m,isReferenceHidden:S,placement:x,update:E,style:b,tooltip:a,trigger:c,mutationObserverOptions:O,clearScheduled:n.clearScheduled,hideTooltip:n.hideTooltip,innerRef:w})}}));return er(Qr,{children:[G(co,{innerRef:u,children:function(f){var w=f.ref;return s({getTriggerProps:n.getTriggerProps,triggerRef:w})}}),this.getState()&&(p?tr.exports.createPortal(y,v):y)]})},o.isControlled=function(){return this.props.tooltipShown!==void 0},o.getState=function(){return this.isControlled()?this.props.tooltipShown:this.state.tooltipShown},o.isTriggeredBy=function(n){var i=this.props.trigger;return i===n||Array.isArray(i)&&i.includes(n)},e}(T.exports.Component);Lt.defaultProps={closeOnReferenceHidden:!0,defaultTooltipShown:!1,delayHide:0,delayShow:0,followCursor:!1,onVisibilityChange:po,placement:"right",portalContainer:ht()?document.body:null,trigger:"hover",usePortal:ht(),mutationObserverOptions:vo,modifiers:[]};var ho=Lt;function Ee(){return Ee=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},Ee.apply(this,arguments)}function go(t,e){if(t==null)return{};var o=mo(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function mo(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}var H=rr(1e3)(function(t,e,o){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0;return e.split("-")[0]===t?o:r}),q=8,yo=Se.div({position:"absolute",borderStyle:"solid"},function(t){var e=t.placement,o=0,r=0;switch(!0){case(e.startsWith("left")||e.startsWith("right")):{r=8;break}case(e.startsWith("top")||e.startsWith("bottom")):{o=8;break}}var n="translate3d(".concat(o,"px, ").concat(r,"px, 0px)");return{transform:n}},function(t){var e=t.theme,o=t.color,r=t.placement;return{bottom:"".concat(H("top",r,q*-1,"auto"),"px"),top:"".concat(H("bottom",r,q*-1,"auto"),"px"),right:"".concat(H("left",r,q*-1,"auto"),"px"),left:"".concat(H("right",r,q*-1,"auto"),"px"),borderBottomWidth:"".concat(H("top",r,"0",q),"px"),borderTopWidth:"".concat(H("bottom",r,"0",q),"px"),borderRightWidth:"".concat(H("left",r,"0",q),"px"),borderLeftWidth:"".concat(H("right",r,"0",q),"px"),borderTopColor:H("top",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderBottomColor:H("bottom",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderLeftColor:H("left",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent"),borderRightColor:H("right",r,e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),"transparent")}}),wo=Se.div(function(t){var e=t.hidden;return{display:e?"none":"inline-block",zIndex:2147483647}},function(t){var e=t.theme,o=t.color,r=t.hasChrome;return r?{background:e.color[o]||o||e.base==="light"?fe(e.background.app):de(e.background.app),filter:`
            drop-shadow(0px 5px 5px rgba(0,0,0,0.05))
            drop-shadow(0 1px 3px rgba(0,0,0,0.1))
          `,borderRadius:e.appBorderRadius*2,fontSize:e.typography.size.s1}:{}}),Ye=function(e){var o=e.placement,r=e.hasChrome,n=e.children,i=e.arrowProps,s=e.tooltipRef,a=e.arrowRef,l=e.color,c=go(e,["placement","hasChrome","children","arrowProps","tooltipRef","arrowRef","color"]);return Le.createElement(wo,Ee({hasChrome:r,placement:o,ref:s},c,{color:l}),r&&Le.createElement(yo,Ee({placement:o,ref:a},i,{color:l})),n)};Ye.displayName="Tooltip";Ye.defaultProps={color:void 0,arrowRef:void 0,tooltipRef:void 0,hasChrome:!0,placement:"top",arrowProps:{}};var gt,mt;function bo(t,e){return Co(t)||To(t,e)||xo(t,e)||Oo()}function Oo(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function xo(t,e){if(!!t){if(typeof t=="string")return yt(t,e);var o=Object.prototype.toString.call(t).slice(8,-1);if(o==="Object"&&t.constructor&&(o=t.constructor.name),o==="Map"||o==="Set")return Array.from(t);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return yt(t,e)}}function yt(t,e){(e==null||e>t.length)&&(e=t.length);for(var o=0,r=new Array(e);o<e;o++)r[o]=t[o];return r}function To(t,e){if(!(typeof Symbol=="undefined"||!(Symbol.iterator in Object(t)))){var o=[],r=!0,n=!1,i=void 0;try{for(var s=t[Symbol.iterator](),a;!(r=(a=s.next()).done)&&(o.push(a.value),!(e&&o.length===e));r=!0);}catch(l){n=!0,i=l}finally{try{!r&&s.return!=null&&s.return()}finally{if(n)throw i}}return o}}function Co(t){if(Array.isArray(t))return t}function Wt(t,e){if(t==null)return{};var o=Ro(t,e),r,n;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(o[r]=t[r]))}return o}function Ro(t,e){if(t==null)return{};var o={},r=Object.keys(t),n,i;for(i=0;i<r.length;i++)n=r[i],!(e.indexOf(n)>=0)&&(o[n]=t[n]);return o}function $t(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}var De=or.document,Po=Se.div(gt||(gt=$t([`
  display: inline-block;
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),Eo=Se.g(mt||(mt=$t([`
  cursor: `,`;
`])),function(t){return t.mode==="hover"?"default":"pointer"}),ze=function(e){var o=e.svg,r=e.trigger;e.closeOnClick;var n=e.placement,i=e.modifiers,s=e.hasChrome,a=e.tooltip,l=e.children,c=e.tooltipShown,u=e.onVisibilityChange,d=Wt(e,["svg","trigger","closeOnClick","placement","modifiers","hasChrome","tooltip","children","tooltipShown","onVisibilityChange"]),m=o?Eo:Po;return G(ho,{placement:n,trigger:r,modifiers:i,tooltipShown:c,onVisibilityChange:u,tooltip:function(v){var h=v.getTooltipProps,g=v.getArrowProps,O=v.tooltipRef,C=v.arrowRef,y=v.placement;return G(Ye,ce(oe({hasChrome:s,placement:y,tooltipRef:O,arrowRef:C,arrowProps:g()},h()),{children:typeof a=="function"?a({onHide:function(){return u(!1)}}):a}))},children:function(p){var v=p.getTriggerProps,h=p.triggerRef;return G(m,ce(oe(oe({ref:h},v()),d),{children:l}))}})};ze.displayName="WithTooltipPure";ze.defaultProps={svg:!1,trigger:"hover",closeOnClick:!1,placement:"top",modifiers:[{name:"preventOverflow",options:{padding:8}},{name:"offset",options:{offset:[8,8]}},{name:"arrow",options:{padding:8}}],hasChrome:!0,tooltipShown:!1};var So=function(e){var o=e.startOpen,r=e.onVisibilityChange,n=Wt(e,["startOpen","onVisibilityChange"]),i=T.exports.useState(o||!1),s=bo(i,2),a=s[0],l=s[1],c=T.exports.useCallback(function(u){r&&r(u)===!1||l(u)},[r]);return T.exports.useEffect(function(){var u=function(){return c(!1)};De.addEventListener("keydown",u,!1);var d=Array.from(De.getElementsByTagName("iframe")),m=[];return d.forEach(function(p){var v=function(){try{p.contentWindow.document&&(p.contentWindow.document.addEventListener("click",u),m.push(function(){try{p.contentWindow.document.removeEventListener("click",u)}catch{}}))}catch{}};v(),p.addEventListener("load",v),m.push(function(){p.removeEventListener("load",v)})}),function(){De.removeEventListener("keydown",u),m.forEach(function(p){p()})}}),G(ze,ce(oe({},n),{tooltipShown:a,onVisibilityChange:c}))};So.displayName="WithToolTipState";export{So as WithToolTipState,So as WithTooltip,ze as WithTooltipPure};
//# sourceMappingURL=WithTooltip.0e815e8c.js.map
