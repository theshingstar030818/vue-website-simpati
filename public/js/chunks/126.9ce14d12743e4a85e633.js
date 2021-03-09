(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{smAu:function(e,t,a){"use strict";a.r(t);var n={data:function(){return{textarea:""}}},r=a("KHd+"),l={data:function(){return{textarea:""}}},o={data:function(){return{textarea:"",counterDanger:!1}}},s={data:function(){return{textarea:""}}},c={data:function(){return{textarea:""}}},i={components:{TextareaDefault:Object(r.a)(n,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Default","code-toggler":""}},[a("span",[e._v("To add a Textarea we have the component "),a("code",[e._v("vs-textarea")])]),e._v(" "),a("div",{staticClass:"mt-5"},[a("vs-textarea",{model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),e._v(" "),a("template",{slot:"codeContainer"},[e._v("\n<template>\n  <div>\n    <vs-textarea v-model=\"textarea\" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    textarea: '',\n  })\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,TextareaLabel:Object(r.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Label","code-toggler":""}},[a("span",[e._v("If you need to add a label you can use the label property")]),e._v(" "),a("div",{staticClass:"mt-5"},[a("vs-textarea",{attrs:{label:"Label in Textarea"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),e._v(" "),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div>\n    <vs-textarea label="Label in Textarea" v-model="textarea" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    textarea: \'\',\n  })\n}\n<\/script>\n\n        ')])],2)}),[],!1,null,null,null).exports,TextareaCounter:Object(r.a)(o,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Counter","code-toggler":""}},[a("span",[e._v("There are times when we need the user to only enter a certain number of characters for it, we have the property "),a("code",[e._v("counter")]),e._v(", the value is a number and determines the maximum")]),e._v(" "),a("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[a("span",[e._v("To get when the number of characters is exceeded use the property "),a("code",[e._v("counter-danger.sync")])])]),a("br"),e._v(" "),a("div",[a("vs-textarea",{attrs:{counter:"20",label:"Counter: 20","counter-danger":e.counterDanger},on:{"update:counterDanger":function(t){e.counterDanger=t},"update:counter-danger":function(t){e.counterDanger=t}},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),e._v(" "),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div>\n    <vs-textarea counter="20" label="Counter: 20" :counter-danger.sync="counterDanger" v-model="textarea" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    textarea: \'\',\n    counterDanger: false\n  })\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,TextareaWidth:Object(r.a)(s,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Width","code-toggler":""}},[a("span",[e._v("You can set the width of the textarea with the "),a("code",[e._v("width")]),e._v(" prop.")]),e._v(" "),a("div",{staticClass:"mt-5"},[a("vs-textarea",{attrs:{label:"Width set to 300px",width:"300"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),e._v(" "),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div>\n    <vs-textarea v-model="textarea" label="Height set to 300px" height="300" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    textarea: \'\',\n  })\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,TextareaHeight:Object(r.a)(c,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vx-card",{attrs:{title:"Height","code-toggler":""}},[a("span",[e._v("You can set the height of the textarea with the "),a("code",[e._v("height")]),e._v(" prop.")]),e._v(" "),a("div",{staticClass:"mt-5"},[a("vs-textarea",{attrs:{label:"Height set to 200px",height:"200"},model:{value:e.textarea,callback:function(t){e.textarea=t},expression:"textarea"}})],1),e._v(" "),a("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div>\n    <vs-textarea v-model="textarea" label="Height set to 200px" height="200" />\n  </div>\n</template>\n\n<script>\nexport default {\n  data:()=>({\n    textarea: \'\',\n  })\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports}},u=Object(r.a)(i,(function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"form-element-textarea-demo"}},[t("textarea-default"),this._v(" "),t("textarea-label"),this._v(" "),t("textarea-counter"),this._v(" "),t("textarea-height")],1)}),[],!1,null,null,null);t.default=u.exports}}]);