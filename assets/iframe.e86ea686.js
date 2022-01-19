var M=Object.defineProperty,C=Object.defineProperties;var x=Object.getOwnPropertyDescriptors;var c=Object.getOwnPropertySymbols;var m=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var g=(r,a,n)=>a in r?M(r,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[a]=n,s=(r,a)=>{for(var n in a||(a={}))m.call(a,n)&&g(r,n,a[n]);if(c)for(var n of c(a))f.call(a,n)&&g(r,n,a[n]);return r},p=(r,a)=>C(r,x(a));var u=(r,a)=>{var n={};for(var t in r)m.call(r,t)&&a.indexOf(t)<0&&(n[t]=r[t]);if(r!=null&&c)for(var t of c(r))a.indexOf(t)<0&&f.call(r,t)&&(n[t]=r[t]);return n};import{c as e,A as S,M as w,j as y,a as h,b as E,d as L,e as O,f as D,l as j,g as A,h as X,i as B,k,m as I,n as P,o as $,p as z,q as R,r as V,s as U}from"./vendor.8dd9c0b6.js";const q=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const d of l.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&t(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerpolicy&&(l.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?l.credentials="include":o.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function t(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}};q();const F={viewMode:"docs",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var G=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:F});const K={},J="wrapper";function b(n){var t=n,{components:r}=t,a=u(t,["components"]);return e(J,p(s(s({},K),a),{components:r,mdxType:"MDXLayout"}),e("h1",null,"react-collapsible-timeline"),e("p",null,"A collapsible timeline component for React written in Typescript."),e("h2",null,"Getting started"),e("p",null,"Add the package with the package manager of choice to your project:"),e("ul",null,e("li",{parentName:"ul"},e("strong",{parentName:"li"},"yarn"),": ",e("inlineCode",{parentName:"li"},"yarn add react-collapsible-timeline")),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"npm"),": ",e("inlineCode",{parentName:"li"},"npm install react-collapsible-timeline")),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"npx"),": ",e("inlineCode",{parentName:"li"},"npx -p react-collapsible-timeline"))),e("h2",null,"Resources"),e("ul",null,e("li",{parentName:"ul"},"Articles",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://vitejs.dev/guide/build.html#library-mode"},e("strong",{parentName:"a"},"Use Vite in Library Mode"))))),e("li",{parentName:"ul"},"Tools",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://vitejs.dev/"},e("strong",{parentName:"a"},"Vite")),": Next Generation Frontend Tooling"),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://vitest.dev/"},e("strong",{parentName:"a"},"Vitest")),": A blazing fast unit-test framework powered by Vite."),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://storybook.js.org/"},e("strong",{parentName:"a"},"Storybook")),": Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.")))))}b.isMDXComponent=!0;const Z={},H="wrapper";function _(n){var t=n,{components:r}=t,a=u(t,["components"]);return e(H,p(s(s({},Z),a),{components:r,mdxType:"MDXLayout"}),e(w,{title:"Start",parameters:{previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),e(b,{mdxType:"Readme"}))}_.isMDXComponent=!0;const N=()=>{throw new Error("Docs-only story")};N.parameters={docsOnly:!0};const i={title:"Start",parameters:{previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},Q={};i.parameters=i.parameters||{};i.parameters.docs=p(s({},i.parameters.docs||{}),{page:()=>e(S,{mdxStoryNameToKey:Q,mdxComponentMeta:i},e(_,null))});var T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:N,default:i});function v(){return y("div",{children:"Collapsible Timeline"})}var W={parameters:{storySource:{source:`import { CollapsibleTimeline } from '../src';

export default {
  title: 'Collapsible Timeline',
  component: CollapsibleTimeline,
};

export function Basic() {
  return <CollapsibleTimeline />;
}
`,locationsMap:{basic:{startLoc:{col:7,line:8},endLoc:{col:1,line:10},startBody:{col:7,line:8},endBody:{col:1,line:10}}}}},title:"Collapsible Timeline",component:v};const Y=function(){return y(v,{})},ee=["Basic"];var te=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:W,Basic:Y,__namedExportsOrder:ee});const re=[X,B,k,I,P,$,z,R,V,U,G];re.forEach(r=>{Object.keys(r).forEach(a=>{const n=r[a];switch(a){case"args":case"argTypes":return j.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(n));case"decorators":return n.forEach(t=>D(t,!1));case"loaders":return n.forEach(t=>O(t,!1));case"parameters":return h(s({},n),!1);case"argTypesEnhancers":return n.forEach(t=>L(t));case"argsEnhancers":return n.forEach(t=>E(t));case"globals":case"globalTypes":{const t={};return t[a]=n,h(t,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(a+" was not supported :( !")}})});A(()=>[T,T,te].filter(r=>r.default),{hot:!1},!1);
//# sourceMappingURL=iframe.e86ea686.js.map
