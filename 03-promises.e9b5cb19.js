function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector("button"),u=document.querySelector("form");l.addEventListener("click",function(t){t.preventDefault();let o=Number(u.delay.value),n=Number(u.step.value),r=Number(u.amount.value);for(let t=0;t<r;t++)(function(e,t){return new Promise((o,n)=>{setTimeout(()=>{let r={position:e,delay:t};Math.random()>.3?o(r):n(r)},t)})})(t+1,o+n*t).then(t=>{e(i).Notify.success(`Fulfilled promise ${t.position} in ${t.delay} ms`)}).catch(t=>{e(i).Notify.failure(`Rejected promise ${t.position} in ${t.delay} ms`)})});
//# sourceMappingURL=03-promises.e9b5cb19.js.map
