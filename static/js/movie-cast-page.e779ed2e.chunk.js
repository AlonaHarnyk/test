"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[26],{9847:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r=e(885),a=e(6871),c=e(2791),i=e(4390);var u,s,o,p,f,l,h=e(993),d=e(168),x=e(6031),m=x.ZP.ul(u||(u=(0,d.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  margin: -5px;\n"]))),v=x.ZP.li(s||(s=(0,d.Z)(["\n  max-width: 150px;\n  border: 1px solid skyblue;\n  border-radius: 5px;\n  margin: 10px;\n"]))),g=x.ZP.div(o||(o=(0,d.Z)(["\n  position: relative;\n  overflow: hidden;\n"]))),w=x.ZP.img(p||(p=(0,d.Z)(["\n  max-width: 148px;\n"]))),y=x.ZP.div(f||(f=(0,d.Z)(["\n  padding: 10px;\n  font-size: 14px;\n"]))),b=x.ZP.p(l||(l=(0,d.Z)(["\n  font-weight: bold;\n"]))),Z=e(184);function k(n){var t=n.cast;return(0,Z.jsx)(m,{children:t.map((function(n){var t=n.id,e=n.character,r=n.name,a=n.profile_path;return(0,Z.jsxs)(v,{children:[(0,Z.jsx)(g,{children:(0,Z.jsx)(w,{src:a?"https://image.tmdb.org/t/p/w500/".concat(a):h,alt:e})}),(0,Z.jsxs)(y,{children:[(0,Z.jsx)(b,{children:"Actors name:"}),(0,Z.jsx)("p",{children:r}),(0,Z.jsx)(b,{children:"Character: "}),(0,Z.jsx)("p",{children:e})]})]},t)}))})}function j(){var n=function(){var n=(0,a.UO)().movieId,t=(0,c.useState)(null),e=(0,r.Z)(t,2),u=e[0],s=e[1];return(0,c.useEffect)((function(){i.M1(n).then((function(n){var t=n.cast.map((function(n){return{id:n.id,character:n.character,profile_path:n.profile_path,name:n.name}}));return s(t)}))}),[n]),u}();return(0,Z.jsx)(Z.Fragment,{children:null===n||0===n.length?(0,Z.jsx)("p",{children:"There is no cast to this movie"}):(0,Z.jsx)(k,{cast:n})})}},4390:function(n,t,e){e.d(t,{Hg:function(){return o},M1:function(){return h},Ph:function(){return v},TP:function(){return f},tx:function(){return x}});var r=e(5861),a=e(7757),c=e.n(a),i=e(4569),u=e.n(i);u().defaults.baseURL="https://api.themoviedb.org/3/";var s="71232cc02b0a0eb890148f92fc2f7287";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("trending/all/day?api_key=".concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(t,"?api_key=").concat(s));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u().get("search/movie?api_key=".concat(s,"&query=").concat(t,"&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},993:function(n,t,e){n.exports=e.p+"static/media/no-image-available.44f48b3054fa43087d7f.png"}}]);
//# sourceMappingURL=movie-cast-page.e779ed2e.chunk.js.map