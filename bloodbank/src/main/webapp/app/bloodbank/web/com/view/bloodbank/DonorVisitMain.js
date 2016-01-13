Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.DonorVisitMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "DonorVisitMainController",
     "restURL": "/DonorVisit",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.DonorVisitModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.DonorVisitMainController", "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterACampModel", "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorModel", "Bloodbank.bloodbank.shared.com.model.bloodbank.DonationTypeModel", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.DonorVisitViewModel"],
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
               "displayName": "Donor Visit",
               "name": "DonorVisitTreeContainer",
               "itemId": "DonorVisitTreeContainer",
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
                    "itemId": "DonorVisitTree",
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
                    "items": [{
                         "name": "campId",
                         "itemId": "campId",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Camp",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Camp",
                         "fieldId": "8831896F-7946-4889-AD4A-D8B98A686484",
                         "restURL": "RegisterACamp",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterACampModel"
                         }
                    }, {
                         "name": "donor",
                         "itemId": "donor",
                         "xtype": "combo",
                         "customWidgetType": "vdCombo",
                         "displayName": "Donor",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Donor",
                         "fieldId": "9BC79B92-9743-4A22-A851-1B60E7146F4D",
                         "restURL": "RegisterADonor",
                         "displayField": "primaryDisplay",
                         "valueField": "primaryKey",
                         "typeAhead": true,
                         "queryMode": "local",
                         "minChars": 2,
                         "store": {
                              "data": [],
                              "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorModel"
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
                    "xtype": "form",
                    "displayName": "Donor Visit",
                    "name": "DonorVisit",
                    "itemId": "DonorVisitForm",
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
                                   "name": "donorVisitId",
                                   "itemId": "donorVisitId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "donorVisitId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "donorVisitId<font color='red'> *<\/font>",
                                   "fieldId": "A04274C7-0BCA-4061-9655-6F4DAA04EA8B",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "donorVisitId",
                                   "bind": "{donorVisitId}"
                              }, {
                                   "name": "orgnizerName",
                                   "itemId": "orgnizerName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Orgnizer Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Orgnizer Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "4112095D-3245-490F-8B07-934A4FA18AEA",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "orgnizerName",
                                   "columnWidth": 0.5,
                                   "bind": "{orgnizerName}"
                              }, {
                                   "name": "campId",
                                   "itemId": "campId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Camp",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Camp<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "8831896F-7946-4889-AD4A-D8B98A686484",
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
                                   "bindable": "campId",
                                   "columnWidth": 0.5,
                                   "bind": "{campId}"
                              }, {
                                   "name": "donor",
                                   "itemId": "donor",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Donor",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Donor<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "9BC79B92-9743-4A22-A851-1B60E7146F4D",
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
                                   "columnWidth": 0.5,
                                   "bind": "{donor}"
                              }, {
                                   "name": "donationType",
                                   "itemId": "donationType",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Donation Type",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Donation Type<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "AB31B6FD-E195-43BF-9B27-3DC0639D1332",
                                   "restURL": "DonationType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.DonationTypeModel"
                                   },
                                   "bindable": "donationType",
                                   "columnWidth": 0.5,
                                   "bind": "{donationType}"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "B8192B21-4D2A-4990-B8AD-40A4BCA1B713",
                                   "bindable": "versionId",
                                   "bind": "{versionId}",
                                   "hidden": true
                              }]
                         }]
                    }, {
                         "xtype": "form",
                         "displayName": "Clinical Info",
                         "title": "Clinical Info",
                         "name": "ClinicalInfo",
                         "itemId": "ClinicalInfoForm",
                         "bodyPadding": 10,
                         "items": [{
                              "xtype": "form",
                              "itemId": "form1",
                              "customWidgetType": "vdAnchorLayout",
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
                                        "name": "height",
                                        "itemId": "height",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Height",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Height<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "1BC190AC-AB3A-46B7-85FA-C96B8F14E89C",
                                        "minLength": "0",
                                        "bindable": "clinicalInfo.height",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.height}"
                                   }, {
                                        "name": "weight",
                                        "itemId": "weight",
                                        "xtype": "numberfield",
                                        "customWidgetType": "vdNumberfield",
                                        "displayName": "Weight",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Weight<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "28F9FF44-2A48-479B-B195-E7C1971CC12E",
                                        "minValue": "0",
                                        "bindable": "clinicalInfo.weight",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.weight}"
                                   }, {
                                        "name": "temperature",
                                        "itemId": "temperature",
                                        "xtype": "numberfield",
                                        "customWidgetType": "vdNumberfield",
                                        "displayName": "Temperature",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Temperature<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "E615D047-E7B1-4A75-9217-C2C096D0A0A8",
                                        "minValue": "-2147483648",
                                        "maxValue": "2147483647",
                                        "bindable": "clinicalInfo.temperature",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.temperature}"
                                   }, {
                                        "name": "bp",
                                        "itemId": "bp",
                                        "xtype": "numberfield",
                                        "customWidgetType": "vdNumberfield",
                                        "displayName": "BP",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "BP<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "1484E542-6C90-4C66-9FBF-1370D45965A8",
                                        "minValue": "-2147483648",
                                        "maxValue": "2147483647",
                                        "bindable": "clinicalInfo.bp",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.bp}"
                                   }, {
                                        "name": "pulse",
                                        "itemId": "pulse",
                                        "xtype": "numberfield",
                                        "customWidgetType": "vdNumberfield",
                                        "displayName": "pulse",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "pulse<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "0B597191-572C-44E4-B0EC-448BAE78048E",
                                        "minValue": "-2147483648",
                                        "maxValue": "2147483647",
                                        "bindable": "clinicalInfo.pulse",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.pulse}"
                                   }, {
                                        "name": "unitsOfBlood",
                                        "itemId": "unitsOfBlood",
                                        "xtype": "numberfield",
                                        "customWidgetType": "vdNumberfield",
                                        "displayName": "Units Of Blood",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Units Of Blood<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "6DD9FB73-DC75-410C-83EB-1061BAEBA26A",
                                        "minValue": "0",
                                        "maxValue": "100000",
                                        "bindable": "clinicalInfo.unitsOfBlood",
                                        "columnWidth": 0.5,
                                        "bind": "{clinicalInfo.unitsOfBlood}"
                                   }]
                              }]
                         }],
                         "customWidgetType": "vdCard"
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
                    }, {
                         "xtype": "toolbar",
                         "customWidgetType": "vdTBar",
                         "defaults": {
                              "margin": "0 5 0 5"
                         },
                         "isDockedItem": true,
                         "items": [{
                              "xtype": "tbfill",
                              "customWidgetType": "vdTbFill"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "itemId": "cardPrev",
                              "text": "&laquo; Previous",
                              "handler": "showPreviousCard",
                              "disabled": true,
                              "margin": "0 5 0 5"
                         }, {
                              "xtype": "button",
                              "customWidgetType": "vdButton",
                              "itemId": "cardNext",
                              "text": "Next &raquo;",
                              "handler": "showNextCard",
                              "margin": "0 5 0 5"
                         }]
                    }],
                    "viewModel": "DonorVisitViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Donor Visit",
                    "title": "Details Grid",
                    "name": "DonorVisitGrid",
                    "itemId": "DonorVisitGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "donorVisitId",
                         "dataIndex": "donorVisitId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Orgnizer Name",
                         "dataIndex": "orgnizerName",
                         "flex": 1
                    }, {
                         "header": "Camp",
                         "dataIndex": "campId",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Donor",
                         "dataIndex": "donor",
                         "renderer": "renderFormValue",
                         "flex": 1
                    }, {
                         "header": "Donation Type",
                         "dataIndex": "donationType",
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
               "displayName": "Donor Visit",
               "name": "DonorVisit",
               "itemId": "DonorVisitForm",
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
                              "name": "donorVisitId",
                              "itemId": "donorVisitId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "donorVisitId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "donorVisitId<font color='red'> *<\/font>",
                              "fieldId": "A04274C7-0BCA-4061-9655-6F4DAA04EA8B",
                              "hidden": true,
                              "value": "",
                              "bindable": "donorVisitId",
                              "bind": "{donorVisitId}"
                         }, {
                              "name": "orgnizerName",
                              "itemId": "orgnizerName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Orgnizer Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Orgnizer Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "4112095D-3245-490F-8B07-934A4FA18AEA",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "orgnizerName",
                              "columnWidth": 0.5,
                              "bind": "{orgnizerName}"
                         }, {
                              "name": "campId",
                              "itemId": "campId",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Camp",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Camp<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "8831896F-7946-4889-AD4A-D8B98A686484",
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
                              "bindable": "campId",
                              "columnWidth": 0.5,
                              "bind": "{campId}"
                         }, {
                              "name": "donor",
                              "itemId": "donor",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Donor",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Donor<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "9BC79B92-9743-4A22-A851-1B60E7146F4D",
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
                              "columnWidth": 0.5,
                              "bind": "{donor}"
                         }, {
                              "name": "donationType",
                              "itemId": "donationType",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Donation Type",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Donation Type<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "AB31B6FD-E195-43BF-9B27-3DC0639D1332",
                              "restURL": "DonationType",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.DonationTypeModel"
                              },
                              "bindable": "donationType",
                              "columnWidth": 0.5,
                              "bind": "{donationType}"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "B8192B21-4D2A-4990-B8AD-40A4BCA1B713",
                              "bindable": "versionId",
                              "bind": "{versionId}",
                              "hidden": true
                         }]
                    }]
               }, {
                    "xtype": "form",
                    "displayName": "Clinical Info",
                    "title": "Clinical Info",
                    "name": "ClinicalInfo",
                    "itemId": "ClinicalInfoForm",
                    "bodyPadding": 10,
                    "items": [{
                         "xtype": "form",
                         "itemId": "form1",
                         "customWidgetType": "vdAnchorLayout",
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
                                   "name": "height",
                                   "itemId": "height",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Height",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Height<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "1BC190AC-AB3A-46B7-85FA-C96B8F14E89C",
                                   "minLength": "0",
                                   "bindable": "clinicalInfo.height",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.height}"
                              }, {
                                   "name": "weight",
                                   "itemId": "weight",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Weight",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Weight<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "28F9FF44-2A48-479B-B195-E7C1971CC12E",
                                   "minValue": "0",
                                   "bindable": "clinicalInfo.weight",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.weight}"
                              }, {
                                   "name": "temperature",
                                   "itemId": "temperature",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Temperature",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Temperature<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "E615D047-E7B1-4A75-9217-C2C096D0A0A8",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "bindable": "clinicalInfo.temperature",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.temperature}"
                              }, {
                                   "name": "bp",
                                   "itemId": "bp",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "BP",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "BP<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "1484E542-6C90-4C66-9FBF-1370D45965A8",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "bindable": "clinicalInfo.bp",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.bp}"
                              }, {
                                   "name": "pulse",
                                   "itemId": "pulse",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "pulse",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "pulse<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "0B597191-572C-44E4-B0EC-448BAE78048E",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "bindable": "clinicalInfo.pulse",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.pulse}"
                              }, {
                                   "name": "unitsOfBlood",
                                   "itemId": "unitsOfBlood",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "Units Of Blood",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Units Of Blood<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "6DD9FB73-DC75-410C-83EB-1061BAEBA26A",
                                   "minValue": "0",
                                   "maxValue": "100000",
                                   "bindable": "clinicalInfo.unitsOfBlood",
                                   "columnWidth": 0.5,
                                   "bind": "{clinicalInfo.unitsOfBlood}"
                              }]
                         }]
                    }],
                    "customWidgetType": "vdCard"
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
               }, {
                    "xtype": "toolbar",
                    "customWidgetType": "vdTBar",
                    "defaults": {
                         "margin": "0 5 0 5"
                    },
                    "isDockedItem": true,
                    "items": [{
                         "xtype": "tbfill",
                         "customWidgetType": "vdTbFill"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "itemId": "cardPrev",
                         "text": "&laquo; Previous",
                         "handler": "showPreviousCard",
                         "disabled": true,
                         "margin": "0 5 0 5"
                    }, {
                         "xtype": "button",
                         "customWidgetType": "vdButton",
                         "itemId": "cardNext",
                         "text": "Next &raquo;",
                         "handler": "showNextCard",
                         "margin": "0 5 0 5"
                    }]
               }],
               "viewModel": "DonorVisitViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});