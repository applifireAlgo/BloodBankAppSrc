Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.RegisterACampMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "RegisterACampMainController",
     "restURL": "/RegisterACamp",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterACampModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.RegisterACampMainController", "Bloodbank.bloodbank.shared.com.model.location.AddressTypeModel", "Bloodbank.bloodbank.shared.com.model.location.CountryModel", "Bloodbank.bloodbank.shared.com.model.location.StateModel", "Bloodbank.bloodbank.shared.com.model.location.CityModel", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.RegisterACampViewModel"],
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
               "displayName": "Register A Camp",
               "name": "RegisterACampTreeContainer",
               "itemId": "RegisterACampTreeContainer",
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
                    "itemId": "RegisterACampTree",
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
                    "displayName": "Register A Camp",
                    "name": "RegisterACamp",
                    "itemId": "RegisterACampForm",
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
                                   "name": "registerACampId",
                                   "itemId": "registerACampId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "registerACampId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "registerACampId<font color='red'> *<\/font>",
                                   "fieldId": "A426D20A-AFA3-4535-B56D-9FFFA6A02A92",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "registerACampId",
                                   "bind": "{registerACampId}"
                              }, {
                                   "name": "organisationName",
                                   "itemId": "organisationName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Organisation Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Organisation Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "2228FAF5-AD34-49B9-A466-D4C5CE6CC44D",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "organisationName",
                                   "columnWidth": 0.5,
                                   "bind": "{organisationName}"
                              }, {
                                   "name": "reasonForCamp",
                                   "itemId": "reasonForCamp",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Reason For Camp",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Reason For Camp<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "C930B640-E6F0-4553-8187-20C151AB7C91",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "reasonForCamp",
                                   "columnWidth": 0.5,
                                   "bind": "{reasonForCamp}"
                              }, {
                                   "name": "bloodBankName",
                                   "itemId": "bloodBankName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Blood Bank Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Blood Bank Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "4DE905AB-D61B-41CB-97CE-3E1C68227594",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "bloodBankName",
                                   "columnWidth": 0.5,
                                   "bind": "{bloodBankName}"
                              }, {
                                   "name": "fromDate",
                                   "itemId": "fromDate",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "From Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "From Date<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "0FF52766-3367-4DC8-A1A8-2028E7F88D5D",
                                   "bindable": "fromDate",
                                   "columnWidth": 0.5,
                                   "bind": "{fromDate}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "toDate",
                                   "itemId": "toDate",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "toDate",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "toDate<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "E93BA63E-8BAB-4566-ACD2-1AB4B8B0D3C6",
                                   "bindable": "toDate",
                                   "columnWidth": 0.5,
                                   "bind": "{toDate}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "noOfDonorsExpected",
                                   "itemId": "noOfDonorsExpected",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "No Of Donors Expected",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "No Of Donors Expected<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "55A9D8B7-B55C-4C0F-B5D8-61B620FCD117",
                                   "minValue": "0",
                                   "maxValue": "2147483647",
                                   "bindable": "noOfDonorsExpected",
                                   "columnWidth": 0.5,
                                   "bind": "{noOfDonorsExpected}"
                              }, {
                                   "name": "noOfDonorsThatArrived",
                                   "itemId": "noOfDonorsThatArrived",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "No Of Donors That Arrived",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "No Of Donors That Arrived<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "26291BF3-3907-4491-8077-F9602B23AE0F",
                                   "minValue": "0",
                                   "maxValue": "1000000000",
                                   "bindable": "noOfDonorsThatArrived",
                                   "columnWidth": 0.5,
                                   "bind": "{noOfDonorsThatArrived}"
                              }, {
                                   "name": "noOfDonorsThatBled",
                                   "itemId": "noOfDonorsThatBled",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "No Of Donors That Bled",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "No Of Donors That Bled<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "40DA7BD2-728B-4268-9BC6-2368BE417EA5",
                                   "minValue": "0",
                                   "maxValue": "100000000",
                                   "bindable": "noOfDonorsThatBled",
                                   "columnWidth": 0.5,
                                   "bind": "{noOfDonorsThatBled}"
                              }, {
                                   "name": "campTime",
                                   "itemId": "campTime",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Camp Time",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Camp Time<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "5DE29F1B-46FB-4EEA-B156-E5E7F41F1333",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "campTime",
                                   "columnWidth": 0.5,
                                   "bind": "{campTime}"
                              }, {
                                   "name": "versionId",
                                   "itemId": "versionId",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "versionId",
                                   "margin": "5 5 5 5",
                                   "value": "-1",
                                   "fieldLabel": "versionId",
                                   "fieldId": "23AF9256-81F0-49C1-A427-1E0E2DB786AC",
                                   "bindable": "versionId",
                                   "bind": "{versionId}",
                                   "hidden": true
                              }]
                         }]
                    }, {
                         "xtype": "form",
                         "displayName": "Address",
                         "title": "Address",
                         "name": "Address",
                         "itemId": "AddressForm",
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
                                        "name": "addressTypeId",
                                        "itemId": "addressTypeId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Address Type",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address Type<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "DE5624A4-4C3B-4D85-85B0-04CC60895F2A",
                                        "errorMessage": "Please enter valid Address type",
                                        "restURL": "AddressType",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Bloodbank.bloodbank.shared.com.model.location.AddressTypeModel"
                                        },
                                        "bindable": "address.addressTypeId",
                                        "columnWidth": 0.5,
                                        "bind": "{address.addressTypeId}"
                                   }, {
                                        "name": "addressLabel",
                                        "itemId": "addressLabel",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Address Label",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address Label",
                                        "fieldId": "F3150CA1-8AA5-4440-87DD-2083FAFA3FE8",
                                        "minLength": "0",
                                        "maxLength": "11",
                                        "bindable": "address.addressLabel",
                                        "columnWidth": 0.5,
                                        "bind": "{address.addressLabel}"
                                   }, {
                                        "name": "address1",
                                        "itemId": "address1",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address1",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address1",
                                        "fieldId": "6CBB8C46-AA24-4417-8463-2129074C65B6",
                                        "bindable": "address.address1",
                                        "columnWidth": 0.5,
                                        "bind": "{address.address1}"
                                   }, {
                                        "name": "address2",
                                        "itemId": "address2",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address2",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address2",
                                        "fieldId": "1D3A3310-2655-4CD3-8EB5-11927965D399",
                                        "bindable": "address.address2",
                                        "columnWidth": 0.5,
                                        "bind": "{address.address2}"
                                   }, {
                                        "name": "address3",
                                        "itemId": "address3",
                                        "xtype": "textareafield",
                                        "customWidgetType": "vdTextareafield",
                                        "displayName": "Address3",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Address3",
                                        "fieldId": "FD8617AE-7F37-48D3-9341-BDB547118507",
                                        "bindable": "address.address3",
                                        "columnWidth": 0.5,
                                        "bind": "{address.address3}"
                                   }, {
                                        "name": "countryId",
                                        "itemId": "countryId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "Country",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Country<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "D4CE3357-CF74-4336-8E64-266AED84C510",
                                        "errorMessage": "Please enter Country",
                                        "restURL": "Country",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Bloodbank.bloodbank.shared.com.model.location.CountryModel"
                                        },
                                        "bindable": "address.countryId",
                                        "columnWidth": 0.5,
                                        "bind": "{address.countryId}",
                                        "listeners": {
                                             "change": "onCountryIdChange"
                                        }
                                   }, {
                                        "name": "stateId",
                                        "itemId": "stateId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "State",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "State<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "DBE447FE-6DCA-4AC9-A9B8-22B04C54B0C8",
                                        "errorMessage": "Please enter State",
                                        "restURL": "State",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Bloodbank.bloodbank.shared.com.model.location.StateModel"
                                        },
                                        "bindable": "address.stateId",
                                        "columnWidth": 0.5,
                                        "bind": "{address.stateId}",
                                        "listeners": {
                                             "change": "onStateIdChange"
                                        }
                                   }, {
                                        "name": "cityId",
                                        "itemId": "cityId",
                                        "xtype": "combo",
                                        "customWidgetType": "vdCombo",
                                        "displayName": "City",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "City<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "D8AD256A-B5DD-458B-80DD-3AF834B982C7",
                                        "errorMessage": "Please enter City",
                                        "restURL": "City",
                                        "displayField": "primaryDisplay",
                                        "valueField": "primaryKey",
                                        "typeAhead": true,
                                        "queryMode": "local",
                                        "minChars": 2,
                                        "store": {
                                             "data": [],
                                             "model": "Bloodbank.bloodbank.shared.com.model.location.CityModel"
                                        },
                                        "bindable": "address.cityId",
                                        "columnWidth": 0.5,
                                        "bind": "{address.cityId}"
                                   }, {
                                        "name": "zipcode",
                                        "itemId": "zipcode",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Postal Code",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Postal Code<font color='red'> *<\/font>",
                                        "allowBlank": false,
                                        "fieldId": "D81D270F-7924-4DFF-ABD3-BBA97BEC02F4",
                                        "minLength": "0",
                                        "maxLength": "6",
                                        "errorMessage": "Please enter postal code",
                                        "bindable": "address.zipcode",
                                        "columnWidth": 0.5,
                                        "bind": "{address.zipcode}"
                                   }, {
                                        "name": "latitude",
                                        "itemId": "latitude",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Latitude",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Latitude",
                                        "fieldId": "59CFC88C-8EFA-478D-BC18-9B88E2BB29BD",
                                        "minLength": "0",
                                        "maxLength": "64",
                                        "bindable": "address.latitude",
                                        "columnWidth": 0.5,
                                        "bind": "{address.latitude}"
                                   }, {
                                        "name": "longitude",
                                        "itemId": "longitude",
                                        "xtype": "textfield",
                                        "customWidgetType": "vdTextfield",
                                        "displayName": "Longitude",
                                        "margin": "5 5 5 5",
                                        "fieldLabel": "Longitude",
                                        "fieldId": "451B0AD2-EB74-4181-BD93-A5F2D16096BA",
                                        "minLength": "0",
                                        "maxLength": "64",
                                        "bindable": "address.longitude",
                                        "columnWidth": 0.5,
                                        "bind": "{address.longitude}"
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
                    "viewModel": "RegisterACampViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Register A Camp",
                    "title": "Details Grid",
                    "name": "RegisterACampGrid",
                    "itemId": "RegisterACampGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "registerACampId",
                         "dataIndex": "registerACampId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Organisation Name",
                         "dataIndex": "organisationName",
                         "flex": 1
                    }, {
                         "header": "Reason For Camp",
                         "dataIndex": "reasonForCamp",
                         "flex": 1
                    }, {
                         "header": "Blood Bank Name",
                         "dataIndex": "bloodBankName",
                         "flex": 1
                    }, {
                         "header": "From Date",
                         "dataIndex": "fromDate",
                         "flex": 1
                    }, {
                         "header": "toDate",
                         "dataIndex": "toDate",
                         "flex": 1
                    }, {
                         "header": "No Of Donors Expected",
                         "dataIndex": "noOfDonorsExpected",
                         "flex": 1
                    }, {
                         "header": "No Of Donors That Arrived",
                         "dataIndex": "noOfDonorsThatArrived",
                         "flex": 1
                    }, {
                         "header": "No Of Donors That Bled",
                         "dataIndex": "noOfDonorsThatBled",
                         "flex": 1
                    }, {
                         "header": "Camp Time",
                         "dataIndex": "campTime",
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
               "displayName": "Register A Camp",
               "name": "RegisterACamp",
               "itemId": "RegisterACampForm",
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
                              "name": "registerACampId",
                              "itemId": "registerACampId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "registerACampId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "registerACampId<font color='red'> *<\/font>",
                              "fieldId": "A426D20A-AFA3-4535-B56D-9FFFA6A02A92",
                              "hidden": true,
                              "value": "",
                              "bindable": "registerACampId",
                              "bind": "{registerACampId}"
                         }, {
                              "name": "organisationName",
                              "itemId": "organisationName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Organisation Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Organisation Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "2228FAF5-AD34-49B9-A466-D4C5CE6CC44D",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "organisationName",
                              "columnWidth": 0.5,
                              "bind": "{organisationName}"
                         }, {
                              "name": "reasonForCamp",
                              "itemId": "reasonForCamp",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Reason For Camp",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Reason For Camp<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "C930B640-E6F0-4553-8187-20C151AB7C91",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "reasonForCamp",
                              "columnWidth": 0.5,
                              "bind": "{reasonForCamp}"
                         }, {
                              "name": "bloodBankName",
                              "itemId": "bloodBankName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Blood Bank Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Blood Bank Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "4DE905AB-D61B-41CB-97CE-3E1C68227594",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "bloodBankName",
                              "columnWidth": 0.5,
                              "bind": "{bloodBankName}"
                         }, {
                              "name": "fromDate",
                              "itemId": "fromDate",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "From Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "From Date<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "0FF52766-3367-4DC8-A1A8-2028E7F88D5D",
                              "bindable": "fromDate",
                              "columnWidth": 0.5,
                              "bind": "{fromDate}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "toDate",
                              "itemId": "toDate",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "toDate",
                              "margin": "5 5 5 5",
                              "fieldLabel": "toDate<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "E93BA63E-8BAB-4566-ACD2-1AB4B8B0D3C6",
                              "bindable": "toDate",
                              "columnWidth": 0.5,
                              "bind": "{toDate}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "noOfDonorsExpected",
                              "itemId": "noOfDonorsExpected",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "No Of Donors Expected",
                              "margin": "5 5 5 5",
                              "fieldLabel": "No Of Donors Expected<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "55A9D8B7-B55C-4C0F-B5D8-61B620FCD117",
                              "minValue": "0",
                              "maxValue": "2147483647",
                              "bindable": "noOfDonorsExpected",
                              "columnWidth": 0.5,
                              "bind": "{noOfDonorsExpected}"
                         }, {
                              "name": "noOfDonorsThatArrived",
                              "itemId": "noOfDonorsThatArrived",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "No Of Donors That Arrived",
                              "margin": "5 5 5 5",
                              "fieldLabel": "No Of Donors That Arrived<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "26291BF3-3907-4491-8077-F9602B23AE0F",
                              "minValue": "0",
                              "maxValue": "1000000000",
                              "bindable": "noOfDonorsThatArrived",
                              "columnWidth": 0.5,
                              "bind": "{noOfDonorsThatArrived}"
                         }, {
                              "name": "noOfDonorsThatBled",
                              "itemId": "noOfDonorsThatBled",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "No Of Donors That Bled",
                              "margin": "5 5 5 5",
                              "fieldLabel": "No Of Donors That Bled<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "40DA7BD2-728B-4268-9BC6-2368BE417EA5",
                              "minValue": "0",
                              "maxValue": "100000000",
                              "bindable": "noOfDonorsThatBled",
                              "columnWidth": 0.5,
                              "bind": "{noOfDonorsThatBled}"
                         }, {
                              "name": "campTime",
                              "itemId": "campTime",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Camp Time",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Camp Time<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "5DE29F1B-46FB-4EEA-B156-E5E7F41F1333",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "campTime",
                              "columnWidth": 0.5,
                              "bind": "{campTime}"
                         }, {
                              "name": "versionId",
                              "itemId": "versionId",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "versionId",
                              "margin": "5 5 5 5",
                              "value": "-1",
                              "fieldLabel": "versionId",
                              "fieldId": "23AF9256-81F0-49C1-A427-1E0E2DB786AC",
                              "bindable": "versionId",
                              "bind": "{versionId}",
                              "hidden": true
                         }]
                    }]
               }, {
                    "xtype": "form",
                    "displayName": "Address",
                    "title": "Address",
                    "name": "Address",
                    "itemId": "AddressForm",
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
                                   "name": "addressTypeId",
                                   "itemId": "addressTypeId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Address Type",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address Type<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "DE5624A4-4C3B-4D85-85B0-04CC60895F2A",
                                   "errorMessage": "Please enter valid Address type",
                                   "restURL": "AddressType",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.location.AddressTypeModel"
                                   },
                                   "bindable": "address.addressTypeId",
                                   "columnWidth": 0.5,
                                   "bind": "{address.addressTypeId}"
                              }, {
                                   "name": "addressLabel",
                                   "itemId": "addressLabel",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Address Label",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address Label",
                                   "fieldId": "F3150CA1-8AA5-4440-87DD-2083FAFA3FE8",
                                   "minLength": "0",
                                   "maxLength": "11",
                                   "bindable": "address.addressLabel",
                                   "columnWidth": 0.5,
                                   "bind": "{address.addressLabel}"
                              }, {
                                   "name": "address1",
                                   "itemId": "address1",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "Address1",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address1",
                                   "fieldId": "6CBB8C46-AA24-4417-8463-2129074C65B6",
                                   "bindable": "address.address1",
                                   "columnWidth": 0.5,
                                   "bind": "{address.address1}"
                              }, {
                                   "name": "address2",
                                   "itemId": "address2",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "Address2",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address2",
                                   "fieldId": "1D3A3310-2655-4CD3-8EB5-11927965D399",
                                   "bindable": "address.address2",
                                   "columnWidth": 0.5,
                                   "bind": "{address.address2}"
                              }, {
                                   "name": "address3",
                                   "itemId": "address3",
                                   "xtype": "textareafield",
                                   "customWidgetType": "vdTextareafield",
                                   "displayName": "Address3",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Address3",
                                   "fieldId": "FD8617AE-7F37-48D3-9341-BDB547118507",
                                   "bindable": "address.address3",
                                   "columnWidth": 0.5,
                                   "bind": "{address.address3}"
                              }, {
                                   "name": "countryId",
                                   "itemId": "countryId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Country",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Country<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "D4CE3357-CF74-4336-8E64-266AED84C510",
                                   "errorMessage": "Please enter Country",
                                   "restURL": "Country",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.location.CountryModel"
                                   },
                                   "bindable": "address.countryId",
                                   "columnWidth": 0.5,
                                   "bind": "{address.countryId}",
                                   "listeners": {
                                        "change": "onCountryIdChange"
                                   }
                              }, {
                                   "name": "stateId",
                                   "itemId": "stateId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "State",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "State<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "DBE447FE-6DCA-4AC9-A9B8-22B04C54B0C8",
                                   "errorMessage": "Please enter State",
                                   "restURL": "State",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.location.StateModel"
                                   },
                                   "bindable": "address.stateId",
                                   "columnWidth": 0.5,
                                   "bind": "{address.stateId}",
                                   "listeners": {
                                        "change": "onStateIdChange"
                                   }
                              }, {
                                   "name": "cityId",
                                   "itemId": "cityId",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "City",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "City<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "D8AD256A-B5DD-458B-80DD-3AF834B982C7",
                                   "errorMessage": "Please enter City",
                                   "restURL": "City",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.location.CityModel"
                                   },
                                   "bindable": "address.cityId",
                                   "columnWidth": 0.5,
                                   "bind": "{address.cityId}"
                              }, {
                                   "name": "zipcode",
                                   "itemId": "zipcode",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Postal Code",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Postal Code<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "D81D270F-7924-4DFF-ABD3-BBA97BEC02F4",
                                   "minLength": "0",
                                   "maxLength": "6",
                                   "errorMessage": "Please enter postal code",
                                   "bindable": "address.zipcode",
                                   "columnWidth": 0.5,
                                   "bind": "{address.zipcode}"
                              }, {
                                   "name": "latitude",
                                   "itemId": "latitude",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Latitude",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Latitude",
                                   "fieldId": "59CFC88C-8EFA-478D-BC18-9B88E2BB29BD",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "bindable": "address.latitude",
                                   "columnWidth": 0.5,
                                   "bind": "{address.latitude}"
                              }, {
                                   "name": "longitude",
                                   "itemId": "longitude",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Longitude",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Longitude",
                                   "fieldId": "451B0AD2-EB74-4181-BD93-A5F2D16096BA",
                                   "minLength": "0",
                                   "maxLength": "64",
                                   "bindable": "address.longitude",
                                   "columnWidth": 0.5,
                                   "bind": "{address.longitude}"
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
               "viewModel": "RegisterACampViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});