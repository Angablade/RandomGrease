// ==UserScript==
// @name		KickAssAnime Arrow Nav
// @namespace	Angablade
// @author 		Angablade
// @description Allows for left-previous right-next anime navigation.
// @version		2
// @include		http*://*.kickassanime.*/anime/*/episode-*
// @grant		none
// ==/UserScript==
function ready() {
  let key;
  const c = document.getElementById('user-control').childNodes;
  document.addEventListener('keydown', (event) => {
    key = event.key;
    if (key === 'ArrowRight') {
      c[8].click();
    }
    if (key === 'ArrowLeft') {
      c[0].click();
    }
    if (key === 'F4') { // Lights
      c[4].click();
    }
    if (key === 'F2') { // Share
      c[7].click();
    }
  });
}

document.addEventListener("DOMContentLoaded", ready);