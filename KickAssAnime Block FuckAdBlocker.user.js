// ==UserScript==
// @name		KickAssAnime Block FuckAdBlocker
// @namespace	Angablade
// @author 		Angablade
// @description	Blocks that stupid ad blocking script so you can just watch the anime in peace.
// @version		2
// @include		http*://*.kickassanime.*/anime/*/episode-*
// @run-at		document-end
// @grant		none
// ==/UserScript==

window.addEventListener('load', function() {

  var elem = document.getElementById("__BVID__14");
  elem.innerHTML = "Working...";

  setTimeout(function() {
    var myVar = setInterval(function() {
      window.stop();
      var d = new Date().getTime() / 1000 | 0;
      elem.innerHTML = "Block Code:<br />" + d;
    }, 100);

    setTimeout(function() {
      clearInterval(myVar);
      elem.innerHTML = "";
      elem.style.visibility = "hidden"; 
    }, 4000);
  }, 12000);
  
}, false);