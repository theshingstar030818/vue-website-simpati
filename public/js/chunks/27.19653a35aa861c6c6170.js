(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"+BdE":function(t,s){t.exports="/public/production/images/decore-right.png?da0ab5cda39e974268cbe4da64f597b6"},"7pj3":function(t,s,a){"use strict";a("POw6")},BcTT:function(t,s,a){(t.exports=a("I1BE")(!1)).push([t.i,"#dashboard-analytics .greet-user {\n  position: relative;\n}\n#dashboard-analytics .greet-user .decore-left {\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n#dashboard-analytics .greet-user .decore-right {\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n@media (max-width: 576px) {\n#dashboard-analytics .decore-left, #dashboard-analytics .decore-right {\n    width: 140px;\n}\n}",""])},CFrh:function(t,s,a){var e=a("BcTT");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,i);e.locals&&(t.exports=e.locals)},CgeC:function(t,s,a){(t.exports=a("I1BE")(!1)).push([t.i,"/*=========================================================================================\n  File Name: vxTimeline.scss\n  Description: Styles for vx-timeline component\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n[dir=ltr] .vx-timeline {\n  margin-left: 1.5rem;\n  padding-left: 40px;\n  border-left: 2px solid #E5E8EB;\n}\n[dir=rtl] .vx-timeline {\n  margin-right: 1.5rem;\n  padding-right: 40px;\n  border-right: 2px solid #E5E8EB;\n}\n[dir] .theme-dark .vx-timeline {\n  border-color: #414561;\n}\n.vx-timeline li {\n  position: relative;\n}\n[dir] .vx-timeline li {\n  margin-bottom: 20px;\n}\n.vx-timeline li .timeline-icon {\n  position: absolute;\n  top: 0;\n}\n[dir] .vx-timeline li .timeline-icon {\n  border-radius: 50%;\n  padding: 0.75rem;\n  padding-bottom: 0.4rem;\n}\n[dir=ltr] .vx-timeline li .timeline-icon {\n  left: -4.3rem;\n}\n[dir=rtl] .vx-timeline li .timeline-icon {\n  right: -4.3rem;\n}\n.vx-timeline li .activity-desc {\n  font-size: 0.9rem;\n}\n.vx-timeline li .activity-e-time {\n  font-size: 0.8rem;\n}",""])},FJVE:function(t,s){t.exports="/public/production/images/decore-left.png?2d9d23e097d9118c0aa4cc074b6c5b22"},M9po:function(t,s,a){"use strict";var e={name:"vx-timeline",props:{data:{type:Array,required:!0}}},i=(a("7pj3"),a("KHd+")),r=Object(i.a)(e,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",{staticClass:"vx-timeline"},t._l(t.data,(function(s){return a("li",{key:s.title},[a("div",{staticClass:"timeline-icon",class:"bg-"+s.color},[a("feather-icon",{attrs:{icon:s.icon,svgClasses:"text-white stroke-current w-5 h-5"}})],1),t._v(" "),a("div",{staticClass:"timeline-info"},[a("p",{staticClass:"font-semibold"},[t._v(t._s(s.title))]),t._v(" "),a("span",{staticClass:"activity-desc"},[t._v(t._s(s.desc))])]),t._v(" "),a("small",{staticClass:"text-grey activity-e-time"},[t._v(t._s(s.time))])])})),0)}),[],!1,null,null,null);s.a=r.exports},POw6:function(t,s,a){var e=a("CgeC");"string"==typeof e&&(e=[[t.i,e,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};a("aET+")(e,i);e.locals&&(t.exports=e.locals)},daCn:function(t,s,a){"use strict";a.r(s);var e=a("EyHm"),i=a.n(e),r=a("L0c2"),n=a("UlCY"),l=a("hz9b"),o=a("M9po"),c={data:function(){return{checkpointReward:{},subscribersGained:{},ordersRecevied:{},salesBarSession:{},supportTracker:{},productsOrder:{},salesRadar:{},timelineData:[{color:"primary",icon:"PlusIcon",title:"Client Meeting",desc:"Bonbon macaroon jelly beans gummi bears jelly lollipop apple",time:"25 mins Ago"},{color:"warning",icon:"MailIcon",title:"Email Newsletter",desc:"Cupcake gummi bears soufflé caramels candy",time:"15 Days Ago"},{color:"danger",icon:"UsersIcon",title:"Plan Webinar",desc:"Candy ice cream cake. Halvah gummi bears",time:"20 days ago"},{color:"success",icon:"LayoutIcon",title:"Launch Website",desc:"Candy ice cream cake. Halvah gummi bears Cupcake gummi bears soufflé caramels candy.",time:"25 days ago"},{color:"primary",icon:"TvIcon",title:"Marketing",desc:"Candy ice cream cake. Halvah gummi bears Cupcake gummi bears.",time:"28 days ago"}],analyticsData:n.a,dispatchedOrders:[]}},components:{VueApexCharts:i.a,StatisticsCardLine:r.a,ChangeTimeDurationDropdown:l.a,VxTimeline:o.a},created:function(){var t=this;this.$http.get("/api/user/checkpoint-reward").then((function(s){t.checkpointReward=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/subscribers").then((function(s){t.subscribersGained=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-statistics/orders").then((function(s){t.ordersRecevied=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/bar").then((function(s){t.salesBarSession=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/support-tracker").then((function(s){t.supportTracker=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/products-orders").then((function(s){t.productsOrder=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/card/card-analytics/sales/radar").then((function(s){t.salesRadar=s.data})).catch((function(t){console.log(t)})),this.$http.get("/api/table/dispatched-orders").then((function(s){t.dispatchedOrders=s.data})).catch((function(t){console.log(t)}))}},d=(a("j4Nb"),a("KHd+")),v=Object(d.a)(c,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"dashboard-analytics"}},[e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full lg:w-1/2 mb-base"},[e("vx-card",{staticClass:"text-center bg-primary-gradient greet-user",attrs:{slot:"no-body"},slot:"no-body"},[e("img",{staticClass:"decore-left",attrs:{src:a("FJVE"),alt:"Decore Left",width:"200"}}),t._v(" "),e("img",{staticClass:"decore-right",attrs:{src:a("+BdE"),alt:"Decore Right",width:"175"}}),t._v(" "),e("feather-icon",{staticClass:"p-6 mb-8 bg-primary inline-flex rounded-full text-white shadow",attrs:{icon:"AwardIcon",svgClasses:"h-8 w-8"}}),t._v(" "),e("h1",{staticClass:"mb-6 text-white"},[t._v("Congratulations "+t._s(t.checkpointReward.userName)+",")]),t._v(" "),e("p",{staticClass:"xl:w-3/4 lg:w-4/5 md:w-2/3 w-4/5 mx-auto text-white"},[t._v("You have done "),e("strong",[t._v(t._s(t.checkpointReward.progress))]),t._v(" more sales today. Check your new badge in your profile.")])],1)],1),t._v(" "),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("statistics-card-line",{attrs:{icon:"UsersIcon",statistic:"92.6k",statisticTitle:"Subscribers Gained",chartData:t.subscribersGained.series,type:"area"}})],1),t._v(" "),e("div",{staticClass:"vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/4 xl:w-1/4 mb-base"},[e("statistics-card-line",{attrs:{icon:"ShoppingBagIcon",statistic:"97.5K",statisticTitle:"Orders Received",chartData:t.ordersRecevied.series,color:"warning",type:"area"}})],1)]),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full md:w-1/2 mb-base"},[e("vx-card",[e("div",{staticClass:"vx-row flex-col-reverse md:flex-col-reverse sm:flex-row lg:flex-row"},[t.salesBarSession.analyticsData?e("div",{staticClass:"vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col justify-between"},[e("div",[e("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t._f("k_formatter")(t.salesBarSession.analyticsData.session)))]),t._v(" "),e("span",{staticClass:"font-medium"},[t._v("Avg Sessions")]),t._v(" "),e("p",{staticClass:"mt-2 text-xl font-medium"},[e("span",{class:t.salesBarSession.analyticsData.comparison.result>=0?"text-success":"text-danger"},[t.salesBarSession.analyticsData.comparison.result>0?e("span",[t._v("+")]):t._e(),t._v(" "),e("span",[t._v(t._s(t.salesBarSession.analyticsData.comparison.result))])]),t._v(" "),e("span",[t._v(" vs ")]),t._v(" "),e("span",[t._v(t._s(t.salesBarSession.analyticsData.comparison.str))])])]),t._v(" "),e("vs-button",{staticClass:"shadow-md w-full lg:mt-0 mt-4",attrs:{"icon-pack":"feather",icon:"icon-chevrons-right","icon-after":""}},[t._v("View Details")])],1):t._e(),t._v(" "),e("div",{staticClass:"vx-col w-full md:w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 flex flex-col lg:mb-0 md:mb-base sm:mb-0 mb-base"},[e("change-time-duration-dropdown",{staticClass:"self-end"}),t._v(" "),t.salesBarSession.series?e("vue-apex-charts",{attrs:{type:"bar",height:"200",options:t.analyticsData.salesBar.chartOptions,series:t.salesBarSession.series}}):t._e()],1)]),t._v(" "),e("vs-divider",{staticClass:"my-6"}),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Goal: $100000")]),t._v(" "),e("vs-progress",{staticClass:"block mt-1",attrs:{percent:50,color:"primary"}})],1),t._v(" "),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Users: 100K")]),t._v(" "),e("vs-progress",{staticClass:"block mt-1",attrs:{percent:60,color:"warning"}})],1),t._v(" "),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Retention: 90%")]),t._v(" "),e("vs-progress",{staticClass:"block mt-1",attrs:{percent:70,color:"danger"}})],1),t._v(" "),e("div",{staticClass:"vx-col w-1/2 mb-3"},[e("p",[t._v("Duration: 1yr")]),t._v(" "),e("vs-progress",{staticClass:"block mt-1",attrs:{percent:90,color:"success"}})],1)])],1)],1),t._v(" "),e("div",{staticClass:"vx-col w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base"},[e("vx-card",{attrs:{title:"Support Tracker"}},[e("template",{slot:"actions"},[e("change-time-duration-dropdown")],1),t._v(" "),t.supportTracker.analyticsData?e("div",{attrs:{slot:"no-body"},slot:"no-body"},[e("div",{staticClass:"vx-row text-center"},[e("div",{staticClass:"vx-col w-full lg:w-1/5 md:w-full sm:w-1/5 flex flex-col justify-between mb-4 lg:order-first md:order-last sm:order-first order-last"},[e("div",{staticClass:"lg:ml-6 lg:mt-6 md:mt-0 md:ml-0 sm:ml-6 sm:mt-6"},[e("h1",{staticClass:"font-bold text-5xl"},[t._v(t._s(t.supportTracker.analyticsData.openTickets))]),t._v(" "),e("small",[t._v("Tickets")])])]),t._v(" "),e("div",{staticClass:"vx-col w-full lg:w-4/5 md:w-full sm:w-4/5 justify-center mx-auto lg:mt-0 md:mt-6 sm:mt-0 mt-6"},[e("vue-apex-charts",{attrs:{type:"radialBar",height:"385",options:t.analyticsData.supportTrackerRadialBar.chartOptions,series:t.supportTracker.series}})],1)]),t._v(" "),e("div",{staticClass:"flex flex-row justify-between px-8 pb-4 mt-4"},t._l(t.supportTracker.analyticsData.meta,(function(s,a){return e("p",{key:a,staticClass:"text-center"},[e("span",{staticClass:"block"},[t._v(t._s(a))]),t._v(" "),e("span",{staticClass:"text-2xl font-semibold"},[t._v(t._s(s))])])})),0)]):t._e()],2)],1)]),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[e("vx-card",{attrs:{title:"Product Orders"}},[e("template",{slot:"actions"},[e("change-time-duration-dropdown")],1),t._v(" "),e("div",{attrs:{slot:"no-body"},slot:"no-body"},[e("vue-apex-charts",{attrs:{type:"radialBar",height:"420",options:t.analyticsData.productOrdersRadialBar.chartOptions,series:t.productsOrder.series}})],1),t._v(" "),e("ul",t._l(t.productsOrder.analyticsData,(function(s){return e("li",{key:s.orderType,staticClass:"flex mb-3 justify-between"},[e("span",{staticClass:"flex items-center"},[e("span",{staticClass:"inline-block h-4 w-4 rounded-full mr-2 bg-white border-3 border-solid",class:"border-"+s.color}),t._v(" "),e("span",{staticClass:"font-semibold"},[t._v(t._s(s.orderType))])]),t._v(" "),e("span",[t._v(t._s(s.counts))])])})),0)],2)],1),t._v(" "),e("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[e("vx-card",{attrs:{title:"Sales Stats",subtitle:"Last 6 Months"}},[e("template",{slot:"actions"},[e("feather-icon",{attrs:{icon:"MoreVerticalIcon",svgClasses:"w-6 h-6 text-grey"}})],1),t._v(" "),e("div",{staticClass:"flex"},[e("span",{staticClass:"flex items-center"},[e("div",{staticClass:"h-3 w-3 rounded-full mr-1 bg-primary"}),e("span",[t._v("Sales")])]),t._v(" "),e("span",{staticClass:"flex items-center ml-4"},[e("div",{staticClass:"h-3 w-3 rounded-full mr-1 bg-success"}),e("span",[t._v("Visits")])])]),t._v(" "),e("div",{attrs:{slot:"no-body-bottom"},slot:"no-body-bottom"},[e("vue-apex-charts",{attrs:{type:"radar",height:"385",options:t.analyticsData.statisticsRadar.chartOptions,series:t.salesRadar.series}})],1)],2)],1),t._v(" "),e("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base"},[e("vx-card",{attrs:{title:"Activity Timeline"}},[e("vx-timeline",{attrs:{data:t.timelineData}})],1)],1)]),t._v(" "),e("div",{staticClass:"vx-row"},[e("div",{staticClass:"vx-col w-full"},[e("vx-card",{attrs:{title:"Dispatched Orders"}},[e("div",{staticClass:"mt-4",attrs:{slot:"no-body"},slot:"no-body"},[e("vs-table",{staticClass:"table-dark-inverted",attrs:{data:t.dispatchedOrders},scopedSlots:t._u([{key:"default",fn:function(s){var a=s.data;return t._l(a,(function(s,i){return e("vs-tr",{key:i},[e("vs-td",{attrs:{data:a[i].orderNo}},[e("span",[t._v("#"+t._s(a[i].orderNo))])]),t._v(" "),e("vs-td",{attrs:{data:a[i].status}},[e("span",{staticClass:"flex items-center px-2 py-1 rounded"},[e("div",{staticClass:"h-3 w-3 rounded-full mr-2",class:"bg-"+a[i].statusColor}),t._v(t._s(a[i].status))])]),t._v(" "),e("vs-td",{attrs:{data:a[i].orderNo}},[e("ul",{staticClass:"users-liked user-list"},t._l(a[i].usersLiked,(function(t,s){return e("li",{key:s},[e("vx-tooltip",{attrs:{text:t.name,position:"bottom"}},[e("vs-avatar",{staticClass:"border-2 border-white border-solid -m-1",attrs:{src:t.img,size:"30px"}})],1)],1)})),0)]),t._v(" "),e("vs-td",{attrs:{data:a[i].orderNo}},[e("span",[t._v(t._s(a[i].location))])]),t._v(" "),e("vs-td",{attrs:{data:a[i].orderNo}},[e("span",[t._v(t._s(a[i].distance))]),t._v(" "),e("vs-progress",{attrs:{percent:a[i].distPercent,color:a[i].statusColor}})],1),t._v(" "),e("vs-td",{attrs:{data:a[i].orderNo}},[e("span",[t._v(t._s(a[i].startDate))])]),t._v(" "),e("vs-td",{attrs:{data:a[i].orderNo}},[e("span",[t._v(t._s(a[i].estDelDate))])])],1)}))}}])},[e("template",{slot:"thead"},[e("vs-th",[t._v("ORDER NO.")]),t._v(" "),e("vs-th",[t._v("STATUS")]),t._v(" "),e("vs-th",[t._v("OPERATORS")]),t._v(" "),e("vs-th",[t._v("LOCATION")]),t._v(" "),e("vs-th",[t._v("DISTANCE")]),t._v(" "),e("vs-th",[t._v("START DATE")]),t._v(" "),e("vs-th",[t._v("EST DELIVERY DATE")])],1)],2)],1)])],1)])])}),[],!1,null,null,null);s.default=v.exports},j4Nb:function(t,s,a){"use strict";a("CFrh")}}]);