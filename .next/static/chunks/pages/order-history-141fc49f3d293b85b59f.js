(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[744],{5477:function(e,r,t){"use strict";var n=t(2122),a=t(1253),i=t(7294),s=(t(5697),t(6010)),o=t(4670),c=t(3871),l=44,d=i.forwardRef((function(e,r){var t=e.classes,o=e.className,d=e.color,h=void 0===d?"primary":d,u=e.disableShrink,f=void 0!==u&&u,p=e.size,m=void 0===p?40:p,x=e.style,j=e.thickness,Z=void 0===j?3.6:j,g=e.value,y=void 0===g?0:g,v=e.variant,b=void 0===v?"indeterminate":v,k=(0,a.Z)(e,["classes","className","color","disableShrink","size","style","thickness","value","variant"]),C={},O={},w={};if("determinate"===b||"static"===b){var D=2*Math.PI*((l-Z)/2);C.strokeDasharray=D.toFixed(3),w["aria-valuenow"]=Math.round(y),C.strokeDashoffset="".concat(((100-y)/100*D).toFixed(3),"px"),O.transform="rotate(-90deg)"}return i.createElement("div",(0,n.Z)({className:(0,s.Z)(t.root,o,"inherit"!==h&&t["color".concat((0,c.Z)(h))],{determinate:t.determinate,indeterminate:t.indeterminate,static:t.static}[b]),style:(0,n.Z)({width:m,height:m},O,x),ref:r,role:"progressbar"},w,k),i.createElement("svg",{className:t.svg,viewBox:"".concat(22," ").concat(22," ").concat(l," ").concat(l)},i.createElement("circle",{className:(0,s.Z)(t.circle,f&&t.circleDisableShrink,{determinate:t.circleDeterminate,indeterminate:t.circleIndeterminate,static:t.circleStatic}[b]),style:C,cx:l,cy:l,r:(l-Z)/2,fill:"none",strokeWidth:Z})))}));r.Z=(0,o.Z)((function(e){return{root:{display:"inline-block"},static:{transition:e.transitions.create("transform")},indeterminate:{animation:"$circular-rotate 1.4s linear infinite"},determinate:{transition:e.transitions.create("transform")},colorPrimary:{color:e.palette.primary.main},colorSecondary:{color:e.palette.secondary.main},svg:{display:"block"},circle:{stroke:"currentColor"},circleStatic:{transition:e.transitions.create("stroke-dashoffset")},circleIndeterminate:{animation:"$circular-dash 1.4s ease-in-out infinite",strokeDasharray:"80px, 200px",strokeDashoffset:"0px"},circleDeterminate:{transition:e.transitions.create("stroke-dashoffset")},"@keyframes circular-rotate":{"0%":{transformOrigin:"50% 50%"},"100%":{transform:"rotate(360deg)"}},"@keyframes circular-dash":{"0%":{strokeDasharray:"1px, 200px",strokeDashoffset:"0px"},"50%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-15px"},"100%":{strokeDasharray:"100px, 200px",strokeDashoffset:"-125px"}},circleDisableShrink:{animation:"none"}}}),{name:"MuiCircularProgress",flip:!1})(d)},4941:function(e,r,t){"use strict";t.d(r,{Z:function(){return U}});var n=t(5893),a=t(7757),i=t.n(a),s=t(2137),o=t(7294),c=t(9008),l=t(1664),d=t(7850),h=t(3457),u=t(5834),f=t(5258),p=t(8358),m=t(46),x=t(7812),j=t(9659),Z=t(2318),g=t(2764),y=t(2822),v=t(998),b=t(5517),k=t(5757),C=t(4741),O=t(9570),w=t(9009),D=t(282),E=t(5675),N=t(5639),S=t(3832),_=t(8884),I=t(7298),P=t(8995),A=t(530),T=t(2236),F=t(5877),H=t(6808),R=t.n(H),B=t(1163),z=t(7328),L=t(9669),M=t.n(L);function U(e){var r=e.title,t=e.description,a=e.children,H=(0,B.useRouter)(),L=(0,o.useContext)(T.y),U=L.state,W=L.dispatch,q=U.darkMode,$=U.cart,G=U.userInfo,K=(0,d.A)({typography:{h1:{fontSize:"1.6rem",fontWeight:400,margin:"1rem 0"},h2:{fontSize:"1.4rem",fontWeight:400,margin:"1rem 0"}},palette:{type:q?"dark":"light",primary:{main:"#f0c000"},secondary:{main:"#208080"}}}),Q=(0,A.Z)(),X=(0,o.useState)(!1),V=X[0],J=X[1],Y=function(){J(!1)},ee=(0,o.useState)([]),re=ee[0],te=ee[1],ne=(0,z.Ds)().enqueueSnackbar,ae=function(){var e=(0,s.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,M().get("/api/products/categories");case 3:r=e.sent,t=r.data,te(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),ne((0,F.b)(e.t0),{variant:"error"});case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),ie=(0,o.useState)(""),se=ie[0],oe=ie[1];(0,o.useEffect)((function(){ae()}),[]);var ce=(0,o.useState)(null),le=ce[0],de=ce[1],he=function(e,r){de(null),r&&H.push(r)};return(0,n.jsxs)("div",{children:[(0,n.jsxs)(c.default,{children:[(0,n.jsx)("title",{children:r?"".concat(r," - Next Amazona"):"Next Amazona"}),t&&(0,n.jsx)("meta",{name:"description",content:t})]}),(0,n.jsxs)(h.Z,{theme:K,children:[(0,n.jsx)(u.ZP,{}),(0,n.jsx)(f.Z,{position:"static",className:Q.navbar,children:(0,n.jsxs)(p.Z,{className:Q.toolbar,children:[(0,n.jsxs)(m.Z,{display:"flex",alignItems:"center",children:[(0,n.jsx)(x.Z,{edge:"start","aria-label":"open drawer",onClick:function(){J(!0)},className:Q.menuButton,children:(0,n.jsx)(_.Z,{className:Q.navbarButton})}),(0,n.jsx)(l.default,{href:"/",passHref:!0,children:(0,n.jsx)(j.Z,{children:(0,n.jsx)(Z.Z,{className:Q.brand,children:"amazona"})})})]}),(0,n.jsx)(g.ZP,{anchor:"left",open:V,onClose:Y,children:(0,n.jsxs)(y.Z,{children:[(0,n.jsx)(v.Z,{children:(0,n.jsxs)(m.Z,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[(0,n.jsx)(Z.Z,{children:"Shopping by category"}),(0,n.jsx)(x.Z,{"aria-label":"close",onClick:Y,children:(0,n.jsx)(I.Z,{})})]})}),(0,n.jsx)(b.Z,{light:!0}),re.map((function(e){return(0,n.jsx)(l.default,{href:"/search?category=".concat(e),passHref:!0,children:(0,n.jsx)(v.Z,{button:!0,component:"a",onClick:Y,children:(0,n.jsx)(k.Z,{primary:e})})},e)}))]})}),(0,n.jsx)("div",{className:Q.searchSection,children:(0,n.jsxs)("form",{onSubmit:function(e){e.preventDefault(),H.push("/search?query=".concat(se))},className:Q.searchForm,children:[(0,n.jsx)(C.Z,{name:"query",className:Q.searchInput,placeholder:"Search products",onChange:function(e){oe(e.target.value)}}),(0,n.jsx)(x.Z,{type:"submit",className:Q.iconButton,"aria-label":"search",children:(0,n.jsx)(P.Z,{})})]})}),(0,n.jsxs)("div",{children:[(0,n.jsx)(O.Z,{checked:q,onChange:function(){W({type:q?"DARK_MODE_OFF":"DARK_MODE_ON"});var e=!q;R().set("darkMode",e?"ON":"OFF")}}),(0,n.jsx)(l.default,{href:"/cart",passHref:!0,children:(0,n.jsx)(j.Z,{children:(0,n.jsx)(Z.Z,{component:"span",children:$.cartItems.length>0?(0,n.jsx)(w.Z,{color:"secondary",badgeContent:$.cartItems.length,children:"Cart"}):"Cart"})})}),G?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(D.Z,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){de(e.currentTarget)},className:Q.navbarButton,children:G.name}),(0,n.jsxs)(E.Z,{id:"simple-menu",anchorEl:le,keepMounted:!0,open:Boolean(le),onClose:he,children:[(0,n.jsx)(N.Z,{onClick:function(e){return he(0,"/profile")},children:"Profile"}),(0,n.jsx)(N.Z,{onClick:function(e){return he(0,"/order-history")},children:"Order Hisotry"}),G.isAdmin&&(0,n.jsx)(N.Z,{onClick:function(e){return he(0,"/admin/dashboard")},children:"Admin Dashboard"}),(0,n.jsx)(N.Z,{onClick:function(){de(null),W({type:"USER_LOGOUT"}),R().remove("userInfo"),R().remove("cartItems"),R().remove("shippinhAddress"),R().remove("paymentMethod"),H.push("/")},children:"Logout"})]})]}):(0,n.jsx)(l.default,{href:"/login",passHref:!0,children:(0,n.jsx)(j.Z,{children:(0,n.jsx)(Z.Z,{component:"span",children:"Login"})})})]})]})}),(0,n.jsx)(S.Z,{className:Q.main,children:a}),(0,n.jsx)("footer",{className:Q.footer,children:(0,n.jsx)(Z.Z,{children:"All rights reserved. Next Amazona."})})]})]})}},8137:function(e,r,t){"use strict";t.r(r);var n=t(5893),a=t(7757),i=t.n(a),s=t(2137),o=t(6156),c=t(9669),l=t.n(c),d=t(5152),h=t(1163),u=t(1664),f=t(7294),p=t(1749),m=t(8463),x=t(2822),j=t(998),Z=t(5757),g=t(2318),y=t(5477),v=t(6847),b=t(2302),k=t(3750),C=t(7394),O=t(8222),w=t(9613),D=t(282),E=t(5877),N=t(2236),S=t(4941),_=t(530);function I(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function P(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?I(Object(t),!0).forEach((function(r){(0,o.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):I(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function A(e,r){switch(r.type){case"FETCH_REQUEST":return P(P({},e),{},{loading:!0,error:""});case"FETCH_SUCCESS":return P(P({},e),{},{loading:!1,orders:r.payload,error:""});case"FETCH_FAIL":return P(P({},e),{},{loading:!1,error:r.payload})}}function T(){var e=(0,f.useContext)(N.y).state,r=(0,h.useRouter)(),t=(0,_.Z)(),a=e.userInfo,o=(0,f.useReducer)(A,{loading:!0,orders:[],error:""}),c=o[0],d=c.loading,I=c.error,P=c.orders,T=o[1];return(0,f.useEffect)((function(){a||r.push("/login"),function(){var e=(0,s.Z)(i().mark((function e(){var r,t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,T({type:"FETCH_REQUEST"}),e.next=4,l().get("/api/orders/history",{headers:{authorization:"Bearer ".concat(a.token)}});case 4:r=e.sent,t=r.data,T({type:"FETCH_SUCCESS",payload:t}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),T({type:"FETCH_FAIL",payload:(0,E.b)(e.t0)});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}()()}),[]),(0,n.jsx)(S.Z,{title:"Order History",children:(0,n.jsxs)(p.Z,{container:!0,spacing:1,children:[(0,n.jsx)(p.Z,{item:!0,md:3,xs:12,children:(0,n.jsx)(m.Z,{className:t.section,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(u.default,{href:"/profile",passHref:!0,children:(0,n.jsx)(j.Z,{button:!0,component:"a",children:(0,n.jsx)(Z.Z,{primary:"User Profile"})})}),(0,n.jsx)(u.default,{href:"/order-history",passHref:!0,children:(0,n.jsx)(j.Z,{selected:!0,button:!0,component:"a",children:(0,n.jsx)(Z.Z,{primary:"Order History"})})})]})})}),(0,n.jsx)(p.Z,{item:!0,md:9,xs:12,children:(0,n.jsx)(m.Z,{className:t.section,children:(0,n.jsxs)(x.Z,{children:[(0,n.jsx)(j.Z,{children:(0,n.jsx)(g.Z,{component:"h1",variant:"h1",children:"Order History"})}),(0,n.jsx)(j.Z,{children:d?(0,n.jsx)(y.Z,{}):I?(0,n.jsx)(g.Z,{className:t.error,children:I}):(0,n.jsx)(v.Z,{children:(0,n.jsxs)(b.Z,{children:[(0,n.jsx)(k.Z,{children:(0,n.jsxs)(C.Z,{children:[(0,n.jsx)(O.Z,{children:"ID"}),(0,n.jsx)(O.Z,{children:"DATE"}),(0,n.jsx)(O.Z,{children:"TOTAL"}),(0,n.jsx)(O.Z,{children:"PAID"}),(0,n.jsx)(O.Z,{children:"DELIVERED"}),(0,n.jsx)(O.Z,{children:"ACTION"})]})}),(0,n.jsx)(w.Z,{children:P.map((function(e){return(0,n.jsxs)(C.Z,{children:[(0,n.jsx)(O.Z,{children:e._id.substring(20,24)}),(0,n.jsx)(O.Z,{children:e.createdAt}),(0,n.jsxs)(O.Z,{children:["$",e.totalPrice]}),(0,n.jsx)(O.Z,{children:e.isPaid?"paid at ".concat(e.paidAt):"not paid"}),(0,n.jsx)(O.Z,{children:e.isDelivered?"delivered at ".concat(e.deliveredAt):"not delivered"}),(0,n.jsx)(O.Z,{children:(0,n.jsx)(u.default,{href:"/order/".concat(e._id),passHref:!0,children:(0,n.jsx)(D.Z,{variant:"contained",children:"Details"})})})]},e._id)}))})]})})})]})})})]})})}r.default=(0,d.default)((function(){return Promise.resolve(T)}),{ssr:!1})},5877:function(e,r,t){"use strict";t.d(r,{b:function(){return n}});t(7757),t(2137),t(6785),t(4155);var n=function(e){return e.response&&e.response.data&&e.response.data.message?e.response.data.message:e.message}},530:function(e,r,t){"use strict";var n=t(6156),a=(0,t(1120).Z)((function(e){return{navbar:{backgroundColor:"#203040","& a":{color:"#ffffff",marginLeft:10}},brand:{fontWeight:"bold",fontSize:"1.5rem"},grow:{flexGrow:1},main:{minHeight:"80vh"},footer:{marginTop:10,textAlign:"center"},section:{marginTop:10,marginBottom:10},form:{width:"100%",maxWidth:800,margin:"0 auto"},navbarButton:{color:"#ffffff",textTransform:"initial"},transparentBackgroud:{backgroundColor:"transparent"},error:{color:"#f04040"},fullWidth:{width:"100%"},reviewForm:{maxWidth:800,width:"100%"},reviewItem:{marginRight:"1rem",borderRight:"1px #808080 solid",paddingRight:"1rem"},toolbar:{justifyContent:"space-between"},menuButton:{padding:0},mt1:{marginTop:"1rem"},searchSection:(0,n.Z)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),searchForm:{border:"1px solid #ffffff",backgroundColor:"#ffffff",borderRadius:5},searchInput:{paddingLeft:5,color:"#000000","& ::placeholder":{color:"#606060"}},iconButton:{backgroundColor:"#f8c040",padding:5,borderRadius:"0 5px 5px 0","& span":{color:"#000000"}},sort:{marginRight:5},fullContainer:{height:"100vh"},mapInputBox:{position:"absolute",display:"flex",left:0,right:0,margin:"10px auto",width:300,height:40,"& input":{width:250}}}}));r.Z=a},1531:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order-history",function(){return t(8137)}])}},function(e){e.O(0,[774,961,453,537,627,888,179],(function(){return r=1531,e(e.s=r);var r}));var r=e.O();_N_E=r}]);