(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{381:function(e,t,n){e.exports=n(494)},386:function(e,t,n){},494:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),i=n.n(o),s=(n(386),n(373)),c=n(103),l=n(355),d=n(356),f=n(374),u=n(375),g=n(357),p=n.n(g),h=n(358),m=n.n(h),b=n(372),O=n.n(b),w=n(369),j=n.n(w),y=n(368),E=n.n(y),v=n(370),R=n.n(v),P=n(365),A=n.n(P),S=n(366),k=n.n(S),T=n(367),x=n.n(T),N=n(371),F=n.n(N),D={Filter:Object(a.forwardRef)((function(e,t){return r.a.createElement(A.a,Object.assign({},e,{ref:t}))})),FirstPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(k.a,Object.assign({},e,{ref:t}))})),LastPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(x.a,Object.assign({},e,{ref:t}))})),NextPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(E.a,Object.assign({},e,{ref:t}))})),PreviousPage:Object(a.forwardRef)((function(e,t){return r.a.createElement(j.a,Object.assign({},e,{ref:t}))})),ResetSearch:Object(a.forwardRef)((function(e,t){return r.a.createElement(R.a,Object.assign({},e,{ref:t}))})),Search:Object(a.forwardRef)((function(e,t){return r.a.createElement(F.a,Object.assign({},e,{ref:t}))})),SortArrow:Object(a.forwardRef)((function(e,t){return r.a.createElement(O.a,Object.assign({},e,{ref:t}))}))},W=[{title:"Property Id",field:"p_id",hidden:!1},{title:"Address",field:"address",hidden:!1},{title:"City",field:"city",hidden:!1},{title:"Zip",field:"zip",hidden:!1},{title:"Zip +4",field:"zip4",hidden:!0},{title:"Type",field:"type",hidden:!0},{title:"Owner",field:"owner",hidden:!1},{title:"Owner Address",field:"owner_address",hidden:!1}],z=function(e){Object(u.a)(n,e);var t=Object(f.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={loading:!1,properties:[]},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getProperties()}},{key:"componentDidUpdate",value:function(e,t){}},{key:"getProperties",value:function(){var e=this,t=Object(c.a)({},this.state);t.loading=!0,this.setState(Object(c.a)({},t)),p.a.get("".concat("https://rent-strike-data.herokuapp.com","/api/properties")).then((function(t){if(t.status>299||t.status<200){console.log("STATUS ERROR"),console.log(t.data),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config);var n=Object(c.a)({},e.state);n.loading=!1,e.setState(Object(c.a)({},n))}else if(Array.isArray(t.data)&&t.data.length){var a=Object(c.a)({},e.state);a.loading=!1,a.properties=Object(s.a)(t.data),e.setState(Object(c.a)({},a))}else console.log("DATA TYPE ERROR"),console.log(t.data),console.log(t.status),console.log(t.statusText),console.log(t.headers),console.log(t.config)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{"data-test":"component-submissions-table",className:"root"},r.a.createElement("div",{className:"section"},r.a.createElement("h2",{className:"head",style:{paddingTop:20,textAlign:"center",width:"100%"}},"Portland Properties"),r.a.createElement("h3",{className:"subhead",style:{paddingTop:20,textAlign:"center",width:"100%"}},"Search/Filter by address to find property owners."),r.a.createElement("h3",{className:"subhead",style:{paddingTop:20,textAlign:"center",width:"100%"}},"Search/Filter by owner name to find all properties owned by that owner."),r.a.createElement("div",{className:"gridWrapper"},r.a.createElement(m.a,{style:{width:"100%",margin:"0 20px"},columns:W,isLoading:this.state.loading,data:this.state.properties.length?this.state.properties:[],title:"Portland Properties",options:{filtering:!0,sorting:!0},icons:D}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[381,1,2]]]);
//# sourceMappingURL=main.5ef1e391.chunk.js.map