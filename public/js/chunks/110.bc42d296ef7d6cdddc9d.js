(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"3e+E":function(t,e,i){"use strict";i.r(e);var s=i("KHd+"),l={data:function(){return{val:!1}}},a={components:{ListBasic:Object(s.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vx-card",{attrs:{title:"Basic","code-toggler":""}},[i("p",[t._v("A basic list of items with "),i("code",[t._v("title")]),t._v(" and "),i("code",[t._v("subtitle")])]),t._v(" "),i("div",{staticClass:"demo-alignment"},[i("vs-list",[i("vs-list-item",{attrs:{title:"One text"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Another text",subtitle:"A little text"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Some more text"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Even more text",subtitle:"Another little text"}})],1)],1),t._v(" "),i("template",{slot:"codeContainer"},[t._v('\n<vs-list>\n  <vs-list-item title="One text"></vs-list-item>\n  <vs-list-item title="Another text" subtitle="A little text"></vs-list-item>\n  <vs-list-item title="Some more text"></vs-list-item>\n  <vs-list-item title="Even more text" subtitle="Another little text"></vs-list-item>\n</vs-list>\n      ')])],2)}),[],!1,null,null,null).exports,ListHeader:Object(s.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vx-card",{attrs:{title:"Header","code-toggler":""}},[i("p",[t._v("A "),i("code",[t._v("vs-list-header")]),t._v(" separator with custom "),i("code",[t._v("color")])]),t._v(" "),i("div",{staticClass:"demo-alignment"},[i("vs-list",[i("vs-list-header",{attrs:{title:"Group 1"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Snickerdoodle",subtitle:"An excellent companion"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Sapporo Haru",subtitle:"An excellent polish restaurant, quick delivery and hearty, filling meals"}}),t._v(" "),i("vs-list-header",{attrs:{title:"Group 2",color:"success"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Enid's",subtitle:"At night a bar, during the day a delicious brunch spot."}}),t._v(" "),i("vs-list-item",{attrs:{title:"Veronika Ossi",subtitle:"Has not watched anything recently"}})],1)],1),t._v(" "),i("template",{slot:"codeContainer"},[t._v('\n<vs-list>\n  <vs-list-header title="Group 1"></vs-list-header>\n\n  <vs-list-item title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>\n  <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>\n  <vs-list-header title="Group 2" color="success"></vs-list-header>\n  <vs-list-item title="Enid\'s" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>\n  <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>\n</vs-list>\n        ')])],2)}),[],!1,null,null,null).exports,ListIcon:Object(s.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vx-card",{attrs:{title:"Icon","code-toggler":""}},[i("p",[t._v("The list items and the headers can have a "),i("code",[t._v("icon")]),t._v(" as well")]),t._v(" "),i("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[i("p",[t._v("Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),i("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[t._v("Material Icons page")]),t._v(".")]),t._v(" "),i("p",[t._v("FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.")])]),t._v(" "),i("div",{staticClass:"demo-alignment"},[i("vs-list",[i("vs-list-header",{attrs:{"icon-pack":"feather",icon:"icon-users",title:"Group 1"}}),t._v(" "),i("vs-list-item",{attrs:{"icon-pack":"feather",icon:"icon-check",title:"Snickerdoodle",subtitle:"An excellent companion"}}),t._v(" "),i("vs-list-item",{attrs:{"icon-pack":"feather",icon:"icon-check",title:"Sapporo Haru",subtitle:"An excellent polish restaurant, quick delivery and hearty, filling meals"}}),t._v(" "),i("vs-list-header",{attrs:{"icon-pack":"feather",icon:"icon-user-plus",title:"Group 2",color:"success"}}),t._v(" "),i("vs-list-item",{attrs:{"icon-pack":"feather",icon:"icon-shield",title:"Enid's",subtitle:"At night a bar, during the day a delicious brunch spot."}}),t._v(" "),i("vs-list-item",{attrs:{"icon-pack":"feather",icon:"icon-shield",title:"Veronika Ossi",subtitle:"Has not watched anything recently"}})],1)],1),t._v(" "),i("template",{slot:"codeContainer"},[t._v('\n<vs-list>\n\n    <vs-list-header icon-pack="feather" icon="icon-users" title="Group 1"></vs-list-header>\n    <vs-list-item icon-pack="feather" icon="icon-check" title="Snickerdoodle" subtitle="An excellent companion"></vs-list-item>\n    <vs-list-item icon-pack="feather" icon="icon-check" title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals"></vs-list-item>\n\n    <vs-list-header icon-pack="feather" icon="icon-user-plus" title="Group 2" color="success"></vs-list-header>\n    <vs-list-item icon-pack="feather" icon="icon-shield" title="Enid\'s" subtitle="At night a bar, during the day a delicious brunch spot."></vs-list-item>\n    <vs-list-item icon-pack="feather" icon="icon-shield" title="Veronika Ossi" subtitle="Has not watched anything recently"></vs-list-item>\n</vs-list>\n        ')])],2)}),[],!1,null,null,null).exports,ListContent:Object(s.a)(l,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vx-card",{attrs:{title:"Content","code-toggler":""}},[i("p",[t._v("You can add custom content to the item. It will be pushed to the right side")]),t._v(" "),i("div",{staticClass:"demo-alignment"},[i("vs-list",[i("vs-list-header",{attrs:{title:"Group 1"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Snickerdoodle",subtitle:"An excellent companion"}},[i("vs-button",{attrs:{color:"danger"}},[t._v("One action")])],1),t._v(" "),i("vs-list-item",{attrs:{title:"Sapporo Haru",subtitle:"An excellent polish restaurant, quick delivery and hearty, filling meals"}},[i("vs-checkbox",{attrs:{color:"danger"}})],1),t._v(" "),i("vs-list-header",{attrs:{title:"Group 2",color:"success"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Enid's",subtitle:"At night a bar, during the day a delicious brunch spot."}},[i("vs-chip",{attrs:{color:"warning mr-0"}},[t._v("Another component")])],1),t._v(" "),i("vs-list-item",{attrs:{title:"Veronika Ossi",subtitle:"Has not watched anything recently"}},[i("vs-switch",{attrs:{color:"warning"},model:{value:t.val,callback:function(e){t.val=e},expression:"val"}})],1)],1)],1),t._v(" "),i("template",{slot:"codeContainer"},[t._v('\n<vs-list>\n  <vs-list-header title="Group 1"></vs-list-header>\n\n  <vs-list-item title="Snickerdoodle" subtitle="An excellent companion">\n    <vs-button color="danger">One action</vs-button>\n  </vs-list-item>\n\n  <vs-list-item title="Sapporo Haru" subtitle="An excellent polish restaurant, quick delivery and hearty, filling meals">\n    <vs-checkbox color="danger"/>\n  </vs-list-item>\n\n  <vs-list-header title="Group 2" color="success"></vs-list-header>\n  <vs-list-item title="Enid\'s" subtitle="At night a bar, during the day a delicious brunch spot.">\n    <vs-chip color="warning">Another component</vs-chip>\n  </vs-list-item>\n\n  <vs-list-item title="Veronika Ossi" subtitle="Has not watched anything recently">\n    <vs-switch color="warning" v-model="val"/>\n  </vs-list-item>\n</vs-list>\n        ')])],2)}),[],!1,null,null,null).exports,ListAvatar:Object(s.a)({},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("vx-card",{attrs:{title:"Avatar","code-toggler":""}},[i("p",[t._v("You can implement an avatar in the list with the "),i("code",[t._v('slot="avatar"')]),t._v(" by putting a [vs-avatar] component")]),t._v(" "),i("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[i("p",[t._v("Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),i("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[t._v("Material Icons page")]),t._v(".")]),t._v(" "),i("p",[t._v("FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.")])]),t._v(" "),i("div",{staticClass:"demo-alignment"},[i("vs-list",[i("vs-list-header",{attrs:{title:"Users",color:"danger"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Steve Jobes",subtitle:"Top Contributor"}},[i("template",{slot:"avatar"},[i("vs-avatar")],1)],2),t._v(" "),i("vs-list-item",{attrs:{title:"Matt",subtitle:"11 Points"}},[i("template",{slot:"avatar"},[i("vs-avatar",{attrs:{"vs-text":"Vuexy"}})],1)],2),t._v(" "),i("vs-list-header",{attrs:{title:"Profile photo",color:"warning"}}),t._v(" "),i("vs-list-item",{attrs:{title:"Xian Famous Foods",subtitle:"A taste of Shaanxi's delicious culinary traditions, with delights like spicy cold noodles and lamb burgers."}},[i("template",{slot:"avatar"},[i("vs-avatar",{attrs:{"vs-text":"Vue"}})],1)],2)],1)],1),t._v(" "),i("template",{slot:"codeContainer"},[t._v('\n<vs-list>\n  <vs-list-header title="Users" color="danger"></vs-list-header>\n\n  <vs-list-item title="Steve Jobes" subtitle="Top Contributor">\n    <template slot="avatar">\n      <vs-avatar />\n    </template>\n  </vs-list-item>\n\n  <vs-list-item title="Matt" subtitle="11 Points">\n    <template slot="avatar">\n      <vs-avatar vs-text="Vuexy"/>\n    </template>\n  </vs-list-item>\n\n  <vs-list-header title="Profile photo" color="warning"></vs-list-header>\n\n  <vs-list-item title="Xian Famous Foods" subtitle="A taste of Shaanxi\'s delicious culinary traditions, with delights like spicy cold noodles and lamb burgers.">\n    <template slot="avatar">\n      <vs-avatar vs-text="Vue"/>\n    </template>\n  </vs-list-item>\n</vs-list>\n        ')])],2)}),[],!1,null,null,null).exports}},n=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"list-demo"}},[e("list-basic"),this._v(" "),e("list-header"),this._v(" "),e("list-icon"),this._v(" "),e("list-content"),this._v(" "),e("list-avatar")],1)}),[],!1,null,null,null);e.default=n.exports}}]);