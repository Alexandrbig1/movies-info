"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[153],{7335:function(n,e,t){t.d(e,{Z:function(){return C}});var r,o,i,a,c,s,u,l,p,f=t(7689),d=t(1087),h=t(168),m=t(5867),g=t(6355),x=m.ZP.ul(r||(r=(0,h.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: start;\n  gap: 2.4rem;\n  padding: 1.2rem 2.4rem;\n"]))),v=m.ZP.li(o||(o=(0,h.Z)(["\n  border-radius: 0.4rem;\n  overflow: hidden;\n\n  @media (max-width: 520px) {\n    display: block;\n    width: 40rem;\n    height: 60rem;\n  }\n"]))),Z=m.ZP.div(i||(i=(0,h.Z)(["\n  background-color: ",";\n\n  border-radius: 0.4rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  overflow: hidden;\n  width: 20rem;\n  height: 36rem;\n\n  @media (max-width: 520px) {\n    display: block;\n    width: 100%;\n    height: 100%;\n  }\n"])),(function(n){return n.theme.colors.moviesWrapDarkColor})),w=m.ZP.div(a||(a=(0,h.Z)(["\n  padding: 2.4rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  justify-content: start;\n"]))),y=m.ZP.span(c||(c=(0,h.Z)(["\n  color: ",';\n  font-family: "Roboto", sans-serif;\n  font-size: 1.6rem;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 1.16;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  display: -webkit-box;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 2;\n\n  &:hover {\n    text-decoration: underline;\n  }\n\n  @media (max-width: 520px) {\n    font-size: 2.4rem;\n  }\n'])),(function(n){return n.theme.colors.lightTextColor})),b=m.ZP.img(s||(s=(0,h.Z)(["\n  width: 100%;\n  height: 100%;\n"]))),k=m.ZP.span(u||(u=(0,h.Z)(["\n  color: ",';\n  font-size: 1.6rem;\n  font-family: "Roboto", sans-serif;\n  font-weight: 500;\n  line-height: 1.25;\n'])),(function(n){return 0!==n.value?n.theme.colors.white:n.theme.colors.btnBgColor})),j=(0,m.ZP)(g.QJe)(l||(l=(0,h.Z)(["\n  color: ",";\n  font-size: 1.6rem;\n"])),(function(n){return 0!==n.value?n.theme.colors.accent:n.theme.colors.btnBgColor})),P=m.ZP.div(p||(p=(0,h.Z)(["\n  display: flex;\n  gap: 0.8rem;\n  align-items: center;\n"]))),_=t(184);function C(n){var e=n.movies,t=(0,f.TH)();function r(n){return n%1===0?Math.floor(n):n}return(0,_.jsx)(x,{children:e.map((function(n){var e=n.id,o=n.vote_average,i=n.title,a=n.poster_path;return(0,_.jsx)(v,{children:(0,_.jsx)(d.rU,{to:"/movies/".concat(e),state:{from:t},children:(0,_.jsxs)(Z,{children:[(0,_.jsxs)(w,{children:[(0,_.jsxs)(P,{children:[(0,_.jsx)(j,{value:r(o.toFixed(1))}),(0,_.jsx)(k,{value:r(o.toFixed(1)),children:r(o.toFixed(1))})]}),(0,_.jsx)(y,{children:i})]}),(0,_.jsx)(b,{src:a?"\nhttp://image.tmdb.org/t/p/w200".concat(a):"".concat("/movies-info","/images/noImage.webp"),alt:i})]})})},e)}))})}},1256:function(n,e,t){t.d(e,{KY:function(){return g},OW:function(){return h},Qj:function(){return f},S7:function(){return l},ZP:function(){return s}});var r=t(4165),o=t(5861),i=t(1243),a="https://api.themoviedb.org/3",c="96525b58fad95f33b6786cec803d2857";function s(){return u.apply(this,arguments)}function u(){return(u=(0,o.Z)((0,r.Z)().mark((function n(){var e;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/trending/movie/day?api_key=").concat(c));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n,e){return p.apply(this,arguments)}function p(){return(p=(0,o.Z)((0,r.Z)().mark((function n(e,t){var o;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/search/movie?api_key=").concat(c,"&query=").concat(e,"&page=").concat(t));case 2:return o=n.sent,n.abrupt("return",o.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return d.apply(this,arguments)}function d(){return(d=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/movie/").concat(e,"?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return m.apply(this,arguments)}function m(){return(m=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/movie/").concat(e,"/credits?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return x.apply(this,arguments)}function x(){return(x=(0,o.Z)((0,r.Z)().mark((function n(e){var t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(a,"/movie/").concat(e,"/reviews?api_key=").concat(c));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},6153:function(n,e,t){t.r(e),t.d(e,{default:function(){return Z}});var r,o,i,a=t(4165),c=t(5861),s=t(9439),u=t(2791),l=t(7335),p=t(1256),f=t(7596),d=t(168),h=t(5867),m=h.ZP.div(r||(r=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-image: url(","/images/bg.jpg),\n    linear-gradient(to bottom, #272727, #262626);\n  background-position: top;\n  background-repeat: no-repeat;\n  background-size: contain;\n"])),"/movies-info"),g=h.ZP.div(o||(o=(0,d.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2.4rem;\n  padding: 2.4rem;\n  @media (max-width: 520px) {\n    padding: 1.2rem;\n  }\n"]))),x=h.ZP.h2(i||(i=(0,d.Z)(["\n  color: ",';\n  font-family: "Roboto", sans-serif;\n  font-size: 36px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: 120%;\n  text-transform: uppercase;\n  text-align: center;\n'])),(function(n){return n.theme.colors.darkBgColor})),v=t(184);function Z(){var n=(0,u.useState)([]),e=(0,s.Z)(n,2),t=e[0],r=e[1];return(0,u.useEffect)((function(){function n(){return(n=(0,c.Z)((0,a.Z)().mark((function n(){var e;return(0,a.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.ZP)();case 3:e=n.sent,r(e.results),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),f.Am.error("Oops, something went wrong! Reload this page!",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,progress:void 0,theme:"light"});case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}t.length>0||function(){n.apply(this,arguments)}()}),[t]),(0,v.jsx)(m,{children:(0,v.jsxs)(g,{children:[(0,v.jsx)(x,{children:"Trending Today"}),(0,v.jsx)(l.Z,{movies:t})]})})}}}]);
//# sourceMappingURL=153.ceef3c89.chunk.js.map