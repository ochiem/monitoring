(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a40124a0"],{"0ccb":function(t,e,i){var a=i("50c4"),s=i("1148"),n=i("1d80"),r=Math.ceil,o=function(t){return function(e,i,o){var l,c,h=String(n(e)),u=h.length,d=void 0===o?" ":String(o),p=a(i);return p<=u||""==d?h:(l=p-u,c=s.call(d,r(l/d.length)),c.length>l&&(c=c.slice(0,l)),t?h+c:c+h)}};t.exports={start:o(!1),end:o(!0)}},6544:function(t,e){t.exports=function(t,e){var i="function"===typeof t.exports?t.exports.extendOptions:t.options;for(var a in"function"===typeof t.exports&&(i.components=t.exports.options.components),i.components=i.components||{},e)i.components[a]=i.components[a]||e[a]}},7496:function(t,e,i){"use strict";var a=i("5530"),s=(i("df86"),i("2b0e")),n=s["default"].extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}}),r=n;function o(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return s["default"].extend({mixins:e})}e["a"]=o(r).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:Object(a["a"])({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},"843c":function(t,e,i){"use strict";var a=i("23e7"),s=i("0ccb").end,n=i("9a0c");a({target:"String",proto:!0,forced:n},{padEnd:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}})},"9a0c":function(t,e,i){var a=i("342f");t.exports=/Version\/10(?:\.\d+){1,2}(?: [\w./]+)?(?: Mobile\/\w+)? Safari\//.test(a)},df86:function(t,e,i){},e165:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"card card-custom gutter-b"},[i("div",{staticClass:"card-header"},[i("div",{staticClass:"card-title"},[i("h3",{staticClass:"card-label"},[t._v(" Sinyal 1Inch BNB BSC "),i("button",{staticClass:"btn btn-info ml-2",on:{click:function(e){return t.kalkulatorTool("USDT",0)}}},[i("b-icon-calculator-fill"),t._v(" Kalkulator")],1)]),i("b-form-checkbox",{attrs:{switch:""},model:{value:t.auto_request,callback:function(e){t.auto_request=e},expression:"auto_request"}},[t._v("Autorun")])],1),i("div",{staticClass:"card-toolbar"},[t.axiosError.timeout.length>0?i("span",{staticClass:"mr-2"},[i("span",{staticStyle:{color:"brown","font-weight":"bold","font-size":"14px"},attrs:{title:t.axiosError.timeout.join("\n")}},[i("b-icon-clock"),t._v(" "+t._s(t.axiosError.timeout.length)+" Timeout")],1),t._v(" | ")]):t._e(),t.axiosError.error.length>0?i("span",{staticClass:"mr-2"},[i("span",{staticStyle:{color:"#ff0000","font-weight":"bold","font-size":"14px"},attrs:{title:t.axiosError.error.join("\n")}},[i("b-icon-exclamation-triangle"),t._v(" "+t._s(t.axiosError.error.length)+" Error")],1),t._v(" | ")]):t._e(),t.threshold>0?i("span",{staticClass:"mr-2"},[i("span",{staticStyle:{color:"#00aa00","font-weight":"bold","font-size":"14px"}},[i("b-icon-bell"),t._v(" "+t._s(t.threshold)+" Sinyal")],1)]):t._e(),t.running_request>0||t.request_run?t._e():i("button",{staticClass:"btn btn-primary mr-1",attrs:{disabled:t.sinyal.fetching,title:"Klik reset untuk menerapkan perubahan modal ke semua coin"},on:{click:function(e){return t.registerAndStartFetchSinyal1InchBnbBsc()}}},[i("b-icon-back"),t._v(" Setup ")],1),t.running_request>0||t.request_run?i("span",{staticClass:"text-muted"},[i("b-spinner",{attrs:{small:""}}),t._v(" Update Harga Koin "+t._s(((t.total_request-t.running_request)/t.total_request*100).toFixed(1))+"% ")],1):i("button",{staticClass:"btn btn-success",staticStyle:{background:"#00dd00"},attrs:{disabled:t.sinyal.fetching,title:"Klik refresh untuk memperbarui data"},on:{click:function(e){return t.startFetchSinyal1InchBnbBsc()}}},[i("b-icon-clock"),t._v(" Update ")],1),t.running_request>0||t.request_run?i("button",{staticClass:"btn btn-danger ml-2",on:{click:function(e){return t.$router.go()}}},[t._v("Stop/Refresh")]):t._e(),i("button",{staticClass:"btn btn-danger ml-2",on:{click:t.openModalLog}},[i("b-icon-clock-history"),t._v(" Log")],1)])]),i("div",{staticClass:"card-body"},[i("b-row",[i("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[i("table",{staticClass:"table table-bordered table-sm"},[i("thead",[i("tr",[i("th",{staticClass:"text-center p-1",staticStyle:{"background-color":"#f0f8ff"}},[t._v("USDT/IDR")]),i("th",{staticClass:"text-center p-1",staticStyle:{"background-color":"#ffffff"}},[t._v("BTC/IDR")]),i("th",{staticClass:"text-center p-1",staticStyle:{"background-color":"#f0f8ff"}},[t._v("BNB/IDR")]),i("th",{staticClass:"text-center p-1",staticStyle:{"background-color":"#ffffff"}},[t._v("ETH/IDR")]),i("th",{staticClass:"text-center p-1",staticStyle:{"background-color":"#f0f8ff"}},[t._v("BTC/USDT")]),i("th",{staticClass:"text-center p-1",staticStyle:{"background-color":"#ffffff"}},[t._v("BNB/USDT")]),i("th",{staticClass:"text-center p-1",staticStyle:{"background-color":"#f0f8ff"}},[t._v("ETH/USDT")])])]),i("tbody",[i("tr",[i("td",{staticClass:"text-center font-weight-bolder p-1",staticStyle:{"background-color":"#f0f8ff"}},[t._v(t._s(t.harga.usdtbidr))]),i("td",{staticClass:"text-center font-weight-bolder p-1",staticStyle:{"background-color":"#ffffff"}},[t._v(t._s(t.harga.btcbidr))]),i("td",{staticClass:"text-center font-weight-bolder p-1",staticStyle:{"background-color":"#f0f8ff"}},[t._v(t._s(t.harga.bnbbidr))]),i("td",{staticClass:"text-center font-weight-bolder p-1",staticStyle:{"background-color":"#ffffff"}},[t._v(t._s(t.harga.ethbidr))]),i("td",{staticClass:"text-center font-weight-bolder p-1",staticStyle:{"background-color":"#f0f8ff"}},[t._v(t._s(t.harga.btcusdt))]),i("td",{staticClass:"text-center font-weight-bolder p-1",staticStyle:{"background-color":"#ffffff"}},[t._v(t._s(t.harga.bnbusdt))]),i("td",{staticClass:"text-center font-weight-bolder p-1",staticStyle:{"background-color":"#f0f8ff"}},[t._v(t._s(t.harga.ethusdt))])])])])])],1),i("b-row",[i("b-col",{attrs:{md:"3"}},[i("b-form-group",{attrs:{id:"modal_kiri_1inch_bnb_bsc",label:"Modal Binance:","label-cols-sm":"6","label-align-sm":"right","label-for":"modal_kiri_1inch_bnb_bsc"}},[i("b-form-input",{attrs:{id:"modal_kiri_1inch_bnb_bsc",type:"number",placeholder:"Modal Binance",value:t.modal_kiri_1inch_bnb_bsc,required:""},on:{input:t.updateModalKiri}})],1)],1),i("b-col",{attrs:{md:"3"}},[i("b-form-group",{attrs:{id:"modal_kanan_1inch_bnb_bsc",label:"Modal 1Inch:","label-cols-sm":"6","label-align-sm":"right","label-for":"modal_kanan_1inch_bnb_bsc"}},[i("b-form-input",{attrs:{id:"modal_kanan_1inch_bnb_bsc",type:"number",placeholder:"Modal 1Inch",value:t.modal_kanan_1inch_bnb_bsc,required:""},on:{input:t.updateModalKanan}})],1)],1),i("b-col",{attrs:{md:"3"}},[i("b-form-group",{attrs:{id:"limit_threshold",label:"Filter PNL:","label-cols-sm":"6","label-align-sm":"right","label-for":"limit_threshold"}},[i("b-input-group",[i("b-form-input",{attrs:{id:"limit_threshold",type:"number",step:"0.0001",placeholder:"Filter PNL",required:""},model:{value:t.limit_threshold,callback:function(e){t.limit_threshold=e},expression:"limit_threshold"}}),i("b-input-group-append",{attrs:{"is-text":"",title:"Sembunyikan yg tidak masuk kriteria"}},[i("b-form-checkbox",{staticClass:"mr-n2",attrs:{switch:"",value:"y","unchecked-value":""},model:{value:t.sinyal.table_filter,callback:function(e){t.$set(t.sinyal,"table_filter",e)},expression:"sinyal.table_filter"}})],1)],1)],1)],1),i("b-col",{staticClass:"text-center font-weight-bold",attrs:{md:"3"}},[i("span",{},[t._v("Last Fetch:"+t._s(t.lastFetchSinyal1InchBnbBsc))])])],1),i("b-table",{attrs:{bordered:"","sticky-header":"900px","head-variant":"dark",responsive:"",hover:"",items:t.listSinyal1InchBnbBsc,fields:t.sinyal.fields,"tbody-tr-class":t.rowClass,"filter-function":t.filterTable,filter:t.sinyal.table_filter},scopedSlots:t._u([{key:"cell(symbol)",fn:function(e){return[i("span",{class:"fa fa-star mr-2 "+t.bintangFind(e.value),on:{click:function(i){return t.bintangMark(i,e.value)}}}),i("a",{attrs:{href:t.listSettings.url_coin+e.item.coin_address,target:"_pasar"}},[t._v(t._s(e.value))]),i("span",{class:"ml-2 badge badge-pill badge-pair-"+e.item.pair},[t._v(t._s(e.item.pair))]),t._v(" "+t._s(e.item.waktu_fetch)+" "),i("span",{staticStyle:{color:"blue"}},[t._v("| stok")]),i("a",{attrs:{target:"wallet",href:"https://bscscan.com/token/"+e.item.coin_address+"?a=0x8894e0a0c962cb723c1976a4421c95949be2d4e3"}},[t._v("[1]")]),i("a",{attrs:{target:"wallet",href:"https://bscscan.com/token/"+e.item.coin_address+"?a=0xe2fc31f816a9b94326492132018c3aecc4a93ae1"}},[t._v("[2]")]),i("br"),i("small",{staticStyle:{cursor:"copy"},attrs:{id:"coin_address_"+e.item.symbol},on:{click:function(i){return t.CopyToClipboard("coin_address_"+e.item.symbol)}}},[t._v(t._s(e.item.coin_address))])]}},{key:"cell(binance_ask_price)",fn:function(e){return[i("a",{attrs:{target:"koin",href:"https://www.binance.com/en/trade/"+e.item.symbol+"_"+e.item.pair+"?type=spot",title:null!==e.item.ask_xprice?e.item.ask_xprice+" "+e.item.pair:""}},[i("span",{attrs:{id:"binance_ask_price_"+e.item.symbol},domProps:{innerHTML:t._s(parseFloat(e.value).toFixed(8))}})]),i("br"),i("a",{staticClass:"price-tool mr-2",staticStyle:{cursor:"copy"},attrs:{title:"Klik untuk copy"},on:{click:function(i){return t.CopyToClipboard("binance_ask_price_"+e.item.symbol)}}},[i("b-icon-clipboard-plus")],1),i("a",{staticClass:"price-tool",attrs:{title:"Klik untuk mengkalkulasi"},on:{click:function(i){t.kalkulatorTool(e.item.pair,parseFloat(e.value).toFixed(8),"USDT")}}},[i("b-icon-calculator")],1)]}},{key:"cell(binance_bid_price)",fn:function(e){return[i("a",{attrs:{target:"koin",href:"https://www.binance.com/en/trade/"+e.item.symbol+"_"+e.item.pair+"?type=spot",title:null!==e.item.bid_xprice?e.item.bid_xprice+" "+e.item.pair:""}},[i("span",{attrs:{id:"binance_bid_price_"+e.item.symbol},domProps:{innerHTML:t._s(parseFloat(e.value).toFixed(8))}})]),i("br"),i("a",{staticClass:"price-tool mr-2",staticStyle:{cursor:"copy"},attrs:{title:"Klik untuk copy"},on:{click:function(i){return t.CopyToClipboard("binance_bid_price_"+e.item.symbol)}}},[i("b-icon-clipboard-plus")],1),i("a",{staticClass:"price-tool",attrs:{title:"Klik untuk mengkalkulasi"},on:{click:function(i){t.kalkulatorTool(e.item.pair,parseFloat(e.value).toFixed(8),"USDT")}}},[i("b-icon-calculator")],1)]}},{key:"cell(inch_usdt)",fn:function(e){return[i("a",{attrs:{target:"koin2",href:"https://app.1inch.io/#/56/classic/swap/BNB/"+e.item.coin_address,title:null!==e.item.ask_xprice?(parseFloat(e.value)*parseFloat(e.item.ask_pairPrice)).toFixed(8)+" "+e.item.pair:""}},[i("span",{attrs:{id:"inch_usdt"+e.item.symbol},domProps:{innerHTML:t._s(e.value)}})]),i("br"),i("a",{staticClass:"price-tool mr-2",staticStyle:{cursor:"copy"},attrs:{title:"Klik untuk copy"},on:{click:function(i){return t.CopyToClipboard("inch_usdt"+e.item.symbol)}}},[i("b-icon-clipboard-plus")],1),i("a",{staticClass:"price-tool",attrs:{title:"Klik untuk mengkalkulasi"},on:{click:function(i){t.kalkulatorTool(e.item.pair,parseFloat(e.value).toFixed(8),"BNB")}}},[i("b-icon-calculator")],1)]}},{key:"cell(selisih_pnl_kiri)",fn:function(e){return[i("span",{class:{"bg-primary text-white p-2":parseFloat(e.value)>=parseFloat(t.limit_threshold)},domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(selisih_pnl_kiri_persen)",fn:function(e){return[i("span",{domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(inch_price)",fn:function(e){return[i("a",{attrs:{target:"koin2",href:"https://app.1inch.io/#/56/classic/swap/BNB/"+e.item.coin_address,title:null!==e.item.bid_xprice?(parseFloat(e.value)*parseFloat(e.item.bid_pairPrice)).toFixed(8)+" "+e.item.pair:""}},[i("span",{attrs:{id:"inch_price"+e.item.symbol},domProps:{innerHTML:t._s(e.value)}})]),i("br"),i("a",{staticClass:"price-tool mr-2",staticStyle:{cursor:"copy"},attrs:{title:"Klik untuk copy"},on:{click:function(i){return t.CopyToClipboard("inch_price"+e.item.symbol)}}},[i("b-icon-clipboard-plus")],1),i("a",{staticClass:"price-tool",attrs:{title:"Klik untuk mengkalkulasi"},on:{click:function(i){t.kalkulatorTool(e.item.pair,parseFloat(e.value).toFixed(8),"BNB")}}},[i("b-icon-calculator")],1)]}},{key:"cell(selisih_pnl_kanan)",fn:function(e){return[i("span",{class:{"bg-primary text-white p-2":parseFloat(e.value)>=parseFloat(t.limit_threshold)},domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(selisih_pnl_kanan_persen)",fn:function(e){return[i("span",{domProps:{innerHTML:t._s(e.value)}})]}},{key:"cell(modal_kiri)",fn:function(e){return[i("input",{staticClass:"form-control",attrs:{type:"number",title:"Ketikkan modal, tekan enter untuk memuat."},domProps:{value:e.value},on:{change:function(i){return t.indvModal(i,e.item.symbol,"kiri")}}})]}},{key:"cell(modal_kanan)",fn:function(e){return[i("input",{staticClass:"form-control",attrs:{type:"number",title:"Ketikkan modal, tekan enter untuk memuat."},domProps:{value:e.value},on:{change:function(i){return t.indvModal(i,e.item.symbol,"kanan")}}})]}},{key:"cell(num)",fn:function(e){return[i("span",{domProps:{innerHTML:t._s(e.index+1)}}),i("b-form-checkbox",{attrs:{switch:"",checked:e.item.aktif},on:{change:function(i){return t.ubahAktif(e.item.symbol,e.item.aktif)}}})]}}])},[i("template",{staticStyle:{position:"sticky"},slot:"thead-top"},[i("b-tr",[i("b-th",[t._v("Modal")]),i("b-th",{attrs:{colspan:"2"}},[t._v("PRICE")]),i("b-th",{attrs:{colspan:"2",variant:"primary"}},[t._v("SELISIH")]),i("b-th",[t._v("SYMBOL")]),i("b-th",[t._v("Modal")]),i("b-th",{attrs:{colspan:"2"}},[t._v("PRICE")]),i("b-th",{attrs:{colspan:"2",variant:"primary"}},[t._v("SELISIH")]),i("b-th",{staticStyle:{padding:"0px","text-align":"center","vertical-align":"middle","font-size":"18px",color:"#f00"},attrs:{title:t.list_koin_nonaktif.map((function(t){return t.nama_coin})).join("\n")}},[t._v(" "+t._s(t.list_koin_nonaktif.length>0?t.list_koin_nonaktif.length:"")+" ")])],1)],1)],2)],1),i("div",{staticClass:"card-footer"},[i("b-row",[i("b-col",{attrs:{md:"12"}},[i("h4",[t._v("Pengaturan update harga :")])])],1),i("b-row",[i("b-col",{attrs:{md:"4"}},[i("b-form-group",{attrs:{id:"axiosDelay",label:"Interval","label-cols-sm":"6","label-align-sm":"right","label-for":"axiosDelay"}},[i("b-input-group",[i("b-form-input",{attrs:{id:"axiosDelay",type:"number",placeholder:"Delay",value:t.axiosDelay,required:""},on:{input:t.updateDelay}}),i("b-input-group-append",{attrs:{"is-text":"",title:"Sembunyikan yg tidak masuk kriteria"}},[t._v("ms / koin")])],1)],1)],1),i("b-col",{attrs:{md:"3"}},[i("b-form-group",{attrs:{id:"auto_request_delay",label:"Auto Delay","label-cols-sm":"6","label-align-sm":"right","label-for":"auto_request_delay"}},[i("b-input-group",[i("b-form-input",{attrs:{id:"auto_request_delay",type:"number",placeholder:"Delay",value:t.auto_request_delay,required:""},on:{input:t.updateAutoRequestDelay}}),i("b-input-group-append",{attrs:{"is-text":"",title:"Milidetik"}},[t._v("ms")])],1)],1)],1),i("b-col",{attrs:{md:"5"}},[i("b-form-group",{attrs:{id:"axiosBatch",label:"Jeda:","label-cols-sm":"3","label-align-sm":"right","label-for":"axiosBatch"}},[i("b-input-group",[i("b-form-input",{attrs:{id:"axiosRehat",type:"number",placeholder:"Rehat",value:t.axiosRehat,required:""},on:{input:t.updateRehat}}),i("b-input-group-append",{attrs:{"is-text":"",title:""}},[t._v("ms per-")]),i("b-form-input",{attrs:{id:"axiosBatch",type:"number",placeholder:"Rehat",value:t.axiosBatch,required:""},on:{input:t.updateBatch}}),i("b-input-group-append",{attrs:{"is-text":"",title:""}},[t._v("koin")])],1)],1)],1)],1),i("b-row")],1)])])]),i("b-modal",{ref:"modal-log",attrs:{title:"Log Request",size:"xl"}},[i("div",{staticStyle:{height:"400px",overflow:"auto"}},[i("ul",t._l(t.log_request,(function(e,a){return i("li",{key:a},[t._v(t._s(e))])})),0)])]),i("b-modal",{ref:"modal-calculator",attrs:{title:"Kalkulator",size:"md","ok-only":"","ok-title":"Tutup"}},[i("kalkulator",{attrs:{pair:t.kalkulator_data.pair,harga:t.kalkulator_data.harga,trigger:t.kalkulator_data.trigger,defaultSource:t.kalkulator_data.defaultSource}})],1)],1)},s=[],n=i("ade3"),r=i("5530"),o=(i("7db0"),i("4de4"),i("159b"),i("843c"),i("b680"),i("a9e3"),i("d3b7"),i("25f0"),i("fb6a"),i("c740"),i("a434"),i("0bce")),l=i("2f62"),c=i("bc3a"),h=i.n(c),u=i("3d20"),d=i.n(u),p=i("f3f0"),b={data:function(){return{sinyal:{fetching:!1,totalRows:1,currentPage:1,perPage:200,filter:null,filterOn:["symbol"],table_filter:"",fields:[{key:"modal_kiri",label:"Binance",sortable:!1,tdClass:"text-center font-weight-bold",thStyle:{width:"10%"}},{key:"binance_ask_price",label:"Binance(Ask)",sortable:!1,tdClass:"text-center font-weight-bold bg-price-binance"},{key:"inch_usdt",label:"1Inch",sortable:!1,tdClass:"text-center font-weight-bold bg-price-1inch"},{key:"selisih_pnl_kiri",label:"PNL",sortable:!1,tdClass:"text-center font-weight-bold"},{key:"selisih_pnl_kiri_persen",label:"%",sortable:!1,tdClass:"text-center font-weight-bold"},{key:"symbol",label:"Coin",sortable:!0,tdClass:"text-center font-weight-bold bg-grey-100 text-dinamis bg-puteh",thStyle:{width:"40%"}},{key:"modal_kanan",label:"1Inch",sortable:!1,tdClass:"text-center font-weight-bold",thStyle:{width:"10%"}},{key:"inch_price",label:"1Inch",sortable:!1,tdClass:"text-center font-weight-bold bg-price-1inch"},{key:"binance_bid_price",label:"Binance(Bid)",sortable:!1,tdClass:"text-center font-weight-bold bg-price-binance"},{key:"selisih_pnl_kanan",label:"PNL",sortable:!1,tdClass:"text-center font-weight-bold"},{key:"selisih_pnl_kanan_persen",label:"%",sortable:!1,tdClass:"text-center font-weight-bold"},{key:"num",label:"#",sortable:!1,tdClass:"text-center font-weight-bold bg-ireng text-white"}],items:[]},modal_kiri_1inch_bnb_bsc:0,modal_kanan_1inch_bnb_bsc:0,running_request:0,total_request:0,auto_request:!1,auto_request_delay:5e3,request_run:!1,threshold:0,limit_threshold:3,log_request:[],axiosCancelToken:h.a.CancelToken,axiosCancel:null,axiosDelay:500,axiosRehat:1e4,axiosBatch:25,axiosError:{timeout:[],error:[]},harga:{btcusdt:0,btcbidr:0,ethusdt:0,ethbidr:0,bnbusdt:0,bnbbidr:0,usdtbidr:0},kalkulator_data:{pair:"USDT",harga:0,trigger:!0,defaultSource:"USDT"},testing:"",jml_koin_aktif:0,jml_koin:0,list_koin_nonaktif:[],list_koin_bintang:[]}},components:{Kalkulator:p["a"]},watch:{limit_threshold:function(){this.$store.dispatch("settingSet",{name:"filter_pnl_1inch_bnb_bsc",value:this.limit_threshold}),this.recalculateThreshold()},running_request:function(t,e){var i=this;0==t&&0!=e&&(this.auto_request?(this.request_run=!0,this.$bvToast.toast("Request selesai, me-refresh dalam "+this.auto_request_delay+"ms",{title:"Autorun",variant:"success",solid:!0}),setTimeout((function(){i.startFetchSinyal1InchBnbBsc()}),this.auto_request_delay)):this.request_run=!1)}},computed:Object(r["a"])({},Object(l["b"])(["listSinyal1InchBnbBsc","lastFetchSinyal1InchBnbBsc","listSettings","listBookTickerBNB","currentUser"])),mounted:function(){1!=this.currentUser.level_akses&&void 0==this.currentUser.fitur.find((function(t){return"sinyal_1inch_bnb_bsc"==t}))&&this.$router.push({name:"setting"}),this.modal_kiri_1inch_bnb_bsc=null===this.listSettings?400:this.listSettings.modal_kiri_1inch_bnb_bsc||400,this.modal_kanan_1inch_bnb_bsc=null===this.listSettings?400:this.listSettings.modal_kanan_1inch_bnb_bsc||400,this.limit_threshold=null===this.listSettings?5:this.listSettings.filter_pnl_1inch_bnb_bsc||5,this.axiosDelay=null===this.listSettings?500:this.listSettings.delay_1inch_bnb_bsc||500,this.axiosRehat=null===this.listSettings?1e4:this.listSettings.rehat_1inch_bnb_bsc||1e4,this.axiosBatch=null===this.listSettings?25:this.listSettings.batch_1inch_bnb_bsc||25,this.auto_request_delay=null===this.listSettings?5e3:this.listSettings.auto_request_delay||5e3,this.$store.dispatch(o["a"],[{title:"Market Watch 1Inch BNB BSC"}]),this.recalculateThreshold(),this.updateHarga(),this.jml_koin=this.$store.state.coin.coins.length,this.jml_koin_aktif=this.$store.state.coin.coins.filter((function(t){return 1==t.aktif})).length,this.list_koin_nonaktif=this.$store.state.coin.coins.filter((function(t){return 0==t.aktif}));try{var t=localStorage.getItem("mw_koin_bintang");if(null==t)throw null;t=JSON.parse(t),this.list_koin_bintang=t}catch(e){console.log("mw_koin_bintang",e),localStorage.setItem("mw_koin_bintang",JSON.stringify([])),this.list_koin_bintang=[]}},methods:{ubahAktif:function(t,e){this.$store.dispatch("updateSinyal1InchBnbBsc",{symbol:t,value:{aktif:!e}}),this.$store.dispatch("updateAktifCoin",{nama_coin:t,edit:!1,aktif:!e}),this.jml_koin_aktif=this.$store.state.coin.coins.filter((function(t){return 1==t.aktif})).length,this.list_koin_nonaktif=this.$store.state.coin.coins.filter((function(t){return 0==t.aktif}))},addLogRequest:function(t){this.log_request.push("["+(new Date).toISOString()+"]"+t)},openModalLog:function(){this.$refs["modal-log"].show()},recalculateThreshold:function(){var t=this;this.threshold=0,this.listSinyal1InchBnbBsc.forEach((function(e){(parseFloat(e.selisih_pnl_kanan)>=t.limit_threshold||parseFloat(e.selisih_pnl_kiri)>=t.limit_threshold)&&t.threshold++}))},getBidPrice:function(t){var e=this.listBookTickerBNB.find((function(e){return e.symbol==t}));return void 0==e?0:e.bidPrice},clearHarga:function(){this.harga.btcusdt="loading",this.harga.btcbidr="loading",this.harga.ethusdt="loading",this.harga.ethbidr="loading",this.harga.bnbusdt="loading",this.harga.bnbbidr="loading",this.harga.usdtbidr="loading"},updateHarga:function(){this.harga.btcusdt=this.getBidPrice("BTCUSDT"),this.harga.btcbidr=this.getBidPrice("BTCBIDR"),this.harga.ethusdt=this.getBidPrice("ETHUSDT"),this.harga.ethbidr=this.getBidPrice("ETHBIDR"),this.harga.bnbusdt=this.getBidPrice("BNBUSDT"),this.harga.bnbbidr=this.getBidPrice("BNBBIDR"),this.harga.usdtbidr=this.getBidPrice("USDTBIDR")},filterTable:function(t,e){if(""!=e)return!(!t.aktif||!(parseFloat(t.selisih_pnl_kanan)>=this.limit_threshold||parseFloat(t.selisih_pnl_kiri)>=this.limit_threshold))},indvModal:function(t,e,i){this.fetchSinyal1InchBnbBsc(e,Object(n["a"])({},"modal_"+i,t.target.value))},updateModalKiri:function(t){this.$store.dispatch("settingSet",{name:"modal_kiri_1inch_bnb_bsc",value:t})},updateModalKanan:function(t){this.$store.dispatch("settingSet",{name:"modal_kanan_1inch_bnb_bsc",value:t})},updateDelay:function(t){this.axiosDelay=t,this.$store.dispatch("settingSet",{name:"delay_1inch_bnb_bsc",value:t})},updateAutoRequestDelay:function(t){this.auto_request_delay=t,this.$store.dispatch("settingSet",{name:"auto_request_delay",value:t})},updateRehat:function(t){this.axiosRehat=t,this.$store.dispatch("settingSet",{name:"rehat_1inch_bnb_bsc",value:t})},updateBatch:function(t){this.axiosBatch=t,this.$store.dispatch("settingSet",{name:"batch_1inch_bnb_bsc",value:t})},rowClass:function(t,e){if(t&&"row"===e)return parseFloat(t.selisih_pnl_kanan)>=this.limit_threshold||parseFloat(t.selisih_pnl_kiri)>=this.limit_threshold?"bg-green":void 0},refreshSinyal1InchBnbBsc:function(){this.$store.dispatch("registerSinyal1InchBnbBsc")},test2:function(){var t=400,e=BigInt("358516543755854128279"),i=BigInt("1".padEnd(19,"0")),a=(Number(100n*e/i)/100-t).toFixed(2);console.log(i),console.log(a)},test3:function(){var t="1Inch",e=this.$store.state.coin.coins.find((function(e){return e.nama_coin==t})),i=400,a=5.2024,s=i/a*Math.pow(10,parseInt(e.desimal));console.log(s.toString())},test4:function(){var t=this.modal_kanan_1inch_bnb_bsc*Math.pow(10,18);console.log(t)},registerAndStartFetchSinyal1InchBnbBsc2:function(){for(var t=0;t<110;t++){var e=1e4*Math.floor(t/25),i=25*Math.floor(t/25)*this.axiosDelay+e;console.log("to "+t,t*this.axiosDelay+i,e,i)}},registerAndStartFetchSinyal1InchBnbBsc:function(){var t=this;if(this.clearHarga(),this.axiosCancel=this.axiosCancelToken.source(),this.addLogRequest("START SETUP"),null==this.$store.state.coin.coins)return this.addLogRequest("KOIN KOSONG"),d.a.fire({title:"Belum ada koin yg didaftarkan!",text:"Silahkan impor settingan dahulu",icon:"error",heightAuto:!1}),!1;this.threshold=0,this.total_request=0,this.$store.dispatch("clearSinyal1InchBnbBsc").then((function(){t.total_request++,t.$store.dispatch("updateBookTickerBNB").then((function(e){console.log("respon",e),t.updateHarga(),"ok"!=e.status?d.a.fire({title:"Gagal memuat book ticker!",text:e.message,icon:"error",heightAuto:!1}):(t.addLogRequest("BINANCE UPDATED"),t.$store.dispatch("registerSinyal1InchBnbBsc").then((function(){t.listSinyal1InchBnbBsc.forEach((function(e,i){t.fetchSinyal1InchBnbBsc(e.symbol,void 0,i)}))})),t.$bvToast.toast("Book Ticker berhasil binance di update",{title:"Binance Book Ticker",variant:"success",solid:!0}))}))}))},cancelFetch:function(){window.location.reload(!1)},startFetchSinyal1InchBnbBsc:function(){var t=this;this.clearHarga(),this.axiosCancel=this.axiosCancelToken.source(),this.threshold=0,this.total_request=0,this.$store.dispatch("clearSinyal1InchBnbBsc").then((function(){t.total_request++,t.$store.dispatch("updateBookTickerBNB").then((function(e){t.updateHarga(),"ok"!=e.status?d.a.fire({title:"Gagal memuat book ticker!",text:e.message,icon:"error",heightAuto:!1}):(t.addLogRequest("BINANCE UPDATED"),t.listSinyal1InchBnbBsc.forEach((function(e,i){t.fetchSinyal1InchBnbBsc(e.symbol,void 0,i)})),t.$bvToast.toast("Book Ticker berhasil binance di update",{title:"Binance Book Ticker",variant:"success",solid:!0}))}))}))},fetchSinyal1InchBnbBsc:function(t,e,i){var a=this,s=this.axiosRehat*Math.floor(i/this.axiosBatch),n=this.axiosDelay*i;this.axiosError.timeout=[],this.axiosError.error=[],this.running_request+=2,this.total_request+=2;var o=this.listSinyal1InchBnbBsc.find((function(e){return e.symbol==t})),l=this.$store.state.coin.coins.find((function(e){return e.nama_coin==t}));void 0==e&&(e={});var c=this.$store.getters.getBookCoinPriceBNBAsk(t),u=this.$store.getters.getBookCoinPriceBNBBid(t);setTimeout((function(){a.$store.dispatch("updateSinyal1InchBnbBsc",{symbol:t,value:Object(r["a"])(Object(r["a"])({},e),{},{binance_ask_price:c.price,ask_xprice:void 0!==c.xprice?c.xprice:null,binance_bid_price:u.price,bid_xprice:void 0!==u.xprice?u.xprice:null,ask_pairPrice:void 0!==c.pairPrice?c.pairPrice:null,bid_pairPrice:void 0!==u.pairPrice?u.pairPrice:null,selisih_pnl_kiri:"<div class='spinner-border spinner-border-sm'></div>",inch_usdt:"<div class='spinner-border spinner-border-sm'></div>",selisih_pnl_kiri_persen:"<div class='spinner-border spinner-border-sm'></div>",inch_sum:"<div class='spinner-border spinner-border-sm'></div>",inch_price:"<div class='spinner-border spinner-border-sm'></div>",selisih_pnl_kanan:"<div class='spinner-border spinner-border-sm'></div>",selisih_pnl_kanan_persen:"<div class='spinner-border spinner-border-sm'></div>"})}).then((function(){if(0==o.binance_ask_price)return a.$store.dispatch("updateSinyal1InchBnbBsc",{symbol:t,value:Object(r["a"])(Object(r["a"])({},e),{},{selisih_pnl_kiri:0,inch_usdt:0,selisih_pnl_kiri_persen:0,inch_sum:0,inch_price:0,selisih_pnl_kanan:0,selisih_pnl_kanan_persen:0})}),a.running_request-=2,!0;var i=void 0!=e.modal_kiri?e.modal_kiri:o.modal_kiri,s=void 0!=e.modal_kanan?e.modal_kanan:o.modal_kanan,n=(i/c.price*Math.pow(10,parseInt(l.desimal))).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:0});h.a.get("https://api.1inch.exchange/v4.0/56/quote",{cancelToken:a.axiosCancel.token,params:{fromTokenAddress:l.coin_address,toTokenAddress:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",amount:n},timeout:1e3*(a.$store.state.setting.settings.timeout_request||15)}).then((function(e){a.running_request-=1;var n=e.data,r=BigInt(n.toTokenAmount),o=BigInt("1".padEnd(19,"0")),d=Number(10000n*r/o)/1e4-i,p=Number(10000n*r/o)/1e4/(i/c.price),b=d/i*100;a.$store.dispatch("updateSinyal1InchBnbBsc",{symbol:t,value:{selisih_pnl_kiri:d.toFixed(3),inch_usdt:p.toFixed(7),selisih_pnl_kiri_persen:b.toFixed(2)}});var _=BigInt(s*Math.pow(10,18)).toLocaleString("fullwide",{useGrouping:!1,maximumFractionDigits:0});h.a.get("https://api.1inch.exchange/v4.0/56/quote",{cancelToken:a.axiosCancel.token,params:{fromTokenAddress:"0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c",toTokenAddress:l.coin_address,amount:_},timeout:1e3*(a.$store.state.setting.settings.timeout_request||15)}).then((function(e){a.running_request-=1;var i=e.data,n=BigInt(i.toTokenAmount),r=BigInt("1".padEnd(parseInt(l.desimal)+1,"0")),o=Number(10000n*n/r)/1e4,c=0==o?0:s/o,h=o*u.price-s,p=0==o?0:h/s*100;(h>=a.limit_threshold||d>=a.limit_threshold)&&a.threshold++;var b=new Date;a.$store.dispatch("updateSinyal1InchBnbBsc",{symbol:t,value:{inch_sum:o.toFixed(2),inch_price:c.toFixed(7),selisih_pnl_kanan:h.toFixed(3),selisih_pnl_kanan_persen:p.toFixed(2),waktu_fetch:("0"+b.getHours()).slice(-2)+":"+("0"+b.getMinutes()).slice(-2)+":"+("0"+b.getSeconds()).slice(-2)}})})).catch((function(e){var i;if(a.running_request-=1,"ECONNABORTED"==e.code)i="timeout",a.addLogRequest("TIMEOUT: "+t+" "+l.coin_address),a.axiosError.timeout.push(t);else if(void 0!=e.response){i="error";var s=e.response.data.message||"general error";a.addLogRequest("ERROR: "+t+" : "+s+"<br>"+e.request.responseURL),a.axiosError.error.push(t)}else h.a.isCancel(e)?(a.addLogRequest("CANCELLED: "+t+" "+l.coin_address),i="canceled",a.axiosError.error.push(t)):(a.addLogRequest("NETWORK ERROR: "+t+" "+l.coin_address+" Request ditolak oleh 1Inch (CORS)"),i="error",a.axiosError.error.push(t));var n=new Date;a.$store.dispatch("updateSinyal1InchBnbBsc",{symbol:t,value:{inch_sum:i,inch_price:i,selisih_pnl_kanan:i,selisih_pnl_kanan_persen:i,waktu_fetch:("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)}}),console.log("Fetching 1Inch error",e)}))})).catch((function(e){var i;if(a.running_request-=2,"ECONNABORTED"==e.code)i="timeout",a.addLogRequest("TIMEOUT: "+t+" "+l.coin_address),a.axiosError.timeout.push(t);else if(void 0!=e.response){i="error";var s=e.response.data.message||"general error";a.addLogRequest("ERROR: "+t+" : "+s+" \n "+e.request.responseURL+" \n Cek nama koin!"),a.axiosError.error.push(t)}else h.a.isCancel(e)?(a.addLogRequest("CANCELLED: "+t+" "+l.coin_address),i="canceled",a.axiosError.error.push(t)):(a.addLogRequest("NETWORK ERROR: "+t+" "+l.coin_address+" Request ditolak oleh 1Inch (CORS)"),i="error",a.axiosError.error.push(t));var n=new Date;a.$store.dispatch("updateSinyal1InchBnbBsc",{symbol:t,value:{selisih_pnl_kiri:i,inch_usdt:i,selisih_pnl_kiri_persen:i,inch_sum:i,inch_price:i,selisih_pnl_kanan:i,selisih_pnl_kanan_persen:i,waktu_fetch:("0"+n.getHours()).slice(-2)+":"+("0"+n.getMinutes()).slice(-2)+":"+("0"+n.getSeconds()).slice(-2)}}),console.log("Fetching 1Inch error",e)}))}))}),s+n)},bintangFind:function(t){var e=this.list_koin_bintang.findIndex((function(e){return e.koin==t}));return e>=0?this.list_koin_bintang[e].class:"bintang-white"},bintangMark:function(t,e){console.log(e);var i=this.list_koin_bintang.findIndex((function(t){return t.koin==e})),a="";if(i>=0){var s=this.list_koin_bintang.splice(i,1);a="bintang-white"==s[0].class?"bintang-green":"bintang-green"==s[0].class?"bintang-red":"bintang-white",this.list_koin_bintang.push({koin:e,class:a})}else a="bintang-green",this.list_koin_bintang.push({koin:e,class:a});localStorage.setItem("mw_koin_bintang",JSON.stringify(this.list_koin_bintang)),"bintang-white"==a?(t.target.classList.add("bintang-white"),t.target.classList.remove("bintang-red"),t.target.classList.remove("bintang-green")):"bintang-green"==a?(t.target.classList.remove("bintang-white"),t.target.classList.remove("bintang-red"),t.target.classList.add("bintang-green")):(t.target.classList.remove("bintang-white"),t.target.classList.add("bintang-red"),t.target.classList.remove("bintang-green"))},CopyToClipboard:function(t){console.log(t);var e=document.createRange();e.selectNode(document.getElementById(t)),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),window.getSelection().removeAllRanges(),this.$bvToast.toast("data dicopy",{title:"Clipboard",variant:"info",solid:!1})},kalkulatorTool:function(t,e,i){this.kalkulator_data.defaultSource=i,this.kalkulator_data.pair=t,this.kalkulator_data.harga=e,this.kalkulator_data.trigger=!this.kalkulator_data.trigger,this.$refs["modal-calculator"].show()}}},_=b,f=i("2877"),g=i("6544"),m=i.n(g),k=i("7496"),B=Object(f["a"])(_,a,s,!1,null,null,null);e["default"]=B.exports;m()(B,{VApp:k["a"]})},f3f0:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",class:{"font-weight-bold font-italic":"IDR"==t.sourcePair}},[t._v("IDR")]),i("div",{staticClass:"col-sm-10"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"kalk_IDR",placeholder:"IDR"},domProps:{value:t.IDR},on:{input:function(e){return t.changeHarga(e,"IDR")}}})])]),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",class:{"font-weight-bold font-italic":"USDT"==t.sourcePair}},[t._v("USDT")]),i("div",{staticClass:"col-sm-10"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"kalk_USDT",placeholder:"USDT"},domProps:{value:t.USDT},on:{input:function(e){return t.changeHarga(e,"USDT")}}})])]),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",class:{"font-weight-bold font-italic":"ETH"==t.sourcePair}},[t._v("ETH")]),i("div",{staticClass:"col-sm-10"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"kalk_ETH",placeholder:"ETH"},domProps:{value:t.ETH},on:{input:function(e){return t.changeHarga(e,"ETH")}}})])]),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",class:{"font-weight-bold font-italic":"BTC"==t.sourcePair}},[t._v("BTC")]),i("div",{staticClass:"col-sm-10"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"kalk_BTC",placeholder:"BTC"},domProps:{value:t.BTC},on:{input:function(e){return t.changeHarga(e,"BTC")}}})])]),i("div",{staticClass:"form-group row"},[i("label",{staticClass:"col-sm-2 col-form-label",class:{"font-weight-bold font-italic":"BNB"==t.sourcePair}},[t._v("BNB")]),i("div",{staticClass:"col-sm-10"},[i("input",{staticClass:"form-control",attrs:{type:"text",id:"kalk_BNB",placeholder:"BNB"},domProps:{value:t.BNB},on:{input:function(e){return t.changeHarga(e,"BNB")}}})])]),i("div",{staticClass:"text-muted text-center mt-2"},[t._v("Binance Last Fetch : "+t._s(new Date(this.$store.state.binance.lastFetch).toLocaleString("id-ID")))]),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-info btn-xs",attrs:{disabled:t.loading},on:{click:t.updateBinance}},[t.loading?i("div",{staticClass:"spinner-border spinner-border-sm"}):t._e(),t._v(" Reload Binance & Rekalkulasi ")])])])},s=[],n=i("5530"),r=(i("b680"),i("7db0"),i("2f62")),o={name:"Kalkulator",props:{pair:String,harga:String,trigger:Boolean,defaultSource:String},data:function(){return{IDR:0,USDT:0,ETH:0,BTC:0,BNB:0,BTCUSDT:0,BTCBIDR:0,ETHBTC:0,ETHBIDR:0,ETHUSDT:0,BNBETH:0,USDTBIDR:0,BNBBTC:0,BNBBIDR:0,BNBUSDT:0,sourcePair:"IDR",loading:!1}},computed:Object(n["a"])({},Object(r["b"])(["listBookTicker"])),watch:{trigger:{handler:function(){this.sourcePair=void 0!==this.defaultSource?this.defaultSource:"USDT",this[this.sourcePair]=this.harga,this.updateBinance()},immediate:!0}},methods:{updateBinance:function(){var t=this;this.loading=!0,this.$store.dispatch("updateBookTicker").then((function(){t.hitung(t.sourcePair,t[t.sourcePair]),t.loading=!1}))},changeHarga:function(t,e){this.hitung(e,t.target.value)},hitung:function(t,e){switch(this.sourcePair=t,this.updateKonversi(),t="BUSD"==t?"USDT":t,this[t]=e,t){case"ETH":this.BTC=parseFloat(parseFloat(this[t])*parseFloat(this.ETHBTC)).toFixed(8),this.IDR=parseFloat(parseFloat(this[t])*parseFloat(this.ETHBIDR)).toLocaleString("en",{maximumFractionDigits:2}),this.USDT=parseFloat(parseFloat(this[t])*parseFloat(this.ETHUSDT)).toFixed(8),this.BNB=parseFloat(parseFloat(this[t])/parseFloat(this.BNBETH)).toFixed(8);break;case"BTC":this.ETH=parseFloat(parseFloat(this[t])/parseFloat(this.ETHBTC)).toFixed(8),this.IDR=parseFloat(parseFloat(this[t])*parseFloat(this.BTCBIDR)).toLocaleString("en",{maximumFractionDigits:2}),this.USDT=parseFloat(parseFloat(this[t])*parseFloat(this.BTCUSDT)).toFixed(8),this.BNB=parseFloat(parseFloat(this[t])/parseFloat(this.BNBBTC)).toFixed(8);break;case"IDR":this.ETH=parseFloat(parseFloat(this[t])/parseFloat(this.ETHBIDR)).toFixed(8),this.BTC=parseFloat(parseFloat(this[t])/parseFloat(this.BTCBIDR)).toFixed(8),this.USDT=parseFloat(parseFloat(this[t])/parseFloat(this.USDTBIDR)).toFixed(8),this.BNB=parseFloat(parseFloat(this[t])/parseFloat(this.BNBBIDR)).toFixed(8);break;case"USDT":this.ETH=parseFloat(parseFloat(this[t])/parseFloat(this.ETHUSDT)).toFixed(8),this.BTC=parseFloat(parseFloat(this[t])/parseFloat(this.BTCUSDT)).toFixed(8),this.IDR=parseFloat(parseFloat(this[t])*parseFloat(this.USDTBIDR)).toLocaleString("en",{maximumFractionDigits:2}),this.BNB=parseFloat(parseFloat(this[t])/parseFloat(this.BNBUSDT)).toFixed(8);break;case"BNB":this.ETH=parseFloat(parseFloat(this[t])*parseFloat(this.BNBETH)).toFixed(8),this.BTC=parseFloat(parseFloat(this[t])*parseFloat(this.BNBBTC)).toFixed(8),this.IDR=parseFloat(parseFloat(this[t])*parseFloat(this.BNBBIDR)).toLocaleString("en",{maximumFractionDigits:2}),this.USDT=parseFloat(parseFloat(this[t])*parseFloat(this.BNBUSDT)).toFixed(8);break}},getAskPrice:function(t){var e=this.listBookTicker.find((function(e){return e.symbol==t}));return void 0==e?0:e.askPrice},updateKonversi:function(){this.BTCUSDT=this.getAskPrice("BTCUSDT"),this.BTCBIDR=this.getAskPrice("BTCBIDR"),this.ETHBTC=this.getAskPrice("ETHBTC"),this.ETHBIDR=this.getAskPrice("ETHBIDR"),this.ETHUSDT=this.getAskPrice("ETHUSDT"),this.BNBETH=this.getAskPrice("BNBETH"),this.USDTBIDR=this.getAskPrice("USDTBIDR"),this.BNBBTC=this.getAskPrice("BNBBTC"),this.BNBBIDR=this.getAskPrice("BNBBIDR"),this.BNBUSDT=this.getAskPrice("BNBUSDT")}}},l=o,c=i("2877"),h=Object(c["a"])(l,a,s,!1,null,null,null);e["a"]=h.exports}}]);
//# sourceMappingURL=chunk-a40124a0.2c091495.js.map