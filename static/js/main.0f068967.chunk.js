(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{196:function(e,a,t){e.exports=t(425)},415:function(e,a,t){},420:function(e,a,t){},421:function(e,a,t){},422:function(e,a,t){},423:function(e,a,t){},424:function(e,a,t){},425:function(e,a,t){"use strict";t.r(a);t(197),t(206);var n=t(1),r=t.n(n),l=t(192),c=t.n(l),i=t(51),m=t(13),s=t(118),o=t.n(s),u=t(193),v=t(57),E=t(194),d=t.n(E);t(415);var p=function(e){var a=e.year,t=e.id,n=e.title,l=e.summary,c=e.poster,m=e.genres,s=e.rating,o=e.image,u=e.runtime;return r.a.createElement("div",{className:"movie"},r.a.createElement(i.b,{to:{pathname:"/movie/".concat(t),state:{year:a,title:n,summary:l,poster:c,genres:m,rating:s,image:o,runtime:u}}},r.a.createElement("img",{src:c,alt:n,title:n}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},n," ",r.a.createElement("span",{className:"movie_year"},"(",a,")")),r.a.createElement("h5",{className:"movie_rating"},"\u2605 ",s,"/10.0 \u2605"),r.a.createElement("ul",{className:"movie_genres"},m.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres_genre"},e)}))))))};t(420);var g=function(){var e=function(e){var a=Object(n.useState)([]),t=Object(v.a)(a,2),r=t[0],l=t[1],c=Object(n.useState)(!0),i=Object(v.a)(c,2),m=i[0],s=i[1],E=Object(n.useState)(""),p=Object(v.a)(E,2),g=p[0],f=p[1],h=function(){var a=Object(u.a)(o.a.mark((function a(){var t,n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,d.a.get(e);case 3:t=a.sent,n=t.data.data.movies,l(n),a.next=11;break;case 8:a.prev=8,a.t0=a.catch(0),f("Error!!!");case 11:return a.prev=11,s(!1),a.finish(11);case 14:case"end":return a.stop()}}),a,null,[[0,8,11,14]])})));return function(){return a.apply(this,arguments)}}();return Object(n.useEffect)((function(){h()}),[]),{movies:r,isLoading:m,error:g}}("https://yts.mx/api/v2/list_movies.json?sorting_by=rating"),a=e.movies,t=e.isLoading,l=e.error;return r.a.createElement("section",{className:"container"},t&&r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")),!t&&a&&!l&&r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(p,{key:e.id,id:e.id,summary:e.summary,year:e.year,title:e.title,poster:e.medium_cover_image,image:e.background_image,genres:e.genres,rating:e.rating,runtime:e.runtime})}))),!t&&l&&r.a.createElement("div",{className:"loader"},"Error\ud83d\ude02"))};t(421);var f=function(){var e=function(e){var a=Object(n.useState)(e),t=Object(v.a)(a,2),r=t[0],l=t[1];return{value:r,onChange:function(e){var a=e.target.value;l(a)}}}("");return console.log(e.value),r.a.createElement("div",null,r.a.createElement("h1",null,"Use Hooks"),r.a.createElement("br",null),r.a.createElement("input",{value:e.value,onChange:e.onChange,placeholder:"what is your name?"}))};t(422);var h=function(e){var a=e.location.state,t=e.history;return void 0===a&&t.push("/"),a?r.a.createElement("div",{className:"detail"},r.a.createElement("h1",{className:"detail_title"},a.title," ",r.a.createElement("span",{className:"detail_year"},"(",a.year,")")),r.a.createElement("div",{className:"information"},r.a.createElement("img",{src:a.poster,alt:a.title,title:a.title,style:{width:"250px"}}),r.a.createElement("div",null,r.a.createElement("p",{className:"label_genres"},"Genre :\u3164"),r.a.createElement("ul",{className:"detail_genres"},a.genres.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres_genre"},e,"\u3164")}))),r.a.createElement("div",{style:{float:"none"}},r.a.createElement("p",{className:"detail_runtime"},"Runtime :\u3164",a.runtime,"min"),r.a.createElement("p",{className:"detail_rating"},"Rating :\u3164",a.rating,"\u2605")))),r.a.createElement("div",{className:"detail_image"},r.a.createElement("img",{src:a.image,alt:a.title,title:a.title})),r.a.createElement("div",{className:"detail_summary"},r.a.createElement("h5",null,"Summary"),r.a.createElement("p",null,a.summary))):null};t(423);var y=function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(i.b,{to:"/"},"Home"),r.a.createElement(i.b,{to:"/about"},"About"))};t(424);var N=function(){return r.a.createElement(i.a,null,r.a.createElement(y,null),r.a.createElement(m.a,{path:"/",exact:!0,component:g}),"  ",r.a.createElement(m.a,{path:"/about",component:f}),r.a.createElement(m.a,{path:"/movie/:id",component:h}))};c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(N,null)),document.getElementById("root"))}},[[196,1,2]]]);
//# sourceMappingURL=main.0f068967.chunk.js.map