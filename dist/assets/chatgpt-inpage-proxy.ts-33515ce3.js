import{B as t}from"./browser-polyfill-5e752e65.js";import{s as n}from"./proxy-fetch-95bcdef2.js";function o(){const e=document.createElement("div");e.innerText="Please keep this tab open, now you can go back to ChatHub",e.style.position="fixed",e.style.top="0",e.style.right="0",e.style.zIndex="50",e.style.padding="10px",e.style.margin="10px",e.style.border="1px solid",e.style.color="red",document.body.appendChild(e)}async function i(){t.runtime.onMessage.addListener(async e=>{if(e==="url")return location.href}),window.__NEXT_DATA__&&(await t.runtime.sendMessage({event:"PROXY_TAB_READY"}),o())}n();i().catch(console.error);