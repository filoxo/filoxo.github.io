(self.webpackChunkfiloblog=self.webpackChunkfiloblog||[]).push([[851],{3395:function(e,t,r){var n=r(6191),o=r(1309),l=r(4176),c=r(3246),a=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var i=r(7294),f=r(4983).mdx,p=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,l=c(e,a),u=p(t),m=i.useMemo((function(){if(!r)return null;var e=s({React:i,mdx:f},u),t=Object.keys(e),l=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(l)))}),[r,t]);return i.createElement(m,s({},l))}},577:function(e,t,r){"use strict";r.d(t,{b:function(){return l}});var n=r(7294),o=r(2599),l=function(){return n.createElement(o.r,{to:"#"},"Jump to top ↑")}},3934:function(e,t,r){"use strict";r.d(t,{S:function(){return i},G:function(){return f}});var n=r(7294),o=r(3395),l=r.n(o),c=r(2599);function a(e){var t=e.list,r=void 0===t?[]:t;return r.length?n.createElement(n.Fragment,null,n.createElement("h3",{className:"inline-flex"},"Tags: "),n.createElement("ul",{className:"inline-flex m-0 space-x-4"},r.map((function(e,t){return n.createElement("li",{key:e},n.createElement(c.r,{to:"/tags/"+e},e),t!==r.length-1&&", ")})))):null}var u=r(846),s=r(577),i=function(e){var t=e.frontmatter,r=e.body;return n.createElement("article",{className:"mb-12"},n.createElement(u.H1,{className:"mb-4 text-red-600"},t.title),n.createElement("div",{className:"text-red-600 mb-4"},t.date),n.createElement("div",{className:"space-y-6"},n.createElement(l(),null,r),n.createElement("footer",{className:"space-y-12"},n.createElement(a,{list:t.tags}),n.createElement("div",{className:"flex flex-row-reverse justify-between"},n.createElement(c.r,{to:"/"},"← Back to home"),n.createElement(s.b,null)))))},f=function(e){var t=e.fields,r=e.frontmatter,o=e.excerpt;return n.createElement("div",null,n.createElement(u.H1,{className:"mb-4"},n.createElement(c.r,{to:t.slug},r.title)),n.createElement("div",{className:"text-red-600 mb-4"},r.date),n.createElement("p",null,o," ",n.createElement(c.r,{to:t.slug},"Read more")))}},9857:function(e,t,r){"use strict";r.r(t);var n=r(7294),o=r(7246),l=r(3934);t.default=function(e){var t=e.data.mdx;return n.createElement(o.Z,null,n.createElement(l.S,t))}},6322:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},2771:function(e,t,r){var n=r(6322);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6191:function(e,t,r){var n=r(4675),o=r(5460);function l(t,r,c){return o()?(e.exports=l=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=l=function(e,t,r){var o=[null];o.push.apply(o,t);var l=new(Function.bind.apply(e,o));return r&&n(l,r.prototype),l},e.exports.default=e.exports,e.exports.__esModule=!0),l.apply(null,arguments)}e.exports=l,e.exports.default=e.exports,e.exports.__esModule=!0},4176:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},5460:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},1840:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9439:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},1309:function(e,t,r){var n=r(2771),o=r(1840),l=r(4866),c=r(9439);e.exports=function(e){return n(e)||o(e)||l(e)||c()},e.exports.default=e.exports,e.exports.__esModule=!0},4866:function(e,t,r){var n=r(6322);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0}}]);
//# sourceMappingURL=component---src-templates-post-js-b330f9aba8cf19a5a106.js.map