var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("UDlvM"),s=o("dEdDu"),a=o("l5ICX"),i=o("c1Bmg");const c=document.querySelector(".js-search"),l=document.querySelector(".js-list");var d;const u=null!==(d=JSON.parse(localStorage.getItem(r.common.KEY_FAVORITE)))&&void 0!==d?d:[];var f;const m=null!==(f=JSON.parse(localStorage.getItem(r.common.KEY_BASKET)))&&void 0!==f?f:[];function g(e){const t=Number(e.closest(".js-card").dataset.id);return i.instruments.find((({id:e})=>e===t))}l.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-info")){const t=g(e.target);(0,a.createModal)(t)}if(e.target.classList.contains("js-favorite")){const t=g(e.target);if(u.some((({id:e})=>e===t.id)))return;u.push(t),localStorage.setItem(r.common.KEY_FAVORITE,JSON.stringify(u))}if(e.target.classList.contains("js-basket")){const t=g(e.target);m.push(t),localStorage.setItem(r.common.KEY_BASKET,JSON.stringify(m))}})),(0,s.createMarkup)(i.instruments,l),c.addEventListener("input",(function(){const e=c.value.toLowerCase(),t=i.instruments.filter((t=>t.name.toLowerCase().includes(e)));(0,s.createMarkup)(t,l)}));
//# sourceMappingURL=index.6e9807a0.js.map
