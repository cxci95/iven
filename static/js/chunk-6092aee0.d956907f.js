(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6092aee0"],{"0ac3":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("page-layout",{attrs:{avatar:t.currUser&&t.currUser.avatar}},[a("div",{attrs:{slot:"headerContent"},slot:"headerContent"},[a("div",{staticClass:"title"},[t._v(t._s(t.welcome.timeFix[t.lang])+"，"+t._s(t.currUser["nickName"])+"，"+t._s(t.welcome.message[t.lang]))]),a("div",[t._v(t._s(t.$map("userTypeEnum",t.currUser["type"])))])]),a("template",{slot:"extra"},[a("head-info",{staticClass:"split-right",attrs:{title:t.$t("pending"),content:"2"}}),a("head-info",{staticClass:"split-right",attrs:{title:t.$t("doing"),content:"5"}}),a("head-info",{staticClass:"split-right",attrs:{title:t.$t("completed"),content:"17"}})],1),[a("a-row",{staticStyle:{margin:"0 -12px"}},[a("a-col",{staticStyle:{padding:"0 12px"}},[a("a-card",{attrs:{loading:t.loading,title:t.$t("message"),bordered:!1}},[a("a-list",[a("a-list-item",[a("a-list-item-meta",[a("a-avatar",{attrs:{slot:"avatar"},slot:"avatar"}),a("div",{attrs:{slot:"title"},domProps:{innerHTML:t._s("猪")},slot:"title"}),a("div",{attrs:{slot:"description"},slot:"description"},[t._v("2分钟前")])],1)],1),a("a-list-item",[a("a-list-item-meta",[a("a-avatar",{attrs:{slot:"avatar",src:t.item&&t.item.user&&t.item.user.avatar},slot:"avatar"}),a("div",{attrs:{slot:"title"},domProps:{innerHTML:t._s("猪猪")},slot:"title"}),a("div",{attrs:{slot:"description"},slot:"description"},[t._v("1小时前")])],1)],1),a("a-list-item",[a("a-list-item-meta",[a("a-avatar",{attrs:{slot:"avatar",src:t.item&&t.item.user&&t.item.user.avatar},slot:"avatar"}),a("div",{attrs:{slot:"title"},domProps:{innerHTML:t._s("猪猪猪")},slot:"title"}),a("div",{attrs:{slot:"description"},slot:"description"},[t._v("9小时前")])],1)],1)],1)],1)],1)],1)]],2)},s=[],r=a("5530"),n=a("45eb"),c=a("779e"),o=a("2f62"),l=a("b775"),d={name:"WorkPlace",components:{HeadInfo:c["a"],PageLayout:n["a"]},i18n:a("6d59"),data:function(){return{projects:[],loading:!0,activities:[],teams:[],welcome:{timeFix:"",message:""}}},computed:Object(r["a"])(Object(r["a"])({},Object(o["e"])("account",{currUser:"user"})),Object(o["e"])("setting",["lang"])),created:function(){var t=this;Object(l["c"])("/user/welcome",l["a"].GET).then((function(e){return t.welcome=e.data})),Object(l["c"])("/work/activity",l["a"].GET).then((function(e){return t.activities=e.data})),Object(l["c"])("/work/team",l["a"].GET).then((function(e){return t.teams=e.data})),Object(l["c"])("/project",l["a"].GET).then((function(e){t.projects=e.data,t.loading=!1}))}},u=d,g=(a("a7ca"),a("0c7c")),p=Object(g["a"])(u,i,s,!1,null,null,null),h=p.exports;e["default"]=h},"13aa":function(t,e,a){},"21f4":function(t,e,a){},"45eb":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-layout"},[a("page-header",{ref:"pageHeader",style:"margin-top: "+(t.multiPage?0:-24)+"px",attrs:{breadcrumb:t.breadcrumb,title:t.pageTitle,logo:t.logo,avatar:t.avatar}},[t._t("action",null,{slot:"action"}),t._t("headerContent",null,{slot:"content"}),!this.$slots.headerContent&&t.desc?a("div",{attrs:{slot:"content"},slot:"content"},[a("p",[t._v(t._s(t.desc))]),this.linkList?a("div",{staticClass:"link"},[t._l(t.linkList,(function(e,i){return[a("a",{key:i,attrs:{href:e.href}},[a("a-icon",{attrs:{type:e.icon}}),t._v(t._s(e.title))],1)]}))],2):t._e()]):t._e(),this.$slots.extra?t._t("extra",null,{slot:"extra"}):t._e()],2),a("div",{ref:"page",class:["page-content",t.layout,t.pageWidth]},[t._t("default")],2)],1)},s=[],r=(a("4160"),a("159b"),a("5530")),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:["page-header",t.layout,t.pageWidth]},[a("div",{staticClass:"page-header-wide"},[a("div",{staticClass:"breadcrumb"},[a("a-breadcrumb",t._l(t.breadcrumb,(function(e,i){return a("a-breadcrumb-item",{key:i},[a("span",[t._v(t._s(e))])])})),1)],1),a("div",{staticClass:"detail"},[a("div",{staticClass:"main"},[a("div",{staticClass:"row"},[t.showPageTitle&&t.title?a("h1",{staticClass:"title"},[t._v(t._s(t.title))]):t._e(),a("div",{staticClass:"action"},[t._t("action")],2)]),a("div",{staticClass:"row"},[this.$slots.content?a("div",{staticClass:"content"},[t.avatar?a("div",{staticClass:"avatar"},[a("a-avatar",{attrs:{src:t.avatar,size:72}})],1):t._e(),t._t("content")],2):t._e(),this.$slots.extra?a("div",{staticClass:"extra"},[t._t("extra")],2):t._e()])])])])])},c=[],o=a("2f62"),l={name:"PageHeader",props:{title:{type:[String,Boolean],required:!1},breadcrumb:{type:Array,required:!1},logo:{type:String,required:!1},avatar:{type:String,required:!1}},computed:Object(r["a"])({},Object(o["e"])("setting",["layout","showPageTitle","pageWidth"]))},d=l,u=(a("cba5"),a("0c7c")),g=Object(u["a"])(d,n,c,!1,null,"9f0b68d8",null),p=g.exports,h=a("89a5"),m={name:"PageLayout",components:{PageHeader:p},props:["desc","logo","title","avatar","linkList","extraImage"],data:function(){return{page:{},pageHeaderHeight:0}},watch:{$route:function(){this.page=this.$route.meta.page}},updated:function(){this._inactive||this.updatePageHeight()},activated:function(){this.updatePageHeight()},deactivated:function(){this.updatePageHeight(0)},mounted:function(){this.updatePageHeight()},created:function(){this.page=this.$route.meta.page},beforeDestroy:function(){this.updatePageHeight(0)},computed:Object(r["a"])(Object(r["a"])({},Object(o["e"])("setting",["layout","multiPage","pageMinHeight","pageWidth","customTitles"])),{},{pageTitle:function(){var t=this.page&&this.page.title;return this.customTitle||t&&this.$t(t)||this.title||this.routeName},routeName:function(){var t=this.$route;return this.$t(Object(h["b"])(t.matched[t.matched.length-1].path))},breadcrumb:function(){var t=this,e=this.page,a=e&&e.breadcrumb;if(a){var i=[];return a.forEach((function(e){i.push(t.$t(e))})),i}return this.getRouteBreadcrumb()},marginCorrect:function(){return this.multiPage?24:0}}),methods:Object(r["a"])(Object(r["a"])({},Object(o["d"])("setting",["correctPageMinHeight"])),{},{getRouteBreadcrumb:function(){var t=this,e=this.$route.matched,a=[];e.forEach((function(e){var i=0===e.path.length?"/home":e.path;a.push(t.$t(Object(h["b"])(i)))}));var i=this.page&&this.page.title;return(this.customTitle||i)&&(a[a.length-1]=this.customTitle||i),a},updatePageHeight:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$refs.pageHeader.$el.offsetHeight+this.marginCorrect;this.correctPageMinHeight(this.pageHeaderHeight-t),this.pageHeaderHeight=t}})},v=m,f=(a("aa1d"),Object(u["a"])(v,i,s,!1,null,null,null));e["a"]=f.exports},"5adf":function(t,e,a){"use strict";var i=a("b84a"),s=a.n(i);s.a},"6d59":function(t,e){t.exports={messages:{CN:{pending:"未完成",doing:"处理中",completed:"已完成",project:"项目",ranking:"团队排名",visit:"项目访问",progress:"进行中的项目",all:"全部项目",access:"快速开始/便捷导航",dynamic:"动态",message:"留言",degree:"指数",team:"团队",add:"添加"},HK:{project:"項目數",ranking:"團隊排名",visit:"項目訪問",progress:"進行中的項目",all:"全部項目",access:"快速開始/便捷導航",dynamic:"動態",degree:"指數",team:"團隊",add:"添加"},US:{project:"Project",ranking:"Ranking",visit:"Visit",progress:"Projects in progress",all:"All projects",access:"Quick start / Easy navigation",dynamic:"Dynamic",degree:"degree",team:"Team",add:"Add"}}}},"779e":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"head-info"},[a("span",[t._v(t._s(t.title))]),a("p",[t._v(t._s(t.content))])])},s=[],r={name:"HeadInfo",props:["title","content","bordered"]},n=r,c=(a("5adf"),a("0c7c")),o=Object(c["a"])(n,i,s,!1,null,"51a72c95",null);e["a"]=o.exports},"9bd1":function(t,e,a){},a7ca:function(t,e,a){"use strict";var i=a("9bd1"),s=a.n(i);s.a},aa1d:function(t,e,a){"use strict";var i=a("21f4"),s=a.n(i);s.a},b84a:function(t,e,a){},cba5:function(t,e,a){"use strict";var i=a("13aa"),s=a.n(i);s.a}}]);