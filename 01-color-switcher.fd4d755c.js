const e=document.querySelector("body"),t=document.querySelector("[data-start]"),d=document.querySelector("[data-stop]");let a=null;d.disabled=!0,t.addEventListener("click",(function(){a=setInterval((()=>{e.style.background=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),d.disabled=!1,t.disabled=!0})),d.addEventListener("click",(function(){clearInterval(a),d.disabled=!0,t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.fd4d755c.js.map