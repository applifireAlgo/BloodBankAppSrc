Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.RegisterADonorMain', {
     "extend": "Ext.tab.Panel",
     "customWidgetType": "vdTabLayout",
     "autoScroll": false,
     "controller": "RegisterADonorMainController",
     "restURL": "/RegisterADonor",
     "defaults": {
          "split": true
     },
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.RegisterADonorMainController", "Bloodbank.bloodbank.shared.com.model.contacts.GenderModel", "Bloodbank.bloodbank.shared.com.model.bloodbank.BloodGroupModel", "Bloodbank.bloodbank.shared.com.model.location.AddressTypeModel", "Bloodbank.bloodbank.shared.com.model.location.CountryModel", "Bloodbank.bloodbank.shared.com.model.location.StateModel", "Bloodbank.bloodbank.shared.com.model.location.CityModel", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.RegisterADonorViewModel"],
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
               "displayName": "Register A Donor",
               "name": "RegisterADonorTreeContainer",
               "itemId": "RegisterADonorTreeContainer",
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
                    "itemId": "RegisterADonorTree",
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
                         "name": "donorName",
                         "itemId": "donorName",
                         "xtype": "textfield",
                         "customWidgetType": "vdTextfield",
                         "displayName": "Donor Name",
                         "margin": "5 5 5 5",
                         "fieldLabel": "Donor Name",
                         "fieldId": "B1968BF5-8392-426E-8C01-BB3016CF06D2",
                         "minLength": "0",
                         "maxLength": "256"
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
                    "displayName": "Register A Donor",
                    "name": "RegisterADonor",
                    "itemId": "RegisterADonorForm",
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
                                   "name": "registerADonorId",
                                   "itemId": "registerADonorId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "registerADonorId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "registerADonorId<font color='red'> *<\/font>",
                                   "fieldId": "2E858C07-96A1-4B12-8DA5-1C8B196A3219",
                                   "hidden": true,
                                   "value": "",
                                   "bindable": "registerADonorId",
                                   "bind": "{registerADonorId}"
                              }, {
                                   "name": "donorName",
                                   "itemId": "donorName",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Donor Name",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Donor Name<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "B1968BF5-8392-426E-8C01-BB3016CF06D2",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "donorName",
                                   "columnWidth": 0.5,
                                   "bind": "{donorName}"
                              }, {
                                   "name": "dateOfBirth",
                                   "itemId": "dateOfBirth",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Date Of Birth",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Date Of Birth<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "7E2DB4B9-A754-4268-AB8A-3F9A8E20FAA6",
                                   "bindable": "dateOfBirth",
                                   "columnWidth": 0.5,
                                   "bind": "{dateOfBirth}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "phoneNo",
                                   "itemId": "phoneNo",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "Phone No.",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Phone No.<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "26B6076D-3846-4350-BD98-EF147015E0DD",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "phoneNo",
                                   "columnWidth": 0.5,
                                   "bind": "{phoneNo}"
                              }, {
                                   "name": "emailId",
                                   "itemId": "emailId",
                                   "xtype": "textfield",
                                   "customWidgetType": "vdTextfield",
                                   "displayName": "EmailId",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "EmailId<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "BA2F577B-B6FD-4D0A-891E-2E6B9C1A4E3C",
                                   "minLength": "0",
                                   "maxLength": "256",
                                   "bindable": "emailId",
                                   "columnWidth": 0.5,
                                   "bind": "{emailId}"
                              }, {
                                   "name": "lastDonationDate",
                                   "itemId": "lastDonationDate",
                                   "xtype": "datefield",
                                   "customWidgetType": "vdDatefield",
                                   "displayName": "Last Donation Date",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Last Donation Date<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "6957954C-6005-4ABB-B385-A25983816CA8",
                                   "bindable": "lastDonationDate",
                                   "columnWidth": 0.5,
                                   "bind": "{lastDonationDate}",
                                   "format": "d-m-Y H:m:s",
                                   "submitFormat": "d-m-Y H:m:s"
                              }, {
                                   "name": "howoftenyoudonatedinpast",
                                   "itemId": "howoftenyoudonatedinpast",
                                   "xtype": "numberfield",
                                   "customWidgetType": "vdNumberfield",
                                   "displayName": "How often you have donated in past",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "How often you have donated in past<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "756A5745-5ADF-4068-AA1F-2C254EE0E97D",
                                   "minValue": "-2147483648",
                                   "maxValue": "2147483647",
                                   "bindable": "howoftenyoudonatedinpast",
                                   "columnWidth": 0.5,
                                   "bind": "{howoftenyoudonatedinpast}"
                              }, {
                                   "name": "gender",
                                   "itemId": "gender",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Gender",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Gender<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "2392677A-47F4-4D23-ADF7-005F4D9EFEB0",
                                   "restURL": "Gender",
                                   "displayField": "primaryDisplay",
                                   "valueField": "primaryKey",
                                   "typeAhead": true,
                                   "queryMode": "local",
                                   "minChars": 2,
                                   "store": {
                                        "data": [],
                                        "model": "Bloodbank.bloodbank.shared.com.model.contacts.GenderModel"
                                   },
                                   "bindable": "gender",
                                   "columnWidth": 0.5,
                                   "bind": "{gender}"
                              }, {
                                   "name": "bloodGroup",
                                   "itemId": "bloodGroup",
                                   "xtype": "combo",
                                   "customWidgetType": "vdCombo",
                                   "displayName": "Blood Group",
                                   "margin": "5 5 5 5",
                                   "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                                   "allowBlank": false,
                                   "fieldId": "6C5D9A40-8831-4375-8900-3F95CFA73763",
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
                                   "fieldId": "B475E89A-A630-4E9E-BDDE-B1FC803602E1",
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
                    "viewModel": "RegisterADonorViewModel",
                    "listeners": {},
                    "extend": "Ext.form.Panel",
                    "region": "center",
                    "customWidgetType": "vdCardLayout"
               }, {
                    "xtype": "grid",
                    "customWidgetType": "vdGrid",
                    "displayName": "Register A Donor",
                    "title": "Details Grid",
                    "name": "RegisterADonorGrid",
                    "itemId": "RegisterADonorGrid",
                    "store": [],
                    "bodyPadding": 10,
                    "requires": [],
                    "columns": [{
                         "header": "registerADonorId",
                         "dataIndex": "registerADonorId",
                         "hidden": true,
                         "flex": 1
                    }, {
                         "header": "primaryKey",
                         "dataIndex": "primaryKey",
                         "hidden": true
                    }, {
                         "header": "Donor Name",
                         "dataIndex": "donorName",
                         "flex": 1
                    }, {
                         "header": "Date Of Birth",
                         "dataIndex": "dateOfBirth",
                         "flex": 1
                    }, {
                         "header": "Phone No.",
                         "dataIndex": "phoneNo",
                         "flex": 1
                    }, {
                         "header": "EmailId",
                         "dataIndex": "emailId",
                         "flex": 1
                    }, {
                         "header": "Last Donation Date",
                         "dataIndex": "lastDonationDate",
                         "flex": 1
                    }, {
                         "header": "How often you have donated in past",
                         "dataIndex": "howoftenyoudonatedinpast",
                         "flex": 1
                    }, {
                         "header": "Gender",
                         "dataIndex": "gender",
                         "renderer": "renderFormValue",
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
               "displayName": "Register A Donor",
               "name": "RegisterADonor",
               "itemId": "RegisterADonorForm",
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
                              "name": "registerADonorId",
                              "itemId": "registerADonorId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "registerADonorId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "registerADonorId<font color='red'> *<\/font>",
                              "fieldId": "2E858C07-96A1-4B12-8DA5-1C8B196A3219",
                              "hidden": true,
                              "value": "",
                              "bindable": "registerADonorId",
                              "bind": "{registerADonorId}"
                         }, {
                              "name": "donorName",
                              "itemId": "donorName",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Donor Name",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Donor Name<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "B1968BF5-8392-426E-8C01-BB3016CF06D2",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "donorName",
                              "columnWidth": 0.5,
                              "bind": "{donorName}"
                         }, {
                              "name": "dateOfBirth",
                              "itemId": "dateOfBirth",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Date Of Birth",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Date Of Birth<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "7E2DB4B9-A754-4268-AB8A-3F9A8E20FAA6",
                              "bindable": "dateOfBirth",
                              "columnWidth": 0.5,
                              "bind": "{dateOfBirth}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "phoneNo",
                              "itemId": "phoneNo",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "Phone No.",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Phone No.<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "26B6076D-3846-4350-BD98-EF147015E0DD",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "phoneNo",
                              "columnWidth": 0.5,
                              "bind": "{phoneNo}"
                         }, {
                              "name": "emailId",
                              "itemId": "emailId",
                              "xtype": "textfield",
                              "customWidgetType": "vdTextfield",
                              "displayName": "EmailId",
                              "margin": "5 5 5 5",
                              "fieldLabel": "EmailId<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "BA2F577B-B6FD-4D0A-891E-2E6B9C1A4E3C",
                              "minLength": "0",
                              "maxLength": "256",
                              "bindable": "emailId",
                              "columnWidth": 0.5,
                              "bind": "{emailId}"
                         }, {
                              "name": "lastDonationDate",
                              "itemId": "lastDonationDate",
                              "xtype": "datefield",
                              "customWidgetType": "vdDatefield",
                              "displayName": "Last Donation Date",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Last Donation Date<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "6957954C-6005-4ABB-B385-A25983816CA8",
                              "bindable": "lastDonationDate",
                              "columnWidth": 0.5,
                              "bind": "{lastDonationDate}",
                              "format": "d-m-Y H:m:s",
                              "submitFormat": "d-m-Y H:m:s"
                         }, {
                              "name": "howoftenyoudonatedinpast",
                              "itemId": "howoftenyoudonatedinpast",
                              "xtype": "numberfield",
                              "customWidgetType": "vdNumberfield",
                              "displayName": "How often you have donated in past",
                              "margin": "5 5 5 5",
                              "fieldLabel": "How often you have donated in past<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "756A5745-5ADF-4068-AA1F-2C254EE0E97D",
                              "minValue": "-2147483648",
                              "maxValue": "2147483647",
                              "bindable": "howoftenyoudonatedinpast",
                              "columnWidth": 0.5,
                              "bind": "{howoftenyoudonatedinpast}"
                         }, {
                              "name": "gender",
                              "itemId": "gender",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Gender",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Gender<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "2392677A-47F4-4D23-ADF7-005F4D9EFEB0",
                              "restURL": "Gender",
                              "displayField": "primaryDisplay",
                              "valueField": "primaryKey",
                              "typeAhead": true,
                              "queryMode": "local",
                              "minChars": 2,
                              "store": {
                                   "data": [],
                                   "model": "Bloodbank.bloodbank.shared.com.model.contacts.GenderModel"
                              },
                              "bindable": "gender",
                              "columnWidth": 0.5,
                              "bind": "{gender}"
                         }, {
                              "name": "bloodGroup",
                              "itemId": "bloodGroup",
                              "xtype": "combo",
                              "customWidgetType": "vdCombo",
                              "displayName": "Blood Group",
                              "margin": "5 5 5 5",
                              "fieldLabel": "Blood Group<font color='red'> *<\/font>",
                              "allowBlank": false,
                              "fieldId": "6C5D9A40-8831-4375-8900-3F95CFA73763",
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
                              "fieldId": "B475E89A-A630-4E9E-BDDE-B1FC803602E1",
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
               "viewModel": "RegisterADonorViewModel",
               "listeners": {},
               "extend": "Ext.form.Panel",
               "region": "center",
               "customWidgetType": "vdCardLayout"
          }]
     }]
});