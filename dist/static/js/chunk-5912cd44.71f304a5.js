(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5912cd44"],{"05ef":function(t,a,e){},"17b9":function(t,a,e){"use strict";var i=e("05ef"),s=e.n(i);s.a},"66cf":function(t,a,e){"use strict";var i=e("c153"),s=e.n(i);s.a},"6e67":function(t,a,e){"use strict";var i=e("ae61"),s=e.n(i);s.a},"84b9":function(t,a,e){},"92dd":function(t,a,e){"use strict";var i=e("84b9"),s=e.n(i);s.a},9406:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"dashboard-container"},[e("div",{staticClass:"top"},[e("partA",{staticStyle:{float:"left"}}),t._v(" "),e("partB",{staticStyle:{float:"left"}})],1),t._v(" "),e("div",{staticClass:"down"},[e("partC",{staticStyle:{float:"left"}}),t._v(" "),e("partD",{staticStyle:{float:"left"}})],1)])},s=[],n=e("db72"),l=e("2f62"),r=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"partA"},[e("div",{staticClass:"partA-header"},[e("div",{staticClass:"title-pic"}),t._v(" "),e("div",{staticStyle:{"font-size":"12px",color:"#303133",float:"left","margin-top":"6px","margin-left":"3px"}},[t._v("客户端违规次数统计")])]),t._v(" "),e("div",{staticClass:"partA-divider"}),t._v(" "),e("div",{staticClass:"partA-body",attrs:{id:"chart"}})])}],c=(e("7f7f"),e("95d56")),d={name:"PartA",components:{},mounted:function(){this.initChart()},data:function(){return{list:[]}},methods:{initChart:function(){var t=this,a=this.$echarts.init(document.getElementById("chart"));Object(c["a"])().then((function(e){t.list=e.data.items;var i=t.getOption();a.setOption(i)}))},getOption:function(){for(var t=[],a=["总违规次数","违规USB拷贝","违规Web","其他"],e=[],i=[],s=[],n=[],l=0;l<this.list.length;l++)t.push(this.list[l].name),e.push(this.list[l].total),i.push(this.list[l].usb),s.push(this.list[l].web),n.push(this.list[l].others);var r=[e,i,s,n],o=[];for(l=0;l<t.length;l++)o.push({name:a[l],type:"bar",data:r[l],barGap:"5%",itemStyle:{normal:{barBorderRadius:[3,3,0,0]}},markPoint:{data:[{type:"max",name:"最大值"}]},markLine:{data:[{type:"average",name:"平均值"}]}});var c={tooltip:{trigger:"axis",axisPointer:{type:"shadow"},textStyle:{fontSize:13}},color:["#22b8ed","#ffd54f","#fb8f8e","#494949"],legend:{data:a,align:"right",right:10,top:10,textStyle:{color:"#606266",fontSize:10},itemWidth:10,itemHeight:10,itemGap:35},grid:{left:"2%",right:"4%",bottom:"3%",backgroundColor:"#303133",containLabel:!0},xAxis:[{type:"category",data:t,axisLine:{lineStyle:{color:"#606266"},textStyle:{color:"#606266",fontSize:10}}}],yAxis:[{type:"value",name:"次",axisLabel:{formatter:"{value}"},axisLine:{lineStyle:{color:"#606266"},textStyle:{color:"#606266",fontSize:10}}}],series:o};return c}}},u=d,m=(e("92dd"),e("2877")),v=Object(m["a"])(u,r,o,!1,null,null,null),p=v.exports,f=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"partB"},[t._m(0),t._v(" "),e("div",{staticClass:"partB-body"},[e("el-tabs",{model:{value:t.activeName,callback:function(a){t.activeName=a},expression:"activeName"}},[e("el-tab-pane",{attrs:{name:"first"}},[e("span",{staticStyle:{"font-size":"12px",color:"#303133"},attrs:{slot:"label"},slot:"label"},[t._v("\n                    在线用户\n                ")]),t._v(" "),[e("div",{staticClass:"partB-left",attrs:{id:"online-user"}}),t._v(" "),e("div",{staticClass:"partB-divider"}),t._v(" "),e("div",{staticClass:"partB-right"},[e("div",{staticStyle:{"margin-top":"70px","margin-left":"30px","font-size":"12px",color:"#606266"}},[t._v("\n                            在线人数："+t._s(t.online_user)+"\n                        ")]),t._v(" "),e("div",{staticStyle:{"font-size":"12px",color:"#606266","margin-left":"30px","margin-top":"15px"}},[t._v("\n                            总用户人数："+t._s(t.total)+" \n                        ")])]),t._v(" "),e("div",{staticClass:"partB-button"},[e("el-button",{staticStyle:{padding:"5px",width:"50px","font-size":"10px"},attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){return t.goToUser()}}},[t._v("\n                            去管理\n                        ")])],1)]],2),t._v(" "),e("el-tab-pane",{attrs:{name:"second"}},[e("span",{staticStyle:{"font-size":"12px",color:"#303133"},attrs:{slot:"label"},slot:"label"},[t._v("\n                    违规用户\n                ")]),t._v(" "),[e("div",{staticClass:"partB-left",attrs:{id:"validate-user"}}),t._v(" "),e("div",{staticClass:"partB-divider"}),t._v(" "),e("div",{staticClass:"partB-right"},[e("div",{staticStyle:{"margin-top":"70px","margin-left":"30px","font-size":"12px",color:"#606266"}},[t._v("\n                            总违规用户数："+t._s(t.validation_user)+"\n                        ")]),t._v(" "),e("div",{staticStyle:{"font-size":"12px",color:"#606266","margin-left":"30px","margin-top":"15px"}},[t._v("\n                            总用户人数："+t._s(t.total)+"\n                        ")])]),t._v(" "),e("div",{staticClass:"partB-button"},[e("el-button",{staticStyle:{padding:"5px",width:"50px","font-size":"10px"},attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){return t.goToUser()}}},[t._v("\n                            去管理\n                        ")])],1)]],2)],1)],1)])},h=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"partB-header"},[e("div",{staticClass:"title-pic"}),t._v(" "),e("div",{staticStyle:{"font-size":"12px",color:"#303133",float:"left","margin-top":"6px","margin-left":"3px"}},[t._v("\n        客户端状态")])])}],_=(e("a481"),{name:"PartB",data:function(){return{activeName:"first",online_user:0,total:0,validation_user:0}},mounted:function(){this.initChart1(),this.initChart2()},methods:{initChart1:function(){var t=this,a=this.$echarts.init(document.getElementById("online-user"));Object(c["b"])().then((function(e){t.total=e.data.items.total,t.online_user=e.data.items.online;var i=t.getOption1();a.setOption(i)}))},initChart2:function(){var t=this,a=this.$echarts.init(document.getElementById("validate-user"));Object(c["c"])().then((function(e){t.validation_user=e.data.items.validate,t.total=e.data.items.total;var i=t.getOption2();a.setOption(i)}))},getOption1:function(){var t=[{value:this.total-this.online_user,name:""},{value:this.online_user,name:""}],a=["rgb(16,50,100)","rgb(90,183,232)","#fe9f2e","#ffc426","#f36119","#7c3ce6","#e63c90"],e={color:a,title:[{text:this.online_user,x:"center",bottom:"44%",textStyle:{fontSize:20,fontWeight:"normal",color:["#1785ef"]}},{text:"/"+this.total,bottom:"44%",x:"54%",textStyle:{color:["#54565a"],fontWeight:"normal",fontSize:12}}],series:[{type:"pie",z:5,center:["50%","50%"],radius:["50%","55%"],label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1},emphasis:{show:!1}},tooltip:{show:!1},data:t},{type:"pie",z:4,center:["50%","50%"],radius:["45%","60%"],hoverAnimation:!1,avoidLabelOverlap:!1,label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1},emphasis:{show:!1}},tooltip:{show:!1},itemStyle:{normal:{color:"#f6f7fc"}},emphasis:{show:!1,itemStyle:{color:"#f6f7fc"}},data:[{value:1}]}]};return e},getOption2:function(){var t=[{value:this.total-this.validation_user,name:""},{value:this.validation_user,name:""}],a=["#fe9f2e","#f36119","#ffc426","#7c3ce6","#e63c90"],e={color:a,title:[{text:this.validation_user,x:"center",bottom:"44%",textStyle:{fontSize:20,fontWeight:"normal",color:["#fe9f2e"]}},{text:"/"+this.total,bottom:"44%",x:"54%",textStyle:{color:["#54565a"],fontWeight:"normal",fontSize:12}}],series:[{type:"pie",z:5,center:["50%","50%"],radius:["50%","55%"],label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1},emphasis:{show:!1}},tooltip:{show:!1},data:t},{type:"pie",z:4,center:["50%","50%"],radius:["45%","60%"],hoverAnimation:!1,avoidLabelOverlap:!1,label:{normal:{show:!1},emphasis:{show:!1}},labelLine:{normal:{show:!1},emphasis:{show:!1}},tooltip:{show:!1},itemStyle:{normal:{color:"#f6f7fc"}},emphasis:{show:!1,itemStyle:{color:"#f6f7fc"}},data:[{value:1}]}]};return e},goToUser:function(){this.$router.replace("/client")}}}),b=_,C=(e("66cf"),Object(m["a"])(b,f,h,!1,null,null,null)),y=C.exports,x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"partC"},[t._m(0),t._v(" "),e("div",{staticClass:"partC-body"},[e("div",{staticClass:"partC-data"},[e("div",{staticClass:"partC-item"},[e("span",{staticClass:"numbers",staticStyle:{color:"#409EFF"},on:{click:function(a){return t.clickNum()}}},[t._v(t._s(t.total_scan))]),t._v(" "),e("span",{staticClass:"labels"},[t._v("扫描总数")])]),t._v(" "),e("div",{staticClass:"partC-item-divider"}),t._v(" "),e("div",{staticClass:"partC-item"},[e("span",{staticClass:"numbers",staticStyle:{color:"#5CB87A"}},[t._v(t._s(t.non_scan))]),t._v(" "),e("span",{staticClass:"labels"},[t._v("未扫描到敏感数据次数")])]),t._v(" "),e("div",{staticClass:"partC-item-divider"}),t._v(" "),e("div",{staticClass:"partC-item"},[e("span",{staticClass:"numbers",staticStyle:{color:"#F56C6C"}},[t._v(t._s(t.warn_scan))]),t._v(" "),e("span",{staticClass:"labels"},[t._v("扫描到敏感数据次数")])]),t._v(" "),e("div",{staticClass:"partC-item-divider"}),t._v(" "),e("div",{staticClass:"partC-item"},[e("span",{staticClass:"numbers",staticStyle:{color:"#303133"}},[t._v(t._s(t.erro_scan))]),t._v(" "),e("span",{staticClass:"labels"},[t._v("误报次数")])])]),t._v(" "),e("div",{staticClass:"partC-divider"}),t._v(" "),e("div",{staticClass:"partC-chart",attrs:{id:"scan-chart"}})])])},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"partC-header"},[e("div",{staticClass:"title-pic"}),t._v(" "),e("div",{staticStyle:{"font-size":"12px",color:"#303133",float:"left","margin-top":"6px","margin-left":"3px"}},[t._v("\n        今日扫描结果")])])}],S=e("bd86"),w={name:"PartC",data:function(){return{total_scan:0,non_scan:0,warn_scan:0,erro_scan:0}},mounted:function(){this.initChart()},methods:{initChart:function(){var t=this,a=this.$echarts.init(document.getElementById("scan-chart"));Object(c["d"])().then((function(e){t.total_scan=e.data.items.total_scan,t.non_scan=e.data.items.non_scan,t.warn_scan=e.data.items.warn_scan,t.erro_scan=e.data.items.erro_scan;var i=t.getOption();a.setOption(i)}))},getOption:function(){var t,a=[{value:this.non_scan,name:"未扫描到敏感数据次数"},{value:this.warn_scan,name:"扫描到敏感数据次数"},{value:this.erro_scan,name:"误报次数"}],e={tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)",textStyle:{fontSize:12}},color:["#22b8ed","#fb8f8e","#494949"],series:[(t={name:"扫描情况分布",type:"pie",radius:"55%",center:["50%","50%"]},Object(S["a"])(t,"radius",["38%","48%"]),Object(S["a"])(t,"data",a),Object(S["a"])(t,"itemStyle",{emphasis:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}),Object(S["a"])(t,"itemStyle",{normal:{label:{show:!0,formatter:"{b}: \n {c} ({d}%)",fontSize:10},borderColor:"#ffffff",borderWidth:10},labelLine:{show:!0}}),t)]};return e},clickNum:function(){this.$router.replace("/scan/results")}}},O=w,D=(e("9b8d"),Object(m["a"])(O,x,g,!1,null,null,null)),z=D.exports,B=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"partD"},[t._m(0),t._v(" "),e("div",{staticClass:"partD-data"},[e("div",{staticClass:"partD-data-total"},[e("span",{staticClass:"Dnumbers-total",on:{click:function(a){return t.clickAbNum()}}},[t._v(t._s(t.abnormal_total))]),t._v(" "),e("span",{staticClass:"Dlabels",staticStyle:{color:"#303133","text-align":"center"}},[t._v("异常事件总数")])]),t._v(" "),e("div",{staticClass:"partD-data-item"},[e("span",{staticClass:"Dnumbers"},[t._v(t._s(t.abnormal_screen))]),t._v(" "),e("span",{staticClass:"Dlabels"},[t._v("截屏禁止")])]),t._v(" "),e("div",{staticClass:"partD-data-item"},[e("span",{staticClass:"Dnumbers"},[t._v(t._s(t.abnormal_usb))]),t._v(" "),e("span",{staticClass:"Dlabels"},[t._v("USB禁止")])]),t._v(" "),e("div",{staticClass:"partD-data-item"},[e("span",{staticClass:"Dnumbers"},[t._v(t._s(t.abnormal_email))]),t._v(" "),e("span",{staticClass:"Dlabels"},[t._v("Email拦截")])]),t._v(" "),e("div",{staticClass:"partD-data-item"},[e("span",{staticClass:"Dnumbers"},[t._v(t._s(t.abnormal_web))]),t._v(" "),e("span",{staticClass:"Dlabels"},[t._v("Web拦截")])]),t._v(" "),e("div",{staticClass:"partD-data-item"},[e("span",{staticClass:"Dnumbers"},[t._v(t._s(t.abnormal_print))]),t._v(" "),e("span",{staticClass:"Dlabels"},[t._v("打印机拦截")])])]),t._v(" "),e("div",{staticClass:"partD-divider"}),t._v(" "),e("div",{staticClass:"partD-button"},[e("div",{class:1==t.time_scale?"DbuttonsOn":"DbuttonsOff",on:{click:function(a){return t.setTimeScale(1)}}},[t._v("7天")]),t._v(" "),e("div",{class:2==t.time_scale?"DbuttonsOn":"DbuttonsOff",on:{click:function(a){return t.setTimeScale(2)}}},[t._v("1个月")]),t._v(" "),e("div",{class:3==t.time_scale?"DbuttonsOn":"DbuttonsOff",on:{click:function(a){return t.setTimeScale(3)}}},[t._v("6个月")]),t._v(" "),e("div",{class:4==t.time_scale?"DbuttonsOn":"DbuttonsOff",on:{click:function(a){return t.setTimeScale(4)}}},[t._v("12个月")])]),t._v(" "),e("div",{staticClass:"partD-chart",attrs:{id:"abnormal_chart"}})])},j=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"partD-header"},[e("div",{staticClass:"title-pic"}),t._v(" "),e("div",{staticStyle:{"font-size":"12px",color:"#303133",float:"left","margin-top":"6px","margin-left":"3px"}},[t._v("\n        异常事件汇总")])])}],k=(e("ac4d"),e("8a81"),e("ac6a"),{name:"PartD",data:function(){return{abnormal_total:0,abnormal_screen:0,abnormal_usb:0,abnormal_email:0,abnormal_web:0,abnormal_print:0,time_scale:1,time_data:[]}},watch:{time_scale:function(t){this.initChart()}},mounted:function(){this.initChart()},methods:{initChart:function(){var t=this,a=this.$echarts.init(document.getElementById("abnormal_chart"));Object(c["e"])(this.time_scale).then((function(e){t.abnormal_total=e.data.items.statisc.total,t.abnormal_screen=e.data.items.statisc.screen,t.abnormal_usb=e.data.items.statisc.usb,t.abnormal_email=e.data.items.statisc.email,t.abnormal_web=e.data.items.statisc.web,t.abnormal_print=e.data.items.statisc.print,t.time_data=e.data.items.time_data;var i=t.getOption();a.setOption(i)}))},getOption:function(){var t=[],a=[],e=!0,i=!1,s=void 0;try{for(var n,l=this.time_data[Symbol.iterator]();!(e=(n=l.next()).done);e=!0){var r=n.value;t.push(r.date),a.push(r.value)}}catch(c){i=!0,s=c}finally{try{e||null==l.return||l.return()}finally{if(i)throw s}}var o={tooltip:{trigger:"axis"},legend:{data:["异常事件总数"],left:"right",textStyle:{color:"#666",fontSize:12}},grid:{left:"10%",top:"13%",bottom:"15%"},xAxis:{type:"category",boundaryGap:!1,data:t,axisLabel:{show:!0,color:"#666",textStyle:{color:"#606266",fontSize:10}},axisTick:{show:!0},splitLine:{show:!0},axisLine:{show:!0,lineStyle:{color:"#606266",width:1}}},yAxis:{type:"value",name:"次",axisLabel:{color:"#666",textStyle:{color:"#606266",fontSize:10}},axisTick:{show:!1},splitLine:{show:!0,lineStyle:{}},axisLine:{show:!0,lineStyle:{color:"#606266",width:1}},splitArea:{show:!0,areaStyle:{color:["#EAEBEC","#FFF"]}}},series:[{name:"当日异常事件次数",smooth:!0,symbol:"none",type:"line",lineStyle:{width:1},data:a,textStyle:{fontSize:"13"}}],color:["#FE0404"]};return o},clickAbNum:function(){this.$router.replace("/wrong/result")},setTimeScale:function(t){this.time_scale=t}}}),L=k,E=(e("17b9"),Object(m["a"])(L,B,j,!1,null,null,null)),A=E.exports,$={name:"Dashboard",components:{PartA:p,PartB:y,PartC:z,PartD:A},computed:Object(n["a"])({},Object(l["b"])(["name","roles"])),data:function(){return{refreshLoopTime:6e4}},methods:{getRefreshLoopTime:function(){return this.refreshLoopTime}}},T=$,P=(e("6e67"),Object(m["a"])(T,i,s,!1,null,"6254e715",null));a["default"]=P.exports},"95d56":function(t,a,e){"use strict";e.d(a,"a",(function(){return s})),e.d(a,"b",(function(){return n})),e.d(a,"c",(function(){return l})),e.d(a,"d",(function(){return r})),e.d(a,"e",(function(){return o})),e.d(a,"f",(function(){return c}));var i=e("b775");function s(t){return Object(i["a"])({url:"/dlp/violation/client/chart",method:"get",params:t})}function n(t){return Object(i["a"])({url:"/dlp/client/onlinechart",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/dlp/client/validatechart",method:"get",params:t})}function r(t){return Object(i["a"])({url:"/dlp/scan/resultchart",method:"get",params:t})}function o(t){return Object(i["a"])({url:"/dlp/validation/total",methods:"get",params:{time_scale:t}})}function c(){return Object(i["a"])({url:"/dlp/scan/percent",methods:"get"})}},"9b8d":function(t,a,e){"use strict";var i=e("c2e2"),s=e.n(i);s.a},ae61:function(t,a,e){},c153:function(t,a,e){},c2e2:function(t,a,e){}}]);