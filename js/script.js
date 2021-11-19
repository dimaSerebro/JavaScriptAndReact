"use strict";

const p = document.querySelectorAll('p');
console.log(p);




function loadScrip(src) {

    const script = document.createElement('script');
    script.src = src;
    script.async = false; 
    document.body.append(script);

}

loadScrip("js/test.js");
loadScrip("js/some.js");