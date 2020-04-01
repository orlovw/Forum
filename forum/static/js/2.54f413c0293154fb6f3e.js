webpackJsonp([2],{Cdx3:function(e,t,a){var i=a("sB3e"),r=a("lktj");a("uqUo")("keys",function(){return function(e){return r(i(e))}})},ec7E:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("Dd8w"),r=a.n(i),n=a("fZjL"),s=a.n(n),o=a("mtWM"),l=a.n(o),d=a("NYxO"),u=a("+cKO"),c={name:"UserProfile",data:function(){var e=new Date,t=new Date(e.getFullYear(),e.getMonth(),e.getDate()),a=new Date(t);return a.setFullYear(a.getFullYear()-12),{user:{},maxDate:a,file:null,editingUserData:{},isEditing:!1,genderChoices:[{text:"Male",value:"MALE"},{text:"Female",value:"FEMALE"},{text:"-----",value:"OTHER"}]}},validations:{editingUserData:{email:{required:u.required,email:u.email,unique:function(e,t){return""===e||e===t.email||l.a.get("users/?email="+e).then(function(e){return console.log("Unique: ",0===s()(e.data).length),0===s()(e.data).length})}}}},created:function(){this.getUserProfile(this.$route.params.id)},watch:{$route:function(e,t){this.getUserProfile(e.params.id)}},methods:{getUserProfile:function(e){var t=this;l.a.get("user/"+e).then(function(e){t.user=e.data,t.editingUserData=e.data}).catch(function(e){console.log("An error occurred")})},saveUserProfile:function(){var e=this;this.editingUserData.avatar=this.file;var t=new FormData;this.editingUserData.avatar&&t.append("avatar",this.editingUserData.avatar),t.append("game_nickname",this.editingUserData.game_nickname),this.editingUserData.birth_date&&t.append("birth_date",this.editingUserData.birth_date),t.append("email",this.editingUserData.email),t.append("gender",this.editingUserData.gender),l.a.patch("user/"+this.$route.params.id,t).then(function(t){200===t.status&&e.getUserProfile(e.$route.params.id)})},validateState:function(e){var t=this.$v.editingUserData[e],a=t.$dirty,i=t.$error;return a?!i:null}},computed:r()({editingText:function(){return this.isEditing?"Done":"Edit"}},Object(d.b)(["isMainUser"]))},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-container",[e.isEditing?a("b-form",[a("h5",[e._v("Choose your avatar:")]),e._v(" "),a("b-form-file",{attrs:{state:Boolean(e.file),placeholder:"Choose an image file or drop it here...","drop-placeholder":"Drop file here..."},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}}),e._v(" "),a("hr"),e._v(" "),a("h5",[e._v("Choose your game nickname:")]),e._v(" "),a("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter game nickname"},model:{value:e.editingUserData.game_nickname,callback:function(t){e.$set(e.editingUserData,"game_nickname",t)},expression:"editingUserData.game_nickname"}}),e._v(" "),a("hr"),e._v(" "),a("h5",[e._v("Choose your birth date:")]),e._v(" "),a("b-form-datepicker",{staticClass:"mb-2",attrs:{id:"example-datepicker",max:e.maxDate},model:{value:e.editingUserData.birth_date,callback:function(t){e.$set(e.editingUserData,"birth_date",t)},expression:"editingUserData.birth_date"}}),e._v(" "),a("hr"),e._v(" "),a("h5",[e._v("Choose your email:")]),e._v(" "),a("b-form-input",{staticClass:"form-control text-center",attrs:{type:"text",id:"emailInput","aria-describedby":"emailHelp",state:e.validateState("email"),placeholder:"awesome@gmail.com"},on:{blur:function(t){return e.$v.editingUserData.email.$touch()}},model:{value:e.$v.editingUserData.email.$model,callback:function(t){e.$set(e.$v.editingUserData.email,"$model",t)},expression:"$v.editingUserData.email.$model"}}),e._v(" "),a("hr"),e._v(" "),a("h5",[e._v("Write something about yourself:")]),e._v(" "),a("b-form-textarea",{attrs:{id:"textarea",placeholder:"Enter something...",rows:"3","max-rows":"6"},model:{value:e.editingUserData.description,callback:function(t){e.$set(e.editingUserData,"description",t)},expression:"editingUserData.description"}}),e._v(" "),a("hr"),e._v(" "),a("h5",[e._v("Choose your gender:")]),e._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:e.editingUserData.gender,expression:"editingUserData.gender"}],staticClass:"form-control text-center",attrs:{id:"inputGender"},on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.$set(e.editingUserData,"gender",t.target.multiple?a:a[0])}}},e._l(e.genderChoices,function(t){return a("option",{domProps:{value:t.value}},[e._v(e._s(t.text))])}),0)],1):a("b-card",{staticClass:"mb-2",attrs:{title:e.user.username,"img-src":"http://0.0.0.0:5000"+e.user.avatar,"img-alt":"Image","img-top":"",tag:"article"}},[a("b-card-text",[e._v("\n        Game Nickname: "+e._s(e.user.game_nickname)+"\n      ")]),e._v(" "),a("hr"),e._v(" "),a("b-card-title",[e._v("Additional information")]),e._v(" "),a("hr"),e._v(" "),a("b-card-text",{directives:[{name:"show",rawName:"v-show",value:e.user.birth_date,expression:"user.birth_date"}]},[e._v("\n        Birthday: "+e._s(e.user.birth_date)+"\n      ")]),e._v(" "),e.isMainUser(e.user.pk)?a("b-card-text",[e._v("\n        BloodCoins: "+e._s(e.user.blood_coins)+"\n      ")]):e._e(),e._v(" "),a("b-card-text",[e._v("\n        Gender: "+e._s(e.user.gender)+"\n      ")]),e._v(" "),a("b-card-text",[e._v("\n        Email: "+e._s(e.user.email)+"\n      ")])],1),e._v(" "),e.isMainUser(e.user.pk)?a("div",{staticClass:"button-control"},[a("b-button",{attrs:{variant:"outline-primary"},on:{click:function(t){e.isEditing=!e.isEditing}}},[e._v("\n        "+e._s(e.editingText)+"\n      ")]),e._v(" "),e.isEditing&&e.$v.$invalid?a("b-button",{attrs:{variant:"outline-primary",disabled:""}},[e._v("\n        Save\n      ")]):e._e(),e._v(" "),e.isEditing&&!e.$v.$invalid?a("b-button",{attrs:{variant:"outline-primary"},on:{click:e.saveUserProfile}},[e._v("\n        Save\n      ")]):e._e()],1):e._e()],1)],1)},staticRenderFns:[]};var m=a("VU/8")(c,v,!1,function(e){a("mWpN")},"data-v-4e7a8f18",null);t.default=m.exports},fZjL:function(e,t,a){e.exports={default:a("jFbC"),__esModule:!0}},jFbC:function(e,t,a){a("Cdx3"),e.exports=a("FeBl").Object.keys},mWpN:function(e,t){},uqUo:function(e,t,a){var i=a("kM2E"),r=a("FeBl"),n=a("S82l");e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],s={};s[e]=t(a),i(i.S+i.F*n(function(){a(1)}),"Object",s)}}});
//# sourceMappingURL=2.54f413c0293154fb6f3e.js.map