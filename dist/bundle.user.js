// ==UserScript==
// @name        yareio-polished-spectator
// @description A polished version of yareio-spectator
// @namespace   npmjs.com/rollup-plugin-userscript-metablock
// @version     0.1.0
// @author      swz
// @license     MIT
// @homepage    https://github.com/swz-gh/yareio-polished-spectator#readme
// @supportURL  https://github.com/swz-gh/yareio-polished-spectator/issues
// @icon        https://yare.io/favicon.ico
// @match       https://yare.io/d*/*
// @run-at      document-start
// @grant       none
// ==/UserScript==
var e=new BattleHUD;setTimeout((function(){return function(){var n;console.log("ready"),null==n&&null!=render_state&&(n=render_state,render_state=function(e){n(e),t()});function t(){e.render()}function r(){e.tick()}setInterval((function(){r()}),1e3)}()}),3e3);
