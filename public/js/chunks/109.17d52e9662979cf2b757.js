(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{jX6O:function(e,n,t){"use strict";t.r(n);var s={data:function(){return{isDeleted:!1}}},c=t("KHd+"),i={data:function(){return{isDeleted:!1,isDeleted2:!1}}},a={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Vuexy"]}},methods:{reset:function(){this.chips=["Dribbble","GitHub","Behance","Vuejs","Vuexy"]},remove:function(e){this.chips.splice(this.chips.indexOf(e),1)}}},r={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Vuexy"]}},methods:{remove:function(e){this.chips.splice(this.chips.indexOf(e),1)}}},o={data:function(){return{chips:["Dribbble","GitHub","Behance","Vuejs","Vuexy"]}},methods:{remove:function(e){this.chips.splice(this.chips.indexOf(e),1)}}},l={components:{ChipDefault:Object(c.a)(s,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Default","code-toggler":""}},[t("p",[e._v("Helps you represent simple data with colorful options")]),e._v(" "),t("div",{staticClass:"demo-alignment"},[t("vs-chip",[e._v("Basic Chip")]),e._v(" "),t("vs-chip",[t("vs-avatar",{attrs:{text:"LD"}}),e._v("\n                Avatar Text\n            ")],1),e._v(" "),t("vs-chip",[t("vs-avatar"),e._v("\n                Avatar Icon\n            ")],1),e._v(" "),t("vs-chip",[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/4.jpg"}}),e._v("\n                Avatar Image\n            ")],1),e._v(" "),e.isDeleted?e._e():t("vs-chip",{attrs:{closable:""},on:{click:function(n){e.isDeleted=!0}}},[e._v("\n                Closable chip\n            ")])],1),e._v(" "),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-chip>Basic Chip</vs-chip>\n\n    <vs-chip>\n      <vs-avatar text="LD"/>\n      Avatar Text\n    </vs-chip>\n\n    <vs-chip>\n      <vs-avatar />\n      Avatar Icon\n    </vs-chip>\n\n    <vs-chip>\n      <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg"/>\n      Avatar Image\n    </vs-chip>\n\n    <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable>\n      Closable chip\n    </vs-chip>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      isDeleted: false,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,ChipColor:Object(c.a)(i,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Color","code-toggler":""}},[t("p",[e._v("Change the background color of the chip")]),e._v(" "),t("vs-alert",{staticClass:"my-3",attrs:{icon:"warning",active:"true",color:"warning"}},[t("span",[e._v("Only "),t("strong",[e._v("RGB")]),e._v(" and "),t("strong",[e._v("HEX")]),e._v(" colors are supported.")])]),e._v(" "),t("div",{staticClass:"demo-alignment"},[t("vs-chip",{attrs:{color:"primary"}},[e._v("\n                Basic Chip\n            ")]),e._v(" "),t("vs-chip",{attrs:{color:"success"}},[t("vs-avatar",{attrs:{text:"LD"}}),e._v("\n                Avatar Text\n            ")],1),e._v(" "),t("vs-chip",{attrs:{color:"danger"}},[t("vs-avatar"),e._v("\n                Avatar Icon\n            ")],1),e._v(" "),t("vs-chip",{attrs:{color:"warning"}},[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/4.jpg"}}),e._v("\n                Avatar Image\n            ")],1),e._v(" "),e.isDeleted?e._e():t("vs-chip",{attrs:{closable:"",color:"dark"},on:{click:function(n){e.isDeleted=!0}}},[e._v("\n                Closable chip\n            ")]),e._v(" "),e.isDeleted2?e._e():t("vs-chip",{attrs:{closable:"",color:"#24c1a0","close-icon":"close"},on:{click:function(n){e.isDeleted2=!0}}},[t("vs-avatar",{attrs:{src:"https://randomuser.me/api/portraits/men/16.jpg"}}),e._v("\n                Closable chip\n            ")],1)],1),e._v(" "),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-chip color="primary">Basic Chip</vs-chip>\n\n    <vs-chip color="success">\n      <vs-avatar text="LD" />\n      Avatar Text\n    </vs-chip>\n\n    <vs-chip color="danger">\n      <vs-avatar />\n      Avatar Icon\n    </vs-chip>\n\n    <vs-chip color="warning">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/4.jpg" />\n      Avatar Image\n    </vs-chip>\n\n    <vs-chip @click="isDeleted=true" v-if="!isDeleted" closable color="dark">\n      Closable chip\n    </vs-chip>\n\n    <vs-chip @click="isDeleted2=true" v-if="!isDeleted2" closable color="#24c1a0" close-icon="close">\n      <vs-avatar src="https://randomuser.me/api/portraits/men/16.jpg" />\n      Closable chip\n    </vs-chip>\n  </div>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      isDeleted: false,\n      isDeleted2: false,\n    }\n  }\n}\n<\/script>\n        ')])],2)}),[],!1,null,null,null).exports,ChipIcon:Object(c.a)({},(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Icon","code-toggler":""}},[t("p",[e._v("Add a nice icon to the chip")]),e._v(" "),t("div",{staticClass:"demo-alignment"},[t("vs-chip",[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-user"}}),e._v(" "),t("span",[e._v("Icon Default")])],1),e._v(" "),t("vs-chip",{attrs:{color:"primary"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-send"}}),e._v(" "),t("span",[e._v("Icon send")])],1),e._v(" "),t("vs-chip",{attrs:{color:"success"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-mail"}}),e._v(" "),t("span",[e._v("Icon markunread")])],1),e._v(" "),t("vs-chip",{attrs:{color:"danger"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-slash"}}),e._v(" "),t("span",[e._v("Icon block")])],1),e._v(" "),t("vs-chip",{attrs:{color:"warning"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-battery"}}),e._v(" "),t("span",[e._v("Icon battery_alert")])],1),e._v(" "),t("vs-chip",{attrs:{color:"dark"}},[t("vs-avatar",{attrs:{"icon-pack":"feather",icon:"icon-edit"}}),e._v(" "),t("span",[e._v("Icon edit")])],1)],1),e._v(" "),t("template",{slot:"codeContainer"},[e._v('\n<div class="demo-alignment">\n\n  <vs-chip>\n    <vs-avatar icon-pack="feather" icon="icon-user" />\n    <span>Icon Default</span>\n  </vs-chip>\n\n  <vs-chip color="primary">\n    <vs-avatar icon-pack="feather" icon="icon-send" />\n    <span>Icon send</span>\n  </vs-chip>\n\n  <vs-chip color="success">\n    <vs-avatar icon-pack="feather" icon="icon-mail" />\n    <span>Icon markunread</span>\n  </vs-chip>\n\n  <vs-chip color="danger">\n    <vs-avatar icon-pack="feather" icon="icon-slash" />\n    <span>Icon block</span>\n  </vs-chip>\n\n  <vs-chip color="warning">\n    <vs-avatar icon-pack="feather" icon="icon-battery" />\n    <span>Icon battery_alert</span>\n  </vs-chip>\n\n  <vs-chip color="dark">\n    <vs-avatar icon-pack="feather" icon="icon-edit" />\n    <span>Icon edit</span>\n  </vs-chip>\n</div>\n        ')])],2)}),[],!1,null,null,null).exports,ChipClosable:Object(c.a)(a,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Closable","code-toggler":""}},[t("p",[e._v("For making a chip closable")]),e._v(" "),t("div",{staticClass:"demo-alignment"},[0==e.chips.length?t("vs-button",{attrs:{type:"filled"},on:{click:e.reset}},[e._v("Reset Chips")]):e._e(),e._v(" "),e._l(e.chips,(function(n,s){return t("vs-chip",{key:s,attrs:{closable:""},on:{click:function(t){return e.remove(n)}}},[e._v(" "+e._s(n)+" ")])}))],2),e._v(" "),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="demo-alignment">\n\n    <vs-button v-if="chips.length == 0" @click="reset" type="filled">Reset Chips</vs-button>\n    <vs-chip @click="remove(chip)" v-for="(chip, index) in chips" :key="index" closable> '+e._s("{{ chip }}")+"} </vs-chip>\n\n  </div>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    reset () {\n      this.chips = [\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ]\n    },\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,ChipAddRemove:Object(c.a)(r,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Add and Remove Items","code-toggler":""}},[t("p",[e._v("You can add and remove chips with the "),t("code",[e._v("vs-chips")]),e._v(" component. For the main parameter, pass the "),t("code",[e._v("items")]),e._v(" property, which is an array representing each chip")]),e._v(" "),t("div",{staticClass:"mt-5"},[t("div",{staticClass:"op-block mb-5"},[e._v(" "+e._s(e.chips)+" ")]),e._v(" "),t("vs-chips",{attrs:{color:"rgb(145, 32, 159)",placeholder:"New Element"},model:{value:e.chips,callback:function(n){e.chips=n},expression:"chips"}},e._l(e.chips,(function(n,s){return t("vs-chip",{key:n+"-"+s,attrs:{closable:""},on:{click:function(t){return e.remove(n)}}},[e._v("\n                    "+e._s(n)+"\n                ")])})),1)],1),e._v(" "),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="op-block mb-4"> '+e._s("{{ chips }}")+' </div>\n  <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips">\n    <vs-chip\n      :key="chip"\n      @click="remove(chip)"\n      v-for="chip in chips"\n      closable>\n      '+e._s("{{ chip }}")+"}\n    </vs-chip>\n  </vs-chips>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports,ChipCustomizeCloseClearChipIcon:Object(c.a)(o,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("vx-card",{attrs:{title:"Customize Close and Clear Chips Icons","code-toggler":""}},[t("p",[e._v("You can change the icons used for the close button and the clear button when using multiple chips with the "),t("code",[e._v("vs-chips")]),e._v(" component.")]),e._v(" "),t("p",[e._v("For the main parameter, pass the "),t("code",[e._v("close-icon")]),e._v(" property, which is the close icon that appears on each chip. You can change the Clear Chips button with the "),t("code",[e._v("remove-icon")]),e._v(" property")]),e._v(" "),t("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[t("p",[e._v("Vuesax uses the Google Material Icons font library by default. For a list of all available icons, visit the official "),t("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[e._v("Material Icons page")]),e._v(".")]),e._v(" "),t("p",[e._v("FontAwesome and other fonts library are supported. Simply use the icon-pack with fa or fas. You still need to include the Font Awesome icons in your project.")])]),e._v(" "),t("div",{staticClass:"mt-5"},[t("div",{staticClass:"op-block mb-5"},[e._v(" "+e._s(e.chips)+" ")]),e._v(" "),t("vs-chips",{attrs:{color:"rgb(145, 32, 159)",placeholder:"New Element","icon-pack":"feather","remove-icon":"icon-trash-2"},model:{value:e.chips,callback:function(n){e.chips=n},expression:"chips"}},e._l(e.chips,(function(n,s){return t("vs-chip",{key:n+"-"+s,attrs:{closable:"","icon-pack":"feather","close-icon":"icon-trash-2"},on:{click:function(t){return e.remove(n)}}},[e._v("\n                    "+e._s(n)+"\n                ")])})),1)],1),e._v(" "),t("template",{slot:"codeContainer"},[e._v('\n<template>\n  <div class="op-block mb-4"> '+e._s("{{ chips }}")+' </div>\n  <vs-chips color="rgb(145, 32, 159)" placeholder="New Element" v-model="chips" icon-pack="feather" remove-icon="icon-trash-2">\n    <vs-chip\n      :key="chip"\n      @click="remove(chip)"\n      v-for="chip in chips"\n      closable\n      icon-pack="feather"\n      close-icon="icon-trash-2">\n      '+e._s("{{ chip }}")+"\n    </vs-chip>\n  </vs-chips>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      chips:[\n        'Dribbble',\n        'GitHub',\n        'Behance',\n        'Vuejs',\n        'Vuexy',\n      ],\n    }\n  },\n  methods: {\n    remove (item) {\n      this.chips.splice(this.chips.indexOf(item), 1)\n    }\n  }\n}\n<\/script>\n        ")])],2)}),[],!1,null,null,null).exports}},p=Object(c.a)(l,(function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"chip-demo"}},[n("chip-default"),this._v(" "),n("chip-color"),this._v(" "),n("chip-icon"),this._v(" "),n("chip-closable"),this._v(" "),n("chip-add-remove"),this._v(" "),n("chip-customize-close-clear-chip-icon")],1)}),[],!1,null,null,null);n.default=p.exports}}]);