/*! This minified app bundle contains open source software from several third party developers. Please review CREDITS.md in the root directory or LICENSE.md in the current directory for complete licensing, copyright and patent information. This file and the included code may not be redistributed without the attributions listed in LICENSE.md, including associate copyright notices and licensing information. */
!function(e,t){for(var n in t)e[n]=t[n]}(window,function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=1216)}({1216:function(e,t,n){"use strict";n.r(t),function(e){var t,i,o,s=n(240),l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t=e,i="object"===l(window.ET_Builder),o=t("body").hasClass("et-block-layout-preview"),
// Underscore may be freely distributed under the MIT license.
window.et_pb_debounce=function(e,t,n){var i,o,s,l,a,r=Date.now||(new Date).getTime(),_=function _(){var d=r-l;d<t&&d>=0?i=setTimeout(_,t-d):(i=null,n||(a=e.apply(s,o),i||(s=o=null)))};return function(){s=this,o=arguments,l=r;var d=n&&!i;return i||(i=setTimeout(_,t)),d&&(a=e.apply(s,o),s=o=null),a}},window.et_pb_smooth_scroll=function(e,n,i,o){var s,l,a=t(window).width();s=t("body").hasClass("et_fixed_nav")&&a>980?t("#top-header").outerHeight()+t("#main-header").outerHeight()-1:-1,t("#wpadminbar").length&&a>600&&(s+=t("#wpadminbar").outerHeight()),l=n?0:e.offset().top-s,void 0===o&&(o="swing"),t("html, body").animate({scrollTop:l},i,o)},window.et_pb_form_placeholders_init=function(t){t.find('input:text, input[type="email"], input[type="url"], textarea').each(function(t,n){var i=e(n),o=i.siblings("label"),s=i.siblings("label").text();o.length&&(o.hide(),i.siblings("span.required")&&(s+=i.siblings("span.required").text(),i.siblings("span.required").hide()),i.val(s))}).bind("focus",function(){var t=e(this).siblings("label").text();e(this).siblings("span.required").length&&(t+=e(this).siblings("span.required").text()),e(this).val()===t&&e(this).val("")}).bind("blur",function(){var t=e(this).siblings("label").text();e(this).siblings("span.required").length&&(t+=e(this).siblings("span.required").text()),""===e(this).val()&&e(this).val(t)})},window.et_duplicate_menu=function(e,n,o,s,l){n.each(function(){var n,a=t(this);""!==e&&e.clone().attr("id",o).removeClass().attr("class",s).appendTo(a),(n=a.find("> ul")).find(".menu_slide").remove(),n.find(".et_pb_menu__logo-slot").remove(),n.find("li:first").addClass("et_first_mobile_item"),n.find("a").on("click",function(){t(this).parents(".et_mobile_menu").siblings(".mobile_menu_bar").trigger("click")}),"no_click_event"!==l&&(i&&a.off("click"),a.on("click",".mobile_menu_bar",function(){return t(".mobile_nav.opened .mobile_menu_bar").not(t(this)).trigger("click"),a.hasClass("closed")?(a.removeClass("closed").addClass("opened"),n.stop().slideDown(500)):(a.removeClass("opened").addClass("closed"),n.stop().slideUp(500)),!1}))}),t("#mobile_menu .centered-inline-logo-wrap").remove()},window.et_pb_remove_placeholder_text=function(t){t.find("input:text, textarea").each(function(t,n){var i=e(n),o=i.siblings("label");i.siblings("label").text(),o.length&&o.is(":hidden")&&o.text()==i.val()&&i.val("")})},window.et_fix_fullscreen_section=function(){var e=t(o?s.a:window);t("section.et_pb_fullscreen").each(function(){var n=t(this);t.proxy(et_calc_fullscreen_section,n)(),e.on("resize",t.proxy(et_calc_fullscreen_section,n))})},window.et_bar_counters_init=function(e){e.length&&e.css({width:parseFloat(e.attr("data-width"))+"%"})},window.et_fix_pricing_currency_position=function(e){setTimeout(function(){var n=void 0!==e?e:t(".et_pb_pricing_table");n.length&&n.each(function(){var e=t(this).find(".et_pb_et_price"),n=!!e.length&&e.find(".et_pb_dollar_sign"),i=!!e.length&&e.find(".et_pb_sum");n&&i&&n.css({marginLeft:-n.width()+"px"})})},1)},window.et_pb_set_responsive_grid=function(e,n){setTimeout(function(){var i=e.innerWidth(),o=e.find(n),s=o.outerWidth(!0),l=s-o.outerWidth(),a=Math.round((i+l)/s),r=1,_=1,d=t();if(o.removeClass("last_in_row first_in_row on_last_row"),o.filter(":visible").each(function(){var e=t(this);e.hasClass("inactive")||(_===r?(e.addClass("first_in_row"),d=e):0==r%a&&(e.addClass("last_in_row"),_=r+1),r++)}),d.length){var u=d.parents(".et_pb_module");if(u.is(":last-child")){var c=d.parents(".et_pb_column")[0];t(c).find(".et_pb_grid_item").removeClass("on_last_row");var h=u.find(".et_pb_gallery_pagination");0===h.length&&(h=u.find(".et_pb_portofolio_pagination")),(0===h.length||h.length>0&&!h.is(":visible"))&&(a>1&&d.addClass("on_last_row"),d.nextAll().addClass("on_last_row"))}}},1)},window.et_pb_set_tabs_height=function(e){void 0===e&&(e=t(".et_pb_tabs")),e.length&&e.each(function(){var e=t(this).find(".et_pb_tabs_controls"),n=e.find("li"),i=0,o=t(this).parents(".et_pb_column_1_3, .et_pb_column_1_4, .et_pb_column_3_8").length>0,s=parseFloat(t(window).width())<768,l=o||s;l&&t(this).addClass("et_pb_tabs_vertically_stacked"),n.length&&(e.children("li").removeAttr("style"),n.each(function(){var e=t(this).outerHeight();l||e>i&&(i=e)})),0!==i&&e.children("li").css("height",i)})},window.et_pb_box_shadow_apply_overlay=function(e){void 0!==document.body.style.pointerEvents&&(void 0===document.documentMode||document.documentMode>=11)?t(e).each(function(){t(this).children(".box-shadow-overlay").length||t(this).addClass("has-box-shadow-overlay").prepend('<div class="box-shadow-overlay"></div>')}):t(e).addClass(".et-box-shadow-no-overlay")},window.et_pb_init_nav_menu=function(e){e.each(function(){var e=t(this);e.data("et-is-menu-ready")||(e.find("li").hover(function(){window.et_pb_toggle_nav_menu(t(this),"open")},function(){window.et_pb_toggle_nav_menu(t(this),"close")}),t("body").on("touchend",function(e){t(e.target).closest("ul.nav, ul.menu").length<1&&t(".et-hover").length>0&&window.et_pb_toggle_nav_menu(t(".et-hover"),"close")}),e.find("li.menu-item-has-children").on("touchend",function(e){var n=t(e.target).closest(".menu-item");if(n.hasClass("menu-item-has-children")){var i=t(this),o=n.closest(".mega-menu-parent.et-touch-hover").length>0;if(i.hasClass("et-touch-hover")||o)void 0!==i.find(">a").attr("href")&&(window.location=i.find(">a").attr("href"));else{var s=t(e.target),l=s.closest(".menu-item").siblings(".et-touch-hover");if(s.closest(".et-touch-hover").length<1&&window.et_pb_toggle_nav_menu(t(".et-hover"),"close",0),i.addClass("et-touch-hover"),l.length>0){var a=l.find(".et-touch-hover");window.et_pb_toggle_nav_menu(l,"close"),window.et_pb_toggle_nav_menu(a,"close")}window.et_pb_toggle_nav_menu(i,"open")}e.preventDefault(),e.stopPropagation()}}),e.find("li.mega-menu").each(function(){var e=t(this),n=e.children("ul").children("li").length;n<4&&e.addClass("mega-menu-parent mega-menu-parent-"+n)}),e.data("et-is-menu-ready","ready"))})},window.et_pb_toggle_nav_menu=function(e,t,n){if("open"===t)e.closest("li.mega-menu").length&&!e.hasClass("mega-menu")||(e.addClass("et-show-dropdown"),e.removeClass("et-hover").addClass("et-hover"));else{var i=void 0!==n?n:200;e.removeClass("et-show-dropdown"),e.removeClass("et-touch-hover"),setTimeout(function(){e.hasClass("et-show-dropdown")||e.removeClass("et-hover")},i)}},window.et_pb_apply_sticky_image_effect=function(e){var t=e.closest(".et_pb_row"),n=t.closest(".et_pb_section"),i=e.closest(".et_pb_column"),o=n.children(".et_pb_row").last(),s=t.children(".et_pb_column").last(),l=i.children(".et_pb_module").last();return!t.is(o)||(o.addClass("et-last-child"),!e.is(l)||(n.hasClass("et_pb_section_sticky")||n.addClass("et_pb_section_sticky"),i.addClass("et_pb_row_sticky"),void(!n.hasClass("et_pb_section_sticky_mobile")&&i.is(s)&&n.addClass("et_pb_section_sticky_mobile"))))},window.et_pb_menu_inject_inline_centered_logo=function(e){var n=t(e).find("nav > ul > li"),i=Math.round(n.length/2),o=window.et_pb_menu_inject_item(e,i,!0);return o&&t(o).addClass("et_pb_menu__logo-slot"),o},window.et_pb_menu_inject_item=function(e,n,i){i=void 0===i||i,n=Math.max(n,0);var o=t(e).find("nav > ul:first");if(0===o.length)return null;var s=o.find("> li"),l=t("<li></li>");if(0===s.length)o.append(l);else{var a=i?"before":"after",r=i?s.eq(n):s.eq(s.length-1-n);0===r.length&&(a=i?"after":"before",r=i?s.last():s.first()),r[a](l)}return l.get(0)},window.et_pb_reposition_menu_module_dropdowns=et_pb_debounce(function(e){t(e||".et_pb_menu, .et_pb_fullwidth_menu").each(function(){var e=t(this).find(".et_pb_row:first");if(0===e.length)return!0;var n=e.offset().top,i=t(this).attr("class").replace(/^.*?(et_pb(?:_fullwidth)?_menu_\d+[^\s]*).*$/i,"$1"),o=t(this).find(".et_pb_menu__menu ul:first").hasClass("upwards"),s="";t(this).find(".et_pb_menu__menu > nav > ul > li.mega-menu.menu-item-has-children").each(function(){var l=t(this),a=l.attr("class").replace(/^.*?(menu-item-\d+).*$/i,"$1"),r="."+i+" li."+a+" > .sub-menu";if(o){var _=Math.floor(n+e.outerHeight()-l.offset().top)-1;s+=r+"{ bottom: "+_.toString()+"px !important; }"}else _=Math.floor(l.offset().top+l.outerHeight()-n)-1,s+=r+"{ top: "+_.toString()+"px !important; }"});var l=t("style.et-menu-style-"+i+":first");0===l.length&&((l=t("<style></style>")).addClass("et-menu-style"),l.addClass("et-menu-style-"+i),l.appendTo(t("head")));var a=l.html();s!==a&&l.html(s)})},200)}.call(this,n(27))},240:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var i=window,o=void 0;try{o=!!window.top.document&&window.top}catch(e){o=!1}o&&o.__Cypress__?window.parent===o?i=window:i=window.parent:o&&(i=o,window.self)},27:function(e,t){e.exports=window.jQuery}}));
//# sourceMappingURL=frontend-builder-global-functions.js.map