webpackJsonp([12],{"8zxf":function(t,e){},"9M+g":function(t,e){},Jmt5:function(t,e){},Jzve:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("Dd8w"),s=n.n(o),i=n("NYxO"),r=n("sHmK"),u={name:"Sidebar",components:{Reveal:r.Reveal},methods:{loginClick:function(){this.isLogged?(this.$router.push({name:"login"}),this.$store.commit("logout")):this.$router.push({name:"login"})},profileClick:function(){var t=this.$store.getters.getUserData;this.$router.push({name:"user-profile",params:{id:t.userID}})}},computed:s()({},Object(i.b)(["isLogged"]),Object(i.c)(["logout"]),{logText:function(){return this.isLogged?"Logout":"Login"}})},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Reveal",[n("router-link",{attrs:{to:"/"}},[n("span",[t._v(" Home ")])]),t._v(" "),n("a",{on:{click:t.loginClick}},[n("span",[t._v(" "+t._s(t.logText)+" ")])]),t._v(" "),n("router-link",{attrs:{to:"/sections"}},[n("span",[t._v(" Sections ")])]),t._v(" "),n("router-link",{attrs:{to:"/shop"}},[n("span",[t._v(" Shop ")])]),t._v(" "),n("router-link",{attrs:{to:"/get-started"}},[n("span",[t._v(" Get Started ")])]),t._v(" "),t.isLogged?n("a",{on:{click:t.profileClick}},[n("span",[t._v(" Profile ")])]):t._e()],1)],1)},staticRenderFns:[]};var h={name:"App",created:function(){var t=sessionStorage.getItem("auth_token");Boolean(t)&&(this.$store.commit("setAuthToken",t),this.$store.dispatch("fetchUser",t))},components:{sidebar:n("VU/8")(u,c,!1,function(t){n("8zxf")},"data-v-19c746d8",null).exports}},l={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("sidebar"),this._v(" "),e("main",{attrs:{id:"page-wrap"}},[e("div",{staticClass:"container-fluid"},[e("transition",{attrs:{name:"slide",mode:"out-in"}},[e("router-view")],1)],1)])],1)},staticRenderFns:[]};var d=n("VU/8")(h,l,!1,function(t){n("ZdMt")},null,null).exports,m=n("Tqaz"),g=(n("Jmt5"),n("9M+g"),n("/ocq")),p={name:"Home",data:function(){return{show:!1}},computed:s()({},Object(i.b)({isLogged:"isLogged",user:"getUserData"}))},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-12 col-md-8 col-xs-5 m-md-4"},[e("div",{staticClass:"card text-center"},[e("div",{staticClass:"card-header"},[this._v("\n          Hy "+this._s(this.user.username)+"\n        ")]),this._v(" "),this._m(0),this._v(" "),e("div",{staticClass:"card-footer text-muted"},[this._v("\n          2 days ago\n        ")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card-body"},[e("h5",{staticClass:"card-title"},[this._v("Special title treatment")]),this._v(" "),e("p",{staticClass:"card-text"},[this._v("With supporting text below as a natural lead-in to additional content.")]),this._v(" "),e("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[this._v("Go somewhere")])])}]};var v=n("VU/8")(p,f,!1,function(t){n("Jzve")},"data-v-0ea96498",null).exports;a.default.use(g.a);var _=new g.a({scrollBehavior:function(t,e,n){return n||(t.hash?{selector:t.hash}:{x:0,y:0})},routes:[{path:"",name:"home",component:v},{path:"/login",name:"login",component:function(t){n.e(7).then(function(){t(n("3jL2"))}.bind(null,n)).catch(n.oe)}},{path:"/conversation/:section",name:"conversation",component:function(t){n.e(5).then(function(){t(n("EAzr"))}.bind(null,n)).catch(n.oe)}},{path:"/conversation/:section/topic/:topicID",name:"topic",component:function(t){n.e(4).then(function(){t(n("HyuL"))}.bind(null,n)).catch(n.oe)}},{path:"/topic-creation/:section",name:"topic-creation",component:function(t){Promise.all([n.e(0),n.e(10)]).then(function(){t(n("UBW+"))}.bind(null,n)).catch(n.oe)}},{path:"/topic-editing/:section/:topicID",name:"topic-editing",component:function(t){Promise.all([n.e(0),n.e(9)]).then(function(){t(n("0yh2"))}.bind(null,n)).catch(n.oe)}},{path:"/shop",name:"shop",component:function(t){n.e(6).then(function(){t(n("KCKD"))}.bind(null,n)).catch(n.oe)}},{path:"/get-started",name:"get-started",component:function(t){n.e(8).then(function(){t(n("SYbK"))}.bind(null,n)).catch(n.oe)}},{path:"/user-profile/:id",name:"user-profile",component:function(t){Promise.all([n.e(0),n.e(2)]).then(function(){t(n("ec7E"))}.bind(null,n)).catch(n.oe)}},{path:"/sections",name:"sections",component:function(t){n.e(1).then(function(){t(n("MN7i"))}.bind(null,n)).catch(n.oe)}},{path:"/registration",name:"registration",component:function(t){Promise.all([n.e(0),n.e(3)]).then(function(){t(n("DhR8"))}.bind(null,n)).catch(n.oe)}}],mode:"history"}),k=n("mtWM"),b=n.n(k),I=n("Rf8U"),S=n.n(I),C={state:{user:{isLogged:!1,authToken:"",userID:null,username:"",email:"",bloodCoins:0,avatarImage:"",gameNickName:"",gender:""}},getters:{isLogged:function(t){return t.user.isLogged},getUserData:function(t){var e=t.user;return{userID:e.userID,username:e.username,email:e.email,bloodCoins:e.bloodCoins,avatar:e.avatarImage,gameNickName:e.gameNickName,gender:e.gender}},isMainUser:function(t){return function(e){return t.user.userID===e}}},actions:{login:function(t,e){return b.a.post("http://0.0.0.0:5000/authentication/api-token-auth/",e).then(function(e){sessionStorage.setItem("auth_token",e.data.token),b.a.defaults.headers.post.Authorization="Token "+sessionStorage.getItem("auth_token"),b.a.defaults.headers.get.Authorization="Token "+sessionStorage.getItem("auth_token"),b.a.defaults.headers.patch.Authorization="Token "+sessionStorage.getItem("auth_token"),t.commit("setAuthToken",e.data.token),t.dispatch("fetchUser",e.data.token)})},fetchUser:function(t,e){var n=t.commit,a={auth_token:e};return b.a.get("/get-user/",{params:a}).then(function(t){var e=t.data;n("setUserData",e)}).catch(function(t){console.log(t)})},register:function(t,e){return b.a.post("http://0.0.0.0:5000/authentication/register/",e).then(function(e){var n=e.data.auth_token;sessionStorage.setItem("auth_token",n),t.commit("setAuthToken",n),t.dispatch("fetchUser",n)})}},mutations:{setAuthToken:function(t,e){t.user.isLogged=Boolean(sessionStorage.getItem("auth_token")),t.user.authToken=e},setUserData:function(t,e){t.user.userID=e.pk,t.user.username=e.username,t.user.email=e.email,t.user.avatarImage=e.avatar,t.user.gender=e.gender,t.user.gameNickName=e.game_nickname},logout:function(t){sessionStorage.removeItem("auth_token"),t.user.isLogged=!1}}};a.default.use(S.a,b.a),a.default.use(i.a);var T=new i.a.Store({state:{},getters:{},actions:{},mutations:{},modules:{authentication:C}}),D=n("ESwS"),L=n.n(D),U=n("TX8X"),x=n.n(U);a.default.use(x.a),a.default.use(L.a),a.default.use(m.a),a.default.config.productionTip=!1,b.a.defaults.baseURL="http://0.0.0.0:5000/api/",sessionStorage.getItem("auth_token")&&(b.a.defaults.headers.post.Authorization="Token "+sessionStorage.getItem("auth_token"),b.a.defaults.headers.get.Authorization="Token "+sessionStorage.getItem("auth_token"),b.a.defaults.headers.patch.Authorization="Token "+sessionStorage.getItem("auth_token")),new a.default({el:"#app",router:_,store:T,components:{App:d},template:"<App/>"})},ZdMt:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.7b497fb6a09dc8e7305e.js.map