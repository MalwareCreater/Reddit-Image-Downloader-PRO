// ==UserScript==
// @name         Reddit Gallery Downloader PRO
// @namespace    reddit.tools.pro
// @version      2.1.1
// @description  Press Ctrl+Q to download Reddit gallery with ordered numbering
// @homepageURL  https://github.com/MalwareCreater/Reddit-Image-Downloader-PRO
// @source       https://github.com/MalwareCreater/Reddit-Image-Downloader-PRO/
// @updateURL    https://raw.githubusercontent.com/MalwareCreater/Reddit-Image-Downloader-PRO/main/reddit-image-downloader-pro.min.user.js
// @downloadURL  https://raw.githubusercontent.com/MalwareCreater/Reddit-Image-Downloader-PRO/main/reddit-image-downloader-pro.min.user.js
// @supportURL   https://github.com/MalwareCreater/Reddit-Image-Downloader-PRO/issues
// @license      MIT
// @match        *://*.reddit.com/*
// @grant        GM_download
// @grant        GM_xmlhttpRequest
// @connect      reddit.com
// @connect      www.reddit.com
// @connect      redditmedia.com
// @connect      redd.it
// @connect      i.redd.it
// @connect      preview.redd.it
// @connect      *
// @run-at       document-idle
// ==/UserScript==

!function(){"use strict";function e(){return Math.floor(2e3*Math.random())+1e3}function t(e){return new Promise(t=>setTimeout(t,e))}console.log("Reddit Downloader Loaded"),document.addEventListener("keydown",async function(a){if(!a.ctrlKey||"q"!==a.key.toLowerCase())return;const n=document.activeElement;if(!n||"INPUT"!==n.tagName&&"TEXTAREA"!==n.tagName&&!n.isContentEditable)try{const o=window.location.href.split("?")[0].replace(/\/$/,"")+".json";console.log("Fetching:",o);const i=await fetch(o),l=(await i.json())[0].data.children[0].data;let r=[],d={},s=!1;if(l.gallery_data&&l.media_metadata)r=l.gallery_data.items,d=l.media_metadata;else{if(!l.url||!/\.(jpg|jpeg|png|webp|gif)(\?|$)/i.test(l.url))return void alert("No downloadable Reddit image found.");s=!0,r=[{media_id:"single"}],d.single={s:{u:l.url}}}const c=l.title;const g=c.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,""),u=r.length,p=String(u).length;function m(e){return String(e).padStart(p,"0")}for(let f=0;f<r.length;f++){const w=r[f].media_id,$=d[w];if(!$||!$.s||!$.s.u){console.log("Skipping invalid media:",w);continue}let h=$.s.u.replace(/&amp;/g,"&");h=h.split("?")[0],h=h.replace("preview.redd.it","i.redd.it");let v="jpg";const j=h.match(/\.(jpg|jpeg|png|webp|gif)(\?|$)/i);let y;if(j&&(v=j[1].toLowerCase()),s){y=`${g}-v0-${l.id||"single"}.${v}`}else{y=`${g}-v0-${m(f+1)}-${w}.${v}`}console.log(`Downloading ${f+1}/${u}:`,y),GM_download({url:h,name:y,saveAs:!1}),await t(e())}console.log(`Queued ${u} images`)}catch(_){console.error(_),alert("Downloader failed")}})}();
