(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d4450e5e"],{"13aa":function(t,e,a){},"21f4":function(t,e,a){},"42a1":function(t,e,a){},"45eb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-layout"},[a("page-header",{ref:"pageHeader",style:"margin-top: "+(t.multiPage?0:-24)+"px",attrs:{breadcrumb:t.breadcrumb,title:t.pageTitle,logo:t.logo,avatar:t.avatar}},[t._t("action",null,{slot:"action"}),t._t("headerContent",null,{slot:"content"}),!this.$slots.headerContent&&t.desc?a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v(t._s(t.desc))]),this.linkList?a("div",{staticClass:"link"},[t._l(t.linkList,(function(e,i){return[a("a",{key:i,attrs:{href:e.href}},[a("a-icon",{attrs:{type:e.icon}}),t._v(t._s(e.title))],1)]}))],2):t._e()]):t._e(),this.$slots.extra?t._t("extra",null,{slot:"extra"}):t._e()],2),a("div",{ref:"page",class:["page-content",t.layout,t.pageWidth]},[t._t("default")],2)],1)},s=[],r=(a("4160"),a("159b"),a("5530")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["page-header",t.layout,t.pageWidth]},[a("div",{staticClass:"page-header-wide"},[a("div",{staticClass:"breadcrumb"},[a("a-breadcrumb",t._l(t.breadcrumb,(function(e,i){return a("a-breadcrumb-item",{key:i},[a("span",[t._v(t._s(e))])])})),1)],1),a("div",{staticClass:"detail"},[a("div",{staticClass:"main"},[a("div",{staticClass:"row"},[t.showPageTitle&&t.title?a("h1",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),a("div",{staticClass:"action"},[t._t("action")],2)]),a("div",{staticClass:"row"},[this.$slots.content?a("div",{staticClass:"content"},[t.avatar?a("div",{staticClass:"avatar"},[a("a-avatar",{attrs:{src:t.avatar,size:72}})],1):t._e(),t._t("content")],2):t._e(),this.$slots.extra?a("div",{staticClass:"extra"},[t._t("extra")],2):t._e()])])])])])},o=[],l=a("2f62"),c={name:"PageHeader",props:{title:{type:[String,Boolean],required:!1},breadcrumb:{type:Array,required:!1},logo:{type:String,required:!1},avatar:{type:String,required:!1}},computed:Object(r["a"])({},Object(l["e"])("setting",["layout","showPageTitle","pageWidth"]))},u=c,d=(a("cba5"),a("0c7c")),m=Object(d["a"])(u,n,o,!1,null,"9f0b68d8",null),h=m.exports,g=a("89a5"),p={name:"PageLayout",components:{PageHeader:h},props:["desc","logo","title","avatar","linkList","extraImage"],data:function(){return{page:{},pageHeaderHeight:0}},watch:{$route:function(){this.page=this.$route.meta.page}},updated:function(){this._inactive||this.updatePageHeight()},activated:function(){this.updatePageHeight()},deactivated:function(){this.updatePageHeight(0)},mounted:function(){this.updatePageHeight()},created:function(){this.page=this.$route.meta.page},beforeDestroy:function(){this.updatePageHeight(0)},computed:Object(r["a"])(Object(r["a"])({},Object(l["e"])("setting",["layout","multiPage","pageMinHeight","pageWidth","customTitles"])),{},{pageTitle:function(){var t=this.page&&this.page.title;return this.customTitle||t&&this.$t(t)||this.title||this.routeName},routeName:function(){var t=this.$route;return this.$t(Object(g["b"])(t.matched[t.matched.length-1].path))},breadcrumb:function(){var t=this,e=this.page,a=e&&e.breadcrumb;if(a){var i=[];return a.forEach((function(e){i.push(t.$t(e))})),i}return this.getRouteBreadcrumb()},marginCorrect:function(){return this.multiPage?24:0}}),methods:Object(r["a"])(Object(r["a"])({},Object(l["d"])("setting",["correctPageMinHeight"])),{},{getRouteBreadcrumb:function(){var t=this,e=this.$route.matched,a=[];e.forEach((function(e){var i=0===e.path.length?"/home":e.path;a.push(t.$t(Object(g["b"])(i)))}));var i=this.page&&this.page.title;return(this.customTitle||i)&&(a[a.length-1]=this.customTitle||i),a},updatePageHeight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$refs.pageHeader.$el.offsetHeight+this.marginCorrect;this.correctPageMinHeight(this.pageHeaderHeight-t),this.pageHeaderHeight=t}})},v=p,f=(a("aa1d"),Object(d["a"])(v,i,s,!1,null,null,null));e["a"]=f.exports},"48e6":function(t,e,a){},6531:function(t,e,a){"use strict";var i=a("42a1"),s=a.n(i);s.a},aa1d:function(t,e,a){"use strict";var i=a("21f4"),s=a.n(i);s.a},c340:function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["detail-list","small"===t.size?"small":"large","vertical"===t.layout?"vertical":"horizontal"]},[t.title?a("div",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),a("a-row",[t._t("default")],2)],1)},s=[],r=(a("a9e3"),a("da05")),n={name:"DetailListItem",props:{term:{type:String,required:!1}},inject:{col:{type:Number}},methods:{renderTerm:function(t,e){return e?t("div",{attrs:{class:"term"}},[e]):null},renderContent:function(t,e){return t("div",{attrs:{class:"content"}},[e])}},render:function(t){var e=this.renderTerm(t,this.$props.term),a=this.renderContent(t,this.$slots.default);return t(r["b"],{props:o[this.col]},[e,a])}},o={1:{xs:24},2:{xs:24,sm:12},3:{xs:24,sm:12,md:8},4:{xs:24,sm:12,md:6}},l={name:"DetailList",Item:n,props:{title:{type:String,required:!1},col:{type:Number,required:!1,default:3},size:{type:String,required:!1,default:"large"},layout:{type:String,required:!1,default:"horizontal"}},provide:function(){return{col:this.col>4?4:this.col}}},c=l,u=(a("6531"),a("0c7c")),d=Object(u["a"])(c,i,s,!1,null,null,null);e["a"]=d.exports},cba5:function(t,e,a){"use strict";var i=a("13aa"),s=a.n(i);s.a},d7b9:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-layout",{attrs:{title:"基础详情页"}},[a("a-card",{attrs:{bordered:!1}},[a("detail-list",{attrs:{title:"退款详情"}},[a("detail-list-item",{attrs:{term:"取货单号"}},[t._v("1000000000")]),a("detail-list-item",{attrs:{term:"状态"}},[t._v("已取货")]),a("detail-list-item",{attrs:{term:"销售单号"}},[t._v("987654321")]),a("detail-list-item",{attrs:{term:"子订单"}},[t._v("1234567890")])],1),a("a-divider",{staticStyle:{"margin-bottom":"32px"}}),a("detail-list",{attrs:{title:"用户信息"}},[a("detail-list-item",{attrs:{term:"用户姓名"}},[t._v("付小小")]),a("detail-list-item",{attrs:{term:"联系电话"}},[t._v("18100000001")]),a("detail-list-item",{attrs:{term:"常用快递"}},[t._v("菜鸟仓储")]),a("detail-list-item",{attrs:{term:"取货地址"}},[t._v("浙江省杭州市西湖区万塘路19号")]),a("detail-list-item",{attrs:{term:"备注"}},[t._v("无")])],1),a("a-divider",{staticStyle:{"margin-bottom":"32px"}}),a("div",{staticClass:"title"},[t._v("退货商品")]),a("a-table",{staticStyle:{"margin-bottom":"24px"},attrs:{"row-key":"id",columns:t.goodsColumns,dataSource:t.goodsData,pagination:!1}}),a("div",{staticClass:"title"},[t._v("退货进度")]),a("a-table",{attrs:{columns:t.scheduleColumns,dataSource:t.scheduleData,pagination:!1}})],1)],1)},s=[],r=a("c340"),n=a("45eb"),o=r["a"].Item,l=[{title:"商品编号",dataIndex:"id",key:"id"},{title:"商品名称",dataIndex:"name",key:"name"},{title:"商品条码",dataIndex:"barcode",key:"barcode"},{title:"单价",dataIndex:"price",key:"price",align:"right"},{title:"数量（件）",dataIndex:"num",key:"num",align:"right"},{title:"金额",dataIndex:"amount",key:"amount",align:"right"}],c=[{id:"1234561",name:"矿泉水 550ml",barcode:"12421432143214321",price:"2.00",num:"1",amount:"2.00"},{id:"1234562",name:"凉茶 300ml",barcode:"12421432143214322",price:"3.00",num:"2",amount:"6.00"},{id:"1234563",name:"好吃的薯片",barcode:"12421432143214323",price:"7.00",num:"4",amount:"28.00"},{id:"1234564",name:"特别好吃的蛋卷",barcode:"12421432143214324",price:"8.50",num:"3",amount:"25.50"}],u=[{title:"时间",dataIndex:"time",key:"time"},{title:"当前进度",dataIndex:"rate",key:"rate"},{title:"状态",dataIndex:"status",key:"status"},{title:"操作员ID",dataIndex:"operator",key:"operator"},{title:"耗时",dataIndex:"cost",key:"cost"}],d=[{key:"1",time:"2017-10-01 14:10",rate:"联系客户",status:"processing",operator:"取货员 ID1234",cost:"5mins"},{key:"2",time:"2017-10-01 14:05",rate:"取货员出发",status:"success",operator:"取货员 ID1234",cost:"1h"},{key:"3",time:"2017-10-01 13:05",rate:"取货员接单",status:"success",operator:"取货员 ID1234",cost:"5mins"},{key:"4",time:"2017-10-01 13:00",rate:"申请审批通过",status:"success",operator:"系统",cost:"1h"},{key:"5",time:"2017-10-01 12:00",rate:"发起退货申请",status:"success",operator:"用户",cost:"5mins"}],m={name:"BasicDetail",components:{PageLayout:n["a"],DetailListItem:o,DetailList:r["a"]},data:function(){return{goodsColumns:l,goodsData:c,scheduleColumns:u,scheduleData:d}}},h=m,g=(a("dfe1"),a("0c7c")),p=Object(g["a"])(h,i,s,!1,null,"694b51c4",null);e["default"]=p.exports},dfe1:function(t,e,a){"use strict";var i=a("48e6"),s=a.n(i);s.a}}]);