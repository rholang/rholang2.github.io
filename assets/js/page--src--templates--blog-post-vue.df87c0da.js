(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"3GZc":function(t,e,s){"use strict";var a=s("qWrf");s.n(a).a},Oi2N:function(t,e,s){"use strict";var a=s("sdWu");s.n(a).a},WXMF:function(t,e,s){"use strict";s.r(e);var a=s("n6yM"),i=s("suUz"),n={components:{PostMeta:a.a,Newsletter:i.a},metaInfo:function(){return{title:this.$page.post.title,meta:[{name:"description",content:this.$page.post.excerpt}]}}},r=s("KHd+"),o=null,l=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("Section",{attrs:{container:"md",dots:"true"}},[s("div",{staticClass:"post-header container-md text-center mb-x2"},[s("h1",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.post.title)}}),s("PostMeta",{attrs:{post:t.$page.post}})],1),s("div",{staticClass:"post-content post mb-x2"},[t.$page.post.poster?s("g-image",{attrs:{quality:"1",width:"600",src:t.$page.post.poster}}):t._e(),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"lead",domProps:{innerHTML:t._s(t.$page.post.excerpt)}}),s("div",{directives:[{name:"g-image",rawName:"v-g-image"}],domProps:{innerHTML:t._s(t.$page.post.content)}})],1)])],1)}),[],!1,null,null,null);"function"==typeof o&&o(l);e.default=l.exports},n6yM:function(t,e,s){"use strict";var a={props:{post:{type:Object,required:!0}}},i=(s("3GZc"),s("KHd+")),n=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[s("small",[t.post.author?[t._v("\n      Posted "+t._s(t.post.date)+" by\n      "),t._l(t.post.author,(function(e,a){return[a&&a===t.post.author.length-1?s("span",[t._v("and")]):a>0?s("span",[t._v(",")]):t._e(),e.avatar?s("g-image",{staticClass:"author-image",attrs:{alt:e.title,src:e.avatar}}):t._e(),s("g-link",{key:e.id,attrs:{to:e.path}},[t._v(t._s(e.title))])]})),t.post.timeToRead?s("span",[t._v(" ~ ")]):t._e()]:t._e(),t.post.timeToRead?[s("strong",[t._v(t._s(t.post.timeToRead)+" min read")])]:t._e()],2)])}),[],!1,null,null,null);e.a=n.exports},qWrf:function(t,e,s){},sdWu:function(t,e,s){},suUz:function(t,e,s){"use strict";s("Oi2N");var a=s("KHd+"),i=Object(a.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("Card",{staticClass:"newsletter",attrs:{id:"mc_embed_signup"}},[e("p",{staticClass:"mb-half"},[e("strong",[this._v("👋 Stay in the loop.")]),this._v(" Subscribe to Rchain newsletter!\n  ")]),e("form",{staticClass:"newsletter__form validate",attrs:{action:".",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",target:"_blank",novalidate:""}},[e("div",{staticClass:"flex",attrs:{id:"mc_embed_signup_scroll"}},[e("div",{staticClass:"newsletter__field mc-field-group flex-fit",staticStyle:{"margin-right":"15px"}},[e("input",{staticClass:"required email",attrs:{type:"email","aria-label":"Email",placeholder:"your@email.com",value:"",name:"EMAIL",id:"mce-EMAIL"}})]),e("div",{staticClass:"newsletter__button"},[e("button",{staticClass:"button primary",attrs:{type:"submit",value:"Subscribe",name:"subscribe",id:"mc-embedded-subscribe"}},[this._v("Subscribe")])]),e("div",{staticClass:"clear",attrs:{id:"mce-responses"}},[e("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-error-response"}}),e("div",{staticClass:"response",staticStyle:{display:"none"},attrs:{id:"mce-success-response"}})]),e("div",{staticStyle:{position:"absolute",left:"-5000px"},attrs:{"aria-hidden":"true"}},[e("input",{attrs:{type:"text",name:"b_960a357f3405a688ff935a10e_42bbd30818",tabindex:"-1",value:""}})])])]),e("div",{staticClass:"newsletter__top"})])}),[],!1,null,null,null);e.a=i.exports}}]);