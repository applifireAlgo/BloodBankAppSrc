Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.BloodResultMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "BloodResultMainController",
     "restURL": "/BloodResult",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.BloodResultModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.BloodResultMainController", "Bloodbank.view.fw.component.FileUploadComponent", "Bloodbank.bloodbank.shared.com.model.bloodbank.DonorVisitModel", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.BloodResultViewModel"],
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
               "displayName": "Blood Result",
               "name": "BloodResultTreeContainer",
               "itemId": "BloodResultTreeContainer",
               "margin": "5 0 5 5",
               "autoScroll": false,
               "collapsible": true,
               "titleCollapse": true,
               "collapseMode": "header",
               "collapsed": false,
               "items": [{
                    "xtype": "treepanel",
                    "customWidgetType": "vdTree",
                    "useArrows": true,
                    "title": "Browse",
                    "rootVisible": false,
                    "itemId": "BloodResultTree",
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
                    "layout": "fit",
                    "autoScroll": false,
                    "itemId": "queryPanel",
                    "buttons": [{
                         "text": "Filter",
                         "handler": "onFilterClick"
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
                    "xtype": "form",
                    "displayName": "Blood Result",
                    "name": "BloodResult",
                    "itemId": "BloodResultForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form0",
                         "customWidgetType": "vdCard",
                         "header": {
                              "hidden": true
                         },
                         "items": [{
                              "layout": "column",
                              "customWidgetType": "vdColumnLayout",
                              "header": {
                                   "hidden": true
                              },
                              "xtype": "panel",
                              "items": [{
                                   "name": "bloodResultId",
                                   "itemId": "bloodResultId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "bloodResultId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "bloodResultId<font color='red'> *<\/font>",
                                   "fieldId": "CF25CF92-88DA-4AD3-B299-8B2F574AA618",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "bloodResultId",
                                   "bind": "{bloodResultId}"
                              }, {
                                   "name": "collectedDate",
                                   "itemId": "collectedDate",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Collected Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Collected Date<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "2661D275-711F-46B8-A777-71B1B64A7823",
                                   "bindable": "collectedDate",
                                   "columnWidth": 0.5,
                                   "bind": "{collectedDate}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "expirydate",
                                   "itemId": "expirydate",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Expiry Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Expiry Date<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "A7D2F4F7-49EF-469B-8A8E-88F1307A75D5",
                                   "bindable": "expirydate",
                                   "columnWidth": 0.5,
                                   "bind": "{expirydate}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "isTested",
                                   "itemId": "isTested",
                                   "xtype": "checkbox",
                                   "customWidgetType": "vdCheckbox",
                                   "displayName": "Is Tested",
                                   "margin": "5 5 5 5",
                                   "value": "0",
                                   "inputValue": true,
                                   "fieldLabel": "Is Tested<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C94E7AA5-45C6-4D9B-AB05-541EB413430F",
                                   "bindable": "isTested",
                                   "columnWidth": 0.5,
                                   "bind": "{isTested}"
                              }, {
                                   "name": "noOfUnits",
                                   "itemId": "noOfUnits",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "No Of Units",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "No Of Units<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "666B88EB-38ED-4205-960F-691E60744BA6",
                                   "minValue": "0",
                                   "maxValue": "1000",
                                   "bindable": "noOfUnits",
                                   "columnWidth": 0.5,
                                   "bind": "{noOfUnits}"
                              }, {
                                   "items": [{
                                        "name": "filePathHidden",
                                        "xtype": "hidden",
                                        "itemId": "filePathHidden",
                                        "bind": "{donor}"
                                   }, {
                                        "name": "donor",
                                        "itemId": "donor",
                                        "xtype": "fileupload",
                                        "customWidgetType": "vdFileUpload",
                                        "displayName": "Donor",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Donor",
                                        "fieldId": "F5C111CB-98A2-4C71-A58B-92E1560CEB58",
                                        "bindable": "donor",
                                        "columnWidth": 0.5
                                   }]
                              }, {
                                   "name": "donorVisit",
                                   "itemId": "donorVisit",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Donor Visit",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Donor Visit<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "0A04470A-BEF5-4793-BBA1-A81EEB27B00B",
                                   "restURL": "DonorVisit",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.DonorVisitModel"
                                   },
                                   "bindable": "donorVisit",
                                   "columnWidth": 0.5,
                                   "bind": "{donorVisit}"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "9692AA55-635B-484E-AA67-ED7A0FDC5907",
                                   "bindable": "versionId",
                                   "bind": "{versionId}",
                                   "hidden": true
                              }]
                         }]
                    }],
                    "tools": [{
                         "type": "help",
                         "tooltip": "Get Console",
                         "handler": "onConsoleClick"
                    }, {
                         "type": "refresh",
                         "tooltip": "Refresh Tab",
                         "handler": "init"
                    }],
                    "layout": "card",
                    "defaults": {
                         "autoScroll": true
                    },
                    "autoScroll": true,
                    "dockedItems": [{
                         "xtype ": "toolbar",
                         "customWidgetType": "vdBBar",
                         "dock": "bottom",
                         "margin": 0,
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Save",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "saveFormButton",
                              "listeners": {
                                   "click": "saveForm"
                              }
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "margin": "0 5 0 5",
                              "text": "Reset",
                              "hiddenName": "button",
                              "canHaveParent": false,
                              "itemId": "resetFormButton",
                              "listeners": {
                                   "click": "resetForm"
                              }
                         }],
                         "defaults": {
                              "margin": "0 5 0 5"
                         }
                    }],
                    "viewModel": "BloodResultViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Blood Result",
                    "title": "Details Grid",
                    "name": "BloodResultGrid",
                    "itemId": "BloodResultGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "bloodResultId",
                         "dataIndex": "bloodResultId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Collected Date",
                         "dataIndex": "collectedDate",
                         "flex": 1
                    }, {
                         "header": "Expiry Date",
                         "dataIndex": "expirydate",
                         "flex": 1
                    }, {
                         "header": "Is Tested",
                         "dataIndex": "isTested",
                         "flex": 1
                    }, {
                         "header": "No Of Units",
                         "dataIndex": "noOfUnits",
                         "flex": 1
                    }, {
                         "header": "Donor",
                         "dataIndex": "donor",
                         "flex": 1
                    }, {
                         "header": "Donor Visit",
                         "dataIndex": "donorVisit",
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
               "xtype": "form",
               "displayName": "Blood Result",
               "name": "BloodResult",
               "itemId": "BloodResultForm",
               "bodyPadding": 10,
               "items": [{
                    "xtype": "form",
                    "itemId": "form0",
                    "customWidgetType": "vdCard",
                    "header": {
                         "hidden": true
                    },
                    "items": [{
                         "layout": "column",
                         "customWidgetType": "vdColumnLayout",
                         "header": {
                              "hidden": true
                         },
                         "xtype": "panel",
                         "items": [{
                              "name": "bloodResultId",
                              "itemId": "bloodResultId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "bloodResultId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "bloodResultId<font color='red'> *<\/font>",
                              "fieldId": "CF25CF92-88DA-4AD3-B299-8B2F574AA618",
                              "hidden": true,
                              "value": "",
                              "bindable": "bloodResultId",
                              "bind": "{bloodResultId}"
                         }, {
                              "name": "collectedDate",
                              "itemId": "collectedDate",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Collected Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Collected Date<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "2661D275-711F-46B8-A777-71B1B64A7823",
                              "bindable": "collectedDate",
                              "columnWidth": 0.5,
                              "bind": "{collectedDate}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "expirydate",
                              "itemId": "expirydate",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Expiry Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Expiry Date<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "A7D2F4F7-49EF-469B-8A8E-88F1307A75D5",
                              "bindable": "expirydate",
                              "columnWidth": 0.5,
                              "bind": "{expirydate}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "isTested",
                              "itemId": "isTested",
                              "xtype": "checkbox",
                              "customWidgetType": "vdCheckbox",
                              "displayName": "Is Tested",
                              "margin": "5 5 5 5",
                              "value": "0",
                              "inputValue": true,
                              "fieldLabel": "Is Tested<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "C94E7AA5-45C6-4D9B-AB05-541EB413430F",
                              "bindable": "isTested",
                              "columnWidth": 0.5,
                              "bind": "{isTested}"
                         }, {
                              "name": "noOfUnits",
                              "itemId": "noOfUnits",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "No Of Units",
                              "margin": "5 5 5 5",
                              "fieldLabel": "No Of Units<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "666B88EB-38ED-4205-960F-691E60744BA6",
                              "minValue": "0",
                              "maxValue": "1000",
                              "bindable": "noOfUnits",
                              "columnWidth": 0.5,
                              "bind": "{noOfUnits}"
                         }, {
                              "items": [{
                                   "name": "filePathHidden",
                                   "xtype": "hidden",
                                   "itemId": "filePathHidden",
                                   "bind": "{donor}"
                              }, {
                                   "name": "donor",
                                   "itemId": "donor",
                                   "xtype": "fileupload",
                                   "customWidgetType": "vdFileUpload",
                                   "displayName": "Donor",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Donor",
                                   "fieldId": "F5C111CB-98A2-4C71-A58B-92E1560CEB58",
                                   "bindable": "donor",
                                   "columnWidth": 0.5
                              }]
                         }, {
                              "name": "donorVisit",
                              "itemId": "donorVisit",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Donor Visit",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Donor Visit<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "0A04470A-BEF5-4793-BBA1-A81EEB27B00B",
                              "restURL": "DonorVisit",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.DonorVisitModel"
                              },
                              "bindable": "donorVisit",
                              "columnWidth": 0.5,
                              "bind": "{donorVisit}"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "9692AA55-635B-484E-AA67-ED7A0FDC5907",
                              "bindable": "versionId",
                              "bind": "{versionId}",
                              "hidden": true
                         }]
                    }]
               }],
               "tools": [{
                    "type": "help",
                    "tooltip": "Get Console",
                    "handler": "onConsoleClick"
               }, {
                    "type": "refresh",
                    "tooltip": "Refresh Tab",
                    "handler": "init"
               }],
               "layout": "card",
               "defaults": {
                    "autoScroll": true
               },
               "autoScroll": true,
               "dockedItems": [{
                    "xtype ": "toolbar",
                    "customWidgetType": "vdBBar",
                    "dock": "bottom",
                    "margin": 0,
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Save",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "saveFormButton",
                         "listeners": {
                              "click": "saveForm"
                         }
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "margin": "0 5 0 5",
                         "text": "Reset",
                         "hiddenName": "button",
                         "canHaveParent": false,
                         "itemId": "resetFormButton",
                         "listeners": {
                              "click": "resetForm"
                         }
                    }],
                    "defaults": {
                         "margin": "0 5 0 5"
                    }
               }],
               "viewModel": "BloodResultViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});