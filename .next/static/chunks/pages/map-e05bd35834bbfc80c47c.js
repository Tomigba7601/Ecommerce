(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[538],{7320:function(n,t,e){"use strict";e.r(t);var r=e(5893),o=e(7757),a=e.n(o),i=e(2137),s=e(1163),u=e(5152),c=e(530),l=e(2236),d=e(7294),f=e(9669),p=e.n(f),g=e(7328),h=e(5477),m=e(9744),v=e(5877),x={lat:45.516,lng:-73.56},b=["places"];function w(){var n=(0,s.useRouter)(),t=(0,c.Z)(),e=(0,g.Ds)().enqueueSnackbar,o=(0,d.useContext)(l.y),u=o.state,f=o.dispatch,w=u.userInfo,y=(0,d.useState)(""),k=y[0],_=y[1];(0,d.useEffect)((function(){(function(){var n=(0,i.Z)(a().mark((function n(){var t,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p()("/api/keys/google",{headers:{authorization:"Bearer ".concat(w.token)}});case 3:t=n.sent,r=t.data,_(r),P(),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),e((0,v.b)(n.t0),{variant:"error"});case 12:case"end":return n.stop()}}),n,null,[[0,9]])})));return function(){return n.apply(this,arguments)}})()()}),[]);var C=(0,d.useState)(x),R=C[0],S=C[1],j=(0,d.useState)(R),I=j[0],N=j[1],P=function(){navigator.geolocation?navigator.geolocation.getCurrentPosition((function(n){S({lat:n.coords.latitude,lng:n.coords.longitude}),N({lat:n.coords.latitude,lng:n.coords.longitude})})):e("Geolocation is not supported by this browser",{variant:"error"})},E=(0,d.useRef)(null),B=(0,d.useRef)(null),A=(0,d.useRef)(null);return k?(0,r.jsx)("div",{className:t.fullContainer,children:(0,r.jsx)(m.KJ,{libraries:b,googleMapsApiKey:k,children:(0,r.jsxs)(m.b6,{id:"sample-map",mapContainerStyle:{height:"100%",width:"100%"},center:R,zoom:15,onLoad:function(n){E.current=n},onIdle:function(){N({lat:E.current.center.lat(),lng:E.current.center.lng()})},children:[(0,r.jsx)(m.Zk,{onLoad:function(n){B.current=n},onPlacesChanged:function(){var n=B.current.getPlaces()[0].geometry.location;S({lat:n.lat(),lng:n.lng()}),N({lat:n.lat(),lng:n.lng()})},children:(0,r.jsxs)("div",{className:t.mapInputBox,children:[(0,r.jsx)("input",{type:"text",placeholder:"Enter your address"}),(0,r.jsx)("button",{type:"button",className:"primary",onClick:function(){var t=B.current.getPlaces();t&&1===t.length&&(f({type:"SAVE_SHIPPING_ADDRESS_MAP_LOCATION",payload:{lat:I.lat,lng:I.lng,address:t[0].formatted_address,name:t[0].name,vicinity:t[0].vicinity,googleAddressId:t[0].id}}),e("location selected successfully",{variant:"success"}),n.push("/shipping"))},children:"Confirm"})]})}),(0,r.jsx)(m.Jx,{position:I,onLoad:function(n){A.current=n}})]})})}):(0,r.jsx)(h.Z,{})}t.default=(0,u.default)((function(){return Promise.resolve(w)}),{ssr:!1})},5877:function(n,t,e){"use strict";e.d(t,{b:function(){return r}});e(7757),e(2137),e(6785),e(4155);var r=function(n){return n.response&&n.response.data&&n.response.data.message?n.response.data.message:n.message}},530:function(n,t,e){"use strict";var r=e(6156),o=(0,e(1120).Z)((function(n){return{navbar:{backgroundColor:"#203040","& a":{color:"#ffffff",marginLeft:10}},brand:{fontWeight:"bold",fontSize:"1.5rem"},grow:{flexGrow:1},main:{minHeight:"80vh"},footer:{marginTop:10,textAlign:"center"},section:{marginTop:10,marginBottom:10},form:{width:"100%",maxWidth:800,margin:"0 auto"},navbarButton:{color:"#ffffff",textTransform:"initial"},transparentBackgroud:{backgroundColor:"transparent"},error:{color:"#f04040"},fullWidth:{width:"100%"},reviewForm:{maxWidth:800,width:"100%"},reviewItem:{marginRight:"1rem",borderRight:"1px #808080 solid",paddingRight:"1rem"},toolbar:{justifyContent:"space-between"},menuButton:{padding:0},mt1:{marginTop:"1rem"},searchSection:(0,r.Z)({display:"none"},n.breakpoints.up("md"),{display:"flex"}),searchForm:{border:"1px solid #ffffff",backgroundColor:"#ffffff",borderRadius:5},searchInput:{paddingLeft:5,color:"#000000","& ::placeholder":{color:"#606060"}},iconButton:{backgroundColor:"#f8c040",padding:5,borderRadius:"0 5px 5px 0","& span":{color:"#000000"}},sort:{marginRight:5},fullContainer:{height:"100vh"},mapInputBox:{position:"absolute",display:"flex",left:0,right:0,margin:"10px auto",width:300,height:40,"& input":{width:250}}}}));t.Z=o},2392:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/map",function(){return e(7320)}])}},function(n){n.O(0,[774,961,453,682,888,179],(function(){return t=2392,n(n.s=t);var t}));var t=n.O();_N_E=t}]);