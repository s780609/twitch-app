(this["webpackJsonptwitch-app"]=this["webpackJsonptwitch-app"]||[]).push([[0],{30:function(t,e,n){},32:function(t,e,n){},56:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(8),i=n.n(a),s=(n(30),n(2)),o=n.n(s),u=n(5);n(32);function p(){return(p=Object(u.a)(o.a.mark((function t(e){var n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!=e&&0!=e.length){t.next=2;break}return t.abrupt("return");case 2:return n=e.split("&").reduce((function(t,e){var n=e.split("=");return t[n[0]]=n[1],t}),{}),t.abrupt("return",n.access_token);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=function(t){return p.apply(this,arguments)},d=n(7),h=n(13),f=n(10),b={clientId:"vr0gbze3cw6zvxavzvjjxokdydm7cj",clientSecret:"3x2oiag46esvkqhp99ah13q1cr3wyk",accessToken:"",redirect_uri:"https://s780609.github.io",parentDomain:"s780609.github.io"},j=Object(h.a)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.accessToken){case"accessToken":return Object(f.a)(Object(f.a)({},t),{},{token:e.accessToken});default:return Object(f.a)({},t)}})),v=n(15),x=n(9),w=n.n(x);function O(){return(O=Object(u.a)(o.a.mark((function t(e,n){var r,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={id_token:{email_verified:null}},c="https://id.twitch.tv/oauth2/authorize?response_type=token+id_token&client_id=".concat(e,"&redirect_uri=").concat(n,"&&scope=viewing_activity_read+openid&claims=").concat(r),t.next=4,window.location.replace(c);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var k=function(t,e){return O.apply(this,arguments)},m=n(1);var g=function(t){var e=t.height,n=t.width,r=t.allowfullscreen,c=t.autoplay,a=t.videoId,i=t.title,s=(t.description,t.parent);return Object(m.jsxs)("div",{style:{width:"400px",margin:"10px",marginRight:"-50px",display:"inline-block"},children:[Object(m.jsx)("h3",{children:i}),Object(m.jsx)("iframe",{src:"https://player.twitch.tv/?autoplay=".concat(null!=c,"&parent=").concat(s,"&video=").concat(a),height:null==e?300:e,width:null==n?400:n,allowfullscreen:null==r?"allowFullScreen":r})]})},y=n(57);var _=function(t){var e=t.twitchGameData,n=t.parentDomain;return null==e||0==e.length?Object(m.jsx)(m.Fragment,{children:"empty"}):Object(m.jsx)(y.a,{children:e.map((function(t){return Object(m.jsx)(g,{videoId:t.id,title:t.title,description:t.description,parent:n},t.id)}))})};var I=function(){var t=Object(d.b)(),e=Object(r.useState)(""),n=Object(v.a)(e,2),c=n[0],a=n[1],i=Object(r.useState)([]),s=Object(v.a)(i,2),p=s[0],h=s[1],f=Object(d.c)((function(t){return t.clientId})),b=Object(d.c)((function(t){return t.redirect_uri})),j=Object(d.c)((function(t){return t.parentDomain}));function x(){return O.apply(this,arguments)}function O(){return(O=Object(u.a)(o.a.mark((function e(){var n,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=(n=document.location.hash.substr(1))){e.next=6;break}return e.next=4,k(f,b);case 4:e.next=11;break;case 6:return e.next=8,l(n);case 8:r=e.sent,t({type:"accessToken",accessToken:r}),a(r);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(r.useEffect)(Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x();case 2:case"end":return t.stop()}}),t)}))),[]),Object(r.useEffect)(Object(u.a)(o.a.mark((function t(){var e,n,r;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=c){t.next=2;break}return t.abrupt("return");case 2:return t.next=4,w.a.get("https://api.twitch.tv/helix/games/top",{headers:{Authorization:"Bearer ".concat(c),"Client-Id":"".concat(f)}});case 4:return e=t.sent,n=e.data.data[4].id,t.next=8,w.a.get("https://api.twitch.tv/helix/videos?game_id=".concat(n,"&first=20"),{headers:{Authorization:"Bearer ".concat(c),"Client-Id":"".concat(f)}});case 8:r=t.sent,h(r.data.data);case 10:case"end":return t.stop()}}),t)}))),[c]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(_,{twitchGameData:p,parentDomain:j})})};var z=function(){return Object(r.useEffect)(Object(u.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l();case 2:case"end":return t.stop()}}),t)}))),[]),Object(m.jsx)(d.a,{store:j,children:Object(m.jsx)(I,{})})};i.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(z,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.feee5454.chunk.js.map