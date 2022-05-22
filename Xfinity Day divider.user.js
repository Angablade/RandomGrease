// ==UserScript==
// @name    	Xfinity Day divider
// @namespace	Angablade
// @author 		Angablade
// @description	Shows your daily average usage inline below the usage graph.
// @version	  	1
// @grant   	none
// @include		https://customer.xfinity.com/#/services/internet#usage
// @include		https://customer.xfinity.com/#/services/internet
// ==/UserScript==
  setTimeout(function () {
    var x = document.getElementsByClassName("usage-info__monthlyInfo")[0];
    var y = x.firstElementChild;
    var z = y.firstElementChild;
    var r = z.innerHTML.split(" ")[0];
    
    r = r.replace("<b>", "");
    r = r.replace("</b>", "");
    r = r.slice(0, -2);
    var q = Number(r);
    
		var date = new Date();
		var time = new Date(date.getTime());
    time.setMonth(date.getMonth() + 1);
    time.setDate(0);
    var days = time.getDate() > date.getDate() ? time.getDate() - date.getDate() : 0;
    var p = Number(days) + 1;
    
    
    z.innerHTML = z.innerHTML + "  [<b>" + Math.floor(q / p) + "GB/day</b>]  ";
  }, 11000);