
/* Smart HTML Elements v4.6.0 (2019-Oct) 
Copyright (c) 2011-2019 jQWidgets. 
License: https://htmlelements.com/license/ */

Smart.Utilities.Assign("Grid.Edit",class{_renderCommandBar(){const e=this,t=e.editing.commandBar.dataSource,d=d=>{for(let i in t){const n=t[i],l=document.createElement("div");l.classList.add("smart-grid-command-item"),l.label=e.localize(i),n.icon&&(l.innerHTML="<span class=\"smart-grid-icon "+n.icon+"\"></span><span class=\"smart-grid-label\">"+l.label+"</span>"),n.visible||l.classList.add("smart-hidden"),l.command=n.command,l.onclick=function(){const t=l.command;e._applyCommand(t,[])},d.appendChild(l)}};e.editing.enabled&&e.editing.commandBar.visible&&(e.$.headerCommandBar.innerHTML="",e.$.footerCommandBar.innerHTML="","far"!==e.editing.commandBar.position&&d(e.$.headerCommandBar),"near"!==e.editing.commandBar.position&&d(e.$.footerCommandBar))}commandKeyEditCommand(){const e=this;e.beginCellEdit()}commandKeyCancelCommand(){const e=this;e.cancelEdit()}commandKeyUpdateCommand(){const e=this;e.endEdit()}commandColumnMenuCommand(){const e=this;e._openColumnChooserMenu(e._commandColumn)}commandColumnEditCommand(e){const t=this;t.beginEdit(e.id)}commandColumnUpdateCommand(){const e=this;e.endEdit()}commandColumnRowMenuCommand(){}commandColumnCancelCommand(e){const t=this;if(t.editing.batch){const d=t._rowsDeleted?t._rowsDeleted.indexOf(e):-1;0<=d&&t._rowsDeleted.splice(d,1);for(let d=0;d<t.columns.length;d++){const i=t.columns[d].dataField;t._cellsUpdatedValues&&t._cellsUpdatedValues[e.id+"_"+i]&&(delete t._cellsUpdatedValues[e.id+"_"+i],t._cellsUpdatedValues.length--)}t._recycle(!1)}t.cancelEdit()}commandColumnDeleteCommand(e){const t=this;t.deleteRow(e.id)}_renderAddNewRow(){const e=this;e._frozenNearDefaultRows=[],e._frozenFarDefaultRows=[];const t=new Smart.Grid.Row({data:{},index:-1,grid:e,freeze:"near",visible:"far"!==e.editing.addNewRow.position,autoGenerated:!0,addNewRow:!0}),d=new Smart.Grid.Row({data:{},index:-2,grid:e,freeze:"far",visible:"near"!==e.editing.addNewRow.position,autoGenerated:!0,addNewRow:!0});if(e._newNearRow){const t=e._frozenNearRows.indexOf(e._newNearRow);if(0<=t&&(e._frozenNearRows.splice(t,1),0<e.$.rowNearContainer.children.length)){const t=e.$.rowNearContainer.children[0];t.parentNode.removeChild(t)}}if(e._newFarRow){const t=e._frozenFarRows.indexOf(e._newFarRow);if(0<=t&&(e._frozenFarRows.splice(t,1),0<e.$.rowFarContainer.children.length)){const t=e.$.rowFarContainer.children[e.$.rowFarContainer.children.length-1];t.parentNode.removeChild(t)}}if(e.editing.addNewRow.visible&&(e._frozenNearDefaultRows.push(t),e._frozenFarDefaultRows.push(d),e._frozenNearRows.splice(0,0,t),e._frozenFarRows.push(d)),e._scrollView.vScrollBar.$.farButton.addEventListener("click",function(){e.editing.addNewRow.autoCreate&&e._scrollView.vScrollBar.value===e._scrollView.vScrollBar.max&&(e.addUnboundRow(1),e._scrollView.vScrollBar.value=e._scrollView.vScrollBar.max)}),e._newNearRow=t,e._newFarRow=d,e.editing.addNewRow.visible){if(!e._newNearRow.element){const t=e._newNearRow,d=t.createElement();t.visible="far"!==e.editing.addNewRow.position,t.element=d,0<e.$.rowNearContainer.children.length?e.$.rowNearContainer.insertBefore(d,e.$.rowNearContainer.children[0]):e.$.rowNearContainer.appendChild(d)}if(!e._newFarRow.element){const t=e._newFarRow,d=t.createElement();t.visible="near"!==e.editing.addNewRow.position,t.element=d,0<e.$.rowFarContainer.children.length?e.$.rowFarContainer.insertBefore(d,e.$.rowFarContainer.children[0]):e.$.rowFarContainer.appendChild(d)}}}_insertNewRowAfter(e){const t=this;return t._insertNewRowBefore(e,!0)}_insertNewRowBefore(e,t){const d=this,i=new Smart.Grid.Row({index:t?0:-1,id:Smart.Utilities.Core.createGUID(),grid:d}),n=function(t,i){!0===d.editing.batch||d.editing.batch&&0<=d.editing.batch.indexOf("add")?d._batchAddRow(t,i?d.rows.length:0):(t.index=d.rows.length,d._add(t,i?d.rows.length:0)),d.scrollTop=i?d.scrollHeight:0,d.editing.addDialog.enabled||setTimeout(function(){d.editing.enabled&&d._beginEdit(t)},100),e&&e(t)}.bind(this);return d.editing.addDialog.enabled?d._openAddRowDialog(i,n):n(i,t),!0}commandBarBatchSaveCommand(){const e=this;e._saveBatchEdit()}commandBarAddRowCommand(){const e=this;e._insertNewRowAfter()}commandBarAddTopRowCommand(){const e=this;e._insertNewRowBefore()}commandBarDeleteRowCommand(){const e=this;let t=1,d=e.rows[e.rows.length-t];for(e._rowsDeleted||(e._rowsDeleted=[]);0<=e._rowsDeleted.indexOf(e.rows[e.rows.length-t]);)t++;d=e.rows[e.rows.length-t],d&&e.commandColumnDeleteCommand(d)}commandBarBatchRevertCommand(){const e=this;e.revertBatchEdit()}_beginEdit(e,t){const d=this;t||(t=d.columns[0].dataField);const i=d.columnByDataField[t];if(d.editing.allowColumnHeaderEdit&&!e&&i)return void d._beginColumnEdit(i);if(!e||!i||i&&i.autoGenerated)return!1;const n=e.getCell(t);return!!n&&void("cell"===d.editing.mode?d._beginCellEdit(n):"row"===d.editing.mode&&d._beginRowEdit(e,n),d.$.fireEvent("beginEdit"))}_saveUnboundRows(e){const t=this;if(t._unboundRows&&0<t._unboundRows.length&&t.editing.addNewRow.autoSave){const d=t.rowById[e];if(!d.unbound)return;const i=t._unboundRows.indexOf(d);if(0>i)return;const n=i+1;t.beginUpdate();for(let e=0;e<n;e++){const d=t._unboundRows[e];if(!d)continue;delete t.rowById[d.id],d.unbound=!1;let i=!1;t._selection.focusedCell&&t._selection.focusedCell.row.id===d.id&&(i=!0),t._nearRowsAdded&&0<=t._nearRowsAdded.indexOf(d)?(t._nearRowsAdded.splice(t._nearRowsAdded.indexOf(d),1),t._add(0,d.data),i&&(t._selection.focusedCell.row=t.rows[0])):t._farRowsAdded&&0<=t._farRowsAdded.indexOf(d)&&(t._farRowsAdded.splice(t._farRowsAdded.indexOf(d),1),t._add(d.data),i&&(t._selection.focusedCell.row=t.rows[t.rows.length-1]))}t._unboundRows.splice(0,n),t.endUpdate()}}_endCellEdit(e){const t=this,d=e||t.editing.editCell;if(!d||d&&!d.isEditing)return null;const i=t._getEditorValue(d);if("invalid value"===i)return d.setAttribute("error",""),!1;const n=t._getEditorId(d),l=t._cellEditors[n];l.detach(),d.row.element.removeAttribute("edit"),d.element.removeAttribute("editor"),d.element.removeAttribute("error"),d.isEditing=!1,d.element.content.innerHTML="";const o=function(){t.editing.editRow||t._recycle(!1)},a=t._cellsUpdatedValues?t._cellsUpdatedValues[d.row.id+"_"+d.column.dataField]:void 0,r=void 0===a?d.value:a;return function(e,t){return"date"===d.column.dataType?e.valueOf()===t.valueOf():e===t}(i,r)?(t.editing.editCell=null,!t.editing.editRow&&(t.editing.isEditing=!1,o())):(t.editing.editCell=null,!t.editing.editRow&&(t.editing.isEditing=!1),!0===t.editing.batch||t.editing.batch&&0<=t.editing.batch.indexOf("update")?(t._batchUpdateCell(d.row,d.column,i,d.value),o()):(d._updating=!0,d.value=i,d._updating=!1,o())),t.editing.commandColumn.visible&&!t.editing.commandColumn.width&&"cell"===t.editing.mode&&t.refresh(),t.focus(),!0}_endRowEdit(){const e=this,t=e.editing.editRow;if(!t)return!1;let d=!0;const n=t.cells;for(let t=0;t<n.length;t++){const i=n[t],l=e._getEditorValue(i);"invalid value"===l&&(i.setAttribute("error",""),d=!1)}if(d){for(let t=0;t<n.length;t++){const d=n[t];e._endCellEdit(d)}return e.editing.isEditing=!1,e.editing.editRow=null,e.editing.commandColumn.visible&&!e.editing.commandColumn.width?e.refresh():e._recycle(!1),!0}return e.focus(),!1}_batchDeleteRow(e){const t=this;t._rowsDeleted||(t._rowsDeleted=[]),t._rowsDeleted.push(e),t._recycle(!1)}_batchAddRow(e,t){const d=this;d._rowsAdded||(d._rowsAdded=[]),d._rowsAdded.push(e.id),d.rowById[e.id]=e,e.index=d.rows.length+(d._rowsAdded?d._rowsAdded.length:0),0===t?d._nearRowsAdded.splice(0,0,e):d._farRowsAdded.push(e);const i=d.isInitialized&&d._rowElements&&d._rowElements.length<d.rows.length+d._rowsAdded.length;i&&d._initializeRowElements(),d.refresh()}_batchUpdateCell(e,t,d,i){const n=this;n._cellsUpdatedValues||(n._cellsUpdatedValues=[]);(function(e,d){return"date"===t.dataType?e.valueOf()===d.valueOf():e===d})(d,i)?delete n._cellsUpdatedValues[e.id+"_"+t.dataField]:n._cellsUpdatedValues[e.id+"_"+t.dataField]=d,n._cellsUpdatedValues.length++}_saveBatchEdit(){const e=this;for(let t in e._cellsUpdatedValues){const d=e._cellsUpdatedValues[t],i=t.substring(0,t.indexOf("_")),n=t.substring(t.indexOf("_")+1),l=e.rowById[i],o=l.getCell(n);o._updating=!0,o.value=d,o._updating=!1}const t=e._rowsDeleted&&0<e._rowsDeleted.length||e._rowsAdded&&0<e._rowsAdded.length;if(t&&e.beginUpdate(),e._rowsAdded&&0<e._rowsAdded.length)for(let t in e._rowsAdded){const d=e._rowsAdded[t],i=e.rowById[d];i&&(0<=e._nearRowsAdded.indexOf(i)?e.rows.splice(0,0,i):0<=e._farRowsAdded.indexOf(i)&&e.rows.push(i))}if(e._rowsDeleted&&0<e._rowsDeleted.length)for(let t=0;t<e._rowsDeleted.length;t++){const d=e._rowsDeleted[t],i=e.rows.indexOf(d);0>i||e.rows.splice(i,1)}t&&e.endUpdate(),e._clearBatchEdit(!1)}_clearBatchEdit(){const e=this;let t=!1;e._rowsAdded&&0<e._rowsAdded.length&&(t=!0),e._cellsUpdatedValues=[],e._rowsAdded=[],e._rowsDeleted=[],e._nearRowsAdded=[],e._farRowsAdded=[],t?e.refresh():e._recycle(!1)}_getEditorId(e){return e.editor===e.column.editor?e.editor.template+"_"+e.column.dataField:e.editor.template+"_"+e.column.dataField+"_"+e.row.id}_applyCommand(e,t){const d=this;t||(t=[]);const i=function(){"function"==typeof e?e.apply(d,t):d[e]?d[e].apply(d,t):Smart[e]?Smart[e].apply(d,t):window[e]&&window[e].apply(d,t)};if(d.onCommand){t||(t=[]),t[1]||(t[1]=null);const n={name:e,command:i,details:t[0],event:t[1],handled:!1};setTimeout(()=>{d.onCommand.apply(d,[n]);n.handled||i()},200)}else i()}_getCommandColumnCommandsTemplate(){const e=this,t=e.editing.commandColumn.dataSource,d="icon"!==e.editing.commandColumn.displayMode,i="label"!==e.editing.commandColumn.displayMode;let n="";for(let l in t){const o=t[l];let a="<div",r=!1;if("commandColumnMenu"==l)continue;r||(a+=" item=\""+l+"\" command=\""+o.command+"\" class=\"smart-grid-command-item\">",r=!0);const s="{{messages}}"===o.label?e.localize(l):o.label;i&&d?(a+="<span class=\"smart-grid-icon "+o.icon+"\"></span>",a+="<span class=\"smart-grid-label\">"+s+"</span>"):i&&!d?a+="<span class=\"smart-grid-icon "+o.icon+"\"></span>":d&&!i&&(a+="<span class=\"smart-grid-label\">"+s+"</span>"),a+="</div>",n+=a}return n}_updateCommandColumnCommandsVisibility(e,t){const d=this,n=e.children,l=d.editing.commandColumn.dataSource;for(let o=0;o<n.length;o++){const e=n[o],i=e.getAttribute("item"),a=l[i].visible;!0===a?e.classList.remove("smart-hidden"):!1===a?e.classList.add("smart-hidden"):"auto"===a&&(!d.editing.dialog.enabled&&(d.editing.editRow===t||d.editing.editCell&&d.editing.editCell.row===t)?"commandColumnEdit"===i?e.classList.add("smart-hidden"):("commandColumnUpdate"===i||"commandColumnCancel"===i)&&n[o].classList.remove("smart-hidden"):"commandColumnEdit"===i?e.classList.remove("smart-hidden"):("commandColumnUpdate"===i||"commandColumnCancel"===i)&&n[o].classList.add("smart-hidden"))}}_handleEditKeyDown(e){const t=this,d=e.key,i=t.editing.commandKeys;if(!t.editing.dialog.enabled)for(let n in i){const l=i[n],o=l.key.replace(/ /ig,"").split("|");if(0<=o.indexOf(d)){t._applyCommand(l.command),e.stopPropagation();break}}}_getCustomCellEditor(e){const t=this;e.editor.selector=e.editor.template,e.editor.template="custom";const d=t._getEditorId(e);if(!t._cellEditors[d]){const i=document.createElement("div");t._applyCellEditorUserSettings(i,e),i.classList.add("smart-grid-cell-editor");const n=function(e){if("keydown"===e.type)return void t._handleEditKeyDown(e)};let l=null;if((e.editor.selector.startsWith("#")||e.editor.selector.startsWith("."))&&(l=document.querySelector(e.editor.selector)),l)i.appendChild(l.content.cloneNode(!0).firstElementChild);else{const t=function(e){const t=document.createElement("template");return e=e.trim(),t.innerHTML=e,t.content.firstChild},d=t(e.editor.selector);d&&i.appendChild(d)}t._cellEditors[d]={element:i,focus:function(){const t=e.editor.instance.element.firstElementChild;e.editor.focus?setTimeout(function(){e.editor.focus.apply(e.editor.instance.element,[])},50):setTimeout(function(){t.focus()},50)},blur:function(t){const d=e.editor.instance.element.firstElementChild;e.editor.blur?e.editor.blur.apply(e.editor.instance.element,[t]):d.blur()},getValue:function(){const t=e.editor.instance.element.firstElementChild;if(e.editor.getValue)return e.editor.getValue.apply(e.editor.instance.element,[]);const d=t.value;return d||""},setValue:function(t){const d=e.editor.instance.element.firstElementChild;if(e.editor.setValue)e.editor.setValue.apply(e.editor.instance.element,[t]);else{if(0<=d.innerHTML.indexOf("{{")){const i=d.innerHTML.replace(/{{value}}/ig,t).replace(/{{id}}/ig,e.row.id);d.innerHTML=i}d.value=t,t instanceof Date&&(d.value=t.toISOString().split("T")[0]),e.editor.instance.element.value=d.value}},attach:function(){i.addEventListener("keydown",n),e.editor.attach&&e.editor.attach.apply(i,[])},detach:function(){i.removeEventListener("keydown",n),e.editor.detach&&e.editor.detach.apply(i,[])}}}return t._cellEditors[d]}_getTextAreaCellEditor(e){const t=this,d=t._getEditorId(e),i=document.createElement("div"),n=document.createElement("textarea"),l=document.createElement("div");t._applyCellEditorUserSettings(i,e),n.classList.add("smart-input"),i.classList.add("smart-grid-cell-editor"),i.classList.add("smart-grid-text-area-cell-editor"),l.classList.add("nav"),l.classList.add("smart-icon-resize-full","smart-grid-icon");const o=function(e){let d=e.key;if("keydown"===e.type)return t._handleEditKeyDown(e),void(e.shiftKey&&" "===d&&(l.click(),e.preventDefault()))};l.onclick=function(){const d=document.createElement("div"),i=document.createElement("span"),o=document.createElement("textarea"),a=e.editor.instance.element,r=document.createElement("div"),s=document.createElement("smart-scroll-bar");s.orientation="vertical",d.setAttribute("theme",t.theme),r.appendChild(o),r.classList.add("smart-grid-text-area-container"),r.appendChild(s),o.value=n.value,o.classList.add("smart-input"),l.textAreaEditorDialog=d,l.popupTextArea=o,i.classList.add("close-button"),i.classList.add("smart-grid-icon"),i.classList.add("smart-icon-cancel-circled");const c=function(){s.value=o.scrollTop,s.max=o.scrollHeight-o.offsetHeight,s.onChange=null,o.offsetHeight>=o.scrollHeight?s.classList.add("smart-hidden"):s.classList.remove("smart-hidden"),s.onChange=function(){o.scrollTop=s.value}};o.onscroll=function(){c()},o.onkeydown=function(e){"Escape"===e.key&&d.parentNode.removeChild(d),"Enter"===e.key&&e.shiftKey&&i.click()},i.onclick=function(){l.textAreaEditorDialog.parentNode.removeChild(l.textAreaEditorDialog),setTimeout(function(){n.value=o.value,n.select()},50)},d.classList.add("smart-grid-text-area-dialog"),d.appendChild(r),d.appendChild(i),document.body.appendChild(d),setTimeout(function(){o.select(),c()},50),c(),d.style.top=t._offsetTop(a)+"px",d.style.left=t._offsetLeft(a)+"px",d.style.width=a.offsetWidth+"px"},i.appendChild(n),i.appendChild(l);return t._cellEditors[d]={element:i,focus:function(){setTimeout(function(){n.select()},50)},blur:function(){},setValue:function(e){n.value=e},getValue:function(){const e=n.value;return l.textAreaEditorDialog&&l.textAreaEditorDialog.parentNode?(n.value=l.popupTextArea.value,n.value):e},attach:function(){n.addEventListener("keydown",o)},detach:function(){n.removeEventListener("keydown",o),l.textAreaEditorDialog&&l.textAreaEditorDialog.parentNode&&(n.value=l.popupTextArea.value,l.textAreaEditorDialog.parentNode.removeChild(l.textAreaEditorDialog))}},t._cellEditors[d]}_getInputCellEditor(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors[d]){const i=document.createElement("input");t._applyCellEditorUserSettings(i,e),i.classList.add("smart-input"),i.classList.add("smart-grid-cell-editor"),i.classList.add("smart-grid-input-cell-editor");const n=function(d){if("keydown"===d.type)return"number"!==e.column.dataType&&"int"!==e.column.dataType&&"float"!==e.column.dataType||t.editing.editColumn||d.key.match(/[0-9]/)||"-"===d.key||1!==d.key.length?void t._handleEditKeyDown(d):(d.preventDefault(),void d.stopPropagation())};t._cellEditors[d]={element:i,focus:function(){setTimeout(function(){i.select()},50)},blur:function(){},getValue:function(){return i.value},setValue:function(t){if(e.column.rowHeaderColumn&&!t)return void(i.value=e.editor.row.visibleIndex+1);if("number"===e.column.dataType||"int"===e.column.dataType||"float"===e.column.dataType){if(""===t)return;if(t&&!t.toString().match(/[0-9]/)&&"-"!==t)return}i.value=t},attach:function(){i.addEventListener("keydown",n)},detach:function(){i.removeEventListener("keydown",n)}}}return t._cellEditors[d]}_applyCellEditorUserSettings(e,t){for(let d in t.editor)if("template"!=d){if("list"==d){e.setAttribute(d,t.editor[d]);continue}e[d]=t.editor[d]}}_getAutoCompleteCellEditor(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors[d]){const i=document.createElement("smart-input");t._applyCellEditorUserSettings(i,e),i.readonly&&(i.dropDownButtonPosition="right");const n=function(e){return i.opened?void 0:"keydown"===e.type?void t._handleEditKeyDown(e):void 0};i.classList.add("smart-grid-cell-editor"),i.classList.add("smart-grid-auto-complete-cell-editor");t._cellEditors[d]={element:i,focus:function(){setTimeout(()=>{i&&i.select&&i.select()},50)},blur:function(){},setValue:function(e){i.value=e},getValue:function(){return i.value},attach:function(){i.addEventListener("keydown",n)},detach:function(){i&&i.close&&(i.value="",i.close(),i.removeEventListener("keydown",n))}}}const n=t.getVisibleRows(),l=[];for(let d,o=0;o<n.length;o++)d=t.dataSource[n[o].index],d&&(d=d[e.column.dataField],-1===l.indexOf(d)&&l.push(d));return t._cellEditors[d].element.dataSource=l,t._cellEditors[d]}_getDateTimePickerCellEditor(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors[d]){const i=document.createElement("smart-date-time-picker");i.calendarButton=!0,i.dropDownAppendTo="body",i.autoClose=!0,i.dropDownDisplayMode="calendar",t._applyCellEditorUserSettings(i,e);const n=function(e){return i.opened?void 0:"keydown"===e.type?void t._handleEditKeyDown(e):void 0};i.classList.add("smart-grid-cell-editor"),i.classList.add("smart-grid-date-time-picker-cell-editor");t._cellEditors[d]={element:i,focus:function(){setTimeout(()=>{i.select()},50)},blur:function(e){const d=i.getAttribute("aria-controls");if(d&&i.opened){const i=t.getBoundingRect(document.getElementById(d));e.pageX<i.left||e.pageX>i.right||e.pageY<i.top||e.pageY>i.bottom||e.preventDefault()}},setValue:function(e){i.value=e},getValue:function(){return i.value},attach:function(){i.addEventListener("keydown",n)},detach:function(){i.value="",i.close(),i.removeEventListener("keydown",n)}}}return t._cellEditors[d]}_getNumberInputCellEditor(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors[d]){const i=document.createElement("div"),n=document.createElement("input"),l=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div");t._applyCellEditorUserSettings(i,e),o.tabIndex=a.tabIndex=0,n.classList.add("smart-input"),i.classList.add("smart-grid-cell-editor"),i.classList.add("smart-grid-number-input-cell-editor"),l.classList.add("nav"),o.classList.add("up"),a.classList.add("down");const r=function(e){if("keydown"===e.type)return void t._handleEditKeyDown(e)};n.type="number",l.appendChild(o),l.appendChild(a),i.appendChild(n),i.appendChild(l);t._cellEditors[d]={element:i,focus:function(){setTimeout(function(){n.select()},50)},blur:function(){},setValue:function(e){n.value=e},getValue:function(){const e=parseFloat(n.value);return isNaN(e)||e===1/0||e===-Infinity?0:e},attach:function(){n.addEventListener("keydown",r),o.onkeydown=r,a.onkeydown=r,o.onclick=function(){const e=parseFloat(n.value);isNaN(e)||(e<n.max||""===n.max)&&(n.value=e+1)},a.onclick=function(){const e=parseFloat(n.value);isNaN(e)||(e>n.min||""===n.min)&&(n.value=e-1)}},detach:function(){n.removeEventListener("keydown",r),o.onclick=a.onclick=null,o.onkeydown=a.onkeydown=null}}}return t._cellEditors[d]}_getCheckBoxCellEditor(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors[d]){const e=document.createElement("div");e.classList.add("smart-input"),e.classList.add("smart-grid-cell-editor"),e.classList.add("smart-grid-check-box-cell-editor"),e.tabIndex=0;const i=function(){!0!==e.value&&!1!==e.value&&null!==e.value&&(e.value=!1),e.value=null!==e.value&&!e.value,!1===e.value?e.removeAttribute("checked"):e.setAttribute("checked",e.value?"":"indeterminate")},n=function(e){t._handleEditKeyDown(e)};t._cellEditors[d]={getValue:function(){return e.value},setValue:function(t){e.value=t,!1===e.value?e.removeAttribute("checked"):e.setAttribute("checked",e.value?"":"indeterminate")},focus:function(){e.focus(),setTimeout(function(){e.focus()},25)},blur:function(){},element:e,detach:function(){e.value=!1,e.removeEventListener("click",i),e.removeEventListener("keydown",n)},attach:function(){e.addEventListener("keydown",n),e.addEventListener("click",i)}}}return t._cellEditors[d]}_getEditorValue(e){const t=this,d=t._getEditorId(e);if(!t._cellEditors)return;const i=t._cellEditors[d];if(!i)return;const n=function(t){switch(e.column.dataType){case"float":case"int":case"number":t="int"===e.column.dataType?parseInt(t):parseFloat(t),isNaN(t)&&(t=0);break;case"bool":case"boolean":("true"===t||"1"===t)&&(t=!0),("false"===t||"0"===t)&&(t=!1);break;case"date":t=new Smart.Utilities.DateTime(t),t=t.toDate();break;case"dateTime":t=new Smart.Utilities.DateTime(t);}return t};let l=null;switch(e.editor.template){case"input":case"autoComplete":case"numberInput":case"deteTimePicker":case"checkBox":{try{l=n(i.getValue())}catch(t){l=e.value}if(e.editor.getValue){const t=e.editor.getValue(e,l);void 0!==t&&(l=t)}break}default:l=n(i.getValue());}let o=!0;return e.column.validator&&(o=e.column.validator.evaluate(l)),o?l:"invalid value"}_beginRowEdit(e,t){const d=this;if(e===d.editing.editRow)return!1;if(d.editing.editRow){const e=d.endEdit();if(!e)return!1}const n=e.cells;d.editing.editRow=e,d.editing.commandColumn.visible&&(d.editing.isEditing=!1,d.refresh(),d.editing.isEditing=!0),e.isEditing=!0;let l=!1;for(let o=0;o<n.length;o++){const e=n[o],i=d._beginCellEdit(e);t?e===t&&e.editor.instance.focus():i&&!l&&(l=!0,e.editor.instance.focus()),d.editing.commandColumn.visible&&e.column.commandColumn&&e.render()}return!0}_createDialog(e){const t=this,d=document.createElement("div");e||(e=t.editing.dialog),d.setAttribute("animation","none"),d.classList.add("smart-window","smart-grid-dialog"),d.style.width="auto"===e.width?e.width:e.width+"px",d.style.height="auto"===e.height?e.height:e.height+"px",d.style.left="",d.style.top="",d.innerHTML=`<div class="smart-container">
                        <div id="headerSection" class="smart-header-section">
                            <div class="smart-header"></div>
                            <div class="smart-buttons-container">
                                <smart-button unfocusable class="smart-close-button"></smart-button>
                            </div>
                        </div>
                        <div class="smart-content"><div></div></div>
                        <div class ="smart-footer">
                            <div class ="smart-stack-layout right spacing">
                                <smart-button class ="smart-confirm-button item primary">Ok</smart-button>
                                <smart-button class ="smart-cancel-button item">Cancel</smart-button>
                            </div>
                        </div>
                    </div>`,d.content=d.querySelector(".smart-content").firstChild,d.footer=d.querySelector(".smart-footer"),d.header=d.querySelector(".smart-header"),d.btnConfirm=d.querySelector(".smart-confirm-button"),d.btnCancel=d.querySelector(".smart-cancel-button"),d.btnClose=d.querySelector(".smart-close-button");const i=document.createElement("div");return i.classList.add("smart-grid-dialog-overlay"),i.onclick=function(){},d.overlay=i,d.remove=function(){d.parentNode&&d.parentNode.removeChild(d)},d.close=function(){d.classList.remove("open"),d.addEventListener("transitionend",d.remove),d.addEventListener("transitioncancel",d.remove),d.modal&&d.overlay.parentNode&&d.overlay.parentNode.removeChild(d.overlay),d.onClose&&d.onClose()},d.open=function(i,n){d.removeEventListener("transitionend",d.remove),d.removeEventListener("transitioncancel",d.remove),document.body.appendChild(d),i||(i=e.left),n||(n=e.top),requestAnimationFrame(function(){d.classList.add("open");const e=function(e,i){const n=t.offset(t);switch("center"===e&&"horizontal"===i&&(e="middle"),e){case"top":return n.top;case"bottom":return n.top+t.offsetHeight-d.offsetHeight;case"center":return n.top+t.offsetHeight/2-d.offsetHeight/2;case"left":return n.left;case"middle":return n.left+t.offsetWidth/2-d.offsetWidth/2;case"right":return n.left+t.offsetWidth-d.offsetWidth;}return"horizontal"===i?parseInt(e)+n.left:"vertical"===i?parseInt(e)+n.top:"number"==typeof e?e:parseInt(e)};d.style.left=e(i,"horizontal")+"px",d.style.top=e(n,"vertical")+"px"}),d.modal&&t.appendChild(d.overlay),d.onOpen&&d.onOpen()},d}_openAddRowDialog(e,t){const d=this;if(!d.editing.addDialog.enabled)return!1;const n=d._dialogAddRow||d._createDialog(),i="{{message}}"===d.editing.dialog.header?d.localize("dialogAddHeader"):d.editing.dialog.header,l=n.content;n.header.innerHTML=i,e.grid=d,void 0===e.index&&(e.index=d.rows.length,d._rowsAdded&&(e.index+=d._rowsAdded.length));const o=e.cells;let a=null,r=0;if(d._cellEditors||(d._cellEditors=[]),!d._dialogAddRow){n.modal=!0,n.btnConfirm.innerHTML=d.localize("dialogAddButtonConfirm"),n.btnCancel.innerHTML=d.localize("dialogAddButtonCancel"),n.onOpen=function(){d.editing.dialog.visible=!0},n.onClose=function(){d.editing.dialog.visible=!1},n.btnCancel.onclick=function(){n.close()},n.btnClose.onclick=function(){n.close()},n.btnConfirm.onclick=function(){const e={};for(let t=0;t<o.length;t++){const i=o[t],n=d._getEditorValue(i),l=d._getEditorId(i),a=d._cellEditors[l];e[i.column.dataField]=n,a.detach()}const i=d._rowsAdded?d._rowsAdded.length:0,l=new Smart.Grid.Row({index:d.rows.length+i,grid:d,data:e});n.close(),t(l,0===n.index)},n.onkeydown=function(e){const t=e.key;"Enter"===t?n.btnConfirm.onclick():"Escape"===t&&n.close()},l.classList.add("smart-grid-layout");for(let e=0;e<d.columns.length;e++){const t=d.columns[e];if(!t.allowEdit)continue;0==r%2&&(a=document.createElement("div"),a.classList.add("row"),l.appendChild(a));const i=document.createElement("div");i.classList.add("col-sm-6");const n=document.createElement("div");n.classList.add("column");const o=document.createElement("label");o.innerHTML=d.columns[e].label;const s=document.createElement("div");s.classList.add("smart-grid-dialog-editor"),s.setAttribute("editor",t.dataField),s.setAttribute("template",t.editor.template),i.appendChild(n),a.appendChild(i),n.appendChild(o),n.appendChild(s),r++}}n.open(),n.index=e.index;for(let l=0;l<o.length;l++){const e=o[l],t=e.column,i=t.dataField,a=n.querySelector("[editor="+i+"]");a.innerHTML="";let r="";void 0===e.value?(("int64"===t.dataType||"number"===t.dataType||"int"===t.dataType||"float"===t.dataType)&&(r=0),"date"===t.dataType&&(r=new Date),("bool"===t.dataType||"boolean"===t.dataType)&&(r=!1)):r=e.value;let s=null;switch(e.editor.template){default:case"custom":{s=d._getCustomCellEditor(e);break}case"checkBox":{s=d._getCheckBoxCellEditor(e);break}case"autoComplete":{s=d._getAutoCompleteCellEditor(e);break}case"dateTimePicker":s=d._getDateTimePickerCellEditor(e);break;case"textArea":case"textarea":{s=d._getTextAreaCellEditor(e);break}case"numberInput":case"input":{s="numberInput"===e.editor.template?d._getNumberInputCellEditor(e):d._getInputCellEditor(e);break}}s.attach(),e.editor.instance=s,s.setValue(r),0==l&&s.focus(),e.editor.isInitialized||(e.editor.isInitialized=!0,e.editor.onInit&&e.editor.onInit(e.row.index,e.column.dataField,e.editor.instance.element)),e.editor.onRender&&e.editor.onRender(e.row.index,e.column.dataField,e.editor.instance.element),a.appendChild(s.element)}d._dialogAddRow=n}_openEditDialog(e,t){const d=this;if(!d.editing.dialog.enabled)return!1;const i=d._dialogEdit||d._createDialog(),n="{{message}}"===d.editing.dialog.header?d.localize("dialogEditHeader",{value:d.editing.editRow?e.row.visibleIndex+1:e.column.label}):d.editing.dialog.header,l=i.content;i.header.innerHTML=n;let o=null,a=0;if(!d._dialogEdit)if(i.modal=!0,i.btnConfirm.innerHTML=d.localize("dialogEditButtonConfirm"),i.btnCancel.innerHTML=d.localize("dialogEditButtonCancel"),i.onOpen=function(){d.editing.dialog.visible=!0},i.onClose=function(){d.editing.dialog.visible=!1},i.btnCancel.onclick=function(){d.cancelEdit()},i.btnClose.onclick=function(){d.cancelEdit()},i.btnConfirm.onclick=function(){d.endEdit()},i.onkeydown=function(e){const t=e.key,i=d.editing.commandKeys;for(let n in i){const e=i[n];if(t===e.key){d._applyCommand(e.command);break}}},d.editing.editRow){l.classList.add("smart-grid-layout");for(let e=0;e<d.columns.length;e++){const t=d.columns[e];if(!t.allowEdit)continue;0==a%2&&(o=document.createElement("div"),o.classList.add("row"),l.appendChild(o));const i=document.createElement("div");i.classList.add("col-sm-6");const n=document.createElement("div");n.classList.add("column");const r=document.createElement("label");r.innerHTML=d.columns[e].label;const s=document.createElement("div");s.classList.add("smart-grid-dialog-editor"),s.setAttribute("editor",t.dataField),s.setAttribute("template",t.editor.template),i.appendChild(n),o.appendChild(i),n.appendChild(r),n.appendChild(s),a++}}else{const t=e.column,d=document.createElement("div");d.classList.add("smart-grid-dialog-editor"),d.setAttribute("editor",""),d.setAttribute("template",t.editor.template),l.appendChild(d)}if(i.open(),d.editing.editRow){const d=i.querySelector("[editor="+e.column.dataField+"]");d.innerHTML="",d.appendChild(t.element)}else{const d=e.column,n=i.querySelector("[editor]");n.innerHTML="",n.setAttribute("template",d.editor.template),n.appendChild(t.element)}d._dialogEdit=i}_openDeleteRowDialog(e,t){const d=this;if(!d.editing.deleteDialog.enabled)return!1;const i=d._dialogDelete||d._createDialog(),n="{{message}}"===d.editing.dialog.header?d.localize("dialogDeleteHeader",{value:e.visibleIndex+1}):d.editing.dialog.header;i.header.innerHTML=n,i.content.innerHTML=d.localize("dialogDeleteContent"),i.row=e,d._dialogDelete||(i.modal=!0,i.btnConfirm.innerHTML=d.localize("dialogDeleteButtonConfirm"),i.btnCancel.innerHTML=d.localize("dialogDeleteButtonCancel"),i.onOpen=function(){d.editing.dialog.visible=!0},i.onClose=function(){d.editing.dialog.visible=!1},i.btnCancel.onclick=function(){i.close()},i.btnClose.onclick=function(){i.close()},i.btnConfirm.onclick=function(){t(i.row),i.close()},i.onkeydown=function(e){"Escape"===e.key&&i.close()},d._dialogDelete=i),i.open(),setTimeout(function(){i.btnConfirm.focus()},100)}_beginCellEdit(e,t){const d=this;if(e.isEditing)return!1;let i=!1;if(e.column.autoGenerated&&e.column.rowHeaderColumn&&d.editing.allowRowHeaderEdit&&new Date-d._clickTime<d.behavior.doubleClickTimingDelay&&d._clickedCell===e.element&&(i=!0),(!e.column.allowEdit||e.column.autoGenerated||e.readonly)&&!i)return!1;if(d.editing.editCell&&!d.editing.editRow){const e=d._endCellEdit();if(!1===e)return!1}d._cellEditors||(d._cellEditors=[]),d.editing.editRow||(d.editing.editCell=e),d.editing.commandColumn.visible&&!d.editing.editRow&&(d.editing.isEditing=!1,d.refresh(),d.editing.isEditing=!0),e.row.element.setAttribute("edit",""),d.editing.isEditing=!0,d._selection.selectionRect&&d._selection.selectionRect.classList.add("smart-visibility-hidden");const n=t=>{const i=t.element;d.editing.dialog.enabled?d._openEditDialog(e,t):(!e.element&&e.createElement(),e.element.setAttribute("editor","string"==typeof e.editor.template?e.editor.template:"template"),e.element.content.innerHTML="",e.element.content.appendChild(i),d.editing.editRow&&e.element.setAttribute("row-editor","")),t.attach(),e.editor.row=e.row,e.editor.column=e.column,e.editor.cell=e,e.editor.instance=t,e.isEditing=!0},l=d._cellsUpdatedValues?d._cellsUpdatedValues[e.row.id+"_"+e.column.dataField]:void 0;let o=void 0===l?e.value:l;if(void 0===o){o="";const t=e.column;"number"===t.dataType||"int"===t.dataType||"float"===t.dataType?o=0:"date"===t.dataType&&(o=new Date,o.setTime(0,0,0))}switch(e.editor||(e.editor="input"),"string"==typeof e.editor&&(e.canNotify=!1,e.editor={template:e.editor,autoFocus:!0},e.canNotify=!0),e.editor.template){default:case"custom":{const t=d._getCustomCellEditor(e);n(t),t.setValue(o);break}case"checkBox":{const i=d._getCheckBoxCellEditor(e);n(i);const l=!0===o||1===o;if("checkBox"===e.template&&t){const e=(d.enableShadowDOM?d.shadowRoot:d.getRootNode()).elementsFromPoint(t.clientX,t.clientY);e[0].classList.contains("smart-input")?i.setValue(!l):i.setValue(l)}else i.setValue(l);break}case"autoComplete":{const t=d._getAutoCompleteCellEditor(e);n(t),t.setValue(o),e.editor.autoOpen&&t.element.open();break}case"dateTimePicker":{const t=d._getDateTimePickerCellEditor(e);n(t),t.setValue(o),e.editor.autoOpen&&t.element.open();break}case"textArea":{const t=d._getTextAreaCellEditor(e);n(t),t.setValue(o);break}case"numberInput":case"input":{const t="numberInput"===e.editor.template?d._getNumberInputCellEditor(e):d._getInputCellEditor(e);n(t),t.setValue(o);break}}return e.editor.isInitialized||(e.editor.isInitialized=!0,e.editor.onInit&&e.editor.onInit(e.row.index,e.column.dataField,e.editor.instance.element)),e.editor.onRender&&e.editor.onRender(e.row.index,e.column.dataField,e.editor.instance.element),d.editing.editCell&&e.editor.instance.focus(),!0}_onColumnDoubleClick(e){const t=this;t._beginColumnEdit(e)}_beginColumnEdit(e){const t=this;if(t.editing.enabled&&t.editing.allowColumnHeaderEdit&&e.allowHeaderEdit){t.editing.isEditing&&t.endEdit(),t.editing.editColumn=e,t._cellEditors||(t._cellEditors=[]);const d=t._getInputCellEditor({column:e,row:t.rows[0],editor:{template:"input"}}),i=e.element.children;d.element.value=e.label,d.focus(),e.headerEditor=d,e.element.setAttribute("edit",""),e.element.label.appendChild(d.element),d.attach(),t.editing.isEditing=!0,t.$.fireEvent("columnBeginEdit",{column:e})}}_endColumnEdit(e){const t=this;if(!1===t.editing.isEditing||t.editing.isEditing&&null===t.editing.editColumn)return!1;const d=t.editing.editColumn;return d.canNotify=!1,d.headerEditor.detach(),d.headerEditor.element.parentNode.removeChild(d.headerEditor.element),!0!==e&&(d.label=d.headerEditor.getValue()),d.headerEditor=null,t.editing.isEditing=!1,d.element.removeAttribute("edit"),d.element.scrollLeft=0,t.editing.editColumn=null,d.canNotify=!0,d.refresh(),t.$.fireEvent("columnEndEdit",{column:d}),t._recycle(),!0}_cancelColumnEdit(){const e=this;e._endColumnEdit(!0)}_onCellClick(e,t){const d=this;if(e.row.addNewRow)return void("far"===e.row.freeze?d._insertNewRowAfter():d._insertNewRowBefore());if(d.editing.enabled){if(d.editing.editColumn)return void d.endEdit();if(d.editing.commandColumn.visible)if(e.column.commandColumn){const n=(d.enableShadowDOM?d.shadowRoot:d.getRootNode()).elementsFromPoint(t.pageX,t.pageY);let l=null;for(let e=0;e<n.length;e++)if(n[e].classList.contains("smart-grid-command-item")){l=n[e];break}if(l||(l=e.element.querySelector(".smart-grid-command-item")),l&&!l.classList.contains("smart-hidden")){const i=l.getAttribute("command");return void d._applyCommand(i,[e.row,t])}}else if(d.editing.commandColumn.inline){const e=(d.enableShadowDOM?d.shadowRoot:d.getRootNode()).elementsFromPoint(t.pageX,t.pageY);for(let t=0;t<e.length;t++)if(e[t].classList.contains("smart-grid-command-item"))return}if("none"===d.editing.action&&d.editing.isEditing){let t=!1;d.editing.editCell&&d.editing.editCell.row!==e.row&&(t=!0),d.editing.editRow&&d.editing.editRow!==e.row&&(t=!0),d.editing.editColumn&&(t=!0),t&&d.endEdit()}if(e.column.autoGenerated)return void(d.editing.allowRowHeaderEdit&&e.column.rowHeaderColumn&&(d.editing.isEditing&&d.endEdit(),d._beginCellEdit(e,t)));if("click"===d.editing.action&&(!d.selection.enabled||e.selected||"extended"!==d.selection.mode))if("cell"===d.editing.mode){const i=e.parent();d.ensureVisible(e.row.id,e.column.dataField),setTimeout(function(){i?d._beginCellEdit(i,t):d._beginCellEdit(e,t)},25)}else"row"===d.editing.mode&&d._beginRowEdit(e.row,e,t)}}_onCellDoubleClick(e,t){const d=this;!d.editing.enabled||"doubleClick"!==d.editing.action||d.editing.isEditing||e.column.autoGenerated||("cell"===d.editing.mode?d._beginCellEdit(e,t):"row"===d.editing.mode&&d._beginRowEdit(e.row,e,t))}_onRowClick(){}_onRowDoubleClick(){}beginEdit(e,t){const d=this,i=d.rowById[e];i&&d._beginEdit(i,t)}cancelEdit(){const e=this;if(e.editing.editRow){const t=e.editing.editRow.cells;for(let e=0;e<t.length;e++){const d=t[e],i=d.element;0==e&&d.row.element.removeAttribute("edit"),i&&(i.removeAttribute("editor"),i.removeAttribute("error"),i.content.innerHTML=""),d.isEditing=!1}e.editing.editRow=null}else e.editing.editCell?(e.editing.editCell.row.element.removeAttribute("edit"),e.editing.editCell.element.removeAttribute("editor"),e.editing.editCell.element.removeAttribute("error"),e.editing.editCell.element.content.innerHTML="",e.editing.editCell.isEditing=!1,e.editing.editCell=null):e.editing.editColumn&&e._cancelColumnEdit();e.editing.dialog.visible&&e.editing.dialog.enabled&&e._dialogEdit.close(),e.editing.isEditing=!1,e._recycle(!1),e.editing.commandColumn.visible&&e.refresh(),e.focus()}deleteRow(e,t){const d=this,i=d.rowById[e];if(!i)return!1;const n=function(e){if(!0===d.editing.batch||d.editing.batch&&0<=d.editing.batch.indexOf("delete"))d._batchDeleteRow(e);else{const t=d.rows.indexOf(e);d.rows.splice(t,1)}t&&t(e)};return d.editing.deleteDialog.enabled?d._openDeleteRowDialog(i,n):n(i),!0}addUnboundRow(e,t){const d=this;void 0===e&&(e=1),void 0===t&&(t="far"),d._nearRowsAdded||(d._nearRowsAdded=[],d._farRowsAdded=[]),d._unboundRows||(d._unboundRows=[]),d.beginUpdate();for(let n=0;n<e;n++){const e=Smart.Utilities.Core.createGUID().replace(/-/ig,""),i=new Smart.Grid.Row({index:-1,unbound:!0,id:e,grid:d});d.rowById[i.id]=i,"far"===t?d._farRowsAdded.push(i):d._nearRowsAdded.push(i),d._unboundRows.push(i)}d.endUpdate()}addNewRow(e){const t=this;"near"===e?t._insertNewRowBefore():t._insertNewRowAfter()}endEdit(){const e=this;let t=!1,d=null;return e.editing.dialog.enabled&&e.editing.dialog.visible&&e._dialogEdit&&e._dialogEdit.close(),e.editing.editRow?(d=e.editing.editRow.id,t=e._endRowEdit()):e.editing.editCell?(d=e.editing.editCell.row.id,t=e._endCellEdit()):e.editing.editColumn&&(d=null,t=e._endColumnEdit()),e._saveUnboundRows(d),e._selection.selectionRect&&e._selection.selectionRect.classList.remove("smart-visibility-hidden"),e.$.scrollView.scrollTop=0,e.$.fireEvent("endEdit"),t}getBatchEditChanges(){const e=this,t=[],d=[],n=[];for(let d in e._cellsUpdatedValues){const i=e._cellsUpdatedValues[d],n=d.substring(0,d.indexOf("_")),l=d.substring(d.indexOf("_")+1),o=e.rowById[n],a=o.getCell(l);t.push({id:n,dataField:l,oldValue:a.value,newValue:i})}if(e._rowsDeleted&&0<e._rowsDeleted.length)for(let t=0;t<e._rowsDeleted.length;t++){const i=e._rowsDeleted[t];d.push({id:i.id,data:i})}if(e._rowsAdded&&0<e._rowsAdded.length)for(let t=0;t<e._rowsAdded.length;t++){const d=e._rowsAdded[t];n.push({id:d.id,data:d})}return{updated:t,deleted:d,added:n}}saveBatchEdit(){const e=this;e._saveBatchEdit()}revertBatchEdit(){const e=this;e._clearBatchEdit(!0)}});