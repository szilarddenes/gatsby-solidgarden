(self.webpackChunksolidgarden=self.webpackChunksolidgarden||[]).push([[452],{523:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,u,l,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(!i(e[u],a[u]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;for(s=e.entries();!(u=s.next()).done;)if(!i(u.value[1],a.get(u.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(u=s.next()).done;)if(!a.has(u.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(u=c;0!=u--;)if(e[u]!==a[u])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(l=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(u=c;0!=u--;)if(!Object.prototype.hasOwnProperty.call(a,l[u]))return!1;if(t&&e instanceof Element)return!1;for(u=c;0!=u--;)if(("_owner"!==l[u]&&"__v"!==l[u]&&"__o"!==l[u]||!e.$$typeof)&&!i(e[l[u]],a[l[u]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},6124:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var u,l=[];function s(){u=e(l.map((function(e){return e.props}))),f.canUseDOM?t(u):n&&(u=n(u))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return u},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=u;return u=void 0,l=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){l.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=l.indexOf(this);l.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},4640:function(e,t,n){"use strict";n.d(t,{A:function(){return l}});var r=n(7294),o=n(9925),i=n(525),a=n(2472),c=o.default.div.withConfig({displayName:"Layout__Wrapper",componentId:"sc-1mt281f-0"})(["margin:0 auto;max-width:1400px;padding:0 var(--sides-padding-desktop);@media (max-width:","px){padding:0 var(--sides-padding-mobile);}"],a.B),u=o.default.main.withConfig({displayName:"Layout__Content",componentId:"sc-1mt281f-1"})(["margin:0 auto;max-width:900px;@media (max-width:","px){width:100%;}"],a.B);function l(e){var t=e.children;return r.createElement(r.Fragment,null,r.createElement(i.nz,null),r.createElement(c,null,r.createElement(u,null,t),r.createElement(i.$_,null)))}},525:function(e,t,n){"use strict";n.d(t,{$_:function(){return u},nz:function(){return d},Ar:function(){return h.A}});var r={};n.r(r);var o=n(7294),i=n(9925),a=n(2472),c=i.default.footer.withConfig({displayName:"Footer__Container",componentId:"sc-1gy2qqi-0"})(["font-size:17px;margin-top:20vh;padding-bottom:5vh;padding-top:5vh;text-align:left;a{color:var(--accent-color);}a:hover{color:var(--accent-color-secondary);}small{display:block;margin-top:1.75rem;text-align:center;}@media (max-width:","px){font-size:16px;}"],a.B);function u(){return o.createElement(c,null,o.createElement("small",null,"© ",(new Date).getFullYear()," JointAdVenture Bt. All Rights Reserved."))}n.p,n.p;var l,s,f,p,d=(0,i.createGlobalStyle)([':root{--accent-color:#00ffbb;--accent-color-secondary:#096;--dark-color:hsl(0,0%,15%);--dark-color-light:hsla(0,0%,15%,0.9);--dark-color-lighter:hsla(00,0%,15%,0.7);--light-color:hsl(0,0%,99%);--light-color-translucent:hsla(0,0%,99%,0.92);--sides-padding-desktop:3%;--sides-padding-mobile:5%;--code-font-color:#fafafa;--code-background-color:#353535;--string:#92d192;--variable:#f2777a;--property:#abb2bf;--number:#fca369;--operator:#ac8d58;--punctuation:#d5d8df;--comment:#848991;--function:#62cfcf;--keyword:#ffeead;--attribute:#ffd479;--class:#e1a6f2;--tag:#6ab0f3;--error:#f2777a;--light-background:#f1f3f5;--link-color:#15beec;}@font-face{font-display:block;font-family:"robotoMono";font-style:normal;font-weight:400;src:url(\'','\') format("woff2");}@font-face{font-display:block;font-family:"robotoMono";font-style:normal;font-weight:700;src:url(\'',"') format(\"woff2\");}body{background-color:var(--dark-color);color:var(--light-color);font-family:'IBMPlexMono',sans-serif;font-size:19px;font-weight:400;height:100%;padding-top:20vh;@media (max-width:","px){font-size:17px;padding-top:15vh;}}p{color:var(--light-color);}a:hover{color:var(--accent-color);}div a{text-decoration:none;color:inherit;-webkit-tap-highlight-color:hsla(0,0%,0%,0);-webkit-tap-highlight-color:transparent;}*,*::after,*::before{box-sizing:border-box;}body{line-height:1.5;min-height:100vh;scroll-behavior:smooth;text-rendering:optimizeSpeed;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;}ul[class],ol[class]{list-style:none;}a:not([class]){text-decoration-skip-ink:auto;}img{display:block;max-width:100%;}article > * + *{margin-top:1em;}button,input,select,textarea{font:inherit;}@media (prefers-reduced-motion:reduce){*{animation-duration:0.01ms !important;animation-iteration-count:1 !important;scroll-behavior:auto !important;transition-duration:0.01ms !important;}}"],r.robotoMono400,r.robotoMono700,a.B),h=n(4640),m=n(5697),y=n.n(m),b=n(6124),g=n.n(b),v=n(523),T=n.n(v),w=n(4756),A=n.n(w),C="bodyAttributes",O="htmlAttributes",E="titleAttributes",S={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},k=(Object.keys(S).map((function(e){return S[e]})),"charset"),x="cssText",j="href",P="http-equiv",I="innerHTML",L="itemprop",M="name",N="property",_="rel",R="src",B="target",z={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},q="defaultTitle",D="defer",F="encodeSpecialCharacters",H="onChangeClientState",Y="titleTemplate",U=Object.keys(z).reduce((function(e,t){return e[z[t]]=t,e}),{}),K=[S.NOSCRIPT,S.SCRIPT,S.STYLE],V="data-react-helmet",W="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),J=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Q=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},X=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},Z=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ee=function(e){var t=ie(e,S.TITLE),n=ie(e,Y);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=ie(e,q);return t||r||void 0},te=function(e){return ie(e,H)||function(){}},ne=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return J({},e,t)}),{})},re=function(e,t){return t.filter((function(e){return void 0!==e[S.BASE]})).map((function(e){return e[S.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},oe=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&se("Helmet: "+e+' should be of type "Array". Instead found type "'+W(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],u=c.toLowerCase();-1===t.indexOf(u)||n===_&&"canonical"===e[n].toLowerCase()||u===_&&"stylesheet"===e[u].toLowerCase()||(n=u),-1===t.indexOf(c)||c!==I&&c!==x&&c!==L||(n=c)}if(!n||!e[n])return!1;var l=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][l]&&(o[n][l]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],u=A()({},r[c],o[c]);r[c]=u}return e}),[]).reverse()},ie=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},ae=(l=Date.now(),function(e){var t=Date.now();t-l>16?(l=t,e(t)):setTimeout((function(){ae(e)}),0)}),ce=function(e){return clearTimeout(e)},ue="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||ae:n.g.requestAnimationFrame||ae,le="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ce:n.g.cancelAnimationFrame||ce,se=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},fe=null,pe=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.onChangeClientState,l=e.scriptTags,s=e.styleTags,f=e.title,p=e.titleAttributes;me(S.BODY,r),me(S.HTML,o),he(f,p);var d={baseTag:ye(S.BASE,n),linkTags:ye(S.LINK,i),metaTags:ye(S.META,a),noscriptTags:ye(S.NOSCRIPT,c),scriptTags:ye(S.SCRIPT,l),styleTags:ye(S.STYLE,s)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(m[e]=d[e].oldTags)})),t&&t(),u(e,h,m)},de=function(e){return Array.isArray(e)?e.join(""):e},he=function(e,t){void 0!==e&&document.title!==e&&(document.title=de(e)),me(S.TITLE,t)},me=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(V),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var u=a[c],l=t[u]||"";n.getAttribute(u)!==l&&n.setAttribute(u,l),-1===o.indexOf(u)&&o.push(u);var s=i.indexOf(u);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(V):n.getAttribute(V)!==a.join(",")&&n.setAttribute(V,a.join(","))}},ye=function(e,t){var n=document.head||document.querySelector(S.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===I)n.innerHTML=t.innerHTML;else if(r===x)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(V,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},be=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ge=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[z[n]||n]=e[n],t}),t)},ve=function(e,t,n){switch(e){case S.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[V]=!0,i=ge(n,r),[o.createElement(S.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var o=be(n),i=de(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+Z(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+Z(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case C:case O:return{toComponent:function(){return ge(t)},toString:function(){return be(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[V]=!0,r);return Object.keys(t).forEach((function(e){var n=z[e]||e;if(n===I||n===x){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),o.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===I||e===x)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+Z(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===K.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},Te=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,u=e.scriptTags,l=e.styleTags,s=e.title,f=void 0===s?"":s,p=e.titleAttributes;return{base:ve(S.BASE,t,r),bodyAttributes:ve(C,n,r),htmlAttributes:ve(O,o,r),link:ve(S.LINK,i,r),meta:ve(S.META,a,r),noscript:ve(S.NOSCRIPT,c,r),script:ve(S.SCRIPT,u,r),style:ve(S.STYLE,l,r),title:ve(S.TITLE,{title:f,titleAttributes:p},r)}},we=g()((function(e){return{baseTag:re([j,B],e),bodyAttributes:ne(C,e),defer:ie(e,D),encode:ie(e,F),htmlAttributes:ne(O,e),linkTags:oe(S.LINK,[_,j],e),metaTags:oe(S.META,[M,k,P,N,L],e),noscriptTags:oe(S.NOSCRIPT,[I],e),onChangeClientState:te(e),scriptTags:oe(S.SCRIPT,[R,I],e),styleTags:oe(S.STYLE,[x],e),title:ee(e),titleAttributes:ne(E,e)}}),(function(e){fe&&le(fe),e.defer?fe=ue((function(){pe(e,(function(){fe=null}))})):(pe(e),fe=null)}),Te)((function(){return null})),Ae=(s=we,p=f=function(e){function t(){return $(this,t),X(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!T()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case S.SCRIPT:case S.NOSCRIPT:return{innerHTML:t};case S.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return J({},r,((t={})[n.type]=[].concat(r[n.type]||[],[J({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case S.TITLE:return J({},o,((t={})[r.type]=a,t.titleAttributes=J({},i),t));case S.BODY:return J({},o,{bodyAttributes:J({},i)});case S.HTML:return J({},o,{htmlAttributes:J({},i)})}return J({},o,((n={})[r.type]=J({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=J({},t);return Object.keys(e).forEach((function(t){var r;n=J({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return o.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[U[n]||n]=e[n],t}),t)}(Q(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case S.LINK:case S.META:case S.NOSCRIPT:case S.SCRIPT:case S.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Q(e,["children"]),r=J({},n);return t&&(r=this.mapChildrenToProps(t,r)),o.createElement(s,r)},G(t,null,[{key:"canUseDOM",set:function(e){s.canUseDOM=e}}]),t}(o.Component),f.propTypes={base:y().object,bodyAttributes:y().object,children:y().oneOfType([y().arrayOf(y().node),y().node]),defaultTitle:y().string,defer:y().bool,encodeSpecialCharacters:y().bool,htmlAttributes:y().object,link:y().arrayOf(y().object),meta:y().arrayOf(y().object),noscript:y().arrayOf(y().object),onChangeClientState:y().func,script:y().arrayOf(y().object),style:y().arrayOf(y().object),title:y().string,titleAttributes:y().object,titleTemplate:y().string},f.defaultProps={defer:!0,encodeSpecialCharacters:!0},f.peek=s.peek,f.rewind=function(){var e=s.rewind();return e||(e=Te({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},p);Ae.renderStatic=Ae.rewind;n(5444)},2472:function(e,t,n){"use strict";n.d(t,{B:function(){return r}});var r=849}}]);
//# sourceMappingURL=a3336d3c033a5ec9d59a088cb032c68b95c64a61-1bb3a2326af6b47aed88.js.map