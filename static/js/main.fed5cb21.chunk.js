(this["webpackJsonpcmusic-quiz"]=this["webpackJsonpcmusic-quiz"]||[]).push([[0],{46:function(t,e,a){},48:function(t,e,a){},56:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),i=a(13),c=a.n(i),u=(a(46),a(25)),l=a.n(u),r=a(29),o=a(30),h=a(17),j=a(8),d=a(39),b=a(38),m=(a(48),a(31)),f=a.n(m),O=a(71),y=a(72),P=a(37),v=a.n(P),p=a(32),x=a.n(p),g=a(3),k=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={musics:null,isPlaying:!1,autoPlay:!0},n.handlePlay=n.handlePlay.bind(Object(j.a)(n)),n.handlePause=n.handlePause.bind(Object(j.a)(n)),n.URI="https://ia803209.us.archive.org/10/items/JsonSaSlicicama/classical-music-json.json",n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.loadData(this.URI)}},{key:"loadData",value:function(){var t=Object(r.a)(l.a.mark((function t(e){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,window.fetch(e).then((function(t){return t.json()}));case 2:a=t.sent,this.setState({musics:a});case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"handlePause",value:function(){this.setState({autoPlay:!1})}},{key:"handlePlay",value:function(){this.setState({autoPlay:!0})}},{key:"render",value:function(){if(!this.state.musics)return Object(g.jsx)("div",{});var t,e=Math.floor(Math.random()*this.state.musics.length),a=this.state.musics[e].url,n=this.state.musics[e].title,s=this.state.musics[e].image_url;return t=this.state.autoPlay?Object(g.jsx)(x.a,{onClick:this.handlePlay}):Object(g.jsx)(v.a,{onClick:this.handlePause}),Object(g.jsxs)("div",{class:"center",children:[Object(g.jsx)("h1",{children:"enjoy classcal music!"}),Object(g.jsx)(f.a,{src:a,autoPlay:!0}),Object(g.jsxs)(O.a,{container:!0,direction:"row",alignItems:"center",class:"mui",children:[Object(g.jsx)(y.a,{"aria-label":"Play/pause",children:t}),Object(g.jsx)("h2",{children:"title"}),Object(g.jsx)("p",{children:n}),Object(g.jsx)("img",{src:s,alt:"music_image"})]})]})}}]),a}(s.a.Component),w=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,73)).then((function(e){var a=e.getCLS,n=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;a(t),n(t),s(t),i(t),c(t)}))};c.a.render(Object(g.jsx)(s.a.StrictMode,{children:Object(g.jsx)(k,{})}),document.getElementById("root")),w()}},[[56,1,2]]]);
//# sourceMappingURL=main.fed5cb21.chunk.js.map