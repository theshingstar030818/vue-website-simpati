(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{Dqt6:function(s,t,n){"use strict";n.r(t);var c={data:function(){return{switch1:!0,switch2:!1,switch3:!0,switch4:!1}}},l=n("KHd+"),e={data:function(){return{color:"#5a3cc4",switch1:!0,switch2:!0,switch3:!0,switch4:!0,switch5:!0,switch6:!0}}},i={data:function(){return{switch1:!0,switch2:!0,switch3:!0,switch4:!0,switch5:!0}}},o={data:function(){return{switch1:!1,switch2:!1,switch3:!1,switch4:!1,switch5:!1,switch6:!1}}},a={data:function(){return{switchArray:["luis"]}}},r={components:{SwitchState:Object(l.a)(c,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("vx-card",{attrs:{title:"State","code-toggler":""}},[n("p",[s._v("To implement a switch element in the application, we add the component "),n("code",[s._v("vs-switch")])]),s._v(" "),n("ul",{staticClass:"demo-alignment"},[n("li",[n("label",[s._v("true / active")]),s._v(" "),n("vs-switch",{model:{value:s.switch1,callback:function(t){s.switch1=t},expression:"switch1"}})],1),s._v(" "),n("li",[n("label",[s._v("false / inactive")]),s._v(" "),n("vs-switch",{model:{value:s.switch2,callback:function(t){s.switch2=t},expression:"switch2"}})],1),s._v(" "),n("li",[n("label",[s._v("disabled / active")]),s._v(" "),n("vs-switch",{attrs:{disabled:"true"},model:{value:s.switch3,callback:function(t){s.switch3=t},expression:"switch3"}})],1),s._v(" "),n("li",[n("label",[s._v("disabled / inactive")]),s._v(" "),n("vs-switch",{attrs:{disabled:"true"},model:{value:s.switch4,callback:function(t){s.switch4=t},expression:"switch4"}})],1)]),s._v(" "),n("template",{slot:"codeContainer"},[s._v('\n<template lang="html">\n  <ul class="switch-container">\n    <li>\n      <label>true / active</label>\n      <vs-switch v-model="switch1" />\n    </li>\n    <li>\n      <label>false / inactive</label>\n      <vs-switch v-model="switch2" />\n    </li>\n    <li>\n      <label>disabled / active</label>\n      <vs-switch disabled="true" v-model="switch3" />\n    </li>\n    <li>\n      <label>disabled / inactive</label>\n      <vs-switch disabled="true" v-model="switch4" />\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switch1:true,\n      switch2:false,\n      switch3:true,\n      switch4:false,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,SwitchColor:Object(l.a)(e,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("vx-card",{attrs:{title:"Color","code-toggler":""}},[n("span",[s._v("You can choose the default "),n("strong",[s._v("Switch")]),s._v(". You are able to use the Main Colors or "),n("strong",[s._v("RGB")]),s._v(" and "),n("strong",[s._v("HEX")]),s._v(" colors.")]),s._v(" "),n("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[n("span",[s._v("Only "),n("strong",[s._v("RGB")]),s._v(" and "),n("strong",[s._v("HEX")]),s._v(" colors are supported.")])]),s._v(" "),n("ul",{staticClass:"demo-alignment"},[n("li",[n("label",[s._v("Primary")]),s._v(" "),n("vs-switch",{model:{value:s.switch1,callback:function(t){s.switch1=t},expression:"switch1"}})],1),s._v(" "),n("li",[n("label",[s._v("Success")]),s._v(" "),n("vs-switch",{attrs:{color:"success"},model:{value:s.switch2,callback:function(t){s.switch2=t},expression:"switch2"}})],1),s._v(" "),n("li",[n("label",[s._v("Danger")]),s._v(" "),n("vs-switch",{attrs:{color:"danger"},model:{value:s.switch3,callback:function(t){s.switch3=t},expression:"switch3"}})],1),s._v(" "),n("li",[n("label",[s._v("Warning")]),s._v(" "),n("vs-switch",{attrs:{color:"warning"},model:{value:s.switch4,callback:function(t){s.switch4=t},expression:"switch4"}})],1),s._v(" "),n("li",[n("label",[s._v("Dark")]),s._v(" "),n("vs-switch",{attrs:{color:"dark"},model:{value:s.switch5,callback:function(t){s.switch5=t},expression:"switch5"}})],1),s._v(" "),n("li",{staticClass:"con-input-color"},[n("label",[s._v("Color: "),n("span",[s._v(s._s(s.color))])]),s._v(" "),n("vs-switch",{attrs:{color:s.color},model:{value:s.switch6,callback:function(t){s.switch6=t},expression:"switch6"}})],1),s._v(" "),n("li",{staticStyle:{"align-self":"flex-end"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:s.color,expression:"color"}],attrs:{type:"color"},domProps:{value:s.color},on:{input:function(t){t.target.composing||(s.color=t.target.value)}}})])]),s._v(" "),n("template",{slot:"codeContainer"},[s._v('\n<template lang="html">\n  <ul class="con-s">\n    <li>\n      <label>Primary</label>\n      <vs-switch v-model="switch1" />\n    </li>\n    <li>\n      <label>Success</label>\n      <vs-switch color="success" v-model="switch2" />\n    </li>\n    <li>\n      <label>Danger</label>\n      <vs-switch color="danger" v-model="switch3" />\n    </li>\n    <li>\n      <label>Warning</label>\n      <vs-switch color="warning" v-model="switch4" />\n    </li>\n    <li>\n      <label>Dark</label>\n      <vs-switch color="dark" v-model="switch5" />\n    </li>\n    <li class="con-input-color">\n      <label>Color: <span>'+s._s(s.color)+'</span></label>\n      <input v-model="color" type="color">\n      <vs-switch :color="color" v-model="switch6" />\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      color:\'#5a3cc4\',\n      switch1:true,\n      switch2:true,\n      switch3:true,\n      switch4:true,\n      switch5:true,\n      switch6:true,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,SwitchText:Object(l.a)(i,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("vx-card",{attrs:{title:"Text","code-toggler":""}},[n("span",[s._v("You can add a descriptive text with the slot "),n("code",[s._v("on")]),s._v(" or "),n("code",[s._v("off")]),s._v(". You can also join the text with the icons.")]),s._v(" "),n("ul",{staticClass:"demo-alignment"},[n("li",[n("vs-switch",{model:{value:s.switch1,callback:function(t){s.switch1=t},expression:"switch1"}},[n("span",{attrs:{slot:"on"},slot:"on"},[s._v("On")]),s._v(" "),n("span",{attrs:{slot:"off"},slot:"off"},[s._v("Off")])])],1),s._v(" "),n("li",[n("vs-switch",{attrs:{color:"success"},model:{value:s.switch2,callback:function(t){s.switch2=t},expression:"switch2"}},[n("span",{attrs:{slot:"on"},slot:"on"},[s._v("Accept")]),s._v(" "),n("span",{attrs:{slot:"off"},slot:"off"},[s._v("Cancel")])])],1),s._v(" "),n("li",[n("vs-switch",{attrs:{color:"danger","vs-icon-off":"close"},model:{value:s.switch3,callback:function(t){s.switch3=t},expression:"switch3"}},[n("span",{attrs:{slot:"on"},slot:"on"},[s._v("Remove")])])],1),s._v(" "),n("li",[n("vs-switch",{attrs:{color:"warning","vs-icon-on":"error_outline"},model:{value:s.switch4,callback:function(t){s.switch4=t},expression:"switch4"}},[n("span",{attrs:{slot:"off"},slot:"off"},[s._v("Prevent")])])],1),s._v(" "),n("li",[n("vs-switch",{attrs:{color:"dark","icon-pack":"feather","vs-icon-on":"icon-check-circle","vs-icon-off":"icon-slash"},model:{value:s.switch5,callback:function(t){s.switch5=t},expression:"switch5"}},[n("span",{attrs:{slot:"on"},slot:"on"},[s._v("YES")]),s._v(" "),n("span",{attrs:{slot:"off"},slot:"off"},[s._v("NO")])])],1)]),s._v(" "),n("template",{slot:"codeContainer"},[s._v('\n<template>\n  <ul class="con-s">\n    <li>\n      <vs-switch v-model="switch1">\n        <span slot="on">On</span>\n        <span slot="off">Off</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="success" v-model="switch2">\n        <span slot="on">Accept</span>\n        <span slot="off">Cancel</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="danger" vs-icon-off="close" v-model="switch3">\n        <span slot="on">Remove</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="warning" vs-icon-on="error_outline" v-model="switch4">\n        <span slot="off">Prevent</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="dark" icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash" v-model="switch5">\n        <span slot="on">YES</span>\n        <span slot="off">NO</span>\n      </vs-switch>\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switch1:true,\n      switch2:true,\n      switch3:true,\n      switch4:true,\n      switch5:true,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,SwitchIcons:Object(l.a)(o,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("vx-card",{attrs:{title:"Icons","code-toggler":""}},[n("p",[s._v("We can add a representative icon inside our switch with the property "),n("code",[s._v("vs-icon")]),s._v(".")]),s._v(" "),n("p",[s._v("If you only need to add the icon in one of the states you can do it with the property "),n("code",[s._v("vs-icon-on")]),s._v(" or "),n("code",[s._v("vs-icon-off")])]),s._v(" "),n("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("span",[s._v("Vuesax uses the "),n("strong",[s._v("Google Material Icons")]),s._v(" font library. For a list of all available icons, visit the official "),n("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[s._v("Material Icons page.")])])]),s._v(" "),n("ul",{staticClass:"demo-alignment"},[n("li",[n("label",[s._v("Primary")]),s._v(" "),n("vs-switch",{attrs:{"icon-pack":"feather","vs-icon-off":"icon-bell","vs-icon-on":"icon-check"},model:{value:s.switch1,callback:function(t){s.switch1=t},expression:"switch1"}})],1),s._v(" "),n("li",[n("label",[s._v("Success")]),s._v(" "),n("vs-switch",{attrs:{color:"success","icon-pack":"feather","vs-icon":"icon-check"},model:{value:s.switch2,callback:function(t){s.switch2=t},expression:"switch2"}})],1),s._v(" "),n("li",[n("label",[s._v("Danger")]),s._v(" "),n("vs-switch",{attrs:{color:"danger","icon-pack":"feather","vs-icon":"icon-x"},model:{value:s.switch3,callback:function(t){s.switch3=t},expression:"switch3"}})],1),s._v(" "),n("li",[n("label",[s._v("Warning")]),s._v(" "),n("vs-switch",{attrs:{color:"warning","icon-pack":"feather","vs-icon":"icon-alert-circle"},model:{value:s.switch4,callback:function(t){s.switch4=t},expression:"switch4"}})],1),s._v(" "),n("li",[n("label",[s._v("Dark")]),s._v(" "),n("vs-switch",{attrs:{color:"dark","icon-pack":"feather","vs-icon":"icon-volume-x"},model:{value:s.switch5,callback:function(t){s.switch5=t},expression:"switch5"}})],1),s._v(" "),n("li",[n("label",[s._v("rgb(color) / #color")]),s._v(" "),n("vs-switch",{attrs:{color:"rgb(51, 53, 83)","icon-pack":"feather","vs-icon":"icon-camera"},model:{value:s.switch6,callback:function(t){s.switch6=t},expression:"switch6"}})],1)]),s._v(" "),n("template",{slot:"codeContainer"},[s._v('\n<template>\n    <ul class="demo-alignment">\n        <li>\n            <label>Primary</label>\n            <vs-switch v-model="switch1" icon-pack="feather" vs-icon-off="icon-bell" vs-icon-on="icon-check" />\n        </li>\n        <li>\n            <label>Success</label>\n            <vs-switch color="success" v-model="switch2" icon-pack="feather" vs-icon="icon-check" />\n        </li>\n        <li>\n            <label>Danger</label>\n            <vs-switch color="danger" v-model="switch3" icon-pack="feather" vs-icon="icon-x" />\n        </li>\n        <li>\n            <label>Warning</label>\n            <vs-switch color="warning" v-model="switch4" icon-pack="feather" vs-icon="icon-alert-circle" />\n        </li>\n        <li>\n            <label>Dark</label>\n            <vs-switch color="dark" v-model="switch5" icon-pack="feather" vs-icon="icon-volume-x" />\n        </li>\n        <li>\n            <label>rgb(color) / #color</label>\n            <vs-switch color="rgb(51, 53, 83)" v-model="switch6" icon-pack="feather" vs-icon="icon-camera" />\n        </li>\n    </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switch1:false,\n      switch2:false,\n      switch3:false,\n      switch4:false,\n      switch5:false,\n      switch6:false\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,SwitchArrayValue:Object(l.a)(a,(function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("vx-card",{attrs:{title:"Array Value","code-toggler":""}},[n("span",[s._v("For saving the values in an array, you could simply pass it as a value.")]),s._v(" "),n("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[n("span",[s._v("For using an array as a value, we need to use the "),n("code",[s._v("vs-value")]),s._v(" property inside the switch component. That is the value that will be added to the array.")])]),s._v(" "),n("ul",{staticClass:"demo-alignment"},[n("li",[n("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"luis"},model:{value:s.switchArray,callback:function(t){s.switchArray=t},expression:"switchArray"}},[n("span",{attrs:{slot:"off"},slot:"off"},[s._v("Luis")])])],1),s._v(" "),n("li",[n("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"carols"},model:{value:s.switchArray,callback:function(t){s.switchArray=t},expression:"switchArray"}},[n("span",{attrs:{slot:"off"},slot:"off"},[s._v("Carols")])])],1),s._v(" "),n("li",[n("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"summer"},model:{value:s.switchArray,callback:function(t){s.switchArray=t},expression:"switchArray"}},[n("span",{attrs:{slot:"off"},slot:"off"},[s._v("Summer")])])],1),s._v(" "),n("li",[n("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"lyon"},model:{value:s.switchArray,callback:function(t){s.switchArray=t},expression:"switchArray"}},[n("span",{attrs:{slot:"off"},slot:"off"},[s._v("Lyon")])])],1)]),s._v(" "),n("p",{staticClass:"op-block mt-5"},[s._v(s._s(s.switchArray))]),s._v(" "),n("template",{slot:"codeContainer"},[s._v('\n<template>\n  <ul class="con-s">\n    <li class="modelx">\n      '+s._s("{{ switchArray }}")+'\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="luis">\n        <span slot="off">Luis</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="carols">\n        <span slot="off">Carols</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="summer">\n        <span slot="off">Summer</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="lyon">\n        <span slot="off">Lyon</span>\n      </vs-switch>\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switchArray:[\'luis\'],\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports}},v=(n("J+Jq"),Object(l.a)(r,(function(){var s=this.$createElement,t=this._self._c||s;return t("div",{attrs:{id:"form-element-switch-demo"}},[t("switch-state"),this._v(" "),t("switch-color"),this._v(" "),t("switch-text"),this._v(" "),t("switch-icons"),this._v(" "),t("switch-array-value")],1)}),[],!1,null,null,null));t.default=v.exports},HTGF:function(s,t,n){(s.exports=n("I1BE")(!1)).push([s.i,"/*=========================================================================================\n    File Name: switch.scss\n    Description: Switch page styles\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n[dir=ltr] .demo-alignment li {\n  margin-right: 2rem;\n}\n[dir=rtl] .demo-alignment li {\n  margin-left: 2rem;\n}\n[dir] .demo-alignment .vs-switch {\n  margin-top: 0.5rem;\n}",""])},"J+Jq":function(s,t,n){"use strict";n("S2fA")},S2fA:function(s,t,n){var c=n("HTGF");"string"==typeof c&&(c=[[s.i,c,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(c,l);c.locals&&(s.exports=c.locals)}}]);