import{g as j}from"./@popperjs-DMMwm23M-v4.6.0.js";import{r as A}from"./flatpickr-uj7nod85-v4.6.0.js";var d={exports:{}},F=d.exports,x;function q(){return x||(x=1,function(C,M){(function(g,l){C.exports=l(A)})(F,b=>(()=>{var g={311:a=>{a.exports=b}},l={};function u(a){var i=l[a];if(i!==void 0)return i.exports;var o=l[a]={exports:{}};return g[a](o,o.exports,u),o.exports}u.n=a=>{var i=a&&a.__esModule?()=>a.default:()=>a;return u.d(i,{a:i}),i},u.d=(a,i)=>{for(var o in i)u.o(i,o)&&!u.o(a,o)&&Object.defineProperty(a,o,{enumerable:!0,get:i[o]})},u.o=(a,i)=>Object.prototype.hasOwnProperty.call(a,i);var f={};return(()=>{u.d(f,{default:()=>P});var a=u(311),i=u.n(a),o=["onChange","onClose","onDestroy","onMonthChange","onOpen","onYearChange"],w=["onValueUpdate","onDayCreate","onParseConfig","onReady","onPreCalendarPosition","onKeyDown"];function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(this,arguments)}var D=function(t){return t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},$=function(t){return t instanceof Array?t:[t]},c=function(t){return t&&t.length?t:null},_=function(t){return h({},t)},E=o.concat(w),O=["locale","showMonths"];const v={name:"flat-pickr",render:function(t){return t("input",{attrs:{type:"text","data-input":!0},props:{disabled:this.disabled},on:{input:this.onInput}})},props:{value:{default:null,required:!0,validator:function(t){return t===null||t instanceof Date||typeof t=="string"||t instanceof String||t instanceof Array||typeof t=="number"}},config:{type:Object,default:function(){return{wrap:!1,defaultDate:null}}},events:{type:Array,default:function(){return o}},disabled:{type:Boolean,default:!1}},data:function(){return{fp:null}},mounted:function(){var t=this;if(!this.fp){var n=_(this.config);this.events.forEach(function(r){var s=i().defaultConfig[r]||[],I=function(){for(var m=arguments.length,y=new Array(m),p=0;p<m;p++)y[p]=arguments[p];t.$emit.apply(t,[D(r)].concat(y))};n[r]=$(n[r]||[]).concat(s,I)}),n.defaultDate=this.value||n.defaultDate,this.fp=new(i())(this.getElem(),n),this.fpInput().addEventListener("blur",this.onBlur),this.$on("on-close",this.onClose),this.$watch("disabled",this.watchDisabled,{immediate:!0})}},methods:{getElem:function(){return this.config.wrap?this.$el.parentNode:this.$el},onInput:function(t){var n=this,r=t.target;this.$nextTick(function(){n.$emit("input",c(r.value))})},fpInput:function(){return this.fp.altInput||this.fp.input},onBlur:function(t){this.$emit("blur",c(t.target.value))},onClose:function(t,n){this.$emit("input",c(n))},watchDisabled:function(t){t?this.fpInput().setAttribute("disabled",t):this.fpInput().removeAttribute("disabled")}},watch:{config:{deep:!0,handler:function(t){var n=this,r=_(t);E.forEach(function(s){delete r[s]}),this.fp.set(r),O.forEach(function(s){typeof r[s]<"u"&&n.fp.set(s,r[s])})}},value:function(t){t!==c(this.$el.value)&&this.fp&&this.fp.setDate(t,!0)}},beforeDestroy:function(){this.fp&&(this.fpInput().removeEventListener("blur",this.onBlur),this.fp.destroy(),this.fp=null)}};var k=function(t,n){var r="flat-pickr";typeof n=="string"&&(r=n),t.component(r,v)};v.install=k;const P=v})(),f=f.default,f})())}(d)),d.exports}var B=q();const R=j(B);export{R as f};