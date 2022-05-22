// ==UserScript==
// @name		Steam Auto Activate agree
// @namespace	Angablade
// @author 		Angablade
// @description	Auto accepts external steam activation requests, to make the operation one click instead of 5.
// @version		1
// @grant		none
// @include		https://store.steampowered.com/account/registerkey?*
// ==/UserScript==

	document.getElementById("accept_ssa").checked = true;
	document.getElementById('register_btn').click();
	setTimeout(() => { window.close(); }, 1800);