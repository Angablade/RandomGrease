// ==UserScript==
// @name         Youtube Bypass Viewer discretion
// @version     1
// @namespace    Angablade
// @author         Angablade
// @description Bypasses that annoying Viewer discretion screen popup that shows on adult themed content.
// @match         https://www.youtube.com/watch?v=*
// @match         http://www.youtube.com/watch?v=*
// ==/UserScript==

window.addEventListener('load',function(){setTimeout(function(){var e=document.querySelector('[aria-label="I understand and wish to proceed"]');e.click();for(let t=0;t<document.getElementsByClassName("ytd-emergency-onebox-renderer").length;t++)document.getElementsByClassName("ytd-emergency-onebox-renderer")[t].style.display="none"},500)},!1);