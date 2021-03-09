(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{"5xNq":function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,".sidebarpage .vs-sidebar {\n  z-index: 52000;\n}",""])},BRaB:function(e,t,n){(e.exports=n("I1BE")(!1)).push([e.i,"/*=========================================================================================\n    File Name: sidebar.scss\n    Description: Sidebar component style\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.vs-content-sidebar.sidebarpage .vs-sidebar .vs-sidebar--header .header-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\n.vs-content-sidebar.sidebarpage .vs-sidebar .vs-sidebar--header .header-sidebar h4 {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n[dir=ltr] .vs-content-sidebar.sidebarpage .vs-sidebar .vs-sidebar--header .header-sidebar h4 > button {\n  margin-left: 10px;\n}\n[dir=rtl] .vs-content-sidebar.sidebarpage .vs-sidebar .vs-sidebar--header .header-sidebar h4 > button {\n  margin-right: 10px;\n}\n.vs-content-sidebar.sidebarpage .vs-sidebar .vs-sidebar--footer .footer-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n[dir] .vs-content-sidebar.sidebarpage .vs-sidebar .vs-sidebar--footer .footer-sidebar > button {\n  border: 0px solid rgba(0, 0, 0, 0) !important;\n  border-radius: 0px !important;\n}\n[dir=ltr] .vs-content-sidebar.sidebarpage .vs-sidebar .vs-sidebar--footer .footer-sidebar > button {\n  border-left: 1px solid rgba(0, 0, 0, 0.07) !important;\n}\n[dir=rtl] .vs-content-sidebar.sidebarpage .vs-sidebar .vs-sidebar--footer .footer-sidebar > button {\n  border-right: 1px solid rgba(0, 0, 0, 0.07) !important;\n}\n.vs-content-sidebar.sidebarpage .vs-sidebar .vs-sidebar--item i.material-icons {\n  font-size: 1.2rem;\n}\n.vs-content-sidebar.sidebarpage.sidebar-demo-parent .vs-sidebar {\n  z-index: 10000 !important;\n}\n.vs-content-sidebar.sidebarpage .vs-sidebar--background {\n  z-index: 52000;\n}\n[dir] .theme-dark .vs-content-sidebar.sidebarpage.bordered-sidebar .vs-sidebar {\n  border: 1px solid #414561;\n}",""])},EJdr:function(e,t,n){var i=n("5xNq");"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,r);i.locals&&(e.exports=i.locals)},NCva:function(e,t,n){"use strict";n.r(t);var i={data:function(){return{active:!1}}},r=(n("iYck"),n("KHd+")),s={data:function(){return{active:!1}}},a={data:function(){return{active:!1}}},o={data:function(){return{active:!1}}},d={data:function(){return{active:!1}}},v={data:function(){return{active:!1,notExpand:!1,reduce:!0}}},c={components:{SidebarDefault:Object(r.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Default","code-toggler":""}},[n("p",[e._v("One of the most common features is to have the hidden sidebar to show it when the user presses a button or makes an action, to add a sidebar we have the component vs-sidebar")]),e._v(" "),n("vs-alert",{staticClass:"my-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[e._v("To add an internal link using "),n("a",{attrs:{href:"https://router.vuejs.org/",targte:"_blank"}},[e._v("vue-router")]),e._v(" you can do them simply by adding the property "),n("a",{attrs:{href:"https://router.vuejs.org/api/#to"}},[e._v("to")]),e._v(" as if it were a vue-router link.\n            "),n("br"),e._v("\n            In case you need an external link or normal html, simply do it with the href property")])]),e._v(" "),n("vs-alert",{staticClass:"mb-1",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[e._v("To make the link is in an active state we have the property "),n("code",[e._v("v-model")])])]),e._v(" "),n("div",{staticClass:"mt-5"},[n("div",{attrs:{id:"parentx-demo-1"}},[n("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(t){e.active=!e.active}}},[e._v("Open Sidebar")]),e._v(" "),n("vs-sidebar",{staticClass:"sidebarx sidebarpage",attrs:{parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("div",{staticClass:"header-sidebar",attrs:{slot:"header"},slot:"header"},[n("vs-avatar",{attrs:{size:"70px",src:"https://randomuser.me/api/portraits/men/85.jpg"}}),e._v(" "),n("h4",[e._v("\n                            My Name\n                            "),n("vs-button",{attrs:{color:"primary",icon:"more_horiz",type:"flat"}})],1)],1),e._v(" "),n("vs-sidebar-item",{attrs:{index:"1",icon:"question_answer"}},[e._v("\n                        Dashboard\n                    ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"2",icon:"gavel"}},[e._v("\n                        History\n                    ")]),e._v(" "),n("vs-divider",{attrs:{icon:"person",position:"left"}},[e._v("\n                        User\n                    ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"3",icon:"verified_user"}},[e._v("\n                        Configurations\n                    ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"4",icon:"account_box"}},[e._v("\n                        Profile\n                    ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"5"}},[e._v("\n                        Card\n                    ")]),e._v(" "),n("div",{staticClass:"footer-sidebar",attrs:{slot:"footer"},slot:"footer"},[n("vs-button",{attrs:{icon:"reply",color:"danger",type:"flat"}},[e._v("log out")]),e._v(" "),n("vs-button",{attrs:{icon:"settings",color:"primary",type:"border"}})],1)],1)],1)]),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template>\n\n  <div id="parentx-demo-1">\n\n    <vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button>\n    <vs-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">\n\n      <div class="header-sidebar" slot="header">\n        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>\n\n        <h4>\n          My Name\n          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>\n        </h4>\n\n      </div>\n\n      <vs-sidebar-item index="1" icon="question_answer"> Dashboard </vs-sidebar-item>\n      <vs-sidebar-item index="2" icon="gavel"> History </vs-sidebar-item>\n\n      <vs-divider icon="person" position="left"> User </vs-divider>\n\n      <vs-sidebar-item index="3" icon="verified_user"> Configurations </vs-sidebar-item>\n      <vs-sidebar-item index="4" icon="account_box"> Profile </vs-sidebar-item>\n      <vs-sidebar-item index="5" > Card </vs-sidebar-item>\n\n      <div class="footer-sidebar" slot="footer">\n        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>\n        <vs-button icon="settings" color="primary" type="border"></vs-button>\n      </div>\n\n    </vs-sidebar>\n  </div>\n\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    active:false,\n  })\n}\n<\/script>\n\n<style lang="scss">\n.header-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  h4 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    > button {\n      margin-left: 10px;\n    }\n  }\n}\n\n.footer-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  > button {\n    border: 0px solid rgba(0, 0, 0, 0) !important;\n    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;\n    border-radius: 0px !important;\n  }\n}\n</style>\n        ')])],2)}),[],!1,null,null,null).exports,SidebarParent:Object(r.a)(s,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{staticClass:"overflow-hidden",attrs:{title:"Parent","code-toggler":""}},[n("p",[e._v("You can change the parent of the sidebar with the property "),n("code",[e._v("parent")]),e._v(" that as a value requires an element of the DOM ("),n("strong",[e._v("#idx, .classx")]),e._v(") or a reference of Vuejs as "),n("code",[e._v("$refs.myrefContent")])]),e._v(" "),n("vs-alert",{staticClass:"my-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[e._v("By default the parent of the sidebar is the body")])]),e._v(" "),n("vs-alert",{staticClass:"mb-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[e._v("You can remove dark background(overlay) by setting "),n("code",[e._v("hidden-background")]),e._v(" prop to "),n("code",[e._v("true")])])]),e._v(" "),n("div",{attrs:{slot:"no-body-bottom"},slot:"no-body-bottom"},[n("div",{staticClass:"relative",staticStyle:{height:"500px"},attrs:{id:"parentx-demo-2"}},[n("vs-button",{staticClass:"ml-6",attrs:{color:"primary",type:"filled"},on:{click:function(t){e.active=!e.active}}},[e._v("Open Sidebar")]),e._v(" "),n("vs-sidebar",{staticClass:"sidebarx sidebarpage sidebar-demo-parent bordered-sidebar",attrs:{parent:"#parentx-demo-2","hidden-background":!0,"default-index":"1",color:"primary",spacer:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("div",{staticClass:"header-sidebar",attrs:{slot:"header"},slot:"header"},[n("vs-avatar",{attrs:{size:"70px",src:"https://randomuser.me/api/portraits/men/85.jpg"}}),e._v(" "),n("h4",[e._v("\n\t\t\t\t\t\t\tMy Name\n\t\t\t\t\t\t\t"),n("vs-button",{attrs:{color:"primary",icon:"more_horiz",type:"flat"}})],1)],1),e._v(" "),n("vs-sidebar-item",{attrs:{index:"1",icon:"question_answer"}},[e._v(" Dashboard ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"2",icon:"gavel"}},[e._v(" History ")]),e._v(" "),n("vs-divider",{attrs:{icon:"person",position:"left"}},[e._v(" User ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"3",icon:"verified_user"}},[e._v(" Configurations ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"4",icon:"account_box"}},[e._v(" Profile ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"5"}},[e._v(" Card ")]),e._v(" "),n("div",{staticClass:"footer-sidebar",attrs:{slot:"footer"},slot:"footer"},[n("vs-button",{attrs:{icon:"reply",color:"danger",type:"flat"}},[e._v("log out")]),e._v(" "),n("vs-button",{attrs:{icon:"settings",color:"primary",type:"border"}})],1)],1)],1)]),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template>\n\n  <div id="parentx-demo-2">\n\n    <vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button>\n    <vs-sidebar parent="#parentx-demo-2" :hidden-background="true" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">\n\n      <div class="header-sidebar" slot="header">\n        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>\n        <h4>\n          My Name\n          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>\n        </h4>\n\n      </div>\n\n      <vs-sidebar-item index="1" icon="question_answer"> Dashboard </vs-sidebar-item>\n      <vs-sidebar-item index="2" icon="gavel"> History </vs-sidebar-item>\n\n      <vs-divider icon="person" position="left"> User </vs-divider>\n\n      <vs-sidebar-item index="3" icon="verified_user"> Configurations </vs-sidebar-item>\n      <vs-sidebar-item index="4" icon="account_box"> Profile </vs-sidebar-item>\n      <vs-sidebar-item index="5" > Card </vs-sidebar-item>\n\n      <div class="footer-sidebar" slot="footer">\n        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>\n        <vs-button icon="settings" color="primary" type="border"></vs-button>\n      </div>\n    </vs-sidebar>\n  </div>\n\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    active:false,\n  })\n}\n<\/script>\n\n<style lang="scss">\n#parentx {\n  overflow: hidden;\n  height: 500px;\n  position: relative;\n}\n\n.header-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  h4 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    > button {\n      margin-left: 10px;\n    }\n  }\n}\n\n.footer-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  > button {\n    border: 0px solid rgba(0, 0, 0, 0) !important;\n    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;\n    border-radius: 0px !important;\n  }\n}\n</style>\n\t\t')])],2)}),[],!1,null,null,null).exports,SidebarStatic:Object(r.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Static","code-toggler":""}},[n("p",[e._v("You can also use the sidebar in static mode with the property static")]),e._v(" "),n("vs-alert",{staticClass:"mt-5 mb-base",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[e._v("when putting the sidebar in static mode its position becomes relative for better manipulation")])]),e._v(" "),n("div",[n("div",{staticClass:"parentx-static relative",staticStyle:{height:"435px"}},[n("vs-sidebar",{staticClass:"sidebarx sidebarpage bordered-sidebar",attrs:{"static-position":"","default-index":"1",color:"primary",spacer:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("div",{staticClass:"header-sidebar",attrs:{slot:"header"},slot:"header"},[n("vs-avatar",{attrs:{size:"70px",src:"https://randomuser.me/api/portraits/men/85.jpg"}}),e._v(" "),n("h4",[e._v("\n\t\t\t\t\t\t\tMy Name\n\t\t\t\t\t\t\t"),n("vs-button",{attrs:{color:"primary",icon:"more_horiz",type:"flat"}})],1)],1),e._v(" "),n("vs-sidebar-item",{attrs:{index:"1",icon:"question_answer"}},[e._v(" Dashboard ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"2",icon:"gavel"}},[e._v(" History ")]),e._v(" "),n("vs-divider",{attrs:{icon:"person",position:"left"}},[e._v(" User ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"3",icon:"verified_user"}},[e._v(" Configurations ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"4",icon:"account_box"}},[e._v(" Profile ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"5"}},[e._v(" Card ")]),e._v(" "),n("div",{staticClass:"footer-sidebar",attrs:{slot:"footer"},slot:"footer"},[n("vs-button",{attrs:{icon:"reply",color:"danger",type:"flat"}},[e._v("log out")]),e._v(" "),n("vs-button",{attrs:{icon:"settings",color:"primary",type:"border"}})],1)],1)],1)]),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template>\n\n  <div class="parentx-static">\n    <vs-sidebar static-position default-index="1" color="primary" class="sidebarx" spacer v-model="active">\n\n      <div class="header-sidebar" slot="header">\n        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>\n        <h4>\n          My Name\n          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>\n        </h4>\n\n      </div>\n\n      <vs-sidebar-item index="1" icon="question_answer"> Dashboard </vs-sidebar-item>\n\n      <vs-sidebar-item index="2" icon="gavel"> History </vs-sidebar-item>\n\n      <vs-divider icon="person" position="left"> User </vs-divider>\n\n      <vs-sidebar-item index="3" icon="verified_user"> Configurations </vs-sidebar-item>\n      <vs-sidebar-item index="4" icon="account_box"> Profile </vs-sidebar-item>\n      <vs-sidebar-item index="5" > Card </vs-sidebar-item>\n\n      <div class="footer-sidebar" slot="footer">\n        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>\n        <vs-button icon="settings" color="primary" type="border"></vs-button>\n      </div>\n\n    </vs-sidebar>\n  </div>\n\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    active:false,\n  })\n}\n<\/script>\n\n<style lang="scss">\n.parentx-static {\n  overflow: hidden;\n  height: 500px;\n  position: relative;\n}\n\n.header-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  h4 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    > button {\n      margin-left: 10px;\n    }\n  }\n}\n\n.footer-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  > button {\n    border: 0px solid rgba(0, 0, 0, 0) !important;\n    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;\n    border-radius: 0px !important;\n  }\n}\n</style>\n\t\t')])],2)}),[],!1,null,null,null).exports,SidebarGroupCollapsed:Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Group Collapsed","code-toggler":""}},[n("p",[e._v("You can have groups of sub menus with the component "),n("code",[e._v("vs-sidebar-group")]),e._v(" that as a required parameter we have the "),n("code",[e._v("title")]),e._v(", you can add as many groups as you need, including internally from the same component")]),e._v(" "),n("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[e._v("By default the component is closed but if you need to initialize open you can use the property "),n("code",[e._v("open")])])]),e._v(" "),n("div",{staticClass:"mt-5"},[n("div",{attrs:{id:"parentx-demo-4"}},[n("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(t){e.active=!e.active}}},[e._v("Open Sidebar")]),e._v(" "),n("vs-sidebar",{staticClass:"sidebarx sidebarpage",attrs:{parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("div",{staticClass:"header-sidebar",attrs:{slot:"header"},slot:"header"},[n("vs-avatar",{attrs:{size:"70px",src:"https://randomuser.me/api/portraits/men/85.jpg"}}),e._v(" "),n("h4",[e._v("\n\t\t\t\t\t\t\tMy Name\n\t\t\t\t\t\t\t"),n("vs-button",{attrs:{color:"primary",icon:"more_horiz",type:"flat"}})],1)],1),e._v(" "),n("vs-sidebar-group",{attrs:{title:"Aplication"}},[n("vs-sidebar-item",{attrs:{index:"1",icon:"question_answer"}},[e._v(" Dashboard ")]),e._v(" "),n("vs-sidebar-group",{attrs:{title:"Store"}},[n("vs-sidebar-item",{attrs:{index:"2.1",icon:"store"}},[e._v(" Store ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"2.2",icon:"nature_people"}},[e._v(" Nature ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"2.3",icon:"style"}},[e._v(" Style ")])],1),e._v(" "),n("vs-sidebar-item",{attrs:{index:"2",icon:"gavel"}},[e._v(" History ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"3",icon:"https"}},[e._v(" Security ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"4",icon:"help"}},[e._v(" Help ")])],1),e._v(" "),n("vs-divider",{attrs:{icon:"person",position:"left"}},[e._v(" User ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"5",icon:"verified_user"}},[e._v(" Configurations ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"6",icon:"account_box"}},[e._v(" Profile ")]),e._v(" "),n("div",{staticClass:"footer-sidebar",attrs:{slot:"footer"},slot:"footer"},[n("vs-button",{attrs:{icon:"reply",color:"danger",type:"flat"}},[e._v("log out")]),e._v(" "),n("vs-button",{attrs:{icon:"settings",color:"primary",type:"border"}})],1)],1)],1)]),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template lang="html">\n\n  <div id="parentx-demo-4">\n\n    <vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button>\n    <vs-sidebar parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">\n\n      <div class="header-sidebar" slot="header">\n        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>\n        <h4>\n          My Name\n          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>\n        </h4>\n\n      </div>\n      <vs-sidebar-group title="Aplication">\n        <vs-sidebar-item index="1" icon="question_answer"> Dashboard </vs-sidebar-item>\n\n        <vs-sidebar-group title="Store">\n          <vs-sidebar-item index="2.1" icon="store"> Store </vs-sidebar-item>\n          <vs-sidebar-item index="2.2" icon="nature_people"> Nature </vs-sidebar-item>\n          <vs-sidebar-item index="2.3" icon="style"> Style </vs-sidebar-item>\n        </vs-sidebar-group>\n\n        <vs-sidebar-item index="2" icon="gavel"> History </vs-sidebar-item>\n        <vs-sidebar-item index="3" icon="https"> Security </vs-sidebar-item>\n        <vs-sidebar-item index="4" icon="help"> Help </vs-sidebar-item>\n      </vs-sidebar-group>\n\n\n      <vs-divider icon="person" position="left"> User </vs-divider>\n\n      <vs-sidebar-item index="5" icon="verified_user"> Configurations </vs-sidebar-item>\n      <vs-sidebar-item index="6" icon="account_box"> Profile </vs-sidebar-item>\n\n      <div class="footer-sidebar" slot="footer">\n        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>\n        <vs-button icon="settings" color="primary" type="border"></vs-button>\n      </div>\n\n    </vs-sidebar>\n  </div>\n\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    active:false,\n  })\n}\n<\/script>\n\n<style lang="scss">\n.header-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  h4 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    > button {\n      margin-left: 10px;\n    }\n  }\n}\n\n.footer-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  > button {\n    border: 0px solid rgba(0, 0, 0, 0) !important;\n    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;\n    border-radius: 0px !important;\n  }\n}\n</style>\n\t\t')])],2)}),[],!1,null,null,null).exports,SidebarRight:Object(r.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Open on the right","code-toggler":""}},[n("p",[e._v("You can also choose where you'd like the sidebar to appear, right or left? By default, a sidebar will be located on the left of the screen but sometimes, a right-screened sidebar is really useful!")]),e._v(" "),n("vs-alert",{staticClass:"mb-1",attrs:{icon:"warning",active:"true",color:"warning"}},[n("span",[e._v("A "),n("code",[e._v("static")]),e._v(" sidebar will not appear on the right.")])]),e._v(" "),n("div",{staticClass:"mt-5"},[n("div",{attrs:{id:"parentx-demo-5"}},[n("vs-button",{attrs:{color:"primary",type:"filled"},on:{click:function(t){e.active=!e.active}}},[e._v("Open Sidebar")]),e._v(" "),n("vs-sidebar",{staticClass:"sidebarx sidebarpage",attrs:{"position-right":"",parent:"body","default-index":"1",color:"primary",spacer:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("div",{staticClass:"header-sidebar",attrs:{slot:"header"},slot:"header"},[n("vs-avatar",{attrs:{size:"70px",src:"https://randomuser.me/api/portraits/men/85.jpg"}}),e._v(" "),n("h4",[e._v("\n\t\t\t\t\t\t\tMy Name\n\t\t\t\t\t\t\t"),n("vs-button",{attrs:{color:"primary",icon:"more_horiz",type:"flat"}})],1)],1),e._v(" "),n("vs-sidebar-item",{attrs:{index:"1",icon:"question_answer"}},[e._v(" Dashboard ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"2",icon:"gavel"}},[e._v(" History ")]),e._v(" "),n("vs-divider",{attrs:{icon:"person",position:"left"}},[e._v(" User ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"3",icon:"verified_user"}},[e._v(" Configurations ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"4",icon:"account_box"}},[e._v(" Profile ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"5"}},[e._v(" Card ")]),e._v(" "),n("div",{staticClass:"footer-sidebar",attrs:{slot:"footer"},slot:"footer"},[n("vs-button",{attrs:{icon:"reply",color:"danger",type:"flat"}},[e._v("log out")]),e._v(" "),n("vs-button",{attrs:{icon:"settings",color:"primary",type:"border"}})],1)],1)],1)]),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template>\n\n  <div id="parentx-demo-5">\n\n    <vs-button @click="active=!active" color="primary" type="filled">Open Sidebar</vs-button>\n    <vs-sidebar position-right  parent="body" default-index="1"  color="primary" class="sidebarx" spacer v-model="active">\n\n      <div class="header-sidebar" slot="header">\n        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>\n        <h4>\n          My Name\n          <vs-button color="primary" icon="more_horiz" type="flat"></vs-button>\n        </h4>\n\n      </div>\n\n      <vs-sidebar-item index="1" icon="question_answer"> Dashboard </vs-sidebar-item>\n      <vs-sidebar-item index="2" icon="gavel"> History </vs-sidebar-item>\n\n      <vs-divider icon="person" position="left"> User </vs-divider>\n\n      <vs-sidebar-item index="3" icon="verified_user"> Configurations </vs-sidebar-item>\n      <vs-sidebar-item index="4" icon="account_box"> Profile </vs-sidebar-item>\n      <vs-sidebar-item index="5" > Card </vs-sidebar-item>\n\n      <div class="footer-sidebar" slot="footer">\n        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>\n        <vs-button icon="settings" color="primary" type="border"></vs-button>\n      </div>\n    </vs-sidebar>\n  </div>\n\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    active:false,\n  })\n}\n<\/script>\n\n<style lang="scss">\n.header-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  h4 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    > button {\n      margin-left: 10px;\n    }\n  }\n}\n\n.footer-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  > button {\n    border: 0px solid rgba(0, 0, 0, 0) !important;\n    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;\n    border-radius: 0px !important;\n  }\n}\n</style>\n\t\t')])],2)}),[],!1,null,null,null).exports,SidebarReduceExpand:Object(r.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Reduce and Expand","code-toggler":""}},[n("p",[e._v("You can have a reduced sidebar with the "),n("code",[e._v("reduce")]),e._v(" property which by default makes the sidebar look reduced and when hover expands, if you do not want the functionality to expand when hovering you can remove it with the "),n("code",[e._v("reduce-not-hover-expand")]),e._v(" property")]),e._v(" "),n("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("p",[e._v("You can remove the bounce animation by opening the sidebar with the prop "),n("code",[e._v("reduce-not-rebound")])])]),e._v(" "),n("div",{staticClass:"mt-5"},[n("div",{attrs:{id:"parentx-demo-6"}},[n("vs-button",{staticClass:"mr-4",attrs:{color:"success",type:"gradient"},on:{click:function(t){e.active=!e.active,e.notExpand=!1}}},[e._v("Open Sidebar Reduce-expand")]),e._v(" "),n("vs-button",{staticClass:"mt-4",attrs:{color:"success",type:"gradient"},on:{click:function(t){e.active=!e.active,e.notExpand=!0}}},[e._v("Open Sidebar Reduce-only")]),e._v(" "),n("vs-sidebar",{staticClass:"sidebarx sidebarpage",attrs:{reduce:e.reduce,"reduce-not-hover-expand":e.notExpand,parent:"body","default-index":"1",color:"success",spacer:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[n("div",{staticClass:"header-sidebar",attrs:{slot:"header"},slot:"header"},[n("vs-avatar",{attrs:{size:"70px",src:"https://randomuser.me/api/portraits/men/85.jpg"}})],1),e._v(" "),n("vs-sidebar-group",{attrs:{open:"",title:"Application"}},[n("vs-sidebar-item",{attrs:{index:"1",icon:"menu"},on:{click:function(t){e.reduce=!e.reduce}}},[e._v(" Toggle Sidebar ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"5",icon:"verified_user"}},[e._v(" Configurations ")]),e._v(" "),n("vs-sidebar-group",{attrs:{title:"Store"}},[n("vs-sidebar-item",{attrs:{index:"2.1",icon:"store"}},[e._v(" Store ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"2.2",icon:"nature_people"}},[e._v(" Nature ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"2.3",icon:"style"}},[e._v(" Style ")])],1),e._v(" "),n("vs-sidebar-item",{attrs:{index:"2",icon:"gavel"}},[e._v(" History ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"3",icon:"https"}},[e._v(" Security ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"4",icon:"help"}},[e._v(" Help\n\t\t\t\t\t\t")])],1),e._v(" "),n("vs-divider",{attrs:{icon:"person",position:"left"}},[e._v(" User ")]),e._v(" "),n("vs-sidebar-item",{attrs:{index:"6",icon:"account_box"}},[e._v(" Profile ")]),e._v(" "),n("div",{staticClass:"footer-sidebar",attrs:{slot:"footer"},slot:"footer"},[n("vs-button",{attrs:{icon:"settings",color:"primary",type:"border"}})],1)],1)],1)]),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template>\n\n  <div id="parentx-demo-6">\n    <vs-button @click="active=!active, notExpand = false" color="success" type="filled">Open Sidebar Reduce-expand</vs-button>\n    <vs-button @click="active=!active, notExpand = true" color="success" type="filled">Open Sidebar Reduce-only</vs-button>\n\n    <vs-sidebar :reduce="reduce" :reduce-not-hover-expand="notExpand" parent="body" default-index="1"  color="success" class="sidebarx" spacer v-model="active">\n\n      <div class="header-sidebar" slot="header">\n        <vs-avatar  size="70px" src="https://randomuser.me/api/portraits/men/85.jpg"/>\n      </div>\n      <vs-sidebar-group open title="Application">\n        <vs-sidebar-item index="1" icon="menu" @click="reduce=!reduce"> Toggle Sidebar </vs-sidebar-item>\n        <vs-sidebar-item index="5" icon="verified_user"> Configurations </vs-sidebar-item>\n\n        <vs-sidebar-group title="Store">\n          <vs-sidebar-item index="2.1" icon="store"> Store </vs-sidebar-item>\n          <vs-sidebar-item index="2.2" icon="nature_people"> Nature </vs-sidebar-item>\n          <vs-sidebar-item index="2.3" icon="style"> Style </vs-sidebar-item>\n        </vs-sidebar-group>\n\n        <vs-sidebar-item index="2" icon="gavel"> History </vs-sidebar-item>\n        <vs-sidebar-item index="3" icon="https"> Security </vs-sidebar-item>\n        <vs-sidebar-item index="4" icon="help"> Help </vs-sidebar-item>\n      </vs-sidebar-group>\n\n\n      <vs-divider icon="person" position="left"> User </vs-divider>\n\n      <vs-sidebar-item index="6" icon="account_box"> Profile </vs-sidebar-item>\n\n      <div class="footer-sidebar" slot="footer">\n        <vs-button icon="settings" color="primary" type="border"></vs-button>\n      </div>\n    </vs-sidebar>\n  </div>\n\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    active:false,\n    notExpand: false,\n    reduce: true\n  })\n}\n<\/script>\n\n<style lang="scss">\n.header-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  h4 {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n    > button {\n      margin-left: 10px;\n    }\n  }\n}\n\n.footer-sidebar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  > button {\n    border: 0px solid rgba(0, 0, 0, 0) !important;\n    border-left: 1px solid rgba(0, 0, 0, 0.07) !important;\n    border-radius: 0px !important;\n  }\n}\n</style>\n\t\t')])],2)}),[],!1,null,null,null).exports,SidebarCustom:Object(r.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("vx-card",{attrs:{title:"Custom Sidebar","code-toggler":""}},[n("p",[e._v("With custom sidebar you can create sidebar items and groups using "),n("strong",[e._v(" list of object")]),e._v(".")]),e._v(" "),n("p",[e._v("You can also use feather icons in sidebar group and sidebar items using icon property. Check out all feather icons "),n("a",{attrs:{href:"https://vue-feather-icons.netlify.com/",target:"_blank",rel:"nofollow"}},[e._v("here")])]),e._v(" "),n("p",{staticClass:"mt-3"},[e._v("Main sidebar on left side is demo of Custom Sidebar. You can check full code by clicking on code-toggler icon of this card.")]),e._v(" "),n("template",{slot:"codeContainer"},[e._v('\n<template>\n  <v-nav-menu\n    :sidebarItems="sidebarItems"\n    title="Custom"\n    :logo="navMenuLogo">\n</template>\n\n<script>\nimport VNavMenu from "@/layouts/components/vertical-nav-menu/VerticalNavMenu.vue";\n\nexport default {\n  data: () => ({\n    showSidebar: false,\n    navMenuLogo: require(\'@assets/images/logo/logo.png\'),\n    sidebarItems: [\n      {\n        url: "/",\n        name: "Dashboard",\n        slug: "dashboardAnalytics",\n        icon: "HomeIcon",\n        i18n: "Dashboard",\n      },\n      {\n        url: "/ui-elements/colors",\n        name: "Colors",\n        slug: "colors",\n        icon: "DropletIcon",\n        i18n: "Colors",\n      },\n      {\n        header: "Extensions",\n        i18n: "Extensions",\n      },\n      {\n        url: \'/extensions/select\',\n        name: "Select",\n        icon: "PocketIcon",\n        slug: "extraComponentSelect",\n        i18n: "Select",\n      },\n      {\n        url: \'/extensions/quill-editor\',\n        name: "Quill Editor",\n        icon: "EditIcon",\n        slug: "extraComponentQuillEditor",\n        i18n: "QuillEditor",\n      },\n      {\n        url: \'/extensions/drag-and-drop\',\n        name: "Drag & Drop",\n        icon: "DropletIcon",\n        slug: "extraComponentDragAndDrop",\n        i18n: "DragAndDrop",\n      },\n      {\n        url: \'/extensions/datepicker\',\n        name: "Datepicker",\n        icon: "CalendarIcon",\n        slug: "extraComponentDatepicker",\n        i18n: "Datepicker",\n      },\n    ]\n  }),\n  components: {\n    VNavMenu\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports}},l=(n("S4iI"),Object(r.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"sidebar-demo"}},[t("sidebar-default"),this._v(" "),t("sidebar-parent"),this._v(" "),t("sidebar-static"),this._v(" "),t("sidebar-group-collapsed"),this._v(" "),t("sidebar-right"),this._v(" "),t("sidebar-reduce-expand"),this._v(" "),t("sidebar-custom")],1)}),[],!1,null,null,null));t.default=l.exports},S4iI:function(e,t,n){"use strict";n("Z/6L")},"Z/6L":function(e,t,n){var i=n("BRaB");"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(i,r);i.locals&&(e.exports=i.locals)},iYck:function(e,t,n){"use strict";n("EJdr")}}]);