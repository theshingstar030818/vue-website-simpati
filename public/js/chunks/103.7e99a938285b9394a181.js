(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{iqja:function(t,r,a){"use strict";a.r(r);var n=a("Wz3/"),s={methods:{setRating:function(t){this.rating="You have Selected: "+t+" stars"},showCurrentRating:function(t){this.currentRating=0===t?this.currentSelectedRating:"Click to select "+t+" stars"},setCurrentSelectedRating:function(t){this.currentSelectedRating="You have Selected: "+t+" stars"}},data:function(){return{rating:"No Rating Selected",currentRating:"No Rating",currentSelectedRating:"No Current Rating",boundRating:3}},components:{StarRating:a.n(n).a}},e=a("KHd+"),i=Object(e.a)(s,(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("div",{attrs:{id:"page-star-ratings-demo"}},[a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full lg:w-1/2 mb-base"},[a("vx-card",{staticClass:"overflow-auto",attrs:{title:"Basic","code-toggler":""}},[a("h6",[t._v("Default")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl}}),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Half Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,increment:.5}}),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Preset Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,rating:4}}),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Fluid Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,increment:.01,"fixed-points":2}}),t._v(" "),a("template",{slot:"codeContainer"},[t._v('\n<template>\n  \x3c!-- DEFAULT --\x3e\n  <h6>Default</h6>\n  <star-rating :rtl="$vs.rtl" />\n\n  \x3c!-- HALF STAR --\x3e\n  <h6 class="mt-5">Half Stars</h6>\n  <star-rating :rtl="$vs.rtl" :increment="0.5"></star-rating>\n\n  \x3c!-- PRESET STAR --\x3e\n  <h6 class="mt-5">Preset Stars</h6>\n  <star-rating :rtl="$vs.rtl" :rating="4"></star-rating>\n\n  \x3c!-- FLUID STAR  --\x3e\n  <h6 class="mt-5">Fluid Stars</h6>\n  <star-rating :rtl="$vs.rtl" :increment="0.01" :fixed-points="2"></star-rating>\n</template>\n\n<script>\nimport StarRating from \'vue-star-rating\'\n\nexport default {\n  components: {\n    StarRating\n  }\n}\n<\/script>\n            ')])],2)],1),t._v(" "),a("div",{staticClass:"vx-col w-full lg:w-1/2 mb-base"},[a("vx-card",{staticClass:"overflow-auto",attrs:{title:"Customizing","code-toggler":""}},[a("h6",[t._v("Bordered Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,"border-width":3}}),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Style Rating")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,"text-class":"text-warning font-medium"}}),t._v(" "),a("h6",{staticClass:"mt-4"},[t._v("Custom Star Shape")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,"border-width":4,"border-color":"#d8d8d8","rounded-corners":!0,"star-points":[23,2,14,17,0,19,10,34,7,50,23,43,38,50,36,34,46,19,31,17]}}),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Glowing Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,glow:10}}),t._v(" "),a("template",{slot:"codeContainer"},[t._v('\n<template>\n  \x3c!-- BORDERED --\x3e\n  <h6>Bordered Stars</h6>\n  <star-rating :rtl="$vs.rtl" :border-width="3"></star-rating>\n\n  \x3c!-- STYLE RATING --\x3e\n  <h6 class="mt-5">Style Rating</h6>\n  <star-rating :rtl="$vs.rtl" text-class="text-warning font-medium"></star-rating>\n\n  \x3c!-- CUSTOM SHAPE --\x3e\n  <h6 class="mt-4">Custom Star Shape</h6>\n  <star-rating :rtl="$vs.rtl" :border-width="4" border-color="#d8d8d8" :rounded-corners="true" :star-points="[23,2, 14,17, 0,19, 10,34, 7,50, 23,43, 38,50, 36,34, 46,19, 31,17]"></star-rating>\n\n  <h6 class="mt-5">Glowing Stars</h6>\n  <star-rating :rtl="$vs.rtl" :glow="10"></star-rating>\n</template>\n\n<script>\nimport StarRating from \'vue-star-rating\'\n\nexport default {\n  components: {\n    StarRating\n  }\n}\n<\/script>\n            ')])],2)],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full lg:w-1/2 mb-base"},[a("vx-card",{staticClass:"overflow-auto",attrs:{title:"Sizing","code-toggler":""}},[a("h6",[t._v("Small Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,"star-size":20}}),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Big Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,"star-size":80}}),t._v(" "),a("template",{slot:"codeContainer"},[t._v('\n<template>\n  \x3c!-- SMALL STARS --\x3e\n  <h6>Small Stars</h6>\n  <star-rating :rtl="$vs.rtl" :star-size="20"></star-rating>\n\n  \x3c!-- LARGE STARS --\x3e\n  <h6 class="mt-5">Big Stars</h6>\n  <star-rating :rtl="$vs.rtl" :star-size="80"></star-rating>\n</template>\n\n<script>\nimport StarRating from \'vue-star-rating\'\nexport default {\n  components: {\n    StarRating\n  }\n}\n<\/script>\n            ')])],2)],1),t._v(" "),a("div",{staticClass:"vx-col w-full lg:w-1/2 mb-base"},[a("vx-card",{staticClass:"overflow-auto",attrs:{title:"Changing color","code-toggler":""}},[a("h6",[t._v("Red Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,"active-color":"#EA5455"}}),t._v(" "),a("h6",{staticClass:"mt-4"},[t._v("Vibrant Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,"inactive-color":"#b9b4f9","active-color":"#7367f0"}}),t._v(" "),a("template",{slot:"codeContainer"},[t._v('\n<template>\n  \x3c!-- RED STAR --\x3e\n  <h6>Red Stars</h6>\n  <star-rating :rtl="$vs.rtl" active-color="#EA5455"></star-rating>\n\n  \x3c!-- VIBRANT STAR --\x3e\n  <h6 class="mt-4">Vibrant Stars</h6>\n  <star-rating :rtl="$vs.rtl" inactive-color="#b9b4f9" active-color="#7367f0"></star-rating>\n</template>\n\n<script>\nimport StarRating from \'vue-star-rating\'\n\nexport default {\n  components: {\n    StarRating\n  }\n}\n<\/script>\n            ')])],2)],1)]),t._v(" "),a("div",{staticClass:"vx-row"},[a("div",{staticClass:"vx-col w-full lg:w-1/2 mb-base"},[a("vx-card",{staticClass:"overflow-auto",attrs:{title:"Capture, Reset or Hide Rating","code-toggler":""}},[a("h6",[t._v("Capture Rating")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,"show-rating":!1},on:{"rating-selected":t.setRating}}),t._v(" "),a("div",{staticClass:"font-semibold"},[t._v(t._s(t.rating))]),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Capture Mouse Over Rating")]),t._v(" "),a("div",{staticStyle:{display:"inline-block"},on:{mouseleave:function(r){return t.showCurrentRating(0)}}},[a("star-rating",{attrs:{rtl:t.$vs.rtl,"show-rating":!1,increment:.5},on:{"current-rating":t.showCurrentRating,"rating-selected":t.setCurrentSelectedRating}})],1),t._v(" "),a("div",{staticClass:"font-semibold"},[t._v(t._s(t.currentRating))]),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Resetable stars with v-model (Vue 2.2+)")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl},model:{value:t.boundRating,callback:function(r){t.boundRating=r},expression:"boundRating"}}),t._v(" "),a("div",{staticClass:"font-semibold"},[a("a",{staticClass:"cursor-pointer",on:{click:function(r){t.boundRating=0}}},[t._v("Reset Rating")])]),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Hide Rating")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,"show-rating":!1}}),t._v(" "),a("template",{slot:"codeContainer"},[t._v('\n<template>\n  \x3c!-- CAPTURE RATING --\x3e\n  <h6>Capture Rating</h6>\n  <star-rating :rtl="$vs.rtl" :show-rating="false" @rating-selected="setRating"></star-rating>\n  <div class="font-semibold">'+t._s(t.rating)+'</div>\n\n  \x3c!-- CAPTURE ON HOVER --\x3e\n  <h6 class="mt-5">Capture Mouse Over Rating</h6>\n  <div @mouseleave="showCurrentRating(0)" style="display:inline-block;">\n    <star-rating :rtl="$vs.rtl" :show-rating="false" @current-rating="showCurrentRating" @rating-selected="setCurrentSelectedRating" :increment="0.5"></star-rating>\n  </div>\n  <div class="font-semibold">'+t._s(t.currentRating)+'</div>\n\n  \x3c!-- RESET WTIH V-MODEL --\x3e\n  <h6 class="mt-5">Resetable stars with v-model (Vue 2.2+)</h6>\n  <star-rating :rtl="$vs.rtl" v-model="boundRating"></star-rating>\n  <div class="font-semibold"><a @click="boundRating = 0;" class="cursor-pointer">Reset Rating</a></div>\n\n  \x3c!-- HIDE RATIG --\x3e\n  <h6 class="mt-5">Hide Rating</h6>\n  <star-rating :rtl="$vs.rtl" :show-rating="false"></star-rating>\n</template>\n\n<script>\nimport StarRating from \'vue-star-rating\'\n\nexport default {\n  methods: {\n    setRating: function(rating) {\n      this.rating = "You have Selected: " + rating + " stars";\n    },\n    showCurrentRating: function(rating) {\n      this.currentRating = (rating === 0) ? this.currentSelectedRating : "Click to select " + rating + " stars"\n    },\n    setCurrentSelectedRating: function(rating) {\n      this.currentSelectedRating = "You have Selected: " + rating + " stars";\n    }\n  },\n  data(){\n    return {\n      rating: "No Rating Selected",\n      currentRating: "No Rating",\n      currentSelectedRating: "No Current Rating",\n      boundRating: 3,\n    }\n  },\n  components: {\n    StarRating\n  }\n}\n<\/script>\n            ')])],2)],1),t._v(" "),a("div",{staticClass:"vx-col w-full lg:w-1/2 mb-base"},[a("vx-card",{staticClass:"overflow-auto",attrs:{title:"Other useful options","code-toggler":""}},[a("h6",[t._v("Non rounded start rating")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,rating:4.67,"round-start-rating":!1}}),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Read Only Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,rating:3.8,"read-only":!0,increment:.01}}),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Lots of stars")]),t._v(" "),a("star-rating",{attrs:{rtl:t.$vs.rtl,"max-rating":10,"star-size":20}}),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("Inline Stars")]),t._v(" Rated\n            "),a("star-rating",{attrs:{rtl:t.$vs.rtl,inline:!0,"star-size":20,"read-only":!0,"show-rating":!1,rating:5}}),t._v(" by our customers.\n\n            "),t._v(" "),a("h6",{staticClass:"mt-5"},[t._v("RTL Stars")]),t._v(" "),a("star-rating",{attrs:{rtl:!0,increment:.5}}),t._v(" "),a("template",{slot:"codeContainer"},[t._v('\n<template>\n  \x3c!-- NON ROUNDED --\x3e\n  <h6>Non rounded start rating</h6>\n  <star-rating :rtl="$vs.rtl" :rating="4.67" :round-start-rating="false"></star-rating>\n\n  \x3c!-- READ ONLY --\x3e\n  <h6 class="mt-5">Read Only Stars</h6>\n  <star-rating :rtl="$vs.rtl" :rating="3.8" :read-only="true" :increment="0.01"></star-rating>\n\n  \x3c!-- LOTS OF STARS --\x3e\n  <h6 class="mt-5">Lots of stars</h6>\n  <star-rating :rtl="$vs.rtl" :max-rating="10" :star-size="20"></star-rating>\n\n  \x3c!-- INLINE --\x3e\n  <h6 class="mt-5">Inline Stars</h6> Rated\n  <star-rating :rtl="$vs.rtl" :inline="true" :star-size="20" :read-only="true" :show-rating="false" :rating="5"></star-rating> by our customers.\n\n  \x3c!-- RTL --\x3e\n  <h6 class="mt-5">RTL Stars</h6>\n  <star-rating :rtl="true" :increment="0.5"></star-rating>\n</template>\n\n<script>\nimport StarRating from \'vue-star-rating\'\n\nexport default {\n  components: {\n    StarRating\n  }\n}\n<\/script>\n            ')])],2)],1)])])}),[],!1,null,null,null);r.default=i.exports}}]);