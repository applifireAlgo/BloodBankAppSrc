Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.DonationTypeMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "DonationTypeMainController",
     "restURL": "/DonationType",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.DonationTypeModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.DonationTypeMainController", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.DonationTypeViewModel"],
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
               "displayName": "Donation Type",
               "name": "DonationTypeTreeContainer",
               "itemId": "DonationTypeTreeContainer",
               "restURL": "/DonationType",
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
                    "itemId": "DonationTypeTree",
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
                    "viewModel": "DonationTypeViewModel",
                    "xtype": "form",
                    "displayName": "Donation Type",
                    "title": "Donation Type",
                    "name": "DonationType",
                    "itemId": "DonationType",
                    "bodyPadding": 10,
                    "items": [{
                         "name": "donationTypeId",
                         "itemId": "donationTypeId",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "donationTypeId",
                         "margin": "5 5 5 5",
                         "fieldLabel": "donationTypeId<font color='red'> *<\/font>",
                         "fieldId": "7DC01ABA-298F-442A-B364-28BDC74FB9A6",
                         "minLength": "0",
                         "maxLength": "256",
                         "hidden": true,
                         "value": "",
                         "bindable": "donationTypeId",
                         "bind": "{donationTypeId}"
                    }, {
                         "name": "donationType",
                         "itemId": "donationType",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Donation Type",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Donation Type<font color='red'> *<\/font>",
                         "allowBlank": false,
                         "fieldId": "948D99D8-E211-4569-877E-694A8FA44E9B",
                         "minLength": "0",
                         "maxLength": "256",
                         "bindable": "donationType",
                         "bind": "{donationType}",
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
                         "fieldId": "5456BC5B-A9E3-48A8-8C54-0F6DF8383FA8",
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
                         "customId": 742,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill",
                              "parentId": 742,
                              "customId": 286
                         }, {
                              "customWidgetType": "vdButton",
                              "xtype": "button",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "parentId": 742,
                              "customId": 287,
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
                              "parentId": 742,
                              "customId": 288,
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
                    "displayName": "Donation Type",
                    "title": "Details Grid",
                    "name": "DonationTypeGrid",
                    "itemId": "DonationTypeGrid",
                    "restURL": "/DonationType",
                    "store": [],
                    "bodyPadding": 10,
                    "columns": [{
                         "header": "donationTypeId",
                         "dataIndex": "donationTypeId",
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
                         "header": "Donation Type",
                         "dataIndex": "donationType",
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
               "viewModel": "DonationTypeViewModel",
               "xtype": "form",
               "displayName": "Donation Type",
               "title": "Donation Type",
               "name": "DonationType",
               "itemId": "DonationType",
               "bodyPadding": 10,
               "items": [{
                    "name": "donationTypeId",
                    "itemId": "donationTypeId",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "donationTypeId",
                    "margin": "5 5 5 5",
                    "fieldLabel": "donationTypeId<font color='red'> *<\/font>",
                    "fieldId": "7DC01ABA-298F-442A-B364-28BDC74FB9A6",
                    "minLength": "0",
                    "maxLength": "256",
                    "hidden": true,
                    "value": "",
                    "bindable": "donationTypeId",
                    "bind": "{donationTypeId}"
               }, {
                    "name": "donationType",
                    "itemId": "donationType",
                    "xtype": "textfield",
                    "customWidgetType": "vdTextfield",
                    "displayName": "Donation Type",
                    "margin": "5 5 5 5",
                    "fieldLabel": "Donation Type<font color='red'> *<\/font>",
                    "allowBlank": false,
                    "fieldId": "948D99D8-E211-4569-877E-694A8FA44E9B",
                    "minLength": "0",
                    "maxLength": "256",
                    "bindable": "donationType",
                    "bind": "{donationType}",
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
                    "fieldId": "5456BC5B-A9E3-48A8-8C54-0F6DF8383FA8",
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
                    "customId": 742,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill",
                         "parentId": 742,
                         "customId": 286
                    }, {
                         "customWidgetType": "vdButton",
                         "xtype": "button",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "parentId": 742,
                         "customId": 287,
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
                         "parentId": 742,
                         "customId": 288,
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