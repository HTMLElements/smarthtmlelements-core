
/* Smart HTML Elements v4.6.0 (2019-Oct) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart("smart-sortable",class extends Smart.ContentElement{static get properties(){return{dragMode:{value:"item",allowedValues:["item","handle"],type:"string"},handlePosition:{value:"right",allowedValues:["right","left","top","bottom"],type:"string"},handleVisibility:{value:"hover",allowedValues:["hover","visible"],type:"string"},items:{value:null,type:"string?"},mode:{value:"vertical",allowedValues:["horizontal","vertical"],type:"string"}}}static get listeners(){return{contextmenu:"_preventDefault","container.down":"_containerDownHandler","container.move":"_containerMoveHandler","container.transitionend":"_containerTransitionendHandler","document.dragstart":"_preventDefault","document.move":"_documentMoveHandler","document.selectstart":"_preventDefault","document.up":"_documentUpHandler"}}static get styleUrls(){return["smart.sortable.css"]}template(){return"<div id=\"container\" class=\"smart-sortable-container\"><content></content></div>"}move(a,b){const c=this,d=c._items;if(!(isNaN(a)||isNaN(b)||a===b||0>a||a>=d.length||0>b||b>=d.length)){const e=d[a],f=d[b];a>b?c._itemsParent.insertBefore(e,f):c._itemsParent.insertBefore(e,f.nextElementSibling),c._getItems(!1)}}updateItems(){const a=this;a._items.forEach(a=>a.classList.remove("smart-sortable-item")),a._getItems()}propertyChangedHandler(a,b,c){super.propertyChangedHandler(a,b,c);const d=this;"disabled"===a?(d._originallyDisabled=c,2>d._items.length&&(d.disabled=!0)):"items"===a?(d._itemsParent.classList.remove("smart-sortable-items-parent"),d.updateItems()):"mode"===a?d._setSettingsObject():void 0}ready(){super.ready();const a=this;a._originallyDisabled=a.disabled,a._getItems(),a._setSettingsObject()}_getItems(a){const b=this;b._items=null===b.items?Array.from(b.$.container.children):Array.from((b.shadowRoot||b).querySelectorAll(".smart-sortable-container "+b.items)),!1!==a&&(b._items.forEach(a=>a.classList.add("smart-sortable-item")),b._items.length&&(b._itemsParent=b._items[0].parentElement,b._itemsParent.classList.add("smart-sortable-items-parent"),b.disabled=!!(2>b._items.length)||b._originallyDisabled))}_setSettingsObject(){const a=this;a._settings="vertical"===a.mode?{coordinateName:"y",dimension:"height",offsetDimension:"offsetHeight",startOffset:"top",endOffset:"bottom"}:{coordinateName:"x",dimension:"width",offsetDimension:"offsetWidth",startOffset:"left",endOffset:"right"}}_preventDefault(a){this._draggedItem&&a.preventDefault()}_containerDownHandler(a){const b=this;if(!(b.disabled||b._draggedItem)){const c=(b.shadowRoot||b.isInShadowDOM?a.originalEvent.composedPath()[0]:a.originalEvent.target).closest(".smart-sortable-item");if(c){const d=a.pageX-window.scrollX,e=a.pageY-window.scrollY,f=c.getBoundingClientRect(),g=getComputedStyle(c),h=parseFloat(g.marginLeft),i=parseFloat(g.marginTop);"handle"===b.dragMode&&d>=f.left&&d<=f.right&&e>=f.top&&e<=f.bottom||(window.getSelection().removeAllRanges(),b._draggedItem=c,b._positionPlaceholder(),b._getPositionedAncestorCoords(),c.style.width=c.offsetWidth+"px",c.style.height=c.offsetHeight+"px",c.style.left=f.left+window.scrollX-h-b._positionedAncestorCoords.x+"px",c.style.top=f.top+window.scrollY-i-b._positionedAncestorCoords.y+"px",c.classList.add("dragged"),b._clickOffset={x:d-f.left+h,y:e-f.top+i},b._prevCoords={x:d,y:e},b._getItemCoordinates())}}}_positionPlaceholder(){const a=this,b=a._draggedItem,c=getComputedStyle(b),d=document.createElement("div");d.className="smart-sortable-item placeholder smart-visibility-hidden",d.style.width=b.offsetWidth+"px",d.style.height=b.offsetHeight+"px",d.style.minHeight=b.offsetHeight+"px",d.style.marginBottom=c.marginBottom,d.style.marginLeft=c.marginLeft,d.style.marginRight=c.marginRight,d.style.marginTop=c.marginTop,a._itemsParent.insertBefore(d,b.nextElementSibling),a._placeholder=d}_getPositionedAncestorCoords(){const a=this,b=a.offsetParent;if(a._positionedAncestorCoords={x:0,y:0},b!==document.body){const c=b.getBoundingClientRect();a._positionedAncestorCoords={x:c.left,y:c.top}}}_getItemCoordinates(){const a=this,b=[];a._items.forEach(function(a){const c=a.getBoundingClientRect();b.push({left:c.left,top:c.top,right:c.right,bottom:c.bottom,width:c.width,height:c.height})}),a._coordinates=b}_containerMoveHandler(a){this._draggedItem&&"touchmove"===a.originalEvent.type&&a.originalEvent.preventDefault()}_containerTransitionendHandler(a){const b=this;b._draggedItem&&a.target.classList.contains("smart-sortable-item")&&(a.target.classList.contains("returning")?b._resolveDragging():b._getItemCoordinates())}_documentMoveHandler(a){const b=this,c=b._draggedItem;if(!c)return;const d=b._settings,e={x:a.pageX-window.scrollX,y:a.pageY-window.scrollY},f=e[d.coordinateName];let g;if(b._prevCoords.x===e.x&&b._prevCoords.y===e.y)return;b.hasAttribute("dragged")||b.setAttribute("dragged",""),g=b._prevCoords[d.coordinateName]>f?"up":"down",b._prevCoords=e,c.style.top=a.pageY-b._clickOffset.y-b._positionedAncestorCoords.y+"px",c.style.left=a.pageX-b._clickOffset.x-b._positionedAncestorCoords.x+"px";const h=b._items.indexOf(c);let j;for(let c=0;c<b._coordinates.length;c++){const a=b._coordinates[c];if(h!==c)if("down"===g&&f>=a[d.startOffset]+a[d.dimension]/2&&f<=a[d.endOffset]){j=b._items[c];break}else if("up"===g&&f>=a[d.startOffset]&&f<=a[d.startOffset]+a[d.dimension]/2){j=b._items[c];break}}if(!j)return void delete b._prevOverItem;if(j!==b._prevOverItem){if(b._prevOverItem=j,j[g])return;const a=b._items.indexOf(j);if(b._overItem=j,j.up||j.down)j.style.transform=null,delete j.up,delete j.down;else{if("up"===g&&a>h||"down"===g&&a<h)return;const b=getComputedStyle(j);j.style.transform=`translate${d.coordinateName.toUpperCase()}(${("up"===g?1:-1)*(j[d.offsetDimension]+parseFloat(b["margin-"+d.startOffset])+parseFloat(b["margin-"+d.endOffset]))}px)`,j[g]=!0}}}_documentUpHandler(){const a=this,b=a._draggedItem;if(!b)return;let c=a._overItem;if(c){const d=a._items.indexOf(b),e=a._items.indexOf(c);d<e&&c.down||d>e&&!c.down&&!c.up?(a._insertBefore=c.nextElementSibling,c=a._insertBefore,c&&c.nextElementSibling===b&&(c=a._placeholder)):(d>e&&c.up||d<e&&!c.down&&!c.up)&&(a._insertBefore=c,!(d>e&&c.up)&&(c=c.previousElementSibling||c))}else c=a._placeholder;a._resolveDragging()}_resolveDragging(){const a=this,b=a._draggedItem,c=a._items.indexOf(b);let d=!1;b.classList.remove("dragged","returning"),a._removeInlineStyle(),a._insertBefore!==void 0&&a._items.indexOf(a._insertBefore)!==c&&a._insertBefore!==a._placeholder.nextElementSibling&&(a._itemsParent.insertBefore(b,a._insertBefore),delete a._insertBefore,d=!0),a._itemsParent.removeChild(a._placeholder),delete a._clickOffset,delete a._draggedItem,delete a._overItem,delete a._placeholder,delete a._prevCoords,a.removeAttribute("dragged"),d&&(a._getItems(!1),a.$.fireEvent("dragEnd",{oldIndex:c,newIndex:a._items.indexOf(b)}))}_removeInlineStyle(){const a=this;a._items.forEach(function(a){a.style=null,a.style.transition="none",delete a.up,delete a.down}),setTimeout(function(){a._items.forEach(a=>a.style.transition=null)},50)}});