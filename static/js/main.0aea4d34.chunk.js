(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{196:function(e,t,a){e.exports=a(425)},415:function(e,t,a){},420:function(e,t,a){},421:function(e,t,a){},422:function(e,t,a){},423:function(e,t,a){},424:function(e,t,a){},425:function(e,t,a){"use strict";a.r(t);a(197),a(206);var n=a(1),r=a.n(n),c=a(192),l=a.n(c),i=a(52),m=a(13),s=a(118),o=a.n(s),u=a(193),v=a(47),E=a(194),d=a.n(E);a(415);var p=function(e){var t=e.year,a=e.id,n=e.title,c=e.summary,l=e.poster,m=e.genres,s=e.rating,o=e.image,u=e.runtime;return r.a.createElement("div",{className:"movie"},r.a.createElement(i.b,{to:{pathname:"/movie/".concat(a),state:{year:t,title:n,summary:c,poster:l,genres:m,rating:s,image:o,runtime:u}}},r.a.createElement("img",{src:l,alt:n,title:n}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},n," ",r.a.createElement("span",{className:"movie_year"},"(",t,")")),r.a.createElement("h5",{className:"movie_rating"},"\u2605 ",s,"/10.0 \u2605"),r.a.createElement("ul",{className:"movie_genres"},m.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e)}))))))};a(420);var g=function(){var e=function(e){var t=Object(n.useState)([]),a=Object(v.a)(t,2),r=a[0],c=a[1],l=Object(n.useState)(!0),i=Object(v.a)(l,2),m=i[0],s=i[1],E=Object(n.useState)(""),p=Object(v.a)(E,2),g=p[0],f=p[1],b=function(){var t=Object(u.a)(o.a.mark((function t(){var a,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,d.a.get(e);case 3:a=t.sent,n=a.data.data.movies,c(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),f("Error!!!");case 11:return t.prev=11,s(!1),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(){return t.apply(this,arguments)}}();return Object(n.useEffect)((function(){b()}),[]),{movies:r,isLoading:m,error:g}}("https://yts.mx/api/v2/list_movies.json?sorting_by=rating"),t=e.movies,a=e.isLoading,c=e.error;return r.a.createElement("section",{className:"container"},a&&r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")),!a&&t&&!c&&r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(p,{key:e.id,id:e.id,summary:e.summary,year:e.year,title:e.title,poster:e.medium_cover_image,image:e.background_image,genres:e.genres,rating:e.rating,runtime:e.runtime})}))),!a&&c&&r.a.createElement("div",{className:"loader"},"Error\ud83d\ude02"))};a(421);var f=function(){return r.a.createElement("div",{className:"about"},"x")},b=(a(422),!1);var y=function(e){var t=e.location.state,a=e.history,c=Object(n.useState)([]),l=Object(v.a)(c,2),i=l[0],m=l[1],s=Object(n.useState)(""),o=Object(v.a)(s,2),u=o[0],E=o[1],d=function(){var e=Object(n.useRef)(null),t=function(t){!b&&e.current&&e.current.contains(t.target)&&(alert("Write your comment. (Maximum characters : 80)"),b=!0)};return Object(n.useEffect)((function(){document.addEventListener("click",t)}),[]),e}(),p=Object(n.useCallback)((function(e){E(e.target.value)}),[]),g=Object(n.useCallback)((function(e){if(0!==u.length){var t=i.concat(u);m(t),E("")}}),[u,i]);return void 0===t&&a.push("/"),t?r.a.createElement("div",{className:"detail"},r.a.createElement("h1",{className:"detail_title"},t.title," ",r.a.createElement("span",{className:"detail_year"},"(",t.year,")")),r.a.createElement("div",null),r.a.createElement("div",{className:"information"},r.a.createElement("img",{src:t.poster,alt:t.title,title:t.title,style:{width:"250px"}}),r.a.createElement("div",null,r.a.createElement("p",{className:"label_genres"},"Genre :\u3164"),r.a.createElement("ul",{className:"detail_genres"},t.genres.map((function(e,t){return r.a.createElement("li",{key:t,className:"genres_genre"},e,"\u3164")}))),r.a.createElement("div",{style:{float:"none"}},r.a.createElement("p",{className:"detail_runtime"},"Runtime :\u3164",t.runtime,"min"),r.a.createElement("p",{className:"detail_rating"},"Rating :\u3164",t.rating,"\u2605")))),r.a.createElement("div",{className:"detail_image"},r.a.createElement("img",{src:t.image,alt:t.title,title:t.title})),r.a.createElement("div",{className:"detail_summary"},r.a.createElement("h5",null,"Summary"),r.a.createElement("p",null,t.summary)),r.a.createElement("div",{className:"detail_comment"},r.a.createElement("span",null,"Comment\u3164"),r.a.createElement("input",{value:u,onChange:p,ref:d,maxLength:"80"}),r.a.createElement("button",{onClick:g},"\ud83d\udcdd"),r.a.createElement("ul",null,i.map((function(e,t){return r.a.createElement("li",{key:t},e)}))))):null};a(423);var N=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))};a(424);var _=function(){return r.a.createElement(i.a,null,r.a.createElement(N,null),r.a.createElement(m.a,{path:"/",exact:!0,component:g}),"  ",r.a.createElement(m.a,{path:"/about",component:f}),r.a.createElement(m.a,{path:"/movie/:id",component:y}))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.0aea4d34.chunk.js.map