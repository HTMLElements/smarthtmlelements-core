
/* Smart HTML Elements v1.0.0 (2018-April) 
Copyright (c) 2011-2018 jQWidgets. 
License: http://htmlelements.com/pricing/ */

 "use strict";Smart("smart-button",function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"scopedStyle",value:function(){return babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"scopedStyle",this).call(this)+"\n                :host {\n                    display: inline-block;\n                }\n                :host-context(.smart-button-large) #button {\n                    padding: 10px 16px;\n                    font-size: 18px;\n                    line-height: 1.3333333;\n                }\n                :host-context(.smart-button-small) #button {\n                    padding: 5px 10px;\n                    font-size: 12px;\n                    line-height: 1.5;\n                }\n                :host-context(.smart-button-very-small) #button {\n                    padding: 1px 5px;\n                    font-size: 12px;\n                    line-height: 1.5;\n                }\n                :host-context(.smart-button) #button {\n                    padding: 6px 12px;\n                    margin-bottom: 0;\n                    font-size: 14px;\n                    font-weight: 400;\n                    line-height: 1.42857143;\n                }\n                #button {\n                    padding: 1px 2px 1px 2px;\n                    text-align: center;\n                    vertical-align: central;\n                    color: var(--smart-color);\n                    border: 1px solid var(--smart-border-color);\n                    background: var(--smart-background-color, blue);\n                    cursor: pointer;\n                }\n                #button:focus {\n                    color: var(--smart-focus-color);\n                    border-color: var(--smart-focus-border-color);\n                    background-color: var(--smart-focus-background-color);\n                }\n                #button.hover {\n                  color: var(--smart-hover-color);\n                  border-color: var(--smart-hover-border-color);\n                  background-color: var(--smart-hover-background-color);\n                  transition: background-color 100ms linear;\n                }\n                #button:active,\n                #button.active {\n                    color: var(--smart-active-color);\n                    border-color: var(--smart-active-border-color);\n                    background-color: var(--smart-active-background-color);\n                    transition: background-color 100ms linear;\n                }\n                #button[disabled] {\n                    color: var(--smart-disabled-color);\n                    border-color: var(--smart-disabled-border-color);\n                    background-color: var(--smart-disabled-background-color);\n                    cursor: default;\n                }\n            "}},{key:"template",value:function(){return"<button class='smart-button' inner-h-t-m-l='[[innerHTML]]' id='button' type='[[type]]' name='[[name]]' value='[[value]]' disabled='[[disabled]]' role='button'></button>"}},{key:"_clickHandler",value:function(e){var t=this;("release"!==t.clickMode&&"pressAndRelease"!==t.clickMode||t.readonly)&&(e.preventDefault(),e.stopPropagation())}},{key:"_mouseDownHandler",value:function(e){var t=this;if(!(t.disabled||(e.originalEvent.stopPropagation(),t.className.indexOf("material")>-1&&Smart.Utilities.Animation.Ripple.animate(t,e.pageX,e.pageY),"press"!==t.clickMode&&"pressAndRelease"!==t.clickMode||t.readonly))){var n="buttons"in e?e.buttons:e.which;t.$.fireEvent("click",{buttons:n,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY})}}},{key:"_mouseEnterHandler",value:function(e){var t=this;if(!t.readonly&&(t.$button.addClass("hover"),"hover"===t.clickMode)){var n="buttons"in e?e.buttons:e.which;t.$.fireEvent("click",{buttons:n,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY})}}},{key:"_touchEndHandler",value:function(){var e=this;setTimeout(function(){e.$button.removeClass("hover")},300)}},{key:"_mouseLeaveHandler",value:function(){this.$button.removeClass("hover")}},{key:"propertyChangedHandler",value:function(e,n,r){babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"propertyChangedHandler",this).call(this,e,n,r);var a=this;"disabled"===e?(a._setFocusable(),a.$button&&a.$button.removeClass("hover"),a instanceof Smart.RepeatButton&&a._stopRepeat()):"unfocusable"===e&&a._setFocusable()}},{key:"_setFocusable",value:function(){var e=this,t=e.$.button?e.$.button:e;if(e.disabled||e.unfocusable)return t.removeAttribute("tabindex"),void(t.tabIndex=-1);t.tabIndex=e.tabIndex>0?e.tabIndex:0}},{key:"ready",value:function(){var e=this;babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ready",this).call(this),e._setFocusable()}}],[{key:"properties",get:function(){return{value:{type:"string"},name:{type:"string"},type:{type:"string"},clickMode:{allowedValues:["hover","press","release","pressAndRelease"],type:"string",value:"release"}}}},{key:"listeners",get:function(){return{"button.down":"_mouseDownHandler","button.mouseenter":"_mouseEnterHandler","button.mouseleave":"_mouseLeaveHandler","button.touchend":"_touchEndHandler","button.click":"_clickHandler"}}}]),t}(Smart.ContentElement)),Smart("smart-repeat-button",function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"_clickHandler",value:function(e){var t=this;("release"!==t.clickMode||t.preventDefaultClick||t.readonly||t.disabled)&&(e.preventDefault(),e.stopPropagation(),t.preventDefaultClick=!1)}},{key:"_updateInBoundsFlag",value:function(e){var t=this;t._isPointerInBounds=!0,"mouseleave"===e.type&&(t._isPointerInBounds=!1),1!==("buttons"in e?e.buttons:e.which)&&t._stopRepeat()}},{key:"_startRepeat",value:function(e){var t=this;t._initialTimer||t.readonly||(t._initialTimer=setTimeout(function(){t._repeatTimer=setInterval(function(){if(t._isPointerInBounds){var n="buttons"in e?e.buttons:e.which;t.$.fireEvent("click",{buttons:n,clientX:e.clientX,clientY:e.clientY,pageX:e.pageX,pageY:e.pageY,screenX:e.screenX,screenY:e.screenY}),t.preventDefaultClick=!0}},t.delay)},t.initialDelay))}},{key:"_stopRepeat",value:function(){var e=this;e.readonly||(e._repeatTimer&&(clearInterval(e._repeatTimer),e._repeatTimer=null),e._initialTimer&&(clearTimeout(e._initialTimer),e._initialTimer=null))}}],[{key:"properties",get:function(){return{delay:{value:50,type:"number"},initialDelay:{value:150,type:"number"}}}},{key:"listeners",get:function(){return{"button.mousedown":"_startRepeat","button.mouseenter":"_updateInBoundsFlag","button.mouseleave":"_updateInBoundsFlag","document.mouseup":"_stopRepeat"}}}]),t}(Smart.Button)),Smart("smart-toggle-button",function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"ready",value:function(){babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ready",this).call(this)}},{key:"_buttonClickHandler",value:function(){}},{key:"_buttonMouseEnterHandler",value:function(){var e=this;e.disabled||e.readonly||"hover"!==e.clickMode||(e._changeCheckState("pointer"),e.focus(),e._updateHidenInputNameAndValue())}},{key:"_documentUpHandler",value:function(){var e=this;e._pressed&&(e._pressed=!1,e.disabled||e.readonly||"press"===e.clickMode||(e._changeCheckState("pointer"),e.focus(),e._updateHidenInputNameAndValue()))}},{key:"_mouseDownHandler",value:function(e){var t=this;t.disabled||t.readonly||(t.className.indexOf("material")>-1&&Smart.Utilities.Animation.Ripple.animate(t,e.pageX,e.pageY),t._pressed=!0,"press"!==t.clickMode&&"pressAndRelease"!==t.clickMode||(t._changeCheckState("pointer"),t.$.fireEvent("click"),t._updateHidenInputNameAndValue()),"press"===t.clickMode&&(e.preventDefault(),e.stopPropagation()))}},{key:"_dragStartHandler",value:function(e){e.preventDefault()}},{key:"_keyUpHandler",value:function(e){var t=this;!0===t.disabled||t.readonly||32!==e.keyCode||(t._changeCheckState("keyboard"),t._updateHidenInputNameAndValue())}},{key:"_changeCheckState",value:function(e){var t=this,n=null;null===t.checked?t.checked=!0:(n=t.checked,t.checked=!t.checked),t._handleTextSelection(),t.$.fireEvent("change",{value:t.checked,oldValue:n,changeType:e})}},{key:"_handleTextSelection",value:function(){var e=this;e.$.addClass("smart-unselectable"),e.timer&&clearTimeout(e.timer),e.timer=setTimeout(function(){return e.$.removeClass("smart-unselectable")},500)}},{key:"propertyChangedHandler",value:function(e,n,r){babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"propertyChangedHandler",this).call(this,e,n,r);var a=this;"checked"===e&&a.$.fireEvent("change",{value:r,oldValue:n,changeType:"api"})}},{key:"_htmlBindOnInitialization",value:function(){var e=this;e._bindContentProperty("trueContent","smart-true-content"),e._bindContentProperty("falseContent","smart-false-content"),e._bindContentProperty("indeterminateContent","smart-indeterminate-content")}},{key:"_bindContentProperty",value:function(e,t){var n=this;if(n.$[e+"Container"]){var r=document.createElement("div");r.innerHTML=n.innerHTML;var a=r.getElementsByClassName(t),o=void 0;if(a.length>0)for(var l=0;l<a.length;l++)o=a[l];""===n[e]&&(n[e]=void 0===o?"":o.outerHTML),n.$[e+"Container"].innerHTML=n[e]}}},{key:"_updateContentProperties",value:function(){function e(e){t.$[e+"Container"]&&(t[e]=t.$[e+"Container"].innerHTML)}var t=this;e("trueContent"),e("falseContent"),e("indeterminateContent")}},{key:"_updateHidenInputValue",value:function(){var e=this;if(e.$.hiddenInput){var t=void 0;t=null===e.checked?"null":!1===e.checked?"off":e.value||"on",e.$.hiddenInput.setAttribute("value",t)}}},{key:"_updateHidenInputName",value:function(){var e=this;if(e.$.hiddenInput){var t=!1===e.checked?"":e.name||"";e.$.hiddenInput.setAttribute("name",t)}}},{key:"_updateHidenInputNameAndValue",value:function(){var e=this;e._updateHidenInputName(),e._updateHidenInputValue()}}],[{key:"properties",get:function(){return{checked:{value:!1,type:"boolean?"},falseContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminateContent:{value:"",reflectToAttribute:!1,type:"string"},indeterminate:{value:!1,type:"boolean"},trueContent:{value:"",reflectToAttribute:!1,type:"string"}}}},{key:"listeners",get:function(){return{keyup:"_keyUpHandler",dragstart:"_dragStartHandler","button.click":"_buttonClickHandler","button.mouseenter":"_buttonMouseEnterHandler","document.up":"_documentUpHandler"}}}]),t}(Smart.Button));
//# sourceMappingURL=smart.button.js.map