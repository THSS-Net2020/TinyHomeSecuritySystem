!function e(t,r,o){function n(l,f){if(!r[l]){if(!t[l]){var u="function"==typeof require&&require;if(!f&&u)return u(l,!0);if(i)return i(l,!0);var a=new Error("Cannot find module '"+l+"'");throw a.code="MODULE_NOT_FOUND",a}var c=r[l]={exports:{}};t[l][0].call(c.exports,function(e){var r=t[l][1][e];return n(r||e)},c,c.exports,e,t,r,o)}return r[l].exports}for(var i="function"==typeof require&&require,l=0;l<o.length;l++)n(o[l]);return n}({1:[function(e,t,r){(function(e){"use strict";function t(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function n(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(r,"__esModule",{value:!0});var i=function(){function e(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,r,o){return r&&e(t.prototype,r),o&&e(t,o),t}}(),l=function e(t,r,o){null===t&&(t=Function.prototype);var n=Object.getOwnPropertyDescriptor(t,r);if(void 0===n){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,r,o)}if("value"in n)return n.value;var l=n.get;if(void 0!==l)return l.call(o)},f="undefined"!=typeof window?window.videojs:void 0!==e?e.videojs:null,u=function(e){return e&&e.__esModule?e:{default:e}}(f),a=u.default.getTech("Html5"),c=u.default.mergeOptions||u.default.util.mergeOptions,s={mediaDataSource:{},config:{}},p=function(e){function r(e,n){return t(this,r),e=c(s,e),o(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e,n))}return n(r,e),i(r,[{key:"setSrc",value:function(e){this.flvPlayer&&(this.flvPlayer.detachMediaElement(),this.flvPlayer.destroy());var t=this.options_.mediaDataSource,r=this.options_.config;t.type=void 0===t.type?"flv":t.type,t.url=e,this.flvPlayer=window.flvjs.createPlayer(t,r),this.flvPlayer.attachMediaElement(this.el_),this.flvPlayer.load()}},{key:"dispose",value:function(){this.flvPlayer&&(this.flvPlayer.detachMediaElement(),this.flvPlayer.destroy()),l(r.prototype.__proto__||Object.getPrototypeOf(r.prototype),"dispose",this).call(this)}}]),r}(a);p.isSupported=function(){return window.flvjs&&window.flvjs.isSupported()},p.formats={"video/flv":"FLV","video/x-flv":"FLV"},p.canPlayType=function(e){return p.isSupported()&&e in p.formats?"maybe":""},p.canPlaySource=function(e,t){return p.canPlayType(e.type)},p.VERSION="0.2.0",u.default.registerTech("Flvjs",p),r.default=p}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}]},{},[1]);