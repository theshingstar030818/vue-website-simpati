(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"3tgh":function(t,i,e){"use strict";e("8s6p")},"6iGC":function(t,i){t.exports="/images/logo.png?c1a51e86a5b7826f1f150c820f01c1e4"},"8s6p":function(t,i,e){var s=e("J9KK");"string"==typeof s&&(s=[[t.i,s,""]]);var a={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(s,a);s.locals&&(t.exports=s.locals)},CuHb:function(t,i,e){"use strict";e.r(i);var s={data:function(){return{mailTo:"",companyDetails:{name:"Microsion Technologies Pvt. Ltd.",addressLine1:"9 N. Sherwood Court",addressLine2:"Elyria, OH",zipcode:"94203",mailId:"hello@pixinvent.net",mobile:"+91 999 999 9999"},recipientDetails:{fullName:"Peter Stark",addressLine1:"8577 West West Drive ",addressLine2:"Holbrook, NY",zipcode:"90001",mailId:"peter@mail.com",mobile:"+91 988 888 8888"},invoiceDetails:{invoiceNo:"001/2019",invoiceDate:"Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)"},invoiceData:{tasks:[{id:1,task:"Website Redesign",hours:60,rate:15,amount:9e4},{id:2,task:"Newsletter template design",hours:20,rate:12,amount:24e3}],subtotal:114e3,discountPercentage:5,discountedAmount:5700,total:108300}}},computed:{},methods:{printInvoice:function(){window.print()}},components:{},mounted:function(){this.$emit("setAppClasses","invoice-page")}},a=(e("3tgh"),e("KHd+")),n=Object(a.a)(s,(function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{attrs:{id:"invoice-page"}},[s("div",{staticClass:"flex flex-wrap items-center justify-between"},[s("vx-input-group",{staticClass:"mb-base mr-3"},[s("vs-input",{attrs:{placeholder:"Email"},model:{value:t.mailTo,callback:function(i){t.mailTo=i},expression:"mailTo"}}),t._v(" "),s("template",{slot:"append"},[s("div",{staticClass:"append-text btn-addon"},[s("vs-button",{staticClass:"whitespace-no-wrap",attrs:{type:"border"},on:{click:function(i){t.mailTo=""}}},[t._v("Send Invoice")])],1)])],2),t._v(" "),s("div",{staticClass:"flex items-center"},[s("vs-button",{staticClass:"mb-base mr-3",attrs:{type:"border","icon-pack":"feather",icon:"icon icon-download"}},[t._v("Download")]),t._v(" "),s("vs-button",{staticClass:"mb-base mr-3",attrs:{"icon-pack":"feather",icon:"icon icon-file"},on:{click:t.printInvoice}},[t._v("Print")])],1)],1),t._v(" "),s("vx-card",{attrs:{id:"invoice-container"}},[s("div",{staticClass:"vx-row leading-loose p-base"},[s("div",{staticClass:"vx-col w-full md:w-1/2 mt-base"},[s("img",{attrs:{src:e("6iGC"),alt:"vuexy-logo"}})]),t._v(" "),s("div",{staticClass:"vx-col w-full md:w-1/2 text-right"},[s("h1",[t._v("Invoice")]),t._v(" "),s("div",{staticClass:"invoice__invoice-detail mt-6"},[s("h6",[t._v("INVOICE NO.")]),t._v(" "),s("p",[t._v(t._s(t.invoiceDetails.invoiceNo))]),t._v(" "),s("h6",{staticClass:"mt-4"},[t._v("INVOICE DATE")]),t._v(" "),s("p",[t._v(t._s(t._f("date")(t.invoiceDetails.invoiceDate,!0)))])])]),t._v(" "),s("div",{staticClass:"vx-col w-full md:w-1/2 mt-12"},[s("h5",[t._v("Recipient")]),t._v(" "),s("div",{staticClass:"invoice__recipient-info my-4"},[s("p",[t._v(t._s(t.recipientDetails.fullName))]),t._v(" "),s("p",[t._v(t._s(t.recipientDetails.addressLine1))]),t._v(" "),s("p",[t._v(t._s(t.recipientDetails.addressLine2))]),t._v(" "),s("p",[t._v(t._s(t.recipientDetails.zipcode))])]),t._v(" "),s("div",{staticClass:"invoice__recipient-contact "},[s("p",{staticClass:"flex items-center"},[s("feather-icon",{attrs:{icon:"MailIcon",svgClasses:"h-4 w-4"}}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v(t._s(t.recipientDetails.mailId))])],1),t._v(" "),s("p",{staticClass:"flex items-center"},[s("feather-icon",{attrs:{icon:"PhoneIcon",svgClasses:"h-4 w-4"}}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v(t._s(t.recipientDetails.mobile))])],1)])]),t._v(" "),s("div",{staticClass:"vx-col w-full md:w-1/2 mt-base text-right mt-12"},[s("h5",[t._v(t._s(t.companyDetails.name))]),t._v(" "),s("div",{staticClass:"invoice__company-info my-4"},[s("p",[t._v(t._s(t.companyDetails.addressLine1))]),t._v(" "),s("p",[t._v(t._s(t.companyDetails.addressLine2))]),t._v(" "),s("p",[t._v(t._s(t.companyDetails.zipcode))])]),t._v(" "),s("div",{staticClass:"invoice__company-contact"},[s("p",{staticClass:"flex items-center justify-end"},[s("feather-icon",{attrs:{icon:"MailIcon",svgClasses:"h-4 w-4"}}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v(t._s(t.companyDetails.mailId))])],1),t._v(" "),s("p",{staticClass:"flex items-center justify-end"},[s("feather-icon",{attrs:{icon:"PhoneIcon",svgClasses:"h-4 w-4"}}),t._v(" "),s("span",{staticClass:"ml-2"},[t._v(t._s(t.companyDetails.mobile))])],1)])])]),t._v(" "),s("div",{staticClass:"p-base"},[s("vs-table",{attrs:{hoverFlat:"",data:t.invoiceData.tasks},scopedSlots:t._u([{key:"default",fn:function(i){var e=i.data;return t._l(e,(function(i,a){return s("vs-tr",{key:a},[s("vs-td",{attrs:{data:e[a].task}},[t._v(t._s(e[a].task))]),t._v(" "),s("vs-td",{attrs:{data:e[a].hours}},[t._v(t._s(e[a].hours))]),t._v(" "),s("vs-td",{attrs:{data:e[a].rate}},[t._v(t._s(e[a].rate)+" USD")]),t._v(" "),s("vs-td",{attrs:{data:e[a].amount}},[t._v(t._s(e[a].amount)+" USD")])],1)}))}}])},[s("template",{slot:"thead"},[s("vs-th",[t._v("TASK DESCRIPTION")]),t._v(" "),s("vs-th",[t._v("HOURS")]),t._v(" "),s("vs-th",[t._v("RATE")]),t._v(" "),s("vs-th",[t._v("AMOUNT")])],1)],2),t._v(" "),s("vs-table",{staticClass:"w-1/2 ml-auto mt-4",attrs:{hoverFlat:"",data:t.invoiceData}},[s("vs-tr",[s("vs-th",[t._v("SUBTOTAL")]),t._v(" "),s("vs-td",[t._v(t._s(t.invoiceData.subtotal)+" USD")])],1),t._v(" "),s("vs-tr",[s("vs-th",[t._v("DISCOUNT ("+t._s(t.invoiceData.discountPercentage)+"%)")]),t._v(" "),s("vs-td",[t._v(t._s(t.invoiceData.discountedAmount)+" USD")])],1),t._v(" "),s("vs-tr",[s("th",[t._v("TOTAL")]),t._v(" "),s("td",[t._v(t._s(t.invoiceData.total)+" USD")])])],1)],1),t._v(" "),s("div",{staticClass:"invoice__footer text-right p-base"},[s("p",{staticClass:"mb-4"},[t._v("Transfer the amounts to the business amount below. Please include invoice number on your check.")]),t._v(" "),s("p",[s("span",{staticClass:"mr-8"},[t._v("BANK: "),s("span",{staticClass:"font-semibold"},[t._v("FTSBUS33")])]),t._v(" "),s("span",[t._v("IBAN: "),s("span",{staticClass:"font-semibold"},[t._v(" G882-1111-2222-3333 ")])])])])])],1)}),[],!1,null,null,null);i.default=n.exports},J9KK:function(t,i,e){(t.exports=e("I1BE")(!1)).push([t.i,"@media print {\n.invoice-page * {\n    visibility: hidden;\n}\n[dir] .invoice-page #content-area {\n    margin: 0 !important;\n}\n.invoice-page #invoice-container,\n.invoice-page #invoice-container * {\n    visibility: visible;\n}\n.invoice-page #invoice-container {\n    position: absolute;\n    top: 0;\n}\n[dir] .invoice-page #invoice-container {\n    box-shadow: none;\n}\n[dir=ltr] .invoice-page #invoice-container {\n    left: 0;\n}\n[dir=rtl] .invoice-page #invoice-container {\n    right: 0;\n}\n}",""])}}]);