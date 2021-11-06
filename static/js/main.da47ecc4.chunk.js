(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{109:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(35),i=a.n(r),s=(a(109),a(16)),l=a(13),o=a(88),d=a.n(o),b=a(197),j=a(193),u=a(198),h=a(199),g=a(200),O=a(201),x=a(202),m=a(179),f=a(203),p=a(204),y=a(195),v=a(196),k=a(181),P=a(186),S=a(1);var C=function(e){var t=e.type,a="rgb(0 0 0 / 8%)",n="#fff";switch(t){case"Grass":a="#7c5";break;case"Poison":a="#a59";break;case"Fire":a="#f42";break;case"Flying":a="#89f";break;case"Water":a="#39f";break;case"Bug":a="#ab2";break;case"Normal":a="#aa9";break;case"Electric":a="#fc3";break;case"Ground":a="#db5";break;case"Fairy":case"Fighting":case"Psychic":a="#e9e";break;case"Rock":a="#ba6";break;case"Ghost":a="#66b";break;case"Dragon":a="#76e";break;default:n="#000"}return Object(S.jsx)(P.a,{label:t,style:{color:n,backgroundColor:a,marginLeft:"3px"}})},B=a(190),q=a(140),F=a(183);var w=function(e){var t=e.query,a=e.handleChange;return Object(S.jsxs)(B.a,{sx:{pl:{sm:2},pr:{xs:1,sm:1}},children:[Object(S.jsx)(q.a,{sx:{flex:"1 1 100%"},variant:"h6",id:"tableTitle",component:"div",children:"Pokedex"}),Object(S.jsx)(F.a,{label:"Filter by name",value:t,onChange:a,variant:"outlined",size:"small",fullWidth:!0})]})},D=a(194),I=a(189),R=[{id:"id",numeric:!0,disablePadding:!1,label:"ID"},{id:"sprite",numeric:!0,disablePadding:!1,label:"Sprite"},{id:"name",numeric:!0,disablePadding:!1,label:"Name"},{id:"types",numeric:!0,disablePadding:!1,label:"Types"}];var T=function(e){var t=e.order,a=e.orderBy,n=e.onRequestSort;return Object(S.jsx)(D.a,{children:Object(S.jsx)(y.a,{children:R.map((function(e){return Object(S.jsx)(v.a,{align:e.numeric?"right":"left",padding:e.disablePadding?"none":"normal",sortDirection:a===e.id&&t,children:Object(S.jsx)(I.a,{active:a===e.id,direction:a===e.id?t:"asc",onClick:(c=e.id,function(e){n(e,c)}),disabled:"sprite"==e.id||"types"==e.id,children:e.label})},e.id);var c}))})})};var E=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(0),i=Object(l.a)(r,2),o=i[0],P=i[1],B=Object(n.useState)(!0),q=Object(l.a)(B,2),F=q[0],D=q[1],I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.column,n=e.orderBy,r=e.offset,i=e.limit,l=e.query;D(!0),d.a.get("https://expressjs-pokedex.herokuapp.com/pokedex",{params:{column:t,orderBy:n,offset:r,limit:i,query:l}}).then((function(e){console.log(e.data),P(+e.data.count),c(r&&i?[].concat(Object(s.a)(a),Object(s.a)(e.data.data)):e.data.data)})).catch(console.log).finally((function(){return D(!1)}))};Object(n.useEffect)((function(){I()}),[]);var R=Object(n.useState)("asc"),E=Object(l.a)(R,2),G=E[0],L=E[1],W=Object(n.useState)("id"),z=Object(l.a)(W,2),J=z[0],M=z[1],N=Object(n.useState)(0),_=Object(l.a)(N,2),H=_[0],A=_[1],K=Object(n.useState)(5),Q=Object(l.a)(K,2),U=Q[0],V=Q[1],X=H>0?Math.max(0,(1+H)*U-a.length):0,Y=Object(n.useState)(0),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1],te=Object(n.useState)(""),ae=Object(l.a)(te,2),ne=ae[0],ce=ae[1];return Object(S.jsx)(b.a,{sx:{width:"100%",display:"flex",justifyContent:"center"},children:Object(S.jsxs)(j.a,{sx:{width:{xs:"100%",md:"90%",lg:"70%"},mb:2},children:[Object(S.jsx)(w,{query:ne,handleChange:function(e){var t=e.target.value;ce(t),A(0),I({column:J,orderBy:G,limit:U,query:t})}}),Object(S.jsx)(u.a,{children:Object(S.jsxs)(h.a,{sx:{minWidth:750,position:"relative"},size:"medium",children:[F&&Object(S.jsx)(g.a,{style:{position:"absolute",left:"50%",top:"50%"}}),Object(S.jsx)(T,{order:G,orderBy:J,onRequestSort:function(e,t){var a=J===t&&"asc"===G?"desc":"asc";L(a),M(t),A(0),I({column:t,orderBy:a,query:ne})}}),Object(S.jsxs)(O.a,{style:{height:!a.length||a.length>=5?80.6*U+"px":null},children:[a.slice(H*U,H*U+U).map((function(e){return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(x.a,{open:$==e.id,onClose:function(){return ee(0)},children:[Object(S.jsx)(m.a,{children:e.name}),Object(S.jsxs)(f.a,{children:[Object(S.jsx)("img",{src:e.img_large,alt:"no internet",style:{width:"100%",backgroundColor:"#ebebeb",minHeight:"100px"}}),Object(S.jsx)(p.a,{children:e.description})]})]}),Object(S.jsxs)(y.a,{onClick:function(t){return ee(e.id)},style:{cursor:"pointer"},hover:!0,children:[Object(S.jsx)(v.a,{align:"right",children:e.id}),Object(S.jsx)(v.a,{align:"right",children:Object(S.jsx)("img",{src:e.img_small,alt:"no internet"})}),Object(S.jsx)(v.a,{align:"right",children:e.name}),Object(S.jsx)(v.a,{align:"right",children:e.types.map((function(e){return Object(S.jsx)(C,{type:e},e)}))})]})]})})),X>0&&Object(S.jsx)(y.a,{style:{height:53*X},children:Object(S.jsx)(v.a,{colSpan:6})})]})]})}),Object(S.jsx)(k.a,{rowsPerPageOptions:[5,10,25],component:"div",count:o,rowsPerPage:U,page:H,onPageChange:function(e,t){A(t),a.length==t*U&&I({column:J,orderBy:G,offset:a.length,limit:U,query:ne})},onRowsPerPageChange:function(e){var t=parseInt(e.target.value,10);V(t),A(0),I({column:J,orderBy:G,limit:t,query:ne})}})]})})},G=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,205)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),r(e),i(e)}))};i.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(E,{})}),document.getElementById("root")),G()}},[[136,1,2]]]);
//# sourceMappingURL=main.da47ecc4.chunk.js.map