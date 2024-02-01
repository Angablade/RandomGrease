// ==UserScript==
// @name         HDHR signal updater.
// @version      0.2
// @description  Keeps signal info updated.
// @author       ANGABLADE
// @match        http://*/tuners.html*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function updateTableData() {
        fetch(window.location.href)
            .then(response => response.text())
            .then(responseText => {
                // Extract and replace table data
                var newTableData = extractTableData(responseText);
                replaceTable(newTableData);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }

    function extractTableData(responseText) {
        var startTag = '<table>';
        var endTag = '</table>';
        var startIndex = responseText.indexOf(startTag);
        var endIndex = responseText.indexOf(endTag);

        if (startIndex !== -1 && endIndex !== -1) {
            return responseText.substring(startIndex, endIndex + endTag.length);
        } else {
            console.error('Table data not found in the response');
            return '';
        }
    }

    function replaceTable(newTableData) {
        var existingTable = document.querySelector('table');
        if (existingTable) {
            existingTable.outerHTML = newTableData;
        } else {
            console.error('Existing table not found on the page');
        }
    }

    updateTableData();
  
    setInterval(updateTableData, 1000);
})();
