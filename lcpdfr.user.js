// ==UserScript==
// @name         Ayy, lmao
// @namespace    https://www.lcpdfr.com/ayy/lmao
// @version      0.1
// @description  Ayy, lmao
// @author       Cayyan, lmao
// @match        https://www.lcpdfr.com/*
// @icon         https://icons.duckduckgo.com/ip2/lcpdfr.com.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function textNodesUnder(el){
		let n = []
		const a = []
		const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
		while((n = walk.nextNode())) {
			a.push(n);
        }
		return a;
	}
	const ayy = textNodesUnder(document.body);
	ayy.forEach(lmao => {
		lmao.textContent = 'ayy, lmao';
	});
	document.title = 'ayy, lmao';
	window.history.replaceState({}, 'ayy, lmao', 'https://www.lcpdfr.com/ayy/lmao');
})();
