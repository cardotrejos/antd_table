(this.webpackJsonpantd_table=this.webpackJsonpantd_table||[]).push([[0],{135:function(e,t,a){},162:function(e,t,a){e.exports=a.p+"static/media/logo.327e4fbb.png"},169:function(e,t,a){e.exports=a(343)},343:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),i=a.n(c),o=a(78),l=a(60),u=a(137),s=a(138),d=a(165),m=a(166),g=a(101),f=a.n(g),p=a(140),b=a(141),E=a.n(b),h=Object(o.b)({name:"data",initialState:{loading:!1,hasErrors:!1,data:[]},reducers:{getData:function(e){e.loading=!0},getDataSuccess:function(e,t){var a=t.payload;e.data=a,e.loading=!1,e.hasErrors=!1},getDataFailure:function(e){e.loading=!1,e.hasErrors=!0}}}),x=h.actions,v=x.getData,y=x.getDataSuccess,j=x.getDataFailure,O=function(e){return e.data},k=h.reducer;function C(){return function(){var e=Object(p.a)(f.a.mark((function e(t){var a,n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(v()),e.prev=1,e.next=4,E.a.get("https://api.eia.gov/series/?api_key=f8e294cce8855b7fa91bbbd11f0e31e4&series_id=ELEC.GEN.ALL-CA-97.M");case 4:return a=e.sent,e.next=7,a.data.series;case 7:n=e.sent,r=n.map((function(e){return e.data}))[0],c=r.map((function(e){return{date:e[0],generate:e[1],unit:"kWa"}})),t(y(c)),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),t(j());case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}()}var D=a(36),w=a(345),N=(a(111),function(){var e=Object(l.b)(),t=Object(l.c)(O),a=t.data,c=t.loading,i=t.hasErrors;Object(n.useEffect)((function(){e(C())}),[e]);return r.a.createElement("section",null,r.a.createElement("h1",null,"Datos"),function(){if(c)return r.a.createElement("p",null,"Cargando datos...");if(i)return r.a.createElement("p",null,"No se pueden mostrar los datos.");var t=a.reduce((function(e,t){return(!e.max||e.max<t.generate)&&(e.max=t.generate),(!e.min||e.min>t.generate)&&(e.min=t.generate),e}),{min:null,max:null});console.log(t);return r.a.createElement("div",null,r.a.createElement(D.a,{style:{margin:"20px"},type:"primary",onClick:function(){return e(C())}},"Actualizar"),r.a.createElement(w.a,{rowKey:"date",rowClassName:function(e,a){var n=[];return e.generate===t.min&&n.push("min"),e.generate===t.max&&n.push("max"),n.join(" ")},bordered:!0,dataSource:a,columns:[{title:"Fecha",dataIndex:"date",width:"30%"},{title:"Generaci\xf3n",dataIndex:"generate",defaultSortOrder:["ascend"],sorter:function(e,t){return e.generate-t.generate}},{title:"Unidades",dataIndex:"unit"}]}))}())}),A=(a(135),a(162)),S=a.n(A),F=a(344),I=F.a.Header,_=F.a.Content,L=F.a.Footer,G=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(F.a,{className:"layout"},r.a.createElement(I,null,r.a.createElement("div",{className:"logo"},r.a.createElement("img",{src:S.a,alt:"logo"}))),r.a.createElement(_,{style:{padding:"0 50px"}},r.a.createElement("div",{className:"site-layout-content"},r.a.createElement("h1",null,"Tabla generaci\xf3n de energ\xeda"),r.a.createElement(N,null))),r.a.createElement(L,{style:{textAlign:"center"}},"Ant Design \xa92018 Created by Ricardo Trejos"))}}]),a}(n.Component),J=a(14),T=Object(J.c)({data:k}),z=Object(o.a)({reducer:T});i.a.render(r.a.createElement(l.a,{store:z},r.a.createElement(G,null)),document.getElementById("root"))}},[[169,1,2]]]);
//# sourceMappingURL=main.c78dc3ec.chunk.js.map