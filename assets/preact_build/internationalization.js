!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="/homepage/",t(t.s=324)}({0:function(e,n,t){"use strict";t.d(n,"c",(function(){return A})),t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return r}));var r,o,u,l,i,c={},a=[],_=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord/i;function s(e,n){for(var t in n)e[t]=n[t];return e}function f(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var r,o=arguments,u={};for(r in n)"key"!==r&&"ref"!==r&&(u[r]=n[r]);if(arguments.length>3)for(t=[t],r=3;r<arguments.length;r++)t.push(o[r]);if(null!=t&&(u.children=t),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===u[r]&&(u[r]=e.defaultProps[r]);return d(e,u,n&&n.key,n&&n.ref)}function d(e,n,t,o){var u={type:e,props:n,key:t,ref:o,__k:null,__:null,__b:0,__e:null,__d:null,__c:null,constructor:void 0};return r.vnode&&r.vnode(u),u}function h(e){return e.children}function v(e,n){this.props=e,this.context=n}function m(e,n){if(null==n)return e.__?m(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?m(e):null}function y(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return y(e)}}function g(e){(!e.__d&&(e.__d=!0)&&1===o.push(e)||l!==r.debounceRendering)&&((l=r.debounceRendering)||u)(b)}function b(){var e,n,t,r,u,l,i;for(o.sort((function(e,n){return n.__v.__b-e.__v.__b}));e=o.pop();)e.__d&&(t=void 0,r=void 0,l=(u=(n=e).__v).__e,(i=n.__P)&&(t=[],r=S(i,u,s({},u),n.__n,void 0!==i.ownerSVGElement,null,t,null==l?m(u):l),P(t,u),r!=l&&y(u)))}function w(e,n,t,r,o,u,l,i,_){var s,p,d,h,v,y,g,b=t&&t.__k||a,w=b.length;if(i==c&&(i=null!=u?u[0]:w?m(t,0):null),s=0,n.__k=k(n.__k,(function(t){if(null!=t){if(t.__=n,t.__b=n.__b+1,null===(d=b[s])||d&&t.key==d.key&&t.type===d.type)b[s]=void 0;else for(p=0;p<w;p++){if((d=b[p])&&t.key==d.key&&t.type===d.type){b[p]=void 0;break}d=null}if(h=S(e,t,d=d||c,r,o,u,l,i,_),(p=t.ref)&&d.ref!=p&&(g||(g=[]),d.ref&&g.push(d.ref,null,t),g.push(p,t.__c||h,t)),null!=h){if(null==y&&(y=h),null!=t.__d)h=t.__d,t.__d=null;else if(u==d||h!=i||null==h.parentNode){e:if(null==i||i.parentNode!==e)e.appendChild(h);else{for(v=i,p=0;(v=v.nextSibling)&&p<w;p+=2)if(v==h)break e;e.insertBefore(h,i)}"option"==n.type&&(e.value="")}i=h.nextSibling,"function"==typeof n.type&&(n.__d=h)}}return s++,t})),n.__e=y,null!=u&&"function"!=typeof n.type)for(s=u.length;s--;)null!=u[s]&&f(u[s]);for(s=w;s--;)null!=b[s]&&T(b[s],b[s]);if(g)for(s=0;s<g.length;s++)E(g[s],g[++s],g[++s])}function k(e,n,t){if(null==t&&(t=[]),null==e||"boolean"==typeof e)n&&t.push(n(null));else if(Array.isArray(e))for(var r=0;r<e.length;r++)k(e[r],n,t);else t.push(n?n("string"==typeof e||"number"==typeof e?d(null,e,null,null):null!=e.__e||null!=e.__c?d(e.type,e.props,e.key,null):e):e);return t}function j(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]="number"==typeof t&&!1===_.test(n)?t+"px":null==t?"":t}function O(e,n,t,r,o){var u,l,i,c,a;if(o?"className"===n&&(n="class"):"class"===n&&(n="className"),"key"===n||"children"===n);else if("style"===n)if(u=e.style,"string"==typeof t)u.cssText=t;else{if("string"==typeof r&&(u.cssText="",r=null),r)for(l in r)t&&l in t||j(u,l,"");if(t)for(i in t)r&&t[i]===r[i]||j(u,i,t[i])}else"o"===n[0]&&"n"===n[1]?(c=n!==(n=n.replace(/Capture$/,"")),a=n.toLowerCase(),n=(a in e?a:n).slice(2),t?(r||e.addEventListener(n,x,c),(e.l||(e.l={}))[n]=t):e.removeEventListener(n,x,c)):"list"!==n&&"tagName"!==n&&"form"!==n&&"type"!==n&&!o&&n in e?e[n]=null==t?"":t:"function"!=typeof t&&"dangerouslySetInnerHTML"!==n&&(n!==(n=n.replace(/^xlink:?/,""))?null==t||!1===t?e.removeAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase()):e.setAttributeNS("http://www.w3.org/1999/xlink",n.toLowerCase(),t):null==t||!1===t?e.removeAttribute(n):e.setAttribute(n,t))}function x(e){this.l[e.type](r.event?r.event(e):e)}function S(e,n,t,o,u,l,i,c,a){var _,f,p,d,m,y,g,b,j,O,x=n.type;if(void 0!==n.constructor)return null;(_=r.__b)&&_(n);try{e:if("function"==typeof x){if(b=n.props,j=(_=x.contextType)&&o[_.__c],O=_?j?j.props.value:_.__:o,t.__c?g=(f=n.__c=t.__c).__=f.__E:("prototype"in x&&x.prototype.render?n.__c=f=new x(b,O):(n.__c=f=new v(b,O),f.constructor=x,f.render=H),j&&j.sub(f),f.props=b,f.state||(f.state={}),f.context=O,f.__n=o,p=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=x.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=s({},f.__s)),s(f.__s,x.getDerivedStateFromProps(b,f.__s))),d=f.props,m=f.state,p)null==x.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==x.getDerivedStateFromProps&&b!==d&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(b,O),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(b,f.__s,O)){for(f.props=b,f.state=f.__s,f.__d=!1,f.__v=n,n.__e=t.__e,n.__k=t.__k,f.__h.length&&i.push(f),_=0;_<n.__k.length;_++)n.__k[_]&&(n.__k[_].__=n);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(b,f.__s,O),null!=f.componentDidUpdate&&f.__h.push((function(){f.componentDidUpdate(d,m,y)}))}f.context=O,f.props=b,f.state=f.__s,(_=r.__r)&&_(n),f.__d=!1,f.__v=n,f.__P=e,_=f.render(f.props,f.state,f.context),n.__k=k(null!=_&&_.type==h&&null==_.key?_.props.children:_),null!=f.getChildContext&&(o=s(s({},o),f.getChildContext())),p||null==f.getSnapshotBeforeUpdate||(y=f.getSnapshotBeforeUpdate(d,m)),w(e,n,t,o,u,l,i,c,a),f.base=n.__e,f.__h.length&&i.push(f),g&&(f.__E=f.__=null),f.__e=null}else n.__e=C(t.__e,n,t,o,u,l,i,a);(_=r.diffed)&&_(n)}catch(e){r.__e(e,n,t)}return n.__e}function P(e,n){r.__c&&r.__c(n,e),e.some((function(n){try{e=n.__h,n.__h=[],e.some((function(e){e.call(n)}))}catch(e){r.__e(e,n.__v)}}))}function C(e,n,t,r,o,u,l,i){var _,s,f,p,d,h=t.props,v=n.props;if(o="svg"===n.type||o,null==e&&null!=u)for(_=0;_<u.length;_++)if(null!=(s=u[_])&&(null===n.type?3===s.nodeType:s.localName===n.type)){e=s,u[_]=null;break}if(null==e){if(null===n.type)return document.createTextNode(v);e=o?document.createElementNS("http://www.w3.org/2000/svg",n.type):document.createElement(n.type),u=null}if(null===n.type)null!=u&&(u[u.indexOf(e)]=null),h!==v&&(e.data=v);else if(n!==t){if(null!=u&&(u=a.slice.call(e.childNodes)),f=(h=t.props||c).dangerouslySetInnerHTML,p=v.dangerouslySetInnerHTML,!i){if(h===c)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(p||f)&&(p&&f&&p.__html==f.__html||(e.innerHTML=p&&p.__html||""))}(function(e,n,t,r,o){var u;for(u in t)u in n||O(e,u,null,t[u],r);for(u in n)o&&"function"!=typeof n[u]||"value"===u||"checked"===u||t[u]===n[u]||O(e,u,n[u],t[u],r)})(e,v,h,o,i),n.__k=n.props.children,p||w(e,n,t,r,"foreignObject"!==n.type&&o,u,l,c,i),i||("value"in v&&void 0!==v.value&&v.value!==e.value&&(e.value=null==v.value?"":v.value),"checked"in v&&void 0!==v.checked&&v.checked!==e.checked&&(e.checked=v.checked))}return e}function E(e,n,t){try{"function"==typeof e?e(n):e.current=n}catch(e){r.__e(e,t)}}function T(e,n,t){var o,u,l;if(r.unmount&&r.unmount(e),(o=e.ref)&&E(o,null,n),t||"function"==typeof e.type||(t=null!=(u=e.__e)),e.__e=e.__d=null,null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){r.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(l=0;l<o.length;l++)o[l]&&T(o[l],n,t);null!=u&&f(u)}function H(e,n,t){return this.constructor(e,t)}function A(e,n,t){var o,u,l;r.__&&r.__(e,n),u=(o=t===i)?null:t&&t.__k||n.__k,e=p(h,null,[e]),l=[],S(n,(o?n:t||n).__k=e,u||c,c,void 0!==n.ownerSVGElement,t&&!o?[t]:u?null:a.slice.call(n.childNodes),l,t||c,o),P(l,e)}r={__e:function(e,n){for(var t;n=n.__;)if((t=n.__c)&&!t.__)try{if(t.constructor&&null!=t.constructor.getDerivedStateFromError)t.setState(t.constructor.getDerivedStateFromError(e));else{if(null==t.componentDidCatch)continue;t.componentDidCatch(e)}return g(t.__E=t)}catch(n){e=n}throw e}},v.prototype.setState=function(e,n){var t;t=this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(t,this.props)),e&&s(t,e),null!=e&&this.__v&&(this.__e=!1,n&&this.__h.push(n),g(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),g(this))},v.prototype.render=h,o=[],u="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,i=c},2:function(e,n,t){"use strict";t.d(n,"d",(function(){return p})),t.d(n,"b",(function(){return d})),t.d(n,"c",(function(){return h})),t.d(n,"a",(function(){return m}));var r,o,u,l=t(0),i=[],c=l.b.__r,a=l.b.diffed,_=l.b.__c,s=l.b.unmount;function f(e){l.b.__h&&l.b.__h(o);var n=o.__H||(o.__H={t:[],u:[]});return e>=n.t.length&&n.t.push({}),n.t[e]}function p(e){return function(e,n,t){var u=f(r++);return u.__c||(u.__c=o,u.i=[t?t(n):k(void 0,n),function(n){var t=e(u.i[0],n);u.i[0]!==t&&(u.i[0]=t,u.__c.setState({}))}]),u.i}(k,e)}function d(e,n){var t=f(r++);w(t.o,n)&&(t.i=e,t.o=n,o.__H.u.push(t))}function h(e){return v((function(){return{current:e}}),[])}function v(e,n){var t=f(r++);return w(t.o,n)?(t.o=n,t.v=e,t.i=e()):t.i}function m(e,n){return v((function(){return e}),n)}function y(){i.some((function(e){e.__P&&(e.__H.u.forEach(g),e.__H.u.forEach(b),e.__H.u=[])})),i=[]}function g(e){e.m&&e.m()}function b(e){var n=e.i();"function"==typeof n&&(e.m=n)}function w(e,n){return!e||n.some((function(n,t){return n!==e[t]}))}function k(e,n){return"function"==typeof n?n(e):n}l.b.__r=function(e){c&&c(e),r=0,(o=e.__c).__H&&(o.__H.u.forEach(g),o.__H.u.forEach(b),o.__H.u=[])},l.b.diffed=function(e){a&&a(e);var n=e.__c;if(n){var t=n.__H;t&&t.u.length&&(1!==i.push(n)&&u===l.b.requestAnimationFrame||((u=l.b.requestAnimationFrame)||function(e){var n,t=function(){clearTimeout(r),cancelAnimationFrame(n),setTimeout(e)},r=setTimeout(t,100);"undefined"!=typeof window&&(n=requestAnimationFrame(t))})(y))}},l.b.__c=function(e,n){n.some((function(e){e.__h.forEach(g),e.__h=e.__h.filter((function(e){return!e.i||b(e)}))})),_&&_(e,n)},l.b.unmount=function(e){s&&s(e);var n=e.__c;if(n){var t=n.__H;t&&t.t.forEach((function(e){return e.m&&e.m()}))}}},324:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t(2);function u(e,n,t,r,o,u,l){try{var i=e[u](l),c=i.value}catch(e){return void t(e)}i.done?n(c):Promise.resolve(c).then(r,o)}function l(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var c=function(){function e(n){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.onChange=n,i(this,"language","ja"),i(this,"languageData",void 0)}var n,t,r,o,c;return n=e,(t=[{key:"load",value:(o=regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./assets/i18n/resource.json");case 2:return n=e.sent,e.next=5,n.json();case 5:this.languageData=e.sent,this.setLanguage("ja");case 7:case"end":return e.stop()}}),e,this)})),c=function(){var e=this,n=arguments;return new Promise((function(t,r){var l=o.apply(e,n);function i(e){u(l,t,r,i,c,"next",e)}function c(e){u(l,t,r,i,c,"throw",e)}i(void 0)}))},function(){return c.apply(this,arguments)})},{key:"setLanguage",value:function(e){var n=this.languageData;n&&(this.language=e,this.onChange&&this.onChange(e),Object.keys(n).forEach((function(t){var r=document.getElementById(t);r&&(r.textContent=n[t][e])})),window.omesis_language=e)}}])&&l(n.prototype,t),r&&l(n,r),e}(),a=t(50);function _(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  cursor: ",";\n  margin: 3px;\n  opacity: ",";\n"]);return _=function(){return e},e}function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var t=[],r=!0,o=!1,u=void 0;try{for(var l,i=e[Symbol.iterator]();!(r=(l=i.next()).done)&&(t.push(l.value),!n||t.length!==n);r=!0);}catch(e){o=!0,u=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw u}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}t.n(a)()(r.a)("span")(_(),(function(e){return e.select?"":"pointer"}),(function(e){return e.select?1:.4}));var f=function(){var e=s(Object(o.d)("ja"),2),n=(e[0],e[1]),t=Object(o.c)(new c(n)).current,u=Object(o.a)((function(e){return function(n){return t.setLanguage(e)}}),[]);return Object(o.b)((function(){t.load()}),[]),Object(r.a)("li",{class:"drawer-dropdown"},Object(r.a)("a",{class:"drawer-menu-item","data-toggle":"dropdown",role:"button","aria-expanded":"false"},Object(r.a)("div",{id:"header_language",style:"display: inline;"}),Object(r.a)("span",{class:"drawer-caret"})),Object(r.a)("ul",{class:"drawer-dropdown-menu"},Object(r.a)("li",null,Object(r.a)("a",{class:"drawer-dropdown-menu-item",onClick:u("ja")},"日本語")),Object(r.a)("li",null,Object(r.a)("a",{class:"drawer-dropdown-menu-item",onClick:u("en")},"English")),Object(r.a)("li",null,Object(r.a)("a",{class:"drawer-dropdown-menu-item",onClick:u("cn")},"中文"))))},p=document.querySelector("#preact-i18n");p&&Object(r.c)(Object(r.a)(f,null),p)},50:function(e,n,t){e.exports=function(){"use strict";var e=/((,\s*)?(\s?(::?|>\s?|~\s?|\+\s?)(\w|-|\.|#|\*|\[([^(\[\])])*\]|\(([^(\(\))])+\))+)+\s*)+\{\W+[:;#%\/\\\.\(\)\+,\s\w"'-]+\}/gm,n=/@.*\{\W+([:;#%\/\.\(\)\+,\s\w"'-]|(::?|>.*)\w+\s\{\W+[:;#%\/\\\.\(\)\+,\s\w"'-]+\})+\}/gm,t=/[a-z\*,\s]+\s\{\W+[:;#%\/\\\.\(\)\+,\s\w"'-]+\}/gm,r=/\{\W+[:;#%\/\\\.\(\)\+,\s\w"'-]+\}/gm;function o(){for(var e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",n="",t=0;t<7;t++){var r=Math.floor(Math.random()*e.length);n+=e.substring(r,r+1)}return n}function u(e,n,t,r,o){var u=function(e,n,t){for(var r=Object.keys(t),o=0;o<r.length;o++)for(var u=0;u<t[r[o]].length;u++)if(t[r[o]][u].replace(r[o],e)===n)return r[o]}(e,n,t);u?-1===r.indexOf(u)&&r.push(u):(o(n),t[e]||(t[e]=[]),t[e].push(n),-1===r.indexOf(e)&&r.push(e))}var l="undefined"==typeof document?{insertRule:function(){}}:document.head.appendChild(document.createElement("style")).sheet;function i(e){l.insertRule(e,l.cssRules.length)}function c(l,c){function a(t){return function(i){var a=[].slice.call(arguments);a.shift();var _={};return function(s,f){var p=o();_[p]=[];var d=[];f=Array.isArray(f)?f:s.children;for(var h="",v=0;v<i.length;v++)h+=i[v]+(a[v]?a[v](s):"");u(p,function(t,r){return"."+r+"{"+t.replace(n,"").replace(e,"")+"}"}(h,p),_,d,c);var m=function(t,o){for(var u=[],l=t.replace(n,"").match(e)||[],i=0;i<l.length;i++)for(var c=l[i].match(r)[0],a=l[i].replace(r,"").split(","),_=0;_<a.length;_++)u.push("."+o+a[_].trim()+c);return u}(h,p);for(v=0;v<m.length;v++)u(p,m[v],_,d,c);var y=function(t,o){for(var u=[],l=t.match(n)||[],i=0;i<l.length;i++){for(var c="."+o+l[i].replace(e,"").match(r),a=l[i].match(e)||[],_=0;_<a.length;_++)c+="."+o+a[_];u.push(l[i].match(/@.*/)+c+"}")}return u}(h,p);for(v=0;v<y.length;v++)u(p,y[v],_,d,c);0===_[p].length&&delete _[p];var g=Object.assign({},s);return g.class=d.join(" ")+" "+(s.class||s.className||""),"createElementWithValidation"===l.name&&(g.className=g.class,delete g.class),l(t,g,f)}}}return c=c||i,a.keyframes=function(e){var n=[].slice.call(arguments);n.shift();for(var t="",r=0;r<e.length;r++)t+=e[r]+(n[r]||"");var u=o();return c("@keyframes "+u+" { "+t+" }"),u},a.global=function(e){var n=[].slice.call(arguments);n.shift();for(var r="",o=0;o<e.length;o++)r+=e[o]+(n[o]||"");for(var u=function(e){return e.match(t)||[]}(r),l=0;l<u.length;l++)c(u[l])},a}return c.defaultCallback=i,c}()}});
//# sourceMappingURL=internationalization.js.map