(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{sGnr:function(t,o,e){"use strict";e.r(o);var n=e("YKMj"),r=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,o){t.__proto__=o}||function(t,o){for(var e in o)o.hasOwnProperty(e)&&(t[e]=o[e])};return function(o,e){function n(){this.constructor=o}t(o,e),o.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}}(),i=function(t,o,e,n){var r,i=arguments.length,c=i<3?o:null===n?n=Object.getOwnPropertyDescriptor(o,e):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,o,e,n);else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(c=(i<3?r(c):i>3?r(o,e,c):r(o,e))||c);return i>3&&c&&Object.defineProperty(o,e,c),c},c=function(t){function o(){return null!==t&&t.apply(this,arguments)||this}return r(o,t),o.prototype.toast=function(){this.$notice.toast("触发提醒")},o.prototype.loading=function(){var t=this;this.$notice.loading(),setTimeout(function(){t.$notice.removeLoading()},1e3)},o.prototype.confirm=function(){var t=this;this.$notice.confirm("我是一个弹窗").then(function(){t.$notice.toast("你点击了确定")})},o=i([Object(n.a)({})],o)}(n.d),l=e("KHd+"),a=Object(l.a)(c,function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"notice"},[e("q-row",{attrs:{position:"fixed",t:"0",l:"0",col:"100",zIndex:"1"}},[e("q-head-bar",{attrs:{color:"white",bkColor:"deepskyblue",leftArrow:!0,centerText:"$notice 通知",rightEmpty:!0}})],1),e("q-row",{attrs:{h:"12"}}),e("q-row",{attrs:{pl:"2",pr:"2"}},[e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"Demo演示",fontSize:"16",borderBottom:!0}}),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"提醒"}}),e("q-row",{attrs:{fontSize:"14",lh:"9",mb:"2"}},[t._v("提醒有三个参数"),e("br"),t._v("第一个指提醒的文字"),e("br"),t._v("\n第二个指提醒的位置"),e("main",[t._v("center|bottom")]),t._v(",默认为"),e("main",[t._v("bottom")]),e("br"),t._v("\n第三个指提醒的时长,单位ms,默认1500")]),e("q-row",{attrs:{tag:"section"}},[e("q-row",{attrs:{decoration:"underline",color:"deepskyblue"},on:{clicked:t.toast}},[t._v("点击我触发提醒")]),e("q-row",{attrs:{mt:"4"}},[e("main",[t._v("template")])]),e("q-code",{attrs:{type:"html"}},[t._v('<q-row @clicked="toast">点击我触发提醒</q-row>')]),e("main",[t._v("vue")]),e("q-code",[t._v("methods: {\n  toast() {\n    this.$notice.toast('触发提醒')\n  }\n}")])],1)],1),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"加载"}}),e("q-row",{attrs:{tag:"section"}},[e("q-row",{attrs:{decoration:"underline",color:"deepskyblue"},on:{clicked:t.loading}},[t._v("点击我触发加载,1秒后加载消失")]),e("q-row",{attrs:{mt:"4"}},[e("main",[t._v("template")])]),e("q-code",{attrs:{type:"html"}},[t._v('<q-row @clicked="loading">点击我触发加载,1秒后加载消失</q-row>')]),e("main",[t._v("vue")]),e("q-code",[t._v("methods: {\n  loading() {\n    this.$notice.loading()\n    setTimeout(() => {\n      this.$notice.removeLoading()\n    }, 1000);\n  }\n}")])],1)],1),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"弹窗"}}),e("q-row",{attrs:{fontSize:"14",lh:"9",mb:"2"}},[t._v("弹窗有三个参数"),e("br"),t._v("第一个指弹窗的文字"),e("br"),t._v("\n第二个指弹窗左侧的文字,默认为取消"),e("br"),t._v("\n第三个指弹窗右侧的文字,默认为确认")]),e("q-row",{attrs:{tag:"section"}},[e("q-row",{attrs:{decoration:"underline",color:"deepskyblue"},on:{clicked:t.confirm}},[t._v("点击我触发弹窗")]),e("q-row",{attrs:{mt:"4"}},[e("main",[t._v("template")])]),e("q-code",{attrs:{type:"html"}},[t._v('<q-row @clicked="confirm">点击我触发弹窗</q-row>')]),e("main",[t._v("vue")]),e("q-code",[t._v("methods: {\n  confirm() {\n    this.$notice.confirm('我是一个弹窗').then(()=>{\n      this.$notice.toast('你点击了确定')\n    })\n  }\n}")])],1)],1)],1),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-tagfill",leftIconColor:"deepskyblue",title:"API一览",fontSize:"16",borderBottom:!0}}),e("q-row",{attrs:{tag:"section"}},[e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$notice.toast(msg,position,timeout)"}}),e("q-row",{attrs:{fontSize:"14",lh:"9",mb:"2"}},[e("main",[t._v("msg")]),t._v("提示的信息"),e("br"),e("main",[t._v("position")]),t._v("提示位置,一个中间center,一个底部bottom,默认为底部bottom"),e("br"),e("main",[t._v("timeout")]),t._v("提示的时长,单位ms,默认1500")])],1),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$notice.loading"}}),e("q-row",{attrs:{fontSize:"14",lh:"9",mb:"2"}},[t._v("无参数")])],1),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$notice.removeLoading"}}),e("q-row",{attrs:{fontSize:"14",lh:"9",mb:"2"}},[t._v("无参数")])],1),e("q-row",{attrs:{tag:"section"}},[e("q-cell",{attrs:{leftIcon:"q-icon icon-edit",leftIconColor:"deepskyblue",title:"$notice.confirm(msg,btnLeft,btnRight)"}}),e("q-row",{attrs:{fontSize:"14",lh:"9",mb:"2"}},[e("main",[t._v("msg")]),t._v("弹窗信息"),e("br"),e("main",[t._v("btnLeft")]),t._v("提示左侧按键的文字 默认为取消"),e("br"),e("main",[t._v("btnRight")]),t._v("提示右侧按键的文字 默认为确认\n"),e("main",[t._v("$confirm().then()")]),t._v("点击确认后的回调")])],1)],1)],1)],1)],1)},[],!1,null,null,null);o.default=a.exports}}]);