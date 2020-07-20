/*!
 * The Final Countdown for jQuery v2.1.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2015 Edson Hilios
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):e(jQuery)}(function(e){"use strict";function t(e){var t=e.toString().replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1");return new RegExp(t)}function a(e){return function(a){var s=a.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);if(s)for(var o=0,n=s.length;n>o;++o){var r=s[o].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),u=t(r[0]),c=r[1]||"",d=r[3]||"",p=null;r=r[2],l.hasOwnProperty(r)&&(p=l[r],p=Number(e[p])),null!==p&&("!"===c&&(p=i(d,p)),""===c&&10>p&&(p="0"+p.toString()),a=a.replace(u,p.toString()))}return a.replace(/%%/,"%")}}function i(e,t){var a="s",i="";return e&&(1===(e=e.replace(/(:|;|\s)/gi,"").split(/\,/)).length?a=e[0]:(i=e[0],a=e[1])),1===Math.abs(t)?i:a}var s=[],o=[],n={precision:100,elapse:!1};o.push(/^[0-9]*$/.source),o.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),o.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source),o=new RegExp(o.join("|"));var l={Y:"years",m:"months",n:"daysToMonth",w:"weeks",d:"daysToWeek",D:"totalDays",H:"hours",M:"minutes",S:"seconds"},r=function(t,a,i){this.el=t,this.$el=e(t),this.interval=null,this.offset={},this.options=e.extend({},n),this.instanceNumber=s.length,s.push(this),this.$el.data("countdown-instance",this.instanceNumber),i&&("function"==typeof i?(this.$el.on("update.countdown",i),this.$el.on("stoped.countdown",i),this.$el.on("finish.countdown",i)):this.options=e.extend({},n,i)),this.setFinalDate(a),this.start()};e.extend(r.prototype,{start:function(){null!==this.interval&&clearInterval(this.interval);var e=this;this.update(),this.interval=setInterval(function(){e.update.call(e)},this.options.precision)},stop:function(){clearInterval(this.interval),this.interval=null,this.dispatchEvent("stoped")},toggle:function(){this.interval?this.stop():this.start()},pause:function(){this.stop()},resume:function(){this.start()},remove:function(){this.stop.call(this),s[this.instanceNumber]=null,delete this.$el.data().countdownInstance},setFinalDate:function(e){this.finalDate=function(e){if(e instanceof Date)return e;if(String(e).match(o))return String(e).match(/^[0-9]*$/)&&(e=Number(e)),String(e).match(/\-/)&&(e=String(e).replace(/\-/g,"/")),new Date(e);throw new Error("Couldn't cast `"+e+"` to a date object.")}(e)},update:function(){if(0!==this.$el.closest("html").length){var t,a=void 0!==e._data(this.el,"events"),i=new Date;t=this.finalDate.getTime()-i.getTime(),t=Math.ceil(t/1e3),t=!this.options.elapse&&0>t?0:Math.abs(t),this.totalSecsLeft!==t&&a&&(this.totalSecsLeft=t,this.elapsed=i>=this.finalDate,this.offset={seconds:this.totalSecsLeft%60,minutes:Math.floor(this.totalSecsLeft/60)%60,hours:Math.floor(this.totalSecsLeft/60/60)%24,days:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToWeek:Math.floor(this.totalSecsLeft/60/60/24)%7,daysToMonth:Math.floor(this.totalSecsLeft/60/60/24%30.4368),totalDays:Math.floor(this.totalSecsLeft/60/60/24),weeks:Math.floor(this.totalSecsLeft/60/60/24/7),months:Math.floor(this.totalSecsLeft/60/60/24/30.4368),years:Math.abs(this.finalDate.getFullYear()-i.getFullYear())},this.options.elapse||0!==this.totalSecsLeft?this.dispatchEvent("update"):(this.stop(),this.dispatchEvent("finish")))}else this.remove()},dispatchEvent:function(t){var i=e.Event(t+".countdown");i.finalDate=this.finalDate,i.elapsed=this.elapsed,i.offset=e.extend({},this.offset),i.strftime=a(this.offset),this.$el.trigger(i)}}),e.fn.countdown=function(){var t=Array.prototype.slice.call(arguments,0);return this.each(function(){var a=e(this).data("countdown-instance");if(void 0!==a){var i=s[a],o=t[0];r.prototype.hasOwnProperty(o)?i[o].apply(i,t.slice(1)):null===String(o).match(/^[$A-Z_][0-9A-Z_$]*$/i)?(i.setFinalDate.call(i,o),i.start()):e.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi,o))}else new r(this,t[0],t[1])})}}),function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof module&&module.exports?require("jquery"):jQuery)}(function(e){function t(t,a){var s=this,o=e(s);if(s.value==o.attr("placeholder")&&o.hasClass(d.customClass))if(o.data("placeholder-password")){if(o=o.hide().nextAll('input[type="password"]:first').show().attr("id",o.removeAttr("id").data("placeholder-id")),!0===t)return o[0].value=a;o.focus()}else s.value="",o.removeClass(d.customClass),s==i()&&s.select()}function a(){var a,i=this,s=e(i),o=this.id;if(""===i.value){if("password"===i.type){if(!s.data("placeholder-textinput")){try{a=s.clone().prop({type:"text"})}catch(t){a=e("<input>").attr(e.extend(function(t){var a={},i=/^jQuery\d+$/;return e.each(t.attributes,function(e,t){t.specified&&!i.test(t.name)&&(a[t.name]=t.value)}),a}(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":s,"placeholder-id":o}).bind("focus.placeholder",t),s.data({"placeholder-textinput":a,"placeholder-id":o}).before(a)}s=s.removeAttr("id").hide().prevAll('input[type="text"]:first').attr("id",o).show()}s.addClass(d.customClass),s[0].value=s.attr("placeholder")}else s.removeClass(d.customClass)}function i(){try{return document.activeElement}catch(e){}}var s,o,n="[object OperaMini]"==Object.prototype.toString.call(window.operamini),l="placeholder"in document.createElement("input")&&!n,r="placeholder"in document.createElement("textarea")&&!n,u=e.valHooks,c=e.propHooks;if(l&&r)(o=e.fn.placeholder=function(){return this}).input=o.textarea=!0;else{var d={};(o=e.fn.placeholder=function(i){d=e.extend({},{customClass:"placeholder"},i);return this.filter((l?"textarea":":input")+"[placeholder]").not("."+d.customClass).bind({"focus.placeholder":t,"blur.placeholder":a}).data("placeholder-enabled",!0).trigger("blur.placeholder"),this}).input=l,o.textarea=r,s={get:function(t){var a=e(t),i=a.data("placeholder-password");return i?i[0].value:a.data("placeholder-enabled")&&a.hasClass(d.customClass)?"":t.value},set:function(s,o){var n=e(s),l=n.data("placeholder-password");return l?l[0].value=o:n.data("placeholder-enabled")?(""===o?(s.value=o,s!=i()&&a.call(s)):n.hasClass(d.customClass)&&t.call(s,!0,o)||(s.value=o),n):s.value=o}},l||(u.input=s,c.value=s),r||(u.textarea=s,c.value=s),e(function(){e(document).delegate("form","submit.placeholder",function(){var i=e("."+d.customClass,this).each(t);setTimeout(function(){i.each(a)},10)})}),e(window).bind("beforeunload.placeholder",function(){e("."+d.customClass).each(function(){this.value=""})})}}),function(e){e(window).load(function(){e("#loader").fadeOut("slow",function(){e("#preloader").delay(300).fadeOut("slow")})});e("div#counter").countdown("2020/09/28").on("update.countdown",function(t){e(this).html(t.strftime("<span>%D <em>days</em></span><span>%H <em>hours</em></span><span>%M <em>minutes</em></span><span>%S <em>seconds</em></span>"))}),e("input").placeholder(),e(".modal-toggles ul").on("click","a",function(t){var a=e("html"),i=e("main, footer"),s=(e("footer"),e(this).attr("href")),o=e(s),n=o.find("#modal-close");i.fadeOut(500,function(){e("html,body").scrollTop(0),o.addClass("is-visible")}),t.preventDefault(),a.hasClass("oldie")?e(document).on("click","#modal-close",function(t){e("html,body").scrollTop(0),o.removeClass("is-visible"),setTimeout(function(){i.fadeIn(500)},500),t.preventDefault()}):n.on("click",function(t){e("html,body").scrollTop(0),o.removeClass("is-visible"),setTimeout(function(){i.fadeIn(500)},500),t.preventDefault()})}),e("#owl-slider").owlCarousel({navigation:!1,pagination:!0,items:4,navigationText:!1}),setTimeout(function(){e("main h1, #mod-about h1").fitText(1.1,{minFontSize:"28px",maxFontSize:"38px"})},100);e("#mc-form").ajaxChimp({language:"es",url:"http://facebook.us8.list-manage.com/subscribe/post?u=cdb7b577e41181934ed6a6a44&amp;id=e65110b38d"}),e.ajaxChimp.translations.es={submit:"Submitting...",0:'<i class="fa fa-check"></i> We have sent you a confirmation email',1:'<i class="fa fa-warning"></i> You must enter a valid e-mail address.',2:'<i class="fa fa-warning"></i> E-mail address is not valid.',3:'<i class="fa fa-warning"></i> E-mail address is not valid.',4:'<i class="fa fa-warning"></i> E-mail address is not valid.',5:'<i class="fa fa-warning"></i> E-mail address is not valid.'};var t=e(window).width();marker_url=t>480?"images/icon-location-b.png":"images/icon-location.png";var a=[{elementType:"labels",stylers:[{saturation:-30}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road.arterial",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"poi",elementType:"geometry.fill",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"poi.government",elementType:"geometry.fill",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"poi.sport_complex",elementType:"geometry.fill",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"poi.attraction",elementType:"geometry.fill",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"poi.business",elementType:"geometry.fill",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"transit",elementType:"geometry.fill",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"transit.station",elementType:"geometry.fill",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"landscape",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"road",elementType:"geometry.fill",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]},{featureType:"water",elementType:"geometry",stylers:[{hue:"#d8ac00"},{visibility:"on"},{lightness:5},{saturation:-30}]}],i={center:new google.maps.LatLng(14.549072,121.046958),zoom:15,panControl:!1,zoomControl:!1,mapTypeControl:!1,streetViewControl:!1,mapTypeId:google.maps.MapTypeId.ROADMAP,scrollwheel:!1,styles:a},s=new google.maps.Map(document.getElementById("map-container"),i);new google.maps.Marker({position:new google.maps.LatLng(14.549072,121.046958),map:s,visible:!0,icon:marker_url});var o=document.createElement("div");new function(e,t){var a=document.getElementById("map-zoom-in"),i=document.getElementById("map-zoom-out");e.appendChild(a),e.appendChild(i),google.maps.event.addDomListener(a,"click",function(){t.setZoom(t.getZoom()+1)}),google.maps.event.addDomListener(i,"click",function(){t.setZoom(t.getZoom()-1)})}(o,s);s.controls[google.maps.ControlPosition.TOP_RIGHT].push(o)}(jQuery);