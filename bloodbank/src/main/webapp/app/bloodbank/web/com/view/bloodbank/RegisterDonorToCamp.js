Ext.define('Bloodbank.bloodbank.web.com.view.bloodbank.RegisterDonorToCamp', {
     "xtype": "registerDonorToCamp",
     "name": "reg",
     "items": [{
          "xtype": "combo",
          "name": "Donor",
          "margin": 5,
          "bindable": "Donor",
          "typeAhead": true,
          "queryMode": "local",
          "minChars": 1,
          "fieldLabel": "Donor",
          "displayField": "donorName",
          "valueField": "registerADonorId",
          "itemId": "dokpnhi",
          "store": {
               "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorModel",
               "autoLoad": true,
               "autoSync": true,
               "sorters": [{
                    "property": "donorName",
                    "direction": "ASC"
               }],
               "proxy": {
                    "type": "ajax",
                    "url": "secure/RegisterADonor/findAll",
                    "actionMethods": {
                         "read": "GET"
                    },
                    "headers": {
                         "Content-Type": "application/json"
                    },
                    "extraParams": {},
                    "reader": {
                         "type": "json",
                         "rootProperty": "response.data"
                    }
               }
          },
          "bind": "{Donor}"
     }, {
          "xtype": "combo",
          "name": "Camp",
          "margin": 5,
          "bindable": "Camp",
          "typeAhead": true,
          "queryMode": "local",
          "minChars": 1,
          "fieldLabel": "Camp",
          "displayField": "organisationName",
          "valueField": "registerACampId",
          "itemId": "hdkcdki",
          "store": {
               "model": "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterACampModel",
               "autoLoad": true,
               "autoSync": true,
               "sorters": [{
                    "property": "organisationName",
                    "direction": "ASC"
               }],
               "proxy": {
                    "type": "ajax",
                    "url": "secure/RegisterACamp/findAll",
                    "actionMethods": {
                         "read": "GET"
                    },
                    "headers": {
                         "Content-Type": "application/json"
                    },
                    "extraParams": {},
                    "reader": {
                         "type": "json",
                         "rootProperty": "response.data"
                    }
               }
          },
          "bind": "{Camp}"
     }],
     "margin": 5,
     "border": true,
     "autoScroll": true,
     "title": "Reg Donor To Camp",
     "itemId": "gcndpgi",
     "dockedItems": [{
          "xtype": "toolbar",
          "dock": "bottom",
          "ui": "footer",
          "isToolBar": true,
          "isDockedItem": true,
          "items": [{
               "xtype": "tbfill",
               "itemId": "edmbbei"
          }, {
               "xtype": "button",
               "text": "Submit",
               "isLinkBtn": true,
               "margin": 5,
               "name": "Submit",
               "itemId": "knegbci",
               "listeners": {
                    "click": "onSubmitclick"
               }
          }, {
               "xtype": "button",
               "text": "Reset",
               "isResetButton": true,
               "margin": 5,
               "name": "Reset",
               "itemId": "aihgagi",
               "listeners": {
                    "click": "onResetclick"
               }
          }],
          "itemId": "ggmibbi",
          "dockedItems": []
     }],
     "requires": ["Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterADonorModel", "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterACampModel", "Bloodbank.bloodbank.web.com.controller.bloodbank.RegisterDonorToCampController", "Bloodbank.bloodbank.shared.com.viewmodel.bloodbank.RegisterDonorToCampViewModel", "Bloodbank.bloodbank.shared.com.model.bloodbank.RegisterDonorToCampModel"],
     "extend": "Ext.panel.Panel",
     "viewModel": "RegisterDonorToCampViewModel",
     "controller": "RegisterDonorToCampController"
});