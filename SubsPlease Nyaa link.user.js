// ==UserScript==
// @name 		SubsPlease Nyaa link
// @version 	1
// @namespace	Angablade
// @author 		Angablade
// @description Adds a link to Nyaa from subsplease seasonal anime status table.
// @match 		https://subsplease.org/*
// @match 		http://subsplease.org/*
// ==/UserScript==

window.addEventListener('load', function() {
	setTimeout(function ()
		{
		var table = document.getElementById("releases-table");
		for (const row of table.rows) {
			var theText = row.cells[0];
			var Q = theText.getElementsByTagName('a')[0].href;

		var spanner = document.createElement("span");
		spanner.classList.add("badge");
		spanner.classList.add("badge-front");
		spanner.classList.add("badge-new");
		spanner.innerHTML="Nyaa";

		var linky = document.createElement("a");
		linky.href = Q.replace("https://subsplease.org/shows/","https://nyaa.si/?f=0&c=1_2&q=").replaceAll("-","+");
		linky.setAttribute('target', '_blank');

		linky.appendChild(spanner);
		theText.getElementsByTagName('div')[0].appendChild(linky);
		}
	}, 1200);
  
}, false);