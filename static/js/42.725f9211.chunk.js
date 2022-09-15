"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[42],{9315:function(e,t,n){n.d(t,{CL:function(){return x},Mc:function(){return v},Uf:function(){return o},k1:function(){return d},on:function(){return E},tP:function(){return p},wH:function(){return w}});var r=n(5861),a=n(4687),u=n.n(a),c=n(4569),i=n.n(c);i().defaults.baseURL="https://api.themoviedb.org/3/";var s="6d25a4756e0ff1ccca3eba13a74efa5c",o="https://image.tmdb.org/t/p/w300",p="https://image.tmdb.org/t/p/w200",f="movie",l="day",h="en-US";function d(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.page,r=new URLSearchParams({api_key:s,page:n,language:h}),e.next=4,i().get("trending/".concat(f,"/").concat(l,"?").concat(r));case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.movieId,r=new URLSearchParams({api_key:s,language:h}),e.next=4,i().get("".concat(f,"/").concat(n,"?").concat(r));case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return y.apply(this,arguments)}function y(){return(y=(0,r.Z)(u().mark((function e(t){var n,r,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.movieId,r=new URLSearchParams({api_key:s,language:h}),e.next=4,i().get("".concat(f,"/").concat(n,"/credits?").concat(r));case 4:return a=e.sent,e.abrupt("return",a.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(u().mark((function e(t){var n,r,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.movieId,r=t.page,a=new URLSearchParams({api_key:s,page:r,language:h}),e.next=4,i().get("".concat(f,"/").concat(n,"/reviews?").concat(a));case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function E(e){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(u().mark((function e(t){var n,r,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,r=t.page,a=new URLSearchParams({api_key:s,page:r,query:n,language:h}),e.next=4,i().get("search/".concat(f,"?").concat(a));case 4:return c=e.sent,e.abrupt("return",c.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2961:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(2007),a=n.n(r),u=n(184);function c(e){var t=e.error;return(0,u.jsx)(u.Fragment,{children:t})}c.propTypes={error:a().string.isRequired}},7115:function(e,t,n){n.d(t,{Z:function(){return p}});var r,a=n(501),u=n(6871),c=n(184),i=function(e){var t=e.title,n=e.id,r=(0,u.TH)();return(0,c.jsx)(a.rU,{to:"/movies/".concat(n),state:{from:r},children:t})},s=n(168),o=n(6088).Z.ul(r||(r=(0,s.Z)(["\n  margin-left: ","px;\n"])),(function(e){return e.theme.space[5]})),p=function(e){var t=e.moviesData;return(0,c.jsx)(o,{children:0!==t.length&&t.map((function(e){var t=e.id,n=e.title;return(0,c.jsx)("li",{children:(0,c.jsx)(i,{title:n,id:t})},t)}))})}},680:function(e,t,n){n.d(t,{s:function(){return r}});var r={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},1042:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r,a,u=n(5861),c=n(885),i=n(4687),s=n.n(i),o=n(7115),p=n(2961),f=n(6366),l=n(168),h=n(6088),d=h.Z.form(r||(r=(0,l.Z)(["\n  padding-top: ","px;\n  margin-bottom: ","px;\n"])),(function(e){return e.theme.space[3]}),(function(e){return e.theme.space[4]})),m=h.Z.input(a||(a=(0,l.Z)(["\n  width: 350px;\n"]))),v=n(184),g=function(e){var t=e.onSubmit,n=e.inputValue,r=e.isDisabledBtn;return(0,v.jsxs)(d,{onSubmit:function(e){e.preventDefault();var n=e.currentTarget;t(n.elements.query.value)},children:[(0,v.jsx)(m,{type:"text",name:"query",defaultValue:n}),(0,v.jsx)("button",{type:"submit",disabled:r,children:"Search"})]})},x=n(883),y=n(9315),w=n(2791),b=n(501),E=n(680),Z=n(6066),k=function(){var e,t=(0,w.useState)([]),n=(0,c.Z)(t,2),r=n[0],a=n[1],i=(0,w.useState)(E.s.IDLE),l=(0,c.Z)(i,2),h=l[0],d=l[1],m=(0,w.useState)(""),k=(0,c.Z)(m,2),S=k[0],D=k[1],j=(0,b.lr)(),_=(0,c.Z)(j,2),L=_[0],R=_[1],P=null!==(e=L.get("query"))&&void 0!==e?e:"";(0,w.useEffect)((function(){var e=function(){var e=(0,u.Z)(s().mark((function e(){var t,n,r,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=E.s.PENDING,n=E.s.RESOLVED,r=E.s.REJECTED,!(P.length<3)){e.next=3;break}return e.abrupt("return");case 3:return d(t),e.prev=4,e.next=7,(0,y.on)({query:P,page:1});case 7:u=e.sent,d(n),a(u.results),u.total_results||(Z.Am.info("Sorry, there are no movies matching your search query. Please try again."),R()),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(4),d(r),D(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[P,D,d,R]);var q=E.s.PENDING,U=E.s.RESOLVED,I=E.s.REJECTED;return(0,v.jsxs)(x.x,{ml:2,mt:6,children:[(0,v.jsx)(g,{onSubmit:function(e){var t=e.trim().toLowerCase();t.length>2?R({query:t}):(Z.Am.warning("Few characters to search"),R())},inputValue:P,isDisabledBtn:h===q}),h===q&&(0,v.jsx)(f.Z,{}),h===I&&(0,v.jsx)(p.Z,{error:S}),h===U&&(0,v.jsx)(o.Z,{moviesData:r})]})}}}]);
//# sourceMappingURL=42.725f9211.chunk.js.map