Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.BloodRequestMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "BloodRequestMainController",
     "restURL": "/BloodRequest",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.BloodRequestModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.BloodRequestMainController", "Bloodbank.bloodbank.shared.com.model.bloodbank.BloodGroupModel", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.BloodRequestViewModel"],
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
               "displayName": "Blood Request",
               "name": "BloodRequestTreeContainer",
               "itemId": "BloodRequestTreeContainer",
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
                    "itemId": "BloodRequestTree",
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
                    "displayName": "Blood Request",
                    "name": "BloodRequest",
                    "itemId": "BloodRequestForm",
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
                                   "name": "bloodRequestId",
                                   "itemId": "bloodRequestId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "bloodRequestId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "bloodRequestId<font color='red'> *<\/font>",
                                   "fieldId": "D3AD2E9B-D58B-425C-958F-7626BD23DF3E",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "bloodRequestId",
                                   "bind": "{bloodRequestId}"
                              }, {
                                   "name": "noOfUnits",
                                   "itemId": "noOfUnits",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "No Of Units",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "No Of Units<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "923EBA1F-AE08-47C6-9E0F-B97D5E58E57D",
                                   "minValue": "0",
                                   "maxValue": "1000",
                                   "bindable": "noOfUnits",
                                   "columnWidth": 0.5,
                                   "bind": "{noOfUnits}"
                              }, {
                                   "name": "patientName",
                                   "itemId": "patientName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Patient Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Patient Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "5A9CE45F-8DD1-4A37-B918-F11C2CD120A7",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "patientName",
                                   "columnWidth": 0.5,
                                   "bind": "{patientName}"
                              }, {
                                   "name": "requestedByDoctor",
                                   "itemId": "requestedByDoctor",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Requested By Doctor",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Requested By Doctor<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "4179D5AD-74BA-48E4-A602-198538CA2C1F",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "requestedByDoctor",
                                   "columnWidth": 0.5,
                                   "bind": "{requestedByDoctor}"
                              }, {
                                   "name": "requestedByHospital",
                                   "itemId": "requestedByHospital",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Requested By Hospital",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Requested By Hospital<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "870F135A-2910-4AFF-ADA1-FC090528BD3F",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "requestedByHospital",
                                   "columnWidth": 0.5,
                                   "bind": "{requestedByHospital}"
                              }, {
                                   "name": "dateNeededBy",
                                   "itemId": "dateNeededBy",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Date Needed By",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Date Needed By<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "446605F1-4763-4E35-8162-0040255F4BCE",
                                   "bindable": "dateNeededBy",
                                   "columnWidth": 0.5,
                                   "bind": "{dateNeededBy}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "dispatchedToPatientOnDT",
                                   "itemId": "dispatchedToPatientOnDT",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Dispatched To Patient On DT",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Dispatched To Patient On DT<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "82D74E1C-AF22-4152-9F8E-495058BC96EB",
                                   "bindable": "dispatchedToPatientOnDT",
                                   "columnWidth": 0.5,
                                   "bind": "{dispatchedToPatientOnDT}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "bloodGroup",
                                   "itemId": "bloodGroup",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Blood Group",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "DBF1FD34-A7CD-4AFB-AF37-EECC761E71EE",
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
                                   "columnWidth": 0.5,
                                   "bind": "{bloodGroup}"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "A0C51392-0DB1-4840-924D-5EDC45F73435",
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
                    "viewModel": "BloodRequestViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Blood Request",
                    "title": "Details Grid",
                    "name": "BloodRequestGrid",
                    "itemId": "BloodRequestGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "bloodRequestId",
                         "dataIndex": "bloodRequestId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "No Of Units",
                         "dataIndex": "noOfUnits",
                         "flex": 1
                    }, {
                         "header": "Patient Name",
                         "dataIndex": "patientName",
                         "flex": 1
                    }, {
                         "header": "Requested By Doctor",
                         "dataIndex": "requestedByDoctor",
                         "flex": 1
                    }, {
                         "header": "Requested By Hospital",
                         "dataIndex": "requestedByHospital",
                         "flex": 1
                    }, {
                         "header": "Date Needed By",
                         "dataIndex": "dateNeededBy",
                         "flex": 1
                    }, {
                         "header": "Dispatched To Patient On DT",
                         "dataIndex": "dispatchedToPatientOnDT",
                         "flex": 1
                    }, {
                         "header": "Blood Group",
                         "dataIndex": "bloodGroup",
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
               "displayName": "Blood Request",
               "name": "BloodRequest",
               "itemId": "BloodRequestForm",
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
                              "name": "bloodRequestId",
                              "itemId": "bloodRequestId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "bloodRequestId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "bloodRequestId<font color='red'> *<\/font>",
                              "fieldId": "D3AD2E9B-D58B-425C-958F-7626BD23DF3E",
                              "hidden": true,
                              "value": "",
                              "bindable": "bloodRequestId",
                              "bind": "{bloodRequestId}"
                         }, {
                              "name": "noOfUnits",
                              "itemId": "noOfUnits",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "No Of Units",
                              "margin": "5 5 5 5",
                              "fieldLabel": "No Of Units<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "923EBA1F-AE08-47C6-9E0F-B97D5E58E57D",
                              "minValue": "0",
                              "maxValue": "1000",
                              "bindable": "noOfUnits",
                              "columnWidth": 0.5,
                              "bind": "{noOfUnits}"
                         }, {
                              "name": "patientName",
                              "itemId": "patientName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Patient Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Patient Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "5A9CE45F-8DD1-4A37-B918-F11C2CD120A7",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "patientName",
                              "columnWidth": 0.5,
                              "bind": "{patientName}"
                         }, {
                              "name": "requestedByDoctor",
                              "itemId": "requestedByDoctor",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Requested By Doctor",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Requested By Doctor<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "4179D5AD-74BA-48E4-A602-198538CA2C1F",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "requestedByDoctor",
                              "columnWidth": 0.5,
                              "bind": "{requestedByDoctor}"
                         }, {
                              "name": "requestedByHospital",
                              "itemId": "requestedByHospital",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Requested By Hospital",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Requested By Hospital<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "870F135A-2910-4AFF-ADA1-FC090528BD3F",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "requestedByHospital",
                              "columnWidth": 0.5,
                              "bind": "{requestedByHospital}"
                         }, {
                              "name": "dateNeededBy",
                              "itemId": "dateNeededBy",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Date Needed By",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Date Needed By<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "446605F1-4763-4E35-8162-0040255F4BCE",
                              "bindable": "dateNeededBy",
                              "columnWidth": 0.5,
                              "bind": "{dateNeededBy}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "dispatchedToPatientOnDT",
                              "itemId": "dispatchedToPatientOnDT",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Dispatched To Patient On DT",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Dispatched To Patient On DT<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "82D74E1C-AF22-4152-9F8E-495058BC96EB",
                              "bindable": "dispatchedToPatientOnDT",
                              "columnWidth": 0.5,
                              "bind": "{dispatchedToPatientOnDT}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "bloodGroup",
                              "itemId": "bloodGroup",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Blood Group",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "DBF1FD34-A7CD-4AFB-AF37-EECC761E71EE",
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
                              "columnWidth": 0.5,
                              "bind": "{bloodGroup}"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "A0C51392-0DB1-4840-924D-5EDC45F73435",
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
               "viewModel": "BloodRequestViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});