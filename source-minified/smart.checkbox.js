
/* Smart HTML Elements v1.0.0 (2018-April) 
Copyright (c) 2011-2018 jQWidgets. 
License: http://htmlelements.com/pricing/ */

 "use strict";Smart("smart-check-box",function(e){function t(){return babelHelpers.classCallCheck(this,t),babelHelpers.possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return babelHelpers.inherits(t,e),babelHelpers.createClass(t,[{key:"template",value:function(){return"<div id='container' class='smart-container'>\n                 <div id='checkBoxAnimation' class ='smart-animation'></div>\n                 <span id='checkBoxInput' class ='smart-input'></span>\n                 <span id='checkBoxLabel' inner-h-t-m-l='[[innerHTML]]' class ='smart-label'><content></content></span>\n                 <input id='hiddenInput' class ='smart-hidden-input' type='hidden'>\n               </div>"}},{key:"ready",value:function(){var e=this;babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"ready",this).call(this),e.indeterminate&&(e._valueCashe=e.checked,e.checked=null),e._updateHidenInputNameAndValue()}},{key:"propertyChangedHandler",value:function(e,n,a){babelHelpers.get(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"propertyChangedHandler",this).call(this,e,n,a);var i=this;switch(i._updateContentProperties(),e){case"indeterminate":a?(i._valueCashe=i.checked,i.checked=null):i.checked=i._valueCashe,i._updateHidenInputNameAndValue();break;case"value":case"checked":i._updateHidenInputNameAndValue();break;case"name":i._updateHidenInputName()}}},{key:"_documentUpHandler",value:function(e){var t=this;if(t._pressed&&(t._pressed=!1,!(t.disabled||t.readonly||!t.enableContainerClick&&e.originalEvent.target!==t.$.checkBoxInput))){if("press"===t.clickMode)return e.preventDefault(),void e.stopPropagation();t._changeCheckState("pointer"),t.focus(),t._handleTextSelection(),t._updateHidenInputNameAndValue()}}},{key:"_downHandler",value:function(e){var t=this,n=e.originalEvent.target;t.disabled||t.readonly||(t.enableContainerClick||n===t.$.checkBoxInput)&&(t.className.indexOf("material")>-1&&Smart.Utilities.Animation.Ripple.animate(t.$.checkBoxInput,e.pageX,e.pageY),t._pressed=!0,"press"!==t.clickMode&&"pressAndRelease"!==t.clickMode||(t._changeCheckState("pointer"),t.$.fireEvent("click"),t.focus(),t._updateHidenInputNameAndValue()))}}],[{key:"properties",get:function(){return{enableContainerClick:{value:!1,type:"boolean"}}}},{key:"listeners",get:function(){return{down:"_downHandler","document.up":"_documentUpHandler"}}}]),t}(Smart.ToggleButton));
//# sourceMappingURL=smart.checkbox.js.map