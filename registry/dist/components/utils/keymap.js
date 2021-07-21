!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["utils/keymap"]=n():e["utils/keymap"]=n()}(self,(function(){return function(){var e,n,t={247:function(e,n,t){"use strict";t.d(n,{$j:function(){return s},vN:function(){return l},kW:function(){return c},Nw:function(){return u}});var i=t(407),o=t(109),r=t(269);const s=(e,n)=>{const{event:t}=n,i=new MouseEvent("click",{..._.pick(t,"ctrlKey","shiftKey","altKey","metaKey")});"string"==typeof e?dq(e)?.dispatchEvent(i):e.dispatchEvent(i)},a=e=>n=>s(e,n),l=e=>()=>{const n=dq(".bilibili-player-video video"),t="function"==typeof e?e():e;console.log(`[keymap] requested video time change, delta = ${e}`),n?(unsafeWindow.player||(console.log("[keymap] fallback"),n.currentTime+=t),console.log("[keymap] player API seek"),unsafeWindow.player.seek(n.currentTime+t,n.paused)):console.log("[keymap] video element not found")};let d;const c=(e,n)=>{let t=dq(".keymap-tip");if(!t){const i=dq(".bilibili-player-video-wrap");if(!i)return;i.insertAdjacentHTML("afterbegin",`\n      <div class="keymap-tip-container">\n        <i class="keymap-tip-icon mdi ${n}"></i>\n        <div class="keymap-tip">${e}</div>\n      </div>\n    `),t=dq(".keymap-tip")}t.innerHTML=e;const i=dq(".keymap-tip-container"),o=dq(i,".mdi");o.classList.remove(...o.classList.values()),o.classList.add("mdi",n),d&&clearTimeout(d),i.classList.add("show"),d=window.setTimeout((()=>{i.classList.remove("show")}),2e3)},p={fullscreen:{displayName:"全屏",run:a(".bilibili-player-video-btn-fullscreen")},webFullscreen:{displayName:"网页全屏",run:a(".bilibili-player-video-web-fullscreen")},wideScreen:{displayName:"宽屏",run:a(".bilibili-player-video-btn-widescreen")},volumeUp:{displayName:"增加音量",run:()=>{const e=unsafeWindow.player.volume();unsafeWindow.player.volume(e+.1),c(`${Math.round(100*unsafeWindow.player.volume())}%`,"mdi-volume-high")}},volumeDown:{displayName:"降低音量",run:()=>{const e=unsafeWindow.player.volume();unsafeWindow.player.volume(e-.1);const n=Math.round(100*unsafeWindow.player.volume());0===n?c("静音","mdi-volume-off"):c(`${n}%`,"mdi-volume-high")}},mute:{displayName:"静音",run:e=>{s(".bilibili-player-video-btn-volume .bilibili-player-iconfont-volume",e);unsafeWindow.player.isMute()?c("已静音","mdi-volume-off"):c("已取消静音","mdi-volume-high")}},pictureInPicture:{displayName:"画中画",run:a(".bilibili-player-video-btn-pip")},coin:{displayName:"投币",run:a(".video-toolbar .coin,.tool-bar .coin-info, .video-toolbar-module .coin-box, .play-options-ul > li:nth-child(2)")},favorite:{displayName:"收藏",run:a(".video-toolbar .collect, .video-toolbar-module .fav-box, .play-options-ul > li:nth-child(3)")},pause:{displayName:"暂停/播放",run:a(".bilibili-player-video-btn-start")},like:{displayName:"点赞",run:(()=>{let e=!0;return n=>{const{event:t}=n,i=dq(".video-toolbar .like, .tool-bar .like-info");t.preventDefault();const o=(e,n)=>{const t=new CustomEvent(e,n);i.dispatchEvent(t)};e=!0,setTimeout((()=>e=!1),200),o("mousedown",t),document.body.addEventListener("keyup",(n=>{n.preventDefault(),o("mouseup",n),e&&o("click",n)}),{once:!0})}})()},danmaku:{displayName:"弹幕开关",run:()=>{const e=dq(".bilibili-player-video-danmaku-switch input");e&&(e.checked=!e.checked,(0,o.raiseEvent)(e,"change"))}},longJumpBackward:{displayName:"长倒退",run:l((()=>-(0,i.getComponentSettings)("keymap").options.longJumpSeconds))},longJumpForward:{displayName:"长前进",run:l((()=>(0,i.getComponentSettings)("keymap").options.longJumpSeconds))},jumpBackward:{displayName:"倒退",run:l(-5)},jumpForward:{displayName:"前进",run:l(5)},playerMenu:{displayName:"播放器菜单",run:()=>{const e=dq(".bilibili-player-video-wrap");if(!e)return;const n=e.getBoundingClientRect();e.dispatchEvent(new MouseEvent("contextmenu",{bubbles:!0,cancelable:!1,view:unsafeWindow,button:2,buttons:0,clientX:n.x+n.width/2-88.325,clientY:n.y+n.height/2-97}))}},seekBegin:{displayName:"回开头",run:()=>{unsafeWindow.player&&(unsafeWindow.player.play(),setTimeout((()=>{unsafeWindow.player.seek(0);const e=dq(".bilibili-player-video-toast-bottom .bilibili-player-video-toast-item:first-child .bilibili-player-video-toast-item-text span:nth-child(2)");e&&(e.textContent=" 00:00")})))}}},[u]=(0,r.registerAndGetData)("keymap.actions",p)},695:function(e,n,t){"use strict";t.d(n,{Wb:function(){return o},um:function(){return r}});var i=t(269);const o={fullscreen:"f",webFullscreen:"w",wideScreen:"t",volumeUp:"arrowUp",volumeDown:"arrowDown",mute:"m",pictureInPicture:"p",coin:"c",favorite:"s",pause:"space",like:"l",playerMenu:"`",longJumpForward:"j",longJumpBackward:"shift j",jumpBackward:"arrowLeft",jumpForward:"arrowRight",danmaku:"d",seekBegin:"0"},[,r]=(0,i.registerAndGetData)("keymap.presets",o,{Default:{},YouTube:{like:"",pause:"space k",longJumpForward:"l",longJumpBackward:"j",seekBegin:"0 Home"},HTML5Player:{coin:"shift c",danmaku:"shift d",fullscreen:"enter",webFullscreen:"shift enter",pictureInPicture:"shift p",longJumpBackward:"ctrl arrowLeft",longJumpForward:"ctrl arrowRight"},PotPlayer:{coin:"shift c",danmaku:"shift d",fullscreen:"enter",webFullscreen:"6",longJumpBackward:"ctrl arrowLeft",longJumpForward:"ctrl arrowRight",seekBegin:"backspace"}})},47:function(e,n,t){var i=t(645)((function(e){return e[1]}));i.push([e.id,".keymap-extra-options {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  justify-content: center;\n}\n.keymap-extra-options .keymap-settings-button .be-icon {\n  margin-right: 8px;\n}",""]),e.exports=i},256:function(e,n,t){var i=t(645)((function(e){return e[1]}));i.push([e.id,".keymap-settings-popup {\n  background-color: #fff;\n  color: black;\n  border-radius: 8px;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);\n  border: 1px solid rgba(136,136,136,0.13333);\n  box-sizing: border-box;\n  transition: 0.2s ease-out;\n  width: 550px;\n  top: 50%;\n  left: 50%;\n  z-index: 100002;\n  transform: translateX(-50%) translateY(-50%) scale(0.9);\n  display: flex;\n  flex-direction: column;\n}\nbody.dark .keymap-settings-popup {\n  background-color: #282828;\n  color: #eee;\n  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.2);\n}\nbody.dark .keymap-settings-popup {\n  background-color: #222;\n}\n.keymap-settings-popup.open {\n  transform: translateX(-50%) translateY(-50%) scale(1);\n}\n.keymap-settings {\n  font-size: 12px;\n  display: flex;\n  flex-direction: column;\n  padding: 12px 12px 12px 18px;\n}\n.keymap-settings-header {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  margin-bottom: 8px;\n}\n.keymap-settings-header-title {\n  flex: 1 0 auto;\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  font-size: 18px;\n  font-weight: bold;\n}\n.keymap-settings-header-title .be-icon {\n  margin-right: 6px;\n}\n.keymap-settings-header-help, .keymap-settings-header-close {\n  display: flex;\n  padding: 6px;\n  cursor: pointer;\n  transition: 0.2s ease-out;\n  color: inherit;\n}\n.keymap-settings-header-help:hover, .keymap-settings-header-close:hover {\n  color: var(--theme-color);\n}\n.keymap-settings-content {\n  flex: 1 0 auto;\n  max-height: calc(100vh - 200px);\n  overflow: auto;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header,\n.keymap-settings-content .keymap-settings-grid .grid-row {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  grid-gap: 8px;\n  gap: 8px;\n  justify-content: space-between;\n  height: 24px;\n  box-sizing: content-box;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header > *,\n.keymap-settings-content .keymap-settings-grid .grid-row > * {\n  flex: 1 0 0;\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n}\n.keymap-settings-content .keymap-settings-grid .grid-header {\n  margin-bottom: 4px;\n  padding: 4px 0 6px 0;\n  border-bottom: 1px solid rgba(136,136,136,0.13333);\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  background-color: #fff;\n}\nbody.dark .keymap-settings-content .keymap-settings-grid .grid-header {\n  background-color: #222;\n}",""]),e.exports=i},1:function(e,n,t){var i=t(645)((function(e){return e[1]}));i.push([e.id,".keymap-settings-grid .grid-row {\n  padding: 2px 0;\n}\n.keymap-settings-grid .grid-row .row-name,\n.keymap-settings-grid .grid-row .row-default-binding,\n.keymap-settings-grid .grid-row .row-preset-binding {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: auto;\n  scrollbar-width: none !important;\n  overscroll-behavior: contain;\n}\n.keymap-settings-grid .grid-row .row-name::-webkit-scrollbar,\n.keymap-settings-grid .grid-row .row-default-binding::-webkit-scrollbar,\n.keymap-settings-grid .grid-row .row-preset-binding::-webkit-scrollbar {\n  height: 0 !important;\n  width: 0 !important;\n}\n.keymap-settings-grid .grid-row .row-name.not-set, .keymap-settings-grid .grid-row .row-name.overwritten,\n.keymap-settings-grid .grid-row .row-default-binding.not-set,\n.keymap-settings-grid .grid-row .row-default-binding.overwritten,\n.keymap-settings-grid .grid-row .row-preset-binding.not-set,\n.keymap-settings-grid .grid-row .row-preset-binding.overwritten {\n  opacity: 0.25;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-button {\n  padding: 4px;\n  margin-right: 4px;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-icon {\n  margin: 0;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .be-textbox {\n  margin-right: 6px;\n  flex: 1 0 auto;\n}\n.keymap-settings-grid .grid-row .row-custom-binding .custom-binding-edit,\n.keymap-settings-grid .grid-row .row-custom-binding .custom-binding-add {\n  display: flex;\n  align-items: center;\n  grid-gap: 0;\n  gap: 0;\n  flex: 1 0 auto;\n}",""]),e.exports=i},778:function(e,n,t){var i=t(645)((function(e){return e[1]}));i.push([e.id,".keymap-tip-container {\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  padding: 8px 16px;\n  background-color: rgba(0,0,0,0.66667);\n  color: white;\n  pointer-events: none;\n  opacity: 0;\n  z-index: 100;\n  display: flex;\n  align-items: center;\n  font-size: 14pt;\n  border-radius: 4px;\n  transition: 0.2s ease-out;\n}\n.keymap-tip-container.show {\n  opacity: 1;\n}\n.keymap-tip-container i {\n  line-height: 1;\n  margin-right: 8px;\n  font-size: 18pt;\n}\n\n.bilibili-player .bilibili-player-area .bilibili-player-video-wrap .bilibili-player-volumeHint {\n  background-color: rgba(0,0,0,0.66667);\n  color: white;\n}\n.bilibili-player .bilibili-player-area .bilibili-player-video-wrap .bilibili-player-volumeHint-icon {\n  line-height: 1;\n}",""]),e.exports=i},645:function(e){"use strict";
// eslint-disable-next-line func-names
e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},
// eslint-disable-next-line func-names
n.i=function(e,t,i){"string"==typeof e&&(
// eslint-disable-next-line no-param-reassign
e=[[null,e,""]]);var o={};if(i)for(var r=0;r<this.length;r++){
// eslint-disable-next-line prefer-destructuring
var s=this[r][0];null!=s&&(o[s]=!0)}for(var a=0;a<e.length;a++){var l=[].concat(e[a]);i&&o[l[0]]||(t&&(l[2]?l[2]="".concat(t," and ").concat(l[2]):l[2]=t),n.push(l))}},n}},379:function(e,n,t){"use strict";var i,o=function(){return void 0===i&&(
// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
// @see https://github.com/webpack-contrib/style-loader/issues/177
i=Boolean(window&&document&&document.all&&!window.atob)),i},r=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),s=[];function a(e){for(var n=-1,t=0;t<s.length;t++)if(s[t].identifier===e){n=t;break}return n}function l(e,n){for(var t={},i=[],o=0;o<e.length;o++){var r=e[o],l=n.base?r[0]+n.base:r[0],d=t[l]||0,c="".concat(l," ").concat(d);t[l]=d+1;var p=a(c),u={css:r[1],media:r[2],sourceMap:r[3]};-1!==p?(s[p].references++,s[p].updater(u)):s.push({identifier:c,updater:y(u,n),references:1}),i.push(c)}return i}function d(e){var n=document.createElement("style"),i=e.attributes||{};if(void 0===i.nonce){var o=t.nc;o&&(i.nonce=o)}if(Object.keys(i).forEach((function(e){n.setAttribute(e,i[e])})),"function"==typeof e.insert)e.insert(n);else{var s=r(e.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}return n}var c,p=(c=[],function(e,n){return c[e]=n,c.filter(Boolean).join("\n")});function u(e,n,t,i){var o=t?"":i.media?"@media ".concat(i.media," {").concat(i.css,"}"):i.css;if(e.styleSheet)e.styleSheet.cssText=p(n,o);else{var r=document.createTextNode(o),s=e.childNodes;s[n]&&e.removeChild(s[n]),s.length?e.insertBefore(r,s[n]):e.appendChild(r)}}function m(e,n,t){var i=t.css,o=t.media,r=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),r&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}var g=null,f=0;function y(e,n){var t,i,o;if(n.singleton){var r=f++;t=g||(g=d(n)),i=u.bind(null,t,r,!1),o=u.bind(null,t,r,!0)}else t=d(n),i=m.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=l(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var i=0;i<t.length;i++){var o=a(t[i]);s[o].references--}for(var r=l(e,n),d=0;d<t.length;d++){var c=a(t[d]);0===s[c].references&&(s[c].updater(),s.splice(c,1))}t=r}}}},36:function(e,n,t){var i=t(778);e.exports="string"==typeof i?i:i.toString()},52:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return m}});var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"keymap-extra-options"},[t("VButton",{ref:"button",staticClass:"keymap-settings-button",on:{mouseover:function(n){return e.loadSettings()},click:function(n){return e.toggleSettings()}}},[t("VIcon",{attrs:{icon:"mdi-keyboard-settings-outline",size:18}}),e._v("\n    快捷键设置\n  ")],1)],1)};i._withStripped=!0;var o=t(643);let r;var s=Vue.extend({components:{VButton:o.VButton,VIcon:o.VIcon},data:()=>({popupOpen:!1}),methods:{async loadSettings(){if(r)return;const e=this.$refs.button.$el,n=await Promise.resolve().then(t.bind(t,54)).then((e=>e.default));r=new n({propsData:{triggerElement:e}}).$mount(),console.log(e,r,r.$el),document.body.insertAdjacentElement("beforeend",r.$el)},toggleSettings(){r&&(r.popupOpen=!r.popupOpen)}}}),a=t(379),l=t.n(a),d=t(47),c=t.n(d),p={insert:"head",singleton:!1},u=(l()(c(),p),c().locals,(0,t(900).Z)(s,i,[],!1,null,null,null));u.options.__file="registry/lib/components/utils/keymap/settings/ExtraOptions.vue";var m=u.exports},54:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return B}});var i=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("VPopup",{staticClass:"keymap-settings-popup be-settings-extra-options",attrs:{fixed:"","trigger-element":e.triggerElement},model:{value:e.popupOpen,callback:function(n){e.popupOpen=n},expression:"popupOpen"}},[t("div",{staticClass:"keymap-settings"},[t("div",{staticClass:"keymap-settings-header"},[t("div",{staticClass:"keymap-settings-header-title"},[t("VIcon",{attrs:{icon:"mdi-keyboard-settings-outline"}}),e._v("\n        快捷键设置\n      ")],1),e._v(" "),t("a",{staticClass:"keymap-settings-header-help",attrs:{href:"https://github.com/the1812/Bilibili-Evolved/blob/v2/registry/lib/components/utils/keymap/help.md",target:"_blank",title:"查看帮助"}},[t("VIcon",{attrs:{size:18,icon:"mdi-help-circle-outline"}})],1),e._v(" "),t("div",{staticClass:"keymap-settings-header-close",attrs:{title:"关闭"}},[t("VIcon",{attrs:{size:18,icon:"close"},on:{click:function(n){e.popupOpen=!1}}})],1)]),e._v(" "),t("div",{staticClass:"keymap-settings-content"},[t("div",{staticClass:"keymap-settings-grid"},[t("div",{staticClass:"grid-header"},[t("div",{staticClass:"header-name"},[e._v("\n            动作\n          ")]),e._v(" "),t("div",{staticClass:"header-default-binding"},[e._v("\n            默认按键\n          ")]),e._v(" "),t("div",{staticClass:"header-preset-binding"},[t("VDropdown",{attrs:{items:e.presetOptions,"key-mapper":function(e){return e}},scopedSlots:e._u([{key:"item",fn:function(n){var t=n.item;return[e._v("\n                "+e._s(t)+"\n              ")]}}]),model:{value:e.selectedPreset,callback:function(n){e.selectedPreset=n},expression:"selectedPreset"}})],1),e._v(" "),t("div",{staticClass:"header-custom-binding"},[e._v("\n            自定义按键\n          ")])]),e._v(" "),e._l(e.rows,(function(n){return t("KeymapSettingsRow",{key:n.name,attrs:{row:n,"selected-preset":e.selectedPreset}})}))],2)])])])};i._withStripped=!0;var o=t(407),r=t(643),s=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"grid-row"},[t("div",{staticClass:"row-name",attrs:{title:e.row.name}},[e._v("\n    "+e._s(e.row.displayName)+"\n  ")]),e._v(" "),t("div",{staticClass:"row-default-binding",class:{overwritten:e.isOverwrittern(e.presets[e.selectedPreset],e.customKeyBindings),"not-set":void 0===e.presetBase[e.row.name]}},[e._v("\n    "+e._s(e.showReadonlyKey(e.presetBase))+"\n  ")]),e._v(" "),t("div",{staticClass:"row-preset-binding",class:{overwritten:e.isOverwrittern(e.customKeyBindings),"not-set":void 0===e.presets[e.selectedPreset][e.row.name]}},[e._v("\n    "+e._s(e.showReadonlyKey(e.presets[e.selectedPreset]))+"\n  ")]),e._v(" "),t("div",{staticClass:"row-custom-binding"},[e.editable?t("div",{staticClass:"custom-binding-edit"},[t("TextBox",{ref:"customBindingTextBox",attrs:{placeholder:"禁用","change-on-blur":"",text:e.customKeyBindings[e.row.name]},on:{change:e.updateCustomBinding}}),e._v(" "),t("VButton",{attrs:{type:"transparent",title:"删除自定义键位"},on:{click:function(n){return e.removeCustomBinding()}}},[t("VIcon",{attrs:{icon:"mdi-trash-can-outline",size:16}})],1)],1):t("div",{staticClass:"custom-binding-add"},[t("VButton",{attrs:{type:"transparent",title:"添加自定义键位"},on:{click:function(n){return e.addCustomBinding()}}},[t("VIcon",{attrs:{icon:"mdi-plus",size:16}})],1)],1)])])};s._withStripped=!0;var a=t(695);const l=(0,o.getComponentSettings)("keymap").options;var d=Vue.extend({components:{TextBox:r.TextBox,VButton:r.VButton,VIcon:r.VIcon},props:{row:{type:Object,required:!0},selectedPreset:{type:String,required:!0}},data:()=>({presets:a.um,presetBase:a.Wb,customKeyBindings:l.customKeyBindings,editable:!1}),created(){this.checkEditable()},methods:{checkEditable(){this.editable=void 0!==this.customKeyBindings[this.row.name]},showReadonlyKey(e){const{name:n}=this.row,t=e[n];return void 0===t?"继承":""===t?"禁用":t},isOverwrittern(...e){const{name:n}=this.row;return e.some((e=>void 0!==e[n]))},async addCustomBinding(){const{name:e}=this.row;this.customKeyBindings[e]="",this.checkEditable(),await this.$nextTick(),this.$refs.customBindingTextBox.focus()},removeCustomBinding(){const{name:e}=this.row;delete this.customKeyBindings[e],this.checkEditable()},updateCustomBinding(e){console.log("update",e);const{name:n}=this.row;this.customKeyBindings[n]=e}}}),c=t(379),p=t.n(c),u=t(1),m=t.n(u),g={insert:"head",singleton:!1},f=(p()(m(),g),m().locals,t(900)),y=(0,f.Z)(d,s,[],!1,null,null,null);y.options.__file="registry/lib/components/utils/keymap/settings/KeymapSettingsRow.vue";var b=y.exports,v=t(247);const h=(0,o.getComponentSettings)("keymap").options;console.log(a.um,v.Nw,h.preset,h.customKeyBindings);var w=Vue.extend({components:{VIcon:r.VIcon,VDropdown:r.VDropdown,VPopup:r.VPopup,KeymapSettingsRow:b},props:{triggerElement:{type:HTMLElement,required:!0}},data:()=>({popupOpen:!1,actions:v.Nw,presets:a.um,customKeyBindings:h.customKeyBindings}),computed:{selectedPreset:{get:()=>h.preset,set(e){h.preset=e}},rows(){return Object.entries(this.actions).map((([e,n])=>({name:e,...n})))},presetOptions(){return Object.keys(this.presets)}}}),k=t(256),x=t.n(k),_={insert:"head",singleton:!1},C=(p()(x(),_),x().locals,(0,f.Z)(w,i,[],!1,null,null,null));C.options.__file="registry/lib/components/utils/keymap/settings/KeymapSettings.vue";var B=C.exports},900:function(e,n,t){"use strict";function i(e,n,t,i,o,r,s,a){var l,d="function"==typeof e?e.options:e;if(n&&(d.render=n,d.staticRenderFns=t,d._compiled=!0),i&&(d.functional=!0),r&&(d._scopeId="data-v-"+r),s?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=l):o&&(l=a?function(){o.call(this,(d.functional?this.parent:this).$root.$options.shadowRoot)}:o),l)if(d.functional){d._injectStyles=l;var c=d.render;d.render=function(e,n){return l.call(n),c(e,n)}}else{var p=d.beforeCreate;d.beforeCreate=p?[].concat(p,l):[l]}return{exports:e,options:d}}t.d(n,{Z:function(){return i}})},269:function(e){"use strict";e.exports=coreApis.pluginApis.data},407:function(e){"use strict";e.exports=coreApis.settings},643:function(e){"use strict";e.exports=coreApis.ui},109:function(e){"use strict";e.exports=coreApis.utils}},i={};function o(e){var n=i[e];if(void 0!==n)return n.exports;var r=i[e]={id:e,exports:{}};return t[e](r,r.exports,o),r.exports}o.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(n,{a:n}),n},n=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__},o.t=function(t,i){if(1&i&&(t=this(t)),8&i)return t;if("object"==typeof t&&t){if(4&i&&t.__esModule)return t;if(16&i&&"function"==typeof t.then)return t}var r=Object.create(null);o.r(r);var s={};e=e||[null,n({}),n([]),n(n)];for(var a=2&i&&t;"object"==typeof a&&!~e.indexOf(a);a=n(a))Object.getOwnPropertyNames(a).forEach((function(e){s[e]=function(){return t[e]}}));return s.default=function(){return t},o.d(r,s),r},o.d=function(e,n){for(var t in n)o.o(n,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var r={};return function(){"use strict";o.d(r,{component:function(){return u}});var e=coreApis.componentApis.styledComponent,n=coreApis.utils.urls,t=o(407),i=o(247),s=o(109);const a=["shift","alt","ctrl","meta"],l=lodash.once((e=>{const t=n.watchlaterUrls.some((e=>(0,s.matchUrlPattern)(e))),o=n.mediaListUrls.some((e=>(0,s.matchUrlPattern)(e))),r={enable:!0,bindings:e};return document.body.addEventListener("keydown",(e=>{if(!r.enable)return;if((0,s.isTyping)())return;const n=e.key.toLowerCase(),l=dq(".bilibili-player-sphere-control");null!==l&&"none"!==l.style.display&&["w","a","s","d"].includes(n)||r.bindings.forEach((n=>{if(0===n.keys.length)return;if(a.some((t=>{const i=n.keys.includes(t);if(n.keys.includes(`[${t}]`))return!1;return i!==e[`${t}Key`]})))return;const r=n.keys.filter((e=>!a.includes(e.toLowerCase()))).map((e=>e.toLowerCase()));(r.includes(e.key.toLowerCase())||r.includes(e.code.toLowerCase()))&&((n?.prevent??1)&&(e.stopPropagation(),e.preventDefault()),n.action.run({binding:n,isWatchlater:t,isMediaList:o,event:e,clickElement:i.$j,changeVideoTime:i.vN,showTip:i.kW}))}))})),r}));var d=o(695);let c=null;const p=(0,e.styledComponentEntry)((()=>Promise.resolve().then(o.t.bind(o,36,23))),(async({settings:e})=>{const n=()=>{const n=e.options.preset,t=d.um[n]||{},o=(e=>Object.entries(e).map((([e,n])=>({keys:n.split(" ").filter((e=>""!==e)),action:i.Nw[e]||none}))))({...d.Wb,...t,...e.options.customKeyBindings});c?c.bindings=o:c=l(o)};(0,t.addComponentListener)("keymap.preset",n,!0),(0,t.addComponentListener)("keymap.customKeyBindings",n)})),u={name:"keymap",displayName:"快捷键扩展",tags:[componentsTags.video,componentsTags.utils],urlInclude:[...n.videoAndBangumiUrls,...n.cheeseUrls,...n.mediaListUrls],entry:p,unload:()=>{c&&(c.enable=!1)},reload:()=>{c&&(c.enable=!0)},description:{"zh-CN":"为视频播放器启用更多的快捷键, 快捷键列表可在`快捷键设置`中查看和配置."},extraOptions:()=>Promise.resolve().then(o.bind(o,52)).then((e=>e.default)),options:{longJumpSeconds:{defaultValue:85,displayName:"长跳跃秒数"},customKeyBindings:{defaultValue:{},displayName:"自定义键位",hidden:!0},preset:{defaultValue:"Default",displayName:"预设",hidden:!0}}}}(),r=r.component}()}));