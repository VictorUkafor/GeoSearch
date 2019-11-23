"use strict";var notFound=document.createElement("h1"),placeTitle=document.createElement("h1"),result=document.createElement("div"),landMark=document.createElement("div"),largeImage=document.createElement("div"),loader=document.createElement("div"),input=document.querySelector(".search-field"),submit=document.querySelector(".search-button");function changeTemp(e){var a=document.querySelector(".temp-item"),n=document.querySelector("#temp-button");if(localStorage.getItem("tempUnit"))if("F"===localStorage.getItem("tempUnit")){var t=((localStorage.getItem("tempValue")-32)*(5/9)).toFixed(2);localStorage.setItem("tempUnit","C"),localStorage.setItem("tempValue",t);var i='<i class="fa fa-circle condition-symbol"></i>\n        <span class="condition-name">Temperature:</span>\n        <span class="condition-value">'.concat(localStorage.getItem("tempValue"),'\n        <span class="condition-unit">\n        &#176;C</span></span>');a.innerHTML=i,n.innerHTML='<i class="fa fa-thermometer thermo"></i>\n        <span class="thermo-span">Convert &#176C to &#176F</span>'}else{var o=(1.8*localStorage.getItem("tempValue")+32).toFixed(2);localStorage.setItem("tempUnit","F"),localStorage.setItem("tempValue",o);var s='<i class="fa fa-circle condition-symbol"></i>\n        <span class="condition-name">Temperature:</span>\n        <span class="condition-value">'.concat(localStorage.getItem("tempValue"),'\n        <span class="condition-unit">\n        &#176;F</span></span>');a.innerHTML=s,n.innerHTML='<i class="fa fa-thermometer thermo"></i>\n        <span class="thermo-span">Convert &#176F to &#176C</span>'}else{localStorage.setItem("tempUnit","C");var c=(e-273.15).toFixed(2);localStorage.setItem("tempValue",c);var l='<i class="fa fa-circle condition-symbol"></i>\n        <span class="condition-name">Temperature:</span>\n        <span class="condition-value">'.concat(localStorage.getItem("tempValue"),'\n        <span class="condition-unit">\n        &#176;C</span></span>');a.innerHTML=l,n.innerHTML='<i class="fa fa-thermometer thermo"></i>\n        <span class="thermo-span">Convert &#176C to &#176F</span>'}}function switchMap(e,a){var n=document.querySelector("#switch-button"),t=document.querySelector(".result-map");if("map"!==localStorage.getItem("mapType")&&localStorage.getItem("mapType")){localStorage.setItem("mapType","map"),localStorage.setItem("mapNext","Earth");var i="https://www.mapquestapi.com/staticmap/v5/map?key=IvNAwSUNmSxFBKN37pVED3RuRscWNnGk&locations=".concat(e,",").concat(a,"&zoom=14&defaultMarker=marker-end&type=map");t.setAttribute("style","background-image: url('".concat(i,"');")),n.innerHTML='<i class="fa fa-toggle-on thermo"></i>\n        <span class="thermo-span">Switch to Earth View</span>'}else{localStorage.setItem("mapType","hyb"),localStorage.setItem("mapNext","Map");var o="https://www.mapquestapi.com/staticmap/v5/map?key=IvNAwSUNmSxFBKN37pVED3RuRscWNnGk&locations=".concat(e,",").concat(a,"&zoom=14&defaultMarker=marker-end&type=hyb");t.setAttribute("style","background-image: url('".concat(o,"');")),n.innerHTML='<i class="fa fa-toggle-off thermo"></i>\n        <span class="thermo-span">Switch to Map View</span>'}}function displayLarge(e){largeImage.classList.add("large-image"),largeImage.innerHTML='<div class="back">\n    <i class="fa fa-chevron-circle-left image-next" onclick="backLarge(\''.concat(e,'\');"></i></div>\n    <div class="image" style="background-image:url(\'').concat(e,'\')"></div>\n    <div class="next"><i class="top fa fa-times image-next" onclick="removeLarge();"></i>\n    <i class="bottom fa fa-chevron-circle-right image-next" onclick="nextLarge(\'').concat(e,"');\"></i></div>"),body.appendChild(largeImage),body.removeChild(main),body.removeChild(footer)}function removeLarge(){body.appendChild(main),body.removeChild(largeImage),body.appendChild(footer)}function nextLarge(e){var a=images.indexOf(e),n=a+1>images.length-1?0:a+1;displayLarge(images[n])}function backLarge(e){var a=images.indexOf(e),n="";n=0===a?images.length-1:a-1,displayLarge(images[n])}function resultPage(e,a){console.log("ffffffff",e),section.removeChild(intro),main.removeChild(features),section.classList.add("section2"),form.classList.add("result-field"),form.addEventListener("submit",(function(e){e.preventDefault(),resultSearch(e.target.search.value)})),input.classList.add("search-field2","remove-outline"),submit.classList.add("search-button2"),placeTitle.classList.add("place-title"),placeTitle.innerHTML='<span class="left">\n    Postal Code: '.concat(e.components.postcode?e.components.postcode:"Not Available",'\n    </span"><span class="right">Location: ').concat(e.formatted,"</span>"),main.appendChild(placeTitle),result.classList.add("result"),result.innerHTML='<div class="result-features">\n    <div class="weather-feature">\n    <div style="background-image: url(\'http://openweathermap.org/img/wn/'.concat(a.weather[0].icon,'@2x.png\');" class="weather-cloud"></div>\n\n    <div class="condition-box">\n    <p class="cloud-description">').concat(a.weather[0].description,'</p>\n    <ul>\n\n    <li class="temp-item"><i class="fa fa-circle condition-symbol"></i>\n    <span class="condition-name">Temperature:</span>\n    <span class="condition-value">\n    ').concat(localStorage.getItem("tempValue")||a.main.temp,'\n    <span class="condition-unit">&#176;').concat(localStorage.getItem("tempUnit")||"F",'</span></span></li>\n\n    <li><i class="fa fa-circle condition-symbol"></i>\n    <span class="condition-name">Pressure:</span>\n    <span class="condition-value">').concat(a.main.pressure,'\n    <span class="condition-unit">mb</span></span></li>\n\n    <li><i class="fa fa-circle condition-symbol"></i>\n    <span class="condition-name">Visibility:</span>\n    <span class="condition-value">').concat(a.visibility||"",'\n    <span class="condition-unit">').concat(a.visibility?"m":"N/A",'</span></span></li>\n\n    <li><i class="fa fa-circle condition-symbol"></i>\n    <span class="condition-name">Humidity:</span>\n    <span class="condition-value">').concat(a.main.humidity,'\n    <span class="condition-unit">%</span></span></li>\n\n    <li><i class="fa fa-circle condition-symbol"></i>\n    <span class="condition-name">Precipitation:</span>\n    <span class="condition-value">').concat(a.precipitation||"",'\n    <span class="condition-unit">').concat(a.precipitation?"mm":"N/A",'</span></span></li>\n\n    <li><i class="fa fa-circle condition-symbol"></i>\n    <span class="condition-name">Wind Speed:</span>\n    <span class="condition-value">').concat((2.237*a.wind.speed).toFixed(2),'\n    <span class="condition-unit">mi/hr</span></span></li>\n\n    <li><i class="fa fa-circle condition-symbol"></i>\n    <span class="condition-name">Wind Direction:</span>\n    <span class="condition-value">').concat(a.wind.deg,'\n    <span class="condition-unit">&#176;</span></span></li>\n\n    <li><i class="fa fa-circle condition-symbol"></i>\n    <span class="condition-name">Cloud Cover:</span>\n    <span class="condition-value">').concat(a.clouds.all,'\n    <span class="condition-unit"></span></span></li>\n\n    <li><i class="fa fa-circle condition-symbol"></i>\n    <span class="condition-name">Timezone:</span>\n    <span class="condition-value">').concat(1===Math.sign(a.timezone/3600)?"+":"").concat(a.timezone/3600,'\n    <span class="condition-unit">GMT</span></span></li>\n\n    </ul></div></div>\n\n    <div class="temp-feature">\n    <button id="temp-button" type="button" \n    onclick="changeTemp(\'').concat(a.main.temp,'\');">\n    <i class="fa fa-thermometer thermo"></i>\n    <span class="thermo-span">Convert \n    ').concat("C"===localStorage.getItem("tempUnit")?"&#176C to &#176F":"&#176F to &#176C",'\n    </span></button></div>\n\n    <div class="share-feature">\n    <button id="share-button" type="button">\n    <i class="fa fa-facebook thermo"></i>\n    <span class="thermo-span">Share to Facebook</span>\n    </button></div>\n\n    <div class="switch-feature" onclick="switchMap(\'').concat(e.geometry.lat,"', '").concat(e.geometry.lng,'\')">\n    <button id="switch-button" type="button">\n    <i class="fa ').concat("Earth"===localStorage.getItem("mapNext")?"fa-toggle-on":"fa-toggle-off",' thermo"></i>\n    <span class="thermo-span">Switch to ').concat(localStorage.getItem("mapNext")||"Earth",'  View</span>\n    </button></div>\n\n    </div>\n\n    <div class="result-map" style="background-image: \n    url(\'https://www.mapquestapi.com/staticmap/v5/map?key=IvNAwSUNmSxFBKN37pVED3RuRscWNnGk&locations=').concat(e.geometry.lat,",").concat(e.geometry.lng,"&zoom=14&defaultMarker=marker-end&type=").concat(localStorage.getItem("mapType")||"map","');\">\n    </div>"),main.appendChild(result),landMark.classList.add("land-mark"),main.appendChild(landMark),images.forEach((function(e){var a=document.createElement("div");a.style.backgroundImage="url(".concat(e,")"),a.addEventListener("click",(function(){displayLarge(e)})),landMark.appendChild(a)}))}function errorPage(e){section.classList.add("section2"),form.classList.add("result-field"),input.classList.add("search-field2","remove-outline"),submit.classList.add("search-button2"),notFound.classList.add("not-found"),notFound.textContent="".concat(e," Not Found!"),result.appendChild(notFound),main.appendChild(result)}function placeSearch(e){var a,n,t,i;return regeneratorRuntime.async((function(o){for(;;)switch(o.prev=o.next){case 0:return body.appendChild(loader),body.removeChild(main),body.removeChild(footer),loader.classList.add("loader"),o.prev=4,o.next=7,regeneratorRuntime.awrap(fetch("https://api.opencagedata.com/geocode/v1/json?q=".concat(e,"&key=25538790e2f94fa1be1032d20c21e732&language=en&pretty=1&no_annotations=1")));case 7:return a=o.sent,o.next=10,regeneratorRuntime.awrap(fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&APPID=1e32355a85c5965bc24316c27175c6a7")));case 10:return n=o.sent,o.next=13,regeneratorRuntime.awrap(a.json());case 13:return t=o.sent,o.next=16,regeneratorRuntime.awrap(n.json());case 16:i=o.sent,console.log("weather conditions",t,i),t.results[0]&&i?(body.removeChild(loader),body.appendChild(main),body.appendChild(footer),resultPage(t.results[0],i)):(body.removeChild(loader),body.appendChild(main),section.removeChild(intro),main.removeChild(features),body.appendChild(footer),errorPage(e)),o.next=29;break;case 21:o.prev=21,o.t0=o.catch(4),body.removeChild(loader),body.appendChild(main),section.removeChild(intro),main.removeChild(features),body.appendChild(footer),errorPage(e);case 29:case"end":return o.stop()}}),null,null,[[4,21]])}input.addEventListener("input",(function(){if(input.value.trim()){var e=new URLSearchParams(window.location.search);e.set("search",input.value.trim());var a="".concat(window.location.pathname,"?").concat(e.toString());history.pushState(null,"",a),submit.removeAttribute("disabled"),submit.classList.remove("no-text")}else submit.setAttribute("disabled","disabled"),submit.classList.add("no-text")})),form.addEventListener("submit",(function(e){e.preventDefault(),placeSearch(input.value.trim())})),window.addEventListener("load",(function(){var e=new URLSearchParams(window.location.search).get("search");e?placeSearch(e):input.value.trim()?(submit.removeAttribute("disabled"),submit.classList.remove("no-text")):(submit.setAttribute("disabled","disabled"),submit.classList.add("no-text"))}));