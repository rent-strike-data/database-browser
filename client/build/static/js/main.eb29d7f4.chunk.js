(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{381:function(e,t,n){e.exports=n(494)},386:function(e,t,n){},494:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(15),o=n.n(i),s=(n(386),n(373)),c=n(103),l=n(355),d=n(356),f=n(374),u=n(375),p=n(357),h=n.n(p),g=n(358),m=n.n(g),b=n(372),w=n.n(b),O=n(369),j=n.n(O),y=n(368),v=n.n(y),E=n(370),P=n.n(E),k=n(365),R=n.n(k),S=n(366),x=n.n(S),A=n(367),N=n.n(A),F=n(371),T=n.n(F),W={Filter:Object(a.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(x.a,Object.assign({},e,{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(N.a,Object.assign({},e,{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(v.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(j.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return r.a.createElement(P.a,Object.assign({},e,{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return r.a.createElement(T.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return r.a.createElement(w.a,Object.assign({},e,{ref:t}))}))},z=[{title:"Property Id",field:"p_id",hidden:!1},{title:"Address",field:"address",hidden:!1},{title:"City",field:"city",hidden:!1},{title:"Zip",field:"zip",hidden:!1},{title:"Zip +4",field:"zip4",hidden:!0},{title:"Type",field:"type",hidden:!0},{title:"Owner",field:"owner",hidden:!1},{title:"Owner Address",field:"owner_address",hidden:!1}],B=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,properties:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getProperties()}},{key:"componentDidUpdate",value:function(e,t){}},{key:"getProperties",value:function(){var e=this,t=Object(c.a)({},this.state);t.loading=!0,this.setState(Object(c.a)({},t)),h.a.get("".concat("https://rent-strike-data.herokuapp.com/","/api/properties")).then((function(t){if(t.status>299||t.status<200){console.log(t.data),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config);var n=Object(c.a)({},e.state);n.loading=!1,e.setState(Object(c.a)({},n))}else{var a=Object(c.a)({},e.state);a.loading=!1,a.properties=Object(s.a)(t.data),e.setState(Object(c.a)({},a))}})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{"data-test":"component-submissions-table",className:"root"},r.a.createElement("div",{className:"section"},r.a.createElement("h2",{className:"head",style:{paddingTop:20,textAlign:"center",width:"100%"}},"Portland Properties"),r.a.createElement("h3",{className:"subhead",style:{paddingTop:20,textAlign:"center",width:"100%"}},"Search/Filter by address to find property owners. Search/Filter by owner name to find all properties owned by that owner."),r.a.createElement("div",{className:"gridWrapper"},r.a.createElement(m.a,{style:{width:"100%",margin:"0 20px"},columns:z,isLoading:this.state.loading,data:this.state.properties,title:"Portland Properties",options:{filtering:!0,sorting:!0},icons:W}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[381,1,2]]]);
//# sourceMappingURL=main.eb29d7f4.chunk.js.map