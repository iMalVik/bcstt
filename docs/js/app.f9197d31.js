(function(e){function t(t){for(var a,s,o=t[0],c=t[1],u=t[2],d=0,f=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&f.push(r[s][0]),r[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);l&&l(t);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={app:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15a4":function(e,t,n){var a={"./en.json":"e088","./ru.json":"626a"};function r(e){var t=i(e);return n(t)}function i(e){if(!n.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=i,e.exports=r,r.id="15a4"},"4baf":function(e,t,n){},5244:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("CurrencyRates")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"currency-rates"},[n("v-card",[n("v-card-title",{staticClass:"pt-2 pb-2"},[n("h2",[e._v(" "+e._s(e.$t("currencyRates.title")))]),n("v-spacer"),n("btn-theme"),n("btn-menu-locales")],1),n("table-rates",{attrs:{headers:e.headers}})],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-locales"},[n("v-menu",{attrs:{bottom:"",origin:"center center",transition:"scale-transition"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{text:""}},"v-btn",r,!1),a),[n("country-flag",{staticClass:"ma-0 pa-0",attrs:{country:e.$t("iconLang"),left:""}}),n("div",{staticClass:"mr-2"},[e._v(e._s(e.$t("lang")))])],1)]}}])},[n("v-list",e._l(e.locales,(function(t,a){return n("v-list-item",{key:a,on:{click:function(n){return e.changeLocale(t)}}},[n("country-flag",{staticClass:"width-flag ma-0 pa-0",attrs:{country:t.icon,left:""}}),n("v-list-item-title",{staticClass:"styleLocaleName"},[e._v(e._s(t.name.toUpperCase()))])],1)})),1)],1)],1)},u=[],l={name:"MenuLocales",data:function(){return{locales:[{name:"English",icon:"gb",lang:"en"},{name:"Русский",icon:"ru",lang:"ru"}]}},methods:{changeLocale:function(e){this.$i18n.locale=e.lang,this.iconLang=e.icon}}},d=l,f=(n("b227"),n("2877")),m=n("6544"),v=n.n(m),h=n("8336"),b=n("8860"),g=n("da13"),p=n("5d23"),y=n("e449"),_=Object(f["a"])(d,c,u,!1,null,"a3bf36c8",null),C=_.exports;v()(_,{VBtn:h["a"],VList:b["a"],VListItem:g["a"],VListItemTitle:p["b"],VMenu:y["a"]});var x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-data-table",{staticClass:"elevation-17",attrs:{headers:e.headers,items:e.rates,"sort-by":"ID","multi-sort":"",search:e.search,loading:e.isLoading,"loading-text":this.$t("currencyRates.loadingText")},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("div",[n("hr",{staticClass:"mb-2 mt-2",attrs:{color:"lightgrey"}}),n("v-dialog",{attrs:{"max-width":"500px"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2 mr-4",attrs:{disabled:e.isLoading}},"v-btn",r,!1),a),[n("v-icon",{attrs:{left:"",color:"grey"}},[e._v("mdi-plus")]),e._v(e._s(e.$t("currencyRates.add")))],1)]}}]),model:{value:e.isDialog,callback:function(t){e.isDialog=t},expression:"isDialog"}},[n("v-card",[n("v-card-title",[n("span",{staticClass:"headline"},[e._v(e._s(e.formTitle))])]),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:e.$t("currencyRates.headers.currencyLetterCode"),outlined:"",rounded:"",clearable:"",dense:""},model:{value:e.editedItem.Cur_Abbreviation,callback:function(t){e.$set(e.editedItem,"Cur_Abbreviation",t)},expression:"editedItem.Cur_Abbreviation"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:e.$t("currencyRates.headers.currencyName"),outlined:"",rounded:"",clearable:"",dense:""},model:{value:e.editedItem.Cur_Name,callback:function(t){e.$set(e.editedItem,"Cur_Name",t)},expression:"editedItem.Cur_Name"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:e.$t("currencyRates.headers.numberOfCurrencyUnits"),outlined:"",rounded:"",clearable:"",dense:""},model:{value:e.editedItem.Cur_Scale,callback:function(t){e.$set(e.editedItem,"Cur_Scale",t)},expression:"editedItem.Cur_Scale"}})],1),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:e.$t("currencyRates.headers.courseToBelRuble"),outlined:"",rounded:"",clearable:"",dense:""},model:{value:e.editedItem.Cur_OfficialRate,callback:function(t){e.$set(e.editedItem,"Cur_OfficialRate",t)},expression:"editedItem.Cur_OfficialRate"}})],1)],1)],1)],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{rounded:""},on:{click:e.saveItem}},[e._v(e._s(e.$t("currencyRates.save")))]),n("v-btn",{attrs:{rounded:""},on:{click:e.close}},[e._v(e._s(e.$t("currencyRates.cancel")))])],1)],1)],1),n("v-btn",{staticClass:"mb-2",attrs:{loading:e.isLoading,disabled:e.isLoading},on:{click:e.initialize},scopedSlots:e._u([{key:"loader",fn:function(){return[n("span",{staticClass:"custom-loader"},[n("v-icon",{attrs:{light:""}},[e._v("mdi-cached")])],1)]},proxy:!0}])},[n("v-icon",{attrs:{left:"",color:"grey"}},[e._v("mdi-update")]),e._v(e._s(e.$t("currencyRates.updateData")))],1)],1),n("v-spacer"),n("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:e.$t("currencyRates.search"),"hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)]},proxy:!0},{key:"item.actions",fn:function(t){var a=t.item;return[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[n("v-icon",e._g(e._b({staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(a,a.ID)}}},"v-icon",i,!1),r),[e._v("mdi-pencil")])]}}],null,!0)},[n("span",[e._v(e._s(e.$t("tooltip.edit")))])]),n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var r=t.on,i=t.attrs;return[n("v-icon",e._g(e._b({attrs:{small:""},on:{click:function(t){return e.deleteItem(a)}}},"v-icon",i,!1),r),[e._v("mdi-delete")])]}}],null,!0)},[n("span",[e._v(e._s(e.$t("tooltip.delete")))])])]}},{key:"no-data",fn:function(){return[n("v-btn",{on:{click:e.initialize}},[e._v(e._s(e.$t("currencyRates.updateData")))])]},proxy:!0}])})},I=[],R=(n("4de4"),n("d81d"),n("d3b7"),n("2909")),w={name:"Table",props:{headers:{type:Array,required:!0}},data:function(){return{isDialog:!1,keyRates:"rates",search:"",loading:!1,rates:[],newRates:[],isLoading:!1,editedIndex:-1,editedItem:{ID:"",Cur_Abbreviation:"",Cur_Name:"",Cur_Scale:"",Cur_OfficialRate:""},defaultItem:{ID:"",Cur_Abbreviation:"",Cur_Name:"",Cur_Scale:"",Cur_OfficialRate:""}}},computed:{formTitle:function(){return this.$t("currencyRates."+(-1===this.editedIndex?"newCurrency":"currencyEditing"))}},watch:{isDialog:function(e){e||this.close()},newRates:function(e){var t=this;setTimeout((function(){new Promise((function(n){sessionStorage.setItem(t.keyRates,JSON.stringify(e)),n(e)})).then((function(e){t.rates=e})).then((function(){t.isLoading=!1})).catch((function(){t.defaultErrorMessage()}))}),2e3)}},mounted:function(){var e=this;null!==sessionStorage.getItem(this.keyRates)?this.getRatesFromSession().then((function(t){e.rates=t})).then((function(){e.isLoading=!1})).catch((function(){e.defaultErrorMessage()})):this.initialize()},methods:{initialize:function(){var e=this;this.isLoading=!0,setTimeout((function(){fetch("https://www.nbrb.by/api/exrates/rates?periodicity=0").then((function(e){return e.json()})).catch((function(){alert(e.$t("currencyRates.messages.downloadFromServerFailed"))})).then((function(e){return e.map((function(e,t){return e.ID=++t,delete e.Date,delete e.Cur_ID,e}))})).then((function(e){return sessionStorage.setItem("rates",JSON.stringify(e)),e})).then((function(t){e.rates=t})).then((function(){e.isLoading=!1})).catch((function(){e.defaultErrorMessage()}))}),2e3)},getRatesFromSession:function(){var e=this;return this.isLoading=!0,new Promise((function(t){t(JSON.parse(sessionStorage.getItem(e.keyRates)))}))},editItem:function(e){this.editedIndex=e.ID,this.editedItem=Object.assign({},e),this.isDialog=!0},deleteItem:function(e){var t=this;confirm(this.$t("currencyRates.messages.areYouSureYouWantToDeleteTheEntry"))&&this.getRatesFromSession().then((function(t){return t.filter((function(t){return t.ID!==e.ID}))})).then((function(e){t.newRates=e})).catch((function(){t.defaultErrorMessage()}))},saveItem:function(){var e=this;this.getRatesFromSession().then((function(t){return e.editedIndex>-1?t.map((function(t){return t.ID===e.editedIndex?e.editedItem:t})):(e.editedItem.ID=e.searchNextUniID(t),t.push(e.editedItem),t)})).then((function(t){e.newRates=t})).then((function(){e.close()})).catch((function(){e.defaultErrorMessage()}))},searchNextUniID:function(e){return Math.max.apply(Math,Object(R["a"])(e.map((function(e){return e.ID}))))+1},close:function(){var e=this;this.isDialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},defaultErrorMessage:function(){alert(this.$t("currencyRates.messages.defaultErrMessage")),sessionStorage.clear()}}},S=w,k=(n("ca20"),n("b0af")),T=n("99d9"),$=n("62ad"),O=n("a523"),D=n("8fea"),N=n("169a"),L=n("132d"),E=n("0fd9"),V=n("2fa4"),j=n("8654"),A=n("71d9"),M=n("3a2f"),P=Object(f["a"])(S,x,I,!1,null,"007d0dd1",null),B=P.exports;v()(P,{VBtn:h["a"],VCard:k["a"],VCardActions:T["a"],VCardText:T["b"],VCardTitle:T["c"],VCol:$["a"],VContainer:O["a"],VDataTable:D["a"],VDialog:N["a"],VIcon:L["a"],VRow:E["a"],VSpacer:V["a"],VTextField:j["a"],VToolbar:A["a"],VTooltip:M["a"]});var F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn-theme"},[n("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-btn",e._g(e._b({attrs:{text:""},on:{click:e.changeTheme}},"v-btn",r,!1),a),[n("div",{staticClass:"styleThemeIcon mr-4",style:e.themeNow.style}),n("div",{staticClass:"mr-2"},[e._v(e._s(e.themeNow.name))])])]}}])},[n("span",[e._v(e._s(e.$t("theme.theme")))])])],1)},U=[],J={name:"BtnMenuTheme",data:function(){return{}},computed:{themeNow:function(){var e=this.$vuetify.theme.dark;return{name:this.$t("theme."+(e?"dark":"light")),style:{backgroundColor:e?"black":"white"}}}},methods:{changeTheme:function(){this.$vuetify.theme.dark=!this.$vuetify.theme.dark}}},Y=J,z=(n("dce5"),Object(f["a"])(Y,F,U,!1,null,"95a29e18",null)),W=z.exports;v()(z,{VBtn:h["a"],VTooltip:M["a"]});var q={name:"CurrencyRates",components:{BtnTheme:W,TableRates:B,BtnMenuLocales:C},data:function(){return{}},computed:{headers:function(){return[{text:this.$t("currencyRates.headers.lineNumber"),align:"start",value:"ID"},{text:this.$t("currencyRates.headers.currencyLetterCode"),value:"Cur_Abbreviation"},{text:this.$t("currencyRates.headers.currencyName"),value:"Cur_Name"},{text:this.$t("currencyRates.headers.numberOfCurrencyUnits"),value:"Cur_Scale"},{text:this.$t("currencyRates.headers.courseToBelRuble"),value:"Cur_OfficialRate"},{value:"actions",sortable:!1}]}}},Z=q,G=(n("8748"),Object(f["a"])(Z,s,o,!1,null,null,null)),H=G.exports;v()(G,{VCard:k["a"],VCardTitle:T["c"],VSpacer:V["a"]});var K={name:"App",components:{CurrencyRates:H},data:function(){return{}}},Q=K,X=n("7496"),ee=n("a75b"),te=Object(f["a"])(Q,r,i,!1,null,null,null),ne=te.exports;v()(te,{VApp:X["a"],VContent:ee["a"]});var ae=n("f309"),re=n("a925"),ie=n("5530"),se=n("3aa4"),oe={$vuetify:Object(ie["a"])(Object(ie["a"])({},se["en"]),{},{dataTable:{itemsPerPageText:"Number of items per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"}})},ce={$vuetify:Object(ie["a"])(Object(ie["a"])({},se["ru"]),{},{dataTable:{itemsPerPageText:"Количество элементов на странице:",ariaLabel:{sortDescending:"Упорядочено по убыванию.",sortAscending:"Упорядочено по возрастанию.",sortNone:"Не упорядочено.",activateNone:"Активируйте, чтобы убрать сортировку.",activateDescending:"Активируйте для упорядочивания убыванию.",activateAscending:"Активируйте для упорядочивания по возрастанию."},sortBy:"Сортировать по"}})};a["a"].use(ae["a"]),a["a"].use(re["a"]);var ue=new re["a"]({locale:"ru",messages:{en:oe,ru:ce}}),le=new ae["a"]({lang:{t:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];return ue.t(e,n)}}});n("4160"),n("ac1f"),n("466d"),n("159b"),n("ddb0");function de(){var e=n("15a4"),t={};return e.keys().forEach((function(n){var a=n.match(/([A-Za-z0-9-_]+)\./i);if(a&&a.length>1){var r=a[1];t[r]=e(n)}})),t}a["a"].use(re["a"]);var fe=new re["a"]({locale:"ru",fallbackLocale:"en",messages:de()}),me=n("eea2");a["a"].component("country-flag",me["a"]),a["a"].config.productionTip=!1,new a["a"]({vuetify:le,i18n:fe,render:function(e){return e(ne)}}).$mount("#app")},"626a":function(e){e.exports=JSON.parse('{"test":"Здравствуйте i18n RU !!","lang":"Русский","iconLang":"ru","tooltip":{"edit":"Редактировать","delete":"Удалить"},"currencyRates":{"title":"Курсы валют","add":"Добавить","cancel":"Отмена","save":"Сохранить","updateData":"Обновить данные","search":"Поиск","headers":{"lineNumber":"Номер строки","currencyLetterCode":"Буквенный код валюты","currencyName":"Наименование валюты","numberOfCurrencyUnits":"Количество единиц валюты","courseToBelRuble":"Курс к бел. рублю"},"loadingText":"Загрузка... Пожалуйста подождите!","newCurrency":"Новая валюта","currencyEditing":"Редактирование валюты","messages":{"defaultErrMessage":"Что-то пошло не так! Попробуйте перезагрузить страницу и заново взаимодействовать с данными.","downloadFromServerFailed":"Загрузка с сервера не удалась!","areYouSureYouWantToDeleteTheEntry":"Вы действительно хотите удалить запись?"}},"theme":{"theme":"Тема","light":"Светлая","dark":"Тёмная"}}')},8748:function(e,t,n){"use strict";var a=n("b6b3"),r=n.n(a);r.a},b227:function(e,t,n){"use strict";var a=n("5244"),r=n.n(a);r.a},b6b3:function(e,t,n){},ca20:function(e,t,n){"use strict";var a=n("4baf"),r=n.n(a);r.a},dce5:function(e,t,n){"use strict";var a=n("ffcc"),r=n.n(a);r.a},e088:function(e){e.exports=JSON.parse('{"test":"hello i18n EN!!","lang":"English","iconLang":"gb","tooltip":{"edit":"Edit","delete":"Delete"},"currencyRates":{"title":"Currency rates","add":"Add","cancel":"Cancel","save":"Save","updateData":"Update data","search":"Search","headers":{"lineNumber":"Line number","currencyLetterCode":"Currency letter code","currencyName":"Currency Name","numberOfCurrencyUnits":"Number of currency units","courseToBelRuble":"The Course to the belarusian ruble"},"loadingText":"Loading... Please wait","newCurrency":"New Currency","currencyEditing":"Currency Editing","messages":{"defaultErrMessage":"Something went wrong! Try reloading the page and interacting with the data again.","downloadFromServerFailed":"Download from server failed!","areYouSureYouWantToDeleteTheEntry":"Are you sure you want to delete the entry?"}},"theme":{"theme":"Theme","light":"Light","dark":"Dark"}}')},ffcc:function(e,t,n){}});
//# sourceMappingURL=app.f9197d31.js.map