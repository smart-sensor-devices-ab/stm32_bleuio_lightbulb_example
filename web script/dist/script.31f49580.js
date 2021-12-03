parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"okjw":[function(require,module,exports) {
let t,e,a,n,r,c,s=[];async function i(){t=await navigator.serial.requestPort(),await t.open({baudRate:9600});const s=new TextEncoderStream;n=s.readable.pipeTo(t.writable),c=s.writable;let i=new TextDecoderStream;a=t.readable.pipeTo(i.writable),r=i.readable.pipeThrough(new TransformStream(new p)),e=r.getReader()}async function o(){return e&&(await e.cancel(),await a.catch(()=>{}),e=null,a=null),c&&(await c.getWriter().close(),await n,c=null,n=null),await t.close(),t=null,"Dongle Disconnected!"}function u(t){const e=c.getWriter();e.write(t),""!==t&&e.write("\r"),e.releaseLock()}exports.at_connect=async function(){return await i(),"device connected"},exports.at_disconnect=async function(){return await o(),"device disconnected"},exports.ati=(()=>t?(u("ATI"),l("ati")):"Device not connected."),exports.ate=function(t){return u("ATE"+t),l("ate")},exports.at_central=function(){return u("AT+CENTRAL"),l("at_central")},exports.at_peripheral=function(){return u("AT+PERIPHERAL"),l("at_peripheral")},exports.atr=function(){return u("ATR"),l("atr")},exports.at_advstart=function(){return u("AT+ADVSTART"),l("at_advstart")},exports.at_advstop=function(){return u("AT+ADVSTOP"),l("at_advstop")},exports.at_advdata=(t=>(u(t?"AT+ADVDATA="+t:"AT+ADVDATA"),l("at_advdata"))),exports.at_advdatai=function(t){return u("AT+ADVDATAI="+t),l("at_advdatai")},exports.at_advresp=function(t){return u(t?"AT+ADVRESP="+t:"AT+ADVRESP"),l("at_advresp")},exports.at_cancelconnect=function(){return u("AT+CANCELCONNECT"),l("at_cancelconnect")},exports.at_client=function(){return u("AT+CLIENT"),l("at_client")},exports.at_dual=function(){return u("AT+DUAL"),l("at_dual")},exports.at_enterpasskey=function(t=123456){return u("AT+ENTERPASSKEY="+t),l("at_enterpasskey")},exports.at_numcompa=function(t){return u(t?"AT+NUMCOMPA="+t:"AT+NUMCOMPA"),l("at_numcompa")},exports.at_gapiocap=function(t=1){return u("AT+GAPIOCAP="+t),l("at_gapiocap")},exports.at_gappair=function(t){return u(t?"AT+GAPPAIR="+t:"AT+GAPPAIR"),l("at_gappair")},exports.at_gapunpair=function(t){return u(t?"AT+GAPUNPAIR="+t:"AT+GAPUNPAIR"),l("at_gapunpair")},exports.at_gapscan=function(t=1,e=!0){return u("AT+GAPSCAN="+t),l("at_gapscan",e)},exports.at_seclvl=function(t){return u(t?"AT+SECLVL="+t:"AT+SECLVL"),l("at_seclvl")},exports.at_setpasskey=function(t){return u(t?"AT+SETPASSKEY="+t:"AT+SETPASSKEY"),l("at_setpasskey")},exports.at_findscandata=function(t=1,e=5){return u("AT+FINDSCANDATA="+t),l("at_findscandata",e)},exports.at_gapconnect=function(t){return u("AT+GAPCONNECT="+t),l("at_gapconnect")},exports.at_gapdisconnect=function(){return u("AT+GAPDISCONNECT"),l("at_gapdisconnect")},exports.at_getconn=async function(){return u("AT+GETCONN"),l("at_getconn")},exports.at_getservices=function(){return u("AT+GETSERVICES"),l("at_getservices")},exports.at_scantarget=function(t,e=1){return u("AT+SCANTARGET="+t),l("at_scantarget",e+2)},exports.at_server=function(){return u("AT+SERVER"),l("at_server")},exports.at_setnoti=function(t){return u("AT+SETNOTI="+t),l("at_setnoti")},exports.at_spssend=function(t){return u(t?"AT+SPSSEND="+t:"AT+SPSSEND"),l("at_spssend")},exports.at_targetconn=function(t){return u(t?"AT+TARGETCONN="+t:"AT+TARGETCONN"),l("at_targetconn")},exports.at_gapstatus=function(){return u("AT+GAPSTATUS"),l("at_gapstatus")},exports.at_gattcwrite=function(t,e){return u("AT+GATTCWRITE="+t+" "+e),l("at_gattcwrite")},exports.at_gattcwriteb=function(){return u("AT+GATTCWRITEB="+handle_param+" "+msg),l("at_gattcwriteb")},exports.at_gattcread=function(){return u("AT+GATTCREAD="+handle_param),l("at_gattcread")},exports.help=function(){return u("--H"),l("help")},exports.stop=function(){return u(""),"Process Stopped"};class p{constructor(){this.container=""}transform(t,e){this.container+=t;const a=this.container.split("\r\n");this.container=a.pop(),a.forEach(t=>e.enqueue(t))}flush(t){t.enqueue(this.container)}}async function l(t,a){for(s=[];;){const{done:n,value:r}=await e.read();switch(r&&s.push(r),t){case"ati":if(s.includes("Not Advertising")||s.includes("Advertising"))return s;break;case"ate":if(s.includes("ECHO OFF")||s.includes("ECHO ON"))return s;break;case"at_central":return"Central Mode";case"at_peripheral":return"Peripheral Mode";case"at_advstart":return"Advertising";case"at_advstop":return"Advertising Stopped";case"at_advdata":case"at_advdatai":case"at_advresp":if(2==s.length)return s;break;case"at_cancelconnect":if(s.includes("ERROR")||s.includes("OK"))return s;break;case"at_client":return"Client";case"at_dual":return"Dual Mode";case"at_enterpasskey":if(2==s.length)return s;break;case"atr":return"Trigger platform reset";case"at_findscandata":if(s.length==a){const t=c.getWriter();return t.write(""),t.releaseLock(),s}break;case"at_gapiocap":if(3==s.length)return s;break;case"at_gappair":if(s.includes("PAIRING SUCCESS")||s.includes("BONDING SUCCESS"))return s;break;case"at_gapunpair":if(s.includes("UNPARIED.")||3==s.length)return s;break;case"at_gapscan":if(!0===a&&s.some(function(t){t.indexOf("RSSI")>=0&&""!=r&&console.log(r)}),s.includes("SCAN COMPLETE"))return s;break;case"at_getconn":if(s.includes("No Connections found.")||2==s.length)return s;case"at_scantarget":if(s.length==a){const t=c.getWriter();return t.write(""),t.releaseLock(),s.slice(2)}break;case"at_setpasskey":if(2==s.length)return s;break;case"at_gattcwrite":if(4==s.length)return s;break;case"at_gapstatus":if(s.includes("Not Advertising")||s.includes("Advertising"))return s;break;case"at_gattcwrite":case"at_gattcwriteb":case"at_gattcread":if(4==s.length)return s;break;case"at_gapconnect":if(s.includes("CONNECTED.")||s.includes("DISCONNECTED.")||s.includes("ERROR")||s.includes("PAIRING SUCCESS"))return s;break;case"at_getservices":if(s.includes("Value received: "))return s;break;case"at_gapdisconnect":return"Disconnected.";case"at_numcompa":if(s.includes("ERROR")||s.includes("OK"))return s;break;case"at_seclvl":if(2==s.length)return s;break;case"at_server":return"Server";case"at_setnoti":if(20==s.length)return s;break;case"at_spssend":if(2==s.length||s.includes("[Sent]"))return s;case"at_targetconn":if(2==s.length)return s;case"help":if(s.includes("[A] = Usable in All Roles"))return s;break;default:return"Nothing!"}}}
},{}],"uqAK":[function(require,module,exports) {
module.exports="./light_on.16609c8f.png";
},{}],"zsTN":[function(require,module,exports) {
module.exports="./light_off.d893b80a.png";
},{}],"mpVp":[function(require,module,exports) {
"use strict";var e=l(require("bleuio")),n=o(require("./light_on.png")),t=o(require("./light_off.png"));function o(e){return e&&e.__esModule?e:{default:e}}function c(e){if("function"!=typeof WeakMap)return null;var n=new WeakMap,t=new WeakMap;return(c=function(e){return e?t:n})(e)}function l(e,n){if(!n&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var t=c(n);if(t&&t.has(e))return t.get(e);var o={},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if("default"!==i&&Object.prototype.hasOwnProperty.call(e,i)){var r=l?Object.getOwnPropertyDescriptor(e,i):null;r&&(r.get||r.set)?Object.defineProperty(o,i,r):o[i]=e[i]}return o.default=e,t&&t.set(e,o),o}var i="[0]40:48:FD:E5:35:A5";document.getElementById("connect").addEventListener("click",function(){e.at_connect(),document.getElementById("lightOn").disabled=!1,document.getElementById("lightOf").disabled=!1,document.getElementById("connect").disabled=!0}),document.getElementById("lightOn").addEventListener("click",function(){e.ati().then(function(n){JSON.stringify(n).includes("Peripheral")&&(console.log("peripheral"),e.at_central().then(function(e){console.log("central now")}))}).then(function(){e.at_getconn().then(function(n){JSON.stringify(n).includes(i)?console.log("already connected"):e.at_gapconnect(i).then(function(){console.log("connected successfully")})}).then(function(){e.at_spssend("L=1").then(function(){console.log("Turned on"),document.getElementById("light").src=n.default})})})}),document.getElementById("lightOf").addEventListener("click",function(){e.ati().then(function(n){JSON.stringify(n).includes("Peripheral")&&(console.log("peripheral"),e.at_central().then(function(e){console.log("central now")}))}).then(function(){e.at_getconn().then(function(n){JSON.stringify(n).includes(i)?console.log("already connected"):e.at_gapconnect(i).then(function(){console.log("connected successfully")})}).then(function(){e.at_spssend("L=0").then(function(){console.log("Turned off"),document.getElementById("light").src=t.default})})})});
},{"bleuio":"okjw","./light_on.png":"uqAK","./light_off.png":"zsTN"}]},{},["mpVp"], null)
//# sourceMappingURL=/script.31f49580.js.map