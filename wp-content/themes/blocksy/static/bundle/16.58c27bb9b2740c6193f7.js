(window.blocksyJsonP=window.blocksyJsonP||[]).push([[16],{32:function(e,t,r){"use strict";r.r(t),r.d(t,"mount",(function(){return f}));var i=r(1),a=r.n(i),o=r(0),n=r.n(o);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}let d=null;const u={};const m=e=>{let{variation:t,productId:r,isQuickView:i}=e,a=new URL(ct_localizations.ajax_url),o=new URLSearchParams(a.search.slice(1));return o.append("action","blocksy_get_product_view_for_variation"),o.append("variation_id",t.variation_id),o.append("product_id",r),o.append("is_quick_view",i),a.search="?"+o.toString(),a.toString()},p=e=>{let{container:t,image:r}=e;const i=[];[".woocommerce-product-gallery > .ct-image-container",".woocommerce-product-gallery .flexy-items > *:first-child > *",".woocommerce-product-gallery .flexy-pills > ol > *:first-child > *"].map(e=>{t.parentNode.querySelector(e)&&i.push(t.parentNode.querySelector(e))}),i.map(e=>{if(e.href&&(e.href=r.full_src),e.dataset.height&&(e.dataset.height=r.full_src_h),e.dataset.width&&(e.dataset.width=r.full_src_w),[...e.querySelectorAll(".zoomImg")].map(e=>{e.remove()}),[...e.querySelectorAll("img")].map(e=>{e.matches(".zoomImg")||(e.getAttribute("width")&&(e.width=r.width),e.getAttribute("height")&&(e.height=r.height),e.src=r.src,e.sizes&&(e.sizes=r.sizes),r.srcset&&e.srcset&&"false"!==r.srcset?e.srcset=r.srcset:e.removeAttribute("srcset"))}),a.a.fn.zoom&&(window.wp&&wp.customize&&wp.customize("has_product_single_zoom")&&"yes"===wp.customize("has_product_single_zoom")()||!window.wp||!wp.customize)){const t=e.getBoundingClientRect();parseFloat(e.getAttribute("data-width"))>e.closest(".woocommerce-product-gallery").getBoundingClientRect().width&&a()(e).zoom(s(s({url:e.href,touch:!1,duration:50},t.width>parseFloat(e.dataset.width)||t.height>parseFloat(e.dataset.height)?{magnify:2}:{}),function(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}()?{on:"toggle"}:{}))}})},f=e=>{a.a&&a.a.fn&&a.a.fn.wc_variations_image_update&&(d=a.a.fn.wc_variations_image_update,a.a.fn.wc_variations_image_update=function(t){const r=this[0];if(r.closest(".woobt-products")||r.closest(".upsells")||r.closest(".related"))return;const i=e.closest(".product").querySelector(".woocommerce-product-gallery");let a=i.closest(".type-product"),o="no",c=a.id.replace("product-","");c||(c=i.closest('[class*="ct-quick-view"]').querySelector("[data-product_id]").dataset.product_id,c&&(o="yes"));const l=JSON.parse(e.dataset.product_variations);let d=!1,f=!1;if(l&&(d=!!t.variation_id&&l.find(e=>{let{variation_id:r}=e;return parseInt(r)===parseInt(t.variation_id)}),f=!!i.dataset.currentVariation&&l.find(e=>{let{variation_id:t}=e;return parseInt(t)===parseInt(i.dataset.currentVariation)})),!t.variation_id&&!i.dataset.currentVariation)return;if(parseInt(t.variation_id)===parseInt(i.dataset.currentVariation))return;if(t.variation_id?i.dataset.currentVariation=t.variation_id:i.removeAttribute("data-current-variation"),l&&[d,f].every(e=>!e||"default"===e.blocksy_gallery_source))return void(e=>{let{container:t,currentVariationObj:r,nextVariationObj:i}=e;const a=r?s({id:r.image_id},r.image):(i||{}).blocksy_original_image,o=i?s({id:i.image_id},i.image):(r||{}).blocksy_original_image;if(o&&parseFloat(o.id)!==parseFloat(a.id)){if(t.querySelector(".flexy-pills > *")){let e=t.querySelector(`.flexy-items [srcset*="${o.src}"]`);if(e){let r=[...t.querySelector(".flexy-items").children].indexOf(e.closest("div"));const a=t.querySelector(".flexy-pills > *").children[r];if(a)return t.querySelector("[data-flexy]").dataset.flexy.indexOf("no")>-1?(t.querySelector("[data-flexy]").forcedMount&&t.querySelector("[data-flexy]").forcedMount(),void setTimeout(()=>{i&&p({container:t,image:i.blocksy_original_image}),a.click()},500)):(i&&p({container:t,image:i.blocksy_original_image}),void a.click())}}if(p({container:t,image:o}),t.querySelector(".flexy-pills > *")){const e=t.querySelector(".flexy-pills > *").children[0];e&&e.click()}}})({container:i,nextVariationObj:d,currentVariationObj:f});const y=e=>{const t=document.createElement("div");t.innerHTML=e,[...t.firstElementChild.children].map((e,t)=>{e.matches(".flexy-container, .ct-image-container")||e.remove()}),[...i.children].map((e,t)=>{e.matches(".flexy-container, .ct-image-container")&&e.remove()}),i.insertAdjacentHTML("afterbegin",t.firstElementChild.innerHTML),i.hasLazyLoadClickHoverListener=!1,setTimeout(()=>{n.a.trigger("blocksy:frontend:init"),i.removeAttribute("data-state")})};if(t.blocksy_gallery_html)return void y(t.blocksy_gallery_html);i.removeAttribute("style"),requestAnimationFrame(()=>{i.dataset.state="loading"});let g=l?l.find(e=>u[m({variation:e,productId:c,isQuickView:o})]&&e.image_id===t.image_id&&"default"===t.blocksy_gallery_source&&"default"===e.blocksy_gallery_source):null;var _;(_=m({variation:g||t,productId:c,isQuickView:o}),u[_]?new Promise(e=>{e(u[_]),u[_]=u[_].clone()}):new Promise(e=>fetch(_).then(t=>{e(t),u[_]=t.clone()}))).then(e=>e.json()).then(e=>{let{success:t,data:r}=e;t&&y(r.html)})})}}}]);