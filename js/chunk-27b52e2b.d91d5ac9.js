(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27b52e2b"],{"53fb":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-12"},[a("div",{staticClass:"card card-custom gutter-b"},[a("div",{staticClass:"card-header"},[a("div",{staticClass:"card-title"},[a("h3",{staticClass:"card-label"},[e._v("User")])]),a("div",{staticClass:"card-toolbar"},[a("button",{staticClass:"btn btn-primary",on:{click:function(t){return e.formModal(null)}}},[e._v(" Add ")])])]),a("div",{staticClass:"card-body"},[a("b-table",{attrs:{hover:"",items:e.listUsers,fields:e.users.fields},scopedSlots:e._u([{key:"cell(level_akses)",fn:function(t){return[1==t.value?a("b-badge",{attrs:{variant:"info"}},[e._v("Admin")]):a("b-badge",{attrs:{variant:"primary"}},[e._v("User")])]}},{key:"cell(action)",fn:function(t){return[a("div",{staticClass:"text-right"},[a("b-button-group",[a("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(a){return e.formModal(t.item.username)}}},[a("b-icon-pencil"),e._v(" Edit ")],1),a("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(a){return e.modalToken(t.item.username)}}},[a("b-icon-dice6"),e._v(" Login Token ")],1),a("b-button",{attrs:{size:"sm",variant:"outline-primary"},on:{click:function(a){return e.hapusUser(t.item.username)}}},[a("b-icon-trash"),e._v(" Hapus ")],1)],1)],1)]}}])})],1)])])]),a("b-modal",{ref:"modal-add-user",attrs:{title:0==e.form.edit?"Edit User":"Add User"},on:{ok:function(t){return t.preventDefault(),e.simpanUser()}}},[a("b-form",[a("b-form-group",{attrs:{id:"ig_token_berjangka",label:"Register Data:","label-for":"input_register_data"}},[a("b-input-group",[a("b-form-textarea",{ref:"input_register_data",attrs:{id:"input_register_data",type:"textarea",rows:"4",placeholder:"Register Data",required:""},model:{value:e.input_register_data,callback:function(t){e.input_register_data=t},expression:"input_register_data"}})],1)],1),a("b-row",[a("b-col",{attrs:{sm:"3"}},[e._v("Nama Lengkap")]),a("b-col",{attrs:{sm:"9"}},[e._v(": "+e._s(e.form.nama_lengkap))])],1),a("b-row",[a("b-col",{attrs:{sm:"3"}},[e._v("Email")]),a("b-col",{attrs:{sm:"9"}},[e._v(": "+e._s(e.form.username))])],1),a("b-row",[a("b-col",{attrs:{sm:"3"}},[e._v("Password Hash")]),a("b-col",{attrs:{sm:"9"}},[e._v(": "+e._s(e.form.password_hash))])],1),a("b-row",[a("b-col",{attrs:{sm:"3"}},[e._v("UUID")]),a("b-col",{attrs:{sm:"9"}},[e._v(": "+e._s(e.form.uuid))])],1),a("b-form-group",{attrs:{id:"ig_level_akses",label:"Level Akses:","label-for":"input_level_akses"}},[a("b-form-select",{attrs:{id:"input_level_akses",options:e.level_akses_options,required:""},model:{value:e.form.level_akses,callback:function(t){e.$set(e.form,"level_akses",t)},expression:"form.level_akses"}})],1),a("b-form-group",{attrs:{label:"Fitur"}},[a("b-form-checkbox-group",{attrs:{id:"checkbox-group-1",options:e.options_fitur,name:"flavour-1"},model:{value:e.form.fitur,callback:function(t){e.$set(e.form,"fitur",t)},expression:"form.fitur"}})],1)],1),a("b-form-group",{attrs:{id:"ig_token_register",label:"Token Aktivasi:","label-for":"input_token_register"}},[a("b-input-group",[a("b-form-textarea",{ref:"input_token_register",attrs:{id:"input_token_register",type:"textarea",rows:"4",placeholder:"Token Register",readonly:"",value:e.token_register,required:""}}),a("b-input-group-append",[a("b-button",{attrs:{type:"button",size:"sm",text:"Button",variant:"primary"},on:{click:function(t){return e.copyTokenRegister()}}},[a("b-icon-clipboard")],1)],1)],1)],1)],1),a("b-modal",{ref:"modal-token",attrs:{title:"Token Login","ok-only":""}},[a("h4",[e._v("Token Berjangka")]),a("b-form-group",{attrs:{id:"ig_tanggal_expired_token",label:"Berlaku Hingga:","label-for":"input_tanggal_expired_token"}},[a("b-form-input",{attrs:{id:"input_tanggal_expired_token",type:"datetime-local",placeholder:"Tanggal",required:""},model:{value:e.token.tanggal_expired_token,callback:function(t){e.$set(e.token,"tanggal_expired_token",t)},expression:"token.tanggal_expired_token"}})],1),a("b-form-group",{attrs:{id:"ig_token_berjangka",label:"Login Token Berjangka:","label-for":"input_token_berjangka"}},[a("b-input-group",[a("b-form-textarea",{ref:"input_token_berjangka",attrs:{id:"input_token_berjangka",type:"textarea",rows:"4",placeholder:"Login Token Berjangka",readonly:"",value:e.token_berjangka,required:""}}),a("b-input-group-append",[a("b-button",{attrs:{type:"button",size:"sm",text:"Button",variant:"primary"},on:{click:function(t){return e.copyTokenBerjangka()}}},[a("b-icon-clipboard")],1)],1)],1)],1)],1)],1)},n=[],s=a("5530"),i=(a("7db0"),a("0bce")),o=a("3d20"),l=a.n(o),u=a("2f62"),c=a("d9db"),d={data:function(){return{token:{username:"",tanggal_token:(new Date).toISOString().substring(0,10),tanggal_expired_token:new Date(Date.now()+6048e5).toISOString().substring(0,16)},input_register_data:"",form:{edit:!1,register_data:"",password_hash:"",username:"",uuid:"",nama_lengkap:"",level_akses:0,fitur:[]},level_akses_options:[{text:"Administrator",value:1},{text:"Pengguna",value:0}],options_fitur:[{text:"Sinyal 1Inch BSC",value:"sinyal"},{text:"Sinyal 1Inch ERC20",value:"sinyal_erc"},{text:"Sinyal 1Inch BNB BSC",value:"sinyal_1inch_bnb_bsc"},{text:"Sinyal Matcha BNB BSC",value:"sinyal_matcha_bnb_bsc"},{text:"Sinyal Matcha BSC",value:"sinyal_matcha_bsc"},{text:"Sinyal Matcha ERC",value:"sinyal_matcha_erc"},{text:"Sinyal Paraswap BSC",value:"sinyal_para_bsc"},{text:"Sinyal Paraswap BNB BSC",value:"sinyal_paraswap_bnb_bsc"},{text:"Sinyal Dodo BSC",value:"sinyal_dodo_bsc"},{text:"Sinyal Huobi 1Inch ERC",value:"sinyal_huobi1inch_erc"}],users:{fields:[{key:"username",label:"Username",sortable:!0},{key:"nama_lengkap",label:"Nama lengkap",sortable:!0},{key:"level_akses",label:"Level akses",sortable:!0},{key:"action",label:"",sortable:!1}],items:[{username:"test",nama_lengkap:"Dickerson",level_akses:1}]}}},watch:{input_register_data:function(e){try{var t=c["a"].decrypt(e);t=JSON.parse(t),this.form.register_data=e,this.form.username=t.email,this.form.nama_lengkap=t.nama_lengkap,this.form.uuid=t.uuid,this.form.password_hash=t.password}catch(a){this.form.register_data="",this.form.password_hash="register data tidak valid",this.form.username="register data tidak valid",this.form.nama_lengkap="register data tidak valid",this.form.uuid="register data tidak valid"}}},computed:Object(s["a"])(Object(s["a"])({},Object(u["b"])(["listUsers","currentUser"])),{},{token_harian:function(){var e=c["a"].md5(JSON.stringify({appid:"gq90w3845hfg",username:this.token.username,date:this.token.tanggal_token}));return e},token_register:function(){var e=c["a"].encrypt(JSON.stringify({username:this.form.username,nama_lengkap:this.form.nama_lengkap,password:this.form.password_hash,level_akses:this.form.level_akses,fitur:this.form.fitur,uuid:this.form.uuid,tanggal:Date.now(),entropy:"a"}));return e},token_berjangka:function(){if(null==this.token.tanggal_expired_token)return"";var e=JSON.stringify({username:this.token.username,uuid:this.token.uuid,expired:new Date(this.token.tanggal_expired_token).getTime()}),t=c["a"].encrypt(e);return t}}),components:{},mounted:function(){"1"==!this.currentUser.level_akses&&(console.log(this.currentUser),this.$router.push({name:"restricted"})),this.$store.dispatch(i["a"],[{title:"User"},{title:"User Manager"}])},methods:{modalToken:function(e){var t=this.listUsers.find((function(t){return t.username==e}));this.token.username=e,this.token.uuid=t.uuid,this.$refs["modal-token"].show()},formModal:function(e){if(null==e)this.form={edit:!1,register_data:"",password_hash:"",username:"",nama_lengkap:"",uuid:"",level_akses:0,fitur:[]};else{var t=this.listUsers.find((function(t){return t.username==e}));this.input_register_data=t.register_data,this.form={edit:t.username,register_data:t.register_data,password_hash:t.password_hash,username:t.username,nama_lengkap:t.nama_lengkap,uuid:t.uuid,level_akses:t.level_akses,fitur:t.fitur}}this.$refs["modal-add-user"].show()},simpanUser:function(){var e=this;if(""==this.form.username||""==this.form.nama_lengkap)return l.a.fire({title:"Salah!",text:"Data tidak lengkap",icon:"error",heightAuto:!1}),!1;this.$store.dispatch("saveUser",this.form).then((function(){e.$refs["modal-add-user"].hide(),l.a.fire({title:"Berhasil!",text:"User berhasil disimpan",icon:"success",heightAuto:!1})}))},hapusUser:function(e){var t=this;l.a.fire({title:"Apakah anda yakin?",text:"Data "+e+" akan dihapus permanen",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, delete it!"}).then((function(a){a.isConfirmed&&t.$store.dispatch("deleteUser",e).then((function(){l.a.fire({title:"Berhasil!",text:"User berhasil dihapus",icon:"success",heightAuto:!1})}))}))},copyTokenHarian:function(){this.$refs["input_token_harian"].focus(),this.$refs["input_token_harian"].select();try{document.execCommand("copy"),this.$bvToast.toast("Token "+this.$refs["input_token_harian"].value+" berhasil di copy",{title:"Copy Token",variant:"success",solid:!0})}catch(e){console.log("Oops, unable to copy")}},copyTokenRegister:function(){this.$refs["input_token_register"].focus(),this.$refs["input_token_register"].select();try{document.execCommand("copy"),this.$bvToast.toast("Token register berhasil di copy",{title:"Copy Token",variant:"success",solid:!0})}catch(e){console.log("Oops, unable to copy")}},copyTokenBerjangka:function(){this.timeTest(),this.$refs["input_token_berjangka"].focus(),this.$refs["input_token_berjangka"].select();try{document.execCommand("copy"),this.$bvToast.toast("Token berjangka berhasil di copy",{title:"Copy Token",variant:"success",solid:!0})}catch(e){console.log("Oops, unable to copy")}},timeTest:function(){var e=60*(new Date).getTimezoneOffset()*1e3,t=this.token.tanggal_expired_token,a=new Date(t).getTime(),r=new Date(a).toISOString(),n=new Date(a-e).toISOString(),s=Date.now(),i=new Date(s).toISOString(),o=new Date(s-e).toISOString(),l=new Date(t+":59").getTime(),u=new Date(t+":59").toISOString();console.log(t),console.log(a),console.log(r),console.log(n),console.log(s),console.log(i),console.log(o),console.log(l),console.log(u)}}},p=d,m=a("2877"),f=a("6544"),h=a.n(f),k=a("7496"),_=Object(m["a"])(p,r,n,!1,null,null,null);t["default"]=_.exports;h()(_,{VApp:k["a"]})},6544:function(e,t){e.exports=function(e,t){var a="function"===typeof e.exports?e.exports.extendOptions:e.options;for(var r in"function"===typeof e.exports&&(a.components=e.exports.options.components),a.components=a.components||{},t)a.components[r]=a.components[r]||t[r]}},7496:function(e,t,a){"use strict";var r=a("5530"),n=(a("df86"),a("2b0e")),s=n["default"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}}),i=s;function o(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return n["default"].extend({mixins:t})}t["a"]=o(i).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(e){var t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:Object(r["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},df86:function(e,t,a){}}]);
//# sourceMappingURL=chunk-27b52e2b.d91d5ac9.js.map