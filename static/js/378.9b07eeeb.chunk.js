"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[378],{9315:function(n,t,e){e.d(t,{CL:function(){return x},Mc:function(){return m},Uf:function(){return s},k1:function(){return l},on:function(){return Z},tP:function(){return p},wH:function(){return y}});var r=e(5861),a=e(4687),c=e.n(a),u=e(4569),i=e.n(u);i().defaults.baseURL="https://api.themoviedb.org/3/";var o="6d25a4756e0ff1ccca3eba13a74efa5c",s="https://image.tmdb.org/t/p/w300",p="https://image.tmdb.org/t/p/w200",f="movie",h="day",d="en-US";function l(n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.page,r=new URLSearchParams({api_key:o,page:e,language:d}),n.next=4,i().get("trending/".concat(f,"/").concat(h,"?").concat(r));case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,r=new URLSearchParams({api_key:o,language:d}),n.next=4,i().get("".concat(f,"/").concat(e,"?").concat(r));case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function x(n){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(c().mark((function n(t){var e,r,a;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,r=new URLSearchParams({api_key:o,language:d}),n.next=4,i().get("".concat(f,"/").concat(e,"/credits?").concat(r));case 4:return a=n.sent,n.abrupt("return",a.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(n){return E.apply(this,arguments)}function E(){return(E=(0,r.Z)(c().mark((function n(t){var e,r,a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.movieId,r=t.page,a=new URLSearchParams({api_key:o,page:r,language:d}),n.next=4,i().get("".concat(f,"/").concat(e,"/reviews?").concat(a));case 4:return u=n.sent,n.abrupt("return",u.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function Z(n){return k.apply(this,arguments)}function k(){return(k=(0,r.Z)(c().mark((function n(t){var e,r,a,u;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.query,r=t.page,a=new URLSearchParams({api_key:o,page:r,query:e,language:d}),n.next=4,i().get("search/".concat(f,"?").concat(a));case 4:return u=n.sent,n.abrupt("return",u.data);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},2961:function(n,t,e){e.d(t,{Z:function(){return u}});var r=e(2007),a=e.n(r),c=e(184);function u(n){var t=n.error;return(0,c.jsx)(c.Fragment,{children:t})}u.propTypes={error:a().string.isRequired}},5378:function(n,t,e){e.r(t),e.d(t,{default:function(){return b}});var r,a,c,u=e(5861),i=e(885),o=e(4687),s=e.n(o),p=e(6366),f=e(2961),h=e(883),d=e(168),l=e(6088),g=l.Z.p(r||(r=(0,d.Z)(["\n  font-weight: ",";\n"])),(function(n){return n.theme.fontWeights.bold})),m=e(184),v=function(n){var t=n.author,e=n.content;return(0,m.jsxs)(h.x,{display:"flex",flexDirection:"column",gridGap:4,children:[(0,m.jsxs)(g,{children:["Author: ",t]}),(0,m.jsx)("p",{children:e})]})},x=e(2791),w=e(6871),y=e(9315),E=e(680),Z=l.Z.ul(a||(a=(0,d.Z)(["\n  margin-top: ","px;\n  margin-bottom: ","px;\n  margin-left: ","px;\n"])),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[4]}),(function(n){return n.theme.space[5]})),k=l.Z.li(c||(c=(0,d.Z)(["\n  &:not(:last-child) {\n    margin-bottom: ","px;\n  }\n"])),(function(n){return n.theme.space[5]})),b=function(){var n=(0,w.UO)().movieId,t=(0,x.useState)([]),e=(0,i.Z)(t,2),r=e[0],a=e[1],c=(0,x.useState)(E.s.IDLE),o=(0,i.Z)(c,2),d=o[0],l=o[1],g=(0,x.useState)(""),b=(0,i.Z)(g,2),R=b[0],_=b[1];return(0,x.useEffect)((function(){var t=function(){var t=(0,u.Z)(s().mark((function t(){var e,r,c,u;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=E.s.PENDING,r=E.s.RESOLVED,c=E.s.REJECTED,l(e),t.prev=2,t.next=5,(0,y.wH)({movieId:n,page:1});case 5:u=t.sent,l(r),a(u.results),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),l(c),_(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(){return t.apply(this,arguments)}}();t()}),[n,_,l]),d===E.s.PENDING?(0,m.jsx)(p.Z,{}):d===E.s.REJECTED?(0,m.jsx)(f.Z,{error:R}):d===E.s.RESOLVED?(0,m.jsx)(m.Fragment,{children:0!==r.length?(0,m.jsx)(Z,{children:r.map((function(n){var t=n.id,e=n.author,r=n.content;return(0,m.jsx)(k,{children:(0,m.jsx)(v,{author:e,content:r})},t)}))}):(0,m.jsx)(h.x,{mt:4,children:"We don't have any reviews for this movie."})}):void 0}},680:function(n,t,e){e.d(t,{s:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}}}]);
//# sourceMappingURL=378.9b07eeeb.chunk.js.map