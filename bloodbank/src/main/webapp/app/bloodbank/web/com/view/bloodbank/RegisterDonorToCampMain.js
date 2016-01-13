Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.RegisterDonorToCampMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "RegisterDonorToCampMainController",
     "restURL": "/RegisterDonorToCamp",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterDonorToCampModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.RegisterDonorToCampMainController", "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterACampModel", "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorModel", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.RegisterDonorToCampViewModel"],
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
               "displayName": "Register Donor To Camp",
               "name": "RegisterDonorToCampTreeContainer",
               "itemId": "RegisterDonorToCampTreeContainer",
               "restURL": "/RegisterDonorToCamp",
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
                    "itemId": "RegisterDonorToCampTree",
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
                    "items": []
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
                    "viewModel": "RegisterDonorToCampViewModel",
                    "xtype": "form",
                    "displayName": "Register Donor To Camp",
                    "title": "Register Donor To Camp",
                    "name": "RegisterDonorToCamp",
                    "itemId": "RegisterDonorToCamp",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "registerDonorToCampId",
                         "itemId": "registerDonorToCampId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "registerDonorToCampId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "registerDonorToCampId<font color='red'> *<\/font>",
                         "fieldId": "4953B7E7-74D4-4217-968B-619FC075AAC6",
                         "hidden": true,
                         "value": "",
                         "bindable": "registerDonorToCampId",
                         "bind": "{registerDonorToCampId}"
                    }, {
                         "name": "camp",
                         "itemId": "camp",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Camp",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Camp<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "66741810-2E22-49EC-952B-0A7DC2E3086B",
                         "restURL": "RegisterACamp",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterACampModel"
                         },
                         "bindable": "camp",
                         "bind": "{camp}",
                         "columnWidth": 0.5
                    }, {
                         "name": "donor",
                         "itemId": "donor",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Donor",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Donor<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "3C87877C-05C1-4F4F-BA7E-74653A00A29C",
                         "restURL": "RegisterADonor",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorModel"
                         },
                         "bindable": "donor",
                         "bind": "{donor}",
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
                         "fieldId": "EFFC1A94-32C7-414E-8285-4E12DEBD8FCB",
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
                         "customId": 844,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 844,
                              "customId": 798
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 844,
                              "customId": 799,
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
                              "parentId": 844,
                              "customId": 800,
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
                    "displayName": "Register Donor To Camp",
                    "title": "Details Grid",
                    "name": "RegisterDonorToCampGrid",
                    "itemId": "RegisterDonorToCampGrid",
                    "restURL": "/RegisterDonorToCamp",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "registerDonorToCampId",
                         "dataIndex": "registerDonorToCampId",
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
                         "header": "Camp",
                         "dataIndex": "camp",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Donor",
                         "dataIndex": "donor",
                         "renderer": "renderFormValue",
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
               "viewModel": "RegisterDonorToCampViewModel",
               "xtype": "form",
               "displayName": "Register Donor To Camp",
               "title": "Register Donor To Camp",
               "name": "RegisterDonorToCamp",
               "itemId": "RegisterDonorToCamp",
               "bodyPadding": 10,
               "items": [{
                    "name": "registerDonorToCampId",
                    "itemId": "registerDonorToCampId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "registerDonorToCampId",
                    "margin": "5 5 5 5",
                    "fieldLabel": "registerDonorToCampId<font color='red'> *<\/font>",
                    "fieldId": "4953B7E7-74D4-4217-968B-619FC075AAC6",
                    "hidden": true,
                    "value": "",
                    "bindable": "registerDonorToCampId",
                    "bind": "{registerDonorToCampId}"
               }, {
                    "name": "camp",
                    "itemId": "camp",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Camp",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Camp<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "66741810-2E22-49EC-952B-0A7DC2E3086B",
                    "restURL": "RegisterACamp",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterACampModel"
                    },
                    "bindable": "camp",
                    "bind": "{camp}",
                    "columnWidth": 0.5
               }, {
                    "name": "donor",
                    "itemId": "donor",
                    "xtype": "combo",
                    "customWidgetType": "vdCombo",
                    "displayName": "Donor",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Donor<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "3C87877C-05C1-4F4F-BA7E-74653A00A29C",
                    "restURL": "RegisterADonor",
                    "displayField": "primaryDisplay",
                    "valueField": "primaryKey",
                    "typeAhead": true,
                    "queryMode": "local",
                    "minChars": 2,
                    "store": {
                         "data": [],
                         "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorModel"
                    },
                    "bindable": "donor",
                    "bind": "{donor}",
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
                    "fieldId": "EFFC1A94-32C7-414E-8285-4E12DEBD8FCB",
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
                    "customId": 844,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 844,
                         "customId": 798
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 844,
                         "customId": 799,
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
                         "parentId": 844,
                         "customId": 800,
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