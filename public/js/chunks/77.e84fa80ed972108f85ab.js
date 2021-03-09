(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{QH3m:function(t,i,s){t.exports=function(){"use strict";return{name:"countdown",data:function(){return{counting:!1,endTime:0,totalMilliseconds:0}},props:{autoStart:{type:Boolean,default:!0},emitEvents:{type:Boolean,default:!0},interval:{type:Number,default:1e3,validator:function(t){return t>=0}},now:{type:Function,default:function(){return Date.now()}},tag:{type:String,default:"span"},time:{type:Number,default:0,validator:function(t){return t>=0}},transform:{type:Function,default:function(t){return t}}},computed:{days:function(){return Math.floor(this.totalMilliseconds/864e5)},hours:function(){return Math.floor(this.totalMilliseconds%864e5/36e5)},minutes:function(){return Math.floor(this.totalMilliseconds%36e5/6e4)},seconds:function(){return Math.floor(this.totalMilliseconds%6e4/1e3)},milliseconds:function(){return Math.floor(this.totalMilliseconds%1e3)},totalDays:function(){return this.days},totalHours:function(){return Math.floor(this.totalMilliseconds/36e5)},totalMinutes:function(){return Math.floor(this.totalMilliseconds/6e4)},totalSeconds:function(){return Math.floor(this.totalMilliseconds/1e3)}},render:function(t){return t(this.tag,this.$scopedSlots.default?[this.$scopedSlots.default(this.transform({days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}))]:this.$slots.default)},watch:{$props:{deep:!0,immediate:!0,handler:function(){this.totalMilliseconds=this.time,this.endTime=this.now()+this.time,this.autoStart&&this.start()}}},methods:{start:function(){this.counting||(this.counting=!0,this.emitEvents&&this.$emit("start"),"visible"===document.visibilityState&&this.continue())},continue:function(){var t=this;if(this.counting){var i=Math.min(this.totalMilliseconds,this.interval);if(i>0)if(window.requestAnimationFrame){var s,n;this.requestId=requestAnimationFrame((function e(o){s||(s=o),n||(n=o);var a=o-s;a>=i||a+(o-n)/2>=i?t.progress():t.requestId=requestAnimationFrame(e),n=o}))}else this.timeoutId=setTimeout((function(){t.progress()}),i);else this.end()}},pause:function(){window.requestAnimationFrame?cancelAnimationFrame(this.requestId):clearTimeout(this.timeoutId)},progress:function(){this.counting&&(this.totalMilliseconds-=this.interval,this.emitEvents&&this.totalMilliseconds>0&&this.$emit("progress",{days:this.days,hours:this.hours,minutes:this.minutes,seconds:this.seconds,milliseconds:this.milliseconds,totalDays:this.totalDays,totalHours:this.totalHours,totalMinutes:this.totalMinutes,totalSeconds:this.totalSeconds,totalMilliseconds:this.totalMilliseconds}),this.continue())},abort:function(){this.counting&&(this.pause(),this.counting=!1,this.emitEvents&&this.$emit("abort"))},end:function(){this.counting&&(this.pause(),this.totalMilliseconds=0,this.counting=!1,this.emitEvents&&this.$emit("end"))},update:function(){this.counting&&(this.totalMilliseconds=Math.max(0,this.endTime-this.now()))},handleVisibilityChange:function(){switch(document.visibilityState){case"visible":this.update(),this.continue();break;case"hidden":this.pause()}}},mounted:function(){document.addEventListener("visibilitychange",this.handleVisibilityChange)},beforeDestroy:function(){document.removeEventListener("visibilitychange",this.handleVisibilityChange),this.pause()}}}()},aqGA:function(t,i,s){"use strict";s.r(i);var n=s("QH3m"),e={data:function(){return{value1:""}},components:{countdown:s.n(n).a},methods:{checkLogin:function(){return!this.$store.state.auth.isUserLoggedIn()||(this.$vs.notify({title:"로그인 시도",text:"이미 로그인하셨습니다!",iconPack:"feather",icon:"icon-alert-circle",color:"warning"}),!1)},loginback:function(){this.checkLogin()&&this.$router.push("/pages/login").catch((function(){}))},start_free_trial:function(){this.checkLogin()&&this.$router.push("/pages/trial-step-one").catch((function(){}))},onExplore:function(){this.checkLogin()&&this.$router.push("/main").catch((function(){}))}}},o=s("KHd+"),a=Object(o.a)(e,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"flex w-full justify-center mt-2"},[i("div",{staticClass:"flex gap-0 login-board-wrapper"},[i("div",{staticClass:"flex-none login-board-left-side"}),this._v(" "),i("div",{staticClass:"flex-grow login-board-middle-side"}),this._v(" "),i("div",{staticClass:"flex-none login-board-right-side"})])])}],!1,null,null,null);i.default=a.exports}}]);