// ==UserScript==
// @name         Amazon2Bookmeter
// @version      0.1
// @description  Amazonの書籍ページから読書メーターの書籍ページに遷移する
// @author       smasato
// @match        https://www.amazon.co.jp/*
// @grant        none
// ==/UserScript==

var href = document.location.href;
var isbn = href.split("/").pop();
const searchUrl = `https://bookmeter.com/search?keyword=${isbn}`;
fetch(searchUrl)
  .then((response) => {
    return response.text();
  })
  .then((text) => {
    var parser = new DOMParser();
    var doc = parser.parseFromString(text, "text/html");
    var bookmeterUrl = doc.querySelector(
      ".books.book-list.book-list--grid > ul > li:first-child > a"
    ).href;
    window.open(bookmeterUrl, "_blank");
  });
