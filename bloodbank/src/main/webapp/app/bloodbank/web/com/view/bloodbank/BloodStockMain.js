Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.BloodStockMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "BloodStockMainController",
     "restURL": "/BloodStock",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.BloodStockModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.BloodStockMainController", "Bloodbank.bloodbank.shared.com.model.bloodbank.BloodGroupModel", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.BloodStockViewModel"],
     "communicationLog": [],
     "tabPosition": "bottom",
     "items": [{
          "title": "Data Browser",
          "layout": "border",
          "defaults": {
               "split": true
          },
          "autoScroll": false,
          "customWidgetType": "vdBorderLayout",
          "items": [{
               "xtype": "tabpanel",
               "customWidgetType": "vdTabLayout",
               "margin": "5 0 5 5",
               "border": 1,
               "style": {
                    "borderColor": "#f6f6f6",
                    "borderStyle": "solid",
                    "borderWidth": "1px"
               },
               "displayName": "Blood Stock",
               "name": "BloodStockTreeContainer",
               "itemId": "BloodStockTreeContainer",
               "restURL": "/BloodStock",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "title": "Browse",
                    "useArrows": true,
                    "rootVisible": false,
                    "itemId": "BloodStockTree",
                    "listeners": {
                         "select": "treeClick"
                    },
                    "tbar": [{
                         "xtype": "triggerfield",
                         "customWidgetType": "vdTriggerField",
                         "emptyText": "Search",
                         "triggerCls": "",
                         "listeners": {
                              "change": "onTriggerfieldChange",
                              "buffer": 250
                         }
                    }, "->", {
                         "xtype": "tool",
                         "type": "refresh",
                         "tooltip": "Refresh Tree Data",
                         "handler": "onTreeRefreshClick"
                    }]
               }, {
                    "title": "Advance Search",
                    "xtype": "form",
                    "customWidgetType": "vdFormpanel",
                    "itemId": "queryPanel",
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "text": "Filter",
                              "handler": "onFilterClick"
                         }]
                    }],
                    "items": [{
                         "name": "bloodGroup",
                         "itemId": "bloodGroup",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Blood Group",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Blood Group",
                         "fieldId": "EB5C3700-A205-4928-9D26-6EED2F1649E3",
                         "restURL": "BloodGroup",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.BloodGroupModel"
                         }
                    }]
               }],
               "region": "west",
               "width": "20%"
          }, {
               "region": "center",
               "layout": "border",
               "defaults": {
                    "split": true
               },
               "customWidgetType": "vdBorderLayout",
               "items": [{
                    "customWidgetType": "vdFormpanel",
                    "viewModel": "BloodStockViewModel",
                    "xtype": "form",
                    "displayName": "Blood Stock",
                    "title": "Blood Stock",
                    "name": "BloodStock",
                    "itemId": "BloodStock",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "bloodStockId",
                         "itemId": "bloodStockId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "BloodStockId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "BloodStockId<font color='red'> *<\/font>",
                         "fieldId": "6F210913-1380-44B8-AFE0-5EC360A0F861",
                         "hidden": true,
                         "value": "",
                         "bindable": "bloodStockId",
                         "bind": "{bloodStockId}"
                    }, {
                         "name": "bloodGroup",
                         "itemId": "bloodGroup",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Blood Group",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "EB5C3700-A205-4928-9D26-6EED2F1649E3",
                         "restURL": "BloodGroup",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.BloodGroupModel"
                         },
                         "bindable": "bloodGroup",
                         "bind": "{bloodGroup}",
                         "columnWidth": 0.5
                    }, {
                         "name": "noOfUnits",
                         "itemId": "noOfUnits",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "No Of Units",
                         "margin": "5 5 5 5",
                         "value": "0",
                         "fieldLabel": "No Of Units<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "57963BB6-81A7-4D57-8214-760DF9C6F866",
                         "minValue": "0",
                         "maxValue": "10000",
                         "bindable": "noOfUnits",
                         "bind": "{noOfUnits}",
                         "columnWidth": 0.5
                    }, {
                         "name": "versionId",
                         "itemId": "versionId",
                         "xtype": "numberfield",
                         "customWidgetType": "vdNumberfield",
                         "displayName": "versionId",
                         "margin": "5 5 5 5",
                         "value": "-1",
                         "fieldLabel": "versionId",
                         "fieldId": "647D5CE7-58A7-4E6D-803E-ECD586CD5089",
                         "bindable": "versionId",
                         "bind": "{versionId}",
                         "hidden": true
                    }],
                    "layout": "column",
                    "defaults": {
                         "columnWidth": 0.5,
                         "labelAlign": "left",
                         "labelWidth": 200
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "ui": "footer",
                         "isDockedItem": true,
                         "parentId": 1,
                         "customId": 249,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 249,
                              "customId": 117
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 249,
                              "customId": 118,
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "parentId": 249,
                              "customId": 119,
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {}
                    }],
                    "listeners": {
                         "scope": "controller"
                    },
                    "tools": [{
                         "type": "help",
                         "tooltip": "Console",
                         "handler": "onConsoleClick"
                    }, {
                         "type": "refresh",
                         "tooltip": "Refresh Tab",
                         "handler": "init"
                    }],
                    "extend": "Ext.form.Panel",
                    "region": "center"
               }, {
                    "xtype": "gridpanel",
                    "customWidgetType": "vdGrid",
                    "displayName": "Blood Stock",
                    "title": "Details Grid",
                    "name": "BloodStockGrid",
                    "itemId": "BloodStockGrid",
                    "restURL": "/BloodStock",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "BloodStockId",
                         "dataIndex": "bloodStockId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryDisplay",
                         "dataIndex": "primaryDisplay",
                         "hidden": true
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Blood Group",
                         "dataIndex": "bloodGroup",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "No Of Units",
                         "dataIndex": "noOfUnits",
                         "flex": 1
                    }, {
                         "header": "createdBy",
                         "dataIndex": "createdBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "createdDate",
                         "dataIndex": "createdDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedBy",
                         "dataIndex": "updatedBy",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "updatedDate",
                         "dataIndex": "updatedDate",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "versionId",
                         "dataIndex": "versionId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "activeStatus",
                         "dataIndex": "activeStatus",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "txnAccessCode",
                         "dataIndex": "txnAccessCode",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "xtype": "actioncolumn",
                         "customWidgetType": "vdActionColumn",
                         "width": 30,
                         "sortable": false,
                         "menuDisable": true,
                         "items": [{
                              "icon": "images/delete.gif",
                              "tooltip": "Delete Record",
                              "handler": "onDeleteActionColumnClickMainGrid"
                         }]
                    }],
                    "listeners": {
                         "itemclick": "onGridItemClick"
                    },
                    "tools": [{
                         "type": "refresh",
                         "tooltip": "Refresh Grid Data",
                         "handler": "onGridRefreshClick"
                    }],
                    "collapsible": true,
                    "titleCollapse": true,
                    "collapseMode": "header",
                    "region": "south",
                    "height": "40%"
               }]
          }]
     }, {
          "title": "Add New",
          "itemId": "addNewForm",
          "layout": "border",
          "customWidgetType": "vdBorderLayout",
          "autoScroll": false,
          "items": [{
               "customWidgetType": "vdFormpanel",
               "viewModel": "BloodStockViewModel",
               "xtype": "form",
               "displayName": "Blood Stock",
               "title": "Blood Stock",
               "name": "BloodStock",
               "itemId": "BloodStock",
               "bodyPadding": 10,
               "items": [{
                    "name": "bloodStockId",
                    "itemId": "bloodStockId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "BloodStockId",
                    "margin": "5 5 5 5",
                    "fieldLabel": "BloodStockId<font color='red'> *<\/font>",
                    "fieldId": "6F210913-1380-44B8-AFE0-5EC360A0F861",
                    "hidden": true,
                    "value": "",
                    "bindable": "bloodStockId",
                    "bind": "{bloodStockId}"
               }, {
                    "name": "bloodGroup",
                    "itemId": "bloodGroup",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Blood Group",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "EB5C3700-A205-4928-9D26-6EED2F1649E3",
                    "restURL": "BloodGroup",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.BloodGroupModel"
                    },
                    "bindable": "bloodGroup",
                    "bind": "{bloodGroup}",
                    "columnWidth": 0.5
               }, {
                    "name": "noOfUnits",
                    "itemId": "noOfUnits",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "No Of Units",
                    "margin": "5 5 5 5",
                    "value": "0",
                    "fieldLabel": "No Of Units<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "57963BB6-81A7-4D57-8214-760DF9C6F866",
                    "minValue": "0",
                    "maxValue": "10000",
                    "bindable": "noOfUnits",
                    "bind": "{noOfUnits}",
                    "columnWidth": 0.5
               }, {
                    "name": "versionId",
                    "itemId": "versionId",
                    "xtype": "numberfield",
                    "customWidgetType": "vdNumberfield",
                    "displayName": "versionId",
                    "margin": "5 5 5 5",
                    "value": "-1",
                    "fieldLabel": "versionId",
                    "fieldId": "647D5CE7-58A7-4E6D-803E-ECD586CD5089",
                    "bindable": "versionId",
                    "bind": "{versionId}",
                    "hidden": true
               }],
               "layout": "column",
               "defaults": {
                    "columnWidth": 0.5,
                    "labelAlign": "left",
                    "labelWidth": 200
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "ui": "footer",
                    "isDockedItem": true,
                    "parentId": 1,
                    "customId": 249,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 249,
                         "customId": 117
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 249,
                         "customId": 118,
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "parentId": 249,
                         "customId": 119,
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {}
               }],
               "listeners": {
                    "scope": "controller"
               },
               "tools": [{
                    "type": "help",
                    "tooltip": "Console",
                    "handler": "onConsoleClick"
               }, {
                    "type": "refresh",
                    "tooltip": "Refresh Tab",
                    "handler": "init"
               }],
               "extend": "Ext.form.Panel",
               "region": "center"
          }]
     }]
});