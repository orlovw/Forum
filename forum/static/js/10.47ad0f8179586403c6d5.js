webpackJsonp([10],{"UBW+":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("+cKO"),n=i("mtWM"),r=i.n(n),a={name:"TopicCreation",data:function(){return{title:"",description:"",body:"",section:this.$route.params.section}},validations:{title:{required:o.required,unique:function(t,e){if(""===t)return!0;var i={searchBy:"title",value:t,section:this.section.toUpperCase()};return r.a.get("topics/search/",{params:i}).then(function(t){return!t.data.topic_exists})},minLen:Object(o.minLength)(3)},description:{required:o.required,minLen:Object(o.minLength)(3)},body:{required:o.required,minLen:Object(o.minLength)(10)}},methods:{createTopic:function(){var t=this,e={title:this.title,description:this.description,body:this.body,section:this.section.toUpperCase()};r.a.post("topics/",e).then(function(e){switch(e.status){case 201:t.moveToCreatedTopic(e.data.topic_id)}})},moveToCreatedTopic:function(t){this.$router.push({name:"topic",params:{section:this.section,topicID:t}})},validateState:function(t){var e=this.$v[t],i=e.$dirty,o=e.$error;return i?!o:null}},computed:{titleSmallText:function(){return this.title?this.$v.title.unique?this.$v.title.minLen?"Your title is unique":"Your title is too short":"Your title is not unique, please enter unique one":"Your topic title."}}},s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-lg-12"},[i("div",{staticClass:"topic-creation-container"},[i("h1",[t._v("\n          Topic Creation\n        ")]),t._v(" "),i("div",{staticClass:"form-container"},[i("b-form",[i("label",{attrs:{for:"input-topic-title"}},[t._v("Topic Title:")]),t._v(" "),i("b-form-input",{attrs:{id:"input-topic-title",state:t.validateState("title"),"aria-describedby":"input-live-help input-live-feedback",placeholder:"Enter title of the topic",trim:""},on:{blur:function(e){return t.$v.title.$touch()}},model:{value:t.$v.title.$model,callback:function(e){t.$set(t.$v.title,"$model",e)},expression:"$v.title.$model"}}),t._v(" "),i("small",{staticClass:"form-text text-muted",attrs:{id:"usernameHelp"}},[t._v(t._s(t.titleSmallText))]),t._v(" "),i("label",{attrs:{for:"input-topic-description"}},[t._v("Topic Description:")]),t._v(" "),i("b-form-input",{attrs:{id:"input-topic-description",state:t.validateState("description"),"aria-describedby":"input-live-help input-live-feedback",placeholder:"Enter title of the topic",trim:""},on:{blur:function(e){return t.$v.description.$touch()}},model:{value:t.$v.description.$model,callback:function(e){t.$set(t.$v.description,"$model",e)},expression:"$v.description.$model"}}),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v("\n              Enter at least 3 letters\n            ")]),t._v(" "),i("label",{attrs:{for:"topic-body"}},[t._v("Topic Body:")]),t._v(" "),i("b-form-textarea",{attrs:{id:"topic-body",state:t.validateState("body"),placeholder:"Enter something...",rows:"3","max-rows":"6"},on:{blur:function(e){return t.$v.body.$touch()}},model:{value:t.$v.body.$model,callback:function(e){t.$set(t.$v.body,"$model",e)},expression:"$v.body.$model"}}),t._v(" "),i("b-form-invalid-feedback",{attrs:{id:"input-live-feedback"}},[t._v("\n              Enter at least 10 letters\n            ")])],1),t._v(" "),i("div",{staticClass:"button-control"},[t.$v.$invalid?i("b-button",{attrs:{disabled:""}},[t._v("\n              Submit\n            ")]):i("b-button",{attrs:{variant:"success"},on:{click:t.createTopic}},[t._v("\n              Button\n            ")])],1)],1)])])])])},staticRenderFns:[]};var c=i("VU/8")(a,s,!1,function(t){i("yP1w")},"data-v-19302ed1",null);e.default=c.exports},yP1w:function(t,e){}});
//# sourceMappingURL=10.47ad0f8179586403c6d5.js.map