(this["webpackJsonptwitch-app"]=this["webpackJsonptwitch-app"]||[]).push([[0],{62:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(16),i=n.n(c),s=(n(62),n(29)),o=(n(63),n(21)),u=n(42),l=n(36),p="https://hsutinghuan.ddns.net/Web1",d=(new URL(p).port&&new URL(p).port,"/"==new URL(p).pathname||new URL(p).pathname,{clientId:"vr0gbze3cw6zvxavzvjjxokdydm7cj",clientSecret:"b1ew7n5ziqoxx1v5186x75nsvgbok0",accessToken:"",redirect_uri:p,parentDomain:new URL(p).hostname}),h=Object(u.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(console.log(t),t.type){case"accessToken":return Object(l.a)(Object(l.a)({},e),{},{accessToken:t.accessToken});default:return Object(l.a)({},e)}})),j=n(10),b=n.n(j),f=n(17),x=n(32),v=n.n(x);function O(){return(O=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=t&&0!=t.length){e.next=2;break}return e.abrupt("return");case 2:return n=t.split("&").reduce((function(e,t){var n=t.split("=");return e[n[0]]=n[1],e}),{}),e.abrupt("return",n.access_token);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var m=function(e){return O.apply(this,arguments)};function w(){return(w=Object(f.a)(b.a.mark((function e(t,n){var a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id_token:{email_verified:null}},r="https://id.twitch.tv/oauth2/authorize?response_type=token+id_token&client_id=".concat(t,"&redirect_uri=").concat(n,"&&scope=viewing_activity_read+openid&claims=").concat(a),e.next=4,window.location.replace(r);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var k=function(e,t){return w.apply(this,arguments)},g=n(98),y=n(5);var _=function(e){var t=e.height,n=e.width,a=e.allowfullscreen,r=e.autoplay,c=e.videoId,i=e.title,s=(e.description,e.parent);return Object(y.jsxs)(g.a,{border:"light",style:{width:"400px"},children:[Object(y.jsx)("iframe",{src:"https://player.twitch.tv/?autoplay=".concat(null!=r,"&parent=").concat(s,"&video=").concat(c),height:null==t?300:t,width:null==n?400:n,allowfullscreen:null==a||a}),Object(y.jsx)(g.a.Header,{children:i}),Object(y.jsx)(g.a.Body,{})]})},z=n(92);var I=function(e){var t=e.twitchGameData,n=e.parentDomain;return null==t||0==t.length?Object(y.jsx)(y.Fragment,{}):Object(y.jsx)(z.a,{children:t.map((function(e){return Object(y.jsx)(_,{videoId:e.id,title:e.title,description:e.description,parent:n},e.id)}))})},S=n(93),T=n(97);var D=function(e){var t=e.gameName,n=Object(o.b)(),r=Object(a.useState)([]),c=Object(s.a)(r,2),i=c[0],u=c[1],l=Object(o.c)((function(e){return e.accessToken})),p=Object(o.c)((function(e){return e.clientId})),d=Object(o.c)((function(e){return e.redirect_uri})),h=Object(o.c)((function(e){return e.parentDomain}));function j(){return x.apply(this,arguments)}function x(){return(x=Object(f.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=(t=document.location.hash.substr(1))){e.next=6;break}return e.next=4,k(p,d);case 4:e.next=10;break;case 6:return e.next=8,m(t);case 8:a=e.sent,n({type:"accessToken",accessToken:a});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)(Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""===l){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,j();case 4:case"end":return e.stop()}}),e)}))),[]),Object(a.useEffect)(Object(f.a)(b.a.mark((function e(){var n,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!=l){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v.a.get("https://api.twitch.tv/helix/games?name=".concat(t),{headers:{Authorization:"Bearer ".concat(l),"Client-Id":"".concat(p)}});case 4:if(200!=(n=e.sent).status||null==n.data||0==n.data.data.length){e.next=12;break}return e.next=8,O(n.data.data[0].id);case 8:a=e.sent,u(a),e.next=13;break;case 12:console.log("response's data is empty, search by => ".concat(t));case 13:case"end":return e.stop()}}),e)}))),[l,t]);var O=function(){var e=Object(f.a)(b.a.mark((function e(t){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,v.a.get("https://api.twitch.tv/helix/videos?game_id=".concat(t,"&first=20"),{headers:{Authorization:"Bearer ".concat(l),"Client-Id":"".concat(p)}});case 4:return n=e.sent,e.abrupt("return",n.data.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(y.jsxs)(S.a,{children:[null==i||0==i.length?Object(y.jsx)(T.a,{show:!0,variant:"info",children:"\u67e5\u7121\u8cc7\u6599"}):Object(y.jsx)(y.Fragment,{}),Object(y.jsx)(I,{twitchGameData:i,parentDomain:h})]})},N=n(56),B=n(6),L=n(45),R=n(96),U=n(95),C=n(57),E=n(94);var F=function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(""),i=Object(s.a)(c,2),u=i[0],l=i[1];return Object(y.jsx)(o.a,{store:h,children:Object(y.jsxs)(N.a,{children:[Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(L.a,{expand:"lg",bg:"dark",variant:"dark",children:Object(y.jsxs)(R.a,{className:"container-fluid",children:[Object(y.jsx)(L.a.Brand,{children:"twitch-app"}),Object(y.jsxs)(U.a,{inline:!0,className:"ml-auto",children:[Object(y.jsx)(C.a,{type:"input",placeholder:"Search Game Name",className:"mr-sm-2",onChange:function(e){l(e.target.value)}}),Object(y.jsx)(E.a,{variant:"outline-success",onClick:function(e){r(u)},children:"Search"})]})]})})}),Object(y.jsx)(B.b,{children:Object(y.jsx)(D,{gameName:n})})]})})};i.a.render(Object(y.jsx)(r.a.StrictMode,{children:Object(y.jsx)(F,{})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.0d1e3901.chunk.js.map