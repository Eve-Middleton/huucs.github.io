"use strict";(self.webpackChunkmeoo_space=self.webpackChunkmeoo_space||[]).push([[1080],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,g=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6505:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],c={slug:"vue-toraw",title:"vue\u83b7\u53d6proxy\u5bf9\u8c61\u4e2d\u7684\u539f\u59cb\u5bf9\u8c61",authors:"mcx",tags:["Vue","\u5927\u4e8c"]},u=void 0,l={permalink:"/blog/vue-toraw",editUrl:"https://github.com/Eve-Middleton/Eve-Middleton.github.io/tree/main/blog/2021-04-18-vue\u83b7\u53d6proxy\u5bf9\u8c61\u4e2d\u7684\u539f\u59cb\u5bf9\u8c61.md",source:"@site/blog\\2021-04-18-vue\u83b7\u53d6proxy\u5bf9\u8c61\u4e2d\u7684\u539f\u59cb\u5bf9\u8c61.md",title:"vue\u83b7\u53d6proxy\u5bf9\u8c61\u4e2d\u7684\u539f\u59cb\u5bf9\u8c61",description:"\u5728\u4f7f\u7528vuex\u65f6\uff0c\u7531\u4e8estate\u662f\u54cd\u5e94\u5f0f\u7684\uff0c\u7528\u5b83\u83b7\u53d6\u5bf9\u8c61\u503c\u8f93\u51fa\u4e5f\u662fproxy\u5bf9\u8c61\u3002\u4f8b\u5982\uff1a",date:"2021-04-18T00:00:00.000Z",formattedDate:"2021\u5e744\u670818\u65e5",tags:[{label:"Vue",permalink:"/blog/tags/vue"},{label:"\u5927\u4e8c",permalink:"/blog/tags/\u5927\u4e8c"}],readingTime:.64,hasTruncateMarker:!1,authors:[{name:"Meoo",title:"An unknown student",url:"https://github.com/cxOrz",imageURL:"https://github.com/cxOrz.png",key:"mcx"}],frontMatter:{slug:"vue-toraw",title:"vue\u83b7\u53d6proxy\u5bf9\u8c61\u4e2d\u7684\u539f\u59cb\u5bf9\u8c61",authors:"mcx",tags:["Vue","\u5927\u4e8c"]},prevItem:{title:"React \u4e8b\u4ef6\u7ed1\u5b9a/this\u7ed1\u5b9a\u7684\u51e0\u79cd\u65b9\u5f0f",permalink:"/blog/react-eventbind"},nextItem:{title:"Manjaro \u8bed\u8a00\u6539\u56de\u82f1\u6587",permalink:"/blog/manjaro-language-setting"}},p={authorsImageUrls:[void 0]},s=[],m={toc:s};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u4f7f\u7528vuex\u65f6\uff0c\u7531\u4e8estate\u662f\u54cd\u5e94\u5f0f\u7684\uff0c\u7528\u5b83\u83b7\u53d6\u5bf9\u8c61\u503c\u8f93\u51fa\u4e5f\u662fproxy\u5bf9\u8c61\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20210418165835770.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})),(0,a.kt)("p",null,"\u65e0\u8bba\u662fVuex\u8fd8\u662f\u4f7f\u7528\u7684Composition API \u7684",(0,a.kt)("inlineCode",{parentName:"p"},"reactive()"),"\uff0cvue\u4e2d\u7684\u54cd\u5e94\u5f0f\u5bf9\u8c61\u53ef\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"toRaw()"),"\u65b9\u6cd5\u83b7\u53d6\u539f\u59cb\u5bf9\u8c61\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u5bfc\u5165toRaw\u51fd\u6570\nimport { toRaw } from '@vue/reactivity'\n// \u8be5\u51fd\u6570\u8fd4\u56de\u8f6c\u6362\u540e\u7684\u5bf9\u8c61\nconst crystal = toRaw(store.state.mapping.crystal)\n// \u8f93\u51fa\u53ef\u4ee5\u770b\u5230\u5df2\u7ecf\u4e0d\u662fproxy\u5bf9\u8c61\u4e86\nconsole.log(crystal[0])\n")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img-blog.csdnimg.cn/20210418170606566.png",alt:"\u5728\u8fd9\u91cc\u63d2\u5165\u56fe\u7247\u63cf\u8ff0"})))}f.isMDXComponent=!0}}]);