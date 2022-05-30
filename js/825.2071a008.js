"use strict";(self["webpackChunkbetter_communication"]=self["webpackChunkbetter_communication"]||[]).push([[825],{6825:function(t,e,s){s.r(e),s.d(e,{default:function(){return F}});var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Contact")},a=[],n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",{staticClass:"py-12",attrs:{id:"Contact"}},[s("v-snackbar",{attrs:{top:"",color:"success"},scopedSlots:t._u([{key:"action",fn:function(e){var i=e.on,a=e.attrs;return[s("v-btn",t._g(t._b({attrs:{text:"",small:""},on:{click:function(e){t.snack=!1}}},"v-btn",a,!1),i),[s("v-icon",[t._v("mdi-close")])],1)]}}]),model:{value:t.snack,callback:function(e){t.snack=e},expression:"snack"}},[s("span",[t._v("تم الارسال")])]),s("v-container",{staticClass:"pt-12"},[s("div",{staticClass:"main_heading mb-9"},[s("h1",[t._v("Get In Touch")]),s("span",{staticClass:"special_design"},[s("i"),s("i"),s("i")])]),s("v-card",{staticClass:"mx-auto pa-12",attrs:{"max-width":"800",flat:""}},[s("v-form",{ref:"form",attrs:{method:"get",id:"nativeForm"},on:{submit:function(e){return e.preventDefault(),t.sendMessage.apply(null,arguments)}}},[s("v-row",[s("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{outlined:"",type:"text",id:"name",name:"name",rules:[t.rules.required,t.rules.requiredLength],label:"الاسم"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12",sm:"6"}},[s("v-text-field",{attrs:{outlined:"",type:"text",id:"email",name:"email",rules:[t.rules.emailRules,t.rules.required],label:"الايميل"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),s("v-col",{attrs:{cols:"12"}},[s("v-text-field",{attrs:{outlined:"",type:"text",id:"subject",name:"subject",rules:[t.rules.required,t.rules.requiredLength],label:"الموضوع"},model:{value:t.subject,callback:function(e){t.subject=e},expression:"subject"}})],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-textarea",{attrs:{filled:"",outlined:"",type:"text",id:"message",name:"message",rules:[t.rules.required,t.rules.messageLength],label:"الرسالة"},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),s("v-col",{staticClass:"py-0",attrs:{cols:"12"}},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"300"}},[s("v-btn",{attrs:{type:"submit",loading:t.loading,block:"",color:"primary","x-large":""}},[s("v-icon",{attrs:{left:""}},[t._v("mdi-send")]),s("span",[t._v("Send Message")])],1)],1)],1)],1)],1)],1)],1)},o=[],r={data:()=>({snack:!1,name:"",subject:"",email:"",message:"",dialog:!1,loading:!1,rules:{messageLength:t=>t.length>3&&t.length<200||"length must be more than 3 and less than 200",required:t=>!!t||"required",requiredLength:t=>t.length>3&&t.length<30||"length must be more than 3 and less than 30",emailRules:t=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||"E-mail must be valid"}}),mounted(){},updated(){console.log(this.$route),console.log(this.$router)},methods:{sendMessage(){this.$refs.form.validate()&&(this.loading=!0,setTimeout((()=>{this.loading=!1,this.snack=!0}),1500),setTimeout((()=>{(function(){document.getElementById("nativeForm").submit()})()}),2200))}}},l=r,u=s(1001),c=s(3453),h=s.n(c),d=s(680),m=s(3237),p=s(2102),v=s(9846),g=s(3325),f=s(6210),b=s(6257),k=(0,g.Z)(f.Z,(0,b.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(t){const e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput(t){const e=t=>t.$watch("hasError",(e=>{this.$set(this.errorBag,t._uid,e)}),{immediate:!0}),s={_uid:t._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?s.shouldValidate=t.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(t._uid)||(s.valid=e(t)))})):s.valid=e(t),s},validate(){return 0===this.inputs.filter((t=>!t.validate(!0))).length},reset(){this.inputs.forEach((t=>t.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((t=>t.resetValidation())),this.resetErrorBag()},register(t){this.inputs.push(t),this.watchers.push(this.watchInput(t))},unregister(t){const e=this.inputs.find((e=>e._uid===t._uid));if(!e)return;const s=this.watchers.find((t=>t._uid===e._uid));s&&(s.valid(),s.shouldValidate()),this.watchers=this.watchers.filter((t=>t._uid!==e._uid)),this.inputs=this.inputs.filter((t=>t._uid!==e._uid)),this.$delete(this.errorBag,e._uid)}},render(t){return t("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:t=>this.$emit("submit",t)}},this.$slots.default)}}),w=s(6428),x=s(2877),y=s(3385),_=s(6952),C=s(8085),B=s(2936),T=s(3536),$=s(4589),Z=s(1824),V=(0,g.Z)(y.Z,_.Z,B.Z,(0,T.d)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:t=>"string"===typeof t||!1===t},vertical:Boolean},data:()=>({activeTimeout:-1}),computed:{classes(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground(){return!this.text&&!this.outlined},isDark(){return this.hasBackground?!this.light:C.Z.options.computed.isDark.call(this)},styles(){if(this.absolute||!this.app)return{};const{bar:t,bottom:e,footer:s,insetFooter:i,left:a,right:n,top:o}=this.$vuetify.application;return{paddingBottom:(0,$.kb)(e+s+i),paddingLeft:(0,$.kb)(a),paddingRight:(0,$.kb)(n),paddingTop:(0,$.kb)(t+o)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted(){this.isActive&&this.setTimeout()},created(){this.$attrs.hasOwnProperty("auto-height")&&(0,Z.Jk)("auto-height",this),0==this.timeout&&(0,Z.Rn)('timeout="0"',"-1",this)},methods:{genActions(){return this.$createElement("div",{staticClass:"v-snack__action "},[(0,$.z9)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent(){return this.$createElement("div",{staticClass:"v-snack__content",class:{[this.contentClass]:!0},attrs:{role:"status","aria-live":"polite"}},[(0,$.z9)(this)])},genWrapper(){const t=this.hasBackground?this.setBackgroundColor:this.setTextColor,e=t(this.color,{staticClass:"v-snack__wrapper",class:y.Z.options.computed.classes.call(this),style:y.Z.options.computed.styles.call(this),directives:[{name:"show",value:this.isActive}],on:{pointerenter:()=>window.clearTimeout(this.activeTimeout),pointerleave:this.setTimeout}});return this.$createElement("div",e,[this.genContent(),this.genActions()])},genTransition(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout(){window.clearTimeout(this.activeTimeout);const t=Number(this.timeout);this.isActive&&![0,-1].includes(t)&&(this.activeTimeout=window.setTimeout((()=>{this.isActive=!1}),t))}},render(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),I=s(1347);const E=(0,g.Z)(I.Z);var H=E.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:t=>!isNaN(parseFloat(t))},rows:{type:[Number,String],default:5,validator:t=>!isNaN(parseInt(t,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...I.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(t){this.$nextTick((()=>{var e;t?this.calculateInputHeight():null==(e=this.$refs.input)||e.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const t=this.$refs.input;if(!t)return;t.style.height="0";const e=t.scrollHeight,s=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(s,e)+"px"},genInput(){const t=I.Z.options.methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput(t){I.Z.options.methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.$emit("keydown",t)}}}),z=(0,u.Z)(l,n,o,!1,null,"ee719e22",null),q=z.exports;h()(z,{VBtn:d.Z,VCard:m.Z,VCol:p.Z,VContainer:v.Z,VForm:k,VIcon:w.Z,VRow:x.Z,VSnackbar:V,VTextField:I.Z,VTextarea:H});var A={components:{Contact:q}},G=A,R=(0,u.Z)(G,i,a,!1,null,"043a22cc",null),F=R.exports}}]);
//# sourceMappingURL=825.2071a008.js.map