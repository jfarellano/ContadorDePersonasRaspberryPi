(function(t){function a(a){for(var s,i,c=a[0],o=a[1],l=a[2],u=0,f=[];u<c.length;u++)i=c[u],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&f.push(n[i][0]),n[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);d&&d(a);while(f.length)f.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,c=1;c<e.length;c++){var o=e[c];0!==n[o]&&(s=!1)}s&&(r.splice(a--,1),t=i(i.s=e[0]))}return t}var s={},n={app:0},r=[];function i(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=s,i.d=function(t,a,e){i.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,a){if(1&a&&(t=i(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)i.d(e,s,function(a){return t[a]}.bind(null,s));return e},i.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(a,"a",a),a},i.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},i.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var d=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";e("85ec")},4678:function(t,a,e){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(t){var a=r(t);return e(a)}function r(t){if(!e.o(s,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return s[t]}n.keys=function(){return Object.keys(s)},n.resolve=r,t.exports=n,n.id="4678"},"4ac7":function(t,a,e){"use strict";e("4c53")},"4c53":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s,n,r=e("2b0e"),i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("Home")],1)},c=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-container"},[t._m(0),e("div",{staticClass:"content-container"},[e("div",{staticClass:"courrent-stats"},[e("div",{staticClass:"card"},[e("div",{staticClass:"title"},[t._v("Total")]),e("div",{staticClass:"number"},[t._v(" "+t._s(t.Utils.todayStats(t.filterByDays(),"TOTAL"))+" ")])]),e("div",{staticClass:"card"},[e("div",{staticClass:"title"},[t._v("Entradas")]),e("div",{staticClass:"number"},[t._v(t._s(t.Utils.todayStats(t.filterByDays(),"IN")))])]),e("div",{staticClass:"card"},[e("div",{staticClass:"title"},[t._v("Salidas")]),e("div",{staticClass:"number"},[t._v(" "+t._s(t.Utils.todayStats(t.filterByDays(),"OUT"))+" ")])])]),e("Tabs",{attrs:{actions:t.filterByDays(),dataReady:t.dataReady}})],1)])},l=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"banner"},[e("p",[t._v("Contador de personas")])])}],d=e("1da1"),u=(e("96cf"),e("d3b7"),e("159b"),e("d81d"),e("ac1f"),e("1276"),function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"tabs-container"},[e("div",{staticClass:"headers"},[e("div",{class:t.tabClass(1),on:{click:function(a){return t.changeTab(1)}}},[t._v("Todos")]),e("div",{class:t.tabClass(2),on:{click:function(a){return t.changeTab(2)}}},[t._v("Entradas")]),e("div",{class:t.tabClass(3),on:{click:function(a){return t.changeTab(3)}}},[t._v("Salidas")])]),e("div",{staticClass:"body"},[e("h2",[t._v("Promedio por horas")]),e("div",{staticClass:"dates"},[e("div",{staticClass:"date"},[e("label",[t._v("Inicio")]),e("datepicker",{attrs:{"clear-button":!0,format:"yyyy-MM-dd"},model:{value:t.initial,callback:function(a){t.initial=a},expression:"initial"}})],1),e("div",{staticClass:"date"},[e("label",[t._v("Fin")]),e("datepicker",{attrs:{"clear-button":!0,format:"yyyy-MM-dd"},model:{value:t.final,callback:function(a){t.final=a},expression:"final"}})],1),e("button",{on:{click:function(a){return t.apply()}}},[t._v("Aplicar")])]),t.dataReady?e("div",[1==t.tab?e("Bar",{ref:"chart1",attrs:{data:t.utils.hourAvergage(t.actions,"TOTAL",t.initial,t.final).data,labels:t.utils.hourAvergage(t.actions,"TOTAL",t.initial,t.final).labels}}):2==t.tab?e("Bar",{ref:"chart2",attrs:{data:t.utils.hourAvergage(t.actions,"IN",t.initial,t.final).data,labels:t.utils.hourAvergage(t.actions,"IN",t.initial,t.final).labels}}):3==t.tab?e("Bar",{ref:"chart3",attrs:{data:t.utils.hourAvergage(t.actions,"OUT",t.initial,t.final).data,labels:t.utils.hourAvergage(t.actions,"OUT",t.initial,t.final).labels}}):t._e()],1):t._e()])])}),f=[],b=e("1fca"),j={extends:b["a"],props:["data","labels"],data:function(){return{options:{responsive:!0,maintainAspectRatio:!1,legend:{display:!1}}}},computed:{chartdata:function(){return{labels:this.labels,datasets:[{backgroundColor:"#f87979",data:this.data}]}}},mounted:function(){this.renderChart(this.chartdata,this.options)},methods:{update:function(){this.renderChart(this.chartdata,this.options)}}},h=j,p=e("2877"),m=Object(p["a"])(h,s,n,!1,null,null,null),v=m.exports,y=(e("07ac"),e("4e82"),e("b64b"),{average:function(t,a,e){return(t*a+e)/(t+1)},hourAvergage:function(t,a,e,s){var n=this;e=e||new Date(0),s=s||new Date;var r={labels:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],data:[],size:[]};return Object.values(t).forEach((function(t){var i=0;t.jsDate<=s&&t.jsDate>=e&&Object.keys(t.hourly).sort().forEach((function(e){var s=parseInt(e),c=r.data[s],o=r.size[s],l=t.hourly[e]["IN"]-t.hourly[e]["OUT"];i+=l;var d="TOTAL"==a?i:t.hourly[e][a];c?(c=n.average(o,c,d),++o):d&&(c=d,o=1),r.data[s]=c,r.size[s]=o}))})),r},todayStats:function(t,a){var e=new Date,s=1==(e.getHours()+"").length?"0"+e.getHours():e.getHours()+"",n=t[e.toISOString().split("T")[0]],r=0;return n?(Object.keys(n.hourly).sort().forEach((function(t){if(s>=t)if("TOTAL"==a){var e=n.hourly[t]["IN"]-n.hourly[t]["OUT"];r+=e}else r+=n.hourly[t][a]})),r):0}}),g=e("fa33"),O={props:{actions:{default:{}},dataReady:{default:!1}},components:{Bar:v,Datepicker:g["a"]},data:function(){return{tab:1,initial:null,final:null}},methods:{tabClass:function(t){return this.tab==t?"selected tab":"tab"},changeTab:function(t){var a=this;this.tab=t,setTimeout((function(){a.$refs["chart"+t].update()}),300)},apply:function(){var t=this;setTimeout((function(){t.$refs["chart"+t.tab].update()}),300)}},computed:{utils:function(){return y}}},T=O,k=(e("4ac7"),Object(p["a"])(T,u,f,!1,null,"5c26fff6",null)),U=k.exports,_={name:"Home",props:{msg:String},components:{Tabs:U},data:function(){return{actions:[],dataReady:!1}},methods:{updateData:function(){this.data[1]=35,this.$refs.chart.update()},filterByDays:function(){var t=this,a={};return this.actions.forEach((function(e){a[t.dateSting(e.formatDate)]?a[t.dateSting(e.formatDate)].all.push(e):a[t.dateSting(e.formatDate)]={date:t.dateSting(e.formatDate),jsDate:e.date,IN:0,OUT:0,hourly:{"00":{IN:0,OUT:0},"01":{IN:0,OUT:0},"02":{IN:0,OUT:0},"03":{IN:0,OUT:0},"04":{IN:0,OUT:0},"05":{IN:0,OUT:0},"06":{IN:0,OUT:0},"07":{IN:0,OUT:0},"08":{IN:0,OUT:0},"09":{IN:0,OUT:0},10:{IN:0,OUT:0},11:{IN:0,OUT:0},12:{IN:0,OUT:0},13:{IN:0,OUT:0},14:{IN:0,OUT:0},15:{IN:0,OUT:0},16:{IN:0,OUT:0},17:{IN:0,OUT:0},18:{IN:0,OUT:0},19:{IN:0,OUT:0},20:{IN:0,OUT:0},21:{IN:0,OUT:0},22:{IN:0,OUT:0},23:{IN:0,OUT:0}},all:[e],weekDay:e.date.getDay()},a[t.dateSting(e.formatDate)].hourly[e.time.hour][e.action]++,a[t.dateSting(e.formatDate)][e.action]++})),setTimeout((function(){t.dataReady=!0}),600),a},dateSting:function(t){return t.year+"-"+t.month+"-"+t.day},getData:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){var e,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,t.axios.get("http://localhost:5000/logs");case 2:e=a.sent,s=e.data,n=s.actions,t.actions=n.map((function(t){return{action:t.action,time:{hour:t.time.split(":")[0],minute:t.time.split(":")[1]},date:new Date(t.date.split("-")[1]+"/"+t.date.split("-")[2]+"/"+t.date.split("-")[0]),formatDate:{year:t.date.split("-")[0],month:t.date.split("-")[1],day:t.date.split("-")[2]}}}));case 6:case"end":return a.stop()}}),a)})))()}},computed:{Utils:function(){return y}},mounted:function(){var t=this;return Object(d["a"])(regeneratorRuntime.mark((function a(){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t.getData(),setInterval((function(){t.getData()}),1e4);case 2:case"end":return a.stop()}}),a)})))()}},I=_,N=(e("8b71"),Object(p["a"])(I,o,l,!1,null,null,null)),w=N.exports,C={name:"App",components:{Home:w}},D=C,z=(e("034f"),Object(p["a"])(D,i,c,!1,null,null,null)),x=z.exports,S=e("bc3a"),A=e.n(S),E=e("130e");r["a"].config.productionTip=!1,r["a"].use(E["a"],A.a),new r["a"]({render:function(t){return t(x)}}).$mount("#app")},"85ec":function(t,a,e){},"88d7":function(t,a,e){},"8b71":function(t,a,e){"use strict";e("88d7")}});
//# sourceMappingURL=app.210e9526.js.map