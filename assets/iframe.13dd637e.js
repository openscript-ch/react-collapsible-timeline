var D=Object.defineProperty,S=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var m=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var T=(t,n,a)=>n in t?D(t,n,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[n]=a,l=(t,n)=>{for(var a in n||(n={}))h.call(n,a)&&T(t,a,n[a]);if(m)for(var a of m(n))b.call(n,a)&&T(t,a,n[a]);return t},p=(t,n)=>S(t,A(n));var f=(t,n)=>{var a={};for(var r in t)h.call(t,r)&&n.indexOf(r)<0&&(a[r]=t[r]);if(t!=null&&m)for(var r of m(t))n.indexOf(r)<0&&b.call(t,r)&&(a[r]=t[r]);return a};import{c as e,A as O,M as k,r as d,j as s,a as L,b as N,d as j,e as B,f as P,g as X,l as V,h as z,i as R,k as I,m as $,n as q,o as G,p as U,q as F,s as K,t as H,u as J}from"./vendor.40705b25.js";const Z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const g of i.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&r(g)}).observe(document,{childList:!0,subtree:!0});function a(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=a(o);fetch(o.href,i)}};Z();const Q={viewMode:"docs",actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}}};var W=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",parameters:Q});const Y={},ee="wrapper";function _(a){var r=a,{components:t}=r,n=f(r,["components"]);return e(ee,p(l(l({},Y),n),{components:t,mdxType:"MDXLayout"}),e("h1",null,"react-collapsible-timeline"),e("p",null,"A collapsible timeline component for React written in Typescript."),e("h2",null,"Getting started"),e("p",null,"Add the package with the package manager via NPMs or GitHubs registry of choice to your project:"),e("ul",null,e("li",{parentName:"ul"},e("strong",{parentName:"li"},"yarn"),": ",e("inlineCode",{parentName:"li"},"yarn add react-collapsible-timeline")),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"npm"),": ",e("inlineCode",{parentName:"li"},"npm install react-collapsible-timeline")),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"pnpm"),": ",e("inlineCode",{parentName:"li"},"pnpm add react-collapsible-timeline")),e("li",{parentName:"ul"},e("strong",{parentName:"li"},"npx"),": ",e("inlineCode",{parentName:"li"},"npx -p react-collapsible-timeline"))),e("h2",null,"Resources"),e("ul",null,e("li",{parentName:"ul"},"Articles",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://vitejs.dev/guide/build.html#library-mode"},e("strong",{parentName:"a"},"Use Vite in Library Mode"))))),e("li",{parentName:"ul"},"Tools",e("ul",{parentName:"li"},e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://vitejs.dev/"},e("strong",{parentName:"a"},"Vite")),": Next Generation Frontend Tooling"),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://vitest.dev/"},e("strong",{parentName:"a"},"Vitest")),": A blazing fast unit-test framework powered by Vite."),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://github.com/qmhc/vite-plugin-dts"},e("strong",{parentName:"a"},"Vite Plugin dts")),": A vite plugin for generating ",e("inlineCode",{parentName:"li"},".d.ts")," files."),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://storybook.js.org/"},e("strong",{parentName:"a"},"Storybook")),": Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation."),e("li",{parentName:"ul"},e("a",{parentName:"li",href:"https://github.com/eirslett/storybook-builder-vite"},e("strong",{parentName:"a"},"Storybook Vite Builder")),": An experimental plugin to run and build Storybooks with Vite.")))))}_.isMDXComponent=!0;const te={},ne="wrapper";function w(a){var r=a,{components:t}=r,n=f(r,["components"]);return e(ne,p(l(l({},te),n),{components:t,mdxType:"MDXLayout"}),e(k,{title:"Start",parameters:{previewTabs:{canvas:{hidden:!0}}},mdxType:"Meta"}),e(_,{mdxType:"Readme"}))}w.isMDXComponent=!0;const v=()=>{throw new Error("Docs-only story")};v.parameters={docsOnly:!0};const c={title:"Start",parameters:{previewTabs:{canvas:{hidden:!0}}},includeStories:["__page"]},re={};c.parameters=c.parameters||{};c.parameters.docs=p(l({},c.parameters.docs||{}),{page:()=>e(O,{mdxStoryNameToKey:re,mdxComponentAnnotations:c},e(w,null))});var E=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__page:v,default:c});const x={entries:[]},ae=(t,n)=>{switch(n.type){case"addEntry":return p(l({},t),{entries:[...t.entries,n.entry]});default:return t}},oe=()=>(t,n)=>ae(t,n);let y;const C=()=>(y||(y=d.exports.createContext([x,()=>{throw new Error("Collapsible timeline context isn't initialized.")}])),y),ie=()=>d.exports.useContext(C());function M({children:t}){const n=C();return s(n.Provider,{value:d.exports.useReducer(oe(),x),children:s("div",{children:t})})}const le={name:"zanegv",styles:"background-color:blue"};function u({timestamp:t,children:n}){const[,a]=ie();return d.exports.useEffect(()=>{a({type:"addEntry",entry:{timestamp:t}})},[t]),s("div",{css:le,children:n})}var se={parameters:{storySource:{source:`import { CollapsibleTimeline, TimelineEntry } from '../src';

export default {
  title: 'Collapsible Timeline',
  component: CollapsibleTimeline,
};

export function Basic() {
  return (
    <CollapsibleTimeline>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24 * 14}>Two weeks ago</TimelineEntry>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24 * 7}>A week ago</TimelineEntry>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24 * 2}>Two days ago</TimelineEntry>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24}>One day ago</TimelineEntry>
    </CollapsibleTimeline>
  );
}
`,locationsMap:{basic:{startLoc:{col:7,line:8},endLoc:{col:1,line:17},startBody:{col:7,line:8},endBody:{col:1,line:17}}}}},title:"Collapsible Timeline",component:M};const ce=function(){return L(M,{children:[s(u,{timestamp:new Date().getTime()-1e3*60*60*24*14,children:"Two weeks ago"}),s(u,{timestamp:new Date().getTime()-1e3*60*60*24*7,children:"A week ago"}),s(u,{timestamp:new Date().getTime()-1e3*60*60*24*2,children:"Two days ago"}),s(u,{timestamp:new Date().getTime()-1e3*60*60*24,children:"One day ago"})]})},pe=["Basic"];var me=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:se,Basic:ce,__namedExportsOrder:pe});const de=[R,I,$,q,G,U,F,K,H,J,W];de.forEach(t=>{Object.keys(t).forEach(n=>{const a=t[n];switch(n){case"args":case"argTypes":return V.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify(a));case"decorators":return a.forEach(r=>X(r,!1));case"loaders":return a.forEach(r=>P(r,!1));case"parameters":return N(l({},a),!1);case"argTypesEnhancers":return a.forEach(r=>B(r));case"argsEnhancers":return a.forEach(r=>j(r));case"globals":case"globalTypes":{const r={};return r[n]=a,N(r,!1)}case"decorateStory":case"renderToDOM":return null;default:return console.log(n+" was not supported :( !")}})});z(()=>[E,E,me].filter(t=>t.default),{hot:!1},!1);
//# sourceMappingURL=iframe.13dd637e.js.map
