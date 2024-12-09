// ==UserScript==
// @name         ChatGPT Auto Stay logged out
// @namespace    http://tampermonkey.net/
// @version      2024-12-08
// @description  Automatically click "Stay logged out" in ChatGPT login reminder popup
// @author       You
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const observer = new MutationObserver((mutationsList, observer) => {
      const stayLoggedOutButton = document.querySelector('[id^="radix-\\:"] > div > div > a');
      if (stayLoggedOutButton) {
        console.log("CHATGPT AUTO STAY: EXECUTED");
        stayLoggedOutButton.click();
        observer.disconnect(); // Stop observing once the element is found and clicked
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
})();

