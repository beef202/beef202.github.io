
!function ($) {
"use strict";
var Components = function () { };
//initializing tooltip
Components.prototype.initTooltipPlugin = function () {
$.fn.tooltip && $('[data-toggle="tooltip"]').tooltip()
},
//initializing popover
Components.prototype.initPopoverPlugin = function () {
$.fn.popover && $('[data-toggle="popover"]').popover()
},
//initializing Slimscroll
Components.prototype.initSlimScrollPlugin = function () {
$.fn.slimScroll && $(".slimscroll").slimScroll({
height: 'auto',
position: 'right',
size: "8px",
touchScrollStep: 20,
color: '#9ea5ab'
});
},
//initializing form validation
Components.prototype.initFormValidation = function () {
$(".needs-validation").on('submit', function (event) {
$(this).addClass('was-validated');
if ($(this)[0].checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
return false;
}
return true;
});
},
//initializing custom modal
Components.prototype.initCustomModalPlugin = function() {
$('[data-plugin="custommodal"]').on('click', function(e) {
e.preventDefault();
var modal = new Custombox.modal({
content: {
target: $(this).attr("href"),
effect: $(this).attr("data-animation")
},
overlay: {
color: $(this).attr("data-overlayColor")
}
});
54
// Open
modal.open();
});
},
//initilizing
Components.prototype.init = function () {
var $this = this;
this.initTooltipPlugin(),
this.initPopoverPlugin(),
this.initSlimScrollPlugin(),
this.initFormValidation(),
this.initCustomModalPlugin(),
this.initCounterUp(),
this.initPeityCharts(),
this.initKnob();
this.initTippyTooltips();
},
$.Components = new Components, $.Components.Constructor = Components
}(window.jQuery),
function($) {
"use strict";
/**
Portlet Widget
*/
var Portlet = function() {
this.$body = $("body"),
this.$portletIdentifier = ".card",
this.$portletCloser = '.card a[data-toggle="remove"]',
this.$portletRefresher = '.card a[data-toggle="reload"]'
};
//on init
Portlet.prototype.init = function() {
// Panel closest
var $this = this;
$(document).on("click",this.$portletCloser, function (ev) {
ev.preventDefault();
var $portlet = $(this).closest($this.$portletIdentifier);
var $portlet_parent = $portlet.parent();
$portlet.remove();
if ($portlet_parent.children().length == 0) {
$portlet_parent.remove();
}
});
// Panel Reload
$(document).on("click",this.$portletRefresher, function (ev) {
ev.preventDefault();
var $portlet = $(this).closest($this.$portletIdentifier);
// This is just a simulation, nothing is going to be reloaded
$portlet.append('<div class="card-disabled"><div class="card-portletsloader"></div></div>');
var $pd = $portlet.find('.card-disabled');
setTimeout(function () {
$pd.fadeOut('fast', function () {
$pd.remove();
});
}, 500 + 300 * (Math.random() * 5));
});
},
//
$.Portlet = new Portlet, $.Portlet.Constructor = Portlet
}(window.jQuery),
function ($) {
'use strict';
var App = function () {
this.$body = $('body'),
this.$window = $(window)
};
/**
Resets the scroll
*/
App.prototype._resetSidebarScroll = function () {
// sidebar - scroll container
$('.slimscroll-menu').slimscroll({
height: 'auto',
position: 'right',
size: "8px",
color: '#9ea5ab',
wheelStep: 5,
touchScrollStep: 20
});
},
// Topbar - main menu
$('.navbar-toggle').on('click', function (event) {
$(this).toggleClass('open');
$('#navigation').slideToggle(400);
});
$('.navigation-menu>li').slice(-2).addClass('last-elements');
$('.navigation-menu li.has-submenu a[href="#"]').on('click', function (e) {
if ($(window).width() < 992) {
e.preventDefault();
$(this).parent('li').toggleClass('open').find('.submenu:first').toggleClass('open');
}
});
// Preloader
$(window).on('load', function () {
$('#status').fadeOut();
$('#preloader').delay(350).fadeOut('slow');
});
}