Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.BloodGroupMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "BloodGroupMainController",
     "restURL": "/BloodGroup",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.BloodGroupModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.BloodGroupMainController", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.BloodGroupViewModel"],
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
               "displayName": "Blood Group",
               "name": "BloodGroupTreeContainer",
               "itemId": "BloodGroupTreeContainer",
               "restURL": "/BloodGroup",
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
                    "itemId": "BloodGroupTree",
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
                    "viewModel": "BloodGroupViewModel",
                    "xtype": "form",
                    "displayName": "Blood Group",
                    "title": "Blood Group",
                    "name": "BloodGroup",
                    "itemId": "BloodGroup",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "bloodGroupId",
                         "itemId": "bloodGroupId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "bloodGroupId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "bloodGroupId<font color='red'> *<\/font>",
                         "fieldId": "E3BA6A39-9761-4CF2-89DC-04832CFE1586",
                         "hidden": true,
                         "value": "",
                         "bindable": "bloodGroupId",
                         "bind": "{bloodGroupId}"
                    }, {
                         "name": "bloodGroup",
                         "itemId": "bloodGroup",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Blood Group",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "8DC05029-E165-4C71-8C4E-435C7318D6FC",
                         "minLength": "0",
                         "maxLength": "256",
                         "bindable": "bloodGroup",
                         "bind": "{bloodGroup}",
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
                         "fieldId": "4FC980E3-87F7-4834-B53A-CF8CE7217655",
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
                         "customId": 769,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 769,
                              "customId": 151
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 769,
                              "customId": 152,
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
                              "parentId": 769,
                              "customId": 153,
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
                    "displayName": "Blood Group",
                    "title": "Details Grid",
                    "name": "BloodGroupGrid",
                    "itemId": "BloodGroupGrid",
                    "restURL": "/BloodGroup",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "bloodGroupId",
                         "dataIndex": "bloodGroupId",
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
               "viewModel": "BloodGroupViewModel",
               "xtype": "form",
               "displayName": "Blood Group",
               "title": "Blood Group",
               "name": "BloodGroup",
               "itemId": "BloodGroup",
               "bodyPadding": 10,
               "items": [{
                    "name": "bloodGroupId",
                    "itemId": "bloodGroupId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "bloodGroupId",
                    "margin": "5 5 5 5",
                    "fieldLabel": "bloodGroupId<font color='red'> *<\/font>",
                    "fieldId": "E3BA6A39-9761-4CF2-89DC-04832CFE1586",
                    "hidden": true,
                    "value": "",
                    "bindable": "bloodGroupId",
                    "bind": "{bloodGroupId}"
               }, {
                    "name": "bloodGroup",
                    "itemId": "bloodGroup",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Blood Group",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "8DC05029-E165-4C71-8C4E-435C7318D6FC",
                    "minLength": "0",
                    "maxLength": "256",
                    "bindable": "bloodGroup",
                    "bind": "{bloodGroup}",
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
                    "fieldId": "4FC980E3-87F7-4834-B53A-CF8CE7217655",
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
                    "customId": 769,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 769,
                         "customId": 151
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 769,
                         "customId": 152,
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
                         "parentId": 769,
                         "customId": 153,
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