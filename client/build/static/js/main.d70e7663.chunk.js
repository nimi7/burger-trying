(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{163:function(e,t,c){},164:function(e,t,c){},181:function(e,t,c){},188:function(e,t,c){},189:function(e,t,c){},201:function(e,t){},203:function(e,t){},214:function(e,t){},216:function(e,t){},242:function(e,t){},244:function(e,t){},245:function(e,t){},250:function(e,t){},252:function(e,t){},271:function(e,t){},283:function(e,t){},286:function(e,t){},291:function(e,t){},293:function(e,t){},306:function(e,t,c){},310:function(e,t,c){},314:function(e,t,c){"use strict";c.r(t);var s=c(0),i=c(1),n=c.n(i),a=c(35),r=c.n(a),l=(c(163),c.p,c(164),c(9)),j=c(15),d=c.n(j),o=c(317),b=c(318),h=c(154),O=c.n(h),x=c(24);c(181);function u(e){var t=Object(i.useState)([]),c=Object(l.a)(t,2),n=c[0],a=c[1],r=Object(i.useState)(""),j=Object(l.a)(r,2),h=j[0],u=j[1];Object(i.useEffect)((function(){d.a.get("/User").then((function(e){a(e.data),console.log("this is server call!!!!")})).catch((function(e){console.log(e)}))}),n,console.log("this is server call!!!!!"));var m=function(){window.scroll(0,0)},p=function(e){d.a.delete("/User/"+e)};return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Get User "}),JSON.stringify(e.user),n.map((function(e){return Object(s.jsx)("div",{className:"UserCard",children:Object(s.jsxs)(o.a,{children:[Object(s.jsxs)(o.a.Body,{children:[Object(s.jsxs)(x.b,{onClick:m,to:{pathname:"/User/".concat(e._id),state:{name:e.name,last:e.last,email:e.email,id:e._id,pic:e.pic,date:e.date}},children:[" ",Object(s.jsxs)("h5",{children:[e.name," ",e.last]})]}),Object(s.jsx)("p",{children:Object(s.jsx)("h3",{children:e.email})}),Object(s.jsxs)("h6",{children:[" ",O()(e.date).format("HH:mm:ss")," ",Object(s.jsx)("strong",{children:"  : \u05e2\u05d5\u05d3\u05db\u05df \u05dc\u05d0\u05d7\u05e8\u05d5\u05e0\u05d4  "})," "]}),Object(s.jsx)("h6",{children:"  "}),Object(s.jsxs)(x.b,{onClick:m,to:{pathname:"/User/edit/".concat(e._id),state:{name:e.name,last:e.last,email:e.email,id:e._id,pic:e.pic,date:e.date}},children:[" ",Object(s.jsx)(b.a,{variant:"success",children:"Update"})]}),Object(s.jsx)(b.a,{variant:"danger",onClick:function(){return p(e._id)},children:"Delete"})]}),Object(s.jsx)("img",{width:220,height:200,className:"ml-3",src:e.pic,alt:"Generic placeholder"})]})})})),Object(s.jsx)("h1",{children:" Search Try"}),Object(s.jsx)("input",{type:"text",onChange:function(e){u(e.target.value)},placeholder:"Search..."}),n.filter((function(e,t){return""==h||e.name.toLowerCase().includes(h.toLowerCase())||e.last.toLowerCase().includes(h.toLowerCase())?e:void 0})).map((function(e,t){return Object(s.jsx)("div",{className:"UserCard",children:Object(s.jsxs)(o.a,{children:[Object(s.jsxs)(o.a.Body,{children:[Object(s.jsxs)(x.b,{onClick:m,to:{pathname:"/User/".concat(e._id),state:{name:e.name,last:e.last,email:e.email,id:e._id,pic:e.pic,date:e.date}},children:[" ",Object(s.jsxs)("h5",{children:[e.name," ",e.last]})]}),Object(s.jsx)("p",{children:Object(s.jsx)("h3",{children:e.email})}),Object(s.jsxs)("h6",{children:[e.date," ",Object(s.jsx)("strong",{children:"  : \u05e2\u05d5\u05d3\u05db\u05df \u05dc\u05d0\u05d7\u05e8\u05d5\u05e0\u05d4  "})," "]}),Object(s.jsxs)(x.b,{onClick:m,to:{pathname:"/User/edit/".concat(e._id),state:{name:e.name,last:e.last,email:e.email,id:e._id,pic:e.pic,date:e.date}},children:[" ",Object(s.jsx)(b.a,{variant:"success",children:"Update"})]}),Object(s.jsx)(b.a,{variant:"danger",onClick:function(){return p(e._id)},children:"Delete"})]}),Object(s.jsx)("img",{width:220,height:200,className:"ml-3",src:e.pic,alt:"Generic placeholder"})]})})}))]})}c(188);function m(){return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{class:"login-box",children:[Object(s.jsx)("h2",{children:"Creat User "}),Object(s.jsxs)("form",{method:"POST",action:"/User",children:[Object(s.jsxs)("div",{class:"user-box",children:[Object(s.jsx)("input",{type:"text",name:"name",placeholder:"Enter Name...",required:""}),Object(s.jsx)("label",{children:"First Name"})]}),Object(s.jsxs)("div",{class:"user-box",children:[Object(s.jsx)("input",{type:"text",name:"last",placeholder:"Enter Last name...",required:""}),Object(s.jsx)("label",{children:"Last Name"})]}),Object(s.jsxs)("div",{class:"user-box",children:[Object(s.jsx)("input",{type:"text",name:"email",placeholder:"Enter Email...",required:""}),Object(s.jsx)("label",{children:"Email"})]}),Object(s.jsxs)("div",{class:"user-box",children:[Object(s.jsx)("input",{type:"text",name:"pic",placeholder:"Enter Pic Url..",required:""}),Object(s.jsx)("label",{children:"Picture"})]}),Object(s.jsx)("div",{class:"user-box",children:Object(s.jsx)(b.a,{variant:"primary",type:"submit",children:" Creact User"})})]})]})})}c(189),c(190);function p(e){var t=Object(i.useState)(!0),c=Object(l.a)(t,2),n=c[0],a=c[1],r=Object(i.useState)([]),j=Object(l.a)(r,2),o=j[0],b=j[1];return Object(i.useEffect)((function(){d.a.get("/User").then((function(e){b(e.data),console.log("this is server call!!!!")})).catch((function(e){console.log(e)}))}),o,console.log("this is server call!!!!!")),console.log("getUser",o),console.log("process.env.NODE_ENV","production"),console.log("process.env.PORT",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).PORT),console.log("process.env.URI",Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).URI),Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:" WellCome To HomePage"}),Object(s.jsx)("button",{onClick:function(){a((function(e){return!e}))},children:"Click To Hide"}),n&&Object(s.jsx)("h1",{children:"Shut The Fuck up sss"}),o.map((function(e){return Object(s.jsxs)("div",{children:[" ",e.name," + ",e.last," "]})}))]})}c(305),c(306);var f=function(e){var t=e.location&&e.location.state||{},c=t.id,n=t.name,a=t.last,r=t.email,j=t.pic,o=t.date,h=Object(i.useState)(n),O=Object(l.a)(h,2),u=(O[0],O[1],Object(i.useState)(a)),m=Object(l.a)(u,2),p=(m[0],m[1],Object(i.useState)(r)),f=Object(l.a)(p,2);f[0],f[1];return Object(s.jsx)("div",{class:"page-content page-container",id:"page-content",children:Object(s.jsx)("div",{class:"padding",children:Object(s.jsx)("div",{class:"row container d-flex justify-content-center",children:Object(s.jsx)("div",{class:"col-xl-6 col-md-12",children:Object(s.jsx)("div",{class:"card user-card-full",children:Object(s.jsxs)("div",{class:"row m-l-0 m-r-0",children:[Object(s.jsx)("div",{class:"col-sm-4 bg-c-lite-green user-profile",children:Object(s.jsxs)("div",{class:"card-block text-center text-white",children:[Object(s.jsxs)("div",{class:"m-b-25",children:[" ",Object(s.jsx)("img",{src:j,width:"150rem",class:"img-radius",alt:"User-Profile-Image"})," "]}),Object(s.jsx)("h6",{class:"f-w-600",children:"Hembo Tingor"}),Object(s.jsx)("p",{children:"Web Designer"})," ",Object(s.jsx)("i",{class:" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"})]})}),Object(s.jsx)("div",{class:"col-sm-8",children:Object(s.jsxs)("div",{class:"card-block",children:[Object(s.jsxs)("h6",{class:"m-b-20 p-b-5 b-b-default f-w-600",children:[n," ",a]}),Object(s.jsxs)("div",{class:"row",children:[Object(s.jsxs)("div",{class:"col-sm-6",children:[Object(s.jsx)("p",{class:"m-b-10 f-w-600",children:"Email"}),Object(s.jsx)("h6",{class:"text-muted f-w-400",children:r})]}),Object(s.jsxs)("div",{class:"col-sm-6",children:[Object(s.jsx)("p",{class:"m-b-10 f-w-600",children:"Phone"}),Object(s.jsx)("h6",{class:"text-muted f-w-400",children:"98979989898"})]})]}),Object(s.jsxs)("h6",{class:"m-b-20 m-t-40 p-b-5 b-b-default f-w-600",children:[" ",o,Object(s.jsx)("strong",{children:": \u05e2\u05d5\u05d3\u05db\u05df \u05dc\u05d0\u05d7\u05e8\u05d5\u05e0\u05d4 "})]}),Object(s.jsxs)("div",{class:"row",children:[Object(s.jsxs)("div",{class:"col-sm-6",children:[Object(s.jsx)("p",{class:"m-b-10 f-w-600",children:"Recent"}),Object(s.jsx)("h6",{class:"text-muted f-w-400",children:"Sam Disuja"})]}),Object(s.jsxs)("div",{class:"col-sm-6",children:[Object(s.jsx)("p",{class:"m-b-10 f-w-600",children:"Most Viewed"}),Object(s.jsx)("h6",{class:"text-muted f-w-400",children:"Dinoter husainm"})]})]}),Object(s.jsx)(b.a,{variant:"danger",onClick:function(){return function(e){d.a.delete("/User/"+e)}(c)},children:"Delete"}),Object(s.jsxs)(x.b,{onClick:function(){window.scroll(0,0)},to:{pathname:"/User/edit/".concat(c),state:{name:n,last:a,email:r,id:c,pic:j}},children:[" ",Object(s.jsx)(b.a,{variant:"success",children:"Update"})]}),Object(s.jsxs)("ul",{class:"social-link list-unstyled m-t-40 m-b-10",children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"facebook","data-abc":"true",children:Object(s.jsx)("i",{class:"mdi mdi-facebook feather icon-facebook facebook","aria-hidden":"true"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"twitter","data-abc":"true",children:Object(s.jsx)("i",{class:"mdi mdi-twitter feather icon-twitter twitter","aria-hidden":"true"})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"#!","data-toggle":"tooltip","data-placement":"bottom",title:"","data-original-title":"instagram","data-abc":"true",children:Object(s.jsx)("i",{class:"mdi mdi-instagram feather icon-instagram instagram","aria-hidden":"true"})})})]})]})})]})})})})})})};function g(e){var t=e.location&&e.location.state||{},c=t.id,n=t.name,a=t.last,r=t.email,j=t.pic,o=Object(i.useState)(c),h=Object(l.a)(o,2),O=(h[0],h[1],Object(i.useState)(n)),x=Object(l.a)(O,2),u=x[0],m=x[1],p=Object(i.useState)(a),f=Object(l.a)(p,2),g=f[0],v=f[1],w=Object(i.useState)(r),_=Object(l.a)(w,2),S=_[0],C=_[1],U=Object(i.useState)(j),y=Object(l.a)(U,2),E=y[0],k=y[1];return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{class:"login-box",children:[Object(s.jsx)("h2",{children:"User Edit "}),Object(s.jsxs)("form",{children:[Object(s.jsxs)("div",{class:"user-box",children:[Object(s.jsx)("input",{type:"text",name:"name",value:u,onChange:function(e){return m(e.target.value)},placeholder:"First name"}),Object(s.jsx)("label",{children:"Username"})]}),Object(s.jsxs)("div",{class:"user-box",children:[Object(s.jsx)("input",{type:"text",name:"last",value:g,onChange:function(e){return v(e.target.value)},placeholder:"Last name"}),Object(s.jsx)("label",{children:"Last Name : "})]}),Object(s.jsxs)("div",{class:"user-box",children:[Object(s.jsx)("input",{type:"text",name:"email",value:S,onChange:function(e){return C(e.target.value)},placeholder:"Email"}),Object(s.jsx)("label",{children:"Email :"})]}),Object(s.jsxs)("div",{class:"user-box",children:[Object(s.jsx)("input",{type:"text",name:"pic",value:E,onChange:function(e){return k(e.target.value)},placeholder:"pic URL..."}),Object(s.jsx)("label",{children:"Pic Url :"})]}),Object(s.jsx)("div",{class:"user-box",children:Object(s.jsx)(b.a,{variant:"primary",type:"submit",onClick:function(){return function(e){var t={name:u,last:g,email:S,pic:E};d.a.put("/User/"+e,t)}(c)},children:" Update Here"})})]})]})})}c(307),c(309);function v(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];Object(i.useEffect)((function(){d.a.get("/password").then((function(e){n(e.data)})).catch((function(e){console.log(e)}))}));return console.log("getusers",c),Object(s.jsxs)("div",{children:[Object(s.jsx)("a",{href:"/CreatPassword",children:"Creact Password"}),Object(s.jsx)("h2",{children:c})]})}function w(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{class:"grid align__item",children:Object(s.jsxs)("div",{class:"register",children:[Object(s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"site__logo",width:"56",height:"84",viewBox:"77.7 214.9 274.7 412",children:[Object(s.jsx)("defs",{children:Object(s.jsxs)("linearGradient",{id:"a",x1:"0%",y1:"0%",y2:"0%",children:[Object(s.jsx)("stop",{offset:"0%","stop-color":"#8ceabb"}),Object(s.jsx)("stop",{offset:"100%","stop-color":"#378f7b"})]})}),Object(s.jsx)("path",{fill:"url(#a)",d:"M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"})]}),Object(s.jsx)("h2",{children:"Sign Up"}),Object(s.jsxs)("form",{action:"/password",method:"POST",class:"form",children:[Object(s.jsx)("div",{class:"form__field",children:Object(s.jsx)("input",{type:"text",name:"name",placeholder:"Enter User Name"})}),Object(s.jsx)("div",{class:"form__field",children:Object(s.jsx)("input",{type:"email",name:"email",placeholder:"info@mailaddress.com"})}),Object(s.jsx)("div",{class:"form__field",children:Object(s.jsx)("input",{type:"password",name:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"})}),Object(s.jsx)("div",{class:"form__field",children:Object(s.jsx)("input",{type:"submit",value:"Sign Up"})})]}),Object(s.jsxs)("p",{children:["Already have an accout? ",Object(s.jsx)("a",{href:"/Login",children:"Log In"})]})]})})})}c(310);function _(){return Object(s.jsx)("div",{children:Object(s.jsx)("div",{class:"grid align__item",children:Object(s.jsxs)("div",{class:"register",children:[Object(s.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"site__logo",width:"56",height:"84",viewBox:"77.7 214.9 274.7 412",children:[Object(s.jsx)("defs",{children:Object(s.jsxs)("linearGradient",{id:"a",x1:"0%",y1:"0%",y2:"0%",children:[Object(s.jsx)("stop",{offset:"0%","stop-color":"#8ceabb"}),Object(s.jsx)("stop",{offset:"100%","stop-color":"#378f7b"})]})}),Object(s.jsx)("path",{fill:"url(#a)",d:"M215 214.9c-83.6 123.5-137.3 200.8-137.3 275.9 0 75.2 61.4 136.1 137.3 136.1s137.3-60.9 137.3-136.1c0-75.1-53.7-152.4-137.3-275.9z"})]}),Object(s.jsx)("h2",{children:"Log In"}),Object(s.jsxs)("form",{action:"/",method:"POST",class:"form",children:[Object(s.jsx)("div",{class:"form__field",children:Object(s.jsx)("input",{type:"email",name:"email",placeholder:"info@mailaddress.com"})}),Object(s.jsx)("div",{class:"form__field",children:Object(s.jsx)("input",{type:"password",name:"password",placeholder:"\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022\u2022"})}),Object(s.jsx)("div",{class:"form__field",children:Object(s.jsx)("input",{type:"submit",value:"Log In"})})]}),Object(s.jsxs)("p",{children:["Already have an accout? ",Object(s.jsx)("a",{href:"/CreatPassword",children:"Sign Up"})]})]})})})}var S=c(319);function C(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];return Object(i.useEffect)((function(){d.a.get("https://private-anon-14d0311944-carsapi1.apiary-mock.com/cars").then((function(e){n(e.data)})).catch((function(e){console.log(e)}))}),c),Object(s.jsxs)("div",{className:"Table",children:['//year": 2016, "id": 1, "horsepower": 201, "make": "acura", "model": "ilx", "price": 31890.0, "img_url"',Object(s.jsxs)(S.a,{striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"#"}),Object(s.jsx)("th",{children:"Model"}),Object(s.jsx)("th",{children:"price"}),Object(s.jsx)("th",{children:"horsepower"}),Object(s.jsx)("th",{children:"year"})]})}),c.map((function(e){return Object(s.jsx)("tbody",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("td",{children:Object(s.jsx)("img",{src:e.img_url,width:"100px",height:"120px"})}),Object(s.jsx)("td",{children:e.model}),Object(s.jsx)("td",{children:e.price}),Object(s.jsx)("td",{children:e.horsepower}),Object(s.jsx)("td",{children:e.year})]})})}))]})]})}var U=c(10),y=c(320),E=c(322),k=c(321);function L(){var e=Object(i.useState)([]),t=Object(l.a)(e,2),c=t[0],n=t[1];Object(i.useEffect)((function(){d.a.get("/password").then((function(e){n(e.data)})).catch((function(e){console.log(e)}))}));return Object(s.jsx)("div",{children:Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(y.a,{bg:"light",variant:"light",children:[Object(s.jsx)(y.a.Brand,{href:"/",children:"Home Page"}),Object(s.jsxs)(E.a,{className:"mr-auto",children:[Object(s.jsx)(E.a.Link,{href:"/GetUsers",children:"Get Users"}),Object(s.jsx)(E.a.Link,{href:"/CreactUser",children:"Creat User"}),Object(s.jsx)(E.a.Link,{href:"/getpassword",children:"Get Password"}),Object(s.jsx)(E.a.Link,{href:"/CreatPassword",children:"Sign up"}),Object(s.jsx)(E.a.Link,{href:"/Login",children:"Log In"})]}),Object(s.jsx)(k.a,{inline:!0,children:Object(s.jsxs)(b.a,{variant:"outline-primary",children:[" Well Come Back - ",c," - "]})})]})})})}var T=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(L,{}),Object(s.jsx)(x.a,{children:Object(s.jsxs)(U.c,{children:[Object(s.jsx)(U.a,{exact:!0,path:"/CreatPassword",component:w}),Object(s.jsx)(U.a,{exact:!0,path:"/getpassword",component:v}),Object(s.jsx)(U.a,{exact:!0,path:"/",component:p}),Object(s.jsx)(U.a,{exact:!0,path:"/GetUsers",component:u}),Object(s.jsx)(U.a,{exact:!0,path:"/CreactUser",component:m}),Object(s.jsx)(U.a,{path:"/User/:id",exact:!0,component:f}),Object(s.jsx)(U.a,{path:"/User/edit/:id",exact:!0,component:g}),Object(s.jsx)(U.a,{exact:!0,path:"/Login",component:_}),Object(s.jsx)(U.a,{exact:!0,path:"/Car",component:C})]})})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,323)).then((function(t){var c=t.getCLS,s=t.getFID,i=t.getFCP,n=t.getLCP,a=t.getTTFB;c(e),s(e),i(e),n(e),a(e)}))};r.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root")),P()}},[[314,1,2]]]);
//# sourceMappingURL=main.d70e7663.chunk.js.map