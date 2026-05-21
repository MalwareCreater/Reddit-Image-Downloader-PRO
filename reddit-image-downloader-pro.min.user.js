// ==UserScript==
// @name         Reddit Gallery Downloader PRO
// @namespace    reddit.tools.pro
// @version      2.2.0
// @description  Press Ctrl+Q to Download Reddit images, galleries, and GIFs with proper filenames and ordered numbering
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
// @connect      old.reddit.com
// @connect      redditmedia.com
// @connect      redd.it
// @connect      i.redd.it
// @connect      preview.redd.it
// @connect      *
// @run-at       document-idle
// ==/UserScript==

!function(){"use strict";function e(){return Math.floor(2e3*Math.random())+1e3}function t(e){return new Promise(t=>setTimeout(t,e))}document.addEventListener("keydown",async function(a){if(!a.ctrlKey||"q"!==a.key.toLowerCase())return;const i=document.activeElement;if(!i||"INPUT"!==i.tagName&&"TEXTAREA"!==i.tagName&&!i.isContentEditable)try{const r=window.location.href.split("?")[0].replace(/\/$/,"")+".json",n=await fetch(r),s=(await n.json())[0].data.children[0].data;let l=[],o={},p=!1;if(s.gallery_data&&s.media_metadata)l=s.gallery_data.items,o=s.media_metadata;else{if(!s.url||!/\.(jpg|jpeg|png|webp|gif)(\?|$)/i.test(s.url))return void alert("No downloadable Reddit image found.");p=!0,l=[{media_id:"single"}],o.single={s:{u:s.url}}}const d=s.title;const m=d.toLowerCase().replace(/[^\p{L}\p{N}]+/gu,"-").replace(/^-+|-+$/g,""),g=l.length,c=String(g).length;function u(e){return String(e).padStart(c,"0")}for(let w=0;w<l.length;w++){const f=l[w].media_id,v=o[f];if(!v||!v.s||!v.s.u&&!v.s.gif&&!v.s.mp4)continue;let $,h,j;if("AnimatedImage"===v.e&&v.s&&v.s.mp4)$=v.s.mp4.replace(/&amp;/g,"&"),h="mp4";else if(s.preview&&s.preview.images&&s.preview.images[0]&&s.preview.images[0].variants&&s.preview.images[0].variants.mp4)$=s.preview.images[0].variants.mp4.source.url.replace(/&amp;/g,"&"),h="mp4";else{$=v.s.u.replace(/&amp;/g,"&"),$=$.split("?")[0],$=$.replace("preview.redd.it","i.redd.it");const y=$.match(/\.(jpg|jpeg|png|webp|gif)$/i);h=y?y[1].toLowerCase():"jpg"}if("mp4"!==h&&($=$.split("?")[0]),"mp4"!==h&&($=$.replace("preview.redd.it","i.redd.it")),p){j=`${m}-v0-${s.id||"single"}.${h}`}else{j=`${m}-v0-${u(w+1)}-${f}.${h}`}GM_download({url:$,name:j,saveAs:!1}),await t(e())}}catch(_){alert("Downloader failed")}})}();
