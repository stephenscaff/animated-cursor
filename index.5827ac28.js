function e(e,r,t){return(1-t)*e+t*r}function r(e,r){e=e.replace("#","");const t=parseInt(3==e.length?e.slice(0,1).repeat(2):e.slice(0,2),16),o=parseInt(3==e.length?e.slice(1,2).repeat(2):e.slice(2,4),16),n=parseInt(3==e.length?e.slice(2,3).repeat(2):e.slice(4,6),16);return 0===r?`rgba(${t}, ${o}, ${n}, 0)`:r?`rgba(${t}, ${o}, ${n}, ${r})`:`rgb(${t}, ${o}, ${n})`}function t(e,r){var t=document.querySelector(e);for(var o in r)t.style[o]=r[o]}const o={cursorInnerSelector:"#cursor-inner",cursorOuterSelector:"#cursor-outer",hasRequiredStyles:!0,color:"#D3245C",outerAlpha:.3,outerBorderSize:0,size:{inner:8,outer:40},hoverScale:{inner:.75,outer:1.5},clickScale:{inner:1.5,outer:.13},trailingSpeed:.2,clickables:["a",'input[type="text"]','input[type="email"]','input[type="number"]','input[type="submit"]','input[type="image"]',"label[for]","select","textarea","button",".link"]};function n(n){let s=Object.assign({},o,n),i={cursorInner:document.querySelector(s.cursorInnerSelector),cursorOuter:document.querySelector(s.cursorOuterSelector),hasRequiredStyles:s.hasRequiredStyles,targetPos:{x:.5,y:.5},cursorPos:{x:.5,y:.5},endX:window.innerWidth/2,endY:window.innerHeight/2,raf:requestAnimationFrame(u),cursorVisible:!0,isScaled:!1,isClicking:!1};function c(e){var r,t;i.isVisible=!0,l(),i.targetPos.x=e.clientX,i.targetPos.y=e.clientY,r=e.clientY,t=e.clientX,i.cursorInner.style.top=`${r}px`,i.cursorInner.style.left=`${t}px`,i.raf||(i.raf=requestAnimationFrame(u))}function u(){i.cursorPos.x=e(i.cursorPos.x,i.targetPos.x,s.trailingSpeed),i.cursorPos.y=e(i.cursorPos.y,i.targetPos.y,s.trailingSpeed),i.cursorOuter.style.top=`${i.cursorPos.y}px`,i.cursorOuter.style.left=`${i.cursorPos.x}px`;if(Math.sqrt(Math.pow(i.targetPos.x-i.cursorPos.x,2)+Math.pow(i.targetPos.y-i.cursorPos.y,2))<.001)return window.cancelAnimationFrame(i.raf),void(i.raf=null);i.raf=requestAnimationFrame(u)}function l(){i.isVisible?(i.cursorInner.style.opacity=1,i.cursorOuter.style.opacity=1):(i.cursorInner.style.opacity=0,i.cursorOuter.style.opacity=0)}function a(){i.isClicking?(i.cursorInner.style.transform=`translate(-50%, -50%) scale(${s.clickScale.inner})`,i.cursorOuter.style.transform=`translate(-50%, -50%) scale(${s.clickScale.outer})`):i.isScaled?(i.cursorInner.style.transform=`translate(-50%, -50%) scale(${s.hoverScale.inner})`,i.cursorOuter.style.transform=`translate(-50%, -50%) scale(${s.hoverScale.outer})`):(i.cursorInner.style.transform="translate(-50%, -50%) scale(1)",i.cursorOuter.style.transform="translate(-50%, -50%) scale(1)")}return{init:function(){window.addEventListener("mousemove",c),document.querySelectorAll(s.clickables.join(",")).forEach((e=>function(e){e.style.cursor="none",e.addEventListener("mouseover",(()=>{i.isScaled=!0,a()})),e.addEventListener("mouseout",(()=>{i.isScaled=!1,a()}))}(e))),document.addEventListener("mousedown",(()=>{i.isClicking=!0,a()})),document.addEventListener("mouseup",(()=>{i.isScaled=!1,i.isClicking=!1,a()})),document.addEventListener("mouseleave",(e=>{var r;((r=e).clientY<=0||r.clientX<=0||r.clientX>=window.innerWidth||r.clientY>=window.innerHeight)&&(i.isVisible=!1,l())})),i.isVisible=!1,l(),s.hasRequiredStyles&&function(){const e={"pointer-events":"none",position:"fixed","border-radius":"50%",opacity:0,transform:"translate(-50%, -50%)",transition:"opacity 0.25s ease-in-out, transform 0.25s ease-in-out"};t(s.cursorInnerSelector,e),t(s.cursorOuterSelector,e)}(),s.outerBorderSize>0&&i.cursorOuter.style.setProperty("border",`${s.outerBorderSize}px solid ${s.color}`),function(){const e=r(s.color),t=r(s.color,s.outerAlpha);i.cursorInner.style.setProperty("background-color",e),i.cursorOuter.style.setProperty("background-color",t)}(),i.cursorInner.style.setProperty("width",`${s.size.inner}px`),i.cursorInner.style.setProperty("height",`${s.size.inner}px`),i.cursorOuter.style.setProperty("width",`${s.size.outer}px`),i.cursorOuter.style.setProperty("height",`${s.size.outer}px`)}}}n.options=o;var s=n;if(document.querySelector("#cursor")){s().init()}if(document.querySelector("#cursor-donut")){s({cursorInnerSelector:"#donut-cursor-inner",cursorOuterSelector:"#donut-cursor-outer",color:"#0ff",outerAlpha:.1,outerBorderSize:3,size:{inner:8,outer:38},hoverScale:{inner:.5,outer:1.4},clickScale:{inner:1.4,outer:.1}}).init()}
//# sourceMappingURL=index.5827ac28.js.map
