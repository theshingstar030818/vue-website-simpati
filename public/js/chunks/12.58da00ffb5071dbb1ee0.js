(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{FDzU:function(t,i,e){(t.exports=e("I1BE")(!1)).push([t.i,".grid-view-item .grid-view-img[data-v-6411c19c] {\n  max-width: 100%;\n  max-height: 100%;\n  width: auto;\n  transition: 0.35s;\n}\n[dir] .grid-view-item[data-v-6411c19c]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);\n}\n.grid-view-item:hover .grid-view-img[data-v-6411c19c] {\n  opacity: 0.9;\n}",""])},QmPg:function(t,i,e){"use strict";e.r(i);var s={props:{item:{type:Object,required:!0}},methods:{navigate_to_detail_view:function(){this.$router.push({name:"ecommerce-item-detail-view",params:{item_id:this.item.objectID}}).catch((function(){}))}}},a=(e("b7CP"),e("KHd+")),n=Object(a.a)(s,(function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("vx-card",t._g({staticClass:"grid-view-item mb-base overflow-hidden"},t.$listeners),[e("template",{slot:"no-body"},[e("div",{staticClass:"item-img-container bg-white h-64 flex items-center justify-center mb-4 cursor-pointer",on:{click:t.navigate_to_detail_view}},[e("img",{staticClass:"grid-view-img px-4",attrs:{src:t.item.image,alt:t.item.name}})]),t._v(" "),e("div",{staticClass:"item-details px-4"},[e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"text-warning border border-solid border-warning flex py-1 px-2 rounded"},[e("span",{staticClass:"text-sm mr-1"},[t._v(t._s(t.item.rating))]),t._v(" "),e("feather-icon",{attrs:{icon:"StarIcon",svgClasses:"h-4 w-4"}})],1),t._v(" "),e("h6",{staticClass:"font-bold"},[t._v("$"+t._s(t.item.price))])]),t._v(" "),e("div",{staticClass:"my-4"},[e("h6",{staticClass:"truncate font-semibold mb-1 hover:text-primary cursor-pointer",on:{click:t.navigate_to_detail_view}},[t._v(t._s(t.item.name))]),t._v(" "),e("p",{staticClass:"item-description truncate text-sm"},[t._v(t._s(t.item.description))])])]),t._v(" "),t._t("action-buttons")],2)],2)}),[],!1,null,"6411c19c",null);i.default=n.exports},Qs9W:function(t,i,e){var s=e("FDzU");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,a);s.locals&&(t.exports=s.locals)},b7CP:function(t,i,e){"use strict";e("Qs9W")}}]);